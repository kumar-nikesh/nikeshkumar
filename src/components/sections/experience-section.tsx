import { BriefcaseBusiness, MapPin } from "lucide-react";

import { experiences } from "@/data/site";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Reveal } from "./motion";
import { SectionHeading } from "./section-heading";

export function ExperienceSection() {
  return (
    <section id="experience" className="section-shell py-20 sm:py-24">
      <Reveal>
        <SectionHeading
          eyebrow="Experience"
          title="Professional timeline"
          description="A career spanning healthcare diagnostics, industrial automation, wind power, enterprise platforms, and search technology."
        />
      </Reveal>
      <div className="mt-12 space-y-6">
        {experiences.map((experience, index) => (
          <Reveal key={`${experience.role}-${index}`} delay={index * 0.08}>
            <div className="grid gap-4 lg:grid-cols-[72px_1fr]">
              <div className="hidden items-start justify-center lg:flex">
                <div className="flex h-14 w-14 items-center justify-center rounded-full border border-border bg-card text-primary">
                  <BriefcaseBusiness className="h-5 w-5" />
                </div>
              </div>
              <Card>
                <CardHeader>
                  <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                    <div>
                      <CardTitle>{experience.role}</CardTitle>
                      <p className="mt-2 text-base font-medium text-foreground">{experience.company}</p>
                    </div>
                    <div className="space-y-2 text-sm text-muted-foreground lg:text-right">
                      <p>{experience.duration}</p>
                      <p className="inline-flex items-center gap-2 lg:justify-end">
                        <MapPin className="h-4 w-4" />
                        {experience.location}
                      </p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-5">
                  <p className="text-sm leading-7 text-muted-foreground">{experience.description}</p>
                  {experience.placeholder ? (
                    <p className="rounded-2xl border border-dashed border-secondary/40 bg-secondary/10 px-4 py-3 text-sm text-foreground">
                      Placeholder content. Replace with verified company, duration, responsibilities, and achievements.
                    </p>
                  ) : null}
                  <div className="grid gap-6 lg:grid-cols-3">
                    <div>
                      <p className="text-sm font-semibold text-foreground">Key responsibilities</p>
                      <ul className="mt-3 space-y-2 text-sm leading-6 text-muted-foreground">
                        {experience.responsibilities.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">Technologies</p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {experience.technologies.map((tech) => (
                          <span key={tech} className="rounded-full bg-muted px-3 py-1.5 text-sm text-foreground">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">Major achievements</p>
                      <ul className="mt-3 space-y-2 text-sm leading-6 text-muted-foreground">
                        {experience.achievements.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}