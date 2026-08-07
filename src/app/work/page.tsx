import type { Metadata } from "next";

import { ExperienceSection, ProjectsSection } from "@/components/sections";
import { SiteShell } from "@/components/layout/site-shell";

export const metadata: Metadata = {
  title: "Work",
  description: "Professional experience and selected engineering projects from Nikesh Kumar's career.",
};

export default function WorkPage() {
  return (
    <SiteShell>
      <ExperienceSection />
      <ProjectsSection />
    </SiteShell>
  );
}
