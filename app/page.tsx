import { SiteShell } from "@/components/layout/site-shell";
import { AboutSection } from "@/sections/about-section";
import { AchievementsSection } from "@/sections/achievements-section";
import { ContactSection } from "@/sections/contact-section";
import { EducationSection } from "@/sections/education-section";
import { ExperienceSection } from "@/sections/experience-section";
import { FooterSection } from "@/sections/footer-section";
import { HeroSection } from "@/sections/hero-section";
import { InterestsSection } from "@/sections/interests-section";
import { LearningsSection } from "@/sections/learnings-section";
import { ProjectsSection } from "@/sections/projects-section";
import { SkillsSection } from "@/sections/skills-section";

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
