"use client";

import { type ReactNode, type ElementType, useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import { cn } from "@/lib/utils";

type FadeInProps = {
  children: ReactNode;
  className?: string;
  as?: ElementType;
  delay?: number;
  duration?: number;
  y?: number;
  stagger?: number;
  scroll?: boolean;
  startHidden?: boolean;
  id?: string;
};

export function FadeIn({
  children,
  className,
  as: Tag = "div",
  delay = 0,
  duration = 0.8,
  y = 28,
  stagger = 0,
  scroll = false,
  startHidden = false,
  id,
}: FadeInProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const ctx = gsap.context(() => {
      if (reducedMotion) {
        gsap.set(element, { autoAlpha: 1, y: 0 });
        return;
      }

      const targets =
        stagger > 0 ? Array.from(element.querySelectorAll("*")) : element;

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
          scrollTrigger: scroll
            ? {
                trigger: element,
                start: "top 88%",
                once: true,
              }
            : undefined,
        }
      );
    }, element);

    return () => ctx.revert();
  }, [delay, duration, y, stagger, scroll]);

  return (
    <Tag ref={ref} id={id} className={cn(startHidden && "opacity-0", className)}>
      {children}
    </Tag>
  );
}
