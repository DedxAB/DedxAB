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

import { fadeUp, scaleIn, staggerContainer } from '@/components/common/motion';
import { SectionShell } from '@/components/common/section-shell';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { portfolioConfig } from '@/config/portfolio';

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

export function ProjectsSection(): React.JSX.Element {
  return (
    <SectionShell
      id="projects"
      title="Projects"
      subtitle="Selected builds that balance engineering rigor with product-level polish."
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-40px' }}
        className="grid gap-5 md:grid-cols-2 lg:grid-cols-3"
      >
        {portfolioConfig.projects.map((project, index) => (
          <motion.article
            key={project.name}
            variants={scaleIn}
            custom={index * 0.04}
            whileHover={{ y: -4 }}
            className="group"
          >
            <Card className="relative flex h-full flex-col overflow-hidden transition-all duration-300">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 top-0 h-px bg-foreground/55 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              />
              <div className="mb-3 flex items-center justify-between gap-2">
                <span className="text-xs tracking-[0.16em] text-muted-foreground">
                  0{index + 1}
                </span>
                <div className="flex items-center gap-3">
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noreferrer"
                    className="surface-subtle inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs text-foreground transition-all duration-300 hover:scale-[1.02] hover:brightness-[1.03]"
                  >
                    <ExternalLink className="h-3.5 w-3.5" /> Live
                  </a>
                  {project.repo ? (
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noreferrer"
                      className="surface-subtle inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs text-foreground transition-all duration-300 hover:scale-[1.02] hover:brightness-[1.03]"
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

              <motion.div
                variants={fadeUp}
                custom={0.08}
                className="mt-4 flex flex-wrap gap-2 border-y border-border py-3"
              >
                {project.stack.map((item) => {
                  const StackIcon = stackIconMap[item];
                  return (
                    <Badge
                      key={`${project.name}-${item}`}
                      className="inline-flex items-center gap-1.5 text-foreground"
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
              </motion.div>

              <ul className="mt-4 flex-1 space-y-2 text-sm text-muted-foreground">
                {project.highlights.map((highlight) => (
                  <li key={highlight} className="flex items-start gap-2">
                    <span
                      aria-hidden="true"
                      className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-foreground"
                    />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-5 h-px w-full bg-gradient-to-r from-foreground/45 to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-100" />
            </Card>
          </motion.article>
        ))}
      </motion.div>
    </SectionShell>
  );
}
