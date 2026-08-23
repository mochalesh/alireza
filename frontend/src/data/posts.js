/**
 * Blog posts.
 *
 * Seven written for contractors, and one deliberate exception.
 *
 * The seven are the blog's actual job: pages aimed at the person who can buy
 * — a plumber setting up a Business Profile, an HVAC owner deciding when to
 * publish for the summer, a roofer working out what to do the week after a
 * storm. Those are our keywords, so those posts index normally, carry
 * Article schema and appear in the sitemap.
 *
 * The exception is the water-heater post, which came with the design. It is
 * built around a search a homeowner makes, not a contractor, and the SEO
 * spec is explicit that the customer's keywords appear on this site only as
 * product demonstration and that we never build pages around them: ranking
 * widgeta.app for "water heater replacement cost" would bring homeowners who
 * cannot buy anything and would blur what this site is about. So it ships
 * labelled on the page as an example of what Widgeta publishes for a
 * customer, and it carries noindex. `sample: true` drives the label, the
 * meta tag and the sitemap exclusion together.
 *
 * Every post links back to its pillar where one exists, and carries at most
 * one commercial link — the spec's rule, unchanged. Three of them have no
 * pillar yet because the HVAC, roofing and electrical guides are not
 * written; the template simply omits that block rather than pointing at a
 * page that does not exist.
 *
 * Where a post quotes money it quotes ranges commonly reported by
 * contractors and says so in the same breath. There are no invented
 * statistics anywhere in this file.
 */

