import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Projects } from "@/components/Projects";
import { FadeIn } from "@/components/animations/FadeIn";
import { RevealText } from "@/components/animations/RevealText";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "A selection of projects by Lance P. Tanio across web, mobile, and AI — from polished interfaces to on-device machine learning.",
};

export default function ProjectsPage() {
  return (
    <>
      <Navbar />
      <main className="overflow-x-clip pt-24 lg:pt-28">
        <section className="mx-auto w-full max-w-7xl px-4 pt-6 sm:px-6 lg:px-8">
          <FadeIn y={16}>
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft className="size-4" aria-hidden="true" />
              Back to home
            </Link>
          </FadeIn>
          <RevealText
            as="h1"
            text="All projects"
            mode="words"
            scroll
            className="mt-5 font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl"
          />
          <FadeIn scroll delay={0.1} y={18}>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
              Web, mobile, and AI projects I&apos;ve designed and built.
              Filter by category, or open any project for the full story.
            </p>
          </FadeIn>
        </section>

        <Projects />
      </main>
      <Footer />
    </>
  );
}
