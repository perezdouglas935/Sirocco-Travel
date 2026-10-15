"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { CaretUp } from "@phosphor-icons/react";

export function BackToTop() {
  const [visible, setVisible] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    const section = document.getElementById("destinations");
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  function handleClick() {
    const start = window.scrollY;
    if (start === 0) return;

    if (reduce) {
      window.scrollTo(0, 0);
      return;
    }

    // Ease-in cubic: slow start, accelerating finish. Always under one second.
    const duration = Math.min(900, Math.max(350, start / 30));
    const t0 = performance.now();

    function frame(now: number) {
      const progress = Math.min(1, (now - t0) / duration);
      const eased = progress * progress * progress;
      window.scrollTo(0, start * (1 - eased));
      if (progress < 1) requestAnimationFrame(frame);
    }

    requestAnimationFrame(frame);
  }

  if (!visible) return null;

  return (
    <motion.button
      type="button"
      onClick={handleClick}
      aria-label="Back to top"
      initial={reduce ? false : { opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="fixed bottom-6 right-6 z-50 flex h-11 w-11 items-center justify-center rounded-full border border-ink/15 bg-shell/90 text-ink shadow-soft transition-colors duration-200 hover:border-coral/50 hover:text-coral"
    >
      <CaretUp size={18} weight="bold" aria-hidden="true" />
    </motion.button>
  );
}
