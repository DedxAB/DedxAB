import type { LucideIcon } from "lucide-react";
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
  SquareKanban
} from "lucide-react";

import { SectionShell } from "@/components/common/section-shell";
import { Card } from "@/components/ui/card";
import { portfolioConfig } from "@/config/portfolio";
import { cn } from "@/lib/utils";

const skillIconMap: Record<string, LucideIcon> = {
  JavaScript: Braces,
  TypeScript: FileCode2,
  Java: Code2,
  HTML5: Code2,
  CSS3: Palette,
  SCSS: Palette,
  React: Component,
  "Next.js": PanelsTopLeft,
  "Redux Toolkit": Component,
  "React Hooks": Component,
  "Context API": Component,
  GraphQL: Braces,
  "Node.js": Braces,
  "Express.js": Braces,
  "Tailwind CSS": Palette,
  MongoDB: Database,
  OOP: Braces,
  "VS Code": FileCode2,
  Azure: CloudCog,
  JIRA: SquareKanban,
  Git: FolderGit2,
  GitHub: Github,
  GitLab: Gitlab,
  Postman: Send,
  "Editor.js": FileCode2
};

const skillStyleMap: Record<string, string> = {
  JavaScript: "border-amber-500/50 bg-amber-500/10 text-amber-700 dark:text-amber-300",
  TypeScript: "border-blue-500/50 bg-blue-500/10 text-blue-700 dark:text-blue-300",
  Java: "border-orange-500/50 bg-orange-500/10 text-orange-700 dark:text-orange-300",
  HTML5: "border-red-500/50 bg-red-500/10 text-red-700 dark:text-red-300",
  CSS3: "border-indigo-500/50 bg-indigo-500/10 text-indigo-700 dark:text-indigo-300",
  SCSS: "border-pink-500/50 bg-pink-500/10 text-pink-700 dark:text-pink-300",
  React: "border-cyan-500/50 bg-cyan-500/10 text-cyan-700 dark:text-cyan-300",
  "Next.js": "border-slate-500/50 bg-slate-500/10 text-slate-700 dark:text-slate-300",
  "Redux Toolkit": "border-violet-500/50 bg-violet-500/10 text-violet-700 dark:text-violet-300",
  "React Hooks": "border-cyan-500/50 bg-cyan-500/10 text-cyan-700 dark:text-cyan-300",
  "Context API": "border-sky-500/50 bg-sky-500/10 text-sky-700 dark:text-sky-300",
  GraphQL: "border-fuchsia-500/50 bg-fuchsia-500/10 text-fuchsia-700 dark:text-fuchsia-300",
  "Node.js": "border-emerald-500/50 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300",
  "Express.js": "border-zinc-500/50 bg-zinc-500/10 text-zinc-700 dark:text-zinc-300",
  "Tailwind CSS": "border-sky-500/50 bg-sky-500/10 text-sky-700 dark:text-sky-300",
  MongoDB: "border-green-500/50 bg-green-500/10 text-green-700 dark:text-green-300",
  OOP: "border-purple-500/50 bg-purple-500/10 text-purple-700 dark:text-purple-300",
  "VS Code": "border-blue-500/50 bg-blue-500/10 text-blue-700 dark:text-blue-300",
  Azure: "border-sky-500/50 bg-sky-500/10 text-sky-700 dark:text-sky-300",
  JIRA: "border-indigo-500/50 bg-indigo-500/10 text-indigo-700 dark:text-indigo-300",
  Git: "border-orange-500/50 bg-orange-500/10 text-orange-700 dark:text-orange-300",
  GitHub: "border-slate-500/50 bg-slate-500/10 text-slate-700 dark:text-slate-300",
  GitLab: "border-orange-500/50 bg-orange-500/10 text-orange-700 dark:text-orange-300",
  Postman: "border-orange-500/50 bg-orange-500/10 text-orange-700 dark:text-orange-300",
  "Editor.js": "border-cyan-500/50 bg-cyan-500/10 text-cyan-700 dark:text-cyan-300"
};

export function SkillsSection(): React.JSX.Element {
  return (
    <SectionShell id="skills" title="Skills" subtitle="Core technologies I use to design, ship, and scale production web applications.">
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {portfolioConfig.skills.map((group) => (
          <Card key={group.category} className="space-y-4 border-border/80 bg-card/90">
            <div className="flex items-center justify-between">
              <h3 className="font-pixel text-neonCyan">{group.category}</h3>
              <span className="rounded-full border border-neonAmber/35 bg-neonAmber/10 px-2 py-1 font-pixel text-xs text-neonAmber">
                {group.skills.length} skills
              </span>
            </div>
            <ul className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <li key={skill.name} className="group">
                  {(() => {
                    const Icon = skillIconMap[skill.name];
                    return (
                      <span
                        className={cn(
                          "inline-flex items-center gap-2 rounded-md border border-border/90 bg-muted/20 px-2.5 py-1.5 text-sm text-foreground transition-all duration-300 hover:border-neonCyan/45 hover:bg-neonCyan/5",
                          skillStyleMap[skill.name]
                        )}
                      >
                        <span className="inline-flex h-5 min-w-5 items-center justify-center rounded border border-current/35 bg-background/60 px-1 font-pixel text-[10px]">
                          {Icon ? <Icon className="h-3.5 w-3.5" /> : skill.icon}
                        </span>
                        <span className="font-display">{skill.name}</span>
                      </span>
                    );
                  })()}
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </SectionShell>
  );
}
