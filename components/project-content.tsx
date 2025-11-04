"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  Clock,
  Tag,
  CheckCircle,
  Lightbulb,
  Target,
  BarChart3,
  Activity,
  MapPin,
  MessageCircle,
  DollarSign,
  TrendingDown,
  Settings,
  TrendingUp,
  Repeat,
  LucideIcon
} from "lucide-react";
import Navbar from "@/components/navbar";
import { useLanguage } from "@/context/LanguageContext";
import type { ProjectData } from "@/lib/projects-data";
import { Card, CardContent } from "@/components/ui/card";

// Icon mapping for features
const iconMap: Record<string, LucideIcon> = {
  "target": Target,
  "bar-chart-3": BarChart3,
  "activity": Activity,
  "map-pin": MapPin,
};

// Icon mapping for metrics (emoji to Lucide icon)
const metricIconMap: Record<string, LucideIcon> = {
  "💬": MessageCircle,
  "💰": DollarSign,
  "📉": TrendingDown,
  "⚙️": Settings,
  "📈": TrendingUp,
  "🔁": Repeat,
};

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
      <div className="w-full mx-0 md:mx-auto md:max-w-6xl px-8 md:px-8 mt-0 mb-6 md:mb-12">
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
      <section className="py-12 px-8 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">
          {isSpanish ? "Características Clave" : "Key Features"}
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {project.keyFeatures?.map((feature: any, index: number) => {
            const featureTitle = isSpanish && feature.titleEs ? feature.titleEs : feature.title;
            const featureDescription = isSpanish && feature.descriptionEs ? feature.descriptionEs : feature.description;
            const IconComponent = feature.icon ? iconMap[feature.icon] : null;
            return (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-background to-background/50 border border-primary/20 rounded-xl p-6 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
              >
                <div className="flex flex-col gap-4">
                  {IconComponent && (
                    <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                  )}
                  <div>
                    <h3 className="font-bold text-xl mb-3 text-foreground">{featureTitle}</h3>
                    <p className="text-foreground/70 leading-relaxed">{featureDescription}</p>
                  </div>
                </div>
                {/* Decorative corner accent */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-primary/5 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            );
          })}
        </div>
      </section>

      {/* Sections */}
      <section className="py-12 px-8 max-w-6xl mx-auto">
        <div className="space-y-8">
          {project.sections.map((section: any, index: number) => {
            const sectionTitle = isSpanish && section.titleEs ? section.titleEs : section.title;
            const sectionContent = isSpanish && section.contentEs ? section.contentEs : section.content;
            // Split content by newlines to handle multi-paragraph content
            const paragraphs = sectionContent.split('\n\n');
            return (
              <div key={index}>
                <div className="border-l-4 border-primary/30 pl-6 py-2">
                  <h2 className="text-3xl font-bold mb-4 text-foreground">{sectionTitle}</h2>
                  <div className="space-y-4">
                    {paragraphs.map((paragraph: string, pIndex: number) => (
                      <p key={pIndex} className="text-foreground/80 leading-relaxed text-lg">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Metrics Section */}
      {(project as any).metrics && (
        <section className="py-12 px-8 max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">
            {isSpanish ? "Resultados" : "Results"}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {(project as any).metrics.slice(0, 3).map((metric: any, index: number) => {
              const metricLabel = isSpanish && metric.labelEs ? metric.labelEs : metric.label;
              const metricValue = isSpanish && metric.valueEs ? metric.valueEs : metric.value;
              const metricInsight = isSpanish && metric.insightEs ? metric.insightEs : metric.insight;
              const MetricIcon = metricIconMap[metric.icon];
              return (
                <div
                  key={index}
                  className="group relative bg-gradient-to-br from-primary/5 to-background border-2 border-primary/20 rounded-2xl p-8 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 flex items-center justify-center min-h-[280px]"
                >
                  <div className="flex flex-col items-center text-center gap-4">
                    {MetricIcon && (
                      <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <MetricIcon className="w-8 h-8 text-primary" />
                      </div>
                    )}
                    <div className="space-y-3">
                      <h3 className="text-xs font-bold text-foreground/60 uppercase tracking-widest">
                        {metricLabel}
                      </h3>
                      <p className="text-2xl font-bold text-foreground leading-tight">
                        {metricValue}
                      </p>
                    </div>
                    <div className="w-12 h-px bg-primary/30" />
                    <p className="text-sm text-foreground/70 leading-relaxed max-w-[200px]">
                      {metricInsight}
                    </p>
                  </div>
                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 bg-primary/5 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300 -z-10" />
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* Impact Section */}
      {(project as any).impact && (
        <section className="py-12 px-8 max-w-6xl mx-auto">
          <div className="border-2 border-primary/30 bg-primary/5 rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-4">
              {isSpanish && (project as any).impact.titleEs
                ? (project as any).impact.titleEs
                : (project as any).impact.title}
            </h2>
            <p className="text-lg text-foreground/80 leading-relaxed">
              {isSpanish && (project as any).impact.contentEs
                ? (project as any).impact.contentEs
                : (project as any).impact.content}
            </p>
          </div>
        </section>
      )}

      {/* Key Takeaways Section */}
      {(project as any).keyTakeaways && (
        <section className="py-12 px-8 max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <Lightbulb className="w-8 h-8 text-primary" />
            <h2 className="text-3xl font-bold">
              {isSpanish ? "Conclusiones Clave" : "Key Takeaways"}
            </h2>
          </div>
          <div className="space-y-4">
            {(isSpanish && (project as any).keyTakeawaysEs
              ? (project as any).keyTakeawaysEs
              : (project as any).keyTakeaways
            ).map((takeaway: string, index: number) => (
              <div
                key={index}
                className="border-l-4 border-primary bg-primary/5 p-6 rounded-r-lg hover:bg-primary/10 transition-colors"
              >
                <p className="text-foreground/90 leading-relaxed">{takeaway}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Results (Legacy support for other projects) */}
      {results && results.length > 0 && (
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

