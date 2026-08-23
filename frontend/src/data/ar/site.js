/**
 * The Arabic site's registry.
 *
 * Same machinery as the English one and for the same reason: every list
 * carries a `built` flag, the header and footer filter on it, and a page that
 * does not exist cannot be linked. The Arabic tree is larger than what has
 * been built — five trades, six cities, three comparisons, features, guides —
 * so most of these are `false` today and the navigation is honestly shorter
 * than the design's, rather than confidently pointing at 404s.
 *
 * What is different from English is structural, not cosmetic:
 *
 *   - The multi-trade maintenance company comes first and is the primary hub.
 *     In the Gulf one commercial licence usually covers AC, plumbing and
 *     electrical, so "شركة صيانة" is the buyer, not an edge case.
 *   - Cities are a top-level section. Buyers there search geographically, and
 *     the brief is explicit that the English site must not copy this.
 *   - The primary action is WhatsApp. It is how this market contacts a
 *     contractor, and the spec makes the WhatsApp click the conversion event.
 */

/** Everything Arabic hangs off this prefix. */
export const AR = '/ar';

export const AR_TRADES = [
  {
    slug: 'maintenance-companies',
    name: 'شركات الصيانة',
    navName: 'شركات الصيانة',
    built: true,
    /** The primary hub: shown first, and linked from every other trade. */
    primary: true,
  },
  { slug: 'ac', name: 'تكييف وتبريد', navName: 'تكييف وتبريد', built: true },
  { slug: 'plumbing', name: 'سباكة', navName: 'سباكة', built: false },
  { slug: 'electrical', name: 'كهرباء', navName: 'كهرباء', built: false },
  { slug: 'pest-control', name: 'مكافحة حشرات', navName: 'مكافحة حشرات', built: false },
];

/**
 * Six cities, and never more. The spec forbids generating city pages
 * programmatically: each one needs its own market, its own currency figures
 * and its own seasons, or it is a doorway page.
 */
export const AR_CITIES = [
  { slug: 'riyadh', name: 'الرياض', country: 'SA', built: true },
  { slug: 'jeddah', name: 'جدة', country: 'SA', built: false },
  { slug: 'dammam', name: 'الدمام', country: 'SA', built: false },
  { slug: 'dubai', name: 'دبي', country: 'AE', built: false },
  { slug: 'abu-dhabi', name: 'أبوظبي', country: 'AE', built: false },
  { slug: 'sharjah', name: 'الشارقة', country: 'AE', built: false },
];

export const AR_CAPABILITIES = [
  { slug: 'website', name: 'الموقع', status: 'live', built: false },
  { slug: 'seo', name: 'الظهور في البحث', status: 'live', built: false },
  { slug: 'content', name: 'المحتوى', status: 'live', built: false },
  { slug: 'call-answering', name: 'الرد على المكالمات', status: 'coming-soon', built: false },
];

/** Different competitors from the English site — different market. */
export const AR_COMPARISONS = [
  { slug: 'wix', name: 'ويكس', built: false },
  { slug: 'wordpress', name: 'ووردبريس', built: false },
  { slug: 'khamsat', name: 'خمسات', built: false },
];

export const AR_COMPANY = [
  { label: 'من نحن', href: `${AR}/about`, built: false },
  { label: 'اتصل بنا', href: `${AR}/contact`, built: false },
  { label: 'الخصوصية', href: '/privacy', built: false },
  { label: 'الشروط', href: '/terms', built: false },
];

export const AR_PRICING_PAGE = { href: `${AR}/pricing`, built: true };

/**
 * Header. Same five-slots-plus-one-action shape as English, with the trade
 * menu leading on the multi-trade hub and cities promoted into the bar.
 */
export const AR_NAV = [
  { label: 'حسب نشاطك', href: `${AR}/for/maintenance-companies`, fallback: null, built: true, caret: true },
  { label: 'ما تحصل عليه', href: `${AR}/features/website`, fallback: `${AR}#capabilities`, built: false, caret: true },
  { label: 'الأسعار', href: `${AR}/pricing`, fallback: null, built: true },
  { label: 'المدن', href: `${AR}/locations/riyadh`, fallback: null, built: true, caret: true },
  { label: 'أمثلة', href: `${AR}/examples`, fallback: `${AR}#examples`, built: false },
];

export const AR_PRIMARY_CTA = {
  label: 'اجعل شركتك على الإنترنت',
  /** Short form, for the header bar where the long label will not fit. */
  shortLabel: 'ابدأ الآن',
};

/**
 * The WhatsApp number is a placeholder and is marked as one everywhere it is
 * shown. A real number has to be a line someone actually answers: publishing
 * an invented one on the page whose whole promise is "the WhatsApp rings"
 * would be the worst possible thing to get wrong.
 */
export const AR_WHATSAPP = {
  /** International format, digits only, for the wa.me link. */
  number: '966555550100',
  display: '‎+966 55 555 0100',
  placeholder: true,
};

export function waHref(text) {
  return `https://wa.me/${AR_WHATSAPP.number}?text=${encodeURIComponent(text)}`;
}

/** Where a nav item should actually point right now, or null. */
export function arNavHref(item) {
  return item.built ? item.href : item.fallback;
}

/** Eastern Arabic numerals — what the design uses for counts and years. */
export function ar(n) {
  return String(n).replace(/[0-9]/g, (d) => '٠١٢٣٤٥٦٧٨٩'[d]);
}
