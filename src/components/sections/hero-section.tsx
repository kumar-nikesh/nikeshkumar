import { ArrowRight, Download } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { heroStats, siteConfig } from "@/data/site";
import { Button } from "@/components/ui/button";
import { HeroReveal } from "./motion";
import { TypingLine } from "./typing-line";

export function HeroSection() {
  return (
    <section id="home" className="section-shell relative overflow-hidden pb-20 pt-8 sm:pb-24 sm:pt-10 lg:pb-28 lg:pt-14">
      <div className="pointer-events-none tech-grid absolute inset-x-0 top-10 h-[70%] rounded-[40px] opacity-40" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-x-10 top-16 -z-10 h-52 rounded-full bg-primary/10 blur-3xl" aria-hidden="true" />
      <div className="grid gap-10 lg:grid-cols-[1.3fr_0.9fr] lg:items-center">
        <HeroReveal className="space-y-8">
          <div className="space-y-6">
            <Link
              href="/consulting"
              className="inline-flex items-center gap-2 rounded-full border border-emerald-600/25 bg-emerald-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-emerald-700 hover:bg-emerald-500/15 dark:text-emerald-300"
            >
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              Available for consultation
            </Link>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-primary">Nikesh Kumar</p>
            <h1 className="font-heading max-w-4xl text-5xl font-semibold tracking-tight text-balance sm:text-6xl lg:text-7xl">
              {siteConfig.title}
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl">
              Designing scalable software, data, and AI systems.
            </p>
            <TypingLine />
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <Link href="/work">
                View My Work
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href={siteConfig.resumePath} download>
                Download Resume
                <Download className="h-4 w-4" />
              </a>
            </Button>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {heroStats.map((stat) => (
              <div key={stat.label} className="rounded-3xl border border-border bg-card/60 px-5 py-4 backdrop-blur-xl">
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{stat.label}</p>
                <p className="mt-2 text-sm font-medium leading-6 text-foreground">{stat.value}</p>
              </div>
            ))}
          </div>
        </HeroReveal>
        <HeroReveal className="relative" delay={0.1}>
          <div className="glass-panel relative overflow-hidden rounded-[32px] p-6 sm:p-8">
            <div className="relative space-y-4">
              <div className="overflow-hidden rounded-[28px] border border-border bg-background/70">
                <Image
                  src="/photo.jpg"
                  alt="Nikesh Kumar"
                  width={700}
                  height={840}
                  className="h-full w-full object-cover"
                  priority
                />
              </div>
              <div className="grid gap-2 rounded-2xl border border-border bg-background/70 px-4 py-3 text-sm sm:grid-cols-2">
                <p className="font-semibold text-foreground">Software Architect</p>
                <p className="text-muted-foreground sm:text-right">Bengaluru, India</p>
              </div>
            </div>
          </div>
        </HeroReveal>
      </div>
    </section>
  );
}