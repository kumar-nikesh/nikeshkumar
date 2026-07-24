import { journeySteps } from "@/data/site";
import { Card, CardContent } from "@/components/ui/card";
import { Reveal } from "./motion";
import { SectionHeading } from "./section-heading";

export function JourneySection() {
  return (
    <section id="ai-data" className="section-shell py-20 sm:py-24">
      <Reveal>
        <SectionHeading
          eyebrow="AI & Data journey"
          title="A clear progression toward intelligent systems"
          description="The roadmap below explains the professional arc from software engineering into backend specialization, distributed systems, data work, and AI. It communicates direction without overstating current experience."
        />
      </Reveal>
      <div className="mt-12 grid gap-4 lg:grid-cols-6">
        {journeySteps.map((step, index) => (
          <Reveal key={step.title} delay={index * 0.05}>
            <Card className="relative h-full overflow-hidden">
              <CardContent className="h-full p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">0{index + 1}</p>
                <h3 className="mt-3 font-heading text-xl font-semibold text-foreground">{step.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{step.description}</p>
              </CardContent>
            </Card>
          </Reveal>
        ))}
      </div>
      <Reveal delay={0.14} className="mt-8">
        <div className="rounded-[32px] border border-border bg-card/70 px-6 py-5 text-sm leading-7 text-muted-foreground backdrop-blur-xl sm:px-8">
          Software Engineering → Backend Engineering → Microservices & Distributed Systems → Data Engineering → Data Science → AI & Machine Learning
        </div>
      </Reveal>
    </section>
  );
}