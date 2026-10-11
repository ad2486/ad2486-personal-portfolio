import {
  siDebian,
  siDiscorddotjs,
  siDocker,
  siFastapi,
  siFastify,
  siGithub,
  siGithubactions,
  siJavascript,
  siLinux,
  siMysql,
  siNginx,
  siNodedotjs,
  siOpenapiinitiative,
  siPostgresql,
  siPrisma,
  siPython,
  siReact,
  siRockylinux,
  siRust,
  siSqlalchemy,
  siTypescript,
  siUbuntu,
  siVitest,
  siYoutube,
  siZod,
} from "simple-icons";
import {
  AmazonLogoIcon as AmazonLogo,
  CloudIcon as Cloud,
  CoffeeIcon as Coffee,
  DatabaseIcon as Database,
  EnvelopeSimpleIcon as EnvelopeSimple,
  FunctionIcon,
  LinkedinLogoIcon as LinkedinLogo,
  TerminalIcon as Terminal,
} from "@phosphor-icons/react/ssr";
import type { IconKey } from "@/content/site";

const brand = {
  python: siPython,
  javascript: siJavascript,
  typescript: siTypescript,
  rust: siRust,
  postgresql: siPostgresql,
  mysql: siMysql,
  nodejs: siNodedotjs,
  fastify: siFastify,
  fastapi: siFastapi,
  prisma: siPrisma,
  sqlalchemy: siSqlalchemy,
  zod: siZod,
  docker: siDocker,
  nginx: siNginx,
  linux: siLinux,
  debian: siDebian,
  ubuntu: siUbuntu,
  rocky: siRockylinux,
  githubactions: siGithubactions,
  react: siReact,
  github: siGithub,
  youtube: siYoutube,
  discordjs: siDiscorddotjs,
  vitest: siVitest,
  openapi: siOpenapiinitiative,
};

// Not in simple-icons (brand removals) or not a brand at all.
const fallback = {
  sql: Database,
  ssh: Terminal,
  oracle: Cloud,
  aws: AmazonLogo,
  java: Coffee,
  functional: FunctionIcon,
  linkedin: LinkedinLogo,
  email: EnvelopeSimple,
};

type Props = { icon: IconKey; size?: number; className?: string };

// Monochrome (currentColor); exposes the brand hex as --brand for hover styling.
export function TechIcon({ icon, size = 20, className = "" }: Props) {
  if (icon in fallback) {
    const Icon = fallback[icon as keyof typeof fallback];
    return <Icon size={size} weight="light" className={className} aria-hidden />;
  }
  const si = brand[icon as keyof typeof brand];
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="currentColor"
      className={className}
      style={{ ["--brand" as string]: `#${si.hex}` }}
      aria-hidden
    >
      <path d={si.path} />
    </svg>
  );
}
