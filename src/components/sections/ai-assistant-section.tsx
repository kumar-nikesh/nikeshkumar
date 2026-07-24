"use client";

import { BotMessageSquare, Sparkles } from "lucide-react";
import { useState } from "react";

import { aiQuestions } from "@/data/site";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Reveal } from "./motion";
import { SectionHeading } from "./section-heading";

export function AiAssistantSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="section-shell py-20 sm:py-24">
      <Reveal>
        <div className="grid gap-8 xl:grid-cols-[0.9fr_1.1fr] xl:items-start">
          <SectionHeading
            eyebrow="Ask Nikesh AI"
            title="Mock assistant UI, ready for a future API integration"
            description="This is implemented as a frontend-only abstraction with curated responses. It demonstrates the feature without exposing secrets or pretending that an API backend already exists."
          />
          <Card className="overflow-hidden">
            <CardHeader className="border-b border-border bg-background/60">
              <div className="flex items-center gap-3">
                <div className="rounded-2xl bg-primary/12 p-3 text-primary">
                  <BotMessageSquare className="h-5 w-5" />
                </div>
                <div>
                  <CardTitle>Ask Nikesh AI</CardTitle>
                  <p className="mt-1 text-sm text-muted-foreground">Mock responses with a clean upgrade path to a real assistant.</p>
                </div>
              </div>
            </CardHeader>
            <CardContent className="grid gap-6 p-6 lg:grid-cols-[0.9fr_1.1fr]">
              <div className="space-y-3">
                {aiQuestions.map((item, index) => (
                  <Button
                    key={item.question}
                    variant={index === activeIndex ? "default" : "outline"}
                    className="h-auto w-full justify-start rounded-2xl px-4 py-4 text-left whitespace-normal"
                    onClick={() => setActiveIndex(index)}
                  >
                    {item.question}
                  </Button>
                ))}
              </div>
              <div className="rounded-[28px] border border-border bg-background/70 p-5">
                <div className="flex items-center gap-2 text-sm font-medium text-primary">
                  <Sparkles className="h-4 w-4" />
                  Response preview
                </div>
                <p className="mt-4 text-sm leading-7 text-muted-foreground">
                  {aiQuestions[activeIndex]?.answer}
                </p>
                <p className="mt-6 rounded-2xl bg-muted/70 px-4 py-3 text-xs leading-6 text-muted-foreground">
                  Integration note: connect this UI to a server-side API route later and keep API keys in environment variables only.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </Reveal>
    </section>
  );
}