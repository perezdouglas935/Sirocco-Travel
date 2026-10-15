"use client";

import { type MouseEvent as ReactMouseEvent, type ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import { heroImage } from "@/data/hero";

function MagneticCTA({ href, children }: { href: string; children: ReactNode }) {
  const reduce = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 140, damping: 14, mass: 0.3 });
  const springY = useSpring(y, { stiffness: 140, damping: 14, mass: 0.3 });

  function handleMove(event: ReactMouseEvent<HTMLAnchorElement>) {
    if (reduce) return;
    const rect = event.currentTarget.getBoundingClientRect();
    x.set((event.clientX - (rect.left + rect.width / 2)) * 0.12);
    y.set((event.clientY - (rect.top + rect.height / 2)) * 0.12);
  }

  function handleLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.a
      href={href}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={reduce ? undefined : { x: springX, y: springY }}
      className="rounded-full bg-coral px-6 py-3 text-sm font-semibold text-shell shadow-coral"
    >
      {children}
    </motion.a>
  );
}

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section id="top" className="relative min-h-[100svh]">
      <div className="noise pointer-events-none absolute inset-0 z-10" aria-hidden="true" />

      <div className="mx-auto grid min-h-[100svh] max-w-[1400px] items-center gap-10 px-5 pt-24 pb-16 sm:px-7 lg:grid-cols-[1.15fr_1fr] lg:gap-14">
        <div>
          <h1 className="font-display text-5xl font-bold leading-[1.05] tracking-tight text-ink sm:text-6xl lg:text-7xl">
            <span className="line-mask">
              <span style={reduce ? undefined : { animationDelay: "0.1s" }}>Beyond First Class.</span>
            </span>
          </h1>

          <p className="mt-5 max-w-[65ch] text-base leading-relaxed text-muted sm:text-lg">
            Concierge travel for people who do not book trips. One desk, every
            detail arranged before you ask.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <MagneticCTA href="#concierge">Design My Trip</MagneticCTA>
            <Link
              href="#destinations"
              className="rounded-full border border-ink/15 px-6 py-3 text-sm font-medium text-ink transition-colors duration-200 hover:border-coral/50 hover:bg-ink/5"
            >
              Explore Destinations
            </Link>
          </div>
        </div>

        <div className={`relative min-h-[40svh] lg:min-h-[60svh] ${reduce ? "" : "curtain"}`}>
          <Image
            src={heroImage}
            alt="Northern lights over a mountain ridge at night"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 45vw"
            className="rounded-2xl object-cover"
          />
        </div>
      </div>
    </section>
  );
}
