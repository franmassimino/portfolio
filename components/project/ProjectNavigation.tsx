import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { ProjectData } from "@/lib/projects";

interface ProjectNavigationProps {
  otherProjects: Array<{
    slug: string;
    data: ProjectData;
  }>;
  isSpanish: boolean;
}

export function ProjectNavigation({
  otherProjects,
  isSpanish,
}: ProjectNavigationProps) {
  return (
    <section className="py-6 md:py-12 px-8 max-w-6xl mx-auto mt-16">
      <h2 className="text-2xl font-bold mb-8 text-center">
        {isSpanish ? "Más Proyectos" : "More Projects"}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {otherProjects.map(({ slug, data }) => {
          const title = isSpanish && data.titleEs ? data.titleEs : data.title;
          const description = isSpanish && data.descriptionEs ? data.descriptionEs : data.description;

          return (
            <Link
              key={slug}
              href={`/projects/${slug}`}
              className="group relative overflow-hidden border border-primary/20 rounded-lg hover:border-primary/40 transition-all bg-background/50 backdrop-blur-sm"
            >
              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                  {title}
                </h3>

                <p className="text-sm text-foreground/70 leading-relaxed line-clamp-2">
                  {description}
                </p>
              </div>

              {/* Arrow Icon */}
              <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-background/80 backdrop-blur-sm border border-primary/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowUpRight className="w-4 h-4 text-primary" />
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
