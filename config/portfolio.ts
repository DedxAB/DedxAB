import type { PortfolioConfig } from '@/lib/types';
import { PORTFOLIO_LIVE_URL } from '@/config/site';

export const portfolioConfig: PortfolioConfig = {
  seo: {
    siteTitle: 'Arnab Bhoumik | R&D Full Stack Engineer',
    titleTemplate: '%s | Arnab Bhoumik',
    description:
      'Portfolio of Arnab Bhoumik, R&D Full Stack Engineer with 2+ years of experience building scalable React and Next.js applications for enterprise and client products.',
    url: PORTFOLIO_LIVE_URL,
    ogImage: '/og-image.svg',
    keywords: [
      'Arnab Bhoumik',
      'R&D Full Stack Engineer',
      'React Developer',
      'Next.js Developer',
      'TypeScript Portfolio',
      'Frontend Engineer',
      'Software Engineer Portfolio',
      'Kolkata Developer',
    ],
  },
  profile: {
    name: 'Arnab Bhoumik',
    role: 'Software Engineer - R&D',
    location: 'Arambagh, West Bengal, India',
    email: 'arnab.officialcorp@gmail.com',
    bio: 'R&D Full Stack Engineer with 2+ years of experience building responsive, scalable web applications using React, Next.js, TypeScript, and modern frontend architecture.',
    avatar: 'https://unavatar.io/x/sumit_x09',
  },
  navigation: [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Learning', href: '#learnings' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Education', href: '#education' },
    { label: 'Achievements', href: '#achievements' },
    { label: 'Interests', href: '#interests' },
    { label: 'Contact', href: '#contact' },
  ],
  hero: {
    greeting: '> booting developer profile...',
    tagline:
      'Building secure, scalable, and user-focused web products with modern frontend engineering.',
    rotatingLines: [
      '2+ years in Software R&D and product delivery',
      'React, Next.js, TypeScript, Redux, and GraphQL',
      'Strong in performance, maintainability, and UX quality',
    ],
    ctaPrimary: 'View Projects',
    ctaSecondary: 'Contact Me',
    systemStats: [
      { label: 'Location', value: 'Arambagh, West Bengal' },
      { label: 'Mode', value: 'Open to Opportunities' },
      { label: 'Stack', value: 'React / Next.js / TypeScript / Node.js' },
    ],
  },
  aboutTimeline: [
    {
      title: 'Diploma in Computer Technology',
      subtitle: 'Contai Polytechnic',
      period: '2018 - 2021',
      description:
        'Built core fundamentals in programming, database systems, and software basics with a practical learning approach.',
    },
    {
      title: 'B.Tech in Computer Science & Engineering',
      subtitle: 'Brainware University, Kolkata',
      period: 'Aug 2021 - Jul 2024',
      description:
        'Expanded into full-stack development with modern web frameworks and built multiple deployable projects.',
    },
    {
      title: 'R&D Full Stack Engineer',
      subtitle: 'Product Engineering and Client Delivery',
      period: '2024 - Present',
      description:
        'Progressed from internship to full-time R&D roles, delivering production features across CRM, e-commerce, enterprise, and GenAI platforms.',
    },
  ],
  experience: [
    {
      title: 'Frontend Developer',
      subtitle: 'YuviPep CRM',
      period: 'Jun 2025 - Present',
      location: 'India',
      description:
        'Engineered key CRM features including ticket and user management, integrated GraphQL queries/mutations, handled global state via Context API, and improved quality through code reviews and documentation.',
    },
    {
      title: 'Software Engineer Research & Development',
      subtitle: 'Telaverge Communications',
      period: 'Dec 2024 - Present',
      location: 'Bengaluru, Karnataka, India',
      description:
        'Working on R&D-focused software engineering initiatives and product development tasks in a production environment.',
    },
    {
      title: 'Software Engineer Research & Development',
      subtitle: 'Telaverge Communications',
      period: 'Jun 2024 - Nov 2024',
      location: 'Bengaluru, Karnataka, India',
      description:
        'Contributed to engineering deliverables as part of the R&D team and supported feature development workflows.',
    },
    {
      title: 'Frontend Developer (Client Project)',
      subtitle: 'Zebra Technologies - GenAI Platform',
      period: 'Aug 2024 - Jul 2025',
      location: 'India',
      description:
        'Built and enhanced GenAI web interfaces with React, SCSS, and Axios; improved accessibility, responsiveness, and performance using code-splitting, lazy loading, and reusable component architecture.',
    },
    {
      title: 'Frontend Developer',
      subtitle: 'YuviPep E-commerce Site',
      period: 'Jun 2024 - Aug 2024',
      location: 'India',
      description:
        'Developed responsive UI with React and Bootstrap, managed async/global state with Redux Toolkit, integrated Google Analytics custom events, and fixed critical UI defects.',
    },
    {
      title: 'Frontend Developer',
      subtitle: 'YuviPep Website',
      period: 'Jan 2023 - Dec 2024',
      location: 'India',
      description:
        'Developed and maintained production web experiences in Next.js/React with Tailwind and TypeScript, integrated APIs, and supported team collaboration and technical issue resolution.',
    },
    {
      title: 'React Developer Intern',
      subtitle: 'themonkeys.life',
      period: 'Aug 2023 - Oct 2023',
      location: 'Remote',
      description:
        'Built a comprehensive editor component using Editor.js, improving content authoring workflow and user experience. Also contributed to responsive web application screens across multiple device sizes.',
    },
  ],
  education: [
    {
      title: 'B.Tech in Computer Science & Engineering',
      subtitle: 'Brainware University',
      period: 'Aug 2021 - Jul 2024',
      location: 'Kolkata, West Bengal',
      description:
        'Completed undergraduate studies in computer science with focus on software engineering, web development, and core CS fundamentals.',
    },
    {
      title: 'Diploma in Computer Technology',
      subtitle: 'Contai Polytechnic',
      period: 'Aug 2018 - Aug 2021',
      location: 'Purba Medinipur, West Bengal',
      description:
        'Built strong technical foundations in programming, object-oriented concepts, and database systems.',
    },
    {
      title: 'Higher Secondary (Science)',
      subtitle: 'Baradongal Ramanath Institution (H.S)',
      period: 'Jan 2010 - Feb 2018',
      location: 'West Bengal, India',
      description:
        'Completed school education in science stream and developed early interest in computing and technology.',
    },
  ],
  skills: [
    {
      category: 'Languages',
      skills: [
        { name: 'JavaScript', icon: 'JS', proficiency: 90 },
        { name: 'TypeScript', icon: 'TS', proficiency: 87 },
        { name: 'Java', icon: 'J', proficiency: 80 },
        { name: 'HTML5', icon: 'H5', proficiency: 92 },
        { name: 'CSS3', icon: 'C3', proficiency: 90 },
        { name: 'SCSS', icon: 'S', proficiency: 84 },
      ],
    },
    {
      category: 'Frameworks & Core',
      skills: [
        { name: 'React', icon: 'R', proficiency: 91 },
        { name: 'Next.js', icon: 'N', proficiency: 88 },
        { name: 'Redux Toolkit', icon: 'RTK', proficiency: 86 },
        { name: 'React Hooks', icon: 'RH', proficiency: 90 },
        { name: 'Context API', icon: 'CTX', proficiency: 84 },
        { name: 'GraphQL', icon: 'GQL', proficiency: 82 },
        { name: 'Node.js', icon: 'ND', proficiency: 76 },
        { name: 'Express.js', icon: 'EX', proficiency: 74 },
        { name: 'Tailwind CSS', icon: 'TW', proficiency: 82 },
        { name: 'MongoDB', icon: 'M', proficiency: 82 },
        { name: 'OOP', icon: 'OOP', proficiency: 80 },
      ],
    },
    {
      category: 'Tools',
      skills: [
        { name: 'VS Code', icon: 'VS', proficiency: 90 },
        { name: 'Azure', icon: 'AZ', proficiency: 72 },
        { name: 'JIRA', icon: 'JR', proficiency: 78 },
        { name: 'Git', icon: 'G', proficiency: 86 },
        { name: 'GitHub', icon: 'GH', proficiency: 87 },
        { name: 'GitLab', icon: 'GL', proficiency: 80 },
        { name: 'Postman', icon: 'P', proficiency: 80 },
        { name: 'Editor.js', icon: 'E', proficiency: 76 },
      ],
    },
  ],
  currentLearnings: [
    {
      title: 'AI Engineering Fundamentals',
      kind: 'engineering',
      status: 'In Progress',
      description:
        'Exploring AI application architecture, prompt workflows, and practical integration patterns for production products.',
    },
    {
      title: 'Dart Language',
      kind: 'language',
      status: 'Exploring',
      description:
        'Studying Dart syntax and core patterns to expand cross-platform development capabilities.',
    },
  ],
  projects: [
    {
      name: 'DedxNotes - Interactive Note Sharing Platform',
      summary:
        'A full-stack note sharing application with modern auth and social-style interactions.',
      stack: ['Next.js', 'JavaScript', 'CSS', 'MongoDB', 'NextAuth'],
      href: 'https://dedxnotes.vercel.app/',
      repo: 'https://github.com/DedxAB/Nextjs14-MongoDB-xNotes',
      highlights: [
        'Implemented core features like adding, editing, deleting, commenting, and liking notes.',
        'Added profile updates and robust search by tags, usernames, and note titles.',
        'Used Google authentication and Next.js route handlers to avoid external backend server dependencies.',
      ],
    },
    {
      name: 'HawtFlix - Movie Web App',
      summary:
        'Single-page movie discovery app with trailers and detailed movie information.',
      stack: ['React (Vite)', 'Redux Toolkit', 'TMDB API'],
      href: 'https://hawtflix.vercel.app/',
      repo: 'https://github.com/DedxAB/HawtFlix',
      highlights: [
        'Fetched latest, popular, and upcoming movie data from TMDB API.',
        'Implemented trailer watch flow and detailed movie info pages.',
        'Built predictable state management using Redux Toolkit.',
      ],
    },
    {
      name: 'YuviPep CRM',
      summary:
        'High-traffic CRM frontend with ticket/user management and GraphQL-powered workflows.',
      stack: ['React.js', 'Tailwind CSS', 'GraphQL', 'Context API'],
      href: `${PORTFOLIO_LIVE_URL}/#projects`,
      highlights: [
        'Built key user-facing CRM modules for ticket and user management.',
        'Integrated optimized GraphQL queries and mutations for efficient data exchange.',
        'Improved maintainability through documentation and active code reviews.',
      ],
    },
    {
      name: 'Zebra Technologies - GenAI Platform',
      summary:
        'Enterprise GenAI frontend experience focused on responsiveness, accessibility, and performance.',
      stack: ['React.js', 'JavaScript', 'SCSS', 'Axios', 'Redux'],
      href: `${PORTFOLIO_LIVE_URL}/#projects`,
      highlights: [
        'Implemented dynamic UI components aligned to agile sprint goals.',
        'Optimized rendering and load performance with lazy loading and memoization.',
        'Maintained reusable component architecture and UI documentation standards.',
      ],
    },
  ],
  achievements: [
    {
      title: 'Runners-up - Internal Smart Hackathon',
      description:
        'Secured runners-up position in Internal Smart Hackathon 2022.',
      year: '2022',
    },
    {
      title: 'Academic Performance',
      description: 'Graduated B.Tech CSE with 9.45 CGPA.',
      year: '2024',
    },
  ],
  interests: [
    'Mobile photography and urban street captures',
    'Visual storytelling through creative shots',
    'Video games (Call of Duty, BGMI)',
    'Cricket and badminton',
    'Learning emerging technologies',
  ],
  contact: {
    headline: "Let's build useful digital products together.",
    description:
      'I am open to software developer opportunities, internships, and collaborative web projects.',
    availability: 'Available for new opportunities in 2026.',
    links: [{ label: 'Email', href: 'mailto:arnab.officialcorp@gmail.com' }],
  },
  socialLinks: [
    { label: 'GitHub', href: 'https://github.com/dedxab' },
    { label: 'LinkedIn', href: 'https://in.linkedin.com/in/arnab-bhoumik' },
    { label: 'X', href: 'https://x.com/sumit_x09' },
    { label: 'Instagram', href: 'https://www.instagram.com/sumit_ig09/' },
  ],
  terminal: {
    welcome: [
      'Retro Portfolio Terminal v2.6',
      "Type 'help' to list available commands.",
      "Try 'game' for a quick mini challenge.",
    ],
    commands: {
      help: {
        description: 'List all available commands',
        output: [
          'help',
          'about',
          'projects',
          'contact',
          'social',
          'game',
          'answer <1-4>',
          'hint',
          'score',
          'exit',
          'clear',
        ],
      },
      about: {
        description: 'Show profile summary',
        output: [
          'Arnab Bhoumik - Software Engineer (R&D)',
          'Focus: React, Next.js, TypeScript, GraphQL, and scalable frontend architecture.',
        ],
      },
      projects: {
        description: 'Show selected projects',
        output: [
          '1) DedxNotes - Interactive Note Sharing Platform',
          '2) HawtFlix - Movie Web App',
          '3) YuviPep CRM',
          '4) Zebra Technologies - GenAI Platform',
        ],
      },
      contact: {
        description: 'Show contact channels',
        output: [
          'arnab.officialcorp@gmail.com',
          'LinkedIn and GitHub links are available below.',
        ],
      },
      social: {
        description: 'List social links',
        output: [
          'github.com/dedxab',
          'in.linkedin.com/in/arnab-bhoumik',
          'x.com/sumit_x09',
          'instagram.com/sumit_ig09',
        ],
      },
      game: {
        description: 'Start portfolio observation quiz',
        output: [
          'Starts a quick quiz about portfolio details.',
          "Then use: answer <1-4>, hint, score, exit.",
        ],
      },
      answer: {
        description: 'Submit answer in quiz mode',
        output: ["Usage: answer <number> (example: 'answer 2')"],
      },
      hint: {
        description: 'Get a hint for current game',
        output: ['Shows a clue for the current question.'],
      },
      score: {
        description: 'Show best game score',
        output: ['Displays current/best score for this session.'],
      },
      exit: {
        description: 'Exit current game mode',
        output: ['Ends the active quiz without changing best score.'],
      },
    },
  },
  easterEgg: {
    sequence: [
      'ArrowUp',
      'ArrowUp',
      'ArrowDown',
      'ArrowDown',
      'ArrowLeft',
      'ArrowRight',
      'ArrowLeft',
      'ArrowRight',
      'b',
      'a',
    ],
    message:
      'Developer mode unlocked: precision, speed, and relentless curiosity.',
  },
};
