'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PORTFOLIO_LIVE_URL } from '@/config/site';

type BootLog = {
  text: string;
  tone?: 'normal' | 'success' | 'warn' | 'meta';
};

const bootLogs: BootLog[] = [
  { text: 'PS D:\\portfolio> ssh deploy@172.31.9.42', tone: 'meta' },
  { text: "deploy@172.31.9.42's password: ********", tone: 'meta' },
  { text: 'deploy@vm-prod:~$ cd /var/www/portfolio-shell', tone: 'meta' },
  { text: 'deploy@vm-prod:/var/www/portfolio-shell$ npm i', tone: 'meta' },
  { text: 'added packages, audited dependencies', tone: 'normal' },
  { text: 'found 0 vulnerabilities', tone: 'success' },
  {
    text: 'deploy@vm-prod:/var/www/portfolio-shell$ npm run build && pm2 restart portfolio-shell',
    tone: 'meta',
  },
  { text: '[ok] build complete | service restarted', tone: 'success' },
  { text: `Production endpoint: ${PORTFOLIO_LIVE_URL}`, tone: 'success' },
];

export function BootSequence({
  onDone,
}: {
  onDone: () => void;
}): React.JSX.Element {
  const [index, setIndex] = useState(0);
  const [dots, setDots] = useState('.');
  const logRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (index >= bootLogs.length) {
      const doneTimer = window.setTimeout(onDone, 280);
      return () => window.clearTimeout(doneTimer);
    }

    const timer = window.setTimeout(() => setIndex((v) => v + 1), 140);
    return () => window.clearTimeout(timer);
  }, [index, onDone]);

  useEffect(() => {
    const blink = window.setInterval(() => {
      setDots((prev) => (prev.length >= 3 ? '.' : `${prev}.`));
    }, 320);
    return () => window.clearInterval(blink);
  }, []);

  useEffect(() => {
    if (!logRef.current) return;
    logRef.current.scrollTo({
      top: logRef.current.scrollHeight,
      behavior: 'smooth',
    });
  }, [index, dots]);

  const toneClass = (tone: BootLog['tone']): string => {
    if (tone === 'success') return 'text-neonGreen';
    if (tone === 'warn') return 'text-neonAmber';
    if (tone === 'meta') return 'text-neonCyan';
    return 'text-foreground';
  };

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-70 flex items-center justify-center bg-background"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className="w-[min(92vw,760px)] rounded-xl border border-neonCyan/35 bg-card/90 p-5 shadow-neon">
          <div className="mb-3 flex items-center justify-between border-b border-border/70 pb-2">
            <p className="font-pixel text-sm text-neonCyan">
              portfolio-shell installer v2.6.0
            </p>
            <p className="font-pixel text-xs text-muted-foreground">
              {Math.min(100, Math.round((index / bootLogs.length) * 100))}%
            </p>
          </div>
          <div
            ref={logRef}
            className="terminal-scrollbar h-64 overflow-y-auto rounded border border-border bg-muted/30 p-3 font-pixel text-[15px] leading-6"
          >
            {bootLogs.slice(0, index).map((line, i) => (
              <p key={`${line.text}-${i}`} className={toneClass(line.tone)}>
                {line.text}
              </p>
            ))}
            {index < bootLogs.length && (
              <p className="animate-pulse text-neonCyan">installing{dots}</p>
            )}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
