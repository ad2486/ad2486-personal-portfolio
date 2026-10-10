import { lang } from "next/root-params";
import type { Locale } from "./locales";
import { site as pt, type Site } from "./site";
import { site as en } from "./en";
import { site as de } from "./de";

const dictionaries: Record<Locale, Site> = { pt, en, de };

export async function getLocale(): Promise<Locale> {
  return (await lang()) as Locale;
}

// Dictionary for the current [lang] route; readable from any Server Component.
export async function getSite(): Promise<Site> {
  return dictionaries[await getLocale()];
}
