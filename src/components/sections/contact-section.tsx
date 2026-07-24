"use client";

import { Send } from "lucide-react";
import { useState } from "react";

import { contactLinks } from "@/data/site";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Reveal } from "./motion";
import { SectionHeading } from "./section-heading";

type ContactErrors = {
  name?: string;
  email?: string;
  message?: string;
};

export function ContactSection() {
  const [errors, setErrors] = useState<ContactErrors>({});
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(formData: FormData) {
    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();

    const nextErrors: ContactErrors = {};

    if (!name) {
      nextErrors.name = "Please enter your name.";
    }

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      nextErrors.email = "Please enter a valid email address.";
    }

    if (!message || message.length < 20) {
      nextErrors.message = "Please enter at least 20 characters.";
    }

    setErrors(nextErrors);
    setSubmitted(Object.keys(nextErrors).length === 0);
  }

  return (
    <section id="contact" className="section-shell py-20 sm:py-24">
      <Reveal>
        <div className="grid gap-8 xl:grid-cols-[0.82fr_1.18fr]">
          <div className="space-y-6">
            <SectionHeading
              eyebrow="Contact"
              title="Open for engineering conversations"
              description="Contact details are separated into structured data, and placeholder fields are visibly marked so nothing misleading ships by accident."
            />
            <div className="grid gap-4">
              {contactLinks.map((link) => (
                <Card key={link.label} className="bg-card/75">
                  <CardContent className="flex items-center gap-4 p-5">
                    <div className="rounded-2xl bg-primary/12 p-3 text-primary">
                      <link.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">{link.label}</p>
                      <a href={link.href} className="mt-1 block text-sm text-muted-foreground hover:text-foreground">
                        {link.value}
                      </a>
                      {link.placeholder ? (
                        <p className="mt-1 text-xs uppercase tracking-[0.18em] text-secondary">Placeholder</p>
                      ) : null}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          <Card>
            <CardHeader>
              <CardTitle>Send a message</CardTitle>
            </CardHeader>
            <CardContent>
              <form action={handleSubmit} className="space-y-5" noValidate>
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" name="name" placeholder="Your name" aria-invalid={Boolean(errors.name)} />
                  {errors.name ? <p className="text-sm text-red-600 dark:text-red-400">{errors.name}</p> : null}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your.email@example.com"
                    aria-invalid={Boolean(errors.email)}
                  />
                  {errors.email ? <p className="text-sm text-red-600 dark:text-red-400">{errors.email}</p> : null}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Share what you'd like to discuss."
                    aria-invalid={Boolean(errors.message)}
                  />
                  {errors.message ? <p className="text-sm text-red-600 dark:text-red-400">{errors.message}</p> : null}
                </div>
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-sm text-muted-foreground">
                    This form currently validates on the client and is ready to connect to an email or serverless workflow.
                  </p>
                  <Button type="submit">
                    <Send className="h-4 w-4" />
                    Submit
                  </Button>
                </div>
                {submitted ? (
                  <p className="rounded-2xl bg-primary/10 px-4 py-3 text-sm text-foreground">
                    Form validation passed. Connect this action to your preferred backend or form service.
                  </p>
                ) : null}
              </form>
            </CardContent>
          </Card>
        </div>
      </Reveal>
    </section>
  );
}