# Deploying widgeta.app on AWS

`dist/` is 68 HTML files and their assets. Nothing here needs a server, a
database or a runtime — but AWS is the one host family that needs to be told
two things the others infer.

**What AWS does not do on its own:**

1. **Extensionless URLs.** The build emits `pricing.html`; every link,
   canonical tag and sitemap entry says `/pricing`. Cloudflare Pages and
   Netlify resolve that themselves. CloudFront does not, so without the
   rewrite in `url-rewrite.js` every page except the home page is a 404.
2. **`_headers` and `_redirects`.** Those two files in `dist/` are Cloudflare
   and Netlify instruction files. AWS ignores them completely. Their contents
   are re-expressed here: the header rules in `response-headers-policy.json`,
   the URL rules in `url-rewrite.js`. `deploy.sh` keeps both files out of the
   bucket, because on S3 they would not be configuration — they would be two
   public URLs.

Two ways to host it. The first is more setup and more control; the second is
about fifteen minutes and gives up the CloudFront Function.

---

## Option A — S3 + CloudFront (recommended)

### 1. Bucket

```
aws s3api create-bucket --bucket widgeta-site --region me-central-1
```

Block all public access and leave it blocked. CloudFront reads the bucket
through Origin Access Control, so the bucket itself never needs to be public.
Do **not** enable S3 static website hosting — that mode cannot be used with
OAC, and its own index-document handling would fight the rewrite function.

### 2. Certificate

ACM, **in `us-east-1`**, regardless of where the bucket is. CloudFront reads
certificates only from that region; a certificate issued in
`me-central-1` will not appear in the distribution's dropdown.

```
aws acm request-certificate --region us-east-1 \
  --domain-name widgeta.app --validation-method DNS
```

`app.widgeta.app` is a separate deployment and is not covered here. Do not
request a wildcard for it out of convenience — it would tie two independent
deployments to one certificate renewal.

### 3. The rewrite function

```
aws cloudfront create-function \
  --name widgeta-url-rewrite \
  --function-config Comment="extensionless URLs",Runtime=cloudfront-js-2.0 \
  --function-code fileb://url-rewrite.js
```

Test it, publish it, then attach it to the distribution's **default cache
behaviour** as a **viewer request** function.

Worth testing before publishing — `create-function` gives you a test harness,
and these four cases cover the whole rule:

| Request | Expected |
|---|---|
| `/` | serves `/index.html` |
| `/pricing` | serves `/pricing.html` |
| `/ar/for/plumbing` | serves `/ar/for/plumbing.html` |
| `/pricing/` | 301 to `/pricing` |

The function has been run against every file in a real build — all 68 page
URLs resolve to their file, all 22 assets pass through untouched, and the
three redirect cases return 301. The only two paths it would mangle are
`_headers` and `_redirects`, which `deploy.sh` never uploads.

### 4. Headers

```
aws cloudfront create-response-headers-policy \
  --response-headers-policy-config file://response-headers-policy.json
```

Attach it to the default cache behaviour.

This carries the four headers from `_headers` — `nosniff`, `DENY`,
`strict-origin-when-cross-origin`, and the `Permissions-Policy` — plus one
that was not there: HSTS, two years, **`includeSubdomains` off**. It is off
deliberately. Turning it on from here would force HTTPS on
`app.widgeta.app` too, and that is the application team's decision to make,
not this repo's.

Cache-Control is deliberately **not** in the policy. It differs per file, so
`deploy.sh` writes it onto each object at upload.

### 5. Distribution

- Origin: the S3 bucket, via Origin Access Control (create one; AWS gives you
  the bucket policy to paste back).
- Default root object: leave **empty**. The function handles `/`.
- Viewer protocol policy: redirect HTTP to HTTPS.
- Compress objects automatically: on.
- Alternate domain name: `widgeta.app`, with the `us-east-1` certificate.
- Custom error response: **404 → `/404.html`, response code 404.** Keep the
  code as 404. Returning 200 for a missing page tells Google the page exists,
  and the site would start accumulating soft-404s.

### 6. Deploy

```
WIDGETA_BUCKET=widgeta-site \
WIDGETA_DISTRIBUTION_ID=E1234567890ABC \
./deploy/aws/deploy.sh
```

Run it from `frontend/` after `npm ci && npm run build`.

### 7. DNS

An **ALIAS/A** record for `widgeta.app` pointing at the distribution — not a
CNAME. A CNAME cannot live on an apex domain. In Route 53 that is an A record
with "Alias" on; on another DNS provider it is whatever they call ALIAS or
ANAME.

Leave `app.widgeta.app` alone.

---

## Option B — AWS Amplify Hosting

Amplify runs the build itself and needs no bucket, no function and no
distribution.

**Build settings**

| Setting | Value |
|---|---|
| Monorepo app root | `frontend` |
| Build command | `npm ci && npm run build` |
| Output directory | `dist` |
| Node version | 22 |

**One config change is required.** Amplify has no CloudFront Function, and its
rewrite syntax cannot append `.html` to an arbitrary path. So on this path,
change one line in `astro.config.mjs`:

```js
build: {
  format: 'directory',   // was: 'file'
}
```

That emits `pricing/index.html` instead of `pricing.html`, which Amplify
resolves from `/pricing` with no rules at all. Verified against a real build:
the canonical tags still read `https://widgeta.app/pricing` and every internal
link is still extensionless, because `trailingSlash: 'never'` governs the URLs
independently of the file layout. Nothing else in the site changes — same 68
pages, same URLs, same sitemaps.

Add one rule in the console under *Rewrites and redirects* for the 404:

```json
[
  { "source": "/<*>", "target": "/404.html", "status": "404" }
]
```

**Headers** — Amplify takes them in the console under *Custom headers*, or
from `customHeaders` in an `amplify.yml` at the app root. The values are the
ones in `response-headers-policy.json`.

Amplify sets its own Cache-Control, which is close enough to right for a
static site. `deploy.sh` is not used on this path.

---

## After the first deploy, either way

1. Check `https://widgeta.app/ar/for/plumbing` before anything else. If the
   extensionless rewrite is wrong, that URL is where it shows first, and the
   home page will look fine while 67 pages are broken.
2. Submit `https://widgeta.app/sitemap-index.xml` in Search Console.
3. Add a second Search Console property for the `/ar` prefix and submit
   `https://widgeta.app/sitemap-ar.xml` to it. Two sitemaps on purpose —
   indexation can then be read per language rather than as one mixed number.
   Both are listed in `robots.txt`.
4. `robots.txt` disallows `/privacy`, `/terms`, `/ar/privacy` and `/ar/terms`
   — those four are drafts. That is intended and stays until the real text
   arrives.
