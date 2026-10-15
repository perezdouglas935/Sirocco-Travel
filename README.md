# SIROCCO

A single-page, production-ready landing site for a fictional warm-weather
concierge travel brand, plus optional destination detail routes. Tropical
direction: sand canvas, espresso ink type, coral action, sea teal and sunset
amber atmosphere, hairline editorial tiles, scroll-reveal sections that invite
the visitor in as they move down the page.

## Stack

- Next.js (App Router, latest stable) + TypeScript
- Tailwind CSS v4 (theme tokens in `app/globals.css` via `@theme`)
- Framer Motion for scroll and entrance animations
- `next/image` with remote image domains configured in `next.config.ts`
- No backend. All data is typed mock data in `data/`.

## Run

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # serve the build
```

## Pages and sections

- Sticky glass navbar with active-section highlight and "Request Itinerary" CTA
- Hero: "Beyond First Class." with parallax background, aurora blob, noise,
  animated conic border on the primary CTA
- Destinations: 6 cards with hover shimmer, tilt, and quick-facts reveal. Each
  card links to `/destinations/[slug]` (statically generated detail routes)
- Signature Experiences: bento grid, 5 experiences
- Membership Tiers: Silver, Black (featured), Obsidian
- Member Voices: accessible carousel (prev/next, dots, `aria-live`)
- Concierge form: client-side validation, interest chips, budget select,
  "Request received" toast. No network call is made
- Footer: minimal, with full image credits
- Floating "Request Itinerary" button on mobile

## Typography

Two Google fonts loaded through `next/font` (self-hosted at build time, no
`<link>` in production): Newsreader for display, Karla for body.

## Imagery and credits

Remote images only. Nothing copyrighted is committed to this repo.

The brief asked for `source.unsplash.com` URLs, but Unsplash Source was
discontinued in 2024 and returns errors, so the site uses stable direct CDN
URLs instead: Pexels photo IDs (Pexels License) and Flickr CC BY 2.0 photos
discovered through the Openverse API. The full credit list lives in the footer
and in `data/destinations.ts` / `data/hero.ts`.

Current sources:

- Hero: Flickr, Giuseppe Milo, CC BY 2.0
- Maldives: Pexels photo 39592032, Pexels License
- Tokyo: Pexels photo 31558042, Pexels License
- Swiss Alps: Flickr, jay8085, CC BY 2.0
- Dubai: Flickr, M Sabbouh, CC BY 2.0
- Serengeti: Flickr, appenz, CC BY 2.0
- Mediterranean: Flickr, trishhartmann, CC BY 2.0

If any URL fails, replace it with another Pexels or Unsplash direct CDN URL for
the same subject and update the credit entry.

## Accessibility and performance

- Semantic headings, skip link, focus-visible rings, `aria-current` on the
  active nav section, `aria-pressed` chips, labeled form fields with inline
  errors, `aria-live` toast and carousel
- All animations honor `prefers-reduced-motion`. Glass panels have a
  solid-fill fallback under `prefers-reduced-transparency`
- Mobile-first responsive layout, `min-h-[100svh]` hero, lazy-loaded imagery,
  hero image prioritized for LCP
- No heavy libraries beyond Tailwind, Framer Motion, and tree-shaken Phosphor
  icons

## Structure

```text
app/
  layout.tsx            fonts, metadata, shell
  page.tsx              section assembly
  globals.css           Tailwind v4 theme tokens and effects
  icon.svg              favicon mark
  destinations/[slug]/  detail routes
components/
  Navbar, Hero, DestinationGrid, ExperienceList, Tiers,
  Testimonials, ConciergeForm, Footer, FloatingCTA, SectionReveal
data/
  destinations.ts, experiences.ts, tiers.ts, testimonials.ts, hero.ts
lib/
  cn.ts, format.ts
```

Prices, testimonials, and itineraries are mock data for a fictional brand.
