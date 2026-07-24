import { architectureShowcase } from "@/data/site";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Reveal } from "./motion";
import { SectionHeading } from "./section-heading";

export function ArchitectureSection() {
  return (
    <section id="architecture" className="section-shell py-20 sm:py-24">
      <Reveal>
        <SectionHeading
          eyebrow="Engineering & Architecture"
          title="How systems are approached"
          description="This section uses a clean visual language instead of overloaded diagrams. It highlights the architecture patterns Nikesh applies when building scalable backend platforms."
        />
      </Reveal>
      <div className="mt-12 grid gap-6 xl:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <Card className="h-full p-6 sm:p-8">
            <div className="rounded-[28px] border border-border bg-background/70 p-6">
              <div className="grid gap-4 text-center text-sm font-medium text-foreground sm:grid-cols-3">
                <div className="rounded-2xl bg-card px-4 py-6">Client apps</div>
                <div className="rounded-2xl bg-card px-4 py-6">API gateway</div>
                <div className="rounded-2xl bg-card px-4 py-6">Identity</div>
              </div>
              <div className="my-4 h-px bg-border" />
              <div className="grid gap-4 sm:grid-cols-3">
                <div className="rounded-2xl border border-border bg-primary/8 px-4 py-6 text-center text-sm font-medium text-foreground">
                  Service A
                </div>
                <div className="rounded-2xl border border-border bg-primary/8 px-4 py-6 text-center text-sm font-medium text-foreground">
                  Service B
                </div>
                <div className="rounded-2xl border border-border bg-primary/8 px-4 py-6 text-center text-sm font-medium text-foreground">
                  Service C
                </div>
              </div>
              <div className="my-4 flex items-center justify-center gap-4 text-xs uppercase tracking-[0.24em] text-muted-foreground">
                <span>Events</span>
                <span>Redis cache</span>
                <span>Pub/Sub</span>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl bg-card px-4 py-5 text-center text-sm font-medium text-foreground">
                  Messaging and event bus
                </div>
                <div className="rounded-2xl bg-card px-4 py-5 text-center text-sm font-medium text-foreground">
                  Kubernetes deployment platform
                </div>
              </div>
            </div>
          </Card>
        </Reveal>
        <div className="grid gap-5">
          {architectureShowcase.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.06}>
              <Card>
                <CardHeader>
                  <CardTitle>{item.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm leading-6 text-muted-foreground">{item.summary}</p>
                  <div className="flex flex-wrap gap-2">
                    {item.pillars.map((pillar) => (
                      <span key={pillar} className="rounded-full bg-muted px-3 py-1.5 text-sm text-foreground">
                        {pillar}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}