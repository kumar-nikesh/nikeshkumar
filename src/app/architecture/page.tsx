import type { Metadata } from "next";

import { ArchitectureSection } from "@/components/sections";
import { SiteShell } from "@/components/layout/site-shell";

export const metadata: Metadata = {
  title: "Architecture",
  description: "Architecture patterns and engineering principles used by Nikesh Kumar.",
};

export default function ArchitecturePage() {
  return (
    <SiteShell>
      <ArchitectureSection />
    </SiteShell>
  );
}
