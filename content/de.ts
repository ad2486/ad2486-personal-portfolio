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
    stackListLabel: "Technologien",
    viewCode: "Code ansehen",
    viewCodeOf: "Code von {title} auf GitHub ansehen",
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
    headline: "Backend und Systemarchitektur",
    sub: "Ich entwerfe Systeme und wirke an ihrer Umsetzung mit. Begeistert von Linux und Infrastruktur.",
    ctaPrimary: { label: "Projekte ansehen", href: "#projetos" },
    ctaSecondary: { label: "GitHub", href: "https://github.com/ad2486" },
  },

  about: {
    title: "Über mich",
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
    title: "Stack",
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
        title: "Infrastruktur",
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
        title: "Aktuell im Lernen",
        items: [
          { label: "Java", icon: "java" },
          { label: "React", icon: "react" },
          { label: "Elixir", icon: "elixir" },
        ],
      },
    ],
  },

  projects: {
    title: "Projekte",
    items: [
      {
        slug: "backend-ticketeira",
        title: "Ticketsystem für Veranstaltungen",
        summary:
          "API für den Ticketverkauf bei Veranstaltungen. Bisher gibt es die Nutzerregistrierung; Veranstaltungen, Bestellungen und Tickets sind schon im Datenmodell.",
        details: [
          "Fastify mit Validierung über Zod, OpenAPI-Dokumentation unter /docs und Passwörtern mit argon2.",
          "Datenmodell in Prisma 8 und PostgreSQL, mit Nutzern in Tiers (free, verified, pro), Veranstaltungen, Bestellungen und Tickets.",
          "Constraints in der Datenbank, etwa sold_tickets <= capacity, schützen die Kapazität einer Veranstaltung.",
        ],
        stack: ["TypeScript", "Fastify", "PostgreSQL", "Prisma", "Zod", "OpenAPI", "Docker Compose"],
        status: "In Arbeit",
        repo: "https://github.com/ad2486/backend-ticketeira",
        featured: true,
      },
      {
        slug: "dev-tool-cli",
        title: "dev-tool-cli",
        summary: "CLI, die Entwicklungsumgebungen mit einem Befehl einrichtet, auf jedem Rechner gleich.",
        details: [
          "Installiert die Toolchains für Python (uv) und Rust (rustup), legt das Projekt an und hält die Versionen in dev.toml fest. dev doctor prüft, was auf dem Rechner fehlt.",
          "Einzelnes Binary für macOS und Linux, mit Installer, der die SHA-256-Prüfsumme verifiziert.",
          "Modulare Architektur (cli, config, core, errors, os, providers) auf Basis eines Provider-Traits und einer Registry.",
          "Tests mit Fakes. Automatisierte Releases über GitHub Actions.",
        ],
        stack: ["Rust", "GitHub Actions"],
        repo: "https://github.com/ad2486/dev-tool-cli",
        featured: true,
      },
      {
        slug: "multi-llm-cli",
        title: "multi-llm-cli",
        summary: "Terminal-CLI zum Chatten mit mehreren LLMs, gedacht, um kostenlose Modelle verschiedener Anbieter leichter zugänglich zu machen.",
        details: [
          "Unterstützt OpenRouter, Groq und Google. Mehrstufiger Verlauf, Markdown im Terminal, Wechsel von Modell und Anbieter mitten im Gespräch und Import von Dateien in den Kontext.",
          "Optionales Tool Calling (bash, read_file, write_file) bei OpenRouter und Groq. Jede Ausführung fragt nach Bestätigung, Standard ist Nein.",
        ],
        stack: ["Python", "uv"],
        repo: "https://github.com/ad2486/multi-llm-cli",
      },
      {
        slug: "welcoming-discord-bot",
        title: "Willkommens-Bot für Discord",
        summary:
          "Begrüßt neue Mitglieder automatisch und weist ihnen automatisch eine Rolle zu. Containerisiertes Deployment auf einer VM in der Oracle Cloud.",
        stack: ["JavaScript", "discord.js", "Docker", "Oracle Cloud"],
        repo: "https://github.com/ad2486/welcoming-discord-bot",
      },
      {
        slug: "youtube-discord-bot",
        title: "YouTube-Benachrichtigungsbot für Discord",
        summary: "Meldet auf dem Server, wenn ein neues Video auf dem YouTube-Kanal erscheint oder ein Livestream startet. Nutzt den RSS-Feed, ohne Google-API-Key.",
        details: [
          "Der RSS-Feed zeigt einen Livestream erst, nachdem er beendet ist. Deshalb fragt der Bot in jedem Zyklus auch die /live-Seite des Kanals ab.",
          "Speichert bereits gemeldete IDs in data/state.json, damit nach einem Neustart nichts doppelt gemeldet wird.",
        ],
        stack: ["JavaScript", "discord.js", "Docker"],
        repo: "https://github.com/ad2486/youtube-discord-bot",
      },
      {
        slug: "homelab",
        title: "Homelab",
        summary:
          "Ubuntu Server, aufgebaut aus einem alten Rechner, mit fester IP über Netplan und SSH-Zugang per Schlüssel.",
        details: ["Dient als Labor für Backend, Datenbanken und Docker."],
        stack: ["Ubuntu Server", "Netplan", "SSH", "Docker"],
      },
      {
        slug: "ad2486-personal-portfolio",
        title: "Persönliches Portfolio",
        summary: "Diese Website: Next.js mit statischem Export in drei Sprachen, ausgeliefert von nginx auf einer VM in der Oracle Cloud.",
        details: ["Deployment über GitHub Actions. Die Projektliste wird wöchentlich von Claude aktualisiert."],
        stack: ["TypeScript", "Next.js", "nginx", "Oracle Cloud", "GitHub Actions"],
        repo: "https://github.com/ad2486/ad2486-personal-portfolio",
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

  flow: {
    title: "Wie diese Seite zu dir kommt",
    summary: "Keine fertige Plattform: der Weg von einem Commit bis zu deinem Browser, von mir aufgebaut und betrieben.",
    steps: [
      { label: "git push", detail: "Commit auf den main-Branch bei GitHub." },
      { label: "GitHub Actions", detail: "npm ci und next build erzeugen die statische Seite in out/." },
      { label: "rsync über SSH", detail: "Überträgt nur Änderungen, mit einem Deploy-Benutzer ohne sudo." },
      { label: "nginx", detail: "Ubuntu-VM in der Oracle Cloud, mit gzip und langem Caching für Assets." },
      { label: "HTTPS", detail: "Let's-Encrypt-Zertifikat, erneuert durch certbot." },
      { label: "Du", detail: "Die Startseite leitet je nach Browsersprache auf /pt/, /en/ oder /de/ weiter." },
    ],
    weekly: "Jeden Montag liest ein Workflow mit Claude meine Repositories mit dem Topic portfolio und öffnet einen PR, der die Projekte in allen drei Sprachen aktualisiert. Ich prüfe und merge; das Deployment läuft automatisch.",
  },

  content: {
    title: "Technischer YouTube-Kanal",
    summary: "Erklärungen zu Datenstrukturen und LeetCode-Aufgaben.",
    stats: [
      { value: "1.000+", label: "Abonnenten" },
      { value: "40.000+", label: "Aufrufe bei einem Video" },
    ],
    channel: { label: "@ad.2486", href: "https://youtube.com/@ad.2486" },
  },

  contact: {
    title: "Kontakt",
    links: [
      { label: "E-Mail", email: { user: "arthur.duarte2486", domain: "gmail.com" }, icon: "email" },
      { label: "GitHub", href: "https://github.com/ad2486", icon: "github" },
      { label: "LinkedIn", href: "https://linkedin.com/in/arthur-duarte-ad2486", icon: "linkedin" },
      { label: "YouTube", href: "https://youtube.com/@ad.2486", icon: "youtube" },
    ],
  },
};
