"use client";

import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { Tilt } from "@/components/animations/Tilt";
import { SectionHeading } from "@/components/SectionHeading";
import { Marquee } from "@/components/Marquee";
import { skillCategories } from "@/data/skills";

const marqueeSkills = skillCategories.flatMap((category) =>
  category.skills.map((skill) => skill.name)
);

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 py-24 sm:py-32">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Skills"
          title="Technologies I work with"
          description="The tools and technologies I use to design, build, and ship digital products — from the web to mobile to on-device AI."
          align="center"
        />

        <ScrollReveal
          className="mt-14 grid gap-5 sm:grid-cols-2"
          stagger={0.1}
          y={36}
        >
          {skillCategories.map((category) => {
            const CategoryIcon = category.icon;
            return (
              <Tilt key={category.id} className="h-full rounded-3xl">
                <article className="group h-full rounded-3xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand/40 hover:shadow-lg hover:shadow-brand/5 sm:p-7">
                <div className="flex items-start gap-4">
                    <span
                      className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl bg-brand/10 text-brand transition-colors group-hover:bg-brand group-hover:text-white"
                      aria-hidden="true"
                    >
                      <CategoryIcon className="size-5" />
                    </span>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-foreground">
                      {category.title}
                    </h3>
                    <p className="mt-0.5 text-sm text-muted-foreground">
                      {category.description}
                    </p>
                  </div>
                </div>

                <ul className="mt-6 flex flex-wrap gap-2">
                  {category.skills.map((skill) => {
                    const Icon = skill.icon;
                    return (
                      <li
                        key={skill.name}
                        className="inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-3 py-1.5 text-sm text-muted-foreground transition-all duration-300 hover:border-brand/40 hover:text-foreground"
                      >
                        <span aria-hidden="true" className="text-brand">
                          <Icon className="size-4" />
                        </span>
                        {skill.name}
                      </li>
                    );
                  })}
                </ul>
              </article>
              </Tilt>
            );
          })}
        </ScrollReveal>
      </div>
      <Marquee
        items={marqueeSkills}
        ariaLabel="Technologies I work with"
        className="mask-fade-x mt-16 border-y border-border bg-card/40 py-8"
      />
    </section>
  );
}
