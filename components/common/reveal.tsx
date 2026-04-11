'use client';

import type { ReactNode } from 'react';
import { motion } from 'framer-motion';

import { easing } from '@/components/common/motion';
import { cn } from '@/lib/utils';

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
};

export function Reveal({
  children,
  className,
  delay = 0,
  y = 24,
}: RevealProps): React.JSX.Element {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-72px' }}
      transition={{ duration: 0.7, ease: easing, delay }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
