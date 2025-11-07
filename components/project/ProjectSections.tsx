import { CheckCircle, Zap } from "lucide-react";
import type { Section } from "@/lib/projects";

interface ProjectSectionsProps {
  sections: Section[];
  isSpanish: boolean;
}

export function ProjectSections({ sections, isSpanish }: ProjectSectionsProps) {
  return (
    <section className="py-12 px-8 max-w-6xl mx-auto">
      <div className="space-y-8">
        {sections.map((section, index) => {
          const sectionTitle = isSpanish && section.titleEs ? section.titleEs : section.title;

          // Check if section has structured content
          if (section.structuredContent) {
            const structured = section.structuredContent;
            const intro = isSpanish && structured.introEs ? structured.introEs : structured.intro;
            const bullets = isSpanish && structured.bulletsEs ? structured.bulletsEs : structured.bullets;
            const highlight = isSpanish && structured.highlightEs ? structured.highlightEs : structured.highlight;
            const closing = isSpanish && structured.closingEs ? structured.closingEs : structured.closing;

            return (
              <div key={index}>
                <div className="py-2">
                  <h2 className="border-l-4 border-primary/30 pl-4 py-2 text-3xl font-bold mb-4 text-foreground">
                    {sectionTitle}
                  </h2>

                  <div className="space-y-6">
                    {/* Intro text */}
                    {intro && (
                      <p className="text-foreground/80 leading-relaxed text-lg">
                        {intro}
                      </p>
                    )}

                    {/* Bullet points with icons */}
                    {bullets && bullets.length > 0 && (
                      <ul className="space-y-3 my-6">
                        {bullets.map((bullet, bulletIndex) => (
                          <li key={bulletIndex} className="flex items-start gap-3 group">
                            <div className="mt-1 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                              <CheckCircle className="w-3.5 h-3.5 text-primary" />
                            </div>
                            <span className="text-foreground/80 leading-relaxed text-lg">
                              {bullet}
                            </span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {/* Highlight/emphasis box */}
                    {highlight && (
                      <div className="my-6 p-6 bg-primary/5 border-l-4 border-primary rounded-r-lg">
                        <div className="flex items-start gap-3">
                          <Zap className="w-5 h-5 text-primary mt-1 shrink-0" />
                          <p className="text-foreground font-medium text-lg leading-relaxed">
                            {highlight}
                          </p>
                        </div>
                      </div>
                    )}

                    {/* Closing text */}
                    {closing && (
                      <p className="text-foreground/80 leading-relaxed text-lg">
                        {closing}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            );
          }

          // Fallback for plain string content (backward compatibility)
          const sectionContent = isSpanish && section.contentEs ? section.contentEs : section.content;
          const paragraphs = sectionContent ? sectionContent.split('\n\n') : [];

          return (
            <div key={index}>
              <div className="py-2">
                <h2 className="border-l-4 border-primary/30 pl-4 py-2 text-3xl font-bold mb-4 text-foreground">
                  {sectionTitle}
                </h2>
                <div className="space-y-4">
                  {paragraphs.map((paragraph, pIndex) => (
                    <p key={pIndex} className="text-foreground/80 leading-relaxed text-lg">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
