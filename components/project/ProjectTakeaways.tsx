import { Lightbulb } from "lucide-react";

interface ProjectTakeawaysProps {
  takeaways: string[];
  isSpanish: boolean;
}

export function ProjectTakeaways({ takeaways, isSpanish }: ProjectTakeawaysProps) {
  if (!takeaways || takeaways.length === 0) return null;

  return (
    <section className="pt-12 px-8 max-w-6xl mx-auto">
      <div className="flex items-center gap-3 mb-8">
        <Lightbulb className="w-8 h-8 text-primary" />
        <h2 className="text-3xl font-bold">
          {isSpanish ? "Conclusiones Clave" : "Key Takeaways"}
        </h2>
      </div>

      <div className="space-y-4">
        {takeaways.map((takeaway, index) => (
          <div
            key={index}
            className="border-l-4 border-primary bg-primary/5 p-6 rounded-r-lg hover:bg-primary/10 transition-colors"
          >
            <p className="text-foreground/90 leading-relaxed">{takeaway}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
