import { SectionShell } from '@/components/common/section-shell';
import { TimelineList } from '@/components/common/timeline-list';
import { portfolioConfig } from '@/config/portfolio';

export function ExperienceSection(): React.JSX.Element {
  return (
    <SectionShell
      id="experience"
      title="Experience"
      subtitle="Professional work focused on shipping maintainable web products."
    >
      <TimelineList items={portfolioConfig.experience} />
    </SectionShell>
  );
}
