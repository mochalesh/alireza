// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

import { SITE_URL } from './src/data/site.js';
import { POSTS } from './src/data/posts.js';

/*
 * Sample posts — the ones that show what Widgeta publishes for a customer
 * rather than targeting a search of our own — carry noindex, and so does the
 * blog index while every post on it is a sample. Deriving both from the data
 * means the sitemap cannot drift out of step with the meta tags: writing one
 * real post fixes all three at once.
 */
const samples = Object.entries(POSTS).filter(([, post]) => post.sample);
const blogIsAllSamples = samples.length === Object.keys(POSTS).length;

/** Pages that carry a noindex tag, and so must not appear in the sitemap. */
const NOINDEX = [
  '/privacy',
  '/terms',
  '/404',
  ...samples.map(([slug]) => `/blog/${slug}`),
  ...(blogIsAllSamples ? ['/blog'] : []),
];

/**
 * Static output on purpose.
 *
 * SEO is the product's promise, so every page has to exist as a real file a
 * crawler can fetch without running JavaScript. Nothing on this site needs a
 * server at request time: the trade hubs, the city pages and the comparisons
 * are all one template plus a data set, resolved at build.
 */
export default defineConfig({
  site: SITE_URL,
  output: 'static',
  trailingSlash: 'never',
  build: {
    // /pricing.html rather than /pricing/index.html — matches the canonical
    // URLs in the SEO spec, which carry no trailing slash.
    format: 'file',
  },
  integrations: [
    sitemap({
      /*
       * A sitemap is a request to index. Anything carrying noindex must stay
       * out of it, or the two signals contradict each other and Search
       * Console reports the page as an error rather than a choice.
       *
       * The i18n option is deliberately absent until the Arabic site exists:
       * it would write hreflang entries pointing at pages that are not there.
       */
      filter: (page) => !NOINDEX.some((path) => page.endsWith(path)),
    }),
  ],
  prefetch: false,
  compressHTML: true,
});
