import { AchievementsSection } from '@/app/(portfolio)/components/achievements-section';
import { ContactSection } from '@/app/(portfolio)/components/contact-section';
import { FooterSection } from '@/app/(portfolio)/components/footer-section';
import { HeroSection } from '@/app/(portfolio)/components/hero-section';
import { InterestsSection } from '@/app/(portfolio)/components/interests-section';
import { LearningsSection } from '@/app/(portfolio)/components/learnings-section';
import { ProjectsSection } from '@/app/(portfolio)/components/projects-section';
import { SkillsSection } from '@/app/(portfolio)/components/skills-section';
import { TimelineSection } from '@/app/(portfolio)/components/timeline-section';
import { SiteShell } from '@/components/layout/site-shell';
import { portfolioConfig } from '@/config/portfolio';

export default function HomePage(): React.JSX.Element {
  return (
    <SiteShell>
      <HeroSection />
      <TimelineSection
        id="about"
        title="About Me"
        subtitle={portfolioConfig.profile.bio}
        items={portfolioConfig.aboutTimeline}
        reverse
      />
      <SkillsSection />
      <LearningsSection />
      <TimelineSection
        id="experience"
        title="Experience"
        subtitle="Track record of delivering production features across CRM, e-commerce, enterprise, and GenAI platforms."
        items={portfolioConfig.experience}
      />
      <ProjectsSection />
      <TimelineSection
        id="education"
        title="Education"
        subtitle="Formal training and academic background that shaped my engineering foundation."
        items={portfolioConfig.education}
      />
      <AchievementsSection />
      <InterestsSection />
      <ContactSection />
      <FooterSection />
    </SiteShell>
  );
}
