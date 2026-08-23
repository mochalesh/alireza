/**
 * Blog posts.
 *
 * One post exists, and it needs a note.
 *
 * The design shipped it as a piece about water-heater replacement cost —
 * which is a search a homeowner makes, not a contractor. The SEO spec is
 * explicit that the customer's keywords appear on this site only as product
 * demonstration and that we never build pages around them: ranking
 * widgeta.app for "water heater replacement cost" would bring homeowners
 * who cannot buy anything, and would blur what this site is about.
 *
 * So the post is built and is genuinely good, but it is labelled on the page
 * as an example of what Widgeta publishes for a customer, and it carries
 * noindex. It demonstrates the product without competing for the wrong
 * audience. `sample: true` is what drives both.
 *
 * Posts written for contractors — our own keyword galaxy — should set
 * `sample: false` and will index normally.
 */

export const POSTS = {
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
