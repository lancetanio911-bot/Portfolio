"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "@/lib/gsap";
import { cn } from "@/lib/utils";

export function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);
  const [label, setLabel] = useState("");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const finePointer = window.matchMedia(
      "(hover: hover) and (pointer: fine)"
    ).matches;
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (!finePointer || reducedMotion) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    document.documentElement.classList.add("cursor-none-host");

    gsap.set([dot, ring], { xPercent: -50, yPercent: -50, autoAlpha: 0 });

    const dotX = gsap.quickTo(dot, "x", { duration: 0.12, ease: "power3.out" });
    const dotY = gsap.quickTo(dot, "y", { duration: 0.12, ease: "power3.out" });
    const ringX = gsap.quickTo(ring, "x", { duration: 0.45, ease: "power3.out" });
    const ringY = gsap.quickTo(ring, "y", { duration: 0.45, ease: "power3.out" });
    const ringScale = gsap.quickTo(ring, "scale", {
      duration: 0.3,
      ease: "power3.out",
    });

    let shown = false;
    const show = () => {
      if (shown) return;
      shown = true;
      gsap.to([dot, ring], { autoAlpha: 1, duration: 0.3 });
    };

    const onMove = (event: MouseEvent) => {
      show();
      setVisible(true);
      dotX(event.clientX);
      dotY(event.clientY);
      ringX(event.clientX);
      ringY(event.clientY);
    };
    const onOver = (event: MouseEvent) => {
      const target = event.target as Element | null;
      const viewTarget = target?.closest("[data-cursor-view]");
      const interactive = target?.closest(
        "a, button, [role='button'], input, textarea, select, label"
      );
      if (viewTarget) {
        setLabel("View");
        ringScale(2.4);
      } else if (interactive) {
        setLabel("");
        ringScale(1.6);
      } else {
        setLabel("");
        ringScale(1);
      }
    };
    const onLeave = () => setVisible(false);

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseover", onOver, { passive: true });
    document.documentElement.addEventListener("mouseleave", onLeave);

    return () => {
      document.documentElement.classList.remove("cursor-none-host");
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      document.documentElement.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className={cn("pointer-events-none fixed inset-0 z-[95] hidden", visible && "block")}
    >
      <div
        ref={dotRef}
        className="fixed left-0 top-0 size-2 rounded-full bg-brand"
      />
      <div
        ref={ringRef}
        className="fixed left-0 top-0 flex size-10 items-center justify-center rounded-full border border-brand/60"
      >
        <span
          ref={labelRef}
          className="select-none text-[10px] font-semibold uppercase tracking-[0.15em] text-brand"
        >
          {label}
        </span>
      </div>
    </div>
  );
}
