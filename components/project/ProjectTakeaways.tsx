import { Lightbulb } from "lucide-react";

interface ProjectTakeawaysProps {
  takeaways: string[];
  isSpanish: boolean;
}

export function ProjectTakeaways({ takeaways, isSpanish }: ProjectTakeawaysProps) {
  if (!takeaways || takeaways.length === 0) return null;

  return (
    <section className="py-8 px-8 md:px-12 lg:px-16 max-w-6xl mx-auto">
      <h2 className="border-l-4 border-primary/30 pl-4 py-2 text-3xl md:text-4xl font-bold mb-6 text-foreground">
        {isSpanish ? "Conclusiones Clave" : "Key Takeaways"}
      </h2>

      <div className="space-y-4">
        {takeaways.map((takeaway, index) => (
          <div
            key={index}
            className="border-primary bg-primary/5 p-6 rounded-r-lg hover:bg-primary/10 transition-colors"
          >
            <p className="text-base md:text-lg text-foreground/90 leading-relaxed">{takeaway}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
