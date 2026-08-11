"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronDown, Download, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons/BrandIcons";
import { gsap } from "@/lib/gsap";
import { site } from "@/data/site";
import { RevealText } from "@/components/animations/RevealText";
import { Magnetic } from "@/components/animations/Magnetic";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const socialLinks = [
  { label: "GitHub", href: site.socials.github, icon: GithubIcon },
  { label: "LinkedIn", href: site.socials.linkedin, icon: LinkedinIcon },
  { label: "Email", href: site.socials.email, icon: Mail },
];

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const spotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const ctx = gsap.context(() => {
      if (reducedMotion) {
        gsap.set(
          "[data-hero-visual], [data-hero-eyebrow], [data-hero-role], [data-hero-subtitle], [data-hero-ctas], [data-hero-socials], [data-hero-scroll], [data-hero-caption]",
          { autoAlpha: 1, y: 0, scale: 1 }
        );
        return;
      }

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        "[data-hero-visual]",
        { autoAlpha: 0, scale: 0.92, y: 24 },
        { autoAlpha: 1, scale: 1, y: 0, duration: 0.9, delay: 0.4 }
      )
        .fromTo(
          "[data-hero-caption]",
          { autoAlpha: 0, y: 16 },
          { autoAlpha: 1, y: 0, duration: 0.5 },
          ">-0.4"
        )
        .fromTo(
          "[data-hero-eyebrow]",
          { autoAlpha: 0, y: 16 },
          { autoAlpha: 1, y: 0, duration: 0.6 },
          ">-0.8"
        )
        .fromTo(
          "[data-hero-role]",
          { autoAlpha: 0, y: 20 },
          { autoAlpha: 1, y: 0, duration: 0.7 },
          "<"
        )
        .fromTo(
          "[data-hero-subtitle]",
          { autoAlpha: 0, y: 20 },
          { autoAlpha: 1, y: 0, duration: 0.7 },
          "-=0.45"
        )
        .fromTo(
          "[data-hero-ctas]",
          { autoAlpha: 0, y: 20 },
          { autoAlpha: 1, y: 0, duration: 0.6 },
          "-=0.5"
        )
        .fromTo(
          "[data-hero-socials]",
          { autoAlpha: 0, y: 12 },
          { autoAlpha: 1, y: 0, duration: 0.5 },
          "-=0.35"
        )
        .fromTo(
          "[data-hero-scroll]",
          { autoAlpha: 0 },
          { autoAlpha: 1, duration: 0.6 },
          "-=0.2"
        );
    }, section);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    const spot = spotRef.current;
    if (!section || !spot) return;

    const finePointer = window.matchMedia(
      "(hover: hover) and (pointer: fine)"
    ).matches;
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (!finePointer || reducedMotion) return;

    gsap.set(spot, { xPercent: -50, yPercent: -50, autoAlpha: 0 });

    const xTo = gsap.quickTo(spot, "x", {
      duration: 0.6,
      ease: "power3.out",
    });
    const yTo = gsap.quickTo(spot, "y", {
      duration: 0.6,
      ease: "power3.out",
    });

    let shown = false;
    const onMove = (event: MouseEvent) => {
      if (!shown) {
        shown = true;
        gsap.to(spot, { autoAlpha: 1, duration: 0.4 });
      }
      const rect = section.getBoundingClientRect();
      xTo(event.clientX - rect.left);
      yTo(event.clientY - rect.top);
    };

    section.addEventListener("mousemove", onMove);

    return () => section.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-24 pb-16 lg:pt-0"
    >
      <div
        className="bg-grid mask-fade-b pointer-events-none absolute inset-0 opacity-[0.4] dark:opacity-[0.5]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -top-32 right-[-10%] size-[480px] rounded-full bg-brand/20 blur-[120px] dark:bg-brand/15"
        aria-hidden="true"
      />
      <div
        ref={spotRef}
        className="pointer-events-none absolute left-0 top-0 size-[38rem] rounded-full bg-[radial-gradient(circle,color-mix(in_oklch,var(--brand)_14%,transparent),transparent_60%)] blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto grid w-full max-w-7xl gap-14 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-10 lg:px-8">
        <div className="max-w-2xl">
          <p
            data-hero-eyebrow
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3.5 py-1.5 text-xs font-medium text-muted-foreground opacity-0"
          >
            <span className="relative flex size-2" aria-hidden="true">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
            </span>
            {site.location} · Available for opportunities
          </p>

          <h1 className="mt-6 font-display text-5xl font-bold leading-[1.02] tracking-tight text-foreground sm:text-6xl xl:text-7xl">
            <RevealText
              text={site.name}
              mode="chars"
              blur={14}
              stagger={0.045}
              duration={1.1}
              preload
              delay={0.15}
            />
            <span
              data-hero-role
              className="text-gradient mt-2 block text-3xl opacity-0 sm:text-4xl xl:text-5xl"
            >
              Frontend Developer
            </span>
          </h1>

          <p
            data-hero-subtitle
            className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground opacity-0"
          >
            {site.tagline}
          </p>

          <div data-hero-ctas className="mt-8 flex flex-col gap-3 opacity-0 sm:flex-row">
            <Magnetic strength={0.25}>
              <Link
                href="/projects"
                className={cn(buttonVariants(), "h-11 gap-2 rounded-full px-7 text-base")}
              >
                View Projects
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </Magnetic>
            <Magnetic strength={0.25}>
              <a
                href={site.resume}
                download
                className={cn(
                  buttonVariants({ variant: "outline" }),
                  "h-11 gap-2 rounded-full px-7 text-base"
                )}
              >
                <Download className="size-4" aria-hidden="true" />
                Download Resume
              </a>
            </Magnetic>
          </div>

          <div data-hero-socials className="mt-8 flex items-center gap-2 opacity-0">
            <span className="mr-1 text-sm text-muted-foreground">Find me on</span>
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <Magnetic key={label} strength={0.4}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="inline-flex size-10 items-center justify-center rounded-full border border-border bg-card/60 text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-brand/40 hover:text-foreground"
                >
                  <Icon className="size-[18px]" aria-hidden="true" />
                </a>
              </Magnetic>
            ))}
          </div>
        </div>

        <div
          data-hero-visual
          className="relative mx-auto w-full max-w-md opacity-0 lg:max-w-none"
        >
          <div
            className="absolute -inset-8 rounded-full bg-gradient-to-tr from-brand/25 via-brand-2/20 to-transparent blur-3xl"
            aria-hidden="true"
          />
          <div
            data-hero-photo
            className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-border bg-card shadow-2xl shadow-black/10 dark:shadow-black/40"
          >
            <Image
              src="/profile.jpg"
              alt={`${site.name} — portrait`}
              fill
              sizes="(min-width: 1024px) 38vw, (min-width: 640px) 45vw, 85vw"
              priority
              className="object-cover"
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"
              aria-hidden="true"
            />
          </div>

          <div data-hero-caption className="mt-5 text-center opacity-0">
            <p className="font-display text-xl font-semibold tracking-tight text-foreground">
              {site.firstName} {site.lastName}
            </p>
            <p className="mt-1 text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground">
              {site.title}
            </p>
          </div>
        </div>
      </div>

      <a
        data-hero-scroll
        href="#about"
        aria-label="Scroll to about section"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-muted-foreground opacity-0 transition-colors hover:text-foreground sm:flex"
      >
        <span className="text-[11px] font-medium uppercase tracking-[0.2em]">
          Scroll
        </span>
        <ChevronDown className="animate-bounce size-5" aria-hidden="true" />
      </a>
    </section>
  );
}
