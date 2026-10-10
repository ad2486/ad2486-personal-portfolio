"use client";

import { useEffect, useRef, type ReactNode } from "react";

// Monta o mailto só no navegador: o endereço completo nunca aparece no HTML estático,
// então bots que só leem o HTML não conseguem coletá-lo.
export function EmailLink({
  user,
  domain,
  className,
  children,
}: {
  user: string;
  domain: string;
  className?: string;
  children: ReactNode;
}) {
  const ref = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (ref.current) ref.current.href = `mailto:${user}@${domain}`;
  }, [user, domain]);

  return (
    <a ref={ref} href="#contato" className={className}>
      {children}
    </a>
  );
}
