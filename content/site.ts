// Single source of truth for all site copy. pt-BR. Source: user content file + public GitHub data.
// Do not add claims that are not in those sources.

export type IconKey =
  | "python" | "javascript" | "typescript" | "rust" | "sql" | "postgresql"
  | "nodejs" | "fastify" | "prisma" | "zod" | "docker" | "linux"
  | "debian" | "ubuntu" | "githubactions" | "ssh"
  | "oracle" | "java" | "react" | "elixir" | "github" | "youtube"
  | "linkedin" | "discordjs" | "vitest" | "openapi" | "email"
  | "fastapi" | "mysql" | "aws" | "nginx" | "sqlalchemy" | "rocky" | "books";

/** E-mail stays split so the address never appears whole in the static HTML; EmailLink joins it in the browser. */
export type Link = { label: string; icon: IconKey } & (
  | { href: string; email?: never }
  | { email: { user: string; domain: string }; href?: never }
);

export type Project = {
  slug: string;
  title: string;
  summary: string;
  details?: string[];
  stack: string[];
  status?: string;
  repo?: string;
  featured?: boolean;
};

export type StackGroup = {
  /** Stable id for layout; never translated. */
  id: "languages" | "backend" | "infra" | "studying";
  title: string;
  items: { label: string; icon: IconKey }[];
};

