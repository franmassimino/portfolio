import { CheckCircle } from "lucide-react";

interface ProjectLegacyResultsProps {
  results: string[];
  isSpanish: boolean;
}

export function ProjectLegacyResults({ results, isSpanish }: ProjectLegacyResultsProps) {
  if (!results || results.length === 0) return null;

  return (
    <section className="py-10 px-8 md:px-12 lg:px-16 max-w-6xl mx-auto">
      <h2 className="border-l-4 border-primary/30 pl-4 py-2 text-3xl md:text-4xl font-bold mb-6 text-foreground">
        {isSpanish ? "Resultados" : "Results"}
      </h2>
      <ul className="space-y-4">
        {results.map((result, index) => (
          <li key={index} className="flex items-start gap-3">
            <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
            <p className="text-base md:text-lg text-foreground/80">{result}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
