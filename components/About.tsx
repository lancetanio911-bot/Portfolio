"use client";

import {
  Code2,
  Smartphone,
  Palette,
  BrainCircuit,
  type LucideIcon,
} from "lucide-react";

import { FadeIn } from "@/components/animations/FadeIn";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { SectionHeading } from "@/components/SectionHeading";
import { interestTags } from "@/data/skills";

const focusAreas: { label: string; icon: LucideIcon }[] = [
  { label: "Frontend Development", icon: Code2 },
  { label: "Modern Web Apps", icon: Code2 },
  { label: "Mobile Development", icon: Smartphone },
  { label: "UI / UX", icon: Palette },
  { label: "Machine Learning Integrations", icon: BrainCircuit },
];

export function About() {
  return (
    <section id="about" className="relative scroll-mt-24 py-24 sm:py-32">
      <div className="mx-auto grid w-full max-w-7xl gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-20 lg:px-8">
        <div className="order-2 lg:order-1">
          <div className="relative mx-auto max-w-md">
            <div
              className="absolute -inset-6 rounded-3xl bg-gradient-to-br from-brand/15 to-brand-2/10 blur-2xl"
              aria-hidden="true"
            />
            <div className="relative rounded-3xl border border-border bg-card p-8 shadow-xl">
              <div className="flex items-center gap-4">
                <div className="flex size-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand to-brand-2 font-display text-2xl font-bold text-white">
                  L
                </div>
                <div>
                  <p className="font-display text-lg font-semibold text-foreground">
                    What drives me
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Clean code · Thoughtful design
                  </p>
                </div>
              </div>

              <div className="mt-7 space-y-3">
                {focusAreas.map(({ label, icon: Icon }) => (
                  <div
                    key={label}
                    className="flex items-center gap-3 rounded-xl border border-border bg-background/50 px-4 py-3 text-sm text-foreground"
                  >
                    <span className="inline-flex size-8 shrink-0 items-center justify-center rounded-lg bg-brand/10 text-brand">
                      <Icon className="size-4" aria-hidden="true" />
                    </span>
                    {label}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <SectionHeading
            eyebrow="About"
            title="Turning ideas into polished experiences"
          />
          <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
            <FadeIn scroll y={20}>
              <p>
                I&apos;m a developer passionate about creating modern web and
                mobile experiences. I enjoy turning ideas into functional,
                intuitive, and visually polished applications.
              </p>
            </FadeIn>
            <FadeIn scroll y={20} delay={0.08}>
              <p>
                My focus is on frontend development with modern tools like
                React, Next.js, TypeScript, and Flutter — building interfaces
                that are fast, accessible, and a pleasure to use.
              </p>
            </FadeIn>
            <FadeIn scroll y={20} delay={0.16}>
              <p>
                I&apos;m also exploring how machine learning models can be
                integrated into real products, like on-device computer vision
                with TensorFlow Lite.
              </p>
            </FadeIn>
          </div>

          <ScrollReveal
            className="mt-8 flex flex-wrap gap-2.5"
            stagger={0.07}
            y={16}
          >
            {interestTags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-border bg-card/60 px-3.5 py-1.5 text-sm text-foreground"
              >
                {tag}
              </span>
            ))}
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
