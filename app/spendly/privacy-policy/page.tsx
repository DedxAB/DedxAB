'use client';

import { easing } from '@/components/common/motion';
import { portfolioConfig } from '@/config/portfolio';
import { PORTFOLIO_LIVE_URL } from '@/config/site';
import { SPENDLY_REPO_URL } from '@/config/spendly';

import { AnimatePresence, motion, useScroll, useSpring } from 'framer-motion';
import { useCallback, useEffect, useRef, useState } from 'react';
import {
  ChevronDownIcon,
  ChevronUpIcon,
  ClockIcon,
  DatabaseIcon,
  FileIcon,
  GridIcon,
  KeyIcon,
  MailIcon,
  ShareIcon,
  ShieldIcon,
  UsersIcon,
} from './components/icons';

// ─── Data ────────────────────────────────────────────────────────
const sections = [
  {
    id: 'information',
    icon: <DatabaseIcon />,
    title: 'Information We Collect',
  },
  { id: 'google-access', icon: <KeyIcon />, title: 'Google Account Access' },
  { id: 'data-sharing', icon: <ShareIcon />, title: 'Data Sharing' },
  { id: 'data-security', icon: <ShieldIcon />, title: 'Data Security' },
  { id: 'user-control', icon: <UsersIcon />, title: 'User Control' },
  { id: 'third-party', icon: <GridIcon />, title: 'Third-Party Services' },
  { id: 'changes', icon: <FileIcon />, title: 'Changes to This Policy' },
];

