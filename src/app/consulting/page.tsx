import type { Metadata } from "next";

import { ConsultingSection } from "@/components/sections";
import { SiteShell } from "@/components/layout/site-shell";

export const metadata: Metadata = {
  title: "Consulting",
  description: "Consulting and technical advisory for architecture, delivery, reliability, and engineering teams.",
};

export default function ConsultingPage() {
  return (
    <SiteShell>
      <ConsultingSection />
    </SiteShell>
  );
}
