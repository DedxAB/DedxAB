import { SectionShell } from "@/components/common/section-shell";
import { TimelineList } from "@/components/common/timeline-list";
import { portfolioConfig } from "@/config/portfolio";

export function AboutSection(): React.JSX.Element {
  return (
    <SectionShell id="about" title="About Me" subtitle={portfolioConfig.profile.bio}>
      <TimelineList items={portfolioConfig.aboutTimeline} />
    </SectionShell>
  );
}
