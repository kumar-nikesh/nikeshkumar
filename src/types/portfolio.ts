import type { LucideIcon } from "lucide-react";

export type NavigationItem = {
  href: string;
  label: string;
};

export type Stat = {
  label: string;
  value: string;
};

export type SkillCategory = {
  title: string;
  description: string;
  skills: string[];
};

export type ExperienceItem = {
  role: string;
  company: string;
  duration: string;
  location: string;
  description: string;
  responsibilities: string[];
  technologies: string[];
  achievements: string[];
  placeholder?: boolean;
};

export type ProjectItem = {
  name: string;
  tagline: string;
  description: string;
  problem: string;
  architecture: string;
  technologies: string[];
  contributions: string[];
  githubUrl: string;
  liveUrl?: string;
  featured?: boolean;
  placeholder?: boolean;
};

export type ArchitectureItem = {
  title: string;
  summary: string;
  pillars: string[];
};

export type JourneyStep = {
  title: string;
  description: string;
};

export type ResumeBlock = {
  title: string;
  items: string[];
};

export type ContactLink = {
  label: string;
  value: string;
  href: string;
  icon: LucideIcon;
  placeholder?: boolean;
};

export type AiQuestion = {
  question: string;
  answer: string;
};