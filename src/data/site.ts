import {
  BrainCircuit,
  FolderGit2,
  Link2,
  Mail,
  MessageSquare,
  ServerCog,
} from "lucide-react";

import type {
  AiQuestion,
  ArchitectureItem,
  ContactLink,
  ExperienceItem,
  JourneyStep,
  NavigationItem,
  ProjectItem,
  ResumeBlock,
  SkillCategory,
  Stat,
} from "@/types/portfolio";

export const siteConfig = {
  name: "Nikesh Singh",
  title: "Software Engineer | .NET | Microservices | AI & Data",
  description:
    "Experienced software engineer building scalable backend systems, APIs, microservices, and distributed applications while expanding into AI, data engineering, and machine learning.",
  url: "https://nikeshksingh.github.io",
  seo: {
    title: "Nikesh Singh – Software Engineer | .NET | Microservices | AI & Data",
    description:
      "Personal resume and portfolio for Nikesh Singh, showcasing .NET, ASP.NET Core, microservices, distributed systems, cloud engineering, and an evolving focus on AI and data.",
    keywords: [
      "Nikesh Singh",
      ".NET",
      "Microservices",
      "ASP.NET Core",
      "Distributed Systems",
      "Redis",
      "Kubernetes",
      "Python",
      "Data Engineering",
      "AI",
      "Machine Learning",
    ],
  },
  resumePath: "/resume/nikesh-singh-resume.pdf",
};

export const navigationItems: NavigationItem[] = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#architecture", label: "Architecture" },
  { href: "#ai-data", label: "AI & Data" },
  { href: "#resume", label: "Resume" },
  { href: "#contact", label: "Contact" },
];

export const heroStats: Stat[] = [
  { label: "Focus", value: "Scalable backend platforms" },
  { label: "Architecture", value: "Microservices & distributed systems" },
  { label: "Next frontier", value: "Data engineering, AI, and ML" },
];

export const skillCategories: SkillCategory[] = [
  {
    title: "Programming",
    description: "Core languages used across application development, automation, data work, and web interfaces.",
    skills: ["C#", "Python", "SQL", "JavaScript", "TypeScript"],
  },
  {
    title: "Backend",
    description: "Service-oriented engineering with clean APIs, maintainable domain boundaries, and production-ready platforms.",
    skills: [".NET", "ASP.NET Core", "Web API", "REST APIs", "Microservices"],
  },
  {
    title: "Distributed Systems",
    description: "Designing reliable, observable, event-capable systems with real-time and asynchronous communication patterns.",
    skills: [
      "Redis",
      "SignalR",
      "Kafka",
      "RabbitMQ",
      "Pub/Sub",
      "Event-driven architecture",
    ],
  },
  {
    title: "Cloud & DevOps",
    description: "Infrastructure, delivery, and deployment practices that keep software predictable from commit to production.",
    skills: ["Azure", "Docker", "Kubernetes", "CI/CD", "GitHub Actions", "Azure DevOps"],
  },
  {
    title: "Data & AI",
    description: "An expanding toolkit for analytics, experimentation, intelligent systems, and agent-driven workflows.",
    skills: [
      "Python",
      "Pandas",
      "NumPy",
      "Jupyter",
      "Machine Learning",
      "Data Science",
      "Generative AI",
      "AI Agents",
    ],
  },
];

