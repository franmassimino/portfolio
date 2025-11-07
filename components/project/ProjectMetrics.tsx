import { MessageCircle, DollarSign, TrendingDown, Settings, TrendingUp, Repeat, Zap, Target, LucideIcon } from "lucide-react";
import type { Metric } from "@/lib/projects";

const metricIconMap: Record<string, LucideIcon> = {
  "💬": MessageCircle,
  "💰": DollarSign,
  "📉": TrendingDown,
  "⚙️": Settings,
  "📈": TrendingUp,
  "🔁": Repeat,
  "⚡": Zap,
  "🎯": Target,
};

interface ProjectMetricsProps {
  metrics: Metric[];
  isSpanish: boolean;
}

export function ProjectMetrics({ metrics, isSpanish }: ProjectMetricsProps) {
  if (!metrics || metrics.length === 0) return null;

  return (
    <section className="py-10 px-8 md:px-12 lg:px-16 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {metrics.map((metric, index) => {
          const metricLabel = isSpanish && metric.labelEs ? metric.labelEs : metric.label;
          const metricValue = isSpanish && metric.valueEs ? metric.valueEs : metric.value;
          const metricInsight = isSpanish && metric.insightEs ? metric.insightEs : metric.insight;
          const MetricIcon = metricIconMap[metric.icon];

          return (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-primary/5 to-background border-2 border-primary/20 rounded-2xl p-8 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 flex items-center justify-center"
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
                <p className="text-sm md:text-base text-foreground/70 leading-relaxed max-w-[200px]">
                  {metricInsight}
                </p>
              </div>
              <div className="absolute inset-0 bg-primary/5 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300 -z-10" />
            </div>
          );
        })}
      </div>
    </section>
  );
}
