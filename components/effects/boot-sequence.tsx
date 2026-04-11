'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PORTFOLIO_LIVE_URL } from '@/config/site';
import { renderTerminalTokens } from '@/components/terminal/terminal-highlight';

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
    if (tone === 'success') return 'terminal-text-strong';
    if (tone === 'warn') return 'terminal-text-muted';
    if (tone === 'meta') return 'terminal-text';
    return 'terminal-text';
  };

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-70 flex items-center justify-center bg-background"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className="terminal-shell w-[min(92vw,760px)] overflow-hidden rounded-2xl p-0">
          <div className="terminal-chrome relative flex h-11 items-center px-4">
            <div className="flex items-center gap-2">
              <span className="terminal-dot h-3 w-3 rounded-full" />
              <span className="terminal-dot h-3 w-3 rounded-full opacity-80" />
              <span className="terminal-dot h-3 w-3 rounded-full opacity-60" />
            </div>
            <p className="terminal-text-muted pointer-events-none absolute left-1/2 -translate-x-1/2 text-xs font-medium tracking-wide">
              zsh - installer@macbook-pro - ~
            </p>
            <p className="terminal-text-muted ml-auto text-xs font-medium">
              {Math.min(100, Math.round((index / bootLogs.length) * 100))}%
            </p>
          </div>
          <div
            ref={logRef}
            className="terminal-screen terminal-scrollbar h-64 overflow-y-auto px-4 py-3 font-mono text-sm leading-6"
          >
            {bootLogs.slice(0, index).map((line, i) => (
              <p key={`${line.text}-${i}`} className={toneClass(line.tone)}>
                {line.tone === 'meta'
                  ? renderTerminalTokens(line.text, `boot-line-${i}`)
                  : line.text}
              </p>
            ))}
            {index < bootLogs.length && (
              <p className="terminal-text-accent animate-pulse">installing{dots}</p>
            )}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
