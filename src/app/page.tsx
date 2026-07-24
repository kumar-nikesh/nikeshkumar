import {
  AboutSection,
  AiAssistantSection,
  ArchitectureSection,
  ContactSection,
  ExperienceSection,
  Footer,
  HeroSection,
  JourneySection,
  Navbar,
  ProjectsSection,
  ResumeSection,
  SkillsSection,
} from "@/components/sections";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <ArchitectureSection />
        <JourneySection />
        <ResumeSection />
        <AiAssistantSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
