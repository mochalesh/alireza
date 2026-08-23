# widgeta.app — marketing site

Static site for widgeta.app. English now; Arabic (`/ar`) is planned and every
link to it stays off until it exists.

The application lives at `app.widgeta.app` and is a separate deployment —
keeping them apart is what keeps the analytics clean.

## Running it

Node 22.

```
npm ci
npm run dev      # http://localhost:4321
npm run build    # → dist/
npm run preview  # serve dist/ locally
```

## Deploying

`dist/` is a folder of files. Any static host serves it; nothing here needs a
server, a database or a runtime.

**Build command:** `npm ci && npm run build`
**Output directory:** `frontend/dist`
**Node version:** 22

On Cloudflare Pages or Netlify that is the whole configuration — both read the
`_headers` and `_redirects` files in `public/` and resolve `/pricing` to
`pricing.html` on their own.

On plain nginx, the extensionless URLs need one line:

```nginx
location / {
  try_files $uri $uri.html $uri/ /404.html;
}
```

### After the first deploy

1. Point `widgeta.app` at the host. Keep `app.widgeta.app` separate.
2. Add the property in Search Console and submit
   `https://widgeta.app/sitemap-index.xml`.
3. When the Arabic site ships, add a second Search Console property for the
   `/ar` folder — the SEO spec asks for one per language.

## What still needs real values

These are the only things standing between this site and a truthful launch.
Each is a single edit, and the file is named so nobody has to hunt.

| What | Where | Why it matters |
|---|---|---|
| Signup URL | `src/data/site.js` → `PRIMARY_CTA` | Every CTA points at `app.widgeta.app/signup`, which is an assumption. |
| Email capture endpoint | `src/components/NotifyMe.astro`, `src/pages/pricing.astro` | The notify-me forms show a success message without sending the address anywhere. |
| Real price | `src/data/site.js` → `PRICE` | $99 and 399 SAR are the brief's placeholders. Changing them here changes every page, including copy that quotes the figure mid-sentence. |
| Contact details | `src/data/company.js` → `CONTACT` | Placeholder email, phone and WhatsApp. |
| Real team | `src/data/company.js` → `TEAM`, then `PLACEHOLDER = false` | Turns off the "placeholder team" notices on About and Contact together. |
| Privacy and Terms | `src/pages/privacy.astro`, `src/pages/terms.astro` | Both are drafts and say so. They need real text from Widgeta's counsel. |
| Photographs | testimonial and team cards | Dashed placeholders today. The SEO spec wants real faces; a stock photo of a stranger presented as a named customer is not one. |

## How the site is put together

**Content is data.** `src/data/` holds the copy — trades, comparisons,
capabilities, examples, the company. Templates are structure. Changing a
headline means editing a data file, not hunting through markup.

**Nothing links to a page that does not exist.** Every list in
`src/data/site.js` carries a `built` flag, and the header, footer, hubs and
comparison pages all filter on it. Shipping a page is flipping one flag, and
every link to it turns on at once. That is why the footer grew a Compare
column only when comparisons existed, and why the language chip is still
hidden.

**The price is a variable.** Copy that quotes the figure mid-sentence carries
a `{{PRICE}}` token, resolved at render from `PRICE`. No `$99` is typed into
any sentence.

**Logical CSS properties only.** No `margin-left`, no `left:`, no shorthand
that would not mirror. The Arabic site is this same stylesheet with
`dir="rtl"`, and a physical property is a bug waiting for that day.

**Disclosures are load-bearing.** SAMPLE labels, the testimonial disclosure,
the coming-soon treatment on call answering, and the source note under every
competitor claim are legal and trust requirements, not decoration. The brief
lists each as non-negotiable and records that each has been fixed once
already.

## Measured, not assumed

Taken from the built output in a real browser, at 1440px and 390px, across
all 18 pages.

- One `<h1>` per page, no heading-level skips.
- Schema on every page: Organization + WebSite + SoftwareApplication +
  FAQPage on home; Service + BreadcrumbList + FAQPage on the trade hubs;
  SoftwareApplication with offers + FAQPage on pricing; BreadcrumbList +
  FAQPage on comparisons; Service + BreadcrumbList on capabilities.
- No `aggregateRating` anywhere — there are no real reviews yet.
- Titles 42–60 characters, descriptions 130–153.
- Canonical on every page; `hreflang` only where a true equivalent exists,
  which today means x-default alone.
- No touch target under 44px.
- Every focusable element has a visible focus ring — 43 of them on home.
- No horizontal overflow at either width.
- No dead internal links.
- No console errors.
- On a throttled phone (1.5 Mbps, 150ms RTT, 4× CPU slowdown): LCP
  790–910ms, CLS 0.013–0.035, 118–182KB per page, and **zero third-party
  requests** — no analytics, no CDN, no font host.