export const experiences: ExperienceItem[] = [
  {
    role: "Senior Software Engineer",
    company: "Placeholder company",
    duration: "Add actual duration",
    location: "Add location",
    description:
      "Placeholder entry. Replace with an actual position to describe backend platform development, API ownership, and service scalability work.",
    responsibilities: [
      "Replace with real responsibilities covering design, delivery, and collaboration.",
      "Add the microservices, API, and distributed-system problems solved in the role.",
      "List measurable platform, reliability, or delivery outcomes once available.",
    ],
    technologies: [".NET", "ASP.NET Core", "Redis", "Docker", "Kubernetes"],
    achievements: [
      "Placeholder only. Update with factual achievements before publishing.",
    ],
    placeholder: true,
  },
  {
    role: "Software Engineer",
    company: "Placeholder company",
    duration: "Add actual duration",
    location: "Add location",
    description:
      "Placeholder entry for earlier career progression, showing growth in backend engineering, integration patterns, and service design.",
    responsibilities: [
      "Document real backend feature ownership and maintenance responsibilities.",
      "Describe any API modernization, observability, or deployment improvements.",
      "Note collaboration with product, QA, DevOps, or architecture stakeholders.",
    ],
    technologies: ["C#", "SQL", "REST APIs", "Azure", "CI/CD"],
    achievements: [
      "Placeholder only. Replace with verified outcomes or remove this bullet.",
    ],
    placeholder: true,
  },
];

export const projects: ProjectItem[] = [
  {
    name: "Griffin",
    tagline: "Enterprise microservices platform",
    description:
      "Placeholder project framing for a large-scale enterprise system built around modular services, distributed communication, and operational resilience.",
    problem:
      "Supports business workflows that need independent services, shared data consistency strategies, responsive APIs, and real-time interactions across domains.",
    architecture:
      "Microservices-based architecture with API-first contracts, distributed caching, event propagation, and containerized deployment orchestration.",
    technologies: [
      ".NET",
      "Microservices",
      "Redis",
      "SignalR",
      "Kubernetes",
      "APIs",
      "Distributed systems",
    ],
    contributions: [
      "Placeholder: replace with Nikesh's exact design, implementation, or ownership contributions.",
      "Placeholder: document real scalability, reliability, or architecture improvements.",
      "Placeholder: include verified integration, caching, or deployment outcomes.",
    ],
    githubUrl: "https://github.com/nikeshksingh",
    featured: true,
    placeholder: true,
  },
  {
    name: "API Platform Accelerator",
    tagline: "Reference backend delivery template",
    description:
      "Placeholder showcase for a reusable service foundation covering authentication, observability, deployment, and service conventions.",
    problem:
      "Reduces repetitive setup work for new backend services and helps teams standardize delivery quality.",
    architecture:
      "Modular service template with clean architecture boundaries, shared infrastructure packages, and CI validation.",
    technologies: ["ASP.NET Core", "Docker", "GitHub Actions", "SQL"],
    contributions: [
      "Placeholder: replace with actual reusable components or engineering standards built.",
    ],
    githubUrl: "https://github.com/nikeshksingh",
    placeholder: true,
  },
];

export const architectureShowcase: ArchitectureItem[] = [
  {
    title: "Microservices Architecture",
    summary:
      "Break systems into focused services with explicit contracts, independent deployment boundaries, and strong operational observability.",
    pillars: ["Service boundaries", "API contracts", "Independent deployability"],
  },
  {
    title: "Event-Driven Architecture",
    summary:
      "Use messaging, async workflows, and publish-subscribe patterns to reduce coupling and improve scalability under changing demand.",
    pillars: ["Domain events", "Async processing", "Loose coupling"],
  },
  {
    title: "Distributed Caching & Realtime",
    summary:
      "Combine Redis caching, pub/sub messaging, and real-time channels to keep systems responsive and coordinated.",
    pillars: ["Redis caching", "Pub/Sub", "SignalR updates"],
  },
  {
    title: "Kubernetes Deployment",
    summary:
      "Container orchestration for repeatable deployments, scaling policies, environment isolation, and resilient service operations.",
    pillars: ["Containers", "Scaling", "Operational resilience"],
  },
];

