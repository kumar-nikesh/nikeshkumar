import { ArrowUpRight, BookOpenText } from "lucide-react";
import Link from "next/link";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Reveal } from "./motion";
import { SectionHeading } from "./section-heading";

const architectureBlogs = [
  {
    title: "Service Boundaries That Last",
    summary: "How to define microservice boundaries that reduce coupling while keeping teams fast.",
    tags: ["Microservices", "Domain Design", "Architecture"],
  },
  {
    title: "Event-Driven Systems in Practice",
    summary: "A practical view of when events help, when they hurt, and how to keep flows observable.",
    tags: ["Kafka", "RabbitMQ", "Event-driven"],
  },
  {
    title: "Designing for Reliability on Day One",
    summary: "Patterns for resilience, fallback behavior, and performance posture before production incidents.",
    tags: ["Reliability", "Cloud", "Operations"],
  },
];

export function BlogsSection() {
  return (
    <section id="blogs" className="section-shell py-16 sm:py-20">
      <Reveal>
        <SectionHeading
          eyebrow="Blogs"
          title="Architecture Notes and Engineering Lessons"
          description="A focused space for architecture-related writing, trade-offs, and implementation insights from real projects."
        />
      </Reveal>
      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {architectureBlogs.map((blog, index) => (
          <Reveal key={blog.title} delay={index * 0.06}>
            <Card className="h-full">
              <CardHeader>
                <div className="flex items-center justify-between gap-3">
                  <div className="rounded-2xl bg-primary/12 p-3 text-primary">
                    <BookOpenText className="h-5 w-5" />
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">Coming soon</span>
                </div>
                <CardTitle className="mt-4 text-xl">{blog.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm leading-6 text-muted-foreground">{blog.summary}</p>
                <div className="flex flex-wrap gap-2">
                  {blog.tags.map((tag) => (
                    <span key={tag} className="rounded-full bg-muted px-3 py-1.5 text-xs font-medium text-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </Reveal>
        ))}
      </div>
      <Reveal delay={0.12} className="mt-8">
        <div className="flex flex-col gap-4 rounded-3xl border border-border bg-card/70 px-6 py-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm leading-6 text-muted-foreground">
            First posts will focus on architecture decisions, event-driven design, and scalable system patterns.
          </p>
          <Link href="/consulting" className="inline-flex items-center gap-2 rounded-full border border-border bg-background/80 px-4 py-2 text-sm font-medium text-foreground hover:bg-muted/70">
            Discuss a topic
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </Reveal>
    </section>
  );
}
