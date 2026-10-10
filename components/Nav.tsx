"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { locales, localeLabel, type Locale } from "@/content/locales";
import type { Site } from "@/content/site";

const ease = [0.32, 0.72, 0, 1] as const;

type Props = { name: string; nav: Site["nav"]; ui: Site["ui"]; locale: Locale };

// Plain links to each locale's static page; the current one is marked, not linked away.
function LanguageSwitch({ locale, ui, className = "" }: { locale: Locale; ui: Site["ui"]; className?: string }) {
  return (
    <ul aria-label={ui.languageLabel} className={`flex items-center gap-1 font-mono text-xs ${className}`}>
      {locales.map((l) => (
        <li key={l}>
          <a
            href={`/${l}/`}
            hrefLang={l}
            lang={l}
            aria-current={l === locale ? "true" : undefined}
            className={`flex h-8 min-w-8 items-center justify-center rounded-full px-2 transition-colors duration-500 ease-fluid ${
              l === locale ? "bg-white/10 text-text" : "text-muted hover:text-text"
            }`}
          >
            {localeLabel[l].short}
            <span className="sr-only"> {localeLabel[l].name}</span>
          </a>
        </li>
      ))}
    </ul>
  );
}

export function Nav({ name, nav, ui, locale }: Props) {
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();
  const toggleRef = useRef<HTMLButtonElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (!open) return;
    const toggle = toggleRef.current;
    // Page behind the overlay is unreachable by Tab or screen reader while open.
    const behind = document.querySelectorAll("main, footer");
    behind.forEach((el) => el.setAttribute("inert", ""));
    document.body.style.overflow = "hidden";
    firstLinkRef.current?.focus();
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    // Overlay is md:hidden, so growing past md must close it or the scroll lock sticks.
    const mq = window.matchMedia("(min-width: 768px)");
    const onMq = () => mq.matches && setOpen(false);
    window.addEventListener("keydown", onKey);
    mq.addEventListener("change", onMq);
    return () => {
      behind.forEach((el) => el.removeAttribute("inert"));
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
      mq.removeEventListener("change", onMq);
      toggle?.focus();
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      <header className="fixed inset-x-0 top-6 z-50 flex justify-center px-4">
        <nav
          aria-label={ui.navLabel}
          className="flex h-14 w-max items-center gap-6 rounded-full border border-line bg-bg/60 pl-5 pr-2 backdrop-blur-xl md:gap-8 md:pr-5"
        >
          <a href="#top" onClick={close} translate="no" className="text-sm font-medium tracking-tight text-text">
            {name}
          </a>
          <ul className="hidden items-center gap-6 md:flex">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-sm text-muted transition-colors duration-500 ease-fluid hover:text-text"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <LanguageSwitch locale={locale} ui={ui} className="hidden border-l border-line pl-4 md:flex" />
          <button
            ref={toggleRef}
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? ui.closeMenu : ui.openMenu}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="relative flex h-10 w-10 items-center justify-center rounded-full bg-white/[0.05] transition-colors duration-500 ease-fluid hover:bg-white/[0.1] md:hidden"
          >
            <span
              className={`absolute h-px w-4 bg-text transition-transform duration-500 ease-fluid ${open ? "rotate-45" : "-translate-y-[3px]"}`}
            />
            <span
              className={`absolute h-px w-4 bg-text transition-transform duration-500 ease-fluid ${open ? "-rotate-45" : "translate-y-[3px]"}`}
            />
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label={ui.menuLabel}
            className="fixed inset-0 z-40 flex flex-col items-start justify-center gap-12 overscroll-contain bg-bg/80 px-8 backdrop-blur-3xl md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduce ? 0 : 0.4, ease }}
          >
            <ul className="flex flex-col gap-4">
              {nav.map((item, i) => (
                <motion.li
                  key={item.href}
                  initial={reduce ? false : { opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: reduce ? 0 : 0.6, delay: reduce ? 0 : 0.1 + i * 0.05, ease }}
                >
                  <a ref={i === 0 ? firstLinkRef : undefined} href={item.href} onClick={close} className="text-4xl font-medium tracking-tighter text-text">
                    {item.label}
                  </a>
                </motion.li>
              ))}
            </ul>
            <LanguageSwitch locale={locale} ui={ui} />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
