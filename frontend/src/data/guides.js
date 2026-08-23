/**
 * Pillar guides — one per trade.
 *
 * The deepest pages on the site by design: the SEO spec puts pillars at
 * 2,000–3,000 words with a table of contents, sticky chapter chips, exactly
 * one commercial link to the matching trade hub, and links to every
 * supporting post.
 *
 * Four guides, and they are four different arguments rather than one
 * argument with the trade word swapped — which is the doorway-page risk the
 * spec names, and the risk grows with every guide added:
 *
 *   plumbing    — the emergency trade. Speed and trust decide it.
 *   hvac        — the calendar decides it. Everything is timing.
 *   roofing     — storms and insurance, and a reputation problem the other
 *                 three trades do not carry.
 *   electrician — two businesses under one license: the outage tonight and
 *                 the project next quarter.
 *
 * Where two guides would say the same thing — ask for reviews, claim your
 * profile — the later one says it in one line and points at the blog post,
 * rather than repeating a chapter.
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
  /* ================================================================== */
  'hvac-marketing': {
    trade: 'hvac',
    tradeLabel: 'HVAC',
    title: 'HVAC Marketing Guide — Own Both Seasons | Widgeta',
    description:
      'HVAC marketing is a calendar problem before it is anything else. What to publish in February so it works in July, and how to flatten the year.',
    h1: 'The HVAC Marketing Guide',
    standfirst:
      'Every other trade can market whenever it gets around to it. HVAC cannot — search runs ahead of the weather, and everything you publish in the first hot week arrives after the decision. This guide is organised by date.',
    author: 'Sam Ellison',
    authorNote: 'reviewed with working HVAC owners',
    updated: '2026-08-01',
    updatedLabel: 'August 2026',
    readingTime: '13-minute read',

    chapters: [
      {
        n: '01',
        chip: 'The real year',
        h2: 'Your year has four seasons and only two of them pay',
        blocks: [
          { type: 'p', text: 'Every HVAC owner knows the shape: two frantic stretches where you turn work away, and two where you wonder how to keep the crew. What most do not act on is that the marketing calendar and the work calendar are not the same calendar. Search runs ahead of the weather by roughly two weeks, and a page takes weeks more to be found — so the marketing year starts months before the money does.' },
          { type: 'table', rows: [
            ['March–April', 'Tune-ups: "AC tune up", "service before summer"'],
            ['May–July', 'The cooling peak: "AC not cooling", "emergency AC repair"'],
            ['August–September', 'Failures and replacement: "new AC cost", "AC installation"'],
            ['October–November', 'Heating opens: "furnace not working", "furnace tune up"'],
            ['December–February', 'Commercial contracts, planning — and next summer’s pages'],
          ], note: 'Timing shifts by region: southern markets open earlier and run longer; northern ones have two real peaks instead of one big one.' },
          { type: 'p', text: 'Read that table as a publishing schedule rather than a weather report. Anything you want working in July is written in February. Anything you want working in November is written in August, in the middle of the other peak — which is exactly why it does not get written.' },
          { type: 'pull', text: 'Everything you publish in the first hot week arrives after the decision.' },
        ],
      },
      {
        n: '02',
        chip: 'Before the wave',
        h2: 'The pages that have to exist before the phone rings',
        blocks: [
          { type: 'p', text: 'HVAC has more distinct searches than any other trade in this set, because the same house generates a repair customer, a maintenance customer and a replacement customer at different moments — and they use different words. One Services page cannot answer three people.' },
          { type: 'list', items: [
            { lead: 'A page per service per town.', body: 'AC repair, central air maintenance, furnace repair, duct cleaning — in each town you cover. This is the longest lead time of anything here, so it goes first.' },
            { lead: 'A straight price page.', body: '"How much does a new AC unit cost" is searched days before the money is spent. An honest range with an explanation of what moves it — tonnage, ductwork, electrical, SEER — earns the call that follows. Silence on price sends them to whoever will talk about it.' },
            { lead: 'A repair-or-replace page.', body: 'The most-asked question in August, and the one that decides whether you sell a $400 job or a $9,000 one. Answer it honestly, including the cases where repair genuinely wins.' },
            { lead: 'A maintenance plan page.', body: 'Written for a different reader entirely: someone comparing plans, not someone whose house is hot.' },
            { lead: 'An emergency page per town.', body: 'Short, phone-first, no essay. The visitor is standing in a hot house with a phone.' },
          ] },
          { type: 'box', label: 'The two-week rule', p: 'Search for a season starts about two weeks before you feel that season on a job site. A page takes several weeks after publishing to be found and start ranking. So the publishing date you want is roughly six to eight weeks before the season, not two.', footer: 'Which means: summer pages in February. Heating pages in August. Both of those are in somebody else’s idea of the wrong month, and that is the point.' },
        ],
      },
      {
        n: '03',
        chip: 'Maintenance plans',
        h2: 'Maintenance plans are the only thing that flattens the year',
        blocks: [
          { type: 'p', text: 'Everything else in this guide moves work around inside the peaks. Maintenance agreements are the one mechanism that puts revenue into February, and they do three things at once: they pay in the quiet months, they book the tune-up season in advance, and they hand you the replacement job when the unit finally dies, because you are the company that has been looking at it twice a year.' },
          { type: 'p', lead: 'Why they are undersold.', text: 'Because they are sold at the end of a repair call, verbally, by a technician who is already late for the next job. The plan lives in his head and dies in the van. The fix is unglamorous: a page that explains the plan, a price on it, and a link the tech can text from the driveway.' },
          { type: 'list', items: [
            { lead: 'Put the price on the page.', body: 'A plan whose price is "call us" is not a plan, it is a lead form. This is a subscription; subscriptions publish prices.' },
            { lead: 'Say exactly what is included.', body: 'How many visits, what is checked, what discount on repairs, whether priority scheduling is real. Vagueness reads as a trick.' },
            { lead: 'Say what happens to the money if they sell the house.', body: 'The question everyone asks second and almost nobody answers on a page.' },
            { lead: 'Make it monthly if you can.', body: 'A number that sits beside a phone bill converts differently from an annual figure that sits beside a repair.' },
          ] },
          { type: 'pull', text: 'A maintenance plan is the only page on your site that pays you in February.' },
        ],
      },
      {
        n: '04',
        chip: 'Repair or replace',
        h2: 'The repair-or-replace conversation, in public',
        blocks: [
          { type: 'p', text: 'This is the highest-stakes conversation in the trade and it is almost always had in a hallway, verbally, with a homeowner who has already been told something different by a neighbour. Having it on a page first changes the call: they arrive knowing the framework, and they arrive trusting the company that explained it without being in the room.' },
          { type: 'p', text: 'The framework itself is not secret and writing it down costs you nothing:' },
          { type: 'list', items: [
            { lead: 'Age against expected life.', body: 'Say the honest number for the equipment you install, and say that maintenance moves it.' },
            { lead: 'The cost of the repair against the cost of replacement.', body: 'Give the rule you actually use, and say it is a rule of thumb rather than a law.' },
            { lead: 'The refrigerant question.', body: 'Older systems get expensive to service as refrigerants are phased down. This is a real and rising factor and homeowners have heard confusing versions of it.' },
            { lead: 'Efficiency, honestly.', body: 'A newer system does cost less to run — and the payback period depends on climate, usage and rates. Contractors who publish that nuance get believed on the rest.' },
            { lead: 'What you would do.', body: 'End with a recommendation. A page that lays out five factors and then refuses to conclude is a page that helped nobody.' },
          ] },
          { type: 'box', label: 'Where this pays off', p: 'The replacement decision is researched over days, often across several tabs, often with a spouse. The company whose page framed the decision is in every one of those conversations without sending anyone.', footer: 'That is why this page outperforms almost anything else you can write, despite getting far fewer visits than the emergency pages.' },
        ],
      },
      {
        n: '05',
        chip: 'The website',
        h2: 'What an HVAC website must do that a general one does not',
        blocks: [
          { type: 'p', text: 'The basics are the same for every trade — license and insurance up front, tappable phone, real photos, speed. Three things are specific to HVAC and most sites get all three wrong.' },
          { type: 'list', items: [
            { lead: 'It has to serve two urgencies on the same site.', body: 'The person whose house is 90 degrees and the person pricing a system for autumn need different pages with different tones. Sending both to a Services page fails both.' },
            { lead: 'It has to change with the season.', body: 'A site that says "beat the heat" in November is telling a search engine and a customer the same thing: nobody is home. The seasonal swap is the single most visible signal of an active company.' },
            { lead: 'It has to survive the peak.', body: 'Your busiest week is your highest-traffic week, on phones, often on bad connections in hot houses. A page that takes six seconds loses the emergency caller before it renders.' },
          ] },
          { type: 'p', lead: 'What to skip:', text: 'a manufacturer logo wall that looks like every competitor, stock photos of smiling families beside vents, and a homepage essay about your commitment to comfort.' },
          { type: 'cta', label: "If you'd rather not run this calendar by hand", text: 'The publishing schedule in chapters 2 and 3 is what Widgeta automates: the page-per-service-per-town grid, and the seasonal pages published before the wave rather than during it — from a 2-minute questionnaire, {{PRICE}} flat. The rest of this guide applies either way.' },
        ],
      },
      {
        n: '06',
        chip: 'Paid, in peak',
        h2: 'Paid advertising, and the peak-pricing trap',
        blocks: [
          { type: 'p', text: 'HVAC has the cruellest paid-search economics of the four trades, and it is worth understanding before you set a budget rather than after. Cost per click on cooling terms climbs exactly when you need it — because every competitor in the metro is bidding on the same week. The identical budget buys a fraction of the clicks in July that it buys in January.' },
          { type: 'p', text: "That is not an argument against advertising. It is an argument against advertising being the foundation, and for two specific habits:" },
          { type: 'list', items: [
            { lead: 'Track cost per job won, monthly.', body: 'Not cost per click, not lead count. A lead that costs $60 and closes a third of the time is a $180 acquisition cost before a truck moves.' },
            { lead: 'Budget by season, not by month.', body: 'A flat monthly spend overpays in July and underspends in April, which is when tune-up customers are cheap to reach and become replacement customers later.' },
          ] },
          { type: 'p', lead: 'Local Services Ads, specifically.', text: 'They differ from ordinary search ads in ways that matter here: you pay per lead that actually contacts you rather than per click, the lead is not shared with three competitors, there is a real credit process for junk leads, and the Google Guaranteed badge requires background and license checks — which is itself visible trust next to your name. For HVAC in peak season that combination usually beats standard search ads.' },
          { type: 'p', text: 'And underneath all of it, the free side works the other way round: a page written in February costs nothing extra in July, and works harder every summer that passes.' },
        ],
      },
      {
        n: '07',
        chip: 'The off-season',
        h2: 'The off-season is the whole job',
        blocks: [
          { type: 'p', text: 'Most HVAC companies treat October to February as the gap between the money. It is the opposite: it is the only stretch of the year when you have the time to do the work that decides the next peak. Here is what that stretch is actually for.' },
          { type: 'list', items: [
            { lead: 'Write next summer’s pages.', body: 'You are free now, and they need weeks to mature. This is the single highest-value thing on the list.' },
            { lead: 'Sell maintenance plans hard.', body: 'A plan sold in November books a tune-up in April and hands you a replacement in three years.' },
            { lead: 'Chase commercial contracts.', body: 'Property managers, restaurants, small facilities — they review annually and they review now, and they buy on written response times rather than on a hot house.' },
            { lead: 'Fix everything you noticed in July.', body: 'Every peak generates a list of things the website could not do. This is when that list gets cleared.' },
            { lead: 'Catch up on review replies.', body: 'Summer gave you the most customers of the year. Reply to every one of them properly now.' },
          ] },
          { type: 'p', text: 'The pattern behind all five is the same one: the busy season is for executing and the quiet season is for building. Companies that invert it — marketing in July, coasting in January — spend every peak competing on price against companies that were already visible.' },
          { type: 'pull', text: 'October is the real March. That is when next summer gets decided.' },
        ],
      },
    ],
  },

  /* ================================================================== */
  'roofing-marketing': {
    trade: 'roofers',
    tradeLabel: 'Roofing',
    title: 'Roofing Marketing Guide — Storms, Claims, Trust | Widgeta',
    description:
      'Roofing has a reputation problem it did not create and a demand pattern nobody else has. How to be findable before the hail arrives.',
    h1: 'The Roofing Marketing Guide',
    standfirst:
      'Two things make roofing different from every other trade: demand arrives in a single afternoon, and your customers have already been warned about people like you. This guide is about both.',
    author: 'Sam Ellison',
    authorNote: 'reviewed with working roofers',
    updated: '2026-08-01',
    updatedLabel: 'August 2026',
    readingTime: '13-minute read',

    chapters: [
      {
        n: '01',
        chip: 'Two customers',
        h2: 'You have two completely different customers',
        blocks: [
          { type: 'p', text: 'Almost every roofing job arrives through one of two doors, and the companies that struggle are usually built for one of them while pretending to serve both.' },
          { type: 'list', items: [
            { lead: 'The storm customer.', body: 'Yesterday they were not thinking about their roof. Today there is water in the ceiling or hail on the lawn. They have never hired a roofer, they do not know what anything costs, and within 48 hours somebody will knock on their door offering to handle it.' },
            { lead: 'The planned customer.', body: 'They have known for two years that the roof is near the end. They are getting three quotes, reading about materials, and taking six weeks about it. Price matters less than they say; certainty matters more.' },
          ] },
          { type: 'p', text: 'They search differently — "roof leak repair" and "emergency tarp" against "roof replacement cost" and "metal vs shingle" — they decide on different timescales, and they need different pages. A site that speaks only to urgency loses every planned replacement; a site that only sells craftsmanship loses every storm.' },
          { type: 'pull', text: 'One roof, two businesses. Most roofing sites are built for whichever one the owner prefers.' },
        ],
      },
      {
        n: '02',
        chip: 'The trust gap',
        h2: 'The reputation problem you did not create',
        blocks: [
          { type: 'p', text: 'Roofing carries something plumbing and HVAC do not: a homeowner who has been told, by the news and by their insurer and by their neighbour, to be careful. Storm-chasing crews, deposits taken and never returned, work done badly by companies that were three states away by the time the leak reappeared — none of it is your fault, and all of it is in the room before you arrive.' },
          { type: 'p', text: 'Which means the ordinary trust signals are not enough here. They are table stakes; what wins is being visibly, checkably permanent.' },
          { type: 'box', label: 'What permanence looks like on a page', items: [
            'How many years in these specific towns — not "in the industry".',
            'A physical yard or office address, not just a service area.',
            'License and insurance written out, with a line on how to verify them.',
            'The manufacturer certifications you actually hold, which require the manufacturer to have vetted you.',
            'The warranty in plain words: what is covered, for how long, and who honours it if you are busy.',
            'Photos of jobs in named local neighbourhoods, ideally a few years old.',
          ], footer: 'Every one of these says the same thing: we will still be here when the warranty matters. That is the sentence the storm customer is trying to answer.' },
          { type: 'p', lead: 'What not to do:', text: 'attack storm chasers as a category. Some are competent and some are not, and a page that mostly runs down competitors teaches the reader more about you than about them. State your own position and let the comparison happen on its own.' },
        ],
      },
      {
        n: '03',
        chip: 'The storm week',
        h2: 'The week after a storm, and the month before it',
        blocks: [
          { type: 'p', text: 'A hailstorm passes and within hours the searches change shape: not "roof replacement cost" but "hail damage inspection", "emergency tarp", "roof leak repair", each with a town name attached. Within a day the out-of-town crews arrive. Whoever is already visible in those searches takes the share that is not knocked out of.' },
          { type: 'p', lead: 'The uncomfortable part:', text: 'nothing you do during the storm week affects whether you are visible in it. Pages take weeks to be found. Storm visibility is bought in the quiet months, which is why the companies that dominate every storm look lucky and are not.' },
          { type: 'list', items: [
            { lead: 'A storm damage page per town you cover.', body: 'Written in the off-season. Names the town, describes what hail and wind do to the roof types common there.' },
            { lead: 'An emergency tarping page.', body: 'The most urgent search there is, and the one that becomes the full replacement.' },
            { lead: 'An insurance claim page.', body: 'Chapter 4. This is the biggest one.' },
            { lead: 'One page about this storm, published during it.', body: 'The date, the towns hit, what you are seeing on roofs. It ranks fast because it is timely, and it reads as someone who is actually here.' },
          ] },
          { type: 'box', label: 'During the week itself', items: [
            'Answer everything fast — people are calling four numbers and the first real answer usually wins.',
            'Be honest about the schedule. Saying three weeks costs you a job; saying next week and arriving in three costs you a review that lasts for years.',
            'Photograph everything. These become next year’s pages.',
            'Do not take large deposits you cannot honour quickly — this is the specific behaviour that made the trust gap.',
          ] },
        ],
      },
      {
        n: '04',
        chip: 'Insurance',
        h2: 'The insurance conversation, and where roofers lose it',
        blocks: [
          { type: 'p', text: 'For storm work the customer is not really deciding between roofers; they are trying to work out how the claim works, and they will trust whoever explains it clearly first. This is the single largest content opportunity in the trade and most roofing sites have one vague paragraph about "working with all insurance companies".' },
          { type: 'p', text: 'What a homeowner actually wants to know, in order:' },
          { type: 'list', items: [
            { lead: 'Should I file at all?', body: 'A claim for damage below the deductible is a claim that costs them and gains nothing. Saying so out loud, on a page, is the most credible thing on your site.' },
            { lead: 'What is the process and how long?', body: 'Inspection, adjuster, scope, supplement, work, final payment. Six steps written plainly beats any promise.' },
            { lead: 'What is my deductible really?', body: 'And — say this clearly — you cannot waive it or absorb it. In many states offering to is illegal, and the companies that do it are the ones the trust gap is about.' },
            { lead: 'What if the adjuster misses damage?', body: 'The supplement process. This is where an experienced roofer earns their fee and where homeowners have no idea help exists.' },
            { lead: 'What do I sign?', body: 'Be specific about what a contingency agreement is and is not. Homeowners have been burned by signing something they thought was an estimate.' },
          ] },
          { type: 'pull', text: 'Telling a homeowner not to file a claim is the most persuasive thing on your website.' },
          { type: 'p', text: 'And keep the claims language careful: you inspect, document and quote the work. Interpreting policy terms or negotiating the claim on the customer’s behalf is regulated in many states, and getting the wording wrong on a public page is a real risk rather than a theoretical one.' },
        ],
      },
      {
        n: '05',
        chip: 'The website',
        h2: 'What a roofing website has to carry',
        blocks: [
          { type: 'p', text: 'Two customers, one trust gap, and a demand curve that can go from nothing to everything overnight. That produces a specific list.' },
          { type: 'list', items: [
            { lead: 'A page per service per town, both kinds.', body: 'Roof replacement in each town, and storm damage in each town. Different customers, different words, different pages.' },
            { lead: 'Material pages.', body: 'Asphalt against metal against tile, with honest lifespans and cost ranges. The planned customer reads these for weeks and buys from whoever taught them.' },
            { lead: 'Proof of permanence, above the fold.', body: 'Chapter 2’s list, on every page rather than on an About page nobody opens.' },
            { lead: 'Real photographs of local jobs.', body: 'Roofing is the most visual trade of the four and the one whose sites use the most stock imagery. Named streets and recognisable rooflines beat everything.' },
            { lead: 'Speed on a phone.', body: 'Storm traffic is phone traffic, often on a degraded network in a neighbourhood that just lost power.' },
          ] },
          { type: 'cta', label: "If you'd rather not build this in the quiet months", text: 'The town grid, the storm pages and the seasonal publishing in chapters 3 and 5 are what Widgeta runs for you — built from a 2-minute questionnaire, {{PRICE}} flat, and published before the weather rather than after it. Everything else in this guide applies either way.' },
        ],
      },
      {
        n: '06',
        chip: 'Paid leads',
        h2: 'Bought leads, door knocking, and the honest math',
        blocks: [
          { type: 'p', text: 'Roofing has the most expensive leads of the four trades, because the ticket is the largest. Shared marketplace leads for a roof can cost several times what a plumbing lead costs, and they are sold to several companies at once — so you are buying the right to compete on price for a job the customer has not decided to do.' },
          { type: 'p', text: 'Run the same number every roofer should run monthly: total spend divided by jobs actually won. Not leads, not appointments — signed jobs. In roofing that number is often startling the first time it is calculated, and it is the number that ends most marketplace subscriptions.' },
          { type: 'p', lead: 'On door knocking:', text: 'it works, and it is also exactly the behaviour that produced the trust gap in chapter 2. If you canvass, the way to do it without joining that category is to be the company whose name they can look up on the spot — a real site, real reviews, a local address — so the knock is a reminder rather than a cold approach.' },
          { type: 'p', text: 'Local Services Ads are worth more here than marketplace leads: the lead is not shared, you pay when someone actually contacts you, and the Google Guaranteed badge does specific work in a trade with a trust problem. Cap the spend, measure cost per job won, and let the free side compound underneath.' },
        ],
      },
      {
        n: '07',
        chip: 'The 30-day plan',
        h2: 'The thirty-day plan',
        blocks: [
          { type: 'list', items: [
            { lead: 'Week 1 — Prove you are permanent.', body: 'Years in these towns, address, license and insurance with verification instructions, certifications, warranty in plain words — on the site, above the fold. Claim and complete the Business Profile if it is not done.' },
            { lead: 'Week 2 — Write the insurance page.', body: 'Chapter 4, all five questions, including the one about not filing. Nothing else you write this month will work as hard.' },
            { lead: 'Week 3 — Build the storm grid.', body: 'A storm damage page for each of your two or three main towns, plus the tarping page. Publish now; they need months to be ready.' },
            { lead: 'Week 4 — Reviews and the numbers.', body: 'Ask every completed job, same day. Then run cost-per-job-won on every lead source and cap or cut whatever loses.' },
          ] },
          { type: 'p', text: 'Then the monthly loop: photos from real jobs, review asks, one new page. In roofing that loop is doing something particular — it is buying you visibility in a storm that has not happened yet, which is the only way anyone has ever been visible in one.' },
        ],
      },
    ],
  },

  /* ================================================================== */
  'electrician-marketing': {
    trade: 'electricians',
    tradeLabel: 'Electrical',
    title: 'Electrician Marketing Guide — Both Sides of It | Widgeta',
    description:
      'An electrical company is two businesses: the outage tonight and the project next quarter. They search differently and need different pages.',
    h1: 'The Electrician Marketing Guide',
    standfirst:
      'Service calls and project work are two different businesses that happen to share a van. Marketing them as one is why most electrical websites underperform — this guide separates them.',
    author: 'Sam Ellison',
    authorNote: 'reviewed with working electricians',
    updated: '2026-08-01',
    updatedLabel: 'August 2026',
    readingTime: '12-minute read',

    chapters: [
      {
        n: '01',
        chip: 'Two businesses',
        h2: 'Two businesses under one license',
        blocks: [
          { type: 'p', text: 'The plumber gets emergencies. The HVAC company gets seasons. The electrician gets both, plus a third thing neither of them has: planned project work that is researched for weeks and worth ten times a service call.' },
          { type: 'table', rows: [
            ['Service side', 'Outage tonight, dead outlets, a breaker that keeps tripping'],
            ['Project side', 'Panel upgrade, rewire, EV charger, generator, an addition'],
            ['Trade side', 'Builders and GCs who buy on relationship and schedule'],
          ], note: 'Most electrical companies earn across all three and market to one — usually the service side, because that is the phone that rings.' },
          { type: 'p', text: 'They behave nothing alike. A service customer searches at 9pm with a flashlight and hires within the hour. A project customer searches on a Sunday, reads for two weeks, gets three quotes, and hires the one that explained the thing they were worried about. A page written for the first is invisible to the second.' },
          { type: 'pull', text: 'The outage is decided in ten minutes. The panel upgrade is decided over two weeks. Same company, different pages.' },
        ],
      },
      {
        n: '02',
        chip: 'The service side',
        h2: 'Being found in the ten minutes',
        blocks: [
          { type: 'p', text: 'Half the house has no power, or an outlet is warm, or the breaker will not stay in. This customer is not comparing companies — they are scrolling until something looks legitimate and has a number they can tap. The whole game is being in the map pack and being obviously real.' },
          { type: 'list', items: [
            { lead: 'The Business Profile does most of this.', body: 'Claimed, correct categories, honest service area, hours that are true, fresh photos. If you only do one thing on the service side, this is it — and it is free.' },
            { lead: 'Emergency pages per town.', body: 'Short. Phone number at the top. What you can usually do same-day and what needs the utility instead.' },
            { lead: 'Say what an after-hours call costs.', body: 'Before they ask. The single biggest source of bad reviews in this trade is a callout fee that arrived as a surprise.' },
            { lead: 'Answer the safety question honestly.', body: 'Burning smell, sparking panel, warm outlet — say plainly what to switch off and when to call the utility rather than an electrician. Contractors worry this loses a job. It does the opposite: it is the most trusted paragraph on the site.' },
          ] },
          { type: 'box', label: 'The reviews point', p: 'Electrical work is invisible when it is done well — the customer sees a wall that looks like it did before. That makes reviews carry more weight here than in trades with visible results, because they are the only evidence a stranger can see.', footer: 'Ask on every job, same day, with a saved text and the direct link. The blog post on asking for reviews has the exact wording.' },
        ],
      },
      {
        n: '03',
        chip: 'The project side',
        h2: 'Being chosen three weeks later',
        blocks: [
          { type: 'p', text: 'The project customer does something the service customer never does: they read. Panel upgrades, rewires, generators and charger installs all get researched before anyone is called, and almost every electrical website in the country has nothing for them to read.' },
          { type: 'p', text: 'That is a real opening. These pages get a fraction of the traffic of the emergency pages and are worth several times more, because they arrive at someone who is about to spend thousands and has not chosen anyone yet.' },
          { type: 'list', items: [
            { lead: 'A page per project type, per town.', body: 'Panel upgrade, whole-home rewire, EV charger, generator install, recessed lighting. Each is a different buyer.' },
            { lead: 'Real price ranges with reasons.', body: 'A panel upgrade page that explains what makes it $2,000 versus $5,000 — service capacity, meter position, drywall, permit — beats every "call for a free quote" page in the market.' },
            { lead: 'The permit and inspection answer.', body: 'Whether you pull it, whether it is in the price, how long inspection adds. Homeowners are quietly worried about this and few sites mention it.' },
            { lead: 'Photos of finished panels.', body: 'A tidy panel is this trade’s equivalent of a finished roof. It persuades more than any paragraph.' },
            { lead: 'Say what you do not do.', body: 'If you do not take on rewires of knob-and-tube, say so. It reads as competence, not limitation.' },
          ] },
        ],
      },
      {
        n: '04',
        chip: 'Where demand moves',
        h2: 'Where the work is moving, and publishing early',
        blocks: [
          { type: 'p', text: 'Electrical is the one trade in this set whose demand mix is genuinely changing rather than just cycling. Older housing stock keeps needing panel capacity it was never built for, and the things people plug in keep getting larger. That matters for marketing in a specific way: some searches are still small and almost uncontested.' },
          { type: 'p', lead: 'The timing argument.', text: 'A page published into a crowded search spends months climbing. A page published into a near-empty one arrives near the top quickly and keeps that position as the search grows underneath it. Identical work; the timing decides the outcome.' },
          { type: 'list', items: [
            { lead: 'EV charger installation.', body: 'Growing, and in most markets served by pages that barely exist. The buyer has just spent a large sum on a car and is anxious about their panel — answer that first.' },
            { lead: 'Panel upgrades.', body: 'The job half of the charger installs turn into, and the larger ticket.' },
            { lead: 'Whole-home surge protection.', body: 'Small money, easy sell, and almost nobody writes about it.' },
            { lead: 'Generators and battery backup.', body: 'Demand spikes after every regional outage, which means the page has to already exist.' },
          ] },
          { type: 'box', label: 'The best content plan is on your phone', p: 'Keep a note of questions customers have started asking that they were not asking a year ago. That list is worth more than any keyword tool, because it comes from your market rather than an average of everyone’s.', footer: 'You notice these before any marketer does. You are the one being asked on the job site.' },
        ],
      },
      {
        n: '05',
        chip: 'The website',
        h2: 'One website, two front doors',
        blocks: [
          { type: 'p', text: 'The mistake almost every electrical site makes is choosing. Either it is an emergency site with a big phone number and nothing to read, or it is a portfolio site with beautiful lighting photos and no way to get help tonight. You need both doors, clearly labelled, from the homepage.' },
          { type: 'list', items: [
            { lead: 'Two paths from the first screen.', body: '"Something is wrong right now" and "I’m planning work". Two links, no cleverness.' },
            { lead: 'License number and insurance above the fold.', body: 'Electrical is the trade where an unlicensed job burns a house down, and homeowners know it. This is checked more here than anywhere else.' },
            { lead: 'A page for every service in every town.', body: 'Both kinds. This is the structural lever behind everything else.' },
            { lead: 'Speed and a tappable number.', body: 'Half the service traffic is on a phone in a dark house.' },
          ] },
          { type: 'p', lead: 'What to skip:', text: 'a gallery of chandelier installs on the homepage, a slider, and any sentence containing the words "full-service electrical solutions".' },
          { type: 'cta', label: "If you'd rather not build both sides by hand", text: 'The two-door structure and the page-per-service-per-town grid in chapters 3 and 5 are what Widgeta builds and keeps publishing — from a 2-minute questionnaire, {{PRICE}} flat, with new pages each month as the searches near you shift. The rest of this guide applies either way.' },
        ],
      },
      {
        n: '06',
        chip: 'Paid and trade',
        h2: 'Paid leads, and the referral side nobody markets',
        blocks: [
          { type: 'p', text: 'Paid works differently on each side of the business, which is why a single ad budget usually disappoints. Service-side clicks are cheap and convert fast. Project-side clicks are expensive and convert weeks later, if at all, because the person clicking is still reading.' },
          { type: 'list', items: [
            { lead: 'Local Services Ads suit the service side.', body: 'You pay per lead that contacts you, it is not shared with three competitors, and the Google Guaranteed badge is real screening a homeowner can see.' },
            { lead: 'Search ads suit the project side badly.', body: 'A click on "panel upgrade cost" is someone at the start of two weeks of reading. That is a content job, not an ad job.' },
            { lead: 'Measure cost per job won, monthly.', body: 'Split by side. The blended number hides which half is losing money.' },
          ] },
          { type: 'p', lead: 'The part almost nobody markets:', text: 'builders, general contractors and property managers are repeat, high-volume customers who choose on schedule reliability rather than price — and they look you up too. A single page written for them, covering the size of jobs you take, your typical lead time, and whether you handle permits and inspections, is unglamorous and often the highest-value page on an electrical site.' },
        ],
      },
      {
        n: '07',
        chip: 'The 30-day plan',
        h2: 'The thirty-day plan',
        blocks: [
          { type: 'list', items: [
            { lead: 'Week 1 — Own the service side.', body: 'Business Profile claimed and complete, categories right, hours true, ten real photos. Emergency page per main town with the callout fee stated.' },
            { lead: 'Week 2 — Start the review engine.', body: 'Direct link saved as a text template, ask on every job the same day, reply to every existing review oldest first.' },
            { lead: 'Week 3 — Open the second door.', body: 'Two clear paths from the homepage, then the panel upgrade page with real ranges and reasons. Add the EV charger page while it is still uncontested.' },
            { lead: 'Week 4 — The trade page and the money.', body: 'One page written for builders and property managers. Then cost per job won on every paid source, split by side.' },
          ] },
          { type: 'p', text: 'Then the monthly loop: photos, review asks, one new page — and once a quarter, look at your phone note from chapter 4 and write about whatever customers started asking about that they were not asking last year.' },
        ],
      },
    ],
  },

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
