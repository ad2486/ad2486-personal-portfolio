import type { MetadataRoute } from "next";
import { htmlLang, locales, siteUrl } from "@/content/locales";

export const dynamic = "force-static";

// One entry per locale, each listing the others as alternates (hreflang).
export default function sitemap(): MetadataRoute.Sitemap {
  const languages = Object.fromEntries(locales.map((l) => [htmlLang[l], `${siteUrl}/${l}/`]));
  return locales.map((l) => ({
    url: `${siteUrl}/${l}/`,
    alternates: { languages },
  }));
}
