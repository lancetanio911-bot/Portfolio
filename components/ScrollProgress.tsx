"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

export function ScrollProgress() {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const bar = barRef.current;
    if (!bar) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const ctx = gsap.context(() => {
      if (reducedMotion) {
        gsap.set(bar, { scaleX: 0 });
        return;
      }
      gsap.set(bar, { scaleX: 0, transformOrigin: "left center" });
      gsap.to(bar, {
        scaleX: 1,
        ease: "none",
        scrollTrigger: {
          start: 0,
          end: "max",
          scrub: 0.3,
        },
      });
    }, bar);

    return () => ctx.revert();
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-x-0 top-0 z-[90] h-0.5"
      aria-hidden="true"
    >
      <div
        ref={barRef}
        className="h-full w-full bg-gradient-to-r from-brand to-brand-2 will-change-transform"
      />
    </div>
  );
}
