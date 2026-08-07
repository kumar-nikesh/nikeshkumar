import { ArrowRight, Compass, Route, ShieldCheck, UsersRound } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Reveal } from "./motion";
import { SectionHeading } from "./section-heading";

const advisoryAreas = [
  {
    icon: Compass,
    title: "Architecture direction",
    copy: "Review service boundaries, API contracts, data flows, and the trade-offs behind a proposed design.",
  },
  {
    icon: Route,
    title: "Technical roadmaps",
    copy: "Turn product priorities into pragmatic milestones for platforms, integrations, and modernization.",
  },
  {
    icon: ShieldCheck,
    title: "Reliability and delivery",
    copy: "Identify operational risks across observability, deployment, security, performance, and resilience.",
  },
  {
    icon: UsersRound,
    title: "Team enablement",
    copy: "Support engineering teams through reviews, mentoring, decision records, and shared practices.",
  },
];

export function ConsultingSection() {
  return (
    <section id="consulting" className="section-shell py-16 sm:py-20">
      <Reveal>
        <SectionHeading
          eyebrow="Consulting & technical advisory"
          title="Clearer decisions for complex engineering work"
          description="Practical guidance for teams shaping backend platforms, cloud-native services, data workflows, and AI-enabled products."
        />
      </Reveal>
      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        {advisoryAreas.map((area, index) => (
          <Reveal key={area.title} delay={index * 0.06}>
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
      <Reveal delay={0.12} className="mt-8">
        <div className="flex flex-col gap-4 rounded-3xl border border-border bg-card/70 px-6 py-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-2xl text-sm leading-6 text-muted-foreground">
            Best suited to architecture reviews, technical discovery, modernization planning, and hands-on engineering guidance.
          </p>
          <Button asChild variant="outline">
            <Link href="/contact">
              Discuss a challenge
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </Reveal>
    </section>
  );
}
