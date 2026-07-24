import { Brain, Boxes, CloudCog, Database, Rocket } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Reveal } from "./motion";
import { SectionHeading } from "./section-heading";

const focusAreas = [
  {
    icon: Boxes,
    title: "Backend expertise",
    copy: "Strong focus on APIs, service boundaries, maintainable architecture, and runtime reliability.",
  },
  {
    icon: Database,
    title: "Distributed systems",
    copy: "Experience shaping systems that use caching, events, messaging, and resilient communication patterns.",
  },
  {
    icon: CloudCog,
    title: "Cloud and containers",
    copy: "Practical delivery mindset across deployment pipelines, containers, orchestration, and operational readiness.",
  },
  {
    icon: Brain,
    title: "AI and data growth",
    copy: "Actively building depth in Python, data engineering, data science, and machine learning workflows.",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="section-shell py-20 sm:py-24">
      <Reveal>
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <SectionHeading
            eyebrow="About"
            title="From software engineering depth to AI-ready systems thinking"
            description="Nikesh's portfolio is positioned around backend engineering maturity: scalable services, clean APIs, microservices architecture, distributed systems, and cloud-native delivery. The next chapter builds directly on that foundation through Python, data engineering, data science, and AI exploration."
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {focusAreas.map((area, index) => (
              <Reveal key={area.title} delay={index * 0.08}>
                <Card className="h-full">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="rounded-2xl bg-primary/12 p-3 text-primary">
                        <area.icon className="h-5 w-5" />
                      </div>
                      <CardTitle>{area.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm leading-6 text-muted-foreground">{area.copy}</p>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </Reveal>
      <Reveal delay={0.12} className="mt-8">
        <div className="glass-panel flex flex-col gap-4 rounded-[32px] p-8 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">Professional direction</p>
            <p className="mt-3 max-w-3xl text-lg leading-8 text-foreground">
              Continuous learning is not presented here as a side note. It is part of the brand:
              build dependable software systems now, then apply the same rigor to intelligent,
              data-driven platforms.
            </p>
          </div>
          <div className="flex items-center gap-3 rounded-full border border-border bg-background/70 px-5 py-3 text-sm font-medium text-foreground">
            <Rocket className="h-4 w-4 text-secondary" />
            Transitioning with engineering discipline, not trend chasing.
          </div>
        </div>
      </Reveal>
    </section>
  );
}