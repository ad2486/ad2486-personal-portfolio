"use client";

import type { PointerEvent, ReactNode } from "react";

type Props = { children: ReactNode; className?: string };

// Panel whose border lights up under the pointer. Writes CSS vars directly (no React state),
// so moving the mouse never re-renders. Visuals live in .spotlight (globals.css).
export function SpotlightPanel({ children, className = "" }: Props) {
  const onMove = (e: PointerEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--x", `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty("--y", `${e.clientY - r.top}px`);
  };
  return (
    <div onPointerMove={onMove} className={`spotlight rounded-lg border border-line bg-surface ${className}`}>
      {children}
    </div>
  );
}
