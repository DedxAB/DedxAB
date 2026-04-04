'use client';

import { motion, useMotionValueEvent, useScroll } from 'framer-motion';
import { useRef, useState } from 'react';

import { Card } from '@/components/ui/card';
import { TimelineItem } from '@/lib/types';

type TimelineListProps = {
  items: TimelineItem[];
};

export function TimelineList({ items }: TimelineListProps): React.JSX.Element {
  const [direction, setDirection] = useState<'up' | 'down'>('down');
  const [progress, setProgress] = useState(0);
  const lastY = useRef(0);
  const containerRef = useRef<HTMLOListElement | null>(null);
  const { scrollY, scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.85', 'end 0.2'],
  });
  const segmentCount = Math.max(items.length - 1, 1);

  useMotionValueEvent(scrollY, 'change', (latest) => {
    if (latest === lastY.current) return;
    setDirection(latest > lastY.current ? 'down' : 'up');
    lastY.current = latest;
  });
  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    setProgress(Math.max(0, Math.min(1, latest)));
  });

  return (
    <ol ref={containerRef} className="space-y-4">
      {items.map((item, index) =>
        (() => {
          const rawFill = progress * segmentCount - index;
          const segmentFill = Math.max(0, Math.min(1, rawFill));
          const isPartial = segmentFill > 0 && segmentFill < 1;

          return (
            <motion.li
              key={`${item.title}-${item.period}`}
              className="grid grid-cols-[1.25rem_1fr] gap-4"
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{
                duration: 0.45,
                delay: Math.min(index * 0.06, 0.24),
              }}
            >
              <div className="relative flex justify-center">
                <motion.span
                  aria-hidden="true"
                  className="z-1 inline-flex h-4 w-4 items-center justify-center rounded-full border border-neonCyan/80 bg-background shadow-[0_0_0_3px_hsl(var(--card))]"
                  whileInView={{ scale: [0.9, 1.05, 1] }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.42,
                    delay: Math.min(index * 0.07, 0.22),
                  }}
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-neonCyan" />
                </motion.span>
                {index !== items.length - 1 ? (
                  <span
                    aria-hidden="true"
                    className="absolute left-1/2 top-2 w-px -translate-x-1/2 overflow-hidden"
                    style={{ height: 'calc(100% + 1.25rem)' }}
                  >
                    <span className="absolute inset-0 bg-border/80" />
                    <motion.span
                      className="absolute left-0 w-px bg-linear-to-b from-neonCyan via-neonAmber to-neonCyan"
                      animate={
                        direction === 'down' || !isPartial
                          ? {
                              top: 0,
                              bottom: 'auto',
                              height: `${segmentFill * 100}%`,
                            }
                          : {
                              top: 'auto',
                              bottom: 0,
                              height: `${segmentFill * 100}%`,
                            }
                      }
                      transition={{ duration: 0.16, ease: 'linear' }}
                    />
                  </span>
                ) : null}
              </div>

              <Card className="transition-colors hover:border-neonCyan/40">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <h3 className="font-display text-lg text-foreground">
                    {item.title}
                  </h3>
                  <span className="font-pixel text-xs text-neonAmber">
                    {item.period}
                  </span>
                </div>
                <p className="mt-1 text-sm text-neonCyan">{item.subtitle}</p>
                {item.location ? (
                  <p className="mt-1 text-xs text-muted-foreground">
                    {item.location}
                  </p>
                ) : null}
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </Card>
            </motion.li>
          );
        })()
      )}
    </ol>
  );
}
