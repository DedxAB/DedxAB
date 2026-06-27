'use client';

import { useEffect } from 'react';
import { easing, scaleIn, staggerContainer } from '@/components/common/motion';
import { Reveal } from '@/components/common/reveal';
import { PORTFOLIO_LIVE_URL } from '@/config/site';
import {
  SPENDLY_REPO_URL,
  SPENDLY_SCREENSHOT_BASE_URL,
} from '@/config/spendly';

import { useQuery } from '@tanstack/react-query';
import { motion } from 'framer-motion';
import {
  BellIcon,
  CloudIcon,
  DatabaseIcon,
  DownloadIcon,
  GithubIcon,
  PieChartIcon,
  RepeatIcon,
  ShieldIcon,
  TargetIcon,
  UsersIcon,
  WalletIcon,
} from './components/icons';
import { PhoneFrame } from './components/phone-frame';

const features = [
  {
    icon: <WalletIcon />,
    title: 'Expense & Income Tracking',
    description:
      'Track daily spending, manage income, and view full transaction history with smart categorization.',
  },
  {
    icon: <PieChartIcon />,
    title: 'Insights & Analytics',
    description:
      'Visual spending breakdowns, trend analysis, and financial reflections to understand your habits.',
  },
  {
    icon: <TargetIcon />,
    title: 'Budgets & Goals',
    description:
      'Set monthly budgets with alerts, track financial goals, and monitor your progress over time.',
  },
  {
    icon: <RepeatIcon />,
    title: 'Recurring Transactions',
    description:
      'Track subscriptions and bills automatically without manual re-entry each cycle.',
  },
  {
    icon: <UsersIcon />,
    title: 'Lend & Borrow',
    description:
      'Track money lent and borrowed with settlement history for complete clarity.',
  },
  {
    icon: <ShieldIcon />,
    title: 'Privacy Lock',
    description:
      'Biometric and device authentication with hidden amounts mode for enhanced privacy.',
  },
  {
    icon: <BellIcon />,
    title: 'Smart Notifications',
    description:
      'Daily reminders and budget alerts to keep you on top of your finances.',
  },
  {
    icon: <CloudIcon />,
    title: 'Cloud Sync & Backup',
    description:
      'Google Drive backup and restore for secure data portability across devices.',
  },
  {
    icon: <DatabaseIcon />,
    title: 'Offline First',
    description:
      'Works completely offline with local SQLite storage for fast, reliable performance anywhere.',
  },
];

const screenshots = [
  {
    src: `${SPENDLY_SCREENSHOT_BASE_URL}/home.png`,
    alt: 'Spendly home screen',
  },
  {
    src: `${SPENDLY_SCREENSHOT_BASE_URL}/transaction.png`,
    alt: 'Spendly transaction screen',
  },
  {
    src: `${SPENDLY_SCREENSHOT_BASE_URL}/analytics.png`,
    alt: 'Spendly analytics screen',
  },
  {
    src: `${SPENDLY_SCREENSHOT_BASE_URL}/budget.png`,
    alt: 'Spendly budget screen',
  },
  {
    src: `${SPENDLY_SCREENSHOT_BASE_URL}/goals.png`,
    alt: 'Spendly goals screen',
  },
  {
    src: `${SPENDLY_SCREENSHOT_BASE_URL}/settings.png`,
    alt: 'Spendly settings screen',
  },
];

