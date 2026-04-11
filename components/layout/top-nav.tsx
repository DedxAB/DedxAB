'use client';

import { useEffect, useMemo, useState } from 'react';
import { Github, Instagram, Linkedin, Moon, Sun } from 'lucide-react';
import { motion } from 'framer-motion';
import { SiX } from 'react-icons/si';

import { easing } from '@/components/common/motion';
import { portfolioConfig } from '@/config/portfolio';
import { useTheme } from '@/components/providers/theme-provider';
import { GlassNavbar } from '@/components/ui/glass-navbar';

const iconMap: Record<string, React.JSX.Element> = {
  GitHub: <Github className="h-4 w-4" />,
  LinkedIn: <Linkedin className="h-4 w-4" />,
  X: <SiX className="h-4 w-4" />,
  Instagram: <Instagram className="h-4 w-4" />,
};

export function TopNav(): React.JSX.Element {
  const { theme, setTheme } = useTheme();
  const [activeHref, setActiveHref] = useState(
    portfolioConfig.navigation[0]?.href ?? '#home'
  );
  const [isScrolled, setIsScrolled] = useState(false);

  const quickSocials = useMemo(
    () => portfolioConfig.socialLinks.slice(0, 4),
    []
  );

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    if (window.location.hash) {
      setActiveHref(window.location.hash);
    }

    const handleHashChange = () => {
      if (window.location.hash) {
        setActiveHref(window.location.hash);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const sections = portfolioConfig.navigation
      .map((item) => item.href.replace('#', ''))
      .filter(Boolean)
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section));

    if (!sections.length) {
      return;
    }

    let raf = 0;
    const updateActiveFromScroll = () => {
      const marker = window.scrollY + 140;
      let nextId = sections[0]?.id;

      for (const section of sections) {
        if (section.offsetTop <= marker) {
          nextId = section.id;
        }
      }

      if (nextId) {
        setActiveHref(`#${nextId}`);
      }
    };

    const onScroll = () => {
      if (raf) return;
      raf = window.requestAnimationFrame(() => {
        updateActiveFromScroll();
        raf = 0;
      });
    };

    updateActiveFromScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);

    return () => {
      if (raf) window.cancelAnimationFrame(raf);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const onScroll = () => {
      setIsScrolled(window.scrollY > 12);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <GlassNavbar scrolled={isScrolled}>
      <motion.div
        initial={{ y: -18, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.55, ease: easing }}
        className="px-4 md:px-6"
      >
        <div className="mx-auto w-full max-w-6xl py-3">
          <div className="flex items-center justify-between gap-4">
            <a
              href="#home"
              className="group inline-flex items-center"
              aria-label={portfolioConfig.profile.name}
            >
              <span className="font-mono text-base tracking-tight text-foreground sm:text-lg">
                {'<'}
                <span className="font-semibold">{portfolioConfig.profile.name}</span>
                {' />'}
              </span>
            </a>

            <div className="flex items-center gap-3">
              <div className="hidden items-center gap-3 sm:flex">
                {quickSocials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={social.label}
                    className="text-muted-foreground hover:text-foreground"
                  >
                    {iconMap[social.label] ?? social.label}
                  </a>
                ))}
              </div>
              <button
                type="button"
                aria-label="Toggle theme"
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="control-button icon-control-button inline-flex items-center justify-center rounded-full text-muted-foreground hover:text-foreground"
              >
                {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </button>
            </div>
          </div>

          <div className="mt-3">
            <div className="header-nav-surface mx-auto w-full max-w-fit overflow-x-auto rounded-full px-4 py-2">
              <nav
                aria-label="Main navigation"
                className="flex min-w-max items-center gap-6"
              >
                {portfolioConfig.navigation.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setActiveHref(item.href)}
                    className="relative inline-flex items-center justify-center rounded-full px-3 py-2 text-[0.68rem] uppercase tracking-[0.16em]"
                  >
                    {activeHref === item.href ? (
                      <motion.span
                        layoutId="active-nav-pill"
                        className="nav-active-pill absolute inset-0 -z-10 rounded-full"
                        transition={{ type: 'tween', ease: [0.22, 1, 0.36, 1], duration: 0.24 }}
                      />
                    ) : null}
                    <span
                      className={
                        activeHref === item.href
                          ? 'font-medium text-foreground'
                          : 'text-muted-foreground hover:text-foreground'
                      }
                    >
                      {item.label}
                    </span>
                  </a>
                ))}
              </nav>
            </div>
          </div>
        </div>
      </motion.div>
    </GlassNavbar>
  );
}
