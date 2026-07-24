import { Code2, Container, DatabaseZap, Server, Sparkles } from "lucide-react";

import { skillCategories } from "@/data/site";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Reveal } from "./motion";
import { SectionHeading } from "./section-heading";

const icons = [Code2, Server, DatabaseZap, Container, Sparkles];

export function SkillsSection() {
  return (
    <section id="skills" className="section-shell py-20 sm:py-24">
      <Reveal>
        <SectionHeading
          eyebrow="Skills"
          title="Core engineering strengths, organized for clarity"
          description="The skills section is intentionally categorized by how work is actually done: language fluency, backend delivery, distributed systems, cloud operations, and the expanding data and AI toolset."
          align="center"
        />
      </Reveal>
      <div className="mt-12 grid gap-5 lg:grid-cols-2 xl:grid-cols-3">
        {skillCategories.map((category, index) => {
          const Icon = icons[index % icons.length];
          return (
            <Reveal key={category.title} delay={index * 0.06}>
              <Card className="h-full">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="rounded-2xl bg-secondary/16 p-3 text-secondary">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <CardTitle>{category.title}</CardTitle>
                      <CardDescription>{category.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-border bg-background/80 px-3 py-2 text-sm text-foreground"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}