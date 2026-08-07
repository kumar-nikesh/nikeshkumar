import type { Metadata } from "next";

import { ResumeSection } from "@/components/sections";
import { SiteShell } from "@/components/layout/site-shell";

export const metadata: Metadata = {
  title: "Resume",
  description: "Resume snapshot and downloadable resume for Nikesh Kumar.",
};

export default function ResumePage() {
  return (
    <SiteShell>
      <ResumeSection />
    </SiteShell>
  );
}
