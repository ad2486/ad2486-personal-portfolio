import { getSite } from "@/content/i18n";

export async function Footer() {
  const site = await getSite();
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-5xl flex-col gap-4 px-4 py-10 font-mono text-xs text-muted md:flex-row md:items-center md:justify-between md:px-8">
        <p>
          © {new Date().getFullYear()} {site.name} · {site.location}
        </p>
        <a href="#top" className="link-draw transition-colors duration-300 ease-fluid hover:text-text">
          {site.ui.backToTop}
        </a>
      </div>
    </footer>
  );
}
