"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const NAV_LINKS = [
  { href: "#destinations", label: "Destinations" },
  { href: "#experiences", label: "Experiences" },
  { href: "#membership", label: "Membership" },
  { href: "#voices", label: "Voices" },
  { href: "#concierge", label: "Concierge" },
];

function LogoMark() {
  return (
    <svg width="24" height="24" viewBox="0 0 26 26" aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id="aurora-mark" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#c8543f" />
          <stop offset="55%" stopColor="#cf9a4e" />
          <stop offset="100%" stopColor="#1f7a6d" />
        </linearGradient>
      </defs>
      <path d="M3 19 C7 9, 12 4, 23 7" fill="none" stroke="url(#aurora-mark)" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M3 23 C8 15, 14 11, 23 13" fill="none" stroke="url(#aurora-mark)" strokeWidth="1.4" strokeLinecap="round" opacity="0.55" />
    </svg>
  );
}

export function Navbar() {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    const sections = NAV_LINKS.map((link) =>
      document.getElementById(link.href.slice(1))
    ).filter((section): section is HTMLElement => Boolean(section));

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) {
          setActiveSection(visible[0].target.id);
        }
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0.15 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <nav
        aria-label="Primary"
        className="glass mx-auto flex h-16 max-w-[1400px] items-center justify-between gap-4 rounded-full px-5 sm:px-7"
      >
        <Link
          href="#top"
          className="flex items-center gap-2.5 font-display text-sm font-bold tracking-[0.14em] text-ink"
        >
          <LogoMark />
          <span>SIROCCO</span>
        </Link>

        <ul className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                aria-current={activeSection === link.href.slice(1) ? "true" : undefined}
                className="nav-pill"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="#concierge"
          className="rounded-full border border-ink/15 px-4 py-2 text-sm font-medium text-ink transition-colors duration-200 hover:border-coral/50 hover:bg-ink/5"
        >
          Request Itinerary
        </Link>
      </nav>
    </header>
  );
}
