import type { Metadata } from "next";

import { AboutSection, SkillsSection } from "@/components/sections";
import { SiteShell } from "@/components/layout/site-shell";

export const metadata: Metadata = {
  title: "About",
  description: "Nikesh Kumar's engineering focus, technical strengths, and professional direction.",
};

export default function AboutPage() {
  return (
    <SiteShell>
      <AboutSection />
      <SkillsSection />
    </SiteShell>
  );
}
