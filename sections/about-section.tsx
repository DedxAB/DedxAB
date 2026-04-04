import { SectionShell } from '@/components/common/section-shell';
import { TimelineList } from '@/components/common/timeline-list';
import { portfolioConfig } from '@/config/portfolio';

export function AboutSection(): React.JSX.Element {
  const aboutTimelineLatestFirst = [...portfolioConfig.aboutTimeline].reverse();

  return (
    <SectionShell
      id="about"
      title="About Me"
      subtitle={portfolioConfig.profile.bio}
    >
      <TimelineList items={aboutTimelineLatestFirst} />
    </SectionShell>
  );
}
