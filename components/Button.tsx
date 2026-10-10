import { ArrowUpRightIcon as ArrowUpRight } from "@phosphor-icons/react/ssr";
import type { ReactNode } from "react";

type Props = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost";
  external?: boolean;
};

export function Button({ href, children, variant = "primary", external }: Props) {
  const base =
    "inline-flex items-center gap-2 whitespace-nowrap rounded-md px-4 py-2.5 text-sm font-medium transition-[background-color,border-color,color] duration-300 ease-fluid";
  const styles =
    variant === "primary"
      ? "bg-text text-bg hover:bg-accent"
      : "border border-line text-text hover:border-muted";
  return (
    <a
      href={href}
      className={`${base} ${styles}`}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {children}
      {external && <ArrowUpRight size={14} weight="regular" aria-hidden />}
    </a>
  );
}
