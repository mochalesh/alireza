/**
 * Company details and the About page's people.
 *
 * Every value here is a placeholder the brief names as one, and the pages
 * that render them say so on the page rather than only in a comment. That
 * is deliberate: a fake phone number presented as real is the kind of thing
 * that is easy to ship and expensive to have shipped.
 *
 * `PLACEHOLDER` is the switch. Set it false once the real details and real
 * people are in, and the disclosure notices disappear on their own.
 */
export const PLACEHOLDER = true;

export const CONTACT = {
  email: 'hello@widgeta.app',
  phone: '(555) 010-0199',
  whatsapp: '+971 55 010 0199',
  /** Answered by a person, within this window. Stated as a promise, so keep it true. */
  responseWindow: 'one business day',
};

export const TEAM = [
  {
    name: 'Sami Harrold',
    role: 'Founder',
    bio: "Grew up handing wrenches in his dad's plumbing truck; spent a decade building software for contractors. Widgeta is the tool he wishes his dad had been sold instead of leads.",
  },
  {
    name: 'Priya Natarajan',
    role: 'Head of search',
    bio: 'Ran local SEO for hundreds of service businesses at an agency and got tired of writing reports instead of results. She builds the engine that publishes the answers.',
  },
  {
    name: 'Omar El-Sayed',
    role: 'Gulf market lead',
    bio: "Built maintenance-company operations in Riyadh and Dubai. He's the reason the Arabic product leads with WhatsApp and speaks like a contractor, not a translation.",
  },
];

export const ABOUT = {
  h1: "Tradespeople shouldn't have to rent their own customers.",
  p1: "That's the whole company. Every trade we know has the same story: great at the work, burned by marketing — lead fees that climb, agencies that vanish, websites that never made a phone ring. Widgeta exists so a plumber can own a working online presence for the price of a tank of gas a week, without learning a single new tool.",
  p2: "We build the software; your neighbors' searches do the routing; your phone does the rest. If a feature doesn't end in more booked jobs, we don't ship it.",
};
