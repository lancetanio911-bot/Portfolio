"use client";

import { cn } from "@/lib/utils";

type MarqueeProps = {
  items: string[];
  className?: string;
  ariaLabel?: string;
};

export function Marquee({ items, className, ariaLabel }: MarqueeProps) {
  const row = (hidden: boolean) => (
    <div className="flex shrink-0 items-center gap-10 pr-10" aria-hidden={hidden || undefined}>
      {items.map((item, index) => (
        <span key={index} className="flex items-center gap-10">
          <span className="font-display text-2xl font-semibold uppercase tracking-tight text-foreground/60 sm:text-3xl">
            {item}
          </span>
          <span className="text-lg text-brand" aria-hidden="true">
            ✦
          </span>
        </span>
      ))}
    </div>
  );

  return (
    <div
      className={cn("relative flex w-full overflow-hidden", className)}
      role={ariaLabel ? "marquee" : undefined}
      aria-label={ariaLabel}
    >
      <div className="animate-marquee flex w-max items-center">
        {row(false)}
        {row(true)}
      </div>
    </div>
  );
}
