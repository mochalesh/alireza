/**
 * Capability pages.
 *
 * Thin by design — the SEO spec puts these at 500–700 words because they
 * convert rather than rank; the trade hubs carry the traffic. Each one links
 * to all four hubs, which is what keeps them useful to the site rather than
 * dead ends.
 *
 * `buyable` decides whether the page is allowed a purchase path at all.
 * Call answering is not live, so it gets a notify-me and an explicit "no
 * purchase yet" line instead of a CTA — the brief requires the coming-soon
 * label everywhere the capability appears.
 *
 * The call-answering summary no longer opens with "about 1 in 4 calls goes
 * unanswered". It is the third place that statistic appeared in the design
 * and we cannot source it; the argument reads the same without a number.
 */
export const CAPABILITY_CONTENT = {
  "website": {
    "name": "Website",
    "tagCaps": "WEBSITE",
    "buyable": true,
    "h1": "A real site with your name on it — live today.",
    "sub": "Answer a few questions and a complete website goes live in about a minute: your services, your areas, your license, your photos. Yours — not rented from a marketplace.",
    "bullets": [
      {
        "t": "Complete from day one",
        "d": "Not five empty pages — a structured site with a page for every service in every area you cover, ready for Google."
      },
      {
        "t": "Your proof up front",
        "d": "License, insurance, years in business and job photos sit exactly where skeptical homeowners look before they call."
      },
      {
        "t": "Built for phones in sunlight",
        "d": "Big text, high contrast, tap-to-call everywhere. Most of your customers will find you from a kitchen floor or a driveway."
      }
    ],
    "kwH2": "What your website includes",
    "k1": "Every Widgeta site ships with the pages a trade business actually needs: one per service per town, a plain about page with your crew and license, and a contact path that goes straight to your phone. No stock-photo filler, nothing for you to write.",
    "k2": "And it stays yours. Cancel and the site, the domain and every page go with you — that's the deal, not the fine print.",
    "how": [
      {
        "n": "01",
        "t": "You answer, once",
        "d": "About 2 minutes — business name, trades, areas, a few photos."
      },
      {
        "n": "02",
        "t": "It assembles itself",
        "d": "Structure, copy and the technical plumbing generate from your answers. Live in about a minute."
      },
      {
        "n": "03",
        "t": "It keeps growing",
        "d": "New pages appear as the searches near you shift — that's the SEO and Content pieces working."
      }
    ],
    "closeH2": "Your site could be live before your next job."
  },
  "seo": {
    "name": "SEO",
    "tagCaps": "SEO",
    "buyable": true,
    "h1": "Found on Google in every area you serve.",
    "sub": "\"SEO\" is the invisible work that decides which plumber, roofer or electrician shows up when a neighbor searches. Widgeta does that work for you, every month — you never see it, you just get the calls.",
    "bullets": [
      {
        "t": "A page for every search",
        "d": "\"Water heater repair Mesa\" and \"drain cleaning Tempe\" are different searches. You get a page for each — that's the whole trick, done at scale."
      },
      {
        "t": "The checklist Google expects",
        "d": "Structured data, speed, mobile, sitemaps — the technical items Google checks before it trusts a site. Handled continuously, invisibly."
      },
      {
        "t": "Watched, not set-and-forgotten",
        "d": "Widgeta reads your search data monthly and adjusts: new pages where demand appears, fixes where rankings slip."
      }
    ],
    "kwH2": "What \"SEO\" means, in plain English",
    "k1": "When someone searches, Google picks an order. SEO is everything that earns you a higher spot in that order: pages that answer the exact search, a site Google can read properly, and signals that you're a real, licensed, local business.",
    "k2": "Agencies charge monthly retainers for this and send reports you have to decode. Widgeta just does the work — your report is the phone ringing.",
    "how": [
      {
        "n": "01",
        "t": "Your answers set the map",
        "d": "Services × areas from your 2-minute setup become the page plan."
      },
      {
        "n": "02",
        "t": "The pages go live",
        "d": "Each one carries the structured data Google reads."
      },
      {
        "n": "03",
        "t": "The loop runs monthly",
        "d": "Search data shows what's searched and where you rank; Widgeta adds and adjusts."
      }
    ],
    "closeH2": "Be the answer when your neighborhood searches."
  },
  "content": {
    "name": "Content",
    "tagCaps": "CONTENT",
    "buyable": true,
    "h1": "Fresh answers to what neighbors ask — written for you.",
    "sub": "Every month, Widgeta writes new pages matched to what people near you actually search — seasonal problems, costs, comparisons — each with your name and number on it.",
    "bullets": [
      {
        "t": "Matched to real searches",
        "d": "Not a blog for the sake of it: every page starts from a search that's actually happening in your area."
      },
      {
        "t": "Timed to the season",
        "d": "Freeze warnings, hail season, rebate deadlines — the pages publish before the spike, not after it."
      },
      {
        "t": "Zero writing from you",
        "d": "You'll never be handed a blank page. It reads like you, because it's built from your answers."
      }
    ],
    "kwH2": "Where the new pages come from",
    "k1": "Widgeta watches local search demand for your trade and your towns. When \"tankless water heater cost\" starts climbing in your county, a page answering it — with your number on it — goes live.",
    "k2": "Over a year that's dozens of pages, and they compound: each one is another door into your business that never closes.",
    "how": [
      {
        "n": "01",
        "t": "Demand appears",
        "d": "A search trend picks up near you."
      },
      {
        "n": "02",
        "t": "The page publishes",
        "d": "A plain-language answer, your details, done."
      },
      {
        "n": "03",
        "t": "It compounds",
        "d": "Every page keeps working. Content is equity, not spend."
      }
    ],
    "closeH2": "Let the answers bring the calls."
  },
  "call-answering": {
    "name": "Call answering",
    "tagCaps": "CALL ANSWERING",
    "buyable": false,
    "h1": "Every call answered — even on a ladder.",
    "sub": "A call you miss on a job is a job someone else takes. Widgeta will pick up when you can’t, take the details, and send them straight to you.",
    "bullets": [
      {
        "t": "Picks up when you can't",
        "d": "On a roof, in a crawlspace, on another call — the phone still gets answered, in your business's name."
      },
      {
        "t": "Takes the job, not a message",
        "d": "What's broken, where, how urgent, callback number — captured like your best office day."
      },
      {
        "t": "Straight to your pocket",
        "d": "A text summary lands before you're off the ladder. Call back when you're down."
      }
    ],
    "kwH2": "How it will work",
    "k1": "The answering picks up after your phone rings out, introduces itself as your business, and walks the caller through the same questions you'd ask. No hold music, no \"press 1\", no lost job.",
    "k2": "Pricing will be announced at launch, and it's optional — the three foundation pieces don't require it.",
    "how": [
      {
        "n": "01",
        "t": "A customer calls you",
        "d": "Your number, unchanged."
      },
      {
        "n": "02",
        "t": "No answer? Widgeta answers",
        "d": "Job details captured, in your name."
      },
      {
        "n": "03",
        "t": "You get the job",
        "d": "A text summary, ready to call back."
      }
    ],
    "closeH2": "Never lose a job to a missed call again."
  }
};
