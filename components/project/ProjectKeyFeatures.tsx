import { Target, BarChart3, Activity, MapPin, LucideIcon } from "lucide-react";
import type { KeyFeature } from "@/lib/projects";

const iconMap: Record<string, LucideIcon> = {
  "target": Target,
  "bar-chart-3": BarChart3,
  "activity": Activity,
  "map-pin": MapPin,
};

interface ProjectKeyFeaturesProps {
  features: KeyFeature[];
  isSpanish: boolean;
}

export function ProjectKeyFeatures({ features, isSpanish }: ProjectKeyFeaturesProps) {
  return (
    <section className="py-12 px-8 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-12 text-center">
        {isSpanish ? "Características Clave" : "Key Features"}
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        {features.map((feature, index) => {
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
              <div className="absolute top-0 right-0 w-20 h-20 bg-primary/5 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          );
        })}
      </div>
    </section>
  );
}
