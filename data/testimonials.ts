export type Testimonial = {
  quote: string;
  author: string;
  context: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "The ramp was clear before I finished my call. That is the whole brand in one sentence.",
    author: "Isabelle R.",
    context: "Geneva to Nice, private hop",
  },
  {
    quote:
      "Seven days on the water with no schedule. The crew knew the coast better than the charts.",
    author: "Kenji M.",
    context: "Yacht week, Côte d'Azur",
  },
  {
    quote:
      "They found a table that does not take reservations, in a city I had visited eleven times.",
    author: "Amara O.",
    context: "Michelin trail, Tokyo",
  },
  {
    quote:
      "Our household travels on one standard, and Aurora is the only desk that keeps up with it.",
    author: "Viktor S.",
    context: "Obsidian member, since 2021",
  },
];
