import type { Metadata, Viewport } from "next";
import { fontMono, fontSans } from "../fonts";
import { getLocale, getSite } from "@/content/i18n";
import { htmlLang, locales, ogLocale, siteUrl } from "@/content/locales";
import "../globals.css";

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata(): Promise<Metadata> {
  const [site, locale] = await Promise.all([getSite(), getLocale()]);
  return {
    metadataBase: new URL(siteUrl),
    title: site.meta.title,
    description: site.meta.description,
    icons: { icon: "/favicon.svg" },
    alternates: {
      canonical: `/${locale}/`,
      languages: Object.fromEntries(locales.map((l) => [htmlLang[l], `/${l}/`])),
    },
    openGraph: {
      title: site.name,
      description: site.meta.description,
      images: [site.avatar],
      url: `/${locale}/`,
      locale: ogLocale[locale],
      type: "website",
    },
  };
}

export const viewport: Viewport = { themeColor: "#000000" };

export default async function RootLayout({ children }: LayoutProps<"/[lang]">) {
  const [site, locale] = await Promise.all([getSite(), getLocale()]);
  return (
    <html
      lang={htmlLang[locale]}
      className={`${fontSans.variable} ${fontMono.variable} antialiased`}
    >
      <body className="min-h-[100dvh] font-sans">
        {/* Without JS, Reveal never runs: show its content instead of a blank page. */}
        <noscript>
          <style>{"[data-reveal]{opacity:1!important;transform:none!important;filter:none!important}"}</style>
        </noscript>
        <a
          href="#conteudo-principal"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:rounded-full focus:bg-text focus:px-4 focus:py-2 focus:text-sm focus:text-bg"
        >
          {site.ui.skipLink}
        </a>
        {children}
      </body>
    </html>
  );
}
