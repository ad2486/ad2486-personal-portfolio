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
    stackListLabel: "Technologies",
    viewCode: "View code",
    viewCodeOf: "View code of {title} on GitHub",
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
    { label: "Bookshelf", href: "https://estante.arthur-duarte-portfolio.com.br/" },
  ],

  hero: {
    headline: "Backend and systems architecture",
    sub: "I design systems and take part in implementing them. Linux and infrastructure enthusiast.",
    ctaPrimary: { label: "View projects", href: "#projetos" },
    ctaSecondary: { label: "GitHub", href: "https://github.com/ad2486" },
  },

  about: {
    title: "About",
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
    title: "Stack",
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
          { label: "FastAPI", icon: "fastapi" },
          { label: "Prisma", icon: "prisma" },
          { label: "SQLAlchemy", icon: "sqlalchemy" },
          { label: "Zod", icon: "zod" },
          { label: "PostgreSQL", icon: "postgresql" },
          { label: "MySQL", icon: "mysql" },
        ],
      },
      {
        id: "infra",
        title: "Infra",
        items: [
          { label: "Debian", icon: "debian" },
          { label: "Ubuntu Server", icon: "ubuntu" },
          { label: "Rocky Linux", icon: "rocky" },
          { label: "Docker", icon: "docker" },
          { label: "nginx", icon: "nginx" },
          { label: "SSH", icon: "ssh" },
          { label: "Oracle Cloud", icon: "oracle" },
          { label: "AWS", icon: "aws" },
          { label: "GitHub Actions", icon: "githubactions" },
        ],
      },
      {
        id: "studying",
        title: "Studying",
        items: [
          { label: "Java", icon: "java" },
          { label: "React", icon: "react" },
          { label: "Elixir", icon: "elixir" },
        ],
      },
    ],
  },

  projects: {
    title: "Projects",
    items: [
      {
        slug: "backend-ticketeira",
        title: "Event ticketing system",
        summary:
          "Ticket sales API for events. For now it has user sign-up and login, creating, editing, publishing and canceling events, a public event listing and ticket purchase.",
        details: [
          "Fastify with Zod validation, OpenAPI documentation at /docs and argon2 password hashing.",
          "Login with JWT and refresh tokens with rotation and reuse detection. Rate limit of 5 attempts per minute on login.",
          "Each user can only create a limited number of active events (draft or published) depending on their tier (free, verified, pro): 2, 5 and 8. The count runs in a transaction that locks the user.",
          "The creator edits, publishes and cancels their own events. The public listing shows only published events that have not started yet, with city and state filters and pagination.",
          "Ticket purchase is limited to one per user per event, with a lock on the event to respect capacity. It checks the minimum age and whether the event has already started. Rate limit of 10 orders per minute. A user's tickets are available at /tickets/mine.",
          "Data model in Prisma 8 and PostgreSQL, with users, events, orders and tickets.",
          "Database constraints, such as sold_tickets <= capacity, protect event capacity.",
          "CORS enabled for the frontend origin.",
          "Integration tests with Vitest, including concurrent purchases.",
        ],
        stack: ["TypeScript", "Fastify", "PostgreSQL", "Prisma", "Zod", "OpenAPI", "JWT", "Vitest", "Docker Compose"],
        status: "In progress",
        repo: "https://github.com/ad2486/backend-ticketeira",
        featured: true,
      },
      {
        slug: "dev-tool-cli",
        title: "dev-tool-cli",
        summary: "CLI that sets up development environments in one command, the same way on every machine.",
        details: [
          "Installs the Python (uv) and Rust (rustup) toolchains, creates the project and records the versions in dev.toml. dev doctor checks what is missing on the machine and dev config reads and writes preferences.",
          "Single binary for macOS and Linux, with an installer that verifies the SHA-256 checksum.",
          "Modular architecture (cli, config, core, errors, os, providers) based on a Provider trait and a Registry.",
          "Tests using fakes. Automated releases via GitHub Actions.",
        ],
        stack: ["Rust", "GitHub Actions"],
        repo: "https://github.com/ad2486/dev-tool-cli",
        featured: true,
      },
      {
        slug: "multi-llm-cli",
        title: "multi-llm-cli",
        summary: "Terminal CLI for chatting with several LLMs, built to make free models from different providers easier to access.",
        details: [
          "Supports OpenRouter, Groq and Google. Multi-turn history, markdown in the terminal, switching model and provider mid-conversation and importing files into the context.",
          "Optional tool calling (bash, read_file, write_file) on OpenRouter and Groq. Every execution asks for confirmation, defaulting to no.",
        ],
        stack: ["Python", "uv"],
        repo: "https://github.com/ad2486/multi-llm-cli",
      },
      {
        slug: "welcoming-discord-bot",
        title: "Discord welcome bot",
        summary:
          "Automatically welcomes new members and assigns them a role. Containerized deployment on an Oracle Cloud VM.",
        stack: ["JavaScript", "discord.js", "Docker", "Oracle Cloud"],
        repo: "https://github.com/ad2486/welcoming-discord-bot",
      },
      {
        slug: "youtube-discord-bot",
        title: "YouTube notification bot for Discord",
        summary: "Announces on the server when a new video is published on the YouTube channel or a livestream starts. Uses the RSS feed, no Google API key.",
        details: [
          "The RSS feed only shows a stream after it ends. So the bot also checks the channel's /live page on every cycle.",
          "Stores already-announced IDs in data/state.json so it does not repeat announcements after a restart.",
        ],
        stack: ["JavaScript", "discord.js", "Docker"],
        repo: "https://github.com/ad2486/youtube-discord-bot",
      },
      {
        slug: "homelab",
        title: "Homelab",
        summary:
          "Ubuntu Server machine built from an old computer, with a static IP via Netplan and key-based SSH access.",
        details: ["Used as a lab for backend, databases and Docker."],
        stack: ["Ubuntu Server", "Netplan", "SSH", "Docker"],
      },
      {
        slug: "ad2486-personal-portfolio",
        title: "Personal portfolio",
        summary: "This site: Next.js with static export in three languages, served by nginx on an Oracle Cloud VM.",
        details: [
          "Deployed via GitHub Actions. The project list is updated weekly by Claude.",
          "The frontend was delegated to Claude Code. The infrastructure (VM, nginx, rate limit, deploy, Cloudflare) was done by hand.",
        ],
        stack: ["TypeScript", "Next.js", "nginx", "Oracle Cloud", "Cloudflare", "GitHub Actions"],
        repo: "https://github.com/ad2486/ad2486-personal-portfolio",
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

  flow: {
    title: "How this site reaches you",
    summary: "No hosting platform: this is the path from a commit to your browser, built and run by me.",
    steps: [
      { label: "git push", detail: "Commit to the main branch on GitHub." },
      { label: "GitHub Actions", detail: "npm ci and next build produce the static site in out/." },
      { label: "rsync over SSH", detail: "Sends only what changed, as a deploy user without sudo." },
      { label: "nginx", detail: "Ubuntu VM on Oracle Cloud, with gzip and long caching for assets." },
      { label: "Cloudflare", detail: "Proxy and CDN in front of the VM. HTTPS all the way to the origin, with a Let's Encrypt certificate renewed by certbot." },
      { label: "You", detail: "The root redirects to /pt/, /en/ or /de/ based on your browser language." },
    ],
    weekly: "Every Monday, a workflow with Claude reads my repositories tagged portfolio and opens a PR updating the projects in all three languages. I review and merge; the deploy runs by itself.",
  },

  content: {
    title: "Technical YouTube channel",
    summary: "Explanations of data structures and LeetCode problems.",
    stats: [
      { value: "1,000+", label: "subscribers" },
      { value: "40K+", label: "views on one video" },
    ],
    channel: { label: "@ad.2486", href: "https://youtube.com/@ad.2486" },
  },

  contact: {
    title: "Contact",
    links: [
      { label: "Email", email: { user: "arthur.duarte2486", domain: "gmail.com" }, icon: "email" },
      { label: "GitHub", href: "https://github.com/ad2486", icon: "github" },
      { label: "LinkedIn", href: "https://linkedin.com/in/arthur-duarte-ad2486", icon: "linkedin" },
      { label: "YouTube", href: "https://youtube.com/@ad.2486", icon: "youtube" },
      { label: "Bookshelf: posts and books (in Portuguese)", href: "https://estante.arthur-duarte-portfolio.com.br/", icon: "books" },
    ],
  },
};
