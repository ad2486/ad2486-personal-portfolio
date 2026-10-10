import type { ReactNode } from "react";

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex rounded-full border border-line bg-white/[0.03] px-3 py-1 font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
      {children}
    </span>
  );
}
