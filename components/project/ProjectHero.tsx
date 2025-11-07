import Link from "next/link";
import { ArrowLeft, Tag } from "lucide-react";

interface ProjectHeroProps {
  title: string;
  description: string;
  techStack: string[];
  isSpanish: boolean;
}

export function ProjectHero({ title, description, techStack, isSpanish }: ProjectHeroProps) {
  return (
    <section className="pt-16 pb-4 px-8 max-w-6xl mx-auto">
      <Link
        href="/#projects"
        className="inline-flex items-center gap-2 text-foreground/70 hover:text-primary transition-colors mb-8"
      >
        <ArrowLeft className="w-4 h-4" />
        {isSpanish ? "Volver a proyectos" : "Back to projects"}
      </Link>

      <h1 className="text-4xl md:text-6xl font-bold mb-4">{title}</h1>
      <p className="text-xl text-foreground/70 mb-6">{description}</p>

      <div className="flex flex-wrap gap-2 mb-6">
        {techStack.map((tech, index) => (
          <span
            key={index}
            className="text-xs px-3 py-1 border border-primary/20 bg-primary/5 rounded-full flex items-center gap-1"
          >
            <Tag className="w-3 h-3" />
            {tech}
          </span>
        ))}
      </div>
    </section>
  );
}
