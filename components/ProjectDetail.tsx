"use client";

import { type ReactNode } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/icons/BrandIcons";
import { FadeIn } from "@/components/animations/FadeIn";
import { RevealText } from "@/components/animations/RevealText";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { ProjectImage } from "@/components/ProjectImage";
import { ProjectCard } from "@/components/ProjectCard";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  getRelatedProjects,
  type Project,
} from "@/data/projects";

type ProjectDetailProps = {
  project: Project;
};

function DetailSection({
  index,
  eyebrow,
  title,
  children,
}: {
  index: string;
  eyebrow: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <FadeIn scroll y={20}>
        <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-brand">
          <span className="h-px w-8 bg-current opacity-60" aria-hidden="true" />
          {index} — {eyebrow}
        </span>
      </FadeIn>
      <RevealText
        as="h2"
        text={title}
        mode="words"
        scroll
        className="mt-4 font-display text-2xl font-semibold tracking-tight text-foreground sm:text-3xl"
      />
      <div className="mt-5 max-w-3xl text-base leading-relaxed text-muted-foreground">
        {children}
      </div>
    </div>
  );
}

export function ProjectDetail({ project }: ProjectDetailProps) {
  const relatedProjects = getRelatedProjects(project);
  const screenshots = project.screenshots ?? [];

  return (
    <>
      <section className="mx-auto w-full max-w-7xl px-4 pt-24 sm:px-6 lg:px-8 lg:pt-28">
        <FadeIn y={16}>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="size-4" aria-hidden="true" />
            All projects
          </Link>
        </FadeIn>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <Badge variant="secondary" className="rounded-full">
            {project.categoryLabel}
          </Badge>
          <span className="text-sm text-muted-foreground">{project.year}</span>
        </div>

        <RevealText
          as="h1"
          text={project.title}
          mode="words"
          preload
          className="mt-5 max-w-4xl font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl"
        />

        <FadeIn y={20} delay={0.1}>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            {project.shortDescription}
          </p>
        </FadeIn>

        <FadeIn y={20} delay={0.15}>
          <div className="mt-8 flex flex-wrap gap-3">
            {project.github ? (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(buttonVariants(), "h-11 gap-2 rounded-full px-7 text-base")}
              >
                <GithubIcon className="size-4" aria-hidden="true" />
                View on GitHub
              </a>
            ) : null}
            {project.demo ? (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  buttonVariants({ variant: "outline" }),
                  "h-11 gap-2 rounded-full px-7 text-base"
                )}
              >
                <ExternalLink className="size-4" aria-hidden="true" />
                Live Demo
              </a>
            ) : null}
          </div>
        </FadeIn>

        <FadeIn y={28} delay={0.2} className="mt-10">
          <ProjectImage
            image={project.image}
            alt={`${project.title} hero image`}
            className="aspect-[16/9] rounded-3xl border border-border shadow-xl"
          />
        </FadeIn>
      </section>

      <DetailSection index="01" eyebrow="Overview" title="The project">
        <p>{project.overview}</p>
      </DetailSection>

      <DetailSection index="02" eyebrow="Problem" title="Why I built it">
        <p>{project.problem}</p>
      </DetailSection>

      <DetailSection index="03" eyebrow="Solution" title="How I solved it">
        <p>{project.solution}</p>
      </DetailSection>

      <DetailSection index="04" eyebrow="Features" title="Key features">
        <ScrollReveal
          className="grid gap-3 sm:grid-cols-2"
          stagger={0.08}
          y={16}
        >
          {project.features.map((feature) => (
            <div
              key={feature}
              className="flex items-start gap-3 rounded-2xl border border-border bg-card px-4 py-3.5"
            >
              <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-brand" aria-hidden="true" />
              <span className="text-sm leading-relaxed text-foreground">
                {feature}
              </span>
            </div>
          ))}
        </ScrollReveal>
      </DetailSection>

      <DetailSection index="05" eyebrow="Technologies" title="Tech stack">
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground"
            >
              {tech}
            </span>
          ))}
        </div>
      </DetailSection>

      <DetailSection index="06" eyebrow="Challenges" title="Tricky parts">
        <ScrollReveal className="space-y-3" stagger={0.1} y={16}>
          {project.challenges.map((challenge) => (
            <div
              key={challenge}
              className="flex items-start gap-3 rounded-2xl border border-border bg-card px-5 py-4"
            >
              <span
                className="mt-1.5 size-1.5 shrink-0 rounded-full bg-rose-400"
                aria-hidden="true"
              />
              <p className="text-sm leading-relaxed text-foreground">
                {challenge}
              </p>
            </div>
          ))}
        </ScrollReveal>
      </DetailSection>

      <DetailSection
        index="07"
        eyebrow="Process"
        title="How I developed it"
      >
        <ScrollReveal className="space-y-0" stagger={0.1} y={20}>
          {project.process.map((step, index) => (
            <div key={step} className="flex gap-4">
              <div className="flex flex-col items-center">
                <span className="flex size-8 shrink-0 items-center justify-center rounded-full border border-brand/40 bg-background text-sm font-semibold text-brand">
                  {index + 1}
                </span>
                {index < project.process.length - 1 ? (
                  <span className="my-1 w-px flex-1 bg-border" aria-hidden="true" />
                ) : null}
              </div>
              <p className="pb-8 pt-1.5 text-sm leading-relaxed text-muted-foreground">
                {step}
              </p>
            </div>
          ))}
        </ScrollReveal>
      </DetailSection>

      <DetailSection index="08" eyebrow="Results" title="Outcome">
        <ScrollReveal className="grid gap-3 sm:grid-cols-3" stagger={0.1} y={20}>
          {project.results.map((result) => (
            <div
              key={result}
              className="rounded-2xl border border-border bg-card p-5"
            >
              <ArrowUpRight className="size-5 text-brand" aria-hidden="true" />
              <p className="mt-3 text-sm leading-relaxed text-foreground">
                {result}
              </p>
            </div>
          ))}
        </ScrollReveal>
      </DetailSection>

      {screenshots.length > 0 ? (
        <DetailSection index="09" eyebrow="Screenshots" title="In action">
          <ScrollReveal
            className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
            stagger={0.1}
            y={24}
          >
            {screenshots.map((caption) => (
              <figure
                key={caption}
                className="overflow-hidden rounded-2xl border border-border bg-card"
              >
                <div className={cn("relative aspect-[4/3] bg-gradient-to-br", project.image.gradient)}>
                  <div className="bg-grid absolute inset-0 opacity-20" aria-hidden="true" />
                  <span
                    className="absolute inset-0 flex items-center justify-center font-display text-4xl font-bold text-white/30"
                    aria-hidden="true"
                  >
                    {project.image.initials}
                  </span>
                </div>
                <figcaption className="px-4 py-3 text-sm text-muted-foreground">
                  {caption}
                </figcaption>
              </figure>
            ))}
          </ScrollReveal>
        </DetailSection>
      ) : null}

      {relatedProjects.length > 0 ? (
        <section className="mx-auto w-full max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
          <RevealText
            as="h2"
            text="More projects"
            mode="words"
            scroll
            className="font-display text-2xl font-semibold tracking-tight text-foreground sm:text-3xl"
          />
          <ScrollReveal
            className="mt-8 grid gap-6 md:grid-cols-3"
            stagger={0.12}
            y={32}
          >
            {relatedProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </ScrollReveal>
        </section>
      ) : null}
    </>
  );
}
