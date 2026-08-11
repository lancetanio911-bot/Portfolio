"use client";

import {
  type ElementType,
  type ReactNode,
  useEffect,
  useMemo,
  useRef,
} from "react";
import { gsap } from "@/lib/gsap";
import { cn } from "@/lib/utils";

type RevealTextProps = {
  text: string;
  as?: ElementType;
  className?: string;
  mode?: "words" | "chars";
  delay?: number;
  stagger?: number;
  duration?: number;
  scroll?: boolean;
  preload?: boolean;
  blur?: number;
};

export function RevealText({
  text,
  as: Tag = "span",
  className,
  mode = "words",
  delay = 0,
  stagger = 0.06,
  duration = 0.9,
  scroll = false,
  preload = false,
  blur = 0,
}: RevealTextProps) {
  const ref = useRef<HTMLElement>(null);

  const parts = useMemo(() => {
    const tokens = text.split(/(\s+)/);
    const nodes: ReactNode[] = [];
    let key = 0;

    for (const token of tokens) {
      if (/^\s+$/.test(token)) {
        nodes.push(token);
        continue;
      }
      const chunks = mode === "chars" ? Array.from(token) : [token];
      for (const chunk of chunks) {
        nodes.push(
          <span
            key={key++}
            aria-hidden="true"
            className="inline-block overflow-hidden pb-[0.15em] -mb-[0.15em] align-bottom"
          >
            <span
              data-split-part
              className="inline-block will-change-transform"
            >
              {chunk}
            </span>
          </span>
        );
      }
    }
    return nodes;
  }, [text, mode]);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const ctx = gsap.context(() => {
      const partTargets = element.querySelectorAll("[data-split-part]");

      if (reducedMotion) {
        gsap.set(element, { autoAlpha: 1 });
        gsap.set(partTargets, { autoAlpha: 1, yPercent: 0, filter: "blur(0px)" });
        return;
      }

      const tl = gsap.timeline({
        delay,
        scrollTrigger: scroll
          ? {
              trigger: element,
              start: "top 88%",
              once: true,
            }
          : undefined,
      });

      tl.set(element, { autoAlpha: 1 });
      tl.fromTo(
        partTargets,
        {
          yPercent: 115,
          autoAlpha: 0,
          filter: blur > 0 ? `blur(${blur}px)` : "blur(0px)",
        },
        {
          yPercent: 0,
          autoAlpha: 1,
          filter: "blur(0px)",
          duration,
          stagger,
          ease: "power4.out",
        }
      );
    }, element);

    return () => ctx.revert();
  }, [text, mode, delay, stagger, duration, scroll, blur]);

  return (
    <Tag
      ref={ref}
      className={cn("block", preload && "opacity-0", className)}
      aria-label={text}
    >
      {parts}
    </Tag>
  );
}
