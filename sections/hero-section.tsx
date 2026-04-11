'use client';

import { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { Clock3, Globe, Mail, MapPin, UserRound } from 'lucide-react';

import { easing } from '@/components/common/motion';
import { portfolioConfig } from '@/config/portfolio';
import { PORTFOLIO_LIVE_URL } from '@/config/site';
import { renderTerminalTokens } from '@/components/terminal/terminal-highlight';
import { Button } from '@/components/ui/button';

export function HeroSection(): React.JSX.Element {
  const { greeting, tagline, rotatingLines, ctaPrimary, ctaSecondary } =
    portfolioConfig.hero;
  const [lineIndex, setLineIndex] = useState(0);
  const [typed, setTyped] = useState('');
  const [avatarSrc, setAvatarSrc] = useState(
    portfolioConfig.profile.avatar || '/avatar.svg'
  );
  const indiaTimeFormatter = useMemo(
    () =>
      new Intl.DateTimeFormat('en-IN', {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      }),
    []
  );
  const [indiaTime, setIndiaTime] = useState('');
  const siteHost = useMemo(() => {
    try {
      return new URL(PORTFOLIO_LIVE_URL).host;
    } catch {
      return PORTFOLIO_LIVE_URL;
    }
  }, []);
  const currentTelavergeRole = useMemo(() => {
    const currentRole = portfolioConfig.experience.find(
      (item) =>
        item.subtitle.toLowerCase().includes('telaverge') &&
        item.period.toLowerCase().includes('present')
    );

    return (
      currentRole ?? {
        title: 'Software Engineer - R&D',
        subtitle: 'Telaverge Communications',
        period: 'Present',
        location: 'Bengaluru, Karnataka, India',
        description: '',
      }
    );
  }, []);
  const locationLabel = useMemo(
    () =>
      currentTelavergeRole.location?.toLowerCase().includes('bengaluru')
        ? 'Bengaluru, India'
        : currentTelavergeRole.location || 'Bengaluru, India',
    [currentTelavergeRole]
  );
  const locationMapUrl = useMemo(
    () =>
      `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
        locationLabel
      )}`,
    [locationLabel]
  );
  const profileRows = useMemo(
    () => [
      {
        key: 'location',
        icon: MapPin,
        value: locationLabel,
        href: locationMapUrl,
      },
      { key: 'site', icon: Globe, value: siteHost, href: PORTFOLIO_LIVE_URL },
      {
        key: 'email',
        icon: Mail,
        value: portfolioConfig.profile.email,
        href: `mailto:${portfolioConfig.profile.email}`,
      },
      {
        key: 'time',
        icon: Clock3,
        value: indiaTime ? `${indiaTime} IST` : '--:--:-- IST',
      },
      { key: 'pronouns', icon: UserRound, value: 'he/him' },
    ],
    [indiaTime, locationLabel, locationMapUrl, siteHost]
  );
  const leftRows = profileRows.slice(0, 3);
  const rightRows = profileRows.slice(3);

  const commandLines = useMemo(
    () => rotatingLines.map((line) => `echo "${line}"`),
    [rotatingLines]
  );

  const currentLine = useMemo(
    () => commandLines[lineIndex],
    [lineIndex, commandLines]
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
          () => setLineIndex((prev) => (prev + 1) % commandLines.length),
          1400
        );
      }
    }, 40);

    return () => window.clearInterval(timer);
  }, [commandLines.length, currentLine]);

  useEffect(() => {
    const updateIndiaTime = () => {
      setIndiaTime(indiaTimeFormatter.format(new Date()));
    };

    updateIndiaTime();
    const timer = window.setInterval(updateIndiaTime, 1000);
    return () => window.clearInterval(timer);
  }, [indiaTimeFormatter]);

  return (
    <section
      id="home"
      className="relative scroll-mt-24 px-4 pb-16 pt-10 md:px-6 md:pb-16 md:pt-14"
    >
      <div className="mx-auto grid w-full max-w-6xl gap-8 lg:grid-cols-[1.2fr_.8fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: easing }}
        >
          <div className="surface-subtle inline-flex items-center gap-3 rounded-full px-4 py-2">
            <span className="h-2 w-2 rounded-full bg-foreground/80" />
            <p className="text-xs uppercase tracking-[0.14em] text-muted-foreground">
              {greeting.replace('>', '').trim()}
            </p>
          </div>
          <h1 className="mt-5 font-display text-5xl leading-tight md:text-7xl">
            <span className="text-foreground">
              {portfolioConfig.profile.name}
            </span>
            <span className="mt-3 block text-xl font-medium text-muted-foreground md:text-3xl">
              {portfolioConfig.profile.role}
            </span>
          </h1>
          <p className="mt-5 max-w-xl text-balance text-muted-foreground">
            {tagline}
          </p>

          <div className="terminal-shell hero-terminal-shell mt-8 max-w-xl overflow-hidden rounded-2xl p-0">
            <div className="terminal-chrome relative flex h-10 items-center px-4">
              <div className="flex items-center gap-2">
                <span className="terminal-dot h-3 w-3 rounded-full" />
                <span className="terminal-dot h-3 w-3 rounded-full opacity-80" />
                <span className="terminal-dot h-3 w-3 rounded-full opacity-60" />
              </div>
              <p className="terminal-text-muted pointer-events-none absolute left-1/2 -translate-x-1/2 text-xs font-medium tracking-wide">
                zsh - live-focus@macbook-pro - ~
              </p>
            </div>
            <div className="terminal-screen terminal-text flex min-h-12 items-start px-4 py-3 font-mono text-sm md:text-base">
              <span className="terminal-token-prompt mr-2 shrink-0">$</span>
              <span className="min-w-0 flex-1 whitespace-pre-wrap break-words">
                {renderTerminalTokens(typed, `hero-terminal-${lineIndex}`)}
                <span className="terminal-text-accent ml-1 animate-pulse">|</span>
              </span>
            </div>
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
          transition={{ delay: 0.12, duration: 0.62, ease: easing }}
          className="surface-panel rounded-2xl p-6"
        >
          <div className="mb-5 flex items-center gap-3">
            <img
              src={avatarSrc}
              alt={`${portfolioConfig.profile.name} avatar`}
              width={56}
              height={56}
              className="rounded-md border border-border object-cover"
              onError={() => setAvatarSrc('/avatar.svg')}
            />
            <div>
              <p className="font-display text-2xl">{portfolioConfig.profile.name}</p>
              <p className="text-xs text-muted-foreground/90">
                {portfolioConfig.profile.role} @ Telaverge Communications
              </p>
            </div>
          </div>
          <div className="grid gap-x-8 gap-y-2.5 text-sm sm:grid-cols-2">
            <dl className="space-y-2.5">
              {leftRows.map((item) => (
                <div key={item.key} className="flex items-center gap-3">
                  <dt className="surface-subtle inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-lg text-muted-foreground">
                    <item.icon className="h-4 w-4" />
                  </dt>
                  <dd className="break-words font-medium text-foreground/90">
                    {item.href ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noreferrer"
                        className="underline-offset-4 decoration-1 hover:underline"
                      >
                        {item.value}
                      </a>
                    ) : (
                      item.value
                    )}
                  </dd>
                </div>
              ))}
            </dl>
            <dl className="space-y-2.5">
              {rightRows.map((item) => (
                <div key={item.key} className="flex items-center gap-3">
                  <dt className="surface-subtle inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-lg text-muted-foreground">
                    <item.icon className="h-4 w-4" />
                  </dt>
                  <dd className="break-words font-medium text-foreground/90">
                    {item.href ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noreferrer"
                        className="underline-offset-4 decoration-1 hover:underline"
                      >
                        {item.value}
                      </a>
                    ) : (
                      item.value
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </motion.aside>
      </div>
    </section>
  );
}