export const journeySteps: JourneyStep[] = [
  {
    title: "Software Engineering",
    description: "Strong foundation in application design, maintainable code, testing discipline, and delivery ownership.",
  },
  {
    title: "Backend Engineering",
    description: "Deepened focus on APIs, services, persistence, integrations, and runtime behavior under production constraints.",
  },
  {
    title: "Microservices & Distributed Systems",
    description: "Expanded into service decomposition, event-driven workflows, caching, messaging, and infrastructure-aware design.",
  },
  {
    title: "Data Engineering",
    description: "Growing interest in pipelines, data preparation, workflow orchestration, and platform thinking for analytics use cases.",
  },
  {
    title: "Data Science",
    description: "Building practical fluency in Python-based exploration, experimentation, and evidence-driven problem solving.",
  },
  {
    title: "AI & Machine Learning",
    description: "Moving toward intelligent systems, generative AI, and agentic workflows that complement strong engineering foundations.",
  },
];

export const resumeBlocks: ResumeBlock[] = [
  {
    title: "Professional summary",
    items: [
      "Experienced software engineer focused on scalable backend systems, APIs, microservices, and distributed platforms.",
      "Currently extending that foundation into Python, data engineering, data science, AI, and machine learning.",
    ],
  },
  {
    title: "Technical skills",
    items: [
      ".NET, C#, ASP.NET Core, REST APIs, Microservices, Redis, SignalR, Kafka, RabbitMQ, Azure, Docker, Kubernetes",
      "Python, Pandas, NumPy, Jupyter, Data Science, Machine Learning, Generative AI, AI Agents",
    ],
  },
  {
    title: "Education",
    items: ["Placeholder: add actual degree, institution, and year."],
  },
  {
    title: "Certifications",
    items: ["Placeholder: add verified certifications or remove this block."],
  },
  {
    title: "Projects",
    items: ["Griffin and other factual projects can be summarized here once details are confirmed."],
  },
];

export const contactLinks: ContactLink[] = [
  {
    label: "Email",
    value: "nikesh.singh@example.com",
    href: "mailto:nikesh.singh@example.com",
    icon: Mail,
    placeholder: true,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/your-linkedin",
    href: "https://linkedin.com/in/your-linkedin",
    icon: Link2,
    placeholder: true,
  },
  {
    label: "GitHub",
    value: "github.com/nikeshksingh",
    href: "https://github.com/nikeshksingh",
    icon: FolderGit2,
  },
  {
    label: "Social",
    value: "Add optional profile",
    href: "#contact",
    icon: MessageSquare,
    placeholder: true,
  },
];

export const aiQuestions: AiQuestion[] = [
  {
    question: "What technologies does Nikesh specialize in?",
    answer:
      "Nikesh's core strength is backend engineering with .NET, C#, ASP.NET Core, APIs, microservices, distributed systems, Redis, and container-based delivery. He is also expanding into Python, data engineering, and AI-focused workflows.",
  },
  {
    question: "Tell me about Nikesh's microservices experience.",
    answer:
      "Nikesh focuses on decomposing backend systems into maintainable services with clear contracts, scalable communication patterns, distributed caching, and operational readiness. Replace the project-specific examples with verified details to make this section production-ready.",
  },
  {
    question: "What is Nikesh's experience with .NET?",
    answer:
      "The portfolio positions Nikesh as an experienced .NET engineer working on backend services, APIs, and enterprise application architecture. You should update the experience timeline with exact employers, durations, and achievements before publishing.",
  },
  {
    question: "Why is Nikesh moving toward Data Science?",
    answer:
      "The move builds on his backend and systems background. Data science and AI extend that foundation into analytics, experimentation, and intelligent applications where strong engineering discipline still matters.",
  },
  {
    question: "What projects has Nikesh worked on?",
    answer:
      "The current site includes factual-safe placeholder project structures, including Griffin as a microservices-based enterprise system. Replace placeholder contribution details with validated project history before launch.",
  },
];

export const highlightCards = [
  {
    title: "Backend systems",
    body: "Designing scalable services, APIs, and operationally reliable platforms.",
    icon: ServerCog,
  },
  {
    title: "Architecture thinking",
    body: "Translating product needs into modular systems, integration strategies, and delivery standards.",
    icon: BrainCircuit,
  },
];