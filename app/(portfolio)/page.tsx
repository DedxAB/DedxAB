import { AboutSection } from '@/app/(portfolio)/components/about-section';
import { AchievementsSection } from '@/app/(portfolio)/components/achievements-section';
import { ContactSection } from '@/app/(portfolio)/components/contact-section';
import { EducationSection } from '@/app/(portfolio)/components/education-section';
import { ExperienceSection } from '@/app/(portfolio)/components/experience-section';
import { FooterSection } from '@/app/(portfolio)/components/footer-section';
import { HeroSection } from '@/app/(portfolio)/components/hero-section';
import { InterestsSection } from '@/app/(portfolio)/components/interests-section';
import { LearningsSection } from '@/app/(portfolio)/components/learnings-section';
import { ProjectsSection } from '@/app/(portfolio)/components/projects-section';
import { SkillsSection } from '@/app/(portfolio)/components/skills-section';
import { SiteShell } from '@/components/layout/site-shell';

export default function HomePage(): React.JSX.Element {
  return (
    <SiteShell>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <LearningsSection />
      <ExperienceSection />
      <ProjectsSection />
      <EducationSection />
      <AchievementsSection />
      <InterestsSection />
      <ContactSection />
      <FooterSection />
    </SiteShell>
  );
}
