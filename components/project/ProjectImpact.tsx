import type { Impact } from "@/lib/projects";

interface ProjectImpactProps {
  impact: Impact;
  isSpanish: boolean;
}

export function ProjectImpact({ impact, isSpanish }: ProjectImpactProps) {
  const title = isSpanish && impact.titleEs ? impact.titleEs : impact.title;
  const content = isSpanish && impact.contentEs ? impact.contentEs : impact.content;

  return (
    <section className="py-12 px-8 max-w-6xl mx-auto">
      <div className="border-2 border-primary/30 bg-primary/5 rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        <p className="text-lg text-foreground/80 leading-relaxed">{content}</p>
      </div>
    </section>
  );
}
