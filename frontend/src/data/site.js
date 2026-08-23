/**
 * Site-wide constants.
 *
 * Anything that appears in more than one place lives here, so changing it is
 * one edit rather than a search across templates. The price especially: the
 * project brief makes it a hard rule that the price is a variable and never
 * typed into body copy.
 */

export const SITE_URL = 'https://widgeta.app';

/** The application, deliberately a separate host so analytics stay clean. */
export const APP_URL = 'https://app.widgeta.app';

/**
 * Pricing. Placeholder figures pending real pricing — the brief says so
 * explicitly, which is exactly why they are here and not in a paragraph.
 */
export const PRICE = {
  en: { amount: 99, currency: 'USD', symbol: '$', display: '$99', period: '/mo' },
  ar: { amount: 399, currency: 'SAR', symbol: 'SAR', display: '399 ر.س', period: '/شهرياً' },
};

/**
 * The four trades the English site sells to. Order is deliberate: it is the
 * order they appear in the nav, the footer and the home page link block, and
 * a single source keeps those three in step.
 */
export const TRADES = [
  { slug: 'plumbers', name: 'Plumbers', singular: 'plumber' },
  { slug: 'hvac', name: 'HVAC', singular: 'HVAC contractor' },
  { slug: 'roofers', name: 'Roofers', singular: 'roofer' },
  { slug: 'electricians', name: 'Electricians', singular: 'electrician' },
];

/**
 * Capabilities. `status` drives the visual treatment and, more importantly,
 * whether a purchase path is allowed to exist: anything not `live` gets the
 * coming-soon treatment everywhere it appears, including the footer link.
 */
export const CAPABILITIES = [
  { slug: 'website', name: 'Website', status: 'live' },
  { slug: 'seo', name: 'SEO', status: 'live' },
  { slug: 'content', name: 'Content', status: 'live' },
  { slug: 'call-answering', name: 'AI call answering', status: 'coming-soon' },
];

/** Comparison pages that actually exist. Never link to one that does not. */
export const COMPARISONS = [
  { slug: 'angi', name: 'Angi' },
  { slug: 'thumbtack', name: 'Thumbtack' },
  { slug: 'durable', name: 'Durable' },
  { slug: 'wix', name: 'Wix' },
  { slug: 'scorpion', name: 'Scorpion' },
];

/** Header: five items plus one persistent action, per the IA. */
export const NAV = [
  { label: 'For your trade', href: '/for/plumbers', caret: true },
  { label: 'What you get', href: '/features/website', caret: true },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Examples', href: '/examples' },
  { label: 'Learn', href: '/guides/plumbing-marketing', caret: true },
];

export const PRIMARY_CTA = { label: 'Get online', href: `${APP_URL}/signup` };
