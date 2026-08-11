"use client";

import { GraduationCap } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { Tilt } from "@/components/animations/Tilt";
import { education, educationHeading } from "@/data/education";

export function Education() {
  return (
    <section id="education" className="scroll-mt-24 py-24 sm:py-32">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={educationHeading.eyebrow}
          title={educationHeading.title}
          description={educationHeading.description}
        />

        <ScrollReveal
          className="mt-14 grid gap-6 md:grid-cols-2"
          stagger={0.14}
          y={36}
        >
          {education.map((item) => (
            <Tilt key={item.degree + item.institution} className="h-full rounded-3xl">
              <article className="flex h-full flex-col rounded-3xl border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:border-brand/40 hover:shadow-lg hover:shadow-brand/5">
              <div className="flex items-start justify-between gap-4">
                <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl bg-brand/10 text-brand">
                  <GraduationCap className="size-5" aria-hidden="true" />
                </span>
                <span className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground">
                  {item.status}
                </span>
              </div>

              <h3 className="mt-5 font-display text-lg font-semibold text-foreground">
                {item.degree}
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">
                {item.institution} · {item.location}
              </p>
              <p className="mt-1 text-sm font-medium text-brand">
                {item.year}
              </p>

              <ul className="mt-5 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-muted-foreground">
                {item.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
              </article>
            </Tilt>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
}
