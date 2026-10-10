// Client-safe locale registry (no server-only imports here).
export const siteUrl = "https://arthur-duarte-portfolio.com.br";

export const locales = ["pt", "en", "de"] as const;
export type Locale = (typeof locales)[number];

export const htmlLang: Record<Locale, string> = { pt: "pt-BR", en: "en", de: "de" };
export const ogLocale: Record<Locale, string> = { pt: "pt_BR", en: "en_US", de: "de_DE" };
export const localeLabel: Record<Locale, { short: string; name: string }> = {
  pt: { short: "PT", name: "Português" },
  en: { short: "EN", name: "English" },
  de: { short: "DE", name: "Deutsch" },
};
