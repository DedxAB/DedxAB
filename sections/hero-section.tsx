'use client';

import { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';

import { portfolioConfig } from '@/config/portfolio';
import { Button } from '@/components/ui/button';

export function HeroSection(): React.JSX.Element {
  const {
    greeting,
    tagline,
    rotatingLines,
    ctaPrimary,
    ctaSecondary,
    systemStats,
  } = portfolioConfig.hero;
  const [lineIndex, setLineIndex] = useState(0);
  const [typed, setTyped] = useState('');
  const [avatarSrc, setAvatarSrc] = useState(
    portfolioConfig.profile.avatar || '/avatar.svg'
  );

  const currentLine = useMemo(
    () => rotatingLines[lineIndex],
    [lineIndex, rotatingLines]
  );

  useEffect(() => {
    setTyped('');
    let i = 0;
    const timer = window.setInterval(() => {
      i += 1;
      setTyped(currentLine.slice(0, i));
      if (i >= currentLine.length) {
        window.clearInterval(timer);
        window.setTimeout(
          () => setLineIndex((prev) => (prev + 1) % rotatingLines.length),
          1400
        );
      }
    }, 40);

    return () => window.clearInterval(timer);
  }, [currentLine, rotatingLines.length]);

  return (
    <section
      id="home"
      className="relative overflow-hidden px-4 pb-16 pt-10 md:px-6 md:pb-16 md:pt-14"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_20%,rgba(156,201,255,.22),transparent_40%),radial-gradient(circle_at_85%_18%,rgba(120,145,220,.16),transparent_38%)]"
      />
      <div className="mx-auto grid w-full max-w-6xl gap-8 lg:grid-cols-[1.2fr_.8fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
        >
          <div className="inline-flex items-center gap-3 rounded-full border border-neonCyan/30 bg-card/75 px-3 py-1.5 shadow-neon">
            <span className="h-2 w-2 rounded-full bg-neonCyan animate-pulseGlow" />
            <p className="font-pixel text-xs uppercase tracking-wide text-neonGreen">
              {greeting}
            </p>
          </div>
          <h1 className="mt-3 font-display text-4xl leading-tight md:text-6xl">
            <span className="text-foreground">
              {portfolioConfig.profile.name}
            </span>
            <span className="mt-2 block font-pixel text-xl text-neonCyan md:text-3xl">
              {portfolioConfig.profile.role}
            </span>
          </h1>
          <p className="mt-4 max-w-xl text-balance text-muted-foreground">
            {tagline}
          </p>

          <div className="mt-6 min-h-8 rounded-md border border-neonAmber/30 bg-card/50 px-3 py-2 font-pixel text-base text-neonAmber md:text-lg">
            {typed}
            <span className="ml-1 animate-pulse">|</span>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects">
              <Button>{ctaPrimary}</Button>
            </a>
            <a href="#contact">
              <Button variant="secondary">{ctaSecondary}</Button>
            </a>
          </div>
        </motion.div>

        <motion.aside
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.15, duration: 0.6 }}
          className="relative overflow-hidden rounded-2xl border border-neonCyan/40 bg-card/80 p-6 shadow-panel"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-linear-to-b from-neonCyan/20 to-transparent"
          />
          <div className="mb-4 flex items-center gap-3">
            <img
              src={avatarSrc}
              alt={`${portfolioConfig.profile.name} avatar`}
              width={56}
              height={56}
              className="rounded-md border border-neonCyan/40 object-cover"
              onError={() => setAvatarSrc('/avatar.svg')}
            />
            <div>
              <p className="font-pixel text-neonCyan text-xl">
                {portfolioConfig.profile.name}
              </p>
              <p className="text-xs text-muted-foreground">
                {portfolioConfig.profile.role}
              </p>
            </div>
          </div>
          <p className="font-pixel text-neonCyan">SYSTEM STATUS</p>
          <dl className="mt-4 space-y-2 text-sm">
            {systemStats.map((item, index) => (
              <div
                key={item.label}
                className="flex items-center justify-between rounded-md border border-neonCyan/20 bg-background/35 px-3 py-2"
              >
                <dt className="text-muted-foreground">{item.label}</dt>
                <dd
                  className={
                    index === 0 ? 'font-pixel text-neonCyan' : 'font-medium'
                  }
                >
                  {item.value}
                </dd>
              </div>
            ))}
          </dl>
        </motion.aside>
      </div>
    </section>
  );
}
