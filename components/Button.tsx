import { ArrowUpRightIcon as ArrowUpRight } from "@phosphor-icons/react/ssr";
import type { ReactNode } from "react";

type Props = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost";
  external?: boolean;
};

// Pill CTA with the trailing icon nested in its own circle.
export function Button({ href, children, variant = "primary", external }: Props) {
  const base =
    "group inline-flex items-center gap-3 whitespace-nowrap rounded-full py-2 pl-6 pr-2 text-sm font-medium transition-[transform,background-color] duration-500 ease-fluid active:scale-[0.98]";
  const styles =
    variant === "primary"
      ? "bg-text text-bg hover:bg-white"
      : "border border-line bg-white/[0.03] text-text hover:bg-white/[0.07]";
  const circle =
    variant === "primary" ? "bg-bg/10" : "bg-white/10";
  return (
    <a
      href={href}
      className={`${base} ${styles}`}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {children}
      <span
        className={`flex h-8 w-8 items-center justify-center rounded-full ${circle} transition-transform duration-500 ease-fluid group-hover:-translate-y-[1px] group-hover:translate-x-1 group-hover:scale-105`}
      >
        <ArrowUpRight size={16} weight="light" aria-hidden />
      </span>
    </a>
  );
}
