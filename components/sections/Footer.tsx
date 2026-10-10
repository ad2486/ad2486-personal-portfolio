import { getSite } from "@/content/i18n";

export async function Footer() {
  const site = await getSite();
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-5xl flex-col gap-4 px-4 py-10 font-mono text-xs text-muted md:flex-row md:items-center md:justify-between md:px-8">
        <p>
          © {new Date().getFullYear()} {site.name} · {site.location}
        </p>
        {/* Padding sits on the link (tap area); the underline sits on the text span. */}
        <a href="#top" className="group -my-2 w-fit py-2 transition-colors duration-300 ease-fluid hover:text-text">
          <span className="link-draw">{site.ui.backToTop}</span>
        </a>
      </div>
    </footer>
  );
}
