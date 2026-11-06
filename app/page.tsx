import { AboutSection } from "@/components/sections/about-section";
import { ContactSection } from "@/components/sections/contact-section";
import { EducationSection } from "@/components/sections/education-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { SiteFooter } from "@/components/sections/site-footer";
import { SkillsSection } from "@/components/sections/skills-section";
import { PortfolioHero, SiteHeader } from "@/components/ui/portfolio-hero";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <PortfolioHero />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <EducationSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  );
}
