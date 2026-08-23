/**
 * The Arabic sitemap.
 *
 * The SEO spec asks for two sitemaps rather than one — an English file and an
 * Arabic file — so that Search Console can report indexation per language
 * instead of mixing both into a single number. The sitemap integration emits
 * one set of files and cannot be told to split them, so it is scoped to the
 * English tree (see `astro.config.mjs`) and the Arabic half is written here.
 *
 * The list comes from the same registry the Arabic pages are generated from:
 * `getStaticPaths` filters on `built`, and so does this. A page and its
 * sitemap entry therefore cannot disagree — flipping one flag adds the page,
 * the navigation link and the sitemap line together.
 *
 * Both files are listed in robots.txt, and both should be submitted.
 */
import { SITE_URL } from '../data/site.js';
import {
  AR, AR_TRADES, AR_CITIES, AR_CAPABILITIES, AR_COMPARISONS, AR_GUIDES_INDEX,
  AR_COMPANY, AR_PRICING_PAGE, AR_EXAMPLES_PAGE, AR_BLOG_PAGE,
} from '../data/ar/site.js';
import { AR_POSTS } from '../data/ar/posts.js';

const built = (list) => list.filter((i) => i.built);

export function GET() {
  const paths = [
    AR,
    ...(AR_PRICING_PAGE.built ? [AR_PRICING_PAGE.href] : []),
    ...(AR_EXAMPLES_PAGE.built ? [AR_EXAMPLES_PAGE.href] : []),
    ...built(AR_TRADES).map((t) => `${AR}/for/${t.slug}`),
    ...built(AR_CITIES).map((c) => `${AR}/locations/${c.slug}`),
    ...built(AR_CAPABILITIES).map((c) => `${AR}/features/${c.slug}`),
    ...built(AR_COMPARISONS).map((c) => `${AR}/vs/${c.slug}`),
    ...built(AR_GUIDES_INDEX).map((g) => `${AR}/guides/${g.slug}`),
    ...(AR_BLOG_PAGE.built ? [AR_BLOG_PAGE.href] : []),
    /* Sample posts carry noindex, so they stay out — same rule as the
       English sitemap, derived from the same flag rather than a list. */
    ...Object.entries(AR_POSTS).filter(([, p]) => !p.sample).map(([slug]) => `${AR}/blog/${slug}`),
    /* The two legal drafts are noindexed while they are drafts, so the
       sitemap must not ask for them. About and contact are real pages. */
    ...AR_COMPANY.filter((c) => c.built && !/\/(privacy|terms)$/.test(c.href)).map((c) => c.href),
  ];

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${paths.map((p) => `  <url><loc>${SITE_URL}${p}</loc></url>`).join('\n')}
</urlset>
`;

  return new Response(body, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
}
