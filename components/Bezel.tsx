import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  innerClassName?: string;
};

// Double-bezel: outer tray + inner core with concentric radius.
export function Bezel({ children, className = "", innerClassName = "" }: Props) {
  return (
    <div
      className={`rounded-[2rem] border border-line bg-white/[0.03] p-1.5 ${className}`}
    >
      <div
        className={`h-full rounded-[calc(2rem-0.375rem)] bg-surface shadow-[inset_0_1px_1px_rgba(255,255,255,0.08)] ${innerClassName}`}
      >
        {children}
      </div>
    </div>
  );
}
