"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

export function IntroLoader() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const ctx = gsap.context(() => {
      if (reducedMotion) {
        gsap.set(root, { autoAlpha: 0, pointerEvents: "none" });
        return;
      }

      const letters = root.querySelectorAll("[data-loader-letter]");
      const bar = root.querySelector("[data-loader-bar]");

      const tl = gsap.timeline({ defaults: { ease: "power4.inOut" } });
      tl.fromTo(
        letters,
        { yPercent: 120, autoAlpha: 0 },
        { yPercent: 0, autoAlpha: 1, duration: 0.75, stagger: 0.06 }
      )
        .fromTo(
          bar,
          { scaleX: 0 },
          { scaleX: 1, duration: 0.6, ease: "power3.out" },
          "-=0.45"
        )
        .to(
          letters,
          { yPercent: -120, autoAlpha: 0, duration: 0.6, stagger: 0.05 },
          "+=0.3"
        )
        .to(
          bar,
          { scaleX: 0, duration: 0.4, ease: "power2.in" },
          "<"
        )
        .to(root, { yPercent: -100, duration: 0.7, ease: "power2.inOut" }, "-=0.15")
        .set(root, { display: "none" });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={rootRef}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
      aria-hidden="true"
    >
      <div className="flex items-center justify-center">
        <div className="overflow-hidden">
          {Array.from("LANCE").map((char, index) => (
            <span
              key={index}
              data-loader-letter
              className="inline-block font-display text-6xl font-bold tracking-[0.18em] text-foreground opacity-0 sm:text-7xl"
            >
              {char}
            </span>
          ))}
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-0">
        <div
          data-loader-bar
          className="h-1 origin-left bg-gradient-to-r from-brand to-brand-2"
        />
      </div>
    </div>
  );
}
