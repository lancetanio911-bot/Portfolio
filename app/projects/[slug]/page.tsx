import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ProjectDetail } from "@/components/ProjectDetail";
import { projects, getProjectBySlug } from "@/data/projects";
import { site } from "@/data/site";

type ProjectPageProps = PageProps<"/projects/[slug]">;

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) return { title: "Project not found" };

  return {
    title: project.title,
    description: project.shortDescription,
    openGraph: {
      title: `${project.title} | ${site.name}`,
      description: project.shortDescription,
      type: "article",
      url: `${site.url}/projects/${project.slug}`,
      images: [
        {
          url: `${site.url}/og?title=${encodeURIComponent(project.title)}`,
          width: 1200,
          height: 630,
          alt: `${project.title} — ${site.name}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} | ${site.name}`,
      description: project.shortDescription,
      images: [`${site.url}/og?title=${encodeURIComponent(project.title)}`],
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) notFound();

  return (
    <>
      <Navbar />
      <main className="overflow-x-clip">
        <ProjectDetail project={project} />
      </main>
      <Footer />
    </>
  );
}
