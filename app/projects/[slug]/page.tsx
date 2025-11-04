import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ProjectContent from "@/components/project-content";
import { projectsData } from "@/lib/projects-data";

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
  const currentIndex = allProjects.indexOf(slug);
  const prevProject = currentIndex > 0 ? allProjects[currentIndex - 1] : null;
  const nextProject = currentIndex < allProjects.length - 1 ? allProjects[currentIndex + 1] : null;

  const prevProjectTitle = prevProject 
    ? (projectsData[prevProject as keyof typeof projectsData].title)
    : null;
  const nextProjectTitle = nextProject 
    ? (projectsData[nextProject as keyof typeof projectsData].title)
    : null;

  return (
    <ProjectContent
      project={project}
      slug={slug}
      prevProject={prevProject}
      nextProject={nextProject}
      prevProjectTitle={prevProjectTitle}
      nextProjectTitle={nextProjectTitle}
    />
  );
}

export async function generateStaticParams() {
  return [
    { slug: "lamperti-luthier" },
    { slug: "stay-wild-studio" },
    { slug: "lina-restaurant" },
  ];
}
