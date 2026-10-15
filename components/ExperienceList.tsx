"use client";

import Image from "next/image";
import { Airplane, Boat, ForkKnife, Mountains, Sparkle } from "@phosphor-icons/react";
import { experiences, type Experience } from "@/data/experiences";
import { SectionReveal, RevealItem } from "@/components/SectionReveal";

const ICONS = {
  airplane: Airplane,
  boat: Boat,
  "fork-knife": ForkKnife,
  sparkle: Sparkle,
  mountains: Mountains,
} as const;

function ExperienceCard({ experience }: { experience: Experience }) {
  const Icon = ICONS[experience.icon];

  if (experience.image) {
    return (
      <article className="shimmer tile relative min-h-[240px] h-full rounded-2xl p-5">
        <Image src={experience.image} alt="" fill sizes="340px" className="object-cover opacity-40" />
        <div
          className="absolute inset-0 rounded-2xl bg-linear-to-t from-ink/85 via-ink/45 to-ink/25"
          aria-hidden="true"
        />
        <div className="relative z-10 flex h-full flex-col">
          <Icon size={22} weight="duotone" className="text-amber" aria-hidden="true" />
          <h3 className="mt-4 font-display text-base font-semibold text-shell">{experience.name}</h3>
          <p className="mt-2 max-w-[65ch] text-sm leading-relaxed text-shell/85">{experience.blurb}</p>
        </div>
      </article>
    );
  }

  return (
    <article className="shimmer tile h-full rounded-2xl p-5">
      <Icon size={22} weight="duotone" className="text-teal" aria-hidden="true" />
      <h3 className="mt-4 font-display text-base font-semibold text-ink">{experience.name}</h3>
      <p className="mt-2 max-w-[65ch] text-sm leading-relaxed text-muted">{experience.blurb}</p>
    </article>
  );
}

export function ExperienceList() {
  return (
    <SectionReveal id="experiences" className="mx-auto w-full max-w-[1400px] px-5 py-20 sm:px-7">
      <h2 className="font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
        Signature Experiences
      </h2>
      <p className="mt-3 max-w-[65ch] text-sm leading-relaxed text-muted">
        The moves members request most, arranged end to end by the same desk.
        Flick the rail.
      </p>

      <div className="snap-rail mt-8" role="list">
        {experiences.map((experience, index) => (
          <RevealItem key={experience.slug} delay={index * 0.06} className="h-full" role="listitem">
            <ExperienceCard experience={experience} />
          </RevealItem>
        ))}
      </div>
    </SectionReveal>
  );
}
