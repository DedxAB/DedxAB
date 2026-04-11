'use client';

import { motion } from 'framer-motion';

import { fadeUp, staggerContainer } from '@/components/common/motion';
import { Card } from '@/components/ui/card';
import { TimelineItem } from '@/lib/types';

type TimelineListProps = {
  items: TimelineItem[];
};

export function TimelineList({ items }: TimelineListProps): React.JSX.Element {
  return (
    <motion.ol
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      className="relative space-y-6 before:absolute before:bottom-0 before:left-[0.45rem] before:top-2 before:w-px before:bg-border"
    >
      {items.map((item, index) => (
        <motion.li
          key={`${item.title}-${item.period}`}
          variants={fadeUp}
          custom={Math.min(index * 0.05, 0.22)}
          className="relative grid grid-cols-[1.25rem_1fr] gap-5"
        >
          <span
            aria-hidden="true"
            className="relative z-10 mt-4 inline-flex h-4 w-4 rounded-full border border-foreground bg-background"
          />
          <Card className="transition-transform duration-300 hover:-translate-y-1">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <p className="text-xs uppercase tracking-[0.24em] text-muted-foreground">
                  {item.subtitle}
                </p>
                <h3 className="mt-2 font-display text-3xl text-foreground md:text-4xl">
                  {item.title}
                </h3>
              </div>
              <span className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
                {item.period}
              </span>
            </div>
            {item.location ? (
              <p className="mt-4 text-sm text-muted-foreground">{item.location}</p>
            ) : null}
            <p className="mt-4 max-w-3xl text-sm leading-7 text-muted-foreground md:text-base">
              {item.description}
            </p>
          </Card>
        </motion.li>
      ))}
    </motion.ol>
  );
}
