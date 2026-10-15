export type ImageCredit = {
  author: string;
  license: string;
  sourceUrl: string;
};

export type Destination = {
  slug: string;
  name: string;
  region: string;
  vibe: string;
  fromPrice: number;
  image: string;
  facts: Array<{ label: string; value: string }>;
  credit: ImageCredit;
};

export const destinations: Destination[] = [
  {
    slug: "maldives",
    name: "Maldives",
    region: "Indian Ocean",
    vibe: "Overwater villas where the horizon is all glass and light.",
    fromPrice: 18400,
    image:
      "https://images.pexels.com/photos/39592032/pexels-photo-39592032.jpeg?auto=compress&cs=tinysrgb&w=1200",
    facts: [
      { label: "Transfer", value: "Seaplane from Malé" },
      { label: "Stay", value: "7 nights, private reef house" },
      { label: "Signature moment", value: "Dinner on the glass floor at dusk" },
    ],
    credit: {
      author: "Pexels",
      license: "Pexels License",
      sourceUrl: "https://www.pexels.com/photo/tropical-resort-overwater-bungalows-in-maldives-39592032/",
    },
  },
  {
    slug: "tokyo",
    name: "Tokyo",
    region: "Japan",
    vibe: "Neon nights, private counters, and silence between the lights.",
    fromPrice: 12900,
    image:
      "https://images.pexels.com/photos/31558042/pexels-photo-31558042.jpeg?auto=compress&cs=tinysrgb&w=1200",
    facts: [
      { label: "Transfer", value: "Private car from Haneda" },
      { label: "Stay", value: "5 nights, Aoyama suite" },
      { label: "Signature moment", value: "Ten-seat counter, chef's choice" },
    ],
    credit: {
      author: "Pexels",
      license: "Pexels License",
      sourceUrl: "https://www.pexels.com/photo/tokyo-skyline-at-night-with-tokyo-tower-31558042/",
    },
  },
  {
    slug: "swiss-alps",
    name: "Swiss Alps",
    region: "Switzerland",
    vibe: "Chalets above the clouds, heated by fire and starlight.",
    fromPrice: 14200,
    image: "https://live.staticflickr.com/3112/3136191066_d45029b904_b.jpg",
    facts: [
      { label: "Transfer", value: "Charter rail to St. Moritz" },
      { label: "Stay", value: "6 nights, private chalet" },
      { label: "Signature moment", value: "Night hike under the Pilatus ridge" },
    ],
    credit: {
      author: "jay8085",
      license: "CC BY 2.0",
      sourceUrl: "https://www.flickr.com/photos/89649959@N00/3136191066",
    },
  },
  {
    slug: "dubai",
    name: "Dubai",
    region: "United Arab Emirates",
    vibe: "Skyline suites and desert drives that end under the stars.",
    fromPrice: 11600,
    image: "https://live.staticflickr.com/3890/14929684895_f180eeff5a_b.jpg",
    facts: [
      { label: "Transfer", value: "Helicopter from the marina" },
      { label: "Stay", value: "4 nights, corner penthouse" },
      { label: "Signature moment", value: "Private dune dinner at midnight" },
    ],
    credit: {
      author: "M Sabbouh",
      license: "CC BY 2.0",
      sourceUrl: "https://www.flickr.com/photos/126129098@N03/14929684895",
    },
  },
  {
    slug: "serengeti",
    name: "Serengeti",
    region: "Tanzania",
    vibe: "Private lodges, dusk game drives, and total quiet.",
    fromPrice: 16800,
    image: "https://live.staticflickr.com/2324/2480632793_98b722a401_b.jpg",
    facts: [
      { label: "Transfer", value: "Bush flight to the lodge strip" },
      { label: "Stay", value: "6 nights, tented suite" },
      { label: "Signature moment", value: "Sundowner on the caldera rim" },
    ],
    credit: {
      author: "appenz",
      license: "CC BY 2.0",
      sourceUrl: "https://www.flickr.com/photos/25812660@N03/2480632793",
    },
  },
  {
    slug: "mediterranean",
    name: "Mediterranean",
    region: "Côte d'Azur",
    vibe: "A private deck, a slow coast, and no fixed schedule.",
    fromPrice: 21500,
    image: "https://live.staticflickr.com/2832/10648436294_59e809e1f4_b.jpg",
    facts: [
      { label: "Transfer", value: "Tender from Monaco port" },
      { label: "Stay", value: "7 nights aboard, crew included" },
      { label: "Signature moment", value: "Anchored off Lerins at first light" },
    ],
    credit: {
      author: "trishhartmann",
      license: "CC BY 2.0",
      sourceUrl: "https://www.flickr.com/photos/21078769@N00/10648436294",
    },
  },
];

export function getDestination(slug: string): Destination | undefined {
  return destinations.find((destination) => destination.slug === slug);
}
