import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa6";
import type { IconType } from "react-icons";
import Link from "next/link";

import { footerLinks, footerNavigationItems, siteConfig } from "@/data/site";

const footerIcons: Record<string, IconType> = {
  Email: FaEnvelope,
  Git: FaGithub,
  LinkedIn: FaLinkedin,
};

export function Footer() {
  return (
    <footer className="section-shell pb-10 pt-6">
      <div className="flex flex-col gap-4 rounded-[32px] border border-border bg-card/70 px-6 py-6 text-sm text-muted-foreground backdrop-blur-xl md:flex-row md:items-center md:justify-between">
        <p>
          © 2026 {siteConfig.name}
        </p>
        <div className="flex flex-wrap items-center gap-5">
          <nav className="flex flex-wrap items-center gap-4" aria-label="Footer navigation">
            {footerNavigationItems.map((item) => (
              <Link key={item.href} href={item.href} className="transition hover:text-foreground">
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-2">
          {footerLinks.map((link) => {
            const Icon = footerIcons[link.label];

            return (
              <a
                key={link.label}
                href={link.href}
                aria-label={link.label}
                title={link.label}
                className="rounded-full p-2 transition hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <Icon className="h-5 w-5" aria-hidden="true" />
                <span className="sr-only">{link.label}</span>
              </a>
            );
          })}
          </div>
        </div>
      </div>
    </footer>
  );
}