export default function SpendlyHomePage() {
  useEffect(() => {
    document.title = 'Spendly — Offline-First Finance Tracker';
  }, []);

  const { data: latestVersion } = useQuery({
    queryKey: ['spendly-latest-release'],
    queryFn: () =>
      fetch(
        'https://api.github.com/repos/DedxAB/spendly-expense-tracker-app/releases/latest',
      )
        .then((res) => res.json())
        .then((data) => data?.tag_name ?? null),
    staleTime: 1000 * 60 * 30,
  });

  return (
    <main className="min-h-screen bg-[#fafafa] text-neutral-900 overflow-x-hidden">
      {/* Hero */}
      <section className="relative overflow-hidden pt-24 sm:pt-32 pb-24 sm:pb-40">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,#ecfdf5,transparent_60%),radial-gradient(ellipse_at_bottom_left,#ecfdf5,transparent_50%)]" />
        <motion.div
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -left-20 -top-20 size-80 rounded-full bg-emerald-400/10 blur-3xl"
        />
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -right-20 top-40 size-96 rounded-full bg-teal-400/10 blur-3xl"
        />

        <div className="relative mx-auto max-w-6xl px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: easing }}
              >
                <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1.5 text-sm font-medium text-emerald-700">
                  <span className="size-1.5 rounded-full bg-emerald-500" />
                  Offline-First Finance Tracker
                </div>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: easing, delay: 0.1 }}
                className="mt-6 font-display text-5xl font-semibold tracking-tight text-neutral-950 sm:text-6xl lg:text-7xl"
              >
                Take control of{' '}
                <span className="bg-linear-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">
                  your finances
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: easing, delay: 0.2 }}
                className="mt-5 text-lg leading-8 text-neutral-600 sm:text-xl/8 max-w-xl"
              >
                A modern personal finance app built with Flutter. Track
                expenses, manage budgets, analyze spending — completely offline.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: easing, delay: 0.3 }}
                className="mt-8 flex flex-wrap items-center gap-4"
              >
                <a
                  href={`${SPENDLY_REPO_URL}/releases/latest`}
                  target="_blank"
                  className="inline-flex items-center gap-2.5 rounded-xl bg-neutral-900 px-6 py-3.5 text-sm font-medium text-white shadow-lg shadow-neutral-900/25 transition-all hover:bg-neutral-800 hover:shadow-xl hover:shadow-neutral-900/30 active:scale-[0.97]"
                >
                  <DownloadIcon />
                  Download APK
                </a>
                <a
                  href={SPENDLY_REPO_URL}
                  target="_blank"
                  className="inline-flex items-center gap-2.5 rounded-xl border border-neutral-300 bg-white/80 px-6 py-3.5 text-sm font-medium text-neutral-700 shadow-sm backdrop-blur transition-all hover:border-neutral-400 hover:bg-white hover:shadow-md active:scale-[0.97]"
                >
                  <GithubIcon />
                  Source Code
                </a>
                <a
                  href="/spendly/privacy-policy"
                  className="inline-flex items-center gap-2 rounded-xl px-5 py-3.5 text-sm font-medium text-neutral-500 transition-all hover:text-neutral-700 active:scale-[0.97]"
                >
                  Privacy Policy
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: easing, delay: 0.4 }}
                className="mt-10 flex items-center gap-8 text-sm text-neutral-500"
              >
                <span className="flex items-center gap-2">
                  <ShieldIcon className="size-6 shrink-0" />
                  No account required
                </span>
                <span className="flex items-center gap-2">
                  <DatabaseIcon className="size-6 shrink-0" />
                  Works offline
                </span>
                <span className="flex items-center gap-2">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="size-4 shrink-0"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  Open source
                </span>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: easing, delay: 0.3 }}
              className="flex justify-center lg:justify-end"
            >
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                <div className="relative h-145 w-67.5 overflow-hidden rounded-[2.75rem] border-4 border-neutral-800 bg-neutral-900 shadow-2xl">
                  <div className="absolute left-1/2 top-0 z-10 h-6 w-36 -translate-x-1/2 rounded-b-2xl bg-neutral-800" />
                  <div className="flex h-full items-center justify-center bg-linear-to-b from-emerald-500/20 via-teal-500/10 to-neutral-900">
                    <p className="font-display text-4xl font-bold text-white/20">
                      Spendly
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="relative">
        <div className="absolute inset-0 bg-linear-to-b from-emerald-50/50 to-transparent" />
        <div className="relative mx-auto max-w-6xl px-6 pb-32">
          <Reveal>
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-emerald-600">
                Features
              </p>
              <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-neutral-950 sm:text-4xl">
                Everything you need to manage your money
              </h2>
            </div>
          </Reveal>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-48px' }}
            className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {features.map((f) => (
              <motion.div
                key={f.title}
                variants={scaleIn}
                className="group relative overflow-hidden rounded-2xl border border-neutral-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-emerald-200/60 hover:shadow-xl hover:shadow-emerald-500/8"
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-linear-to-r from-emerald-400 to-teal-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="absolute -right-8 -top-8 size-24 rounded-full bg-emerald-500/3 transition-all duration-300 group-hover:scale-150 group-hover:bg-emerald-500/8" />
                <div className="relative">
                  <div className="flex size-12 items-center justify-center rounded-2xl bg-linear-to-br from-emerald-500 to-teal-500 text-white shadow-lg shadow-emerald-500/20 transition-all duration-300 group-hover:shadow-emerald-500/30 group-hover:scale-105">
                    {f.icon}
                  </div>
                  <span className="mt-6 block font-display text-lg font-semibold text-neutral-900">
                    {f.title}
                  </span>
                  <p className="mt-2 leading-7 text-neutral-600">
                    {f.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Screenshots */}
      <section className="bg-linear-to-b from-[#fafafa] via-neutral-50 to-[#fafafa]">
        <div className="mx-auto max-w-6xl px-6 py-32">
          <Reveal>
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-emerald-600">
                Application
              </p>
              <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-neutral-950 sm:text-4xl">
                Clean and focused user experience
              </h2>
              <p className="mt-3 text-lg leading-8 text-neutral-600">
                Designed with Material 3 for a modern, intuitive feel across
                every screen.
              </p>
            </div>
          </Reveal>

          <div className="mt-16 flex flex-wrap justify-center gap-6">
            {screenshots.map((shot, i) => (
              <PhoneFrame key={shot.src} {...shot} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section>
        <div className="mx-auto max-w-6xl px-6 pb-32">
          <div className="grid gap-6 sm:grid-cols-3">
            {[
              {
                value: '100%',
                label: 'Offline',
                desc: 'Works without internet',
              },
              {
                value: 'Free',
                label: 'Open Source',
                desc: 'MIT licensed on GitHub',
              },
              {
                value: '0',
                label: 'Accounts Needed',
                desc: 'No sign-up required',
              },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: easing, delay: i * 0.1 }}
                className="rounded-2xl border border-neutral-200 bg-white p-8 text-center shadow-sm"
              >
                <p className="font-display text-4xl font-semibold text-emerald-600">
                  {stat.value}
                </p>
                <p className="mt-1 font-medium text-neutral-900">
                  {stat.label}
                </p>
                <p className="mt-1 text-sm text-neutral-500">{stat.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Privacy */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,#ecfdf5,transparent_70%)]" />
        <div className="relative mx-auto max-w-4xl px-6 pb-32 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: easing }}
            className="mx-auto flex size-16 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600 shadow-sm"
          >
            <ShieldIcon className="size-6 shrink-0" />
          </motion.div>

          <Reveal>
            <h2 className="mt-6 font-display text-3xl font-semibold tracking-tight text-neutral-950 sm:text-4xl">
              Your financial data stays under your control
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-neutral-600">
              Spendly is designed with privacy first. All data lives locally on
              your device. Google Drive backup only accesses its own AppData
              folder — nothing else.
            </p>
          </Reveal>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: easing, delay: 0.2 }}
            className="mx-auto mt-10 inline-flex items-center gap-3 rounded-2xl border border-emerald-200 bg-white/80 px-5 py-3.5 shadow-sm backdrop-blur"
          >
            <ShieldIcon className="size-6 shrink-0" />
            <span className="text-sm font-medium text-emerald-800">
              No account required. No third-party access. Your data, your rules.
            </span>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-neutral-900">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--color-emerald-800),transparent_70%)]/30" />
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -left-40 -top-40 size-80 rounded-full bg-emerald-500/5 blur-3xl"
        />
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -bottom-40 -right-40 size-80 rounded-full bg-teal-500/5 blur-3xl"
        />

        <div className="relative mx-auto max-w-4xl px-6 py-32 text-center">
          <Reveal>
            <h2 className="font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Ready to take control of your finances?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg leading-8 text-neutral-400">
              Download the latest APK and start tracking. No sign-up. No
              internet required. Just you and your money.
            </p>
          </Reveal>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: easing, delay: 0.2 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-4"
          >
            <a
              href={`${SPENDLY_REPO_URL}/releases/latest`}
              target="_blank"
              className="inline-flex items-center gap-2.5 rounded-xl bg-emerald-500 px-7 py-3.5 text-sm font-medium text-white shadow-lg shadow-emerald-500/25 transition-all hover:bg-emerald-400 hover:shadow-xl hover:shadow-emerald-400/30 active:scale-[0.97]"
            >
              <DownloadIcon />
              {latestVersion
                ? `Download APK (${latestVersion})`
                : 'Download APK'}
            </a>
            <a
              href={`${SPENDLY_REPO_URL}/releases`}
              target="_blank"
              className="inline-flex items-center gap-2.5 rounded-xl border border-neutral-700 bg-neutral-800/50 px-6 py-3.5 text-sm font-medium text-neutral-300 shadow-sm backdrop-blur transition-all hover:border-neutral-600 hover:text-white hover:shadow-md active:scale-[0.97]"
            >
              All Releases
            </a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-neutral-900 border-t border-neutral-800">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="font-display text-lg font-semibold text-white">
                Spendly
              </p>
              <p className="mt-0.5 text-sm text-neutral-500">
                Built with Flutter &middot; Offline-first personal finance
                tracker
              </p>
            </div>
            <div className="flex items-center gap-6 text-sm text-neutral-500">
              <a
                href={SPENDLY_REPO_URL}
                target="_blank"
                className="transition hover:text-emerald-400"
              >
                GitHub
              </a>
              <a
                href="/spendly/privacy-policy"
                className="transition hover:text-emerald-400"
              >
                Privacy Policy
              </a>
              <a
                href={PORTFOLIO_LIVE_URL}
                target="_blank"
                className="transition hover:text-emerald-400"
              >
                Developer Website
              </a>
            </div>
          </div>
          <div className="mt-8 border-t border-neutral-800 pt-6 text-sm text-neutral-600">
            &copy; {new Date().getFullYear()} Spendly. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}
