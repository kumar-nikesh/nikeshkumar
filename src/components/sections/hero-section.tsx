import { ArrowRight, Download, Sparkles } from "lucide-react";

import { highlightCards, heroStats, siteConfig } from "@/data/site";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { HeroReveal } from "./motion";

export function HeroSection() {
  return (
    <section id="home" className="section-shell relative overflow-hidden pb-20 pt-20 sm:pb-24 sm:pt-24 lg:pb-28 lg:pt-28">
      <div className="tech-grid absolute inset-x-0 top-10 h-[70%] rounded-[40px] opacity-40" aria-hidden="true" />
      <div className="absolute inset-x-10 top-16 -z-10 h-52 rounded-full bg-primary/10 blur-3xl" aria-hidden="true" />
      <div className="grid gap-10 lg:grid-cols-[1.3fr_0.9fr] lg:items-center">
        <HeroReveal className="space-y-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-4 py-2 text-sm text-muted-foreground">
            <Sparkles className="h-4 w-4 text-primary" />
            Senior software engineering foundation with an AI and data trajectory
          </div>
          <div className="space-y-6">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-primary">Nikesh Singh</p>
            <h1 className="font-heading max-w-4xl text-5xl font-semibold tracking-tight text-balance sm:text-6xl lg:text-7xl">
              {siteConfig.title}
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl">
              Nikesh specializes in designing and developing scalable backend systems, APIs,
              microservices, and distributed applications, while building deeper expertise in
              Python, data engineering, data science, artificial intelligence, and machine learning.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <a href="#projects">
                View My Work
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href={siteConfig.resumePath} download>
                Download Resume
                <Download className="h-4 w-4" />
              </a>
            </Button>
            <Button asChild size="lg" variant="ghost">
              <a href="#contact">Contact Me</a>
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
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(45,212,191,0.16),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(245,158,11,0.16),transparent_24%)]" />
            <div className="relative space-y-5">
              <div className="flex items-center justify-between rounded-2xl border border-border bg-background/70 px-4 py-3">
                <div>
                  <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">Current focus</p>
                  <p className="mt-1 font-heading text-lg font-semibold">Engineering systems that scale</p>
                </div>
                <div className="h-3 w-3 rounded-full bg-primary" />
              </div>
              {highlightCards.map((card) => (
                <Card key={card.title} className="bg-background/70">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="rounded-2xl bg-primary/12 p-3 text-primary">
                        <card.icon className="h-5 w-5" />
                      </div>
                      <CardTitle>{card.title}</CardTitle>
                    </div>
                    <CardDescription>{card.body}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
              <Card className="border-dashed bg-background/70">
                <CardContent className="grid grid-cols-[1fr_auto] items-center gap-4 pt-6">
                  <div>
                    <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">Trajectory</p>
                    <p className="mt-2 text-sm leading-6 text-foreground">
                      .NET and distributed systems experience now extending into data platforms,
                      ML experimentation, and AI-enabled software delivery.
                    </p>
                  </div>
                  <ArrowRight className="h-5 w-5 text-primary" />
                </CardContent>
              </Card>
            </div>
          </div>
        </HeroReveal>
      </div>
    </section>
  );
}