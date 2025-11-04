"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight, Calendar, Clock, Tag, CheckCircle } from "lucide-react";
import Navbar from "@/components/navbar";
import { useLanguage } from "@/context/LanguageContext";
import type { ProjectData } from "@/lib/projects-data";

interface ProjectContentProps {
  project: ProjectData;
  slug: string;
  prevProject: string | null;
  nextProject: string | null;
  prevProjectTitle: string | null;
  nextProjectTitle: string | null;
}

export default function ProjectContent({
  project,
  slug,
  prevProject,
  nextProject,
  prevProjectTitle,
  nextProjectTitle,
}: ProjectContentProps) {
  const { language } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const isSpanish = language === "es";

  const title = isSpanish && project.titleEs ? project.titleEs : project.title;
  const description = isSpanish && project.descriptionEs ? project.descriptionEs : project.description;
  const results = isSpanish && project.resultsEs ? project.resultsEs : project.results;

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="pt-16 pb-4 px-8 max-w-6xl mx-auto">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-foreground/70 hover:text-primary transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          {isSpanish ? "Volver a proyectos" : "Back to projects"}
        </Link>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.techStack.map((tech: string, index: number) => (
            <span
              key={index}
              className="text-xs px-3 py-1 border border-primary/20 bg-primary/5 rounded-full flex items-center gap-1"
            >
              <Tag className="w-3 h-3" />
              {tech}
            </span>
          ))}
        </div>

        <h1 className="text-4xl md:text-6xl font-bold mb-6">{title}</h1>
        <p className="text-xl text-foreground/70 mb-8">{description}</p>
      </section>

      {/* Cover Image - Full width on mobile */}
      <div className="w-full -mx-0 md:mx-auto md:max-w-6xl md:px-8 mt-0 mb-6 md:mb-12">
        <div className="w-full rounded-lg overflow-hidden bg-zinc-100 dark:bg-zinc-900 flex items-center justify-center p-0 md:p-6">
          <div className="relative w-full max-w-5xl">
            <Image
              src={project.coverImage}
              alt={title}
              width={1200}
              height={800}
              className="object-cover md:object-contain w-full h-auto max-h-[600px] md:max-h-[600px] mx-auto"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
              priority
            />
          </div>
        </div>
      </div>

      {/* Key Features */}
      <section className="py-2 px-8 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">
          {isSpanish ? "Características Clave" : "Key Features"}
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {project.keyFeatures?.map((feature: any, index: number) => {
            const featureTitle = isSpanish && feature.titleEs ? feature.titleEs : feature.title;
            const featureDescription = isSpanish && feature.descriptionEs ? feature.descriptionEs : feature.description;
            return (
              <div
                key={index}
                className="p-6 rounded-lg border border-primary/20 bg-primary/5 hover:border-primary/40 transition-all"
              >
                <h3 className="font-medium mb-2">{featureTitle}</h3>
                <p className="text-sm text-foreground/70">{featureDescription}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Sections */}
      <section className="py-12 px-8 max-w-6xl mx-auto">
        {project.sections.map((section: any, index: number) => {
          const sectionTitle = isSpanish && section.titleEs ? section.titleEs : section.title;
          const sectionContent = isSpanish && section.contentEs ? section.contentEs : section.content;
          return (
            <div key={index} className="mb-12">
              <h2 className="text-2xl font-bold mb-4">{sectionTitle}</h2>
              <p className="text-foreground/70 leading-relaxed">{sectionContent}</p>
            </div>
          );
        })}
      </section>

      {/* Results */}
      {results && (
        <section className="py-12 px-8 max-w-6xl mx-auto bg-primary/5 rounded-lg">
          <h2 className="text-3xl font-bold mb-8">
            {isSpanish ? "Resultados" : "Results"}
          </h2>
          <ul className="space-y-4">
            {results.map((result: string, index: number) => (
              <li key={index} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <p>{result}</p>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Navigation */}
      <section className="py-12 px-8 max-w-6xl mx-auto border-t border-primary/20 mt-16">
        <h2 className="text-2xl font-bold mb-8 text-center">
          {isSpanish ? "Más Proyectos" : "More Projects"}
        </h2>
        <div className="flex justify-between gap-8">
          {prevProject ? (
            <Link
              href={`/projects/${prevProject}`}
              className="group flex-1 p-6 border border-primary/20 rounded-lg hover:border-primary/40 transition-all"
            >
              <div className="flex items-center gap-2 text-sm text-foreground/60 mb-2">
                <ArrowLeft className="w-4 h-4" />
                <span>{isSpanish ? "Anterior" : "Previous"}</span>
              </div>
              <h3 className="font-medium group-hover:text-primary transition-colors">
                {prevProjectTitle}
              </h3>
            </Link>
          ) : (
            <div className="flex-1"></div>
          )}

          {nextProject ? (
            <Link
              href={`/projects/${nextProject}`}
              className="group flex-1 p-6 border border-primary/20 rounded-lg hover:border-primary/40 transition-all text-right"
            >
              <div className="flex items-center justify-end gap-2 text-sm text-foreground/60 mb-2">
                <span>{isSpanish ? "Siguiente" : "Next"}</span>
                <ArrowRight className="w-4 h-4" />
              </div>
              <h3 className="font-medium group-hover:text-primary transition-colors">
                {nextProjectTitle}
              </h3>
            </Link>
          ) : (
            <div className="flex-1"></div>
          )}
        </div>
      </section>
    </main>
  );
}

