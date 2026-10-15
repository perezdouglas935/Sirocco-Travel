"use client";

import Link from "next/link";
import Image from "next/image";
import { destinations, type Destination } from "@/data/destinations";
import { formatPrice } from "@/lib/format";
import { SectionReveal, RevealItem } from "@/components/SectionReveal";
import { cn } from "@/lib/cn";

function DestinationCard({ destination, feature, index }: { destination: Destination; feature: boolean; index: number }) {
  return (
    <RevealItem delay={index * 0.08} className={cn(feature && "lg:col-span-2 lg:row-span-2")}>
      <article className="shimmer tile group rounded-2xl">
      <Link
        href={`/destinations/${destination.slug}`}
        className="block rounded-2xl p-4"
        aria-label={`${destination.name}, ${destination.region}. From ${formatPrice(destination.fromPrice)}. View details`}
      >
        <div className={cn("relative overflow-hidden rounded-xl", feature ? "aspect-[16/10]" : "aspect-[4/3]")}>
          <Image
            src={destination.image}
            alt={`${destination.name}, ${destination.region}`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
          />
        </div>

        <div className="mt-4">
          <h3 className="font-display text-lg font-semibold text-ink">
            {destination.name}
          </h3>
          <p className="mt-1 text-sm text-muted">{destination.region}</p>
          <p className="mt-3 max-w-[65ch] text-sm leading-relaxed text-ink/85">
            {destination.vibe}
          </p>
          <p className="mt-3 text-sm font-medium text-amber">
            from {formatPrice(destination.fromPrice)}
          </p>
        </div>

        <ul
          className="mt-3 grid gap-1.5 text-xs text-muted opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-within:opacity-100"
          aria-label="Quick facts"
        >
          {destination.facts.slice(0, 2).map((fact) => (
            <li key={fact.label}>
              <span className="text-ink/70">{fact.label}:</span> {fact.value}
            </li>
          ))}
        </ul>
      </Link>
      </article>
    </RevealItem>
  );
}

export function DestinationGrid() {
  return (
    <SectionReveal id="destinations" className="mx-auto w-full max-w-[1400px] px-5 py-20 sm:px-7">
      <h2 className="font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
        Destinations
      </h2>
      <p className="mt-3 max-w-[65ch] text-sm leading-relaxed text-muted">
        Six places the desk runs every season. Each tile opens the full shape of
        the trip.
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {destinations.map((destination, index) => (
          <DestinationCard key={destination.slug} destination={destination} feature={index === 0} index={index} />
        ))}
      </div>
    </SectionReveal>
  );
}
