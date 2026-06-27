import { SectionShell } from '@/components/common/section-shell';
import { TimelineList } from '@/components/common/timeline-list';
import type { TimelineItem } from '@/app/(portfolio)/types';

type TimelineSectionProps = {
  id: string;
  title: string;
  subtitle: string;
  items: TimelineItem[];
  reverse?: boolean;
};

export function TimelineSection({ id, title, subtitle, items, reverse }: TimelineSectionProps): React.JSX.Element {
  const resolved = reverse ? [...items].reverse() : items;
  return (
    <SectionShell id={id} title={title} subtitle={subtitle}>
      <TimelineList items={resolved} />
    </SectionShell>
  );
}
