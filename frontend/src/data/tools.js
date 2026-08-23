/**
 * The business name generator.
 *
 * The SEO spec's rule for tools: "the result screen must produce indexable
 * supporting content (e.g. a name generator that also explains naming rules
 * for trades), otherwise the page has nothing to rank with." So the generator
 * is the smaller half of the page — the naming rules, the patterns table and
 * the pre-commit check are what a search engine can actually read, and what a
 * contractor gets even if they never press the button.
 *
 * Everything the generator combines lives here. Nothing is fetched, nothing
 * is scored, and the page never claims a name is available: checking that
 * needs a registry, a trademark search and a registrar, and inventing a green
 * tick for it would be exactly the kind of number this project does not
 * print. The page teaches the check instead.
 */

/** Words that work for any trade — place-flavoured, no imagery to clash. */
export const PLACES = [
  'Blue Creek', 'Copper Ridge', 'Stone Bridge', 'Northgate', 'Cedar Hill',
  'Iron Gate', 'Silver Fork', 'High Pine', 'Red Rock', 'Clearwater',
  'Fox Hollow', 'Granite',
];

/** Words that describe how you work rather than what you fix. */
export const TRAITS = [
  'First Call', 'Straight Line', 'True North', 'Anchor', 'Keystone',
  'Cornerstone', 'Sightline', 'Steady Hand', 'On Time', 'Third Generation',
];

/**
 * Per trade: the nouns that carry that trade's imagery, and the endings a
 * real company in it actually uses. The endings matter more than they look —
 * "Plumbing & Drain" and "Heating & Air" are how customers search.
 */
export const TRADE_WORDS = {
  plumbers: {
    label: 'Plumbing',
    hub: 'plumbers',
    nouns: ['Mainline', 'Wellspring', 'Riverstone', 'Copperline', 'Headwater', 'Springline'],
    endings: ['Plumbing', 'Plumbing Co.', 'Plumbing & Drain', 'Plumbing Services'],
  },
  hvac: {
    label: 'HVAC',
    hub: 'hvac',
    nouns: ['Fair Weather', 'Trade Winds', 'Northwind', 'Even Air', 'Comfort Line', 'Cool Ridge'],
    endings: ['Heating & Air', 'HVAC', 'Air Conditioning & Heating', 'Climate Services'],
  },
  roofers: {
    label: 'Roofing',
    hub: 'roofers',
    nouns: ['Summit', 'High Ridge', 'Ironclad', 'Rafter', 'Skyline', 'Ridgeline'],
    endings: ['Roofing', 'Roofing Co.', 'Roofing & Exteriors', 'Roofing Contractors'],
  },
  electricians: {
    label: 'Electrical',
    hub: 'electricians',
    nouns: ['Bright Line', 'Live Wire', 'Copper Current', 'Northlight', 'Beacon', 'Circuit'],
    endings: ['Electric', 'Electric Co.', 'Electrical Services', 'Electrical Contractors'],
  },
  general: {
    label: 'General home services',
    hub: null,
    nouns: ['Mainstay', 'Homefront', 'Toolbox', 'Workhorse', 'Blueprint', 'Hearthstone'],
    endings: ['Home Services', 'Contracting', 'Services', 'Home Repair'],
  },
};

/**
 * The five shapes. `id` is what the generator labels each result with, so a
 * contractor can see the pattern and keep going by hand once the list runs
 * out — which is the point of the patterns table below.
 */
export const PATTERNS = [
  {
    id: 'surname',
    label: 'Your name',
    example: 'Reyes Plumbing',
    when: 'You are the reputation. Strongest for referral-heavy shops, and it never boxes you into one service or one town.',
    watch: 'Common surnames collide — check the map pack in your metro before you print anything.',
  },
  {
    id: 'family',
    label: 'Family',
    example: 'Reyes & Sons Plumbing',
    when: 'Second generation or a family crew. Reads as continuity, which this audience buys.',
    watch: 'Only if it is true. "& Sons" with no sons is the first thing a competitor points at.',
  },
  {
    id: 'place',
    label: 'Place or image',
    example: 'Blue Creek Plumbing',
    when: 'You want local flavour without naming one town, so the name survives expanding into the next three. A word from the trade itself — Mainline, Summit, Live Wire — does the same job.',
    watch: 'Pick a landmark or a feature, not the city itself, unless you will never leave it.',
  },
  {
    id: 'city',
    label: 'City',
    example: 'Mesa Plumbing Co.',
    when: 'One town, deep roots, no plan to leave. It matches how people search: city plus trade.',
    watch: 'The hardest name to grow out of, and often already taken by whoever registered first.',
  },
  {
    id: 'trait',
    label: 'How you work',
    example: 'First Call Plumbing',
    when: 'You are entering a crowded market and need something a homeowner repeats to a neighbour.',
    watch: 'It has to be a promise you keep on a Sunday, because customers will test it.',
  },
];

