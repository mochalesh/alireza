/**
 * Home page content.
 *
 * Copy lives here rather than inside the markup so that the page file stays
 * structure and the words stay editable — and so the FAQ array can be handed
 * to both the markup and the FAQPage schema from one place.
 */

export const STEPS = [
  {
    n: '01',
    tag: 'Your only step',
    title: 'Answer a few questions',
    body: 'Business name, your trades, the areas you cover, a few photos. About 2 minutes — more like texting than paperwork.',
  },
  {
    n: '02',
    title: 'Your site goes live',
    body: 'About a minute later: a complete site with a page for every service and every area you cover, ready for Google.',
  },
  {
    n: '03',
    title: 'It keeps working on its own',
    body: 'Widgeta reads what people near you actually search for and keeps adding pages that answer them. Your job is the jobs.',
  },
];

export const TRADE_CARDS = [
  { slug: 'plumbers', name: 'Plumbers', line: 'Water heaters, drains, emergencies — be the first result when a pipe lets go.' },
  { slug: 'hvac', name: 'HVAC', line: 'Own the first heat wave and the first freeze in every town you serve.' },
  { slug: 'roofers', name: 'Roofers', line: 'When the storm passes, the searches start. Be the answer.' },
  { slug: 'electricians', name: 'Electricians', line: 'Panels, EV chargers, rewires — the searches are yours to take.' },
];

export const CAPABILITY_CARDS = [
  {
    slug: 'website',
    label: 'Website',
    status: 'live',
    title: 'A real site with your name on it',
    body: 'Complete and structured from your answers — services, areas, photos, license info. Yours, not rented.',
  },
  {
    slug: 'seo',
    label: 'SEO',
    status: 'live',
    title: 'Found on Google in every area you serve',
    body: 'A page for each service in each town, plus the technical work Google expects — handled continuously, invisibly.',
  },
  {
    slug: 'content',
    label: 'Content',
    status: 'live',
    title: 'Fresh answers to what neighbors ask',
    body: 'Widgeta watches real local searches and writes the pages that answer them — with your number on every one.',
  },
  {
    slug: 'call-answering',
    label: 'Call answering',
    status: 'coming-soon',
    title: 'Every call answered — even on a ladder',
    /*
     * The design copy opened with "About 1 in 4 calls to the trades goes
     * unanswered." That is a statistic we cannot source, and the brief's
     * fourth non-negotiable forbids exactly that. The point survives without
     * the number: a missed call is a job someone else takes.
     */
    body: 'A call you miss on a job is a job someone else takes. Widgeta will pick up, take the details, and send them to you.',
  },
];

export const ROADMAP = [
  'Google Business Profile',
  'Reporting',
  'Dispatching',
  'SMS marketing',
  'Customer records',
  'Invoicing',
  'Seasonal reminders',
];

/**
 * Example sites. Every one is invented, so every one carries a visible
 * SAMPLE label and a 555 number — a legal disclosure, not decoration.
 */
export const EXAMPLES = [
  {
    domain: 'reyesplumbing.com',
    business: 'Reyes Plumbing',
    areas: 'Mesa · Tempe · Chandler, AZ',
    phone: '(480) 555-0114',
    pages: ['Water Heater Repair — Mesa', 'Drain Cleaning — Tempe', 'Emergency Plumbing — Chandler'],
    caption: 'Plumbing · 9 answers · live in about a minute',
  },
  {
    domain: 'summitairboise.com',
    business: 'Summit Air & Heat',
    areas: 'Boise · Meridian · Nampa, ID',
    phone: '(208) 555-0142',
    pages: ['AC Repair — Boise', 'Furnace Installation — Meridian', 'Duct Cleaning — Nampa'],
    caption: 'HVAC · 11 answers · live in about a minute',
  },
  {
    domain: 'mottaelectric.com',
    business: 'Motta Electric',
    areas: 'Tulsa · Broken Arrow, OK',
    phone: '(918) 555-0176',
    pages: ['Panel Upgrades — Tulsa', 'EV Charger Install — Broken Arrow', 'Emergency Electrician — Tulsa'],
    caption: 'Electrical · 8 answers · live in about a minute',
  },
];

export const RENTING = [
  'You pay for every lead, forever',
  'The same lead is sold to 3–4 of your competitors',
  'Stop paying and you disappear the same day',
  'The marketplace owns the customer, not you',
];

export const OWNING = [
  'One flat monthly price, however many calls come in',
  'Calls come straight to you — and only you',
  'Your site keeps ranking and compounding over time',
  'Your name, your site, your customers',
];

/**
 * Testimonials are illustrative until real customers with written
 * permission replace them — the disclosure under the block says so and
 * stays until that day.
 */
export const PROOF = [
  {
    quote: 'First month: two water-heater jobs straight from the site. I never touched a thing.',
    name: 'Mike Reyes',
    business: 'Reyes Plumbing · Mesa, AZ',
  },
  {
    quote: 'I was paying $80 a lead and splitting it with four other guys. Now the calls are mine.',
    name: 'Dan Kowalski',
    business: 'Kowalski Heating & Air · Toledo, OH',
  },
  {
    quote: 'Answered the questions from my truck. The site was up before I finished lunch.',
    name: 'Jake Motta',
    business: 'Motta Electric · Tulsa, OK',
  },
];

export const FAQ = [
  {
    q: 'Is there a contract?',
    a: 'No. Month to month, cancel anytime. The site is yours either way — if you leave, it goes with you.',
  },
  {
    q: 'What do I actually get?',
    a: 'A complete website, a page for every service in every area you cover, and new pages each month matched to what neighbors search. Hosting and the technical work included.',
  },
  {
    q: 'How long does it take?',
    a: 'About 2 minutes of questions, and the site is live about a minute later. Google picks it up over the following days, and rankings build from there.',
  },
];
