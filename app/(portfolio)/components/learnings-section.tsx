'use client';

import { motion } from 'framer-motion';

import { scaleIn, staggerContainer } from '@/components/common/motion';
import { SectionShell } from '@/components/common/section-shell';
import { Card } from '@/components/ui/card';
import { portfolioConfig } from '@/config/portfolio';
import { learningIconMap } from '@/config/icons';

import { Sparkles } from 'lucide-react';

export function LearningsSection(): React.JSX.Element {
  return (
    <SectionShell
      id="learnings"
      title="Current Learnings"
      subtitle="Technologies and domains I am actively studying to expand my engineering range."
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-40px' }}
        className="grid gap-4 md:grid-cols-2"
      >
        {portfolioConfig.currentLearnings.map((item) => {
          const Icon = learningIconMap[item.kind];
          return (
            <motion.div key={item.title} variants={scaleIn}>
              <Card>
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <span className="surface-subtle inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-md text-foreground">
                      {Icon ? <Icon className="h-4 w-4" /> : <Sparkles className="h-4 w-4" />}
                    </span>
                    <h3 className="font-display text-base text-foreground">{item.title}</h3>
                  </div>
                  <span className="surface-subtle shrink-0 rounded-full px-2 py-1 text-xs tracking-[0.12em] text-muted-foreground">
                    {item.status}
                  </span>
                </div>
                <p className="mt-3 text-sm text-muted-foreground">{item.description}</p>
              </Card>
            </motion.div>
          );
        })}
      </motion.div>
    </SectionShell>
  );
}
