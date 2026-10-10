import type { Site } from "./site";

export const site: Site = {
  locale: "de",
  name: "Arthur Duarte",
  role: "Backend und Systemarchitektur",
  location: "Porto Alegre, Brasilien",
  avatar: "/avatar.jpg",

  ui: {
    skipLink: "Zum Inhalt springen",
    navLabel: "Hauptnavigation",
    menuLabel: "Menü",
    openMenu: "Menü öffnen",
    closeMenu: "Menü schließen",
    languageLabel: "Sprache",
    avatarAlt: "Foto von Arthur Duarte",
    languagesTitle: "Sprachen",
    repoPreviewAlt: "Vorschau des Repositorys",
    stackListLabel: "Technologien",
    viewCode: "Code ansehen",
    viewCodeOf: "Code von {title} auf GitHub ansehen",
    concurrency: "Nebenläufigkeit",
    viewChannel: "Kanal ansehen",
    backToTop: "Zurück nach oben",
    notFoundTitle: "Seite nicht gefunden.",
    notFoundCta: "Zur Startseite",
  },

  meta: {
    title: "Arthur Duarte | Backend und Systemarchitektur",
    description: "Ich entwerfe Systeme und wirke an ihrer Umsetzung mit. Begeistert von Linux und Infrastruktur.",
  },

  nav: [
    { label: "Über mich", href: "#sobre" },
    { label: "Stack", href: "#stack" },
    { label: "Projekte", href: "#projetos" },
    { label: "Inhalte", href: "#conteudo" },
    { label: "Kontakt", href: "#contato" },
  ],

  hero: {
    eyebrow: "Porto Alegre, Brasilien",
    headline: "Backend und Systemarchitektur",
    sub: "Ich entwerfe Systeme und wirke an ihrer Umsetzung mit. Begeistert von Linux und Infrastruktur.",
    ctaPrimary: { label: "Projekte ansehen", href: "#projetos" },
    ctaSecondary: { label: "GitHub", href: "https://github.com/ad2486" },
  },

  about: {
    eyebrow: "Über mich",
    title: "Vom Systementwurf bis zum laufenden Code.",
    paragraphs: [
      "Schüler am Colégio Militar de Porto Alegre (Militärgymnasium), Abschluss 2027.",
      "Mein Schwerpunkt sind Backend und Systemarchitektur: Ich möchte Systeme entwerfen und auch an ihrer Umsetzung mitwirken.",
      "Begeistert von Linux und Infrastruktur.",
    ],
    languages: [
      { name: "Portugiesisch", level: "Muttersprache" },
      { name: "Englisch", level: "C1" },
      { name: "Deutsch", level: "A1, im Lernen" },
    ],
  },

  stack: {
    eyebrow: "Stack",
    title: "Werkzeuge für den Alltag",
    groups: [
      {
        id: "languages",
        title: "Sprachen",
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
        title: "Infrastruktur",
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
        title: "Aktuell im Lernen",
        items: [
          { label: "Java", icon: "java" },
          { label: "React", icon: "react" },
          { label: "Funktionale Programmierung", icon: "functional" },
        ],
      },
    ],
  },

  projects: {
    eyebrow: "Projekte",
    title: "Woran ich arbeite",
    items: [
      {
        slug: "backend-ticketeira",
        title: "Ticketsystem für Veranstaltungen",
        summary:
          "Plattform, auf der jeder Nutzer Veranstaltungen erstellen, Plätze zum Verkauf freigeben und Tickets kaufen kann.",
        details: [
          "Authentifizierung mit JWT + argon2, Validierung mit Zod, Rate Limiting und OpenAPI-Dokumentation.",
          "Nebenläufigkeit beim Verkauf wird mit atomarem Update / SELECT FOR UPDATE behandelt, damit nicht über die Kapazität hinaus verkauft wird.",
          "Begrenzung der Veranstaltungen pro Nutzer über Tiers.",
        ],
        stack: ["TypeScript", "Fastify", "PostgreSQL", "Prisma", "Zod", "OpenAPI", "Vitest", "Docker Compose"],
        status: "In Arbeit",
        repo: "https://github.com/ad2486/backend-ticketeira",
        image: "/projects/backend-ticketeira.png",
        featured: true,
      },
      {
        slug: "dev-tool-cli",
        title: "dev-tool-cli",
        summary: "CLI, die Entwicklungsumgebungen einrichtet.",
        details: [
          "Modulare Architektur (cli, config, core, errors, os, providers) auf Basis eines Provider-Traits und einer Registry.",
          "Tests mit Fakes. Automatisierte Releases über GitHub Actions.",
        ],
        stack: ["Rust", "GitHub Actions"],
        repo: "https://github.com/ad2486/dev-tool-cli",
        image: "/projects/dev-tool-cli.png",
        featured: true,
      },
      {
        slug: "multi-llm-cli",
        title: "multi-llm-cli",
        summary: "CLI für die Arbeit mit mehreren LLMs.",
        stack: ["Python"],
        repo: "https://github.com/ad2486/multi-llm-cli",
        image: "/projects/multi-llm-cli.png",
      },
      {
        slug: "welcoming-discord-bot",
        title: "Willkommens-Bot für Discord",
        summary:
          "Begrüßt neue Mitglieder automatisch und weist ihnen automatisch eine Rolle zu. Containerisiertes Deployment auf einer VM in der Oracle Cloud.",
        stack: ["JavaScript", "discord.js", "Docker", "Oracle Cloud"],
        repo: "https://github.com/ad2486/welcoming-discord-bot",
        image: "/projects/welcoming-discord-bot.png",
      },
      {
        slug: "youtube-discord-bot",
        title: "YouTube-Benachrichtigungsbot für Discord",
        summary: "Kündigt auf dem Server automatisch an, wenn ein neues Video auf dem YouTube-Kanal erscheint.",
        stack: ["JavaScript", "discord.js", "Docker"],
        repo: "https://github.com/ad2486/youtube-discord-bot",
        image: "/projects/youtube-discord-bot.png",
      },
      {
        slug: "homelab",
        title: "Homelab",
        summary:
          "Ubuntu Server, aufgebaut aus einem alten Rechner, mit fester IP über Netplan und SSH-Zugang per Schlüssel.",
        details: ["Dient als Labor für Backend, Datenbanken und Docker."],
        stack: ["Ubuntu Server", "Netplan", "SSH", "Docker"],
      },
    ],
    others: {
      title: "Weiteres auf GitHub",
      items: [
        {
          title: "data-report-gen",
          summary: "Automatisierte Datenanalyse-Pipeline mit KI-Integration.",
          href: "https://github.com/ad2486/data-report-gen",
        },
        {
          title: "reminder-manager",
          summary: "Plattformübergreifender Desktop-Erinnerungsmanager mit nativen Benachrichtigungen.",
          href: "https://github.com/ad2486/reminder-manager",
        },
        {
          title: "simple-ecommerce-store",
          summary: "E-Commerce-API mit Flask, SQLAlchemy und SQLite.",
          href: "https://github.com/ad2486/simple-ecommerce-store",
        },
      ],
    },
  },

  content: {
    eyebrow: "Inhalte",
    title: "Technischer YouTube-Kanal",
    summary: "Erklärungen zu Datenstrukturen und LeetCode-Aufgaben.",
    stats: [
      { value: "1.000+", label: "Abonnenten" },
      { value: "40.000+", label: "Aufrufe bei einem Video" },
    ],
    channel: { label: "@ad.2486", href: "https://youtube.com/@ad.2486" },
  },

  contact: {
    eyebrow: "Kontakt",
    title: "Ins Gespräch kommen",
    links: [
      { label: "E-Mail", detail: "arthur.duarte2486@gmail.com", href: "mailto:arthur.duarte2486@gmail.com", icon: "email" },
      { label: "GitHub", href: "https://github.com/ad2486", icon: "github" },
      { label: "LinkedIn", href: "https://linkedin.com/in/arthur-duarte-ad2486", icon: "linkedin" },
      { label: "YouTube", href: "https://youtube.com/@ad.2486", icon: "youtube" },
    ],
  },
};
