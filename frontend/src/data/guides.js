/**
 * Pillar guides.
 *
 * The plumbing guide is the approved one, written in full. It is the deepest
 * page on the site by design: the SEO spec puts pillars at 2,000–3,000 words
 * with a table of contents, sticky chapter chips, exactly one commercial
 * link to the matching trade hub, and links to every supporting post.
 *
 * Blocks are typed rather than raw HTML so the template controls the
 * typography and nothing here can smuggle in markup that breaks the page.
 *
 *   p      paragraph
 *   list   items, each { lead, body } — the lead is bolded inline
 *   box    a bordered aside, { label, items } or { label, p }
 *   pull   a full-width line worth remembering
 *   cta    the one commercial link, rendered as a card
 */

export const GUIDES = {
  'plumbing-marketing': {
    trade: 'plumbers',
    tradeLabel: 'Plumbing',
    title: 'Plumbing Marketing Guide — Get Found & Called | Widgeta',
    description:
      'Everything that gets a plumbing company found and called, in plain language and in the order worth doing: profile, reviews, site, local SEO, paid leads.',
    h1: 'The Plumbing Marketing Guide',
    standfirst:
      "Everything that gets a plumbing company found and called in 2026 — in plain language, in the order it's worth doing. No signup, no pitch until chapter five, and you can skip that too.",
    author: 'Sam Ellison',
    authorNote: 'reviewed with working plumbers',
    updated: '2026-08-01',
    updatedLabel: 'August 2026',
    readingTime: '12-minute read',

    chapters: [
      {
        n: '01',
        chip: 'How they find you',
        h2: 'How people actually find a plumber now',
        blocks: [
          { type: 'p', text: "Word of mouth still starts most plumbing jobs — but it doesn't finish them anymore. A neighbor gives your name, and the next thing that neighbor's friend does is type it into Google. What they find in those ten seconds decides whether the referral survives. No website, three reviews, an unclaimed listing with the wrong hours — and the recommendation quietly dies." },
          { type: 'p', text: 'The other big share of jobs starts with no name at all, just a problem: "water heater leaking", "emergency plumber near me", "drain cleaning cost". These split into two kinds, and they behave differently.' },
          { type: 'list', items: [
            { lead: 'Emergency searches', body: 'are decided in minutes — whoever looks legitimate and answers the phone wins.' },
            { lead: 'Research searches', body: '("tankless water heater cost") play out over days or weeks; the plumber whose page answered the question first usually gets the call at the end.' },
          ] },
          { type: 'p', text: 'So the whole game is three surfaces: the map pack (the three businesses Google shows with a map), the regular results under it, and your reviews, which sit on top of both. The next chapters take them in the order of effort-to-payoff.' },
        ],
      },
      {
        n: '02',
        chip: 'Business Profile',
        h2: 'Your Google Business Profile — the free one that matters most',
        blocks: [
          { type: 'p', text: "The map pack is where emergency jobs are won, and your Business Profile is how you get into it. It's free, it takes an evening, and most plumbers set it up once and never touch it again — which is why touching it monthly puts you ahead." },
          { type: 'list', items: [
            { lead: 'Claim and verify it', body: 'even if you never do anything else in this guide.' },
            { lead: 'Pick the right categories.', body: '"Plumber" primary; add the ones you actually want — water heater installation, drainage service. Categories decide which searches you can appear for.' },
            { lead: 'Set service areas honestly.', body: 'The towns you roll trucks to, not the whole metro. Google cross-checks.' },
            { lead: 'Add real photos monthly.', body: 'Trucks, crew, finished work. A listing with fresh photos of real work gives a homeowner something to judge; a logo on its own gives them nothing.' },
            { lead: 'Match your name, address and phone everywhere', body: '— site, profile, Yelp, license records. Mismatches quietly erode trust with Google.' },
          ] },
          { type: 'box', label: 'The monthly 10 minutes', items: [
            'Add 3–5 real job photos — before/after, the truck on site.',
            'Reply to every new review, naming the job.',
            'Answer the Q&A box — homeowners ask "do you do X?"; answer as the owner.',
            'Post one update: a seasonal reminder or a finished job.',
            'Check your hours, especially around holidays — wrong hours are missed emergency calls.',
          ], footer: 'Set a phone reminder for the first Monday of the month. That it happens every month matters more than how long it takes.' },
          { type: 'pull', text: 'An unclaimed profile with the wrong hours costs more jobs than a bad review does.' },
        ],
      },
      {
        n: '03',
        chip: 'Reviews',
        h2: 'Reviews: the ask, the reply, the recovery',
        blocks: [
          { type: 'p', text: "Reviews are the tiebreaker on every surface. Two plumbers in the map pack, one with 12 reviews and one with 140 — the phone doesn't ring evenly." },
          { type: 'p', lead: 'The ask.', text: 'The moment is right after the fix, at the kitchen table, while the relief is fresh: "Reviews are how a small shop like ours competes with the big guys — would you mind?" Then text them the direct link before you leave the driveway. An ask sent that day, while they still remember your name, lands far better than one sent on Friday.' },
          { type: 'box', label: 'The exact text to send — steal it', p: '"Hi Karen, it\'s Mike from Reyes Plumbing — thanks again for having us out today. If you were happy with the work, a quick Google review helps a small shop like ours more than any ad we could buy: [your review link]. Either way, you know where to find me if anything acts up."', footer: 'Send it the same day, one polite reminder a week later, then let it go. And never pay or trade discounts for reviews — the platforms catch it, and in several states so does the attorney general.' },
          { type: 'p', lead: 'The reply.', text: 'Answer every review, good and bad, with a sentence that names the job ("Glad the recirculation line worked out"). It shows the next reader a human runs the company — and Google notices activity.' },
          { type: 'p', lead: 'The recovery.', text: 'A bad review answered calmly, with the fix you offered, often earns more trust than five perfect ones. Never argue, never write fake reviews, never pay for them — platforms catch it, and this audience smells it anyway.' },
        ],
      },
      {
        n: '04',
        chip: 'Your website',
        h2: 'Your website — what it must have and what to skip',
        blocks: [
          { type: 'p', text: "The Business Profile wins the emergency; the website wins everything else — research jobs, referrals checking you out, and every search the map pack doesn't cover. What it needs is specific:" },
          { type: 'list', items: [
            { lead: 'A page for each service in each town.', body: '"Water heater repair in Mesa" and "drain cleaning in Tempe" are different searches; one generic services page can\'t rank for either. This structure is the single biggest lever on the whole site.' },
            { lead: 'License, insurance and years in business above the fold.', body: "It's the first thing skeptical homeowners look for and the last thing most sites show." },
            { lead: "A phone number that's tappable everywhere.", body: 'Most visits are from phones, often mid-crisis.' },
            { lead: 'Real photos.', body: 'Your crew and your trucks beat stock handshakes every time.' },
            { lead: 'Speed.', body: 'A page that takes six seconds on a phone loses the emergency caller before it loads.' },
          ] },
          { type: 'p', lead: 'What to skip:', text: 'a "Welcome to our website" homepage essay, a company-news blog nobody reads, sliders, and anything that exists to look impressive rather than answer a search.' },
          { type: 'box', label: 'What your contact page must show', items: [
            'The license number, written out — plus one line telling homeowners how to look it up in your state\'s registry. The people who check are your best customers.',
            'Insurance, offered: "certificate of insurance available on request" — and actually have the PDF ready.',
            'The permit answer, in advance: "If the job needs a permit, we pull it, and it\'s in the quote."',
            'A named human: "Quotes answered by Mike, usually within two hours" beats an anonymous form every time.',
            'What happens next — who calls and when. Uncertainty is why forms get abandoned mid-typing.',
          ] },
        ],
      },
      {
        n: '05',
        chip: 'Local SEO',
        h2: 'Local SEO, translated into plumbing',
        blocks: [
          { type: 'p', text: 'Strip the jargon and SEO is one idea: Google ranks the page that best answers the exact search, from the most trustworthy local business it can verify. Everything else is detail. The details that matter for a plumbing company:' },
          { type: 'list', items: [
            { lead: 'Answer searches one at a time.', body: 'A page titled "Water Heater Replacement Cost in Mesa" beats a page titled "Our Services" for that search, every time.' },
            { lead: 'Give Google the paperwork.', body: "Structured data — machine-readable labels for your business name, area, hours, services — is invisible to visitors but tells Google you're a real local business, not a lead-gen front." },
            { lead: 'Follow the seasons.', body: 'Searches move before the jobs do: winterizing in fall, burst pipes at the first freeze, drains in storm season. Pages published ahead of the wave catch it; pages published after it watch it pass.' },
            { lead: 'Keep going.', body: 'Rankings compound like a maintenance contract: small, steady work every month beats a heroic one-time rebuild that then sits still for three years.' },
          ] },
          { type: 'pull', text: 'Google ranks answers, not websites. Be the answer, town by town.' },
          { type: 'cta', label: "If you'd rather not do this by hand", text: 'Chapters 4 and 5 are what Widgeta automates: the site, the page-per-service-per-town structure, and the monthly SEO work — built from a 2-minute questionnaire, {{PRICE}} flat. The rest of this guide still applies either way.' },
        ],
      },
      {
        n: '06',
        chip: 'Paid leads',
        h2: 'Paid leads and ads — the honest math',
        blocks: [
          { type: 'p', text: "Lead marketplaces (Angi, Thumbtack) and Google's Local Services Ads all do the same thing: rent you demand. That's not automatically bad — it's bad as a permanent foundation. Fair uses: you're brand new with an empty calendar, or you're filling a slow-season gap." },
          { type: 'p', text: "Whatever you buy, track one number: cost per job won, not cost per lead. A $40 lead shared with four plumbers that you close a quarter of the time is a $160 job fee — before you've driven anywhere. Run that math monthly and the decision usually makes itself." },
          { type: 'p', text: 'How Local Services Ads differ from marketplaces, in practice:' },
          { type: 'list', items: [
            { lead: 'Exclusivity.', body: 'An LSA lead called you and only you; a marketplace lead is typically shared with, or quoted by, several pros at once.' },
            { lead: 'Pricing.', body: 'LSAs charge per lead that actually contacts you, with prices set by trade and market; marketplaces charge per shared lead or per response, won or lost.' },
            { lead: 'Disputes.', body: 'LSAs have a real credit process for junk leads — wrong service, spam, out of area. Marketplace refund policies vary and are famously harder to win.' },
            { lead: 'The badge.', body: '"Google Guaranteed" requires background and license checks — that screening is itself trust a homeowner can see next to your name.' },
          ] },
          { type: 'p', text: "None of it changes the underlying rule: it's all rented demand. Cap it, measure cost per job won, and let the owned side compound underneath." },
          { type: 'p', text: 'If you do run paid: Local Services Ads first (you pay per lead, they\'re not shared, and the "Google Guaranteed" badge carries weight), marketplaces second, and set a hard monthly cap on both. Then let every rented dollar buy time to build the owned side — the profile, the reviews, the site — so next year needs less rent.' },
        ],
      },
      {
        n: '07',
        chip: 'The 30-day plan',
        h2: 'The 30-day plan',
        blocks: [
          { type: 'list', items: [
            { lead: 'Week 1 — Claim everything.', body: 'Business Profile verified, categories set, service areas honest, 10 real photos up, name-address-phone matched everywhere.' },
            { lead: 'Week 2 — Start the review engine.', body: 'Direct review link saved as a text template; ask on every completed job; reply to every existing review, oldest first.' },
            { lead: 'Week 3 — Fix the website\'s bones.', body: 'License and insurance above the fold, tappable phone number, one page per major service per town — start with your two best towns.' },
            { lead: 'Week 4 — Decide the money.', body: 'Run cost-per-job-won on anything you\'re paying for. Keep what beats your average ticket, cap it, and put the difference into the owned side.' },
          ] },
          { type: 'p', text: 'Then repeat the monthly loop: photos, review asks, one new page. That loop — done or automated — is the whole secret.' },
        ],
      },
    ],
  },
};
