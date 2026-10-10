import { ArrowUpRightIcon as ArrowUpRight } from "@phosphor-icons/react/ssr";
import { SpotlightPanel } from "@/components/SpotlightPanel";
import { Reveal } from "@/components/Reveal";
import { getSite } from "@/content/i18n";
import type { Project, Site } from "@/content/site";

const body = "text-[15px] leading-relaxed text-muted md:text-base max-w-[65ch]";

// Repo-name titles (title === slug) are not translated.
const noTranslate = (p: Project) => (p.title === p.slug ? "no" : undefined);

function Stack({ p, ui, className = "" }: { p: Project; ui: Site["ui"]; className?: string }) {
  return (
    <ul className={`flex flex-wrap gap-1.5 ${className}`} aria-label={ui.stackListLabel}>
      {p.stack.map((s) => (
        <li key={s} translate="no" className="rounded-md border border-line px-2 py-0.5 font-mono text-xs text-muted">
          {s}
        </li>
      ))}
    </ul>
  );
}

function Details({ p, className = "" }: { p: Project; className?: string }) {
  if (!p.details?.length) return null;
  return (
    <ul className={`flex list-disc flex-col gap-1.5 pl-4 marker:text-line ${className}`}>
      {p.details.map((d) => (
        <li key={d}>{d}</li>
      ))}
    </ul>
  );
}

function RepoLink({ p, ui, className = "" }: { p: Project; ui: Site["ui"]; className?: string }) {
  if (!p.repo) return null;
  return (
    <a
      href={p.repo}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ui.viewCodeOf.replace("{title}", p.title)}
      className={`group inline-flex w-fit items-center gap-1.5 text-sm font-medium text-text transition-colors duration-300 ease-fluid hover:text-accent ${className}`}
    >
      <span className="link-draw">{ui.viewCode}</span>
      <ArrowUpRight size={14} aria-hidden />
    </a>
  );
}

export async function Projetos() {
  const site = await getSite();
  const { ui } = site;
  const { title, items, others } = site.projects;
  const featured = items.filter((p) => p.featured);
  const rest = items.filter((p) => !p.featured);

  return (
    <section id="projetos" className="py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-4 md:px-8">
        <div className="border-t border-line pt-6">
          <h2 className="font-mono text-xl font-medium text-text md:text-2xl">{title}</h2>

          {featured.length > 0 && (
            <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2">
              {featured.map((p, i) => (
                <Reveal key={p.slug} delay={i * 0.05} className="h-full">
                  <SpotlightPanel className="flex h-full flex-col gap-4 p-6">
                    {p.status && (
                      <span className="w-fit rounded-md border border-accent/40 px-2 py-0.5 font-mono text-xs text-accent">
                        {p.status}
                      </span>
                    )}
                    <h3 translate={noTranslate(p)} className="text-lg font-medium text-text">
                      {p.title}
                    </h3>
                    <p className={body}>{p.summary}</p>
                    <Details p={p} className="text-sm leading-relaxed text-muted" />
                    <Stack p={p} ui={ui} />
                    <RepoLink p={p} ui={ui} className="mt-auto pt-2" />
                  </SpotlightPanel>
                </Reveal>
              ))}
            </div>
          )}

          {rest.length > 0 && (
            <ul className="mt-10 divide-y divide-line border-y border-line">
              {rest.map((p, i) => (
                <Reveal as="li" key={p.slug} delay={i * 0.05} className="grid grid-cols-1 gap-4 py-6 md:grid-cols-12 md:gap-8">
                  <div className="flex flex-col gap-3 md:col-span-4">
                    <h3 translate={noTranslate(p)} className="font-medium text-text">
                      {p.title}
                    </h3>
                    <Stack p={p} ui={ui} />
                  </div>
                  <div className="flex flex-col gap-3 md:col-span-8">
                    <p className={body}>{p.summary}</p>
                    <Details p={p} className="max-w-[65ch] text-sm leading-relaxed text-muted" />
                    <RepoLink p={p} ui={ui} />
                  </div>
                </Reveal>
              ))}
            </ul>
          )}

          {others.items.length > 0 && (
            <div className="mt-12">
              <h3 className="font-mono text-sm text-muted">{others.title}</h3>
              <ul className="mt-4 grid grid-cols-1 gap-x-8 gap-y-4 md:grid-cols-3">
                {others.items.map((o) => (
                  <li key={o.href}>
                    <a href={o.href} target="_blank" rel="noopener noreferrer" className="group flex flex-col gap-1">
                      <span
                        translate="no"
                        className="link-draw w-fit font-mono text-sm text-text transition-colors duration-300 ease-fluid group-hover:text-accent"
                      >
                        {o.title}
                      </span>
                      <span className="text-sm leading-relaxed text-muted">{o.summary}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
