import type { Site } from "./site";

export const site: Site = {
  locale: "en",
  name: "Arthur Duarte",
  role: "Backend and systems architecture",
  location: "Porto Alegre, Brazil",
  avatar: "/avatar.jpg",

  ui: {
    skipLink: "Skip to content",
    navLabel: "Main",
    menuLabel: "Menu",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    languageLabel: "Language",
    avatarAlt: "Photo of Arthur Duarte",
    languagesTitle: "Languages",
    repoPreviewAlt: "Repository preview",
    stackListLabel: "Technologies",
    viewCode: "View code",
    viewCodeOf: "View code of {title} on GitHub",
    concurrency: "Concurrency",
    viewChannel: "View channel",
    backToTop: "Back to top",
    notFoundTitle: "Page not found.",
    notFoundCta: "Back to home",
  },

  meta: {
    title: "Arthur Duarte | Backend and systems architecture",
    description: "I design systems and take part in implementing them. Linux and infrastructure enthusiast.",
  },

  nav: [
    { label: "About", href: "#sobre" },
    { label: "Stack", href: "#stack" },
    { label: "Projects", href: "#projetos" },
    { label: "Content", href: "#conteudo" },
    { label: "Contact", href: "#contato" },
  ],

  hero: {
    eyebrow: "Porto Alegre, Brazil",
    headline: "Backend and systems architecture",
    sub: "I design systems and take part in implementing them. Linux and infrastructure enthusiast.",
    ctaPrimary: { label: "View projects", href: "#projetos" },
    ctaSecondary: { label: "GitHub", href: "https://github.com/ad2486" },
  },

  about: {
    eyebrow: "About",
    title: "From system design to running code.",
    paragraphs: [
      "Student at Colégio Militar de Porto Alegre (military high school), graduating in 2027.",
      "My focus is backend and systems architecture: I want to design systems and also take part in implementing them.",
      "Linux and infrastructure enthusiast.",
    ],
    languages: [
      { name: "Portuguese", level: "Native" },
      { name: "English", level: "C1" },
      { name: "German", level: "A1, learning" },
    ],
  },

  stack: {
    eyebrow: "Stack",
    title: "Everyday tools",
    groups: [
      {
        id: "languages",
        title: "Languages",
        items: [
          { label: "Python", icon: "python" },
          { label: "JavaScript", icon: "javascript" },
          { label: "TypeScript", icon: "typescript" },
          { label: "SQL", icon: "sql" },
          { label: "Rust", icon: "rust" },
        ],
      },
      {
        id: "backend",
        title: "Backend",
        items: [
          { label: "Node.js", icon: "nodejs" },
          { label: "Fastify", icon: "fastify" },
          { label: "Prisma", icon: "prisma" },
          { label: "Zod", icon: "zod" },
          { label: "PostgreSQL", icon: "postgresql" },
        ],
      },
      {
        id: "infra",
        title: "Infra",
        items: [
          { label: "Arch", icon: "arch" },
          { label: "CachyOS", icon: "cachyos" },
          { label: "Fedora", icon: "fedora" },
          { label: "Debian", icon: "debian" },
          { label: "Ubuntu Server", icon: "ubuntu" },
          { label: "Docker", icon: "docker" },
          { label: "SSH", icon: "ssh" },
          { label: "Oracle Cloud", icon: "oracle" },
          { label: "GitHub Actions", icon: "githubactions" },
        ],
      },
      {
        id: "studying",
        title: "Studying",
        items: [
          { label: "Java", icon: "java" },
          { label: "React", icon: "react" },
          { label: "Functional programming", icon: "functional" },
        ],
      },
    ],
  },

  projects: {
    eyebrow: "Projects",
    title: "What I'm building",
    items: [
      {
        slug: "backend-ticketeira",
        title: "Event ticketing system",
        summary:
          "Platform where any user can create events, release seats for sale and buy tickets.",
        details: [
          "Authentication with JWT + argon2, validation with Zod, rate limiting and OpenAPI documentation.",
          "Concurrency in sales is handled with an atomic update / SELECT FOR UPDATE so capacity is never oversold.",
          "Per-user event limit via tiers.",
        ],
        stack: ["TypeScript", "Fastify", "PostgreSQL", "Prisma", "Zod", "OpenAPI", "Vitest", "Docker Compose"],
        status: "In progress",
        repo: "https://github.com/ad2486/backend-ticketeira",
        image: "/projects/backend-ticketeira.png",
        featured: true,
      },
      {
        slug: "dev-tool-cli",
        title: "dev-tool-cli",
        summary: "CLI that sets up development environments.",
        details: [
          "Modular architecture (cli, config, core, errors, os, providers) based on a Provider trait and a Registry.",
          "Tests using fakes. Automated releases via GitHub Actions.",
        ],
        stack: ["Rust", "GitHub Actions"],
        repo: "https://github.com/ad2486/dev-tool-cli",
        image: "/projects/dev-tool-cli.png",
        featured: true,
      },
      {
        slug: "multi-llm-cli",
        title: "multi-llm-cli",
        summary: "CLI for working with multiple LLMs.",
        stack: ["Python"],
        repo: "https://github.com/ad2486/multi-llm-cli",
        image: "/projects/multi-llm-cli.png",
      },
      {
        slug: "welcoming-discord-bot",
        title: "Discord welcome bot",
        summary:
          "Automatically welcomes new members and assigns them a role. Containerized deployment on an Oracle Cloud VM.",
        stack: ["JavaScript", "discord.js", "Docker", "Oracle Cloud"],
        repo: "https://github.com/ad2486/welcoming-discord-bot",
        image: "/projects/welcoming-discord-bot.png",
      },
      {
        slug: "youtube-discord-bot",
        title: "YouTube notification bot for Discord",
        summary: "Automatically announces on the server when a new video is published on the YouTube channel.",
        stack: ["JavaScript", "discord.js", "Docker"],
        repo: "https://github.com/ad2486/youtube-discord-bot",
        image: "/projects/youtube-discord-bot.png",
      },
      {
        slug: "homelab",
        title: "Homelab",
        summary:
          "Ubuntu Server machine built from an old computer, with a static IP via Netplan and key-based SSH access.",
        details: ["Used as a lab for backend, databases and Docker."],
        stack: ["Ubuntu Server", "Netplan", "SSH", "Docker"],
      },
    ],
    others: {
      title: "More on GitHub",
      items: [
        {
          title: "data-report-gen",
          summary: "Automated data analysis pipeline with AI integration.",
          href: "https://github.com/ad2486/data-report-gen",
        },
        {
          title: "reminder-manager",
          summary: "Cross-platform desktop reminder manager with native notifications.",
          href: "https://github.com/ad2486/reminder-manager",
        },
        {
          title: "simple-ecommerce-store",
          summary: "E-commerce API with Flask, SQLAlchemy and SQLite.",
          href: "https://github.com/ad2486/simple-ecommerce-store",
        },
      ],
    },
  },

  content: {
    eyebrow: "Content",
    title: "Technical YouTube channel",
    summary: "Explanations of data structures and LeetCode problems.",
    stats: [
      { value: "1,000+", label: "subscribers" },
      { value: "40K+", label: "views on one video" },
    ],
    channel: { label: "@ad.2486", href: "https://youtube.com/@ad.2486" },
  },

  contact: {
    eyebrow: "Contact",
    title: "Let's talk",
    links: [
      { label: "Email", detail: "arthur.duarte2486@gmail.com", href: "mailto:arthur.duarte2486@gmail.com", icon: "email" },
      { label: "GitHub", href: "https://github.com/ad2486", icon: "github" },
      { label: "LinkedIn", href: "https://linkedin.com/in/arthur-duarte-ad2486", icon: "linkedin" },
      { label: "YouTube", href: "https://youtube.com/@ad.2486", icon: "youtube" },
    ],
  },
};
