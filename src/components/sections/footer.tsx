import { contactLinks, siteConfig } from "@/data/site";

export function Footer() {
  return (
    <footer className="section-shell pb-10 pt-6">
      <div className="flex flex-col gap-4 rounded-[32px] border border-border bg-card/70 px-6 py-6 text-sm text-muted-foreground backdrop-blur-xl md:flex-row md:items-center md:justify-between">
        <p>
          {siteConfig.name} · Software Engineer focused on backend systems, microservices, and the path toward AI and data.
        </p>
        <div className="flex flex-wrap items-center gap-4">
          {contactLinks.slice(0, 3).map((link) => (
            <a key={link.label} href={link.href} className="transition hover:text-foreground">
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}