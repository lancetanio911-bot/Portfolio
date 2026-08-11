"use client";

import {
  type CSSProperties,
  type ReactNode,
  useEffect,
  useRef,
} from "react";
import { gsap } from "@/lib/gsap";
import { cn } from "@/lib/utils";

type TiltProps = {
  children: ReactNode;
  className?: string;
  max?: number;
  glare?: boolean;
};

export function Tilt({
  children,
  className,
  max = 7,
  glare = true,
}: TiltProps) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const glareRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const inner = innerRef.current;
    const glareEl = glareRef.current;
    if (!wrap || !inner) return;

    const finePointer = window.matchMedia(
      "(hover: hover) and (pointer: fine)"
    ).matches;
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (!finePointer || reducedMotion) return;

    const rotateX = gsap.quickTo(inner, "rotationX", {
      duration: 0.5,
      ease: "power3.out",
    });
    const rotateY = gsap.quickTo(inner, "rotationY", {
      duration: 0.5,
      ease: "power3.out",
    });

    if (glareEl) {
      gsap.set(glareEl, { autoAlpha: 0 });
    }

    const onMove = (event: MouseEvent) => {
      const rect = wrap.getBoundingClientRect();
      const px = (event.clientX - rect.left) / rect.width;
      const py = (event.clientY - rect.top) / rect.height;
      rotateY((px - 0.5) * 2 * max);
      rotateX((0.5 - py) * 2 * max);
      if (glareEl) {
        gsap.set(glareEl, { "--mx": `${px * 100}%`, "--my": `${py * 100}%` });
        gsap.to(glareEl, {
          autoAlpha: 1,
          duration: 0.35,
          overwrite: "auto",
        });
      }
    };
    const onLeave = () => {
      rotateX(0);
      rotateY(0);
      if (glareEl) {
        gsap.to(glareEl, { autoAlpha: 0, duration: 0.35, overwrite: "auto" });
      }
    };

    wrap.addEventListener("mousemove", onMove);
    wrap.addEventListener("mouseleave", onLeave);

    return () => {
      wrap.removeEventListener("mousemove", onMove);
      wrap.removeEventListener("mouseleave", onLeave);
    };
  }, [max, glare]);

  return (
    <div ref={wrapRef} className={cn("relative [perspective:1000px]", className)}>
      <div
        ref={innerRef}
        className="relative h-full will-change-transform [transform-style:preserve-3d]"
      >
        {children}
        {glare ? (
          <div
            ref={glareRef}
            aria-hidden="true"
            style={{ "--mx": "50%", "--my": "50%" } as CSSProperties}
            className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0"
          >
            <div className="absolute inset-0 bg-[radial-gradient(280px_circle_at_var(--mx)_var(--my),oklch(1_0_0/0.22),transparent_65%)]" />
          </div>
        ) : null}
      </div>
    </div>
  );
}
