'use client';

import { motion } from 'framer-motion';

import { scaleIn, staggerContainer } from '@/components/common/motion';
import { SectionShell } from '@/components/common/section-shell';
import { Card } from '@/components/ui/card';
import { portfolioConfig } from '@/config/portfolio';

export function AchievementsSection(): React.JSX.Element {
  return (
    <SectionShell
      id="achievements"
      title="Achievements"
      subtitle="Milestones that reflect consistency, ownership, and delivery quality."
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-40px' }}
        className="grid gap-5 md:grid-cols-2"
      >
        {portfolioConfig.achievements.map((item) => (
          <motion.div key={item.title} variants={scaleIn}>
            <Card>
              <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                {item.year}
              </p>
              <h3 className="mt-2 font-display text-lg">{item.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </SectionShell>
  );
}
