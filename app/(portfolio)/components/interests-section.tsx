'use client';

import { motion } from 'framer-motion';

import { scaleIn, staggerContainer } from '@/components/common/motion';
import { SectionShell } from '@/components/common/section-shell';
import { Card } from '@/components/ui/card';
import { portfolioConfig } from '@/config/portfolio';
import { interestIconMap } from '@/config/icons';

import { Sparkles } from 'lucide-react';

export function InterestsSection(): React.JSX.Element {
  const pickIcon = (interest: string) => {
    const match = interestIconMap.find((item) =>
      interest.toLowerCase().includes(item.keyword),
    );
    return match?.icon ?? Sparkles;
  };

  return (
    <SectionShell
      id="interests"
      title="Interests & Hobbies"
      subtitle="Creativity and curiosity outside coding that influence how I design and build."
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-40px' }}
        className="grid gap-4 md:grid-cols-2"
      >
        {portfolioConfig.interests.map((interest) => {
          const Icon = pickIcon(interest);
          return (
            <motion.div key={interest} variants={scaleIn}>
              <Card className="group transition-all duration-300 hover:-translate-y-0.5">
                <div className="flex items-start gap-3">
                  <span className="surface-subtle inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-md text-foreground">
                    <Icon className="h-4 w-4 shrink-0" />
                  </span>
                  <p className="font-display text-sm leading-relaxed text-foreground">
                    {interest}
                  </p>
                </div>
              </Card>
            </motion.div>
          );
        })}
      </motion.div>
    </SectionShell>
  );
}
