/**
 * Comparison pages.
 *
 * Highest purchase intent on the site, and the one place where conceding a
 * point is the strategy: a page that says the competitor never wins reads as
 * marketing, and marketing is what this audience has been burned by. Every
 * row states something about the company actually named in that column, and
 * every numeric claim carries its source note.
 *
 * Five pages, and deliberately five different *kinds* of alternative rather
 * than five brands of the same kind — because a contractor is choosing
 * between categories, not logos:
 *
 *   angi, thumbtack  — lead marketplaces. You rent demand.
 *   durable          — an AI site builder. Fast, cheap, and finished.
 *   wix              — a DIY platform. You get tools and you do the work.
 *   scorpion         — a full-service agency. People, strategy, a retainer.
 *
 * Two rules hold on every one of them. `theirWin: true` marks the row where
 * the alternative is genuinely better and the template says so out loud. And
 * where a company does not publish its prices, this file says that rather
 * than inventing a figure — the source note under each table is part of the
 * page, not a disclaimer bolted on.
 */

export const COMPARISON_CONTENT = {
  /* ================================================================== */
  durable: {
    name: 'Durable',
    kind: 'AI website builder',
    h1: 'Widgeta vs Durable: an honest comparison.',
    intro1:
      'Durable generates a website in about half a minute. That is not marketing — it genuinely does it, and for a contractor who has been putting off getting online for three years, half a minute is a real answer to a real problem.',
    intro2:
      'The difference is what happens on day two. Durable builds you a site and hands it over; Widgeta builds one and then keeps working on it — the page-per-service-per-town grid, and new pages every month as the searches near you move. Here is the whole picture, including where Durable is the better buy.',
    rows: [
      { k: "What you're buying", w: 'A site that keeps being worked on', a: 'A site generated for you, then yours to run' },
      { k: 'Time to a first page', w: 'About a minute', a: 'About thirty seconds', theirWin: true },
      { k: 'Site structure', w: 'A page for every service in every town you cover', a: 'A handful of pages: home, services, about, contact' },
      { k: 'Written for local search', w: 'Yes — that is the whole product', a: 'Generic copy you edit; local targeting is on you' },
      { k: 'New pages after launch', w: 'Every month, matched to local searches', a: 'When you write them' },
      { k: "What's bundled", w: 'Site, hosting, domain, monthly SEO and content', a: 'Site and hosting, plus a set of small business tools' },
      { k: 'Built for one trade or for everyone', w: 'Only home-service trades', a: 'Any small business — barbers to consultants' },
      { k: 'When you stop paying', w: 'The site and domain stay yours', a: 'Check the plan before you rely on it' },
    ],
    sourceNote:
      'Durable publishes plans and changes them; nothing above quotes a price for that reason. The comparison is about how the two products work, which is stable, and it is worth checking their current plans yourself.',
    theirsTitle: 'Durable makes sense when…',
    theirs: [
      'You have no website at all and want that fixed tonight, cheaply, before you think about anything else',
      'You want a straightforward brochure site and you are happy to write and update it yourself',
      'You are not really competing on local search — most of your work comes from referrals and repeat customers',
    ],
    oursTitle: 'Widgeta makes sense when…',
    ours: [
      'You want the phone to ring from people who do not know your name yet',
      'You work several services across several towns, and you want a page that answers each of those searches',
      'You know you will not log in and add pages every month, and you would rather that happened without you',
    ],
    calloutLead: 'The difference in one sentence:',
    callout:
      'Durable answers "I need a website"; Widgeta answers "I need the phone to ring". Those are different problems and the first one is genuinely cheaper to solve. If a site is all you need, say so and buy the cheaper thing.',
    faqs: [
      {
        q: 'Is an AI-generated website bad for SEO?',
        a: 'No — how a page was written is not something a search engine can or does penalise. What decides rankings is whether the page answers a specific search: "water heater repair in Mesa" beats "Our Services" whoever typed it. The gap is structural rather than moral: a handful of generic pages has nothing to rank with, no matter how it was produced.',
      },
      {
        q: 'Can I add service-area pages to a Durable site myself?',
        a: 'Yes, and if you will, that closes most of the gap. Be honest about whether you will: twelve pages is twelve evenings, and then it is another one every time you add a town or a service. Most contractors who plan to do this stop around the fourth page — not from laziness, but because the real work is in the field.',
      },
      {
        q: 'Durable is cheaper. Why pay more?',
        a: 'Because the two prices are buying different amounts of work. Durable is buying you hosting and a generator; the writing, the structure and the monthly upkeep stay with you. Compare what you end up with after a year rather than the monthly line, and compare the difference against your own hourly rate.',
      },
      {
        q: 'Can I move from Durable to Widgeta later?',
        a: 'The domain moves without trouble, and that is the part that matters. The pages get rebuilt because the structure is different — a service-by-town grid instead of a services page. If any existing page is bringing you work, tell us and we will keep its address.',
      },
    ],
    title: 'Widgeta vs Durable: An Honest Comparison for Contractors',
    description:
      'Durable generates a site in seconds and hands it over; Widgeta builds one and keeps working on it. The full comparison, including where Durable wins.',
  },

  /* ================================================================== */
  wix: {
    name: 'Wix',
    kind: 'DIY website platform',
    h1: 'Widgeta vs Wix: an honest comparison.',
    intro1:
      'Wix is a genuinely good product and this is not going to pretend otherwise. It gives you a blank canvas and some of the best building tools on the market, and if you enjoy that kind of work you can make something better-looking than anything Widgeta will produce.',
    intro2:
      'It gives you tools. Widgeta gives you the finished thing and keeps maintaining it. Which is right depends almost entirely on one question — whether you have the evenings — so here is the comparison with that question in the middle of it.',
    rows: [
      { k: "What you're buying", w: 'A site that gets built and kept running for you', a: 'A platform and tools to build it yourself' },
      { k: 'Who writes the copy', w: 'Written for your services and towns', a: 'You do, or you hire someone' },
      { k: 'Design freedom', w: 'One structure, built for the trades', a: 'Near-total — you design what you can imagine', theirWin: true },
      { k: 'Service-area pages', w: 'The full grid, generated', a: 'Possible — you build each one by hand' },
      { k: 'Ongoing SEO work', w: 'Runs monthly without you', a: 'Good tools available; the work is yours' },
      { k: 'New pages after launch', w: 'Every month, automatically', a: 'When you log in and make them' },
      { k: 'Extra functionality', w: 'None — this does one job', a: 'A large app market: booking, stores, forms', theirWin: true },
      { k: 'Time cost to you', w: 'About two minutes, once', a: 'A weekend to launch, then evenings to maintain' },
    ],
    sourceNote:
      'Wix publishes several plan tiers and revises them; nothing above quotes a price. The comparison is about how the two products divide the work, which does not change with the pricing page.',
    theirsTitle: 'Wix makes sense when…',
    theirs: [
      'You want full control of how it looks, and you have the taste or the designer to use it',
      'You genuinely have time each month to write pages and keep the site current',
      'You need something beyond a marketing site — online booking, a store, custom forms',
    ],
    oursTitle: 'Widgeta makes sense when…',
    ours: [
      'Your evenings are for your family and your quoting, not for a page builder',
      'Most of your work is local: a service in a town, searched by someone nearby',
      'You want the site to keep growing without you remembering to grow it',
    ],
    calloutLead: 'The honest test:',
    callout:
      'Look at the last three months. Did you update anything you own online — a profile, a listing, a site? If yes, Wix will reward that habit and give you more control than we will. If no, a platform that needs you is a platform that will sit still.',
    faqs: [
      {
        q: 'Can Wix rank in local search?',
        a: 'Yes. The platform is not the obstacle it was ten years ago and its SEO tooling is decent. What decides local rankings is content and structure — a page per service per town, updated over time — and those are things you build on Wix, not things Wix builds for you.',
      },
      {
        q: 'Could I just build the service-area grid on Wix myself?',
        a: 'Yes, and if you do it properly you will get a similar result. Twelve pages, each genuinely different, each with something true only about that town — then another one whenever you add a service or an area. The tooling is not the hard part; the sustained writing is.',
      },
      {
        q: 'Wix is cheaper per month. What am I paying extra for?',
        a: 'The writing, the structure and the monthly work — which on Wix you either do yourself or buy separately. Compare the whole cost including your hours, not the subscription line. If your hours are cheap this month, Wix wins on price honestly.',
      },
      {
        q: 'I already have a Wix site that gets no calls. What now?',
        a: 'Search your main service plus your town in a private window. If your site is not on the first page, the problem is almost certainly structure rather than platform — one Services page carrying ten services cannot rank for any of them. That is fixable on Wix by building the grid, or by moving to something that builds it for you.',
      },
    ],
    title: 'Widgeta vs Wix: An Honest Comparison for Contractors',
    description:
      'Wix gives you the tools and the evenings are yours; Widgeta builds and runs it for you. The full comparison, including where Wix is the better buy.',
  },

  /* ================================================================== */
  scorpion: {
    name: 'Scorpion',
    kind: 'full-service marketing agency',
    h1: 'Widgeta vs Scorpion: an honest comparison.',
    intro1:
      'Scorpion is a marketing agency built for home services, and this comparison is the least even-handed of the five — not because one is better, but because the two are not the same size of thing. Scorpion sells strategy, ad management, a website, lead handling and a team of people. Widgeta sells one automated product.',
    intro2:
      'A four-truck plumbing company and a forty-truck multi-location company should read this page and reach opposite conclusions. Here is the picture, including a plain statement of who Scorpion is genuinely better for.',
    rows: [
      { k: "What you're buying", w: 'One product that builds and runs your site', a: 'A team, a strategy and managed marketing' },
      { k: 'Scope', w: 'Website, local SEO, monthly content', a: 'That plus paid ads, creative, lead management, reporting' },
      { k: 'A person to call', w: 'No account manager — the product runs itself', a: 'A named team who know your business', theirWin: true },
      { k: 'Pricing', w: 'One published monthly price, no setup fee', a: 'Quoted per engagement; not published' },
      { k: 'Typical commitment', w: 'Month to month, cancel anytime', a: 'Term agreements are common — read it before signing' },
      { k: 'Time to live', w: 'About a minute', a: 'Weeks: discovery, design, build, approvals' },
      { k: 'Your time each month', w: 'None', a: 'Calls, approvals, reviewing reports' },
      { k: 'Who owns the site if you leave', w: 'You — site and domain go with you', a: 'Depends on the agreement. Ask, and get it in writing' },
      { k: 'Right size of company', w: 'One to a handful of trucks', a: 'Established, multi-location, real ad budget', theirWin: true },
    ],
    sourceNote:
      'Scorpion does not publish pricing — engagements are quoted individually and reported figures vary enormously by scope and market. Nothing above states a number for that reason. Ask any agency for the full first-year cost in writing, setup included.',
    theirsTitle: 'Scorpion makes sense when…',
    theirs: [
      'You are established, several locations or several trucks, and marketing is now a budget line rather than an afterthought',
      'You want paid advertising managed properly by people who do it full-time — that is a real skill and we do not do it at all',
      'You want a strategist who knows your market, will pick up the phone, and can be held to a number',
    ],
    oursTitle: 'Widgeta makes sense when…',
    ours: [
      'You want a predictable monthly cost you can budget without a sales call',
      'You want the fundamentals — site, local search, monthly pages — running without meetings',
      'You are not ready to commit to a term agreement, and you want to own everything if you walk away',
    ],
    calloutLead: 'The thing worth knowing about agencies generally:',
    callout:
      'the good ones earn the retainer several times over and the bad ones bill it for a monthly report. The difference is visible before you sign, in two answers: what specifically is delivered each month, and who owns the website and the domain if you leave. Get both in writing. That applies to every agency, and it is the advice we would give a friend.',
    faqs: [
      {
        q: 'Is an agency worth it for a small contractor?',
        a: 'Usually not yet, and we would rather say so. Agency retainers are priced for companies with the volume to absorb them, and a one-truck operation paying agency rates is usually buying capability it cannot use. The fundamentals — profile, reviews, a properly structured site — are most of the result at a fraction of the cost until you are bigger.',
      },
      {
        q: 'Can I use both?',
        a: 'It would be unusual and mostly wasteful: both would build you a website, and you only need one. If you are already with a full-service agency and it is working, stay. This page is for the decision before that one.',
      },
      {
        q: 'What about the ads Scorpion runs — can Widgeta do that?',
        a: 'No, and we are not going to pretend otherwise. Widgeta does not touch paid advertising. If managed ads are what you need, an agency or a specialist is the right answer and this is the wrong product.',
      },
      {
        q: 'What should I ask any agency before signing?',
        a: 'Four things, in writing: what specifically is delivered every month, what the whole first-year cost is including setup, whether you own the website and the domain if you leave, and what happens at the end of the term. Vagueness on the third one is the answer to the third one.',
      },
    ],
    title: 'Widgeta vs Scorpion: An Honest Comparison for Contractors',
    description:
      'Scorpion sells a team, managed ads and a strategy; Widgeta sells one product at a published price. Including who Scorpion suits better.',
  },

  angi: {
    name: 'Angi',
    kind: 'lead marketplace',
    h1: 'Widgeta vs Angi: an honest comparison.',
    intro1:
      "They aren't the same kind of thing. Angi sells you leads — people who asked Angi, not you, for a contractor. Widgeta builds you the asset those marketplaces are renting out from under you: your own site, ranking for your own neighborhood.",
    intro2:
      "Both can put jobs on your calendar. They differ in what you pay, who else gets the call, and what you're left holding after a year. Here's the whole picture — including where Angi genuinely wins.",
    rows: [
      { k: "What you're buying", w: 'Your own website, ranking for your own area', a: 'Access to leads Angi generated for itself' },
      { k: 'Cost model', w: '{{PRICE}} flat, unlimited calls', a: '$15–100+ per lead, plus an annual listing fee' },
      { k: 'Who else gets the customer', w: 'No one — they called you', a: 'The same lead is typically sold to 3–4 pros' },
      { k: 'Who owns the relationship', w: 'You — your site, your number, your reviews', a: 'Angi — the customer is theirs, rented to you' },
      { k: 'Time to first job', w: 'Weeks — rankings build, then compound', a: 'Days — real advantage when you need work now', theirWin: true },
      { k: 'What improves over time', w: 'Everything: pages, rankings, calls', a: 'Nothing — month 30 costs what month 1 did' },
      { k: 'When you stop paying', w: 'The site and domain stay yours', a: 'You disappear from the platform that day' },
      { k: 'Your ongoing effort', w: 'None — new pages appear monthly', a: 'Race competitors to answer every shared lead' },
    ],
    sourceNote:
      "Angi's lead prices and mechanics vary by trade and market; figures reflect ranges contractors commonly report. Check your own numbers.",
    theirsTitle: 'Angi makes sense when…',
    theirs: [
      'You’re brand new, with no reviews and no reputation, and need any jobs at all this week',
      'You have a slow-season gap to fill and can absorb the per-lead cost',
      'You’re fast on the phone — shared leads go to whoever answers first',
    ],
    oursTitle: 'Widgeta makes sense when…',
    ours: [
      'You’re done paying for the same customer over and over — you want calls that are only yours',
      'You think in years, not weeks: you want something that compounds instead of resetting every month',
      'You want a fixed marketing cost you can actually budget around',
    ],
    calloutLead: 'The honest play a lot of contractors run:',
    callout:
      "keep Angi for this week's gaps while your Widgeta site builds rank — then drop the leads as your own calls take over. They're not exclusive. One is rent, one is equity.",
    faqs: [
      {
        q: 'Can I use Widgeta and Angi at the same time?',
        a: "Yes, and many contractors do exactly that while their site builds rank. There's no conflict — one brings paid leads today, the other builds the source of free calls. The usual pattern is dialing Angi down as the site takes over.",
      },
      {
        q: 'Is Angi worth it for a brand-new business?',
        a: "Often, yes — at the start. If you have zero reviews and an empty calendar, paying for leads is a legitimate way to get moving, and we'd rather tell you that than pretend otherwise. The trap is still being there in year three, paying for every job. Start the asset early, even while you buy leads.",
      },
      {
        q: 'How fast does each one produce jobs?',
        a: "Angi is faster out of the gate — you can be buying leads this afternoon. Widgeta's site is live in about a minute, but rankings take weeks to build and keep climbing from there. That's the trade: Angi's speed never improves and never gets cheaper; the site starts slower and compounds.",
      },
      {
        q: 'What is each one worth if I cancel?',
        a: 'Cancel Angi and you keep nothing — the profile, the reviews, the visibility all live on their platform, and the leads stop the same day. Cancel Widgeta and you keep the site, the domain and every page; they’re yours. That difference is the whole argument in one question.',
      },
    ],
    title: 'Widgeta vs Angi: An Honest Comparison for Contractors',
    description:
      'Angi sells leads shared with your competitors; Widgeta builds the site those leads come from. The full comparison, including where Angi wins.',
  },

  thumbtack: {
    name: 'Thumbtack',
    kind: 'lead marketplace',
    h1: 'Widgeta vs Thumbtack: an honest comparison.',
    intro1:
      'Thumbtack sells you the chance to quote. You pay when a customer contacts you through their app — a customer who is, at that moment, contacting several other pros as well. Widgeta builds the thing those customers would have found instead: your own site, ranking for your own neighborhood.',
    intro2:
      "Both put work on the calendar. They differ in what a job costs you, who you're bidding against, and what you own at the end of the year. Here's the whole picture — including where Thumbtack genuinely wins.",
    rows: [
      { k: "What you're buying", w: 'Your own website, ranking for your own area', a: 'The chance to quote on jobs Thumbtack sourced' },
      { k: 'Cost model', w: '{{PRICE}} flat, unlimited calls', a: 'Charged per contact, priced by job type and market' },
      { k: 'Who else gets the customer', w: 'No one — they called you', a: 'You are quoting against other pros on the same job' },
      { k: 'Who owns the relationship', w: 'You — your site, your number, your reviews', a: 'Thumbtack — the profile and reviews live there' },
      { k: 'Time to first job', w: 'Weeks — rankings build, then compound', a: 'Days — you can be quoting the same week', theirWin: true },
      { k: 'What improves over time', w: 'Everything: pages, rankings, calls', a: 'Your rating, on their platform, on their terms' },
      { k: 'When you stop paying', w: 'The site and domain stay yours', a: 'The contacts stop and the profile goes quiet' },
      { k: 'Your ongoing effort', w: 'None — new pages appear monthly', a: 'Write a quote for every job you want a shot at' },
    ],
    sourceNote:
      "Thumbtack's pricing varies by trade, job type and market, and the company adjusts it over time; figures reflect ranges contractors commonly report. Check your own numbers.",
    theirsTitle: 'Thumbtack makes sense when…',
    theirs: [
      'You have time to write quotes and you are good at winning them',
      'You want work in a new area before you have any presence there',
      'Your calendar has a hole this month and you need it filled now',
    ],
    oursTitle: 'Widgeta makes sense when…',
    ours: [
      'You would rather answer a call than write another quote nobody reads',
      'You want the customer to arrive already sold, having read your own pages',
      'You want a fixed marketing cost instead of a per-contact one',
    ],
    calloutLead: 'The pattern that works for a lot of contractors:',
    callout:
      'quote on Thumbtack while your own pages climb, then let the direct calls take the load. One is a bidding floor you rent; the other is a storefront you own.',
    faqs: [
      {
        q: 'Can I use Widgeta and Thumbtack together?',
        a: 'Yes. They do different jobs — one buys you a shot at work this week, the other builds the pages that bring work without a bid. Most contractors who switch do it gradually, as their own calls start covering the calendar.',
      },
      {
        q: 'Is quoting on Thumbtack worth it?',
        a: 'It can be, especially early or in a new area — if you are fast and your quotes convert. What it never becomes is cheaper: the cost per job stays roughly where it started, however long you have been there.',
      },
      {
        q: 'How fast does each one produce jobs?',
        a: 'Thumbtack is faster to start — you can be quoting within days. Widgeta’s site is live in about a minute, but rankings take weeks and then keep building. The trade is speed now against a cost that compounds down instead of staying flat.',
      },
      {
        q: 'What is each one worth if I cancel?',
        a: 'Stop paying Thumbtack and the contacts stop; the profile and the reviews stay on their platform. Cancel Widgeta and you keep the site, the domain and every page. One leaves you with nothing to show for the spend, the other leaves you the asset.',
      },
    ],
    title: 'Widgeta vs Thumbtack: An Honest Comparison for Contractors',
    description:
      'Thumbtack charges you to quote against other pros; Widgeta builds the site that brings direct calls. The full comparison, including where Thumbtack wins.',
  },
};