// ─── Page ────────────────────────────────────────────────────────
export default function PrivacyPolicyPage() {
  useEffect(() => { document.title = 'Spendly Privacy Policy'; }, []);

  const [activeSection, setActiveSection] = useState(sections[0].id);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll();
  const springProgress = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 30,
  });

  const scrollTo = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setMobileNavOpen(false);
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);

      const offsets = sections.map((s) => {
        const el = document.getElementById(s.id);
        return { id: s.id, top: el?.getBoundingClientRect().top ?? 0 };
      });

      const visible = offsets
        .filter((o) => o.top < 160)
        .sort((a, b) => b.top - a.top);
      if (visible.length > 0) setActiveSection(visible[0].id);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const readingTime = Math.ceil(
    sections.reduce((acc, s) => {
      const texts: Record<string, string> = {
        information:
          'Expense records Budget information Bill reminders Application preferences If you choose to use Google Backup',
        'google-access':
          'Spendly uses Google Sign-In to authenticate users for backup and restore functionality Spendly only requests access to the Google Drive AppData folder',
        'data-sharing':
          'Spendly does not sell rent share or distribute your personal data to third parties',
        'data-security':
          'Spendly is designed with privacy and security in mind User data is stored locally on the users device',
        'user-control':
          'Users have full control over their data and may Delete backup data at any time Disconnect their Google account from Spendly',
        'third-party':
          'Spendly uses the following third-party services Google Sign-In Google Drive API',
        changes:
          'This Privacy Policy may be updated from time to time Any changes will be posted on this page with an updated effective date',
      };
      return acc + (texts[s.id]?.split(' ').length ?? 0);
    }, 0) / 200,
  );

  const content: Record<string, React.ReactNode> = {
    information: (
      <>
        <p>
          Spendly may store the following information locally on your device:
        </p>
        <ul className="mt-4 space-y-2">
          {[
            'Expense records',
            'Budget information',
            'Bill reminders',
            'Application preferences',
          ].map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-emerald-500" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="mt-6">
          If you choose to use Google Backup & Restore features, backup data is
          stored in your personal Google Drive account using Google Drive
          AppData storage.
        </p>
      </>
    ),
    'google-access': (
      <>
        <p>
          Spendly uses Google Sign-In to authenticate users for backup and
          restore functionality.
        </p>
        <p className="mt-4">
          Spendly only requests access to the Google Drive AppData folder. This
          allows the application to create, manage, and restore private backup
          files associated with Spendly.
        </p>
        <div className="mt-6 rounded-xl border border-emerald-200 bg-emerald-50 p-5">
          <div className="flex items-start gap-3">
            <span className="mt-0.5 shrink-0 text-emerald-600">
              <ShieldIcon />
            </span>
            <p className="font-medium text-emerald-900">
              Spendly does not access, read, or modify any other files in your
              Google Drive account.
            </p>
          </div>
        </div>
      </>
    ),
    'data-sharing': (
      <p>
        Spendly does not sell, rent, share, or distribute your personal data to
        third parties.
      </p>
    ),
    'data-security': (
      <>
        <p>
          Spendly is designed with privacy and security in mind. User data is
          stored locally on the user&rsquo;s device. Google account
          authentication is securely handled using Google&rsquo;s official
          authentication systems.
        </p>
        <p className="mt-4">
          Users are responsible for protecting access to their own devices and
          Google accounts.
        </p>
      </>
    ),
    'user-control': (
      <>
        <p>Users have full control over their data and may:</p>
        <ul className="mt-4 space-y-2">
          {[
            'Delete backup data at any time',
            'Disconnect their Google account from Spendly',
            'Uninstall the application to remove locally stored data',
          ].map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-emerald-500" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </>
    ),
    'third-party': (
      <>
        <p>Spendly uses the following third-party services:</p>
        <ul className="mt-4 space-y-2">
          {['Google Sign-In', 'Google Drive API'].map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-emerald-500" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </>
    ),
    changes: (
      <p>
        This Privacy Policy may be updated from time to time. Any changes will
        be posted on this page with an updated effective date.
      </p>
    ),
  };

  return (
    <main className="min-h-screen bg-[#fafafa] text-neutral-900">
      {/* Scroll Progress */}
      <motion.div
        className="fixed inset-x-0 top-0 z-50 h-0.5 origin-left bg-gradient-to-r from-emerald-500 to-teal-400"
        style={{ scaleY: springProgress, scaleX: scrollYProgress }}
      />

      {/* ─── Nav ────────────────────────────────────────────────── */}
      <motion.nav
        ref={navRef}
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: easing }}
        className="sticky top-0 z-40 border-b border-neutral-200 bg-white/80 backdrop-blur-lg"
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a
            href="/spendly"
            className="font-display text-lg font-semibold text-neutral-900 transition hover:text-emerald-600"
          >
            Spendly
          </a>
          <div className="hidden items-center gap-6 text-sm text-neutral-500 sm:flex">
            <a href="/spendly" className="transition hover:text-emerald-600">
              App
            </a>
            <a
              href={SPENDLY_REPO_URL}
              target="_blank"
              className="transition hover:text-emerald-600"
            >
              GitHub
            </a>
            <a
              href={`${SPENDLY_REPO_URL}/releases/latest`}
              target="_blank"
              className="rounded-lg bg-neutral-900 px-3.5 py-1.5 text-sm font-medium text-white transition hover:bg-neutral-800"
            >
              Download
            </a>
          </div>
          <button
            onClick={() => setMobileNavOpen(!mobileNavOpen)}
            className="flex size-9 items-center justify-center rounded-lg border border-neutral-200 text-neutral-600 sm:hidden"
            aria-label="Toggle menu"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="size-5 shrink-0"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              {mobileNavOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="4" y1="6" x2="20" y2="6" />
                  <line x1="4" y1="12" x2="20" y2="12" />
                  <line x1="4" y1="18" x2="20" y2="18" />
                </>
              )}
            </svg>
          </button>
        </div>
        <AnimatePresence>
          {mobileNavOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden border-t border-neutral-200 bg-white sm:hidden"
            >
              <div className="space-y-1 px-6 py-4">
                <a
                  href="/spendly"
                  className="block rounded-lg px-3 py-2 text-sm text-neutral-600 transition hover:bg-neutral-100"
                >
                  App
                </a>
                <a
                  href={SPENDLY_REPO_URL}
                  target="_blank"
                  className="block rounded-lg px-3 py-2 text-sm text-neutral-600 transition hover:bg-neutral-100"
                >
                  GitHub
                </a>
                <a
                  href={`${SPENDLY_REPO_URL}/releases/latest`}
                  target="_blank"
                  className="block rounded-lg px-3 py-2 text-sm font-medium text-emerald-600 transition hover:bg-emerald-50"
                >
                  Download APK
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* ─── Hero ───────────────────────────────────────────────── */}
      <section className="relative overflow-hidden pb-10 sm:pb-14">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,#ecfdf5,transparent_60%),radial-gradient(ellipse_at_bottom_left,#f0fdf4,transparent_50%)]" />
        <div className="absolute -left-20 -top-20 size-72 rounded-full bg-emerald-400/10 blur-3xl" />
        <div className="absolute -bottom-20 -right-20 size-72 rounded-full bg-teal-400/10 blur-3xl" />

        <div className="relative mx-auto max-w-6xl px-6 pt-16 sm:pt-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: easing }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1.5 text-sm font-medium text-emerald-700">
              <ShieldIcon />
              Privacy & Security
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: easing, delay: 0.1 }}
            className="mt-6 font-display text-[2.5rem] font-semibold leading-[1.1] tracking-tight text-neutral-950 sm:text-5xl"
          >
            Spendly Privacy Policy
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: easing, delay: 0.2 }}
            className="mt-4 flex flex-wrap items-center gap-3 text-sm"
          >
            <span className="inline-flex items-center gap-1.5 rounded-lg border border-neutral-200 bg-white px-3 py-1 text-xs font-semibold text-neutral-700 shadow-sm">
              Effective: May 14, 2026
            </span>
            <span className="text-neutral-300">/</span>
            <span className="text-neutral-500">Updated June 2026</span>
            <span className="text-neutral-300">/</span>
            <span className="inline-flex items-center gap-1.5 text-neutral-500">
              <ClockIcon />
              {readingTime} min read
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: easing, delay: 0.3 }}
            className="mt-6 max-w-2xl text-lg leading-8 text-neutral-600"
          >
            Spendly respects your privacy. This Privacy Policy explains how
            Spendly handles your data when you use the application and its
            backup & restore features.
          </motion.p>
        </div>
      </section>

      {/* ─── Key Takeaways ──────────────────────────────────────── */}
      <div className="mx-auto max-w-6xl px-6 mb-14">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: easing, delay: 0.4 }}
          className="rounded-2xl border border-emerald-200 bg-gradient-to-r from-emerald-50 to-white p-6 shadow-sm"
        >
          <div className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.1em] text-emerald-700">
            <ShieldIcon />
            At a glance
          </div>
          <div className="mt-4 grid gap-4 sm:grid-cols-3">
            {[
              {
                icon: <DatabaseIcon />,
                text: 'All data stored locally on your device',
              },
              {
                icon: <ShareIcon />,
                text: 'No data sold or shared with third parties',
              },
              {
                icon: <KeyIcon />,
                text: 'Google Drive used only for backup (AppData folder)',
              },
            ].map((item) => (
              <div
                key={item.text}
                className="flex items-start gap-3 rounded-xl bg-white/70 p-4 text-sm leading-6 text-neutral-700"
              >
                <span className="mt-0.5 shrink-0 text-emerald-600">
                  {item.icon}
                </span>
                {item.text}
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* ─── Content + TOC ──────────────────────────────────────── */}
      <div className="mx-auto max-w-6xl px-6 pb-32">
        <div className="flex gap-10">
          {/* Desktop TOC */}
          <motion.aside
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: easing, delay: 0.4 }}
            className="sticky top-24 hidden h-max w-56 shrink-0 lg:block"
          >
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.15em] text-neutral-400">
              On this page
            </p>
            <nav className="space-y-1">
              {sections.map((s) => (
                <button
                  key={s.id}
                  onClick={() => scrollTo(s.id)}
                  className={`flex w-full items-center gap-2.5 rounded-lg px-3 py-2 text-left text-sm transition-all ${
                    activeSection === s.id
                      ? 'bg-emerald-50 font-medium text-emerald-700'
                      : 'text-neutral-500 hover:bg-neutral-100 hover:text-neutral-700'
                  }`}
                >
                  <span
                    className={`size-1.5 shrink-0 rounded-full transition-colors ${activeSection === s.id ? 'bg-emerald-500' : 'bg-neutral-300'}`}
                  />
                  {s.title}
                </button>
              ))}
            </nav>
            <div className="mt-6 border-t border-neutral-200 pt-4">
              <a
                href="/spendly"
                className="text-sm text-emerald-600 transition hover:text-emerald-500"
              >
                &larr; Back to Spendly
              </a>
            </div>
          </motion.aside>

          {/* Cards */}
          <div className="min-w-0 flex-1 space-y-6">
            {sections.map((s, i) => (
              <motion.section
                key={s.id}
                id={s.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-48px' }}
                transition={{ duration: 0.5, ease: easing }}
                className="group relative overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm transition-all duration-200 hover:border-emerald-200/60 hover:shadow-md"
              >
                <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-emerald-400 to-teal-400 opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
                <div className="p-6 sm:p-8">
                  <div className="flex items-start gap-4">
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-50 to-emerald-100 text-emerald-600 shadow-sm ring-1 ring-emerald-200/50">
                      {s.icon}
                    </div>
                    <div className="min-w-0 flex-1">
                      <h2 className="font-display text-xl font-semibold text-neutral-900">
                        {s.title}
                      </h2>
                      <div className="mt-4 space-y-4 text-base leading-7 text-neutral-600 [&_p]:leading-7">
                        {content[s.id]}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="pointer-events-none absolute -bottom-6 -right-6 select-none text-[7rem] font-bold leading-none text-neutral-100 transition-colors duration-200 group-hover:text-emerald-50">
                  {String(i + 1).padStart(2, '0')}
                </div>
              </motion.section>
            ))}

            {/* Contact Card */}
            <motion.section
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-48px' }}
              transition={{ duration: 0.5, ease: easing, delay: 0.1 }}
              className="relative overflow-hidden rounded-2xl border border-emerald-200 bg-gradient-to-br from-emerald-50 via-white to-white shadow-sm transition-all duration-200 hover:shadow-md"
            >
              <div className="pointer-events-none absolute -bottom-8 -right-8 select-none text-[7rem] font-bold leading-none text-emerald-100/50">
                08
              </div>
              <div className="absolute right-0 top-0 h-32 w-32 rounded-bl-full bg-emerald-400/5" />
              <div className="relative p-6 sm:p-8">
                <div className="flex items-start gap-4">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 text-white shadow-lg shadow-emerald-500/20">
                    <MailIcon />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h2 className="font-display text-xl font-semibold text-neutral-900">
                      Contact Information
                    </h2>
                    <p className="mt-3 leading-7 text-neutral-600">
                      If you have any questions regarding this Privacy Policy,
                      you may contact:
                    </p>
                    <div className="mt-5 grid gap-px overflow-hidden rounded-xl border border-emerald-200/60 bg-emerald-200/30">
                      {[
                        { label: 'Name', value: 'Arnab Bhoumik' },
                        {
                          label: 'Email',
                          value: portfolioConfig.profile.email,
                          href: `mailto:${portfolioConfig.profile.email}`,
                        },
                        {
                          label: 'Website',
                          value: PORTFOLIO_LIVE_URL,
                          href: PORTFOLIO_LIVE_URL,
                        },
                      ].map((row) => (
                        <div
                          key={row.label}
                          className="flex items-center justify-between bg-white/90 px-5 py-3 text-sm"
                        >
                          <span className="text-neutral-500">{row.label}</span>
                          {row.href ? (
                            <a
                              href={row.href}
                              target="_blank"
                              className="font-medium text-emerald-600 transition hover:text-emerald-500"
                            >
                              {row.value}
                            </a>
                          ) : (
                            <span className="font-medium text-neutral-900">
                              {row.value}
                            </span>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.section>
          </div>
        </div>
      </div>

      {/* ─── Mobile Section Dots ────────────────────────────────── */}
      <div className="fixed bottom-6 left-1/2 z-40 hidden -translate-x-1/2 gap-1.5 sm:flex lg:hidden">
        {sections.map((s) => (
          <button
            key={s.id}
            onClick={() => scrollTo(s.id)}
            className={`size-2 rounded-full transition-all duration-300 ${
              activeSection === s.id
                ? 'w-6 bg-emerald-500'
                : 'bg-neutral-300 hover:bg-neutral-400'
            }`}
            aria-label={`Scroll to ${s.title}`}
          />
        ))}
      </div>

      {/* ─── Mobile TOC Footer ──────────────────────────────────── */}
      <div className="sticky bottom-0 z-30 border-t border-neutral-200 bg-white/80 backdrop-blur-md sm:hidden">
        <button
          onClick={() => setMobileNavOpen(!mobileNavOpen)}
          className="flex w-full items-center justify-between px-6 py-3 text-sm font-medium text-neutral-600"
        >
          <span className="flex items-center gap-2">
            <span className="size-1.5 rounded-full bg-emerald-500" />
            Jump to section
          </span>
          <ChevronDownIcon />
        </button>
        <AnimatePresence>
          {mobileNavOpen && (
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: 'auto' }}
              exit={{ height: 0 }}
              className="overflow-hidden border-t border-neutral-200 bg-white"
            >
              <div className="space-y-0.5 px-4 pb-4 pt-2">
                {sections.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => scrollTo(s.id)}
                    className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm transition-all ${
                      activeSection === s.id
                        ? 'bg-emerald-50 font-medium text-emerald-700'
                        : 'text-neutral-600 hover:bg-neutral-100'
                    }`}
                  >
                    <span
                      className={`size-1.5 shrink-0 rounded-full ${activeSection === s.id ? 'bg-emerald-500' : 'bg-neutral-300'}`}
                    />
                    {s.title}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* ─── Back to Top ────────────────────────────────────────── */}
      <motion.button
        initial={false}
        animate={{
          opacity: showBackToTop ? 1 : 0,
          y: showBackToTop ? 0 : 12,
          scale: showBackToTop ? 1 : 0.9,
        }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 z-40 flex size-11 items-center justify-center rounded-xl bg-neutral-900 text-white shadow-lg shadow-neutral-900/20 transition-all hover:bg-neutral-800 hover:shadow-xl active:scale-95"
      >
        <ChevronUpIcon />
      </motion.button>

      {/* ─── Footer ─────────────────────────────────────────────── */}
      <footer className="border-t border-neutral-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="font-display text-base font-semibold text-neutral-900">
                Spendly
              </p>
              <p className="mt-0.5 text-sm text-neutral-500">
                Personal finance & expense tracking application
              </p>
            </div>
            <div className="flex items-center gap-6 text-sm text-neutral-500">
              <a href="/spendly" className="transition hover:text-emerald-600">
                App
              </a>
              <a
                href={`${SPENDLY_REPO_URL}/releases/latest`}
                target="_blank"
                className="transition hover:text-emerald-600"
              >
                Download
              </a>
              <a
                href={SPENDLY_REPO_URL}
                target="_blank"
                className="transition hover:text-emerald-600"
              >
                GitHub
              </a>
              <a
                href={PORTFOLIO_LIVE_URL}
                target="_blank"
                className="transition hover:text-emerald-600"
              >
                Developer Website
              </a>
            </div>
          </div>
          <div className="mt-8 border-t border-neutral-200 pt-6 text-sm text-neutral-400">
            &copy; {new Date().getFullYear()} Spendly. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}
