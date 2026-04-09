'use client';

import { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { Clock3, Globe, Mail, MapPin, UserRound } from 'lucide-react';

import { portfolioConfig } from '@/config/portfolio';
import { PORTFOLIO_LIVE_URL } from '@/config/site';
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

          <div className="mt-6 max-w-xl overflow-hidden rounded-xl border border-black/25 bg-[#f6f6f7] p-0 shadow-[0_12px_28px_rgba(0,0,0,0.22)] dark:border-black/50 dark:bg-[#2a2a2c]">
            <div className="relative flex h-8 items-center border-b border-black/10 bg-[#e9e9ec] px-3 dark:border-white/10 dark:bg-[#3a3a3d]">
              <div className="flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
              </div>
              <p className="pointer-events-none absolute left-1/2 -translate-x-1/2 text-[11px] font-medium tracking-wide text-[#545458] dark:text-[#d1d1d4]">
                zsh
              </p>
            </div>
            <div className="flex min-h-10 items-center bg-[#1e1f22] px-3 py-2 font-mono text-sm text-[#e6e6e6] md:text-base">
              <span className="mr-2 text-[#7dd3fc]">$</span>
              <span className="truncate">
                {typed}
                <span className="ml-1 animate-pulse text-[#7dd3fc]">|</span>
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
          transition={{ delay: 0.15, duration: 0.6 }}
          className="rounded-2xl border border-border/70 bg-card/90 p-5 shadow-panel"
        >
          <div className="mb-5 flex items-center gap-3">
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
              <p className="text-xs text-muted-foreground/90">
                {portfolioConfig.profile.role} @ Telaverge Communications
              </p>
            </div>
          </div>
          <div className="grid gap-x-8 gap-y-2.5 text-sm sm:grid-cols-2">
            <dl className="space-y-2.5">
              {leftRows.map((item) => (
                <div key={item.key} className="flex items-center gap-3">
                  <dt className="inline-flex h-6 w-6 items-center justify-center rounded-lg border border-border/70 bg-background/60 text-muted-foreground shrink-0">
                    <item.icon className="h-4 w-4" />
                  </dt>
                  <dd className="font-medium text-foreground/90 wrap-break-word">
                    {item.href ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noreferrer"
                        className="no-underline underline-offset-3 decoration-1 transition-colors hover:text-neonCyan hover:underline"
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
                  <dt className="inline-flex h-6 w-6 items-center justify-center rounded-lg border border-border/70 bg-background/60 text-muted-foreground shrink-0">
                    <item.icon className="h-4 w-4" />
                  </dt>
                  <dd className="font-medium text-foreground/90 wrap-break-word">
                    {item.href ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noreferrer"
                        className="no-underline underline-offset-3 decoration-1 transition-colors hover:text-neonCyan hover:underline"
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
