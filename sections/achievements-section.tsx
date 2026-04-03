import { SectionShell } from "@/components/common/section-shell";
import { Card } from "@/components/ui/card";
import { portfolioConfig } from "@/config/portfolio";

export function AchievementsSection(): React.JSX.Element {
  return (
    <SectionShell id="achievements" title="Achievements" subtitle="Milestones that reflect consistency, ownership, and delivery quality.">
      <div className="grid gap-5 md:grid-cols-2">
        {portfolioConfig.achievements.map((item) => (
          <Card key={item.title}>
            <p className="font-pixel text-xs text-neonAmber">{item.year}</p>
            <h3 className="mt-2 font-display text-lg">{item.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
          </Card>
        ))}
      </div>
    </SectionShell>
  );
}
