import { Nav } from "@/components/Nav";
import { Hero } from "@/components/sections/Hero";
import { Sobre } from "@/components/sections/Sobre";
import { Stack } from "@/components/sections/Stack";
import { Projetos } from "@/components/sections/Projetos";
import { Fluxo } from "@/components/sections/Fluxo";
import { Conteudo } from "@/components/sections/Conteudo";
import { Contato } from "@/components/sections/Contato";
import { Footer } from "@/components/sections/Footer";
import { getLocale, getSite } from "@/content/i18n";

export default async function Home() {
  const [site, locale] = await Promise.all([getSite(), getLocale()]);
  return (
    <>
      <Nav name={site.name} nav={site.nav} ui={site.ui} locale={locale} />
      <main id="conteudo-principal">
        <Hero />
        <Sobre />
        <Stack />
        <Projetos />
        <Fluxo />
        <Conteudo />
        <Contato />
      </main>
      <Footer />
    </>
  );
}