export const site = {
  locale: "pt",
  name: "Arthur Duarte",
  role: "Backend e arquitetura de sistemas",
  location: "Porto Alegre, Brasil",
  avatar: "/avatar.jpg",

  // Interface labels (not content claims).
  ui: {
    skipLink: "Pular para o conteúdo",
    navLabel: "Principal",
    menuLabel: "Menu",
    openMenu: "Abrir menu",
    closeMenu: "Fechar menu",
    languageLabel: "Idioma",
    avatarAlt: "Foto de Arthur Duarte",
    languagesTitle: "Idiomas",
    stackListLabel: "Tecnologias",
    viewCode: "Ver código",
    viewCodeOf: "Ver código de {title} no GitHub",
    viewChannel: "Ver canal",
    backToTop: "Voltar ao topo",
    notFoundTitle: "Página não encontrada.",
    notFoundCta: "Voltar ao início",
  },

  meta: {
    title: "Arthur Duarte | Backend e arquitetura de sistemas",
    description: "Projeto sistemas e participo da implementação. Entusiasta de Linux e infraestrutura.",
  },

  nav: [
    { label: "Sobre", href: "#sobre" },
    { label: "Stack", href: "#stack" },
    { label: "Projetos", href: "#projetos" },
    { label: "Conteúdo", href: "#conteudo" },
    { label: "Contato", href: "#contato" },
    { label: "Estante", href: "https://estante.arthur-duarte-portfolio.com.br/" },
  ],

  hero: {
    headline: "Backend e arquitetura de sistemas",
    sub: "Projeto sistemas e participo da implementação. Entusiasta de Linux e infraestrutura.",
    ctaPrimary: { label: "Ver projetos", href: "#projetos" },
    ctaSecondary: { label: "GitHub", href: "https://github.com/ad2486" },
  },

  about: {
    title: "Sobre",
    paragraphs: [
      "Estudante no Colégio Militar de Porto Alegre, com conclusão em 2027.",
      "Meu foco é backend e arquitetura de sistemas: quero projetar sistemas e também participar da implementação.",
      "Entusiasta de Linux e infraestrutura.",
    ],
    languages: [
      { name: "Português", level: "Nativo" },
      { name: "Inglês", level: "C1" },
      { name: "Alemão", level: "A1, em estudo" },
    ],
  },

  stack: {
    title: "Stack",
    groups: [
      {
        id: "languages",
        title: "Linguagens",
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
        title: "Estudando",
        items: [
          { label: "Java", icon: "java" },
          { label: "React", icon: "react" },
          { label: "Elixir", icon: "elixir" },
        ],
      },
    ] satisfies StackGroup[],
  },

  projects: {
    title: "Projetos",
    items: [
      {
        slug: "backend-ticketeira",
        title: "Sistema de bilheteria de eventos",
        summary:
          "API de venda de ingressos para eventos. Hoje tem cadastro e login de usuários e a criação, listagem e edição de eventos; pedidos e ingressos já estão no modelo de dados.",
        details: [
          "Fastify com validação via Zod, documentação OpenAPI em /docs e senhas com argon2.",
          "Login com JWT e refresh token, com rate limit de 5 tentativas por minuto no login.",
          "Cada usuário só cria um número limitado de eventos ativos conforme o tier (free, verified, pro). A contagem roda numa transação com lock no usuário.",
          "Modelo de dados em Prisma 8 e PostgreSQL, com usuários, eventos, pedidos e ingressos.",
          "Constraints no banco, como sold_tickets <= capacity, protegem a capacidade do evento.",
          "Testes de integração com Vitest.",
        ],
        stack: ["TypeScript", "Fastify", "PostgreSQL", "Prisma", "Zod", "OpenAPI", "Vitest", "Docker Compose"],
        status: "Em andamento",
        repo: "https://github.com/ad2486/backend-ticketeira",
        featured: true,
      },
      {
        slug: "dev-tool-cli",
        title: "dev-tool-cli",
        summary: "CLI que configura ambientes de desenvolvimento com um comando, do mesmo jeito em qualquer máquina.",
        details: [
          "Instala as toolchains de Python (uv) e Rust (rustup), cria o projeto e registra as versões em dev.toml. O dev doctor confere o que falta na máquina.",
          "Binário único para macOS e Linux, com instalador que verifica o SHA-256.",
          "Arquitetura modular (cli, config, core, errors, os, providers) baseada em trait Provider e Registry.",
          "Testes usando fakes. Release automatizado via GitHub Actions.",
        ],
        stack: ["Rust", "GitHub Actions"],
        repo: "https://github.com/ad2486/dev-tool-cli",
        featured: true,
      },
      {
        slug: "multi-llm-cli",
        title: "multi-llm-cli",
        summary: "CLI de terminal para conversar com vários LLMs, feita para facilitar o acesso a modelos gratuitos de diferentes provedores.",
        details: [
          "Suporta OpenRouter, Groq e Google. Histórico multi-turno, markdown no terminal, troca de modelo e provedor durante a conversa e importação de arquivos para o contexto.",
          "Tool calling opcional (bash, read_file, write_file) no OpenRouter e no Groq. Cada execução pede confirmação, com padrão em não.",
        ],
        stack: ["Python", "uv"],
        repo: "https://github.com/ad2486/multi-llm-cli",
      },
      {
        slug: "welcoming-discord-bot",
        title: "Bot de boas-vindas para Discord",
        summary:
          "Dá boas-vindas automáticas a novos membros e atribui cargo automaticamente. Deploy conteinerizado em VM na Oracle Cloud.",
        stack: ["JavaScript", "discord.js", "Docker", "Oracle Cloud"],
        repo: "https://github.com/ad2486/welcoming-discord-bot",
      },
      {
        slug: "youtube-discord-bot",
        title: "Bot de notificação do YouTube para Discord",
        summary: "Avisa no servidor quando sai vídeo novo no canal do YouTube ou quando uma live começa. Usa o feed RSS, sem API key do Google.",
        details: [
          "O feed RSS só mostra a transmissão depois que ela termina. Por isso o bot também consulta a página /live do canal a cada ciclo.",
          "Guarda os IDs já avisados em data/state.json para não repetir aviso após reiniciar.",
        ],
        stack: ["JavaScript", "discord.js", "Docker"],
        repo: "https://github.com/ad2486/youtube-discord-bot",
      },
      {
        slug: "homelab",
        title: "Homelab",
        summary:
          "Servidor Ubuntu Server montado a partir de uma máquina antiga, com IP fixo via Netplan e acesso SSH por chave.",
        details: ["Usado como laboratório de backend, bancos de dados e Docker."],
        stack: ["Ubuntu Server", "Netplan", "SSH", "Docker"],
      },
      {
        slug: "ad2486-personal-portfolio",
        title: "Portfólio pessoal",
        summary: "Este site: Next.js com export estático em três idiomas, servido por nginx numa VM da Oracle Cloud.",
        details: ["Deploy via GitHub Actions. A lista de projetos é atualizada toda semana pelo Claude."],
        stack: ["TypeScript", "Next.js", "nginx", "Oracle Cloud", "GitHub Actions"],
        repo: "https://github.com/ad2486/ad2486-personal-portfolio",
      },
    ] satisfies Project[],
    others: {
      title: "Outros no GitHub",
      items: [
        {
          title: "data-report-gen",
          summary: "Pipeline de análise de dados automatizada com integração de IA.",
          href: "https://github.com/ad2486/data-report-gen",
        },
        {
          title: "reminder-manager",
          summary: "Gerenciador de lembretes desktop multiplataforma com notificações nativas.",
          href: "https://github.com/ad2486/reminder-manager",
        },
        {
          title: "simple-ecommerce-store",
          summary: "API de e-commerce com Flask, SQLAlchemy e SQLite.",
          href: "https://github.com/ad2486/simple-ecommerce-store",
        },
      ],
    },
  },

  flow: {
    title: "Como este site chega até você",
    summary: "Sem plataforma pronta: este é o caminho de um commit até o seu navegador, montado e operado por mim.",
    steps: [
      { label: "git push", detail: "Commit na branch main do GitHub." },
      { label: "GitHub Actions", detail: "npm ci e next build geram o site estático em out/." },
      { label: "rsync via SSH", detail: "Envia só o que mudou, com um usuário de deploy sem sudo." },
      { label: "nginx", detail: "VM Ubuntu na Oracle Cloud, com gzip e cache longo nos assets." },
      { label: "HTTPS", detail: "Certificado Let's Encrypt, renovado pelo certbot." },
      { label: "Você", detail: "A raiz redireciona para /pt/, /en/ ou /de/ conforme o idioma do navegador." },
    ],
    weekly: "Toda segunda, um workflow com o Claude lê meus repositórios com a topic portfolio e abre um PR atualizando os projetos nos três idiomas. Eu reviso e faço o merge; o deploy roda sozinho.",
  },

  content: {
    title: "Canal técnico no YouTube",
    summary: "Explicações de estruturas de dados e problemas do LeetCode.",
    stats: [
      { value: "1.000+", label: "inscritos" },
      { value: "40 mil+", label: "visualizações em um vídeo" },
    ],
    channel: { label: "@ad.2486", href: "https://youtube.com/@ad.2486" },
  },

  contact: {
    title: "Contato",
    links: [
      { label: "E-mail", email: { user: "arthur.duarte2486", domain: "gmail.com" }, icon: "email" },
      { label: "GitHub", href: "https://github.com/ad2486", icon: "github" },
      { label: "LinkedIn", href: "https://linkedin.com/in/arthur-duarte-ad2486", icon: "linkedin" },
      { label: "YouTube", href: "https://youtube.com/@ad.2486", icon: "youtube" },
      { label: "Estante: posts e livros", href: "https://estante.arthur-duarte-portfolio.com.br/", icon: "books" },
    ] satisfies Link[],
  },
};

export type Site = typeof site;
