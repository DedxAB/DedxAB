'use client';

import { motion } from 'framer-motion';
import { Braces, ExternalLink, Github } from 'lucide-react';
import type { IconType } from 'react-icons';
import {
  SiAxios,
  SiCss,
  SiGraphql,
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiReact,
  SiRedux,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si';

import { SectionShell } from '@/components/common/section-shell';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { portfolioConfig } from '@/config/portfolio';
import { cn } from '@/lib/utils';

const stackIconMap: Record<string, IconType> = {
  'Next.js': SiNextdotjs,
  'React.js': SiReact,
  'React (Vite)': SiReact,
  JavaScript: SiJavascript,
  TypeScript: SiTypescript,
  CSS: SiCss,
  'Tailwind CSS': SiTailwindcss,
  GraphQL: SiGraphql,
  'Context API': SiReact,
  MongoDB: SiMongodb,
  NextAuth: SiNextdotjs,
  'Redux Toolkit': SiRedux,
  Redux: SiRedux,
  'TMDB API': SiReact,
  Axios: SiAxios,
};

const stackStyleMap: Record<string, string> = {
  'Next.js': 'border-slate-500/50 bg-slate-500/10 text-slate-300',
  'React.js': 'border-cyan-500/50 bg-cyan-500/10 text-cyan-300',
  'React (Vite)': 'border-cyan-500/50 bg-cyan-500/10 text-cyan-300',
  JavaScript: 'border-amber-500/50 bg-amber-500/10 text-amber-300',
  TypeScript: 'border-blue-500/50 bg-blue-500/10 text-blue-300',
  CSS: 'border-indigo-500/50 bg-indigo-500/10 text-indigo-300',
  'Tailwind CSS': 'border-sky-500/50 bg-sky-500/10 text-sky-300',
  GraphQL: 'border-pink-500/50 bg-pink-500/10 text-pink-300',
  'Context API': 'border-cyan-500/50 bg-cyan-500/10 text-cyan-300',
  MongoDB: 'border-emerald-500/50 bg-emerald-500/10 text-emerald-300',
  NextAuth: 'border-slate-500/50 bg-slate-500/10 text-slate-300',
  'Redux Toolkit': 'border-violet-500/50 bg-violet-500/10 text-violet-300',
  Redux: 'border-violet-500/50 bg-violet-500/10 text-violet-300',
  'TMDB API': 'border-teal-500/50 bg-teal-500/10 text-teal-300',
  Axios: 'border-fuchsia-500/50 bg-fuchsia-500/10 text-fuchsia-300',
};

export function ProjectsSection(): React.JSX.Element {
  return (
    <SectionShell
      id="projects"
      title="Projects"
      subtitle="Selected builds that balance engineering rigor with product-level polish."
    >
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {portfolioConfig.projects.map((project, index) => (
          <motion.article
            key={project.name}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.45, delay: index * 0.06 }}
            whileHover={{ y: -6 }}
            className="group"
          >
            <Card className="relative flex h-full flex-col overflow-hidden border-neonCyan/30 bg-card/85 transition-all duration-300 hover:border-neonCyan/50 hover:shadow-neon">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-linear-to-b from-neonCyan/15 to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-100"
              />
              <div className="mb-3 flex items-center justify-between gap-2">
                <span className="font-pixel text-xs text-neonAmber">
                  0{index + 1}
                </span>
                <div className="flex items-center gap-3">
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 rounded-full border border-neonCyan/35 px-2.5 py-1 text-xs text-neonCyan transition-colors hover:bg-neonCyan/10"
                  >
                    <ExternalLink className="h-3.5 w-3.5" /> Live
                  </a>
                  {project.repo ? (
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 rounded-full border border-neonGreen/30 px-2.5 py-1 text-xs text-neonGreen transition-colors hover:bg-neonGreen/10"
                    >
                      <Github className="h-3.5 w-3.5" /> Code
                    </a>
                  ) : null}
                </div>
              </div>
              <h3 className="font-display text-xl leading-tight">
                {project.name}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {project.summary}
              </p>

              <div className="mt-4 flex flex-wrap gap-2 border-y border-neonCyan/20 py-3">
                {project.stack.map((item) => {
                  const StackIcon = stackIconMap[item];
                  return (
                    <Badge
                      key={`${project.name}-${item}`}
                      className={cn(
                        'inline-flex items-center gap-1.5 backdrop-blur-sm',
                        stackStyleMap[item]
                      )}
                    >
                      {StackIcon ? (
                        <StackIcon className="h-3.5 w-3.5" />
                      ) : (
                        <Braces className="h-3.5 w-3.5" />
                      )}
                      {item}
                    </Badge>
                  );
                })}
              </div>

              <ul className="mt-4 flex-1 space-y-2 text-sm text-muted-foreground">
                {project.highlights.map((highlight) => (
                  <li key={highlight} className="flex items-start gap-2">
                    <span
                      aria-hidden="true"
                      className="mt-2 inline-block h-2 w-2 shrink-0 rounded-full bg-neonCyan ring-1 ring-neonCyan/30"
                    />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-5 h-px w-full bg-linear-to-r from-neonCyan/45 via-neonAmber/35 to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-100" />
            </Card>
          </motion.article>
        ))}
      </div>
    </SectionShell>
  );
}
