"use client";

import Link from "next/link";
import { Check } from "@phosphor-icons/react";
import { tiers } from "@/data/tiers";
import { SectionReveal, RevealItem } from "@/components/SectionReveal";
import { cn } from "@/lib/cn";

export function Tiers() {
  const featured = tiers.find((tier) => tier.name === "Obsidian");
  const rest = tiers.filter((tier) => tier.name !== "Obsidian");

  if (!featured) return null;

  return (
    <SectionReveal id="membership" className="mx-auto w-full max-w-[1400px] px-5 py-20 sm:px-7">
      <h2 className="font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
        Membership Tiers
      </h2>
      <p className="mt-3 max-w-[65ch] text-sm leading-relaxed text-muted">
        Membership is the product. Trips are priced separately and only after
        the desk knows how you travel.
      </p>

      <RevealItem delay={0.1}>
        <article className="sirocco-edge shimmer tile mt-8 rounded-2xl p-7">
        <div className="relative z-10">
          <h3 className="font-display text-2xl font-bold text-ink">{featured.name}</h3>
          <p className="mt-1 text-sm font-medium text-amber">{featured.price}</p>
          <p className="mt-3 max-w-[65ch] text-sm leading-relaxed text-ink/85">
            {featured.positioning}
          </p>
          <ul className="mt-5 grid gap-2.5 text-sm text-ink/85 sm:grid-cols-2" aria-label={`${featured.name} perks`}>
            {featured.perks.map((perk) => (
              <li key={perk} className="flex items-start gap-2.5">
                <Check size={16} weight="bold" className="mt-0.5 shrink-0 text-teal" aria-hidden="true" />
                <span>{perk}</span>
              </li>
            ))}
          </ul>
          <Link
            href="#concierge"
            className="mt-6 inline-block rounded-full border border-amber/40 px-5 py-2.5 text-sm font-semibold text-ink transition-colors duration-200 hover:border-amber/70 hover:bg-amber/10"
          >
            Enquire
          </Link>
        </div>
      </article>
      </RevealItem>

      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        {rest.map((tier, index) => (
          <RevealItem key={tier.name} delay={0.15 + index * 0.08}>
            <article className="shimmer tile rounded-2xl p-6">
            <h3 className="font-display text-lg font-semibold text-ink">{tier.name}</h3>
            <p className="mt-1 text-sm font-medium text-amber">{tier.price}</p>
            <p className="mt-3 max-w-[65ch] text-sm leading-relaxed text-muted">{tier.positioning}</p>
            <ul className="mt-4 grid gap-2 text-sm text-ink/85" aria-label={`${tier.name} perks`}>
              {tier.perks.map((perk) => (
                <li key={perk} className="flex items-start gap-2.5">
                  <Check size={15} weight="bold" className="mt-0.5 shrink-0 text-teal" aria-hidden="true" />
                  <span>{perk}</span>
                </li>
              ))}
            </ul>
            <Link
              href="#concierge"
              className={cn(
                "mt-5 inline-block rounded-full px-5 py-2.5 text-sm font-semibold text-ink transition-colors duration-200",
                tier.name === "Black"
                  ? "bg-teal/12 hover:bg-teal/20"
                  : "border border-ink/15 hover:border-coral/50 hover:bg-ink/5"
              )}
            >
              Join
            </Link>
            </article>
          </RevealItem>
        ))}
      </div>
    </SectionReveal>
  );
}
