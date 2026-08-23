#!/usr/bin/env bash
#
# Upload dist/ to S3 and invalidate CloudFront.
#
# Two classes of file, and they need opposite caching. Hashed assets under
# /_astro/ never change under the same name, so they are cached for a year and
# never revalidated. HTML changes under the same URL on every deploy, so it is
# revalidated every time — a stale page here would show an old price.
#
# On Cloudflare Pages and Netlify that split comes from the _headers file.
# S3 has no such file, so the Cache-Control has to be written onto each object
# as it is uploaded. That is the whole reason this script exists rather than
# one `aws s3 sync`.
#
#   WIDGETA_BUCKET=widgeta-site \
#   WIDGETA_DISTRIBUTION_ID=E1234567890ABC \
#   ./deploy/aws/deploy.sh
#
set -euo pipefail

BUCKET="${WIDGETA_BUCKET:?set WIDGETA_BUCKET to the S3 bucket name}"
DISTRIBUTION="${WIDGETA_DISTRIBUTION_ID:?set WIDGETA_DISTRIBUTION_ID}"

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/../.." && pwd)"
DIST="$ROOT/dist"

[ -f "$DIST/index.html" ] || { echo "No build in $DIST — run npm ci && npm run build first." >&2; exit 1; }

# _headers and _redirects are Cloudflare/Netlify instruction files. On S3 they
# are not configuration, they are two public URLs that leak the config. They
# stay out of the bucket, and their contents live in this folder instead:
# the header rules in response-headers-policy.json, the URL rules in
# url-rewrite.js.
COMMON=(--delete --exclude '_headers' --exclude '_redirects')

echo "→ HTML and everything else (revalidate every request)"
aws s3 sync "$DIST/" "s3://$BUCKET/" "${COMMON[@]}" \
  --exclude '_astro/*' \
  --exclude 'fonts/*' \
  --exclude 'og-default.png' \
  --exclude 'og-ar.png' \
  --exclude 'favicon.svg' \
  --cache-control 'public, max-age=0, must-revalidate'

echo "→ Hashed build assets (immutable, one year)"
aws s3 sync "$DIST/_astro/" "s3://$BUCKET/_astro/" --delete \
  --cache-control 'public, max-age=31536000, immutable'

# The fonts are self-hosted under stable names rather than hashed ones,
# because a hashed name cannot be preloaded. Stable name means a shorter
# cache: a year would pin a bad font file for a year.
echo "→ Fonts (stable names, one week)"
aws s3 sync "$DIST/fonts/" "s3://$BUCKET/fonts/" --delete \
  --cache-control 'public, max-age=604800'

echo "→ Social images and favicon (one day)"
for f in og-default.png og-ar.png favicon.svg; do
  aws s3 cp "$DIST/$f" "s3://$BUCKET/$f" --cache-control 'public, max-age=86400'
done

# One wildcard. CloudFront accepts `*` only as the last character of a path,
# so there is no way to write "every .html" — and no need to: a wildcard
# counts as a single path against the monthly allowance however much it
# matches. /_astro/ gets swept up in it and re-fetched once, which costs
# nothing, because those files are content-hashed and small.
echo "→ Invalidating the edge caches"
aws cloudfront create-invalidation \
  --distribution-id "$DISTRIBUTION" \
  --paths '/*' \
  --query 'Invalidation.Id' --output text

echo "Done."
