export type Tier = {
  name: string;
  price: string;
  positioning: string;
  perks: string[];
  featured: boolean;
};

export const tiers: Tier[] = [
  {
    name: "Silver",
    price: "€4,800 / year",
    positioning: "For travelers who want the details handled.",
    perks: [
      "Dedicated trip designer",
      "Priority restaurant and event holds",
      "Seasonal city guides",
      "Member lounge access worldwide",
    ],
    featured: false,
  },
  {
    name: "Black",
    price: "€18,000 / year",
    positioning: "For members who move between cities on their own clock.",
    perks: [
      "Private jet hour credits",
      "24/7 concierge desk",
      "Yacht and villa sourcing",
      "Closed-table restaurant access",
      "Ground teams in every destination",
    ],
    featured: true,
  },
  {
    name: "Obsidian",
    price: "By invitation",
    positioning: "For households with a single standard: everything, arranged.",
    perks: [
      "Fully custom itineraries",
      "Home-away-from-home sourcing",
      "Privacy and security planning",
      "Family office travel coordination",
      "One director for the entire household",
    ],
    featured: false,
  },
];
