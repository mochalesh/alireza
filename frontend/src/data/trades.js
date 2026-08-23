/**
 * Trade hub content — the four money pages.
 *
 * This is the production copy from the approved design, one object per
 * trade. It is deliberately not a template with the trade name swapped in:
 * the seasonality, the services, the searches and the price expectations
 * differ per trade, because near-duplicate trade pages are the doorway-page
 * risk the SEO spec warns about.
 *
 * {{PRICE}} marks the one figure that must never be typed into copy. It is
 * replaced at render time from the single price variable in site.js.
 */
export const TRADE_CONTENT = {
  "plumbers": {
    "metaDesc": "A plumbing website built for the searches that happen in your area — a page for every service in every town you serve, updated every month.",
    "tradeName": "Plumbers",
    "tradeCaps": "PLUMBERS",
    "tradeLower": "plumbers",
    "h1": "Be the plumber your neighborhood finds first.",
    "sub": "When a water heater dies or a pipe lets go, your neighbors grab a phone and search. Widgeta gives you a plumbing website built and optimised for the searches that actually happen in your area — live today, working while you're on the job.",
    "cta": "Get your plumbing business online",
    "exampleCta": "See plumbing sites",
    "kwH2": "What a plumber website builder should actually do",
    "kw1": "A generic website builder gives you five empty pages, a color picker, and good luck. That's a brochure. Nobody hires a plumber from a brochure — they hire whoever shows up when they search \"water heater replacement cost\" at 6am with cold water coming out of the tap.",
    "kw2": "A plumber website builder worth the name starts from the searches, not the template. It knows the jobs — water heaters, drains, slab leaks, repipes — and it knows they're searched town by town. So it builds a page for each one, puts your license and your photos where skeptical homeowners look for them, and wires in the structured data Google reads.",
    "kw3": "Then — the part almost nothing does — it keeps going. Plumbing searches shift with the weather and the neighborhood. Widgeta watches them and keeps publishing the answers, every month, with your number on every page. You answered questions once; the site does the rest.",
    "searches": [
      "emergency plumber near me",
      "water heater replacement cost",
      "drain cleaning near me",
      "tankless water heater install",
      "slab leak repair",
      "repipe specialists"
    ],
    "c1": "Mesa",
    "c2": "Tempe",
    "c3": "Chandler",
    "mxSvc": [
      "Water heater repair",
      "Drain cleaning",
      "Emergency plumbing"
    ],
    "matrixNote": "3 services × 3 towns = 9 pages from one 2-minute answer sheet — each ranking for its own search.",
    "servicePagesLine": "Water heaters in Mesa. Drain cleaning in Tempe. Emergency service in Chandler. Each one is its own page, because each one is its own search.",
    "seasonalLine": "Freeze warnings, monsoon season, new subdivisions — when local searches shift, your site answers before your competitors do.",
    "seasonH2": "What plumbing searches look like through the year",
    "seasonIntro": "Plumbing demand isn't steady — it moves with the weather, and the searches move first. A site built for plumbers publishes ahead of each wave:",
    "seasons": [
      {
        "s": "WINTER",
        "h": "The freeze",
        "t": "First hard freeze of the year and \"burst pipe repair\" spikes overnight. Water heaters fail on cold mornings too — the tank that limped through fall dies in January."
      },
      {
        "s": "SPRING",
        "h": "The reckoning",
        "t": "Thaw reveals what winter broke: slab leaks show up as warm spots and water bills, and remodel season kicks off repipe and fixture searches."
      },
      {
        "s": "SUMMER",
        "h": "The storms",
        "t": "Monsoon and storm season backs up drains and floods yards. \"Sewer line repair\" and \"drain cleaning\" climb, and vacations turn small leaks into big ones."
      },
      {
        "s": "FALL",
        "h": "The prep",
        "t": "Winterizing searches start early — hose bibs, heater flushes, \"should I replace my water heater before winter.\" The pros who answer them book the season's work."
      }
    ],
    "mkt": "Angi",
    "rows": [
      {
        "k": "What it costs",
        "w": "{{PRICE}}, flat",
        "m": "$15–100+ per lead, shared",
        "d": "$20–50/mo plus your weekends",
        "a": "$1,500–5,000 setup, then a retainer"
      },
      {
        "k": "Who else gets the lead",
        "w": "No one — calls are only yours",
        "m": "Sold to 3–4 competitors",
        "d": "No one",
        "a": "No one"
      },
      {
        "k": "Who owns the site",
        "w": "You do",
        "m": "There is no site — just a listing",
        "d": "You, if you build and maintain it",
        "a": "Often the agency"
      },
      {
        "k": "Time to live",
        "w": "About a minute",
        "m": "Same day (a profile, not a site)",
        "d": "A weekend, usually more",
        "a": "4–8 weeks"
      },
      {
        "k": "Work after launch",
        "w": "None — new pages appear monthly",
        "m": "Pay per lead, forever",
        "d": "All of it is on you",
        "a": "Billed hourly, or waiting on a retainer"
      }
    ],
    "hasVsPage": true,
    "vsLabel": "Read the full Widgeta vs Angi comparison →",
    "examplesH2": "Plumbing sites Widgeta generated.",
    "examples": [
      {
        "url": "reyesplumbing.com",
        "name": "Reyes Plumbing",
        "cities": "Mesa · Tempe · Chandler, AZ",
        "phone": "Call (480) 555-0114",
        "p1": "Water Heater Repair — Mesa",
        "p2": "Drain Cleaning — Tempe",
        "p3": "Emergency Plumbing — Chandler",
        "caption": "9 answers · live in about a minute"
      },
      {
        "url": "bluecreekplumbing.com",
        "name": "Blue Creek Plumbing",
        "cities": "Fort Worth · Keller, TX",
        "phone": "Call (817) 555-0138",
        "p1": "Slab Leak Repair — Fort Worth",
        "p2": "Repiping — Keller",
        "p3": "Gas Line Service — Fort Worth",
        "caption": "10 answers · live in about a minute"
      }
    ],
    "guideTitle": "The Plumbing Marketing Guide",
    "quote": "Two water-heater jobs the first month, straight from the site.",
    "quoteName": "Mike Reyes",
    "quoteBiz": "Reyes Plumbing, Mesa AZ",
    "photoId": "mike-reyes",
    "proof1": "Calls come to your phone — no middleman, no shared leads",
    "proof2": "Pages for the exact jobs you want more of",
    "faqH2": "Plumber website questions, answered straight",
    "faqs": [
      {
        "q": "How much does a plumbing website cost?",
        "a": "Widgeta is one flat monthly price — {{PRICE}} — including the site, hosting, the SEO work and new pages every month. No setup fee, no contract. For comparison, an agency build for plumbers typically runs $1,500–5,000 up front, before any monthly work."
      },
      {
        "q": "How long does it take to get a plumber website online?",
        "a": "About 2 minutes of questions, and the site is live about a minute later. Google finds it over the following days; rankings build over the weeks after that as the pages prove themselves."
      },
      {
        "q": "Do I need SEO if I already have a website?",
        "a": "Try this: search one of your services plus your town. If your site isn't there, it isn't working — it's a business card, not a source of calls. Widgeta's whole job is making the site show up for those searches, and it does that work every month, not once."
      },
      {
        "q": "Will I show up for \"plumber near me\"?",
        "a": "That's the most competitive search in the trade, and no honest company guarantees a spot there. Widgeta targets it — and the dozens of longer, more specific searches (\"water heater replacement cost mesa\", \"slab leak repair chandler\") where a well-built page wins much sooner. Those are the searches most of your future customers actually type."
      },
      {
        "q": "What happens to my site if I cancel?",
        "a": "It's yours. The domain, the pages, the content — all of it goes with you. No contract holds you, and nothing is held hostage."
      },
      {
        "q": "Do I have to write anything myself?",
        "a": "No. Your answers become the site, and every new page after that is written for you from what people near you search. You'll never be handed a blank text box."
      }
    ]
  },
  "hvac": {
    "metaDesc": "An HVAC website built for the searches that happen in your area — a page for every service in every town you serve, updated every month.",
    "tradeName": "HVAC",
    "tradeCaps": "HVAC COMPANIES",
    "tradeLower": "HVAC companies",
    "h1": "When the AC quits at 104°, be the company they call.",
    "sub": "Heat waves and cold snaps send your neighbors straight to search. Widgeta gives you an HVAC website designed and optimised for the searches that actually happen in your service area — live today, working while you work.",
    "cta": "Get your HVAC business online",
    "exampleCta": "See HVAC sites",
    "kwH2": "What good HVAC website design actually does",
    "kw1": "Most HVAC website design is a template with a van photo: five pages, a contact form, silence. It looks fine and does nothing, because it isn't built around the only thing that matters — the searches happening in your towns during the first heat wave.",
    "kw2": "A site designed for HVAC starts from those searches. It knows the difference between \"ac not cooling\" (today's emergency) and \"furnace replacement cost\" (this month's research), builds a page for each in each town you serve, and puts your license, your brands and your photos where homeowners check before calling.",
    "kw3": "And it keeps working after launch. HVAC demand swings harder with weather than almost any trade — so Widgeta watches what's being searched near you and publishes the answers ahead of each season, your number on every page.",
    "searches": [
      "ac repair near me",
      "hvac company near me",
      "furnace replacement cost",
      "ac not cooling",
      "duct cleaning near me",
      "mini split installation"
    ],
    "c1": "Boise",
    "c2": "Meridian",
    "c3": "Nampa",
    "mxSvc": [
      "AC repair",
      "Furnace installation",
      "Duct cleaning"
    ],
    "matrixNote": "3 services × 3 towns = 9 pages from one 2-minute answer sheet — each ranking for its own search.",
    "servicePagesLine": "AC repair in Boise. Furnace install in Meridian. Duct cleaning in Nampa. Each service in each town is its own page, because it's its own search.",
    "seasonalLine": "First heat wave, first freeze, rebate season — when local searches shift, your site answers before your competitors do.",
    "seasonH2": "What HVAC searches look like through the year",
    "seasonIntro": "No trade swings with the thermometer like HVAC — and the searches move before the service calls do. A site built for HVAC publishes ahead of each swing:",
    "seasons": [
      {
        "s": "SPRING",
        "h": "Tune-up season",
        "t": "\"AC tune up\" and rebate searches climb as smart homeowners prep. The companies visible now are the ones remembered when the first 95° day hits."
      },
      {
        "s": "SUMMER",
        "h": "The first heat wave",
        "t": "\"AC not cooling\" and \"emergency ac repair\" explode in the first hot week — the year's biggest spike, won by whoever already ranks."
      },
      {
        "s": "FALL",
        "h": "Furnace checks",
        "t": "First cold night brings \"furnace not turning on\" and \"heater smells like burning.\" Replacement research starts here, ahead of winter quotes."
      },
      {
        "s": "WINTER",
        "h": "Failures & upgrades",
        "t": "Deep-cold failures meet year-end heat-pump and rebate deadlines. \"Furnace replacement cost\" peaks while systems run hardest."
      }
    ],
    "mkt": "Angi",
    "rows": [
      {
        "k": "What it costs",
        "w": "{{PRICE}}, flat",
        "m": "$15–100+ per lead, shared",
        "d": "$20–50/mo plus your weekends",
        "a": "$1,500–5,000 setup, then a retainer"
      },
      {
        "k": "Who else gets the lead",
        "w": "No one — calls are only yours",
        "m": "Sold to 3–4 competitors",
        "d": "No one",
        "a": "No one"
      },
      {
        "k": "Who owns the site",
        "w": "You do",
        "m": "There is no site — just a listing",
        "d": "You, if you build and maintain it",
        "a": "Often the agency"
      },
      {
        "k": "Time to live",
        "w": "About a minute",
        "m": "Same day (a profile, not a site)",
        "d": "A weekend, usually more",
        "a": "4–8 weeks"
      },
      {
        "k": "Work after launch",
        "w": "None — new pages appear monthly",
        "m": "Pay per lead, forever",
        "d": "All of it is on you",
        "a": "Billed hourly, or waiting on a retainer"
      }
    ],
    "hasVsPage": true,
    "vsLabel": "Read the full Widgeta vs Angi comparison →",
    "examplesH2": "HVAC sites Widgeta generated.",
    "examples": [
      {
        "url": "summitairboise.com",
        "name": "Summit Air & Heat",
        "cities": "Boise · Meridian · Nampa, ID",
        "phone": "Call (208) 555-0142",
        "p1": "AC Repair — Boise",
        "p2": "Furnace Installation — Meridian",
        "p3": "Duct Cleaning — Nampa",
        "caption": "11 answers · live in about a minute"
      },
      {
        "url": "kowalskiheating.com",
        "name": "Kowalski Heating & Air",
        "cities": "Toledo · Perrysburg, OH",
        "phone": "Call (419) 555-0129",
        "p1": "Furnace Repair — Toledo",
        "p2": "AC Installation — Perrysburg",
        "p3": "Heat Pumps — Toledo",
        "caption": "9 answers · live in about a minute"
      }
    ],
    "guideTitle": "The HVAC Marketing Guide",
    "quote": "I was paying $80 a lead and splitting it with four other guys.",
    "quoteName": "Dan Kowalski",
    "quoteBiz": "Kowalski Heating & Air, Toledo OH",
    "photoId": "dan-kowalski",
    "proof1": "Calls come to your phone — no middleman, no shared leads",
    "proof2": "Pages for the exact jobs you want more of",
    "faqH2": "HVAC website questions, answered straight",
    "faqs": [
      {
        "q": "How much does a HVAC website cost?",
        "a": "Widgeta is one flat monthly price — {{PRICE}} — including the site, hosting, the SEO work and new pages every month. No setup fee, no contract. For comparison, an agency build for HVAC companies typically runs $1,500–5,000 up front, before any monthly work."
      },
      {
        "q": "How long does it take to get an HVAC website online?",
        "a": "About 2 minutes of questions, and the site is live about a minute later. Google finds it over the following days; rankings build over the weeks after that as the pages prove themselves."
      },
      {
        "q": "Do I need SEO if I already have a website?",
        "a": "Try this: search one of your services plus your town. If your site isn't there, it isn't working — it's a business card, not a source of calls. Widgeta's whole job is making the site show up for those searches, and it does that work every month, not once."
      },
      {
        "q": "Will I show up for \"ac repair near me\"?",
        "a": "That's the most competitive search in the trade, and no honest company guarantees a spot there. Widgeta targets it — and the dozens of longer, more specific searches (\"furnace replacement cost boise\", \"mini split installation meridian\") where a well-built page wins much sooner. Those are the searches most of your future customers actually type."
      },
      {
        "q": "What happens to my site if I cancel?",
        "a": "It's yours. The domain, the pages, the content — all of it goes with you. No contract holds you, and nothing is held hostage."
      },
      {
        "q": "Do I have to write anything myself?",
        "a": "No. Your answers become the site, and every new page after that is written for you from what people near you search. You'll never be handed a blank text box."
      }
    ]
  },
  "roofers": {
    "metaDesc": "A roofing website built for the searches that follow every storm — a page for every service in every town you serve, updated every month.",
    "tradeName": "Roofers",
    "tradeCaps": "ROOFERS",
    "tradeLower": "roofers",
    "h1": "After the storm, be the roofer they find.",
    "sub": "Hail, wind, a stain spreading on the ceiling — that's when your neighbors search. Widgeta gives you a roofing website built and optimised for the searches that follow every storm in your area — live today, ranking while you're on a roof.",
    "cta": "Get your roofing business online",
    "exampleCta": "See roofing sites",
    "kwH2": "What a roofing website builder should actually do",
    "kw1": "Roofing is a feast-and-famine trade: the searches arrive all at once, the week the hail does. A generic builder can't help with that — a template sitting unchanged since March won't rank in the 72 hours after a storm when every homeowner in three ZIP codes is searching \"hail damage roof inspection.\"",
    "kw2": "A roofing website builder has to be built for the spike. That means storm and insurance pages standing ready before the season, a page for every service in every town you cover, and your license, certifications and job photos up front — because roofing is the trade homeowners are most afraid of getting burned on.",
    "kw3": "Widgeta builds that structure from a few questions, then keeps adding to it as the searches shift — storm damage this month, financing and re-roofing research the next. Your number on every page, no storm-chaser tactics required.",
    "searches": [
      "roof repair near me",
      "roof replacement cost",
      "hail damage roof inspection",
      "roof leak repair",
      "metal roofing contractors",
      "free roof inspection"
    ],
    "c1": "Wichita",
    "c2": "Derby",
    "c3": "Andover",
    "mxSvc": [
      "Hail damage repair",
      "Roof replacement",
      "Roof inspections"
    ],
    "matrixNote": "3 services × 3 towns = 9 pages from one 2-minute answer sheet — each ranking for its own search.",
    "servicePagesLine": "Storm repair in Wichita. Full replacement in Derby. Inspections in Andover. Each service in each town is its own page, because it's its own search.",
    "seasonalLine": "Hail season, hurricane season, insurance deadlines — when local searches spike, your site answers before your competitors do.",
    "seasonH2": "What roofing searches look like through the year",
    "seasonIntro": "Roofing demand doesn't ramp — it detonates, storm by storm. A site built for roofers is standing ready before each one:",
    "seasons": [
      {
        "s": "SPRING",
        "h": "Hail season",
        "t": "The year's defining spike: \"hail damage roof inspection\" and \"roof insurance claim\" surge within hours of a storm, and the roofer already ranking takes the neighborhood."
      },
      {
        "s": "SUMMER",
        "h": "Wind & heat",
        "t": "Straight-line winds strip shingles; heat ages them. \"Roof leak repair\" holds steady while replacement research builds through the long days."
      },
      {
        "s": "FALL",
        "h": "The deadline",
        "t": "Insurance claim windows and pre-winter urgency drive \"roof replacement cost\" — homeowners want it done before the weather turns."
      },
      {
        "s": "WINTER",
        "h": "Ice & leaks",
        "t": "Ice dams and freeze-thaw open leaks. Volume is lower but intent is highest — a ceiling stain in January doesn't wait for spring."
      }
    ],
    "mkt": "Thumbtack",
    "rows": [
      {
        "k": "What it costs",
        "w": "{{PRICE}}, flat",
        "m": "Pay per contact, win or lose",
        "d": "$20–50/mo plus your weekends",
        "a": "$1,500–5,000 setup, then a retainer"
      },
      {
        "k": "Who else gets the lead",
        "w": "No one — calls are only yours",
        "m": "Sold to 3–4 competitors",
        "d": "No one",
        "a": "No one"
      },
      {
        "k": "Who owns the site",
        "w": "You do",
        "m": "There is no site — just a listing",
        "d": "You, if you build and maintain it",
        "a": "Often the agency"
      },
      {
        "k": "Time to live",
        "w": "About a minute",
        "m": "Same day (a profile, not a site)",
        "d": "A weekend, usually more",
        "a": "4–8 weeks"
      },
      {
        "k": "Work after launch",
        "w": "None — new pages appear monthly",
        "m": "Pay per lead, forever",
        "d": "All of it is on you",
        "a": "Billed hourly, or waiting on a retainer"
      }
    ],
    "hasVsPage": false,
    "vsLabel": "Full Widgeta vs Thumbtack comparison — coming soon",
    "examplesH2": "Roofing sites Widgeta generated.",
    "examples": [
      {
        "url": "plainsroofingks.com",
        "name": "Plains Roofing",
        "cities": "Wichita · Derby, KS",
        "phone": "Call (316) 555-0163",
        "p1": "Hail Damage Repair — Wichita",
        "p2": "Roof Replacement — Derby",
        "p3": "Roof Inspections — Andover",
        "caption": "8 answers · live in about a minute"
      },
      {
        "url": "gulfcoastroof.com",
        "name": "Gulf Coast Roofing",
        "cities": "Tampa · Brandon, FL",
        "phone": "Call (813) 555-0151",
        "p1": "Storm Damage — Tampa",
        "p2": "Tile Roof Repair — Brandon",
        "p3": "Re-Roofing — Tampa",
        "caption": "10 answers · live in about a minute"
      }
    ],
    "guideTitle": "The Roofing Marketing Guide",
    "quote": "After the June hailstorm the site was already ranking. Phone didn't stop.",
    "quoteName": "Carl Hutchins",
    "quoteBiz": "Plains Roofing, Wichita KS",
    "photoId": "carl-hutchins",
    "proof1": "Calls come to your phone — no middleman, no shared leads",
    "proof2": "Pages for the exact jobs you want more of",
    "faqH2": "Roofer website questions, answered straight",
    "faqs": [
      {
        "q": "How much does a roofing website cost?",
        "a": "Widgeta is one flat monthly price — {{PRICE}} — including the site, hosting, the SEO work and new pages every month. No setup fee, no contract. For comparison, an agency build for roofers typically runs $1,500–5,000 up front, before any monthly work."
      },
      {
        "q": "How long does it take to get a roofing website online?",
        "a": "About 2 minutes of questions, and the site is live about a minute later. Google finds it over the following days; rankings build over the weeks after that as the pages prove themselves."
      },
      {
        "q": "Do I need SEO if I already have a website?",
        "a": "Try this: search one of your services plus your town. If your site isn't there, it isn't working — it's a business card, not a source of calls. Widgeta's whole job is making the site show up for those searches, and it does that work every month, not once."
      },
      {
        "q": "Will I show up for \"roofer near me\"?",
        "a": "That's the most competitive search in the trade, and no honest company guarantees a spot there. Widgeta targets it — and the dozens of longer, more specific searches (\"hail damage roof inspection wichita\", \"roof replacement cost derby\") where a well-built page wins much sooner. Those are the searches most of your future customers actually type."
      },
      {
        "q": "What happens to my site if I cancel?",
        "a": "It's yours. The domain, the pages, the content — all of it goes with you. No contract holds you, and nothing is held hostage."
      },
      {
        "q": "Do I have to write anything myself?",
        "a": "No. Your answers become the site, and every new page after that is written for you from what people near you search. You'll never be handed a blank text box."
      }
    ]
  },
  "electricians": {
    "metaDesc": "An electrical website built for the searches in your area — a page for every service in every town you serve, updated every month.",
    "tradeName": "Electricians",
    "tradeCaps": "ELECTRICIANS",
    "tradeLower": "electricians",
    "h1": "Be the electrician your neighborhood finds first.",
    "sub": "Panel upgrades, EV chargers, a breaker that won't stop tripping — your neighbors are searching for exactly what you do. Widgeta gives you an electrician website built and optimised for the searches happening on your streets right now.",
    "cta": "Get your electrical business online",
    "exampleCta": "See electrical sites",
    "kwH2": "What an electrician website builder should actually do",
    "kw1": "Electrical work is the trade people are least willing to gamble on — nobody hires the cheapest guy to open their panel. A generic builder's template can't carry that weight: it shows a lightbulb icon and a form, when what a worried homeowner wants is your license number, your insurance, and proof you've done their exact job.",
    "kw2": "An electrician website builder starts there: license and insurance up front, real job photos, and a page for each service in each town — because \"EV charger installation\" in Broken Arrow and \"panel upgrade\" in Tulsa are different searches with different customers.",
    "kw3": "Widgeta builds all of it from a few questions, then keeps publishing as demand shifts — EV rebates one quarter, generator season the next. You stay on the job; the site stays on Google.",
    "searches": [
      "electrician near me",
      "ev charger installation cost",
      "panel upgrade near me",
      "breaker keeps tripping",
      "ceiling fan installation",
      "whole house rewire"
    ],
    "c1": "Tulsa",
    "c2": "Broken Arrow",
    "c3": "Jenks",
    "mxSvc": [
      "Panel upgrades",
      "EV charger install",
      "Emergency electrician"
    ],
    "matrixNote": "3 services × 3 towns = 9 pages from one 2-minute answer sheet — each ranking for its own search.",
    "servicePagesLine": "Panel upgrades in Tulsa. EV chargers in Broken Arrow. Emergency service in Jenks. Each service in each town is its own page, because it's its own search.",
    "seasonalLine": "New EV rebates, holiday lighting, code changes — when local searches shift, your site answers before your competitors do.",
    "seasonH2": "What electrical searches look like through the year",
    "seasonIntro": "Electrical demand follows the calendar more than people think — rebates, holidays, heat and storms each bring their own searches:",
    "seasons": [
      {
        "s": "WINTER",
        "h": "Overload season",
        "t": "Space heaters and holiday lighting trip breakers across town — \"breaker keeps tripping\" peaks, and old panels reveal themselves. Rewire research follows."
      },
      {
        "s": "SPRING",
        "h": "Remodel wiring",
        "t": "Renovation season drives panel upgrades, recessed lighting and ceiling fan installs. Inspections on home sales surface knob-and-tube surprises."
      },
      {
        "s": "SUMMER",
        "h": "Load & outages",
        "t": "AC load strains panels; storms knock power out. \"Whole house generator\" and \"emergency electrician\" climb with the temperature."
      },
      {
        "s": "FALL",
        "h": "Rebate deadlines",
        "t": "Year-end EV and efficiency rebates drive \"ev charger installation cost\" — high-ticket, research-heavy searches won by a page that answers plainly."
      }
    ],
    "mkt": "Thumbtack",
    "rows": [
      {
        "k": "What it costs",
        "w": "{{PRICE}}, flat",
        "m": "Pay per contact, win or lose",
        "d": "$20–50/mo plus your weekends",
        "a": "$1,500–5,000 setup, then a retainer"
      },
      {
        "k": "Who else gets the lead",
        "w": "No one — calls are only yours",
        "m": "Sold to 3–4 competitors",
        "d": "No one",
        "a": "No one"
      },
      {
        "k": "Who owns the site",
        "w": "You do",
        "m": "There is no site — just a listing",
        "d": "You, if you build and maintain it",
        "a": "Often the agency"
      },
      {
        "k": "Time to live",
        "w": "About a minute",
        "m": "Same day (a profile, not a site)",
        "d": "A weekend, usually more",
        "a": "4–8 weeks"
      },
      {
        "k": "Work after launch",
        "w": "None — new pages appear monthly",
        "m": "Pay per lead, forever",
        "d": "All of it is on you",
        "a": "Billed hourly, or waiting on a retainer"
      }
    ],
    "hasVsPage": false,
    "vsLabel": "Full Widgeta vs Thumbtack comparison — coming soon",
    "examplesH2": "Electrical sites Widgeta generated.",
    "examples": [
      {
        "url": "mottaelectric.com",
        "name": "Motta Electric",
        "cities": "Tulsa · Broken Arrow, OK",
        "phone": "Call (918) 555-0176",
        "p1": "Panel Upgrades — Tulsa",
        "p2": "EV Charger Install — Broken Arrow",
        "p3": "Emergency Electrician — Tulsa",
        "caption": "8 answers · live in about a minute"
      },
      {
        "url": "brightvoltnc.com",
        "name": "BrightVolt Electric",
        "cities": "Raleigh · Cary, NC",
        "phone": "Call (919) 555-0187",
        "p1": "EV Chargers — Raleigh",
        "p2": "Panel Replacement — Cary",
        "p3": "Lighting Installation — Raleigh",
        "caption": "9 answers · live in about a minute"
      }
    ],
    "guideTitle": "The Electrician Marketing Guide",
    "quote": "Answered the questions from my truck. The site was up before I finished lunch.",
    "quoteName": "Jake Motta",
    "quoteBiz": "Motta Electric, Tulsa OK",
    "photoId": "jake-motta",
    "proof1": "Calls come to your phone — no middleman, no shared leads",
    "proof2": "Pages for the exact jobs you want more of",
    "faqH2": "Electrician website questions, answered straight",
    "faqs": [
      {
        "q": "How much does a electrician website cost?",
        "a": "Widgeta is one flat monthly price — {{PRICE}} — including the site, hosting, the SEO work and new pages every month. No setup fee, no contract. For comparison, an agency build for electricians typically runs $1,500–5,000 up front, before any monthly work."
      },
      {
        "q": "How long does it take to get an electrician website online?",
        "a": "About 2 minutes of questions, and the site is live about a minute later. Google finds it over the following days; rankings build over the weeks after that as the pages prove themselves."
      },
      {
        "q": "Do I need SEO if I already have a website?",
        "a": "Try this: search one of your services plus your town. If your site isn't there, it isn't working — it's a business card, not a source of calls. Widgeta's whole job is making the site show up for those searches, and it does that work every month, not once."
      },
      {
        "q": "Will I show up for \"electrician near me\"?",
        "a": "That's the most competitive search in the trade, and no honest company guarantees a spot there. Widgeta targets it — and the dozens of longer, more specific searches (\"ev charger installation cost tulsa\", \"panel upgrade broken arrow\") where a well-built page wins much sooner. Those are the searches most of your future customers actually type."
      },
      {
        "q": "What happens to my site if I cancel?",
        "a": "It's yours. The domain, the pages, the content — all of it goes with you. No contract holds you, and nothing is held hostage."
      },
      {
        "q": "Do I have to write anything myself?",
        "a": "No. Your answers become the site, and every new page after that is written for you from what people near you search. You'll never be handed a blank text box."
      }
    ]
  }
};
