"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/icons/BrandIcons";
import { gsap } from "@/lib/gsap";
import { cn } from "@/lib/utils";
import type { Project } from "@/data/projects";
import { ProjectImage } from "@/components/ProjectImage";
import { Badge } from "@/components/ui/badge";
import { Tilt } from "@/components/animations/Tilt";

type ProjectCardProps = {
  project: Project;
  className?: string;
};

export function ProjectCard({ project, className }: ProjectCardProps) {
  const cardRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    const image = imageRef.current;
    if (!card || !image) return;

    const hoverable = window.matchMedia(
      "(hover: hover) and (pointer: fine)"
    ).matches;
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.set(image, { scale: hoverable ? 1.15 : 1 });

      if (hoverable) {
        const xTo = gsap.quickTo(image, "xPercent", {
          duration: 0.5,
          ease: "power3.out",
        });
        const yTo = gsap.quickTo(image, "yPercent", {
          duration: 0.5,
          ease: "power3.out",
        });

        const onMove = (event: MouseEvent) => {
          const rect = card.getBoundingClientRect();
          const px = (event.clientX - rect.left) / rect.width - 0.5;
          const py = (event.clientY - rect.top) / rect.height - 0.5;
          xTo(px * -8);
          yTo(py * -8);
        };
        const onReset = () => {
          xTo(0);
          yTo(0);
        };

        const tl = gsap.timeline({ paused: true });
        tl.to(image, { scale: 1.06, duration: 0.6, ease: "power2.out" }, 0).to(
          card,
          { y: -6, duration: 0.45, ease: "power2.out" },
          0
        );

        const onEnter = () => tl.play();
        const onLeave = () => tl.reverse();

        card.addEventListener("mousemove", onMove);
        card.addEventListener("mouseleave", onReset);
        card.addEventListener("mouseenter", onEnter);
        card.addEventListener("mouseleave", onLeave);

        return () => {
          card.removeEventListener("mousemove", onMove);
          card.removeEventListener("mouseleave", onReset);
          card.removeEventListener("mouseenter", onEnter);
          card.removeEventListener("mouseleave", onLeave);
        };
      }
    }, card);

    return () => ctx.revert();
  }, []);

  return (
    <Tilt className="h-full rounded-3xl">
      <article
        ref={cardRef}
        data-cursor-view
        className={cn(
          "group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card transition-colors duration-300 hover:border-brand/40 hover:shadow-lg hover:shadow-brand/5",
          className
        )}
      >
      <Link
        href={`/projects/${project.slug}`}
        aria-label={`View project: ${project.title}`}
        className="relative block overflow-hidden"
      >
        <ProjectImage
          ref={imageRef}
          image={project.image}
          alt={`${project.title} project preview`}
        />
      </Link>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center justify-between gap-3">
          <Badge variant="secondary" className="rounded-full">
            {project.categoryLabel}
          </Badge>
          <span className="text-xs text-muted-foreground">{project.year}</span>
        </div>

        <h3 className="mt-3 font-display text-xl font-semibold tracking-tight text-foreground">
          <Link
            href={`/projects/${project.slug}`}
            className="transition-colors hover:text-brand"
          >
            {project.title}
          </Link>
        </h3>

        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          {project.shortDescription}
        </p>

        <ul className="mt-4 flex flex-wrap gap-1.5">
          {project.technologies.slice(0, 4).map((tech) => (
            <li
              key={tech}
              className="rounded-md border border-border bg-background/60 px-2 py-0.5 text-xs text-muted-foreground"
            >
              {tech}
            </li>
          ))}
          {project.technologies.length > 4 ? (
            <li className="rounded-md border border-border bg-background/60 px-2 py-0.5 text-xs text-muted-foreground">
              +{project.technologies.length - 4}
            </li>
          ) : null}
        </ul>

        <div className="mt-auto flex items-center gap-2 pt-6">
          <Link
            href={`/projects/${project.slug}`}
            className="inline-flex h-9 flex-1 items-center justify-center gap-1.5 rounded-full bg-primary text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/80"
          >
            View Project
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </Link>
          {project.github ? (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} on GitHub`}
              className="inline-flex size-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-brand/40 hover:text-foreground"
            >
              <GithubIcon className="size-4" aria-hidden="true" />
            </a>
          ) : null}
          {project.demo ? (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Live demo of ${project.title}`}
              className="inline-flex size-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-brand/40 hover:text-foreground"
            >
              <ExternalLink className="size-4" aria-hidden="true" />
            </a>
          ) : null}
        </div>
      </div>
      </article>
    </Tilt>
  );
}
