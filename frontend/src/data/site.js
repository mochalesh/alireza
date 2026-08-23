/**
 * Site-wide constants.
 *
 * Anything that appears in more than one place lives here, so changing it is
 * one edit rather than a search across templates. The price especially: the
 * project brief makes it a hard rule that the price is a variable and never
 * typed into body copy.
 *
 * Every link list carries a `built` flag, and the components filter on it.
 * The site is being built a section at a time, and a navigation that points
 * at a page which does not exist yet is a 404 with a confident label on it.
 * Flipping one flag when a page ships turns on every link to it at once —
 * header, footer, hub, guide — because they all read this file.
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

/** Written into copy wherever the flat price is quoted. */
export const PRICE_TOKEN = '{{PRICE}}';

export function withPrice(text, lang = 'en') {
  const p = PRICE[lang];
  return String(text).split(PRICE_TOKEN).join(`${p.display}${p.period}`);
}

/**
 * The four trades the English site sells to. Order is deliberate: it is the
 * order they appear in the nav, the footer and the home page link block, and
 * a single source keeps those three in step.
 */
export const TRADES = [
  { slug: 'plumbers', name: 'Plumbers', built: true },
  { slug: 'hvac', name: 'HVAC', built: true },
  { slug: 'roofers', name: 'Roofers', built: true },
  { slug: 'electricians', name: 'Electricians', built: true },
];

/**
 * Capabilities. `status` drives the visual treatment and, more importantly,
 * whether a purchase path is allowed to exist: anything not `live` gets the
 * coming-soon treatment everywhere it appears, including the footer link.
 */
export const CAPABILITIES = [
  { slug: 'website', name: 'Website', status: 'live', built: true },
  { slug: 'seo', name: 'SEO', status: 'live', built: true },
  { slug: 'content', name: 'Content', status: 'live', built: true },
  { slug: 'call-answering', name: 'AI call answering', status: 'coming-soon', built: true },
];

/** Comparison pages. Never link to one that has not been built. */
export const COMPARISONS = [
  { slug: 'angi', name: 'Angi', built: true },
  { slug: 'thumbtack', name: 'Thumbtack', built: true },
  { slug: 'durable', name: 'Durable', built: false },
  { slug: 'wix', name: 'Wix', built: false },
  { slug: 'scorpion', name: 'Scorpion', built: false },
];

export const RESOURCES = [
  { label: 'Marketing guides', href: '/guides/plumbing-marketing', built: false },
  { label: 'Blog', href: '/blog', built: false },
  { label: 'Business name generator', href: '/tools/business-name-generator', built: false },
  { label: 'Website grader', href: '/tools/website-grader', built: false },
];

export const COMPANY = [
  { label: 'About', href: '/about', built: true },
  { label: 'Contact', href: '/contact', built: true },
  { label: 'Privacy', href: '/privacy', built: true },
  { label: 'Terms', href: '/terms', built: true },
];

/**
 * The Arabic site. The IA calls the language switcher the only EN ↔ AR
 * crossing point and wants it on every page — but it cannot cross to a page
 * that has not been built. The chip appears the moment this flips.
 */
export const AR_SITE = { href: '/ar', built: false };

export const PRICING_PAGE = { href: '/pricing', built: true };
export const EXAMPLES_PAGE = { href: '/examples', built: true };

/**
 * Header: five items plus one persistent action, per the IA.
 *
 * Each item names its real destination and, where the design provides one, a
 * section of the home page that answers the same question today. Until the
 * destination is built the item points at that section — a real place, not a
 * promise. `built` flips in the step that ships the page.
 */
export const NAV = [
  { label: 'For your trade', href: '/for/plumbers', fallback: null, built: true, caret: true },
  { label: 'What you get', href: '/features/website', fallback: '/#capabilities', built: true, caret: true },
  { label: 'Pricing', href: '/pricing', fallback: null, built: true },
  { label: 'Examples', href: '/examples', fallback: '/#examples', built: true },
  { label: 'Learn', href: '/guides/plumbing-marketing', fallback: null, built: false, caret: true },
];

/** The destination a nav item should actually point at right now. */
export function navHref(item) {
  return item.built ? item.href : item.fallback;
}

export const PRIMARY_CTA = { label: 'Get online', href: `${APP_URL}/signup` };

/** Where a link should go, or null when its page is not built yet. */
export function linkIfBuilt(entry, href) {
  return entry.built ? (href ?? entry.href) : null;
}
