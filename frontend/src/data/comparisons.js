/**
 * Comparison pages.
 *
 * Highest purchase intent on the site, and the one place where conceding a
 * point is the strategy: a page that says the competitor never wins reads as
 * marketing, and marketing is what this audience has been burned by. Every
 * row here states something about the company actually named in that column,
 * and every numeric claim carries its source note.
 *
 * Angi is the approved page, written in full. Thumbtack follows the same
 * shape with its own facts — the two are genuinely different businesses and
 * the rows say so. The remaining three in site.js stay unbuilt until their
 * copy exists; a comparison page invented from a template would be exactly
 * the thing this page format is supposed to be an antidote to.
 */

export const COMPARISON_CONTENT = {
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
