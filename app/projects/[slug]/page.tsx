import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ProjectContent from "@/components/project-content";
import { projectsData } from "@/lib/projects";

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projectsData[slug as keyof typeof projectsData];

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  const title = project.title;
  const description = project.description;
  const imageUrl = project.coverImage.startsWith('http') 
    ? project.coverImage 
    : `${process.env.NEXT_PUBLIC_SITE_URL || 'https://yourdomain.com'}${project.coverImage}`;

  return {
    title: `${title} - Case Study`,
    description: description,
    openGraph: {
      title: `${title} - Case Study | Francisco Massimino - Portfolio`,
      description: description,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} - Case Study | Francisco Massimino - Portfolio`,
      description: description,
      images: [imageUrl],
    },
    keywords: [...project.techStack],
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  
  const project = projectsData[slug as keyof typeof projectsData];
  
  if (!project) {
    notFound();
  }

  const allProjects = Object.keys(projectsData);
  const otherProjects = allProjects
    .filter(projectSlug => projectSlug !== slug)
    .map(projectSlug => ({
      slug: projectSlug,
      data: projectsData[projectSlug as keyof typeof projectsData]
    }));

  return (
    <ProjectContent
      project={project}
      slug={slug}
      otherProjects={otherProjects}
    />
  );
}

export async function generateStaticParams() {
  return Object.keys(projectsData).map((slug) => ({
    slug,
  }));
}
