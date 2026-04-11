'use client';

import type { LucideIcon } from 'lucide-react';
import {
  Braces,
  CloudCog,
  Code2,
  Component,
  Database,
  FileCode2,
  FolderGit2,
  Github,
  Gitlab,
  PanelsTopLeft,
  Palette,
  Send,
  SquareKanban,
} from 'lucide-react';
import { motion } from 'framer-motion';

import { scaleIn, staggerContainer } from '@/components/common/motion';
import { SectionShell } from '@/components/common/section-shell';
import { Card } from '@/components/ui/card';
import { portfolioConfig } from '@/config/portfolio';

const skillIconMap: Record<string, LucideIcon> = {
  JavaScript: Braces,
  TypeScript: FileCode2,
  Java: Code2,
  HTML5: Code2,
  CSS3: Palette,
  SCSS: Palette,
  React: Component,
  'Next.js': PanelsTopLeft,
  'Redux Toolkit': Component,
  'React Hooks': Component,
  'Context API': Component,
  GraphQL: Braces,
  'Node.js': Braces,
  'Express.js': Braces,
  'Tailwind CSS': Palette,
  MongoDB: Database,
  OOP: Braces,
  'VS Code': FileCode2,
  Azure: CloudCog,
  JIRA: SquareKanban,
  Git: FolderGit2,
  GitHub: Github,
  GitLab: Gitlab,
  Postman: Send,
  'Editor.js': FileCode2,
};

export function SkillsSection(): React.JSX.Element {
  return (
    <SectionShell
      id="skills"
      title="Skills"
      subtitle="Core technologies I use to design, ship, and scale production web applications."
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-40px' }}
        className="grid gap-5 md:grid-cols-2 lg:grid-cols-3"
      >
        {portfolioConfig.skills.map((group) => (
          <motion.div
            key={group.category}
            variants={scaleIn}
            className="h-full"
          >
            <Card className="h-full space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-display text-2xl">{group.category}</h3>
                <span className="surface-subtle rounded-full px-2 py-1 text-xs tracking-[0.12em] text-muted-foreground">
                  {group.skills.length} skills
                </span>
              </div>
              <ul className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <li key={skill.name} className="group">
                    {(() => {
                      const Icon = skillIconMap[skill.name];
                      return (
                        <span className="surface-subtle inline-flex items-center gap-2 rounded-md px-2.5 py-1.5 text-sm text-foreground transition-all duration-300 hover:brightness-[1.03]">
                          <span className="surface-subtle inline-flex h-5 min-w-5 items-center justify-center rounded px-1 text-[10px] text-muted-foreground">
                            {Icon ? <Icon className="h-3.5 w-3.5" /> : skill.icon}
                          </span>
                          <span>{skill.name}</span>
                        </span>
                      );
                    })()}
                  </li>
                ))}
              </ul>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </SectionShell>
  );
}
