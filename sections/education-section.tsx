import { SectionShell } from "@/components/common/section-shell";
import { TimelineList } from "@/components/common/timeline-list";
import { portfolioConfig } from "@/config/portfolio";

export function EducationSection(): React.JSX.Element {
  return (
    <SectionShell id="education" title="Education" subtitle="Academic foundation supporting practical product engineering.">
      <TimelineList items={portfolioConfig.education} />
    </SectionShell>
  );
}
