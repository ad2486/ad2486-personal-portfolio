import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { locales, localeLabel } from "@/content/locales";
import { site } from "@/content/site";
import { geistMono, geistSans } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: `404 | ${site.name}`,
};

// Unmatched URLs have no locale, so this page is pt-BR with links to every language.
export default function GlobalNotFound() {
  return (
    <html lang="pt-BR" className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <body className="font-sans">
        <main className="mx-auto flex min-h-[100dvh] max-w-3xl flex-col items-start justify-center gap-6 px-4">
          <p className="font-mono text-sm text-muted">404</p>
          <h1 className="text-balance text-4xl font-semibold tracking-tighter md:text-6xl">
            {site.ui.notFoundTitle}
          </h1>
          <Button href="/pt/">{site.ui.notFoundCta}</Button>
          <ul className="flex gap-4 font-mono text-xs text-muted">
            {locales.map((l) => (
              <li key={l}>
                <a href={`/${l}/`} lang={l} className="transition-colors duration-500 hover:text-text">
                  {localeLabel[l].name}
                </a>
              </li>
            ))}
          </ul>
        </main>
      </body>
    </html>
  );
}
