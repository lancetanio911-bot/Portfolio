"use client";

import { FadeIn } from "@/components/animations/FadeIn";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { stats } from "@/data/stats";

export function Stats() {
  return (
    <section
      id="stats"
      className="relative scroll-mt-24 border-y border-border bg-card/40 py-14 sm:py-16"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal
          className="grid grid-cols-2 gap-8 sm:grid-cols-4"
          stagger={0.1}
          y={20}
        >
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <FadeIn scroll y={12} duration={0.6}>
                <span className="font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                  {stat.value}
                </span>
              </FadeIn>
              <p className="mt-2 text-sm font-medium text-muted-foreground">
                {stat.label}
              </p>
            </div>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
}
