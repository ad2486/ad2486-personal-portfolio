import { getSite } from "@/content/i18n";
import { Reveal } from "@/components/Reveal";

export async function Footer() {
  const site = await getSite();
  return (
    <footer className="border-t border-line">
      <Reveal className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-10 font-mono text-xs text-muted md:flex-row md:items-center md:justify-between md:px-8">
        <p>
          © {new Date().getFullYear()} {site.name} · {site.location}
        </p>
        <a href="#top" className="transition-colors duration-500 hover:text-text">
          {site.ui.backToTop}
        </a>
      </Reveal>
    </footer>
  );
}
