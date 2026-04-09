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
    if (tone === 'success') return 'text-[#8ee48e]';
    if (tone === 'warn') return 'text-[#f5c16c]';
    if (tone === 'meta') return 'text-[#7dd3fc]';
    return 'text-[#e6e6e6]';
  };

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-70 flex items-center justify-center bg-background"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className="w-[min(92vw,760px)] overflow-hidden rounded-2xl border border-black/25 bg-[#f6f6f7] p-0 shadow-[0_18px_45px_rgba(0,0,0,0.28)] dark:border-black/50 dark:bg-[#2a2a2c]">
          <div className="relative flex h-11 items-center border-b border-black/10 bg-[#e9e9ec] px-4 dark:border-white/10 dark:bg-[#3a3a3d]">
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-[#ff5f57] shadow-inner shadow-black/20" />
              <span className="h-3 w-3 rounded-full bg-[#febc2e] shadow-inner shadow-black/20" />
              <span className="h-3 w-3 rounded-full bg-[#28c840] shadow-inner shadow-black/20" />
            </div>
            <p className="pointer-events-none absolute left-1/2 -translate-x-1/2 text-xs font-medium tracking-wide text-[#4f4f52] dark:text-[#d4d4d6]">
              zsh - installer@macbook-pro - ~
            </p>
            <p className="ml-auto text-xs font-medium text-[#66666a] dark:text-[#c8c8cc]">
              {Math.min(100, Math.round((index / bootLogs.length) * 100))}%
            </p>
          </div>
          <div
            ref={logRef}
            className="terminal-scrollbar h-64 overflow-y-auto bg-[#1e1f22] px-4 py-3 font-mono text-sm leading-6 text-[#f3f3f3]"
          >
            {bootLogs.slice(0, index).map((line, i) => (
              <p key={`${line.text}-${i}`} className={toneClass(line.tone)}>
                {line.text}
              </p>
            ))}
            {index < bootLogs.length && (
              <p className="animate-pulse text-[#7dd3fc]">installing{dots}</p>
            )}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
