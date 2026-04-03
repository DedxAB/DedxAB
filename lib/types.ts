export type NavItem = {
  label: string;
  href: string;
};

export type HeroConfig = {
  greeting: string;
  tagline: string;
  rotatingLines: string[];
  ctaPrimary: string;
  ctaSecondary: string;
  systemStats: {
    label: string;
    value: string;
  }[];
};

export type TimelineItem = {
  title: string;
  subtitle: string;
  period: string;
  description: string;
  location?: string;
};

export type SkillCategory = {
  category: string;
  skills: {
    name: string;
    icon: string;
    proficiency: number;
  }[];
};

export type ProjectItem = {
  name: string;
  summary: string;
  stack: string[];
  href: string;
  repo?: string;
  highlights: string[];
};

export type Achievement = {
  title: string;
  description: string;
  year: string;
};

export type LearningItem = {
  title: string;
  kind: "ai" | "ml" | "engineering" | "language";
  status: string;
  description: string;
};

export type ContactLink = {
  label: string;
  href: string;
};

export type TerminalCommand = {
  description: string;
  output: string[];
};

export type PortfolioConfig = {
  seo: {
    siteTitle: string;
    titleTemplate: string;
    description: string;
    url: string;
    ogImage: string;
    keywords: string[];
  };
  profile: {
    name: string;
    role: string;
    location: string;
    email: string;
    bio: string;
    avatar: string;
  };
  navigation: NavItem[];
  hero: HeroConfig;
  aboutTimeline: TimelineItem[];
  experience: TimelineItem[];
  education: TimelineItem[];
  skills: SkillCategory[];
  currentLearnings: LearningItem[];
  projects: ProjectItem[];
  achievements: Achievement[];
  interests: string[];
  contact: {
    headline: string;
    description: string;
    availability: string;
    links: ContactLink[];
  };
  socialLinks: ContactLink[];
  terminal: {
    welcome: string[];
    commands: Record<string, TerminalCommand>;
  };
  easterEgg: {
    sequence: string[];
    message: string;
  };
};