/** The rules, in the order they actually matter. */
export const RULES = [
  {
    lead: 'A stranger has to spell it after hearing it once.',
    body: 'Half your calls start with someone saying your name out loud to someone else. If they have to spell it twice, the referral leaks.',
  },
  {
    lead: 'It has to say the trade.',
    body: 'A name that could belong to a bakery makes every listing, van and invoice work harder than it should. "Plumbing", "Heating & Air", "Roofing", "Electric" — the plain word is the one people search.',
  },
  {
    lead: 'It must survive your next three towns.',
    body: 'The most common expensive rename is a company called after the town it started in that now runs trucks in four.',
  },
  {
    lead: 'It must survive your next service line.',
    body: '"Drain cleaning" in the name is a wall the day you start selling water heaters.',
  },
  {
    lead: 'Someone has to be able to own it.',
    body: 'The name, the domain, the state registration and the licence should all be the same string. Wherever they differ, you are teaching Google that two businesses exist.',
  },
  {
    lead: 'It cannot be a keyword pile.',
    body: '"Best Emergency Plumber Phoenix 24/7" is not a business name. It is against Google\'s Business Profile guidelines, which require the real-world name, and listings do get suspended for it.',
  },
];

/** Things that cost real money later, phrased as what happens. */
export const MISTAKES = [
  {
    lead: 'AAA / A-1 / AAAA prefixes.',
    body: 'They existed to win the phone book\'s alphabetical order. That order stopped mattering decades ago, and today the prefix mostly signals the company has not looked at its marketing since.',
  },
  {
    lead: 'Puns.',
    body: 'A pun gets one laugh and then has to be spelled out on every call for twenty years. If you use one, make sure the trade word is still in the name beside it.',
  },
  {
    lead: 'Numbers and hyphens.',
    body: 'They survive on paper and die on the phone: "is that the numeral or the word, and is there a dash?" Every one of those questions is a lost visit.',
  },
  {
    lead: 'A name whose .com is gone.',
    body: 'You do not need the .com to succeed, but you do need to not be one letter away from an established company in the same trade. That is the version that leaks calls to someone else forever.',
  },
  {
    lead: 'A name that is already licensed nearby.',
    body: 'Two similarly-named contractors in one metro means split reviews, misdirected complaints and, occasionally, a letter from a lawyer.',
  },
];

/** The check, before anything gets printed. */
export const CHECK = [
  'Your state\'s business registry — search the exact name and the obvious near-misses.',
  'The federal trademark database, for the name on its own and with the trade word.',
  'Google, in quotes, plus your metro — then again in the map pack, which is where a collision actually hurts.',
  'A registrar, for the .com and your state\'s common alternative. Check the spelling you would say on the phone, not the clever one.',
  'The handle on the two social networks you will actually use.',
  'Your state licensing board, so the name on the licence can match everything else.',
];

export const FAQ = [
  {
    q: 'Does having the trade in the business name help you rank?',
    a: 'A name that contains the service and the area does correlate with map-pack visibility, and that is exactly why Google requires the profile name to be your real-world name — the one on the van, the licence and the invoice. Adding keywords you do not trade under is against the guidelines and gets listings suspended. If your legal name honestly includes "Plumbing", you get that benefit and keep it.',
  },
  {
    q: 'Should the city be in the name?',
    a: 'Only if you are certain you will never work outside it. City names read as deeply local and match how people search, but they are the single most common reason a growing contractor pays to rebrand. A landmark or a regional word gives you most of the local feel without the ceiling.',
  },
  {
    q: 'Does the domain have to match the business name exactly?',
    a: 'It should match what someone would type after hearing the name, which is not always the exact legal string — "Reyes Plumbing LLC" is fine as reyesplumbing.com. What matters far more is consistency: the same name, address and phone on the site, the Business Profile and every directory.',
  },
  {
    q: 'Can I use my own last name?',
    a: 'It is the most durable pattern in the trades: it never expires, never boxes you into one service or town, and it puts a person behind the work — which is what a homeowner letting someone into their house is looking for. Check for collisions in your metro first; common surnames plus a common trade is a crowded corner.',
  },
  {
    q: 'Does this tool check whether a name is taken?',
    a: 'No, and it will not pretend to. Availability lives in a state registry, a trademark database and a registrar, and each of those is the real answer for a different part of the question. The list above is the twenty-minute version of that check, in the order that catches problems earliest.',
  },
];
