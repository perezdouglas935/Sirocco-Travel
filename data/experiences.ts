export type Experience = {
  slug: string;
  name: string;
  blurb: string;
  icon: "airplane" | "boat" | "fork-knife" | "sparkle" | "mountains";
  image?: string;
};

export const experiences: Experience[] = [
  {
    slug: "private-jet-hops",
    name: "Private jet hops",
    blurb:
      "Wheels up on request. A cleared ramp, a quiet cabin, and a city you land in before dinner.",
    icon: "airplane",
  },
  {
    slug: "yacht-week",
    name: "Yacht week",
    blurb:
      "Seven days, one crew, no fixed schedule. The coast decides the pace, you decide the stops.",
    icon: "boat",
    image: "https://live.staticflickr.com/2832/10648436294_59e809e1f4_b.jpg",
  },
  {
    slug: "michelin-trails",
    name: "Michelin trails",
    blurb:
      "Reservations that do not exist on the public book, sequenced across cities in one arc.",
    icon: "fork-knife",
  },
  {
    slug: "desert-stargazing",
    name: "Desert stargazing",
    blurb:
      "A heated observatory deck in the Namib or the Atacama, with an astronomer on site.",
    icon: "sparkle",
    image: "https://live.staticflickr.com/2324/2480632793_98b722a401_b.jpg",
  },
  {
    slug: "alpine-retreat",
    name: "Alpine retreat",
    blurb:
      "A chalet with a private guide, glacier breakfast, and the spa hour kept for you alone.",
    icon: "mountains",
    image: "https://live.staticflickr.com/3112/3136191066_d45029b904_b.jpg",
  },
];
