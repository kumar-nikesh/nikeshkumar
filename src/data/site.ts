import { Mail, MessageSquare, Phone } from "lucide-react";
import { FaLinkedin } from "react-icons/fa6";

import type {
  AiQuestion,
  ArchitectureItem,
  ContactLink,
  ExperienceItem,
  FooterLink,
  JourneyStep,
  NavigationItem,
  ProjectItem,
  ResumeBlock,
  SkillCategory,
  Stat,
} from "@/types/portfolio";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://nikeshkumar.in";

export const siteConfig = {
  name: "Nikesh Kumar",
  title: "Software Architect",
  description:
    "Software architect designing scalable systems across backend engineering, data platforms, and AI-enabled products.",
  url: siteUrl,
  seo: {
    title: "Nikesh Kumar – Software Architect | Data & AI",
    description:
      "Portfolio of Nikesh Kumar, a software architect designing scalable backend, data, and AI systems.",
    keywords: [
      "Nikesh Kumar",
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
  resumePath: `${basePath}/resume/nikesh-kumar-resume.pdf`,
};

export const contactDetails = {
  email: "nikesh_kumar@hotmail.com",
  phone: "+91 9916134333",
  phoneDisplay: "Available on request",
  linkedinUrl: "https://www.linkedin.com/in/nikeshkumar09/",
  websiteUrl: siteConfig.url,
};

export const navigationItems: NavigationItem[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/work", label: "Work" },
  { href: "/blogs", label: "Blogs" },
  { href: "/consulting", label: "Consulting" },
  { href: "/contact", label: "Contact" },
];

export const footerNavigationItems: NavigationItem[] = [
  { href: "/ai-data", label: "AI & Data" },
  { href: "/resume", label: "Resume" },
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
    skills: ["C#", "Python", "SQL", "SQL / NoSQL", "JavaScript", "TypeScript"],
  },
  {
    title: "Backend",
    description: "Service-oriented engineering with clean APIs, maintainable domain boundaries, and production-ready platforms.",
    skills: [".NET", ".NET Core", "ASP.NET Core", "Web API", "REST APIs", "Microservices", "Architecture"],
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
    skills: ["Azure", "Docker", "Kubernetes", "Git", "CI/CD", "GitHub Actions", "Azure DevOps"],
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
    role: "Lead Engineer - Design & Development",
    company: "Siemens Healthcare",
    duration: "June 2018 to present",
    location: "Location not specified",
    description:
      "Lead Engineer working on the Atellica Solution immunoassay and clinical chemistry analyzer platform, including the current Griffin cloud-native Laboratory Informatics project.",
    responsibilities: [
      "Lead the design and development of ASP.NET Core microservices and BFF services supporting laboratory, patient, sample, and quality control workflows.",
      "Design secure REST APIs with OpenAPI contract-first architecture and integrate laboratory middleware systems.",
      "Build distributed caching and asynchronous processing with Redis and SignalR, and support containerized deployments with Docker, Kubernetes, and Azure DevOps.",
      "Analyze software requirements, manage scope and estimates, coordinate with global teams, review code, mentor engineers, and support production systems.",
    ],
    technologies: [
      "C#",
      ".NET 8",
      "ASP.NET Core",
      "Microservices",
      "OpenAPI",
      "EF Core",
      "SQL Server",
      "Redis",
      "SignalR",
      "Keycloak",
      "OAuth2/OIDC",
      "JWT",
      "Angular",
      "TypeScript",
      "RxJS",
      "NgRx",
      "Docker",
      "Kubernetes (AKS/k3s)",
      "Azure DevOps",
      "xUnit/NUnit",
    ],
    achievements: [
      "Improved application resiliency, scalability, and maintainability through distributed-system design and cloud-native development practices.",
      "Provided early solutions and fixes for verification and reliability testing on the ARM module of Atellica CI 1900.",
      "Maintained communication mechanisms among SIM, Hydra Instrument Service, Maintenance Manager, and DML across analyzers.",
    ],
  },
  {
    role: "Lead Engineer",
    company: "Schneider Electric",
    duration: "July 2017 to June 2018",
    location: "Location not specified",
    description:
      "Worked on SoMove, user-friendly PC setup software for configuring, starting, and maintaining Schneider Electric motor control devices.",
    responsibilities: [
      "Performed requirements analysis, solution design, coding, documentation, unit testing, debugging, and bug fixing.",
      "Managed build processing and ensured timely delivery and release management.",
    ],
    technologies: ["C#/.NET", "Web API", "Angular", "SQL Server 2008", "LINQ", "Visual Studio 2015-2017"],
    achievements: [
      "Delivered and maintained setup software supporting configuration, start-up, and maintenance workflows for motor control devices.",
    ],
  },
  {
    role: "Senior System Engineer",
    company: "Siemens Technology and Service Private Limited",
    duration: "August 2014 to July 2017",
    location: "Location not specified",
    description:
      "Worked on WPMC-SM, the Security Management subsystem for wind park networks, providing user management, authentication, access rights, and security logging.",
    responsibilities: [
      "Performed requirements analysis, solution design, coding, documentation, unit testing, debugging, and bug fixing.",
      "Managed build processing and ensured timely delivery and release management for security-management functionality.",
    ],
    technologies: ["WCF", "Web API", "C#/.NET", "Entity Framework", "LINQ", "SQL Server 2008", "Visual Studio 2010/2012/2015"],
    achievements: [
      "Achieved 80% code coverage in the BDD test environment.",
      "Refactored services to improve performance and code reuse.",
    ],
  },
  {
    role: "Senior System Engineer",
    company: "Infosys Limited",
    duration: "July 2013 to August 2014",
    location: "Location not specified",
    description:
      "Worked on Microsoft projects including NGVL Licensing Content Store and PMC, supporting Azure-based content management and partner membership workflows.",
    responsibilities: [
      "Performed requirements analysis, solution design, coding, documentation, unit testing, debugging, and bug fixing.",
      "Managed build processing, delivery and release management, and client communication.",
    ],
    technologies: ["C#/.NET", "ASP.NET MVC", "SQL Server 2012", "Web Services", "Entity Framework", "HTML5", "jQuery", "Windows Azure", "CSS"],
    achievements: [
      "Delivered functionality for an Azure-based Licensing Content Store with security-aware content hosting and retrieval.",
      "Supported Microsoft partner membership workflows that enabled partners to associate with Microsoft and showcase competencies.",
    ],
  },
  {
    role: "Software Engineer",
    company: "Nerve Centrex Software (India) Pvt. Ltd.",
    duration: "February 2012 to May 2013",
    location: "Location not specified",
    description:
      "Worked on Amlooking4, a search engine for businesses, people, products, and solutions with online, telephonic, SMS, and mobile-app channels.",
    responsibilities: [
      "Participated in requirements gathering, application design, coding, and testing activities.",
      "Designed the application database using Oracle 10g and worked on web services and browser-based functionality.",
    ],
    technologies: ["C#/.NET", "ASP.NET", "Oracle 10g", "Ajax", "JavaScript", "Web Services", "Windows XP"],
    achievements: [
      "Contributed to a multi-channel search platform serving information about businesses, people, products, and solutions.",
    ],
  },
];

export const projects: ProjectItem[] = [
  {
    name: "Griffin",
    tagline: "Cloud-native Laboratory Informatics platform",
    description:
      "A Siemens Healthineers platform providing laboratory workflow management, vendor middleware integration, real-time data processing, and microservice-based healthcare solutions.",
    problem:
      "Supports business-critical laboratory, patient, sample, and quality control workflows that require secure integrations, real-time communication, resilient processing, and scalable operations.",
    architecture:
      "Cloud-native microservices and BFF services using OpenAPI contract-first APIs, distributed caching, asynchronous processing, secure identity, and containerized Kubernetes deployments.",
    technologies: [
      "C#",
      ".NET 8",
      "ASP.NET Core",
      "Microservices",
      "OpenAPI",
      "Entity Framework Core",
      "SQL Server",
      "Redis",
      "SignalR",
      "Keycloak",
      "OAuth2/OIDC",
      "JWT",
      "Angular",
      "TypeScript",
      "RxJS",
      "NgRx",
      "Docker",
      "Kubernetes (AKS/k3s)",
      "Azure DevOps",
    ],
    contributions: [
      "Led the design and development of scalable microservices and BFF services for laboratory workflows.",
      "Implemented secure REST APIs, distributed caching, asynchronous processing, and SignalR-based real-time communication.",
      "Collaborated with global teams, performed code reviews, mentored engineers, and supported production troubleshooting and containerized deployments.",
    ],
    featured: true,
  },
  {
    name: "Atellica Solution",
    tagline: "Immunoassay and clinical chemistry analyzers",
    description:
      "A flexible, scalable, automation-ready analyzer solution combining immunoassay and clinical chemistry workflows with advanced sample-management technology.",
    problem:
      "Addresses clinical laboratory challenges through customizable analyzer configurations, broad assay support, and integrated sample-management workflows.",
    architecture:
      "Service-oriented analyzer software with Hydra Instrument Service, Maintenance Manager, SIM, and DML communication mechanisms.",
    technologies: ["C#/.NET", "Web API", "Microservices", "Angular", "SQL Server 2008", "LINQ", "Visual Studio 2019-2022"],
    contributions: [
      "Developed features for the Hydra Instrument Service and Maintenance Manager modules and maintained them across analyzers.",
      "Analyzed requirements with the Siemens Healthcare Diagnostics USA team and designed solutions for new requirements.",
      "Provided early solutions and fixes for verification and reliability testing on the Atellica CI 1900 ARM module.",
    ],
  },
  {
    name: "SoMove",
    tagline: "Motor control device setup software",
    description:
      "PC software for configuring, starting, and maintaining Schneider Electric motor control devices.",
    problem:
      "Provides user-friendly workflows for device setup and maintenance across configuration preparation, start-up, and service activities.",
    architecture: "Desktop setup application backed by Web API services and Angular user interfaces.",
    technologies: ["C#/.NET", "Web API", "Angular", "SQL Server 2008", "LINQ", "Visual Studio 2015-2017"],
    contributions: [
      "Owned requirements analysis, design, implementation, testing, debugging, bug fixing, and release management.",
    ],
  },
  {
    name: "WPMC: Single Sign-On using OpenID Connect",
    tagline: "Wind power application authentication",
    description:
      "Single sign-on authentication allowing users to access multiple authorized applications without repeated login prompts.",
    problem:
      "Centralizes session and user authentication across applications while respecting application access rights.",
    architecture: "Web API and ASP.NET MVC application using Entity Framework and AngularJS with OpenID Connect authentication.",
    technologies: ["C#/.NET", "Web API", "ASP.NET MVC", "Entity Framework", "HTML5", "AngularJS", "SQL Server 2008", "LINQ"],
    contributions: [
      "Performed requirements analysis, design, coding, documentation, testing, debugging, bug fixing, and release management.",
      "Achieved 80% code coverage after understanding and working in the BDD test environment.",
    ],
  },
  {
    name: "WPMC-SM",
    tagline: "Wind Power Management Center security management",
    description:
      "Security Management functionality for user administration, authentication, access rights, and security logging within a wind park network.",
    problem:
      "Protects sub-systems by controlling identities and recording user activity and security-setting changes.",
    architecture: "WCF and Web API services with Entity Framework and SQL Server persistence.",
    technologies: ["WCF", "Web API", "C#/.NET", "Entity Framework", "LINQ", "SQL Server 2008", "Visual Studio 2010/2012/2015"],
    contributions: [
      "Delivered requirements analysis, design, coding, testing, debugging, bug fixing, build processing, and release management.",
      "Refactored services to improve performance and code reuse while achieving 80% code coverage in the BDD environment.",
    ],
  },
  {
    name: "NGVL: Licensing Content Store",
    tagline: "Azure-based content management",
    description:
      "An Azure-based solution for securely storing and serving application-specific content across Microsoft ECIT applications.",
    problem:
      "Provides consistent content infrastructure while applying the security constraints required by each application.",
    architecture: "ASP.NET MVC and web services with Entity Framework, SQL Server, Azure deployment, and HTML5 interfaces.",
    technologies: ["C#/.NET", "ASP.NET MVC", "SQL Server 2012", "Web Services", "Entity Framework", "HTML5", "jQuery", "Windows Azure"],
    contributions: [
      "Performed requirements analysis, design, coding, documentation, unit testing, debugging, bug fixing, build processing, and client communication.",
    ],
  },
  {
    name: "PMC: Partner Membership Center",
    tagline: "Microsoft partner relationship platform",
    description:
      "A platform enabling partners to associate with Microsoft and showcase their competencies.",
    problem:
      "Supports partner membership workflows and strengthens the relationship between Microsoft and its partners.",
    architecture: "ASP.NET and Entity Framework application with SQL Server persistence.",
    technologies: ["SQL Server 2008", "ASP.NET", "C#/.NET", "Entity Framework", "Visual Studio 2008/2010"],
    contributions: [
      "Performed requirements analysis, design, coding, debugging, bug fixing, client communication, and delivery management.",
    ],
  },
  {
    name: "Amlooking4",
    tagline: "Business and product search engine",
    description:
      "A search engine for businesses, people, products, and solutions with online, telephonic, SMS, and mobile-app channels.",
    problem:
      "Connects customers with business and product information through multiple search and communication channels.",
    architecture: "ASP.NET application with Oracle-backed data services, AJAX interactions, JavaScript, and web services.",
    technologies: ["C#/.NET", "ASP.NET", "Oracle 10g", "AJAX", "JavaScript", "Web Services"],
    contributions: [
      "Participated in requirements gathering, application design, coding, testing, and database design using Oracle 10g.",
    ],
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
      ".NET, .NET Core, C#, ASP.NET Core, REST APIs, Microservices, Architecture, SQL / NoSQL, Redis, SignalR, Kafka, RabbitMQ, Azure, Docker, Kubernetes, Git",
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
    items: ["Griffin, Atellica Solution, SoMove, WPMC, WPMC-SM, NGVL, PMC, and Amlooking4."],
  },
];

export const contactLinks: ContactLink[] = [
  {
    label: "Email",
    value: contactDetails.email,
    href: `mailto:${contactDetails.email}`,
    icon: Mail,
  },
  {
    label: "Phone",
    value: contactDetails.phoneDisplay,
    href: "/contact",
    icon: Phone,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/nikeshkumar09/",
    href: contactDetails.linkedinUrl,
    icon: FaLinkedin,
  },
  {
    label: "Social",
    value: "Add optional profile",
    href: "/contact",
    icon: MessageSquare,
    placeholder: true,
  },
];

export const footerLinks: FooterLink[] = [
  {
    label: "Email",
    href: `mailto:${contactDetails.email}`,
  },
  {
    label: "Git",
    href: "https://github.com/nikeshksingh",
  },
  {
    label: "LinkedIn",
    href: contactDetails.linkedinUrl,
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
      "Nikesh has led the design and development of ASP.NET Core microservices and BFF services for Griffin, a Siemens Healthineers Laboratory Informatics platform. His work includes OpenAPI contract-first APIs, distributed caching with Redis, asynchronous processing, SignalR real-time communication, and containerized Kubernetes deployments.",
  },
  {
    question: "What is Nikesh's experience with .NET?",
    answer:
      "Nikesh has worked with C# and .NET throughout his career, progressing from ASP.NET and web services to ASP.NET Core, REST APIs, microservices, Entity Framework Core, and cloud-native healthcare platforms. He has held Lead Engineer and Senior System Engineer roles at Siemens Healthcare, Schneider Electric, Siemens Technology, and Infosys.",
  },
  {
    question: "Why is Nikesh moving toward Data Science?",
    answer:
      "The move builds on his backend and systems background. Data science and AI extend that foundation into analytics, experimentation, and intelligent applications where strong engineering discipline still matters.",
  },
  {
    question: "What projects has Nikesh worked on?",
    answer:
      "Nikesh's project experience includes Griffin and Atellica Solution at Siemens Healthcare, SoMove at Schneider Electric, WPMC and WPMC-SM at Siemens, NGVL and PMC for Microsoft projects at Infosys, and the Amlooking4 search engine at Nerve Centrex.",
  },
];

