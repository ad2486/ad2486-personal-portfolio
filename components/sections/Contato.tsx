import { ArrowUpRightIcon as ArrowUpRight } from "@phosphor-icons/react/ssr";
import { getSite } from "@/content/i18n";
import { TechIcon } from "@/components/TechIcon";

export async function Contato() {
  const site = await getSite();
  const c = site.contact;
  return (
    <section id="contato" className="py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-4 md:px-8">
        <div className="grid gap-8 border-t border-line pt-6 md:grid-cols-12">
          <h2 className="font-mono text-xl font-medium text-text md:col-span-3 md:text-2xl">{c.title}</h2>
          <ul className="divide-y divide-line border-y border-line md:col-span-9">
            {c.links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  {...(l.href.startsWith("mailto:") ? {} : { target: "_blank", rel: "noopener noreferrer" })}
                  className="group flex items-center gap-4 py-4"
                >
                  <TechIcon icon={l.icon} size={18} className="shrink-0 text-muted" />
                  <span className="flex min-w-0 flex-1 flex-col gap-x-4 gap-y-0.5 sm:flex-row sm:items-baseline">
                    <span className="link-draw w-fit text-base text-text transition-colors duration-300 ease-fluid group-hover:text-accent">
                      {l.label}
                    </span>
                    {l.detail && (
                      <span translate="no" className="break-all font-mono text-sm text-muted">
                        {l.detail}
                      </span>
                    )}
                  </span>
                  <ArrowUpRight size={14} className="shrink-0 text-muted" aria-hidden />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
