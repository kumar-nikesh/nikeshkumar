import type { Metadata } from "next";

import { ContactSection } from "@/components/sections";
import { SiteShell } from "@/components/layout/site-shell";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Nikesh Kumar for engineering, architecture, and advisory conversations.",
};

export default function ContactPage() {
  return (
    <SiteShell>
      <ContactSection />
    </SiteShell>
  );
}
