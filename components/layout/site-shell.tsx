'use client';

import { type ReactNode, useCallback, useState } from 'react';
import { motion } from 'framer-motion';

import { easing } from '@/components/common/motion';
import { BootSequence } from '@/components/effects/boot-sequence';
import { CursorGlow } from '@/components/effects/cursor-glow';
import { ScrollToTopButton } from '@/components/layout/scroll-to-top-button';
import { TopNav } from '@/components/layout/top-nav';
import { ThemeProvider } from '@/components/providers/theme-provider';

type SiteShellProps = {
  children: ReactNode;
};

export function SiteShell({ children }: SiteShellProps): React.JSX.Element {
  const [bootDone, setBootDone] = useState(false);
  const onBootDone = useCallback(() => {
    setBootDone(true);
  }, []);

  return (
    <ThemeProvider>
      <div className="relative">
        <CursorGlow />
        {!bootDone ? <BootSequence onDone={onBootDone} /> : null}
        <TopNav />
        <ScrollToTopButton />
        <motion.main
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: bootDone ? 1 : 0, y: bootDone ? 0 : 18 }}
          transition={{ duration: 0.6, ease: easing }}
          className="relative z-10"
        >
          {children}
        </motion.main>
      </div>
    </ThemeProvider>
  );
}
