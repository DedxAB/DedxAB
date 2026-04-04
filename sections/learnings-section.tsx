import { Brain, Bot, Cpu, Sparkles } from 'lucide-react';

import { SectionShell } from '@/components/common/section-shell';
import { Card } from '@/components/ui/card';
import { portfolioConfig } from '@/config/portfolio';

const learningIconMap: Record<string, React.JSX.Element> = {
  ai: <Bot className="h-4 w-4" />,
  ml: <Brain className="h-4 w-4" />,
  engineering: <Cpu className="h-4 w-4" />,
  language: <Sparkles className="h-4 w-4" />,
};

export function LearningsSection(): React.JSX.Element {
  return (
    <SectionShell
      id="learnings"
      title="Current Learnings"
      subtitle="Technologies and domains I am actively studying to expand my engineering range."
    >
      <div className="grid gap-4 md:grid-cols-2">
        {portfolioConfig.currentLearnings.map((item) => (
          <Card key={item.title} className="border-border/80 bg-card/90">
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-center gap-2">
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-md border border-neonCyan/40 bg-neonCyan/10 text-neonCyan">
                  {learningIconMap[item.kind] ?? (
                    <Sparkles className="h-4 w-4" />
                  )}
                </span>
                <h3 className="font-display text-base text-foreground">
                  {item.title}
                </h3>
              </div>
              <span className="rounded-full border border-neonAmber/35 bg-neonAmber/10 px-2 py-1 font-pixel text-xs text-neonAmber">
                {item.status}
              </span>
            </div>
            <p className="mt-3 text-sm text-muted-foreground">
              {item.description}
            </p>
          </Card>
        ))}
      </div>
    </SectionShell>
  );
}
