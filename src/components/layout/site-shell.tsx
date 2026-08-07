import type { ReactNode } from "react";

import { Footer } from "@/components/sections/footer";
import { Navbar } from "@/components/sections/navbar";

type SiteShellProps = {
  children: ReactNode;
};

export function SiteShell({ children }: SiteShellProps) {
  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
