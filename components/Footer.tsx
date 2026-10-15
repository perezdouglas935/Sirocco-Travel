import Link from "next/link";
import { destinations } from "@/data/destinations";
import { heroCredit } from "@/data/hero";

export function Footer() {
  const credits = [
    { subject: "Hero", ...heroCredit },
    ...destinations.map((destination) => ({
      subject: destination.name,
      ...destination.credit,
    })),
  ];

  return (
    <footer className="mt-10 border-t border-ink/10 px-5 py-12 sm:px-7">
      <div className="mx-auto max-w-[1400px]">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <p className="font-display text-sm font-semibold tracking-[0.18em] text-ink">
            SIROCCO
          </p>
          <nav aria-label="Footer">
            <ul className="flex flex-wrap gap-4 text-sm text-muted">
              <li>
                <Link href="#destinations" className="hover:text-ink">
                  Destinations
                </Link>
              </li>
              <li>
                <Link href="#membership" className="hover:text-ink">
                  Membership
                </Link>
              </li>
              <li>
                <Link href="#concierge" className="hover:text-ink">
                  Concierge
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="mt-8 max-w-[65ch] text-sm leading-relaxed text-muted">
          <p>
            SIROCCO is a fictional brand built for this demo. Prices,
            testimonials, and itineraries are mock data.
          </p>
          <p className="mt-3">
            Images via Pexels (Pexels License) and Flickr (CC BY 2.0). Unsplash
            Source was discontinued, so this site uses stable direct CDN URLs
            instead.
          </p>
          <ul className="mt-4 grid gap-1.5">
            {credits.map((credit) => (
              <li key={credit.sourceUrl}>
                <span className="text-ink/70">{credit.subject}:</span>{" "}
                <a
                  href={credit.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline decoration-white/20 underline-offset-2 hover:text-ink"
                >
                  {credit.author}
                </a>
                , {credit.license}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
