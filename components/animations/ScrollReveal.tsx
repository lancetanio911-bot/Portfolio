"use client";

import { type ReactNode, type ElementType, useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import { cn } from "@/lib/utils";

type ScrollRevealProps = {
  children: ReactNode;
  className?: string;
  as?: ElementType;
  stagger?: number;
  delay?: number;
  duration?: number;
  y?: number;
  start?: string;
  id?: string;
};

export function ScrollReveal({
  children,
  className,
  as: Tag = "div",
  stagger = 0.12,
  delay = 0,
  duration = 0.8,
  y = 32,
  start = "top 88%",
  id,
}: ScrollRevealProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const ctx = gsap.context(() => {
      const targets = Array.from(element.children);

      if (reducedMotion) {
        gsap.set(targets, { autoAlpha: 1, y: 0 });
        return;
      }

      gsap.fromTo(
        targets,
        { autoAlpha: 0, y },
        {
          autoAlpha: 1,
          y: 0,
          duration,
          delay,
          stagger,
          ease: "power3.out",
          scrollTrigger: {
            trigger: element,
            start,
            once: true,
          },
        }
      );
    }, element);

    return () => ctx.revert();
  }, [stagger, delay, duration, y, start]);

  return (
    <Tag ref={ref} id={id} className={cn("contents", className)}>
      {children}
    </Tag>
  );
}
