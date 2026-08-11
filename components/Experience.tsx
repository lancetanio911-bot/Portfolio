"use client";

import { useEffect, useRef } from "react";
import { Briefcase, MapPin } from "lucide-react";
import { gsap } from "@/lib/gsap";
import { SectionHeading } from "@/components/SectionHeading";
import { experience, experienceHeading } from "@/data/experience";

export function Experience() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const ctx = gsap.context(() => {
      const line = root.querySelector("[data-timeline-line]");
      const entries = root.querySelectorAll("[data-timeline-entry]");

      if (reducedMotion) {
        gsap.set([line, entries], { autoAlpha: 1, scaleY: 1, y: 0 });
        return;
      }

      gsap.fromTo(
        line,
        { scaleY: 0 },
        {
          scaleY: 1,
          duration: 1.4,
          ease: "none",
          scrollTrigger: {
            trigger: root.querySelector("[data-timeline-track]"),
            start: "top 75%",
            end: "bottom 55%",
            scrub: true,
          },
        }
      );

      gsap.fromTo(
        entries,
        { autoAlpha: 0, y: 28 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: root.querySelector("[data-timeline-track]"),
            start: "top 75%",
            once: true,
          },
        }
      );
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section id="experience" className="scroll-mt-24 py-24 sm:py-32">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={experienceHeading.eyebrow}
          title={experienceHeading.title}
          description={experienceHeading.description}
        />

        <div ref={rootRef} className="relative mt-14">
          <div
            data-timeline-track
            className="relative ml-2 border-l border-border pl-8 sm:ml-4 sm:pl-12"
          >
            <div
              data-timeline-line
              className="absolute left-0 top-0 h-full w-px origin-top bg-gradient-to-b from-brand to-brand-2"
              aria-hidden="true"
            />
            <ol className="space-y-12">
              {experience.map((item) => (
                <li key={item.role + item.company} data-timeline-entry>
                  <div className="group relative">
                    <span
                      className="absolute -left-[41px] top-1 flex size-6 items-center justify-center rounded-full border border-brand/40 bg-background text-brand sm:-left-[57px]"
                      aria-hidden="true"
                    >
                      <Briefcase className="size-3" />
                    </span>

                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                      <h3 className="font-display text-lg font-semibold text-foreground">
                        {item.role}
                      </h3>
                      <span className="text-sm text-muted-foreground">·</span>
                      <span className="text-sm text-muted-foreground">
                        {item.company}
                      </span>
                      <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
                        <MapPin className="size-3" aria-hidden="true" />
                        {item.location}
                      </span>
                    </div>

                    <div className="mt-2 flex flex-wrap items-center gap-2">
                      <span className="inline-flex items-center rounded-full bg-brand/10 px-3 py-1 text-xs font-medium text-brand">
                        {item.period}
                      </span>
                      <span className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground">
                        {item.type}
                      </span>
                    </div>

                    <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>

                    <ul className="mt-4 max-w-2xl list-disc space-y-1.5 pl-5 text-sm text-muted-foreground">
                      {item.responsibilities.map((responsibility) => (
                        <li key={responsibility}>{responsibility}</li>
                      ))}
                    </ul>

                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {item.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-md border border-border bg-card px-2 py-0.5 text-xs text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
