"use client";

import { FadeIn } from "@/components/animations/FadeIn";
import { RevealText } from "@/components/animations/RevealText";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      <FadeIn y={16} duration={0.6}>
        <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-brand">
          <span className="h-px w-8 bg-current opacity-60" aria-hidden="true" />
          {eyebrow}
        </span>
      </FadeIn>
      <RevealText
        as="h2"
        text={title}
        mode="words"
        scroll
        blur={8}
        className={cn(
          "mt-4 font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl",
          align === "center" && "mx-auto"
        )}
      />
      {description ? (
        <FadeIn y={16} scroll delay={0.15} duration={0.7}>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            {description}
          </p>
        </FadeIn>
      ) : null}
    </div>
  );
}
