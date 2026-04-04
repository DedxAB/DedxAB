import type { LucideIcon } from 'lucide-react';
import { Camera, Gamepad2, Rocket, Sparkles, Trophy } from 'lucide-react';

import { SectionShell } from '@/components/common/section-shell';
import { Card } from '@/components/ui/card';
import { portfolioConfig } from '@/config/portfolio';
import { cn } from '@/lib/utils';

const iconByKeyword: { keyword: string; icon: LucideIcon }[] = [
  { keyword: 'photo', icon: Camera },
  { keyword: 'story', icon: Sparkles },
  { keyword: 'video game', icon: Gamepad2 },
  { keyword: 'cricket', icon: Trophy },
  { keyword: 'badminton', icon: Trophy },
  { keyword: 'learning', icon: Rocket },
];

const highlightStyles = [
  'border-cyan-500/45 bg-cyan-500/10 text-cyan-700 dark:text-cyan-300',
  'border-violet-500/45 bg-violet-500/10 text-violet-700 dark:text-violet-300',
  'border-pink-500/45 bg-pink-500/10 text-pink-700 dark:text-pink-300',
  'border-emerald-500/45 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300',
];

export function InterestsSection(): React.JSX.Element {
  const pickIcon = (interest: string): LucideIcon => {
    const match = iconByKeyword.find((item) =>
      interest.toLowerCase().includes(item.keyword)
    );
    return match?.icon ?? Sparkles;
  };

  return (
    <SectionShell
      id="interests"
      title="Interests & Hobbies"
      subtitle="Creativity and curiosity outside coding that influence how I design and build."
    >
      <div className="grid gap-4 md:grid-cols-2">
        {portfolioConfig.interests.map((interest, index) => {
          const Icon = pickIcon(interest);
          const accent = highlightStyles[index % highlightStyles.length];
          return (
            <Card
              key={interest}
              className="group border-border/80 bg-card/90 transition-all duration-300 hover:-translate-y-0.5 hover:border-neonCyan/40"
            >
              <div className="flex items-start gap-3">
                <span
                  className={cn(
                    'inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-md border bg-background/70',
                    accent
                  )}
                >
                  <Icon className="h-4 w-4" />
                </span>
                <p className="font-display text-sm leading-relaxed text-foreground">
                  {interest}
                </p>
              </div>
            </Card>
          );
        })}
      </div>
    </SectionShell>
  );
}
