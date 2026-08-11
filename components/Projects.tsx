"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { SectionHeading } from "@/components/SectionHeading";
import { ProjectCard } from "@/components/ProjectCard";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import {
  projects,
  projectCategories,
  type ProjectCategory,
} from "@/data/projects";

type Filter = "all" | ProjectCategory;

export function Projects() {
  const [activeFilter, setActiveFilter] = useState<Filter>("all");

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <section id="projects" className="scroll-mt-24 py-24 sm:py-32">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="Projects"
            title="Things I've built"
            description="A selection of projects across web, mobile, and AI — from polished interfaces to on-device machine learning."
          />
          <Link
            href="/projects"
            className="inline-flex shrink-0 items-center gap-2 text-sm font-medium text-brand transition-colors hover:text-brand-2"
          >
            View all projects
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </div>

        <div
          className="mt-10 inline-flex flex-wrap gap-2 rounded-full border border-border bg-card/60 p-1"
          role="group"
          aria-label="Filter projects by category"
        >
          {projectCategories.map((category) => {
            const isActive = activeFilter === category.value;
            return (
              <button
                key={category.value}
                type="button"
                onClick={() => setActiveFilter(category.value)}
                aria-pressed={isActive}
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-medium transition-all duration-200",
                  isActive
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {category.label}
              </button>
            );
          })}
        </div>

        <ScrollReveal
          key={activeFilter}
          className="mt-10 grid gap-6 md:grid-cols-2"
          stagger={0.12}
          y={36}
        >
          {filteredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
}
