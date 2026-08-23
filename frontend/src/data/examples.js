/**
 * Examples showcase.
 *
 * Every business here is invented, so every card carries a visible SAMPLE
 * label and a 555 number — a legal disclosure, not decoration, and one the
 * brief names as already fixed once.
 *
 * Each card has a "why it works" line because the spec asks this page to
 * earn the query "best plumbing website examples": a grid of screenshots
 * with no commentary has nothing to rank with.
 */
export const EXAMPLE_SITES = [
  {
    "trade": "plumbing",
    "tradeLabel": "Plumbing",
    "url": "reyesplumbing.com",
    "name": "Reyes Plumbing",
    "cities": "Mesa · Tempe · Chandler, AZ",
    "phone": "Call (480) 555-0114",
    "p1": "Water Heater Repair — Mesa",
    "p2": "Drain Cleaning — Tempe",
    "p3": "Emergency Plumbing — Chandler",
    "pages": 9,
    "why": "Why it works: water heaters get their own page in each town — the exact search, answered."
  },
  {
    "trade": "plumbing",
    "tradeLabel": "Plumbing",
    "url": "bluecreekplumbing.com",
    "name": "Blue Creek Plumbing",
    "cities": "Fort Worth · Keller, TX",
    "phone": "Call (817) 555-0138",
    "p1": "Slab Leak Repair — Fort Worth",
    "p2": "Repiping — Keller",
    "p3": "Gas Line Service — Fort Worth",
    "pages": 10,
    "why": "Why it works: high-ticket jobs — slab leaks, repipes — lead, with license info beside them."
  },
  {
    "trade": "hvac",
    "tradeLabel": "HVAC",
    "url": "summitairboise.com",
    "name": "Summit Air & Heat",
    "cities": "Boise · Meridian · Nampa, ID",
    "phone": "Call (208) 555-0142",
    "p1": "AC Repair — Boise",
    "p2": "Furnace Installation — Meridian",
    "p3": "Duct Cleaning — Nampa",
    "pages": 11,
    "why": "Why it works: emergency repair and research-stage installs get separate pages — different searches, different customers."
  },
  {
    "trade": "hvac",
    "tradeLabel": "HVAC",
    "url": "kowalskiheating.com",
    "name": "Kowalski Heating & Air",
    "cities": "Toledo · Perrysburg, OH",
    "phone": "Call (419) 555-0129",
    "p1": "Furnace Repair — Toledo",
    "p2": "AC Installation — Perrysburg",
    "p3": "Heat Pumps — Toledo",
    "pages": 9,
    "why": "Why it works: heat-pump pages published ahead of rebate season, when the searching starts."
  },
  {
    "trade": "roofing",
    "tradeLabel": "Roofing",
    "url": "plainsroofingks.com",
    "name": "Plains Roofing",
    "cities": "Wichita · Derby, KS",
    "phone": "Call (316) 555-0163",
    "p1": "Hail Damage Repair — Wichita",
    "p2": "Roof Replacement — Derby",
    "p3": "Roof Inspections — Andover",
    "pages": 8,
    "why": "Why it works: storm and insurance pages stand ready before hail season — ranking when the spike hits."
  },
  {
    "trade": "roofing",
    "tradeLabel": "Roofing",
    "url": "gulfcoastroof.com",
    "name": "Gulf Coast Roofing",
    "cities": "Tampa · Brandon, FL",
    "phone": "Call (813) 555-0151",
    "p1": "Storm Damage — Tampa",
    "p2": "Tile Roof Repair — Brandon",
    "p3": "Re-Roofing — Tampa",
    "pages": 10,
    "why": "Why it works: tile-specific pages match what this coast actually types into Google."
  },
  {
    "trade": "electrical",
    "tradeLabel": "Electrical",
    "url": "mottaelectric.com",
    "name": "Motta Electric",
    "cities": "Tulsa · Broken Arrow, OK",
    "phone": "Call (918) 555-0176",
    "p1": "Panel Upgrades — Tulsa",
    "p2": "EV Charger Install — Broken Arrow",
    "p3": "Emergency Electrician — Tulsa",
    "pages": 8,
    "why": "Why it works: the license number sits above the fold — the one thing people double-check on electricians."
  },
  {
    "trade": "electrical",
    "tradeLabel": "Electrical",
    "url": "brightvoltnc.com",
    "name": "BrightVolt Electric",
    "cities": "Raleigh · Cary, NC",
    "phone": "Call (919) 555-0187",
    "p1": "EV Chargers — Raleigh",
    "p2": "Panel Replacement — Cary",
    "p3": "Lighting Installation — Raleigh",
    "pages": 9,
    "why": "Why it works: EV-charger pages catch year-end rebate searches — high-ticket and research-heavy."
  }
];

/** Trade filters. "all" is the page itself; the rest are its anchors. */
export const EXAMPLE_FILTERS = [
  {
    "key": "all",
    "label": "All"
  },
  {
    "key": "plumbing",
    "label": "Plumbing"
  },
  {
    "key": "hvac",
    "label": "HVAC"
  },
  {
    "key": "roofing",
    "label": "Roofing"
  },
  {
    "key": "electrical",
    "label": "Electrical"
  }
];

export const EXAMPLE_HEADINGS = {
  "all": [
    "The best trade website examples, by trade",
    "Each of these is proof of the same mechanism: a page for every service in every town, license up front, and a phone number everywhere. Filter by your trade to see what yours would look like."
  ],
  "plumbing": [
    "The best plumbing website examples",
    "What good plumbing sites share: water heaters, drains and emergencies each get their own page per town, and the license sits where homeowners look first."
  ],
  "hvac": [
    "The best HVAC website examples",
    "What good HVAC sites share: emergency repair and install research are separated, and seasonal pages publish before the first heat wave or freeze."
  ],
  "roofing": [
    "The best roofing website examples",
    "What good roofing sites share: storm and insurance pages standing ready before the season, and certifications up front — roofing is the trade people fear getting burned on."
  ],
  "electrical": [
    "The best electrician website examples",
    "What good electrical sites share: license number above the fold, and pages for the high-ticket searches — panels, EV chargers, rewires."
  ]
};
