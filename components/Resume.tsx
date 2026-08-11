"use client";

import { Download } from "lucide-react";
import { FadeIn } from "@/components/animations/FadeIn";
import { RevealText } from "@/components/animations/RevealText";
import { Magnetic } from "@/components/animations/Magnetic";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { site } from "@/data/site";

export function Resume() {
  return (
    <section id="resume" className="scroll-mt-24 py-12 sm:py-16">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn scroll y={28} className="relative overflow-hidden rounded-3xl border border-border bg-card px-6 py-14 text-center sm:px-10 sm:py-16">
          <div
            className="bg-grid pointer-events-none absolute inset-0 opacity-[0.35]"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute -top-24 left-1/2 size-72 -translate-x-1/2 rounded-full bg-brand/20 blur-[100px]"
            aria-hidden="true"
          />

          <div className="relative">
            <RevealText
              as="h2"
              text="Want the full picture?"
              mode="words"
              scroll
              className="mx-auto max-w-xl font-display text-3xl font-semibold tracking-tight sm:text-4xl"
            />
            <p className="mx-auto mt-4 max-w-md text-base text-muted-foreground">
              Grab a copy of my resume to see my experience, skills, and
              education in detail.
            </p>
            <Magnetic strength={0.25} className="mt-8 inline-block">
              <a
                href={site.resume}
                download
                className={cn(
                  buttonVariants(),
                  "inline-flex h-11 gap-2 rounded-full px-8 text-base"
                )}
              >
                <Download className="size-4" aria-hidden="true" />
                Download Resume
              </a>
            </Magnetic>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
