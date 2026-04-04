'use client';

import { useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import { portfolioConfig } from '@/config/portfolio';

export function EasterEgg(): React.JSX.Element {
  const [, setBuffer] = useState<string[]>([]);
  const [open, setOpen] = useState(false);

  const sequence = useMemo(() => portfolioConfig.easterEgg.sequence, []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent): void => {
      setBuffer((prev) => {
        const next = [...prev, event.key].slice(-sequence.length);
        if (next.join('|').toLowerCase() === sequence.join('|').toLowerCase()) {
          setOpen(true);
          window.setTimeout(() => setOpen(false), 2600);
          return [];
        }
        return next;
      });
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [sequence]);

  return (
    <AnimatePresence>
      {open ? (
        <motion.aside
          className="fixed bottom-4 right-4 z-80 max-w-xs rounded-md border border-neonAmber/60 bg-card p-3 font-pixel text-sm text-neonAmber"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
        >
          {portfolioConfig.easterEgg.message}
        </motion.aside>
      ) : null}
    </AnimatePresence>
  );
}
