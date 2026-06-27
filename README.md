# &lt;Arnab Bhoumik /&gt; — Portfolio 2026

Personal portfolio website for **Arnab Bhoumik** — R&D Full Stack Engineer with 2+ years of experience building scalable React and Next.js applications.

> **Live:** [dedxab.vercel.app](https://dedxab.vercel.app)  
> **Author:** [Arnab Bhoumik](https://github.com/DedxAB)

---

## Table of Contents

- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Pages & Routes](#pages--routes)
- [Components](#components)
- [Sections](#sections)
- [Configuration](#configuration)
- [Features](#features)
- [Getting Started](#getting-started)
- [Scripts](#scripts)

---

## Tech Stack

| Technology | Version |
|---|---|
| Next.js | 15.1 (App Router, Turbopack) |
| React | 19.0 |
| TypeScript | 5.7 (strict) |
| Tailwind CSS | 4.1 |
| Framer Motion | 11.11 |
| Lucide React | 0.468 |
| React Icons | 5.4 |
| class-variance-authority | 0.7 |
| clsx + tailwind-merge | — |

---

## Project Structure

```
app/                         # Next.js App Router
├── globals.css              # Global styles + CSS variables (light/dark)
├── layout.tsx               # Root layout (fonts, metadata, viewport)
├── page.tsx                 # Homepage (composes all sections)
├── icon.tsx                 # Dynamic favicon
├── robots.ts                # robots.txt
├── sitemap.ts               # sitemap.xml
└── spendly/                 # Sub-route: Spendly app landing
    ├── page.tsx
    └── privacy-policy/
        └── page.tsx

components/
├── common/                  # SectionShell, Reveal, TimelineList, motion
├── effects/                 # BootSequence, CursorGlow, CrtOverlay, EasterEgg
├── layout/                  # SiteShell, TopNav, ScrollToTopButton
├── providers/               # ThemeProvider, SoundProvider
├── terminal/                # TerminalPanel, terminal-highlight
└── ui/                      # GlassButton, GlassCard, Badge, Separator, Switch

sections/                    # 11 homepage sections
├── hero-section.tsx
├── about-section.tsx
├── skills-section.tsx
├── learnings-section.tsx
├── experience-section.tsx
├── projects-section.tsx
├── education-section.tsx
├── achievements-section.tsx
├── interests-section.tsx
├── contact-section.tsx
└── footer-section.tsx

config/
├── site.ts                  # Live URL constant
└── portfolio.ts             # Central data store (all portfolio content)

lib/
├── types.ts                 # TypeScript interfaces
└── utils.ts                 # cn() utility

styles/
└── retro.css                # CRT scanline overlay effect

public/
├── avatar.svg               # Fallback avatar
└── og-image.svg             # Open Graph image
```

---

## Pages & Routes

| Route | File | Description |
|---|---|---|
| `/` | `app/page.tsx` | Main single-page portfolio |
| `/spendly` | `app/spendly/page.tsx` | Landing page for Spendly finance app |
| `/spendly/privacy-policy` | `app/spendly/privacy-policy/page.tsx` | Spendly privacy policy |

---

## Components

### Layout (`components/layout/`)

| Component | Description |
|---|---|
| **SiteShell** | Root wrapper: `ThemeProvider`, `BootSequence`, `CursorGlow`, `TopNav`, `ScrollToTopButton`, animated `<main>` |
| **TopNav** | Sticky frosted-glass navbar with scroll-aware visibility, active section tracking, social links, theme toggle |
| **ScrollToTopButton** | FAB visible after 480px scroll |

### UI (`components/ui/`)

| Component | Description |
|---|---|
| **GlassButton** | Polymorphic button (`default` / `secondary` / `ghost`, 3 sizes) via `cva` |
| **GlassCard** | Frosted glass surface panel |
| **Badge** | Small rounded pill for labels |
| **Separator** | Horizontal rule |
| **Switch** | Accessible toggle switch (`role="switch"`) |

### Common (`components/common/`)

| Component | Description |
|---|---|
| **SectionShell** | Wraps section in `id`, title, optional subtitle, `Reveal` animation |
| **Reveal** | Framer Motion scroll-triggered fade-up |
| **TimelineList** | Vertical timeline with staggered cards |
| **motion** | Shared animation constants (`easing`, `fadeUp`, `staggerContainer`, `scaleIn`) |

### Effects (`components/effects/`)

| Component | Description |
|---|---|
| **BootSequence** | Full-screen SSH-style boot animation (deploy logs, npm install, build) on first load |
| **CursorGlow** | Radial gradient following mouse cursor |
| **CrtOverlay** | CRT scanline overlay |
| **EasterEgg** | Konami-code listener (Up Up Down Down Left Right Left Right b a) → secret toast |

### Terminal (`components/terminal/`)

| Component | Description |
|---|---|
| **TerminalPanel** | Interactive terminal emulator in Contact section. Commands: `help`, `about`, `projects`, `contact`, `social`, `game`, `answer <1-4>`, `hint`, `score`, `exit`, `clear` |
| **Terminal tokens** | Syntax highlighter (prompt, command, flag, path, string, url, number tokens) |

### Providers (`components/providers/`)

| Component | Description |
|---|---|
| **ThemeProvider** | Dark/light theme with `localStorage` persistence |
| **SoundProvider** | Web Audio API ambient hum + click beeps (not yet integrated into main page) |

---

## Sections

Sections are rendered in order on the homepage (`app/page.tsx`):

| Section | ID | Content |
|---|---|---|
| **HeroSection** | `#home` | Name, role, tagline, rotating typed lines, avatar with live IST clock, CTAs |
| **AboutSection** | `#about` | Biography + reverse-chronological timeline |
| **SkillsSection** | `#skills` | Languages, Frameworks & Core, Tools — with proficiency badges |
| **LearningsSection** | `#learnings` | Currently learning: AI Engineering Fundamentals, Dart |
| **ExperienceSection** | `#experience` | 6 roles (Zebra Technologies, Telaverge Communications, themonkeys.life) |
| **ProjectsSection** | `#projects` | 4 projects: DedxNotes, HawtFlix, YuviPep CRM, Zebra GenAI Platform |
| **EducationSection** | `#education` | B.Tech, Diploma, Higher Secondary |
| **AchievementsSection** | `#achievements` | Hackathon runners-up, 9.45 CGPA |
| **InterestsSection** | `#interests` | Photography, gaming, sports, learning |
| **ContactSection** | `#contact` | Contact info + TerminalPanel |
| **FooterSection** | — | Copyright year + tech stack attribution |

---

## Configuration

All portfolio content is centralized in `config/portfolio.ts` and typed through `lib/types.ts`. The object `portfolioConfig` exports:

- **seo** — site title, description, keywords, OG image
- **profile** — name, role, location, email, bio
- **navigation** — 10 nav items
- **hero** — greeting, tagline, typed lines, CTAs, system stats
- **aboutTimeline** — 3 entries (Diploma → B.Tech → R&D)
- **experience** — 6 entries
- **education** — 3 entries
- **skills** — 3 categories, 22 skills total
- **currentLearnings** — 2 items
- **projects** — 4 items
- **achievements** — 2 items
- **interests** — 5 interests
- **contact** — headline, description, availability, email link
- **socialLinks** — GitHub, LinkedIn, X
- **terminal** — welcome messages, 10 commands
- **easterEgg** — Konami-code sequence + message

---

## Features

- **Terminal-inspired UI** — SSH boot animation, interactive terminal quiz, monospace fonts
- **Dark/Light theme** — persisted in `localStorage`, default dark
- **Glassmorphism** — `backdrop-filter: blur()` across cards, navbar, panels
- **Scroll animations** — Framer Motion `Reveal` with staggered children
- **Live clock** — IST time in hero avatar card
- **Cursor glow** — radial gradient follower (pointer: fine only)
- **Konami-code easter egg** — secret developer mode message
- **CRT overlay** — subtle scanline flicker effect
- **Responsive** — mobile-first with Tailwind breakpoints
- **SEO** — dynamic `robots.txt`, `sitemap.xml`, OG image, viewport tags

---

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server (with Turbopack)
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Scripts

| Script | Command |
|---|---|
| `dev` | `next dev` (Turbopack, devtools disabled) |
| `build` | `next build` |
| `start` | `next start` |
| `lint` | `next lint` |
| `typecheck` | `tsc --noEmit` |