export const POSTS = {
  /* ---------------------------------------------------------------- */
  'google-business-profile-for-contractors': {
    sample: false,
    trade: 'plumbers',
    tags: ['Local SEO', 'Google'],
    title: 'Google Business Profile for Contractors: The Setup | Widgeta',
    description:
      'The field-by-field setup for a contractor Business Profile, the settings that decide whether you show in the map pack, and what gets a listing suspended.',
    h1: 'Your Google Business Profile, field by field',
    standfirst:
      'It is free, it takes an evening, and most contractors fill it in once and never touch it again. Here is what each field actually does.',
    author: 'Sam Ellison',
    updated: '2026-08-01',
    updatedLabel: 'August 2026',
    readingTime: '8-minute read',
    pillar: 'plumbing-marketing',
    pillarNote:
      'This post is the long version of chapter 2 of the pillar guide — the profile chapter, one field at a time.',

    blocks: [
      { type: 'p', text: 'The map pack — the three businesses Google shows above the regular results — is where emergency jobs are decided. Your Business Profile is the only way into it, it costs nothing, and it is the single most under-maintained asset in this trade. What follows is every field that matters and what it actually changes.' },

      { type: 'h2', text: 'Name: the field that gets listings suspended' },
      { type: 'p', text: 'Your profile name must be your real-world business name — what is on the van, the license and the invoice. Not "Reyes Plumbing | Emergency Plumber Phoenix 24/7". Keyword-stuffed names do correlate with map rankings, which is exactly why Google\'s guidelines forbid them and why listings get suspended for it. A suspension is not a slap on the wrist: you lose the reviews and the ranking while you appeal.' },
      { type: 'p', text: 'If your legal name genuinely contains the trade word — "Reyes Plumbing" rather than "Reyes Services" — you get that benefit honestly and permanently. That is one of the better arguments for naming the company after the trade in the first place.' },

      { type: 'h2', text: 'Categories: the field that decides what you can rank for' },
      { type: 'p', lead: 'Primary category.', text: 'This one carries more weight than the other nine combined. "Plumber" is the obvious choice for a plumbing company; the interesting decision is when your money is in one service — if most of your revenue is water heaters, "Water heater installation" as primary is worth testing against "Plumber".' },
      { type: 'p', lead: 'Secondary categories.', text: 'Add only what you actually do and want more of. Every category you add is a set of searches you become eligible for, and a set of enquiries you will have to turn down if you added it aspirationally.' },
      { type: 'box', label: 'A quick way to pick them', items: [
        'Search your main service plus your city, in an incognito window.',
        'Open the top three map results and look at what category each one shows.',
        'Those are the categories that are already winning that search in your market.',
        'Match the ones that are true for you; ignore the ones that are not.',
      ], footer: 'This takes ten minutes and beats guessing, because it reads the answer out of your own market rather than a generic list.' },

      { type: 'h2', text: 'Address and service area: hide one, define the other' },
      { type: 'p', text: 'Most contractors are service-area businesses: you go to the customer, they do not come to you. If that is you, hide the address. A visible home address does not help you rank and does put your house on a map. What replaces it is the service area — and here the instinct to claim the whole metro is the wrong one.' },
      { type: 'p', text: 'List the towns you genuinely roll trucks to. Google cross-checks a service area against other signals about where you operate, and a wildly inflated one is a trust problem rather than a reach advantage. It also generates enquiries you have to decline, which costs you a review you would otherwise have earned.' },

      { type: 'h2', text: 'Services and the description' },
      { type: 'p', text: 'The services list is a set of named items with short descriptions. Fill in every service you actually offer, in the words customers use — "drain cleaning", not "hydro-jetting solutions". These give Google a vocabulary for your business beyond the category, and they show up in the profile itself where a customer is deciding whether to tap.' },
      { type: 'p', text: 'The business description is 750 characters and is mostly read by humans, not the ranking system. Use it for the things a skeptical homeowner checks: how long you have been trading, licensed and insured, which towns, and what you do not do. Naming what you do not do is unusual and reads as honest.' },

      { type: 'h2', text: 'Photos: the field that is actually a habit' },
      { type: 'p', text: 'A logo is not a photo. What earns a tap is a picture of your truck outside a real house, your crew, and a finished job. Ten of those beat a stock image every time, because the homeowner is deciding whether to let a stranger into their home and is looking for evidence that you are real.' },
      { type: 'p', text: 'The part that matters more than the pictures is the frequency. A profile that gained five photos this month reads as an active business to both a customer and to Google; one whose last photo is from three years ago reads as closed.' },

      { type: 'h2', text: 'The ten minutes a month that keep it working' },
      { type: 'list', items: [
        { lead: 'Add three to five real job photos.', body: 'Before and after, the truck on site, the panel you tidied up.' },
        { lead: 'Reply to every new review.', body: 'Name the job in the reply. It takes a sentence.' },
        { lead: 'Answer the Q&A box.', body: 'Customers ask questions there; anyone can answer, so answer as the owner before someone else guesses.' },
        { lead: 'Post one update.', body: 'A seasonal reminder or a finished job. Low effort, and it is a freshness signal.' },
        { lead: 'Check your hours.', body: 'Especially around holidays. Wrong hours on an emergency search are missed jobs that you never hear about.' },
      ] },
      { type: 'pull', text: 'An unclaimed profile with the wrong hours costs more jobs than a bad review does.' },

      { type: 'h2', text: 'What to do when something goes wrong' },
      { type: 'p', text: 'Two problems are common enough to name. A duplicate listing — usually created years ago by a data aggregator — splits your reviews and your ranking; report it as a duplicate rather than deleting it, so the reviews merge. And a suspension is appealed, not rebuilt: create a second profile and you have made the problem permanent instead of temporary.' },
    ],
  },

  /* ---------------------------------------------------------------- */
  'how-to-ask-for-reviews': {
    sample: false,
    trade: 'plumbers',
    tags: ['Reviews', 'Trust'],
    title: 'How to Ask for Reviews Without Being Weird | Widgeta',
    description:
      'The ask that works, the exact text to send, when to send it, and the review-gating rule that quietly gets contractors in trouble.',
    h1: 'How to ask for reviews without being weird about it',
    standfirst:
      'The timing matters more than the wording, and one common tactic breaks Google’s rules without anyone realising.',
    author: 'Sam Ellison',
    updated: '2026-08-01',
    updatedLabel: 'August 2026',
    readingTime: '6-minute read',
    pillar: 'plumbing-marketing',
    pillarNote:
      'Chapter 3 of the pillar guide covers the ask, the reply and the recovery. This is the ask in detail.',

    blocks: [
      { type: 'p', text: 'Two contractors in the same map pack, one with twelve reviews and one with a hundred and forty. Same skills, same price, same trucks. The phone does not ring evenly, and the gap did not come from better work — it came from asking.' },

      { type: 'h2', text: 'The moment is right after the fix' },
      { type: 'p', text: 'Ask at the kitchen table while the relief is fresh, before you have packed the van. Not because the customer is more generous then, but because that is the only moment when the whole thing is still vivid: what was wrong, what you did, how quickly you got there. A week later they remember that a plumber came.' },
      { type: 'p', text: 'Say it out loud, then send the link before you leave the driveway. The verbal ask makes the text expected rather than intrusive, and the same-day text lands far better than one sent on Friday to everyone you saw that week.' },

      { type: 'h2', text: 'What to say out loud' },
      { type: 'p', text: 'Short, honest, and about you rather than about them: "Reviews are how a small shop like ours competes with the big guys — would you mind?" That sentence works because it is true and because it gives them a reason that is not "it helps my rankings".' },
      { type: 'p', text: 'What does not work is the apologetic version — "I know this is a hassle, but if you have time, maybe…" — which invites a no by pre-agreeing that it is a burden.' },

      { type: 'h2', text: 'The text to send' },
      { type: 'box', label: 'Steal this', p: '"Hi Karen, it’s Mike from Reyes Plumbing — thanks again for having us out today. If you were happy with the work, a quick Google review helps a small shop like ours more than any ad we could buy: [your review link]. Either way, you know where to find me if anything acts up."', footer: 'Send it the same day. One polite reminder a week later, then let it go — a third message turns a satisfied customer into an annoyed one.' },
      { type: 'p', text: 'Two details in that message do the work. The direct review link removes four steps of navigation, which is where most intentions die. And the last line makes it clear the relationship continues whether or not they write anything, which is what stops it reading as a transaction.' },

      { type: 'h2', text: 'The rule that quietly catches people out' },
      { type: 'p', text: 'Review gating — surveying customers first and only sending the review link to the happy ones — is against Google’s policies, and it is common enough that plenty of contractors are doing it without knowing it has a name. Some review-request tools have it built in as a feature. If a tool offers to "filter" or "screen" feedback before the review request, that is what it is doing.' },
      { type: 'p', text: 'And never pay for reviews or trade a discount for one. Beyond the platform policies, in several US states that is territory the attorney general has taken an interest in. The audience notices too: a run of five-star reviews with no detail reads exactly like what it is.' },

      { type: 'h2', text: 'Ask everyone, including the awkward ones' },
      { type: 'p', text: 'The instinct is to ask only the delighted customers. Ask all of them. A profile with a hundred reviews averaging 4.7 is more convincing than one with twenty perfect ones, because the first looks like a real business and the second looks curated. The occasional three-star review with a calm reply underneath does more for you than the review you avoided asking for.' },

      { type: 'h2', text: 'Make it a habit, not a campaign' },
      { type: 'list', items: [
        { lead: 'Save the message as a text template.', body: 'On the phone you actually use, so it is two taps at the driveway.' },
        { lead: 'Save the review link somewhere you cannot lose it.', body: 'A pinned note. Hunting for it is why the ask does not happen.' },
        { lead: 'Ask on every completed job for a month.', body: 'Not the good ones. Every one. Then look at what the profile looks like.' },
        { lead: 'Reply to all of them.', body: 'Naming the job. It takes a sentence and the next reader sees a human runs the company.' },
      ] },
      { type: 'pull', text: 'The contractors who never worry about a bad review are the ones who have been asking every customer for years.' },
    ],
  },

  /* ---------------------------------------------------------------- */
  'contractor-website-cost': {
    sample: false,
    trade: 'plumbers',
    tags: ['Websites', 'Costs'],
    title: 'What Should a Contractor Website Cost? | Widgeta',
    description:
      'The four ways contractors buy a website, what each really costs over a year, and the question that decides which one is right for you.',
    h1: 'What should a contractor website actually cost?',
    standfirst:
      'Four ways to buy one, what each costs by month twelve, and the question that settles it.',
    author: 'Sam Ellison',
    updated: '2026-08-01',
    updatedLabel: 'August 2026',
    readingTime: '7-minute read',
    pillar: 'plumbing-marketing',
    pillarNote:
      'Chapter 4 of the pillar guide covers what a trade website must have. This post is about what it costs to get one.',

    blocks: [
      { type: 'p', text: 'Ask four people what a contractor website costs and you get four numbers between nothing and twenty thousand dollars, because they are answering four different questions. Here are the four ways this is actually bought, what each one costs once a year has gone by, and the question that decides between them.' },

      { type: 'h2', text: 'The four ways' },
      { type: 'table', rows: [
        ['Build it yourself on a website builder', 'A monthly platform fee, plus your evenings'],
        ['Hire a freelancer to build it once', 'A one-time project fee, then nothing changes'],
        ['A local marketing agency', 'A setup fee, then a monthly retainer'],
        ['A subscription that builds and runs it', 'One monthly price, no setup fee'],
      ], note: 'Figures below are ranges contractors commonly report in the US market and vary widely by region and scope. Get your own quotes.' },

      { type: 'h2', text: 'Build it yourself' },
      { type: 'p', text: 'The platform fee is the small part; the real cost is that you are now the designer, the copywriter and the person who has to remember to update it. That is fine if you enjoy it and have the evenings. What usually happens instead is that the site goes up in a burst of enthusiasm, the About page still says "coming soon" two years later, and it has never once made the phone ring.' },
      { type: 'p', text: 'The specific failure is structural rather than aesthetic: almost nobody builds the page-per-service-per-town grid by hand, because writing twelve pages is twelve evenings. So the site ends up as one Services page listing ten services, which ranks for none of them.' },

      { type: 'h2', text: 'A freelancer, once' },
      { type: 'p', text: 'Commonly $1,500–$5,000 for a small business site in the US. You get a designed site and, if the freelancer is good, a sensible structure. What you do not get is anything after handover — and websites are not finished objects. Six months on, the seasons have moved, competitors have published, and your site says exactly what it said on day one.' },
      { type: 'p', text: 'The question to ask before paying is not about design. It is: who owns the domain and the hosting account, and who updates this in month six? If the answer to the first is "the freelancer" you do not own your website, and that is the most common ugly surprise in this market.' },

      { type: 'h2', text: 'An agency' },
      { type: 'p', text: 'Commonly a $2,000–$10,000 build plus $500–$3,000 a month. A good local agency genuinely earns this: real strategy, real content, someone who answers the phone. A bad one bills the retainer for a monthly report about work that did not move anything, and this trade has been burned by enough of them that the word "agency" now does some damage on its own.' },
      { type: 'p', text: 'If you go this way, two things are worth putting in writing: that you own the site and the domain outright, and what specifically is delivered each month. "Ongoing SEO" is not a deliverable. "Two new service-area pages a month" is.' },

      { type: 'h2', text: 'A subscription' },
      { type: 'p', text: 'One monthly price with no setup fee, and the site is built and maintained for you. The tradeoff is honest and worth stating: you get less design freedom than any of the three above. You are buying a structure built for this trade rather than a blank canvas, and if what you want is a bespoke look, that is a real reason to choose differently.' },

      { type: 'h2', text: 'The comparison that actually matters' },
      { type: 'p', text: 'Not the price on day one — the position at month twelve. A one-time build is cheapest in January and, if nothing has been added since, is a business card by December. A subscription costs every month and has twelve more pages and a ranking that compounds.' },
      { type: 'p', text: 'And measure both against what a job is worth. If a water heater replacement nets you several hundred dollars, most of these options pay for themselves at one or two jobs a year. The expensive option is the one that produces none.' },

      { type: 'h2', text: 'The question that settles it' },
      { type: 'pull', text: 'Who is updating this in six months? If you cannot name a person, do not buy something that needs updating.' },
      { type: 'p', text: 'If the answer is "me, and I will enjoy it" — build it yourself. If it is "my agency, and here is what they deliver monthly" — that works. If the honest answer is "nobody", then a one-time build is money spent on something that will quietly stop working, and what you want is the version where updating is somebody else’s job by design.' },
    ],
  },

  /* ---------------------------------------------------------------- */
  'service-area-pages': {
    sample: false,
    trade: 'plumbers',
    tags: ['Local SEO', 'Structure'],
    title: 'Service Area Pages: The Structure That Ranks | Widgeta',
    description:
      'A page per service per town is the biggest lever in local SEO — and the easiest to build so badly it becomes a doorway-page problem. How to do it right.',
    h1: 'Service area pages, done so they actually rank',
    standfirst:
      'The single biggest structural lever in local search, and the one most likely to be built as spam by accident.',
    author: 'Sam Ellison',
    updated: '2026-08-01',
    updatedLabel: 'August 2026',
    readingTime: '7-minute read',
    pillar: 'plumbing-marketing',
    pillarNote:
      'Chapter 5 of the pillar guide explains why Google ranks answers rather than websites. This is how to build the pages that answer.',

    blocks: [
      { type: 'p', text: 'One Services page listing ten services across four towns competes for forty searches and wins none of them, because it answers none of them completely. Forty pages, each answering one, is the structure that ranks. It is also the structure that turns into spam the moment you build it lazily — so the how matters as much as the what.' },

      { type: 'h2', text: 'The grid' },
      { type: 'p', text: 'Write your services down one axis and your towns across the other. Every intersection is a page that should exist:' },
      { type: 'table', rows: [
        ['3 services × 3 towns', '9 pages, each catching a different search'],
        ['4 services × 4 towns', '16 pages, each less competitive than the town alone'],
        ['1 service × 1 town', '1 page, and a visible ceiling'],
      ], note: 'Only include towns you genuinely serve. A service area wider than the truck actually goes produces enquiries you decline, and declining is how you lose a review you would have earned.' },
      { type: 'p', text: 'The reason this works is competition, not volume. "Water heater repair in Mesa" is searched far less than "water heater repair", and it is searched by someone who is about to call somebody. The specific page wins it in weeks; the generic term takes years.' },

      { type: 'h2', text: 'Where this becomes a doorway page' },
      { type: 'p', text: 'Google’s guidelines name doorway pages explicitly: many similar pages generated to funnel visitors to the same destination, without content of their own. The lazy version of this grid — one template with the town name swapped and nothing else different — is exactly that description, and it is treated accordingly.' },
      { type: 'p', text: 'The difference between the structure that ranks and the structure that gets ignored is whether each page has a reason to exist beyond the town name in the title. That reason is not hard to find, because your work in each town genuinely is different.' },

      { type: 'box', label: 'What makes a service-area page real', items: [
        'Something specific to that town: housing age, common pipe material, water hardness, an HOA rule, a permit quirk.',
        'A job you actually did there, described in a sentence or two.',
        'Response time from where your trucks park — a number a customer cares about.',
        'The price context for that market, if it differs.',
        'Photos from that area rather than the same three on every page.',
      ], footer: 'If you cannot write three sentences that are true only of that town, do not build the page. Four honest pages outperform sixteen thin ones.' },

      { type: 'h2', text: 'What goes on the page' },
      { type: 'list', items: [
        { lead: 'A title that matches the search.', body: '"Water Heater Repair in Mesa, AZ" — not "Services | Reyes Plumbing".' },
        { lead: 'The service explained, briefly.', body: 'What you do, what it usually costs, how long it takes.' },
        { lead: 'The local paragraph.', body: 'The part that is true only here. This is the whole difference.' },
        { lead: 'Proof.', body: 'License number, insurance, years in business — above the fold, not on an About page.' },
        { lead: 'One clear action.', body: 'A tappable phone number. On these pages the visitor is usually standing next to the problem.' },
      ] },

      { type: 'h2', text: 'Build it in the right order' },
      { type: 'p', text: 'Do not start with sixteen pages. Start with your two best towns and your two highest-value services — four pages, written properly. Watch them for a month or two. The ones that bring calls tell you which combinations are worth expanding, and the ones that do nothing tell you something too.' },
      { type: 'p', text: 'Then add a page a month rather than sixteen in a weekend. A steady trickle of genuinely different pages is both better for rankings and the only version of this that a working contractor actually sustains.' },

      { type: 'pull', text: 'Four pages that could only have been written about those towns beat sixteen with the name swapped.' },
    ],
  },

  /* ---------------------------------------------------------------- */
  'hvac-marketing-calendar': {
    sample: false,
    trade: 'hvac',
    tags: ['HVAC', 'Seasonality'],
    title: 'The HVAC Marketing Calendar, in Searches | Widgeta',
    description:
      'HVAC demand moves in waves and search runs ahead of it. What to publish in February so it works in July, and what the quiet seasons are for.',
    h1: 'The HVAC year, as your customers search it',
    standfirst:
      'Search moves about two weeks ahead of the weather. Everything below is dated accordingly.',
    author: 'Sam Ellison',
    updated: '2026-08-01',
    updatedLabel: 'August 2026',
    readingTime: '6-minute read',

    blocks: [
      { type: 'p', text: 'No trade follows a calendar like HVAC, and no trade wastes more marketing effort by acting on the calendar two weeks late. The pattern is simple once you see it: searching happens before calling, and both happen before you notice the weather turned.' },

      { type: 'h2', text: 'The shape of the year' },
      { type: 'table', rows: [
        ['March–April', 'Preventive maintenance: "AC tune up", "before summer service"'],
        ['May–July', 'The peak: "AC not cooling", "emergency AC repair"'],
        ['August–September', 'Failures and replacement: "new AC cost", "AC installation"'],
        ['October–November', 'Heating season opens: "furnace not working", "furnace tune up"'],
        ['December–February', 'Commercial contracts, planning, and the quiet you should be using'],
      ], note: 'Timing shifts by region — southern markets open earlier and run longer, northern ones have two peaks rather than one.' },

      { type: 'h2', text: 'What to publish in February' },
      { type: 'p', text: 'Everything you want working in July. A page takes weeks to be found and start ranking, so a page published in the first hot week arrives after the decision has been made. February and March are when the summer’s pages get written.' },
      { type: 'list', items: [
        { lead: 'A page per service per town.', body: 'AC repair, central AC maintenance, duct cleaning — in each town. The longest lead time, so it goes first.' },
        { lead: 'A straight price page.', body: '"How much does a new AC unit cost" is searched days before the purchase. An honest range with an explanation of what moves it earns the call that follows; silence sends them to whoever will talk about it.' },
        { lead: 'A repair-or-replace page.', body: 'The most-asked question in August, and it needs months to be findable by then.' },
        { lead: 'A maintenance-plan page.', body: 'A different buyer entirely — a property manager or a facility, reading before contacting rather than calling in a panic.' },
      ] },

      { type: 'h2', text: 'What to do during the peak' },
      { type: 'p', text: 'Nothing that takes an afternoon. When the phone is going, the only marketing worth doing is the kind that takes seconds:' },
      { type: 'list', items: [
        { lead: 'Answer fast, or say when you will.', body: 'In peak season a customer contacts three companies at once. Whoever replies first usually gets it.' },
        { lead: 'Ask every customer for a review, same day.', body: 'Summer gives you the most customers you will see all year. It is the best review-building window there is.' },
        { lead: 'One photo a day from the field.', body: 'A minute on the profile. Across a summer, the accumulation is real.' },
      ] },
      { type: 'box', label: 'What not to do in July', items: [
        'Do not promise appointment windows you know you will miss. A bad review earned in July is still there next July.',
        'Do not start rebuilding the website now. Write down what is missing and do it in October.',
        'Do not raise prices without an explanation anyone can follow — this market talks.',
      ] },

      { type: 'h2', text: 'The shoulder seasons are the point' },
      { type: 'p', text: 'Most HVAC companies treat spring and autumn as the gap between the money. They are the opposite: they are when maintenance plans are sold, when commercial contracts get reviewed, and — critically — when you have the time to write the pages that carry the next peak.' },
      { type: 'pull', text: 'October is the real March. That is when the summer’s pages get written.' },
    ],
  },

  /* ---------------------------------------------------------------- */
  'roofing-after-the-storm': {
    sample: false,
    trade: 'roofers',
    tags: ['Roofing', 'Storms'],
    title: 'The Week After a Storm: A Roofer’s Playbook | Widgeta',
    description:
      'Storm demand arrives in hours and goes in weeks, and it goes to whoever was already findable. What to have ready, and how to be the local option.',
    h1: 'The week after a storm, and the month before it',
    standfirst:
      'Storm work is decided by who was already findable — and by who does not sound like the trucks that showed up from three states away.',
    author: 'Sam Ellison',
    updated: '2026-08-01',
    updatedLabel: 'August 2026',
    readingTime: '6-minute read',

    blocks: [
      { type: 'p', text: 'A hailstorm passes and within a day two things arrive: a surge of homeowners searching for a roofer, and a wave of out-of-town crews who will be gone by the time the work needs standing behind. Both shape what you should have said before the storm, and what you say in the week after it.' },

      { type: 'h2', text: 'The searches change shape' },
      { type: 'p', text: 'Before a storm, roofing searches are slow and considered: costs, materials, whether to replace. After one they are urgent and specific — "roof leak repair", "emergency tarp", "hail damage inspection", "storm damage roof". Different words, different urgency, and mostly people who have never needed a roofer before and have no idea who to call.' },
      { type: 'p', text: 'That last part is the opening. They are not choosing between you and a competitor they already know; they are choosing between whoever appears and looks legitimate.' },

      { type: 'h2', text: 'What has to exist beforehand' },
      { type: 'list', items: [
        { lead: 'A storm damage page per town you cover.', body: 'Published in the quiet season, not the day after. Pages take weeks to be found.' },
        { lead: 'An emergency tarping page.', body: 'The most urgent search there is, and the one that turns into the full job.' },
        { lead: 'An insurance claims page.', body: 'The question everyone asks and few sites answer plainly: what the process is, what you do and do not do in it.' },
        { lead: 'Your local proof, prominent.', body: 'Years in the area, license, the town names. This is what separates you from the trucks with out-of-state plates.' },
      ] },

      { type: 'h2', text: 'The local argument, made carefully' },
      { type: 'p', text: 'The strongest thing you have over a storm-chasing crew is that you will still be here for the warranty. Say that plainly — how long you have worked in these towns, where your yard is, that the same phone number answers in two years.' },
      { type: 'p', text: 'What not to do is run down the visiting crews as a category. Some are competent, some are not, and a homeowner reading a page that mostly attacks competitors learns more about you than about them. State your own position and let the comparison happen on its own.' },

      { type: 'h2', text: 'The week itself' },
      { type: 'list', items: [
        { lead: 'Answer everything, fast.', body: 'People are calling four numbers. First real answer usually wins.' },
        { lead: 'Publish one page about this storm.', body: 'The date, the towns affected, what you are seeing on roofs. It ranks quickly because it is timely, and it reads as someone who is actually here.' },
        { lead: 'Photograph everything.', body: 'These are the photos that make next year’s pages credible.' },
        { lead: 'Be honest about the schedule.', body: 'Telling someone you are three weeks out costs you a job. Telling them next week and arriving in three costs you a review.' },
      ] },

      { type: 'h2', text: 'And the part nobody does' },
      { type: 'p', text: 'A month later, when it has gone quiet again, the companies that will win the next storm are writing the pages for it. That is not a satisfying answer in a week when the phone is ringing — but the reason your phone is ringing is a page that someone wrote in a quiet month a year ago.' },
      { type: 'pull', text: 'Storm work goes to whoever was already findable. That was decided months earlier.' },
    ],
  },

  /* ---------------------------------------------------------------- */
  'ev-charger-installs': {
    sample: false,
    trade: 'electricians',
    tags: ['Electrical', 'Growth'],
    title: 'EV Charger Installs: The Page to Publish Early | Widgeta',
    description:
      'EV charger installation searches are still small and barely contested. Why the page is worth publishing now rather than when the demand is obvious.',
    h1: 'The EV charger page is worth publishing before you need it',
    standfirst:
      'A small search with almost no competition is the easiest kind of page to win — and the hardest to catch up on later.',
    author: 'Sam Ellison',
    updated: '2026-08-01',
    updatedLabel: 'August 2026',
    readingTime: '6-minute read',

    blocks: [
      { type: 'p', text: 'Most of an electrician’s search volume is outages, panels and rewires — mature, contested, and slow to move on. EV charger installation is the opposite: smaller, growing, and in most markets served by pages that barely exist. That combination is unusual and it does not last.' },

      { type: 'h2', text: 'Why early beats obvious' },
      { type: 'p', text: 'A page published into a crowded search spends months clawing upward. A page published into a near-empty one arrives near the top almost immediately, and then keeps that position as the search grows underneath it. The work is identical; the timing is what decides the outcome.' },
      { type: 'p', text: 'Waiting until the demand is obvious means arriving at the same time as everyone else who noticed. By then it is an ordinary competitive search and you are starting from nothing.' },

      { type: 'h2', text: 'What the page has to answer' },
      { type: 'p', text: 'This is a customer with an unusual profile: they have just spent a large amount on a car, they have read a lot online, and they are nervous about a number they do not understand — the capacity of their panel. Answer that first and you have most of the job.' },
      { type: 'list', items: [
        { lead: 'Whether their panel can take it.', body: 'The question underneath every enquiry. Explain what determines it and what happens if the answer is no.' },
        { lead: 'What it costs, in ranges.', body: 'A straightforward install versus one needing a panel upgrade or a long run. Ranges with reasons beat "call for a quote".' },
        { lead: 'Which chargers you install.', body: 'Brand names are what people search. If you work with specific ones, say so.' },
        { lead: 'Permits and inspection.', body: 'Whether you pull them, and whether it is in the price.' },
        { lead: 'Rebates, carefully.', body: 'Utility and local programmes change constantly. Point at the official page rather than quoting an amount that will be wrong in six months.' },
      ] },

      { type: 'box', label: 'The related pages worth having', items: [
        'Panel upgrade — half of these jobs turn into one, and it is the larger ticket.',
        'Whether a dedicated circuit is needed, and why.',
        'Commercial or multi-unit charging, if you do it — a completely different buyer.',
        'Solar and battery tie-ins, if that is in your scope.',
      ], footer: 'These interlink naturally, and each one catches a search the others do not.' },

      { type: 'h2', text: 'The same logic, applied elsewhere' },
      { type: 'p', text: 'EV chargers are the current example, not the principle. The principle is that the best page to write is the one where demand is rising and nobody has written it yet — and you notice those before any marketer does, because you are the one being asked about them on job sites.' },
      { type: 'pull', text: 'The best time to publish a page is when the search is still too small to bother with.' },
      { type: 'p', text: 'Keep a note on your phone of questions customers have started asking that they were not asking a year ago. That note is a content plan, and it is better than any keyword tool because it comes from your actual market.' },
    ],
  },

  'water-heater-replacement-cost': {
    sample: true,
    trade: 'plumbers',
    tags: ['Plumbing', 'Costs'],
    title: 'What Does a Water Heater Replacement Cost? | Widgeta',
    description:
      'The honest ranges for a water heater replacement, the five things that move the price, and when a repair beats a replacement.',
    h1: 'What does a water heater replacement actually cost?',
    standfirst:
      'The honest ranges, the five things that move the price, and when a repair beats a replacement.',
    author: 'Sam Ellison',
    updated: '2026-08-01',
    updatedLabel: 'August 2026',
    readingTime: '5-minute read',
    /** The pillar this supports. One commercial link, no more. */
    pillar: 'plumbing-marketing',
    pillarNote:
      'This post supports chapter 5 of the pillar guide — how answering cost questions like this one is exactly what gets a plumbing company found.',

    blocks: [
      { type: 'p', text: 'Ask three plumbers for a water heater quote and you\'ll get three numbers, sometimes far apart. That\'s not (usually) anyone playing games — it\'s that "replace my water heater" hides a dozen decisions. Here\'s how the price is actually built, so the quotes make sense.' },

      { type: 'h2', text: 'The ranges' },
      { type: 'table', rows: [
        ['Standard tank, 40–50 gal, like-for-like swap', '$1,200 – $2,500 installed'],
        ['Tank with code upgrades or relocation', '$2,000 – $3,500'],
        ['Tankless, replacing a tankless', '$2,800 – $4,500'],
        ['Tankless, converting from a tank', '$3,500 – $6,500+'],
      ], note: 'National ranges homeowners commonly report; your market, fuel type and local code will move them. Get a written local quote.' },

      { type: 'h2', text: 'The five things that move the number' },
      { type: 'list', items: [
        { lead: 'Code upgrades.', body: 'If your last heater went in a decade ago, code has moved: expansion tank, drain pan, seismic straps, venting. This is the most common "why is my quote higher than the internet" item.' },
        { lead: 'Location.', body: 'A garage swap is easy; an attic or a tight closet adds hours and risk.' },
        { lead: 'Fuel and venting.', body: 'Gas with good venting is straightforward; power-vent units and electric-to-gas conversions are not.' },
        { lead: 'Capacity changes.', body: 'Going bigger can mean new gas line sizing or a 240V circuit — real money, not upsell.' },
        { lead: 'Haul-away and permits.', body: 'Small line items that separate a real quote from a teaser price.' },
      ] },

      { type: 'h2', text: 'When repair beats replacement' },
      { type: 'p', text: "Under 8 years old with a single failed part — thermocouple, element, gas valve — repair usually wins. Over 10 years, or leaking from the tank itself, replacement wins: a tank leak is the tank's steel failing, and there's no part for that. In between, ask for both prices and compare against the years you'd realistically get back." },

      { type: 'h2', text: 'Three questions that make quotes comparable' },
      { type: 'quotes', items: [
        '"Is this to current code, including the expansion tank and pan — or are those extra?"',
        '"What\'s the labor warranty, separate from the tank\'s warranty?"',
        '"Does this include permit and haul-away?"',
      ] },
      { type: 'p', text: 'Three yeses and the cheapest quote is genuinely the cheapest. A "we\'ll see" on any of them explains the gap.' },
    ],
  },
};
