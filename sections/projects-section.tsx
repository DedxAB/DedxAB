"use client";

import { motion } from "framer-motion";
import { Braces, ExternalLink, Github } from "lucide-react";
import type { IconType } from "react-icons";
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
  SiTypescript
} from "react-icons/si";

import { SectionShell } from "@/components/common/section-shell";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { portfolioConfig } from "@/config/portfolio";
import { cn } from "@/lib/utils";

const stackIconMap: Record<string, IconType> = {
  "Next.js": SiNextdotjs,
  "React.js": SiReact,
  "React (Vite)": SiReact,
  JavaScript: SiJavascript,
  TypeScript: SiTypescript,
  CSS: SiCss,
  "Tailwind CSS": SiTailwindcss,
  GraphQL: SiGraphql,
  "Context API": SiReact,
  MongoDB: SiMongodb,
  NextAuth: SiNextdotjs,
  "Redux Toolkit": SiRedux,
  Redux: SiRedux,
  "TMDB API": SiReact,
  Axios: SiAxios
};

const stackStyleMap: Record<string, string> = {
  "Next.js": "border-slate-500/50 bg-slate-500/10 text-slate-300",
  "React.js": "border-cyan-500/50 bg-cyan-500/10 text-cyan-300",
  "React (Vite)": "border-cyan-500/50 bg-cyan-500/10 text-cyan-300",
  JavaScript: "border-amber-500/50 bg-amber-500/10 text-amber-300",
  TypeScript: "border-blue-500/50 bg-blue-500/10 text-blue-300",
  CSS: "border-indigo-500/50 bg-indigo-500/10 text-indigo-300",
  "Tailwind CSS": "border-sky-500/50 bg-sky-500/10 text-sky-300",
  GraphQL: "border-pink-500/50 bg-pink-500/10 text-pink-300",
  "Context API": "border-cyan-500/50 bg-cyan-500/10 text-cyan-300",
  MongoDB: "border-emerald-500/50 bg-emerald-500/10 text-emerald-300",
  NextAuth: "border-slate-500/50 bg-slate-500/10 text-slate-300",
  "Redux Toolkit": "border-violet-500/50 bg-violet-500/10 text-violet-300",
  Redux: "border-violet-500/50 bg-violet-500/10 text-violet-300",
  "TMDB API": "border-teal-500/50 bg-teal-500/10 text-teal-300",
  Axios: "border-fuchsia-500/50 bg-fuchsia-500/10 text-fuchsia-300"
};

export function ProjectsSection(): React.JSX.Element {
  return (
    <SectionShell id="projects" title="Projects" subtitle="Selected builds that balance engineering rigor with product-level polish.">
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {portfolioConfig.projects.map((project, index) => (
          <motion.article
            key={project.name}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.45, delay: index * 0.06 }}
            whileHover={{ y: -4 }}
          >
            <Card className="flex h-full flex-col border-neonCyan/30 transition-shadow hover:shadow-neon">
              <h3 className="font-display text-xl">{project.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{project.summary}</p>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.stack.map((item) => {
                  const StackIcon = stackIconMap[item];
                  return (
                    <Badge
                      key={`${project.name}-${item}`}
                      className={cn("inline-flex items-center gap-1.5", stackStyleMap[item])}
                    >
                      {StackIcon ? <StackIcon className="h-3.5 w-3.5" /> : <Braces className="h-3.5 w-3.5" />}
                      {item}
                    </Badge>
                  );
                })}
              </div>

              <ul className="mt-4 flex-1 space-y-2 text-sm text-muted-foreground">
                {project.highlights.map((highlight) => (
                  <li key={highlight}>- {highlight}</li>
                ))}
              </ul>

              <div className="mt-5 flex items-center gap-4">
                <a href={project.href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-neonCyan">
                  <ExternalLink className="h-4 w-4" /> Live
                </a>
                {project.repo ? (
                  <a href={project.repo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-neonGreen">
                    <Github className="h-4 w-4" /> Code
                  </a>
                ) : null}
              </div>
            </Card>
          </motion.article>
        ))}
      </div>
    </SectionShell>
  );
}
