import type { Metadata } from "next";

import { SiteShell } from "@/components/layout/site-shell";
import { BlogsSection } from "@/components/sections";

export const metadata: Metadata = {
  title: "Blogs",
  description: "Architecture-related blogs and engineering notes from Nikesh Kumar.",
};

export default function BlogsPage() {
  return (
    <SiteShell>
      <BlogsSection />
    </SiteShell>
  );
}
