import type { LucideIcon } from 'lucide-react';
import { Camera, Gamepad2, Rocket, Sparkles, Trophy } from 'lucide-react';

import { SectionShell } from '@/components/common/section-shell';
import { Card } from '@/components/ui/card';
import { portfolioConfig } from '@/config/portfolio';

const iconByKeyword: { keyword: string; icon: LucideIcon }[] = [
  { keyword: 'photo', icon: Camera },
  { keyword: 'story', icon: Sparkles },
  { keyword: 'video game', icon: Gamepad2 },
  { keyword: 'cricket', icon: Trophy },
  { keyword: 'badminton', icon: Trophy },
  { keyword: 'learning', icon: Rocket },
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
        {portfolioConfig.interests.map((interest) => {
          const Icon = pickIcon(interest);
          return (
            <Card
              key={interest}
              className="group transition-all duration-300 hover:-translate-y-0.5"
            >
              <div className="flex items-start gap-3">
                <span className="surface-subtle inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-md text-foreground">
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
