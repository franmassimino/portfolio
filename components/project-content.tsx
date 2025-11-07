"use client";

import { useEffect } from "react";
import Navbar from "@/components/navbar";
import { useLanguage } from "@/context/LanguageContext";
import type { ProjectData } from "@/lib/projects";
import {
  ProjectHero,
  ProjectCoverImage,
  ProjectKeyFeatures,
  ProjectSections,
  ProjectMetrics,
  ProjectImpact,
  ProjectTakeaways,
  ProjectNavigation,
  ProjectLegacyResults,
} from "@/components/project";

interface ProjectContentProps {
  project: ProjectData;
  slug: string;
  otherProjects: Array<{
    slug: string;
    data: ProjectData;
  }>;
}

export default function ProjectContent({
  project,
  slug,
  otherProjects,
}: ProjectContentProps) {
  const { language } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const isSpanish = language === "es";
  const title = isSpanish && project.titleEs ? project.titleEs : project.title;
  const description = isSpanish && project.descriptionEs ? project.descriptionEs : project.description;
  const results = isSpanish && project.resultsEs ? project.resultsEs : project.results;
  const keyTakeaways = isSpanish && project.keyTakeawaysEs ? project.keyTakeawaysEs : project.keyTakeaways;

  return (
    <main className="min-h-screen">
      <Navbar />

      <ProjectHero
        title={title}
        description={description}
        techStack={project.techStack}
        isSpanish={isSpanish}
      />

      <ProjectCoverImage src={project.coverImage} alt={title} />

      <ProjectKeyFeatures features={project.keyFeatures} isSpanish={isSpanish} />

      <ProjectSections sections={project.sections} isSpanish={isSpanish} />

      {project.metrics && <ProjectMetrics metrics={project.metrics} isSpanish={isSpanish} />}

      {project.impact && <ProjectImpact impact={project.impact} isSpanish={isSpanish} />}

      {keyTakeaways && <ProjectTakeaways takeaways={keyTakeaways} isSpanish={isSpanish} />}

      {results && <ProjectLegacyResults results={results} isSpanish={isSpanish} />}

      <ProjectNavigation
        otherProjects={otherProjects}
        isSpanish={isSpanish}
      />
    </main>
  );
}
