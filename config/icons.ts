import { Bot, Braces, Brain, Camera, CloudCog, Code2, Component, Cpu, Database, FileCode2, FolderGit2, Gamepad2, Github, Gitlab, Palette, PanelsTopLeft, Rocket, Send, Sparkles, SquareKanban, Trophy } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import type { IconType } from 'react-icons';
import { SiAxios, SiCss, SiGraphql, SiJavascript, SiMongodb, SiNextdotjs, SiReact, SiRedux, SiTailwindcss, SiTypescript } from 'react-icons/si';

export const skillIconMap: Record<string, LucideIcon> = {
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

export const stackIconMap: Record<string, IconType> = {
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

export const learningIconMap: Record<string, LucideIcon> = {
  ai: Bot,
  ml: Brain,
  engineering: Cpu,
  language: Sparkles,
};

export const interestIconMap: { keyword: string; icon: LucideIcon }[] = [
  { keyword: 'photo', icon: Camera },
  { keyword: 'story', icon: Sparkles },
  { keyword: 'video game', icon: Gamepad2 },
  { keyword: 'cricket', icon: Trophy },
  { keyword: 'badminton', icon: Trophy },
  { keyword: 'learning', icon: Rocket },
];
