// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

import { SITE_URL } from './src/data/site.js';

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
      // Two sitemaps under one index, one per language folder, so each gets
      // its own Search Console property (SEO spec §1).
      filter: (page) => !page.includes('/design-system'),
      i18n: {
        defaultLocale: 'en',
        locales: { en: 'en-US', ar: 'ar-SA' },
      },
    }),
  ],
  prefetch: false,
  compressHTML: true,
});
