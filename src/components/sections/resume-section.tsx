import { Download, FileText } from "lucide-react";

import { resumeBlocks, siteConfig } from "@/data/site";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Reveal } from "./motion";
import { SectionHeading } from "./section-heading";

export function ResumeSection() {
  return (
    <section id="resume" className="section-shell py-20 sm:py-24">
      <Reveal>
        <div className="grid gap-8 xl:grid-cols-[0.8fr_1.2fr] xl:items-start">
          <SectionHeading
            eyebrow="Resume"
            title="A downloadable summary with clear update points"
            description="The website keeps resume content separate from the UI so professional information can be updated quickly. The PDF action is live and points to a replaceable asset in the public folder."
          />
          <Card>
            <CardHeader className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-3">
                <div className="rounded-2xl bg-primary/12 p-3 text-primary">
                  <FileText className="h-5 w-5" />
                </div>
                <CardTitle>Resume snapshot</CardTitle>
              </div>
              <Button asChild>
                <a href={siteConfig.resumePath} download>
                  <Download className="h-4 w-4" />
                  Download Resume
                </a>
              </Button>
            </CardHeader>
            <CardContent className="grid gap-5 sm:grid-cols-2">
              {resumeBlocks.map((block) => (
                <div key={block.title} className="rounded-3xl border border-border bg-background/70 p-5">
                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">{block.title}</p>
                  <ul className="mt-4 space-y-2 text-sm leading-6 text-muted-foreground">
                    {block.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </Reveal>
    </section>
  );
}