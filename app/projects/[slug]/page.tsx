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
