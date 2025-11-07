import type { Impact } from "@/lib/projects";

interface ProjectImpactProps {
  impact: Impact;
  isSpanish: boolean;
}

export function ProjectImpact({ impact, isSpanish }: ProjectImpactProps) {
  const title = isSpanish && impact.titleEs ? impact.titleEs : impact.title;
  const content = isSpanish && impact.contentEs ? impact.contentEs : impact.content;

  return (
    <section className="py-10 px-8 md:px-12 lg:px-16 max-w-6xl mx-auto">
      <h2 className="border-l-4 border-primary/30 pl-4 py-2 text-3xl md:text-4xl font-bold mb-6 text-foreground">
        {title}
      </h2>
      <div className="border-2 border-primary/30 bg-primary/5 rounded-lg p-8">
        <p className="text-base md:text-lg text-foreground/80 leading-relaxed">{content}</p>
      </div>
    </section>
  );
}
