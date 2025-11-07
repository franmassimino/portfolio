"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/navbar";
import { useLanguage } from "@/context/LanguageContext";
import type { ProjectData } from "@/lib/projects";
import {
  ProjectHero,
  ProjectCoverImage,
  // ProjectKeyFeatures,
  ProjectSections,
  ProjectMetrics,
  ProjectImpact,
  ProjectTakeaways,
  ProjectNavigation,
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
  const keyTakeaways = isSpanish && project.keyTakeawaysEs ? project.keyTakeawaysEs : project.keyTakeaways;

  return (
    <main className="relative min-h-screen">
      {/* Animated background grid */}
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] -z-10" />

      {/* Gradient orbs */}
      <motion.div
        className="fixed top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -z-10"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="fixed bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl -z-10"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.5, 0.3, 0.5],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <Navbar />

      <ProjectHero
        title={title}
        description={description}
        techStack={project.techStack}
        isSpanish={isSpanish}
      />

      <ProjectCoverImage src={project.coverImage} alt={title} />

      {/* <ProjectKeyFeatures features={project.keyFeatures} isSpanish={isSpanish} /> */}

      <ProjectSections sections={project.sections} isSpanish={isSpanish} />

      {project.metrics && <ProjectMetrics metrics={project.metrics} isSpanish={isSpanish} />}


      {keyTakeaways && <ProjectTakeaways takeaways={keyTakeaways} isSpanish={isSpanish} />}

      <ProjectNavigation
        otherProjects={otherProjects}
        isSpanish={isSpanish}
      />
    </main>
  );
}
