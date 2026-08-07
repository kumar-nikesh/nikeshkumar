import { ArrowUpRight, Layers3 } from "lucide-react";

import { projects } from "@/data/site";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Reveal } from "./motion";
import { SectionHeading } from "./section-heading";

export function ProjectsSection() {
  return (
    <section id="projects" className="section-shell py-20 sm:py-24">
      <Reveal>
        <SectionHeading
          eyebrow="Featured projects"
          title="Work framed around problems, architecture, and contribution"
          description="Project cards show the domains, engineering problems, architectures, and contributions behind the work."
        />
      </Reveal>
      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        {projects.map((project, index) => (
          <Reveal key={project.name} delay={index * 0.08}>
            <Card className="h-full overflow-hidden">
              <CardHeader className="relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.14),transparent_24%),radial-gradient(circle_at_bottom_left,rgba(45,212,191,0.16),transparent_28%)]" />
                <div className="relative space-y-3">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">{project.tagline}</p>
                      <CardTitle className="mt-2 text-2xl">{project.name}</CardTitle>
                    </div>
                    <div className="rounded-2xl border border-border bg-background/70 p-3 text-primary">
                      <Layers3 className="h-5 w-5" />
                    </div>
                  </div>
                  <CardDescription>{project.description}</CardDescription>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                {project.placeholder ? (
                  <p className="rounded-2xl border border-dashed border-secondary/40 bg-secondary/10 px-4 py-3 text-sm text-foreground">
                    Placeholder project framing. Update links, exact scope, and real contributions before publishing.
                  </p>
                ) : null}
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl bg-background/70 p-4">
                    <p className="text-sm font-semibold text-foreground">Problem solved</p>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">{project.problem}</p>
                  </div>
                  <div className="rounded-2xl bg-background/70 p-4">
                    <p className="text-sm font-semibold text-foreground">Architecture</p>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">{project.architecture}</p>
                  </div>
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">Technologies</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="rounded-full border border-border bg-card/70 px-3 py-1.5 text-sm text-foreground">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">Key contributions</p>
                  <ul className="mt-3 space-y-2 text-sm leading-6 text-muted-foreground">
                    {project.contributions.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-col gap-3 sm:flex-row">
                  {project.liveUrl ? (
                    <Button asChild variant="secondary">
                      <a href={project.liveUrl} target="_blank" rel="noreferrer">
                        <ArrowUpRight className="h-4 w-4" />
                        Live demo
                      </a>
                    </Button>
                  ) : null}
                </div>
              </CardContent>
            </Card>
          </Reveal>
        ))}
      </div>
    </section>
  );
}