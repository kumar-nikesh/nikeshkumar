"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { useEffect, useState } from "react";

import { navigationItems, siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./theme-toggle";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-40 px-4 pt-4 sm:px-6 lg:px-8">
      <div
        className={cn(
          "mx-auto flex max-w-7xl items-center justify-between rounded-full border px-4 py-3 transition-all duration-300 sm:px-5",
          scrolled ? "glass-panel" : "border-transparent bg-transparent"
        )}
      >
        <Link href="#home" className="font-heading text-sm font-semibold tracking-[0.2em] text-foreground uppercase">
          {siteConfig.name}
        </Link>
        <nav className="hidden items-center gap-1 lg:flex">
          {navigationItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm text-muted-foreground transition hover:bg-muted/70 hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-2 lg:flex">
          <ThemeToggle />
          <Button asChild variant="outline" size="sm">
            <a href={siteConfig.resumePath} download>
              Download Resume
            </a>
          </Button>
        </div>
        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <Button aria-label="Open menu" variant="ghost" size="icon" onClick={() => setMobileOpen(true)}>
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
      {mobileOpen ? (
        <div className="fixed inset-0 z-50 bg-black/35 px-4 py-6 backdrop-blur-sm lg:hidden">
          <div className="mx-auto max-w-md rounded-[28px] border border-border bg-background p-6 shadow-2xl">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="font-heading text-2xl font-semibold">Navigate</h2>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  Jump across the portfolio sections and resume actions.
                </p>
              </div>
              <Button variant="ghost" size="icon" onClick={() => setMobileOpen(false)}>
                <span className="text-lg leading-none">×</span>
              </Button>
            </div>
            <div className="mt-6 grid gap-2">
              {navigationItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-2xl border border-border bg-card px-4 py-3 text-sm font-medium text-foreground transition hover:bg-muted/70"
                >
                  {item.label}
                </a>
              ))}
              <a
                href={siteConfig.resumePath}
                download
                onClick={() => setMobileOpen(false)}
                className="rounded-2xl bg-primary px-4 py-3 text-sm font-medium text-primary-foreground"
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}