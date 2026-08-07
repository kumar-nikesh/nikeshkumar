import { ArrowUpRight, Boxes, Compass, MessageCircle } from "lucide-react";
import Link from "next/link";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Reveal } from "./motion";

const destinations = [
  {
    href: "/work",
    icon: Boxes,
    title: "Work",
    copy: "Experience, projects, and the engineering problems behind them.",
  },
  {
    href: "/blogs",
    icon: Compass,
    title: "Blogs",
    copy: "Architecture-focused blogs covering practical patterns and design decisions.",
  },
  {
    href: "/consulting",
    icon: MessageCircle,
    title: "Consulting",
    copy: "Technical advisory for decisions that need clarity and momentum.",
  },
];

export function HomeOverviewSection() {
  return (
    <section className="section-shell pb-20 sm:pb-24">
      <Reveal>
        <div className="border-t border-border/70 pt-10">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">Explore</p>
          <h2 className="section-title mt-3">A focused view of the work</h2>
          <p className="section-copy mt-4">Start with the area that matches what you need.</p>
        </div>
      </Reveal>
      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {destinations.map((destination, index) => (
          <Reveal key={destination.href} delay={index * 0.08}>
            <Link href={destination.href} className="group block h-full">
              <Card className="h-full transition duration-200 group-hover:-translate-y-1 group-hover:border-primary/35 group-hover:shadow-lg">
                <CardHeader>
                  <div className="flex items-center justify-between gap-4">
                    <div className="rounded-2xl bg-primary/12 p-3 text-primary">
                      <destination.icon className="h-5 w-5" />
                    </div>
                    <ArrowUpRight className="h-5 w-5 text-primary transition-transform group-hover:translate-x-1" />
                  </div>
                  <CardTitle className="mt-4">{destination.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm leading-6 text-muted-foreground">{destination.copy}</p>
                </CardContent>
              </Card>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
