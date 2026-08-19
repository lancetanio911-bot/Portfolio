"use client";

import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { SectionHeading } from "@/components/SectionHeading";
import { testimonials, testimonialsHeading } from "@/data/testimonials";

export function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative scroll-mt-24 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={testimonialsHeading.eyebrow}
          title={testimonialsHeading.title}
          description={testimonialsHeading.description}
          align="center"
        />

        <ScrollReveal
          className="mt-14 grid gap-6 md:grid-cols-3"
          stagger={0.12}
          y={32}
        >
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="group relative rounded-3xl border border-border bg-card p-7 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div
                className="absolute -inset-px rounded-3xl bg-gradient-to-br from-brand/10 via-transparent to-brand-2/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                aria-hidden="true"
              />

              <div className="relative">
                <svg
                  className="size-8 text-brand/40"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M11.3 5.2C7.6 7.1 5.2 10.4 5.2 14.1c0 2.4 1.1 4.3 2.9 5.5 1.5 1 3.3 1.3 4.8.7-1.2 1.3-2.9 2.1-4.8 2.1C5 22.4 1.6 19 .1 14.5c.7 0 1.6.1 2.5.4C4.7 9.5 7.6 6.5 11.3 5.2zm11.4 0c-3.7 1.9-6.1 5.2-6.1 8.9 0 2.4 1.1 4.3 2.9 5.5 1.5 1 3.3 1.3 4.8.7-1.2 1.3-2.9 2.1-4.8 2.1-3.9 0-7.3-3.4-8.8-7.9.7 0 1.6.1 2.5.4C16.1 9.5 19 6.5 22.7 5.2z" />
                </svg>

                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {testimonial.quote}
                </p>

                <div className="mt-6 flex items-center gap-3 border-t border-border pt-5">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand to-brand-2 font-display text-sm font-bold text-white">
                    {testimonial.initials}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">
                      {testimonial.name}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {testimonial.role} · {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
}
