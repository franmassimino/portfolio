import { CheckCircle } from "lucide-react";

interface ProjectLegacyResultsProps {
  results: string[];
  isSpanish: boolean;
}

export function ProjectLegacyResults({ results, isSpanish }: ProjectLegacyResultsProps) {
  if (!results || results.length === 0) return null;

  return (
    <section className="py-6 md:py-12 px-8 max-w-6xl mx-auto bg-primary/5 rounded-lg">
      <h2 className="text-3xl font-bold mb-8">
        {isSpanish ? "Resultados" : "Results"}
      </h2>
      <ul className="space-y-4">
        {results.map((result, index) => (
          <li key={index} className="flex items-start gap-3">
            <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
            <p>{result}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
