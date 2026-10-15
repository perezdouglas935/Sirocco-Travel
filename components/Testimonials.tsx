"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { CaretLeft, CaretRight } from "@phosphor-icons/react";
import { testimonials } from "@/data/testimonials";
import { SectionReveal, RevealItem } from "@/components/SectionReveal";
import { cn } from "@/lib/cn";

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const reduce = useReducedMotion();
  const active = testimonials[index];

  function step(delta: number) {
    setIndex((current) => (current + delta + testimonials.length) % testimonials.length);
  }

  return (
    <SectionReveal id="voices" className="mx-auto w-full max-w-[1400px] px-5 py-20 sm:px-7">
      <h2 className="font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
        Member Voices
      </h2>

      <RevealItem delay={0.1} className="mt-8">
        <figure className="max-w-[45ch]">
        <AnimatePresence mode="wait">
          <motion.blockquote
            key={index}
            aria-live="polite"
            className="font-display text-2xl font-semibold leading-[1.3] text-ink sm:text-3xl"
            initial={reduce ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduce ? undefined : { opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            &ldquo;{active.quote}&rdquo;
          </motion.blockquote>
        </AnimatePresence>

        <figcaption className="mt-4 text-sm text-muted">
          <span className="font-medium text-ink">{active.author}</span>, {active.context}
        </figcaption>
      </figure>
      </RevealItem>

      <RevealItem delay={0.2}>
        <div className="mt-6 flex items-center gap-3">
        <button
          type="button"
          onClick={() => step(-1)}
          aria-label="Previous testimonial"
          className="rounded-full border border-ink/15 p-2.5 text-ink transition-colors duration-200 hover:border-coral/50 hover:bg-ink/5"
        >
          <CaretLeft size={16} weight="bold" aria-hidden="true" />
        </button>
        <button
          type="button"
          onClick={() => step(1)}
          aria-label="Next testimonial"
          className="rounded-full border border-ink/15 p-2.5 text-ink transition-colors duration-200 hover:border-coral/50 hover:bg-ink/5"
        >
          <CaretRight size={16} weight="bold" aria-hidden="true" />
        </button>

        <ul className="ml-2 flex items-center gap-2" aria-label="Choose testimonial">
          {testimonials.map((testimonial, dotIndex) => (
            <li key={testimonial.author}>
              <button
                type="button"
                onClick={() => setIndex(dotIndex)}
                aria-label={`Show testimonial ${dotIndex + 1}`}
                aria-current={dotIndex === index ? "true" : undefined}
                className={cn(
                  "h-2.5 w-2.5 rounded-full border border-ink/20 transition-colors duration-200",
                  dotIndex === index ? "bg-coral" : "bg-ink/10 hover:bg-ink/25"
                )}
              />
            </li>
          ))}
        </ul>
        </div>
      </RevealItem>

      <p className="mt-8 max-w-[65ch] text-xs leading-relaxed text-muted">
        Quotes are mock data for this fictional brand.
      </p>
    </SectionReveal>
  );
}
