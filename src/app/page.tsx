import { HeroSection, HomeOverviewSection } from "@/components/sections";
import { SiteShell } from "@/components/layout/site-shell";

export default function Home() {
  return (
    <SiteShell>
      <HeroSection />
      <HomeOverviewSection />
    </SiteShell>
  );
}
