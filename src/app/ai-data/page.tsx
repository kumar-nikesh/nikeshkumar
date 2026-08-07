import type { Metadata } from "next";

import { AiAssistantSection, JourneySection } from "@/components/sections";
import { SiteShell } from "@/components/layout/site-shell";

export const metadata: Metadata = {
  title: "AI & Data",
  description: "Nikesh Kumar's path from backend engineering toward data platforms and AI-enabled systems.",
};

export default function AiDataPage() {
  return (
    <SiteShell>
      <JourneySection />
      <AiAssistantSection />
    </SiteShell>
  );
}
