import { ArrowUpRightIcon as ArrowUpRight, HardDrivesIcon as HardDrives } from "@phosphor-icons/react/ssr";
import { Bezel } from "@/components/Bezel";
import { Eyebrow } from "@/components/Eyebrow";
import { Reveal } from "@/components/Reveal";
import { getSite } from "@/content/i18n";
import type { Project, Site } from "@/content/site";

// lg bento: 12 cols (7 + 5, 4 + 4 + 4, Homelab full). Projects added later default to 4 cols.
const spans: Record<string, string> = {
  "backend-ticketeira": "lg:col-span-7",
  "dev-tool-cli": "lg:col-span-5",
  "multi-llm-cli": "lg:col-span-4",
  "welcoming-discord-bot": "lg:col-span-4",
  "youtube-discord-bot": "lg:col-span-4",
  homelab: "lg:col-span-12",
};

const isConcurrency = (d: string) => d.includes("SELECT FOR UPDATE");

function ProjectCard({ p, ui }: { p: Project; ui: Site["ui"] }) {
  const callout = p.details?.find(isConcurrency);
  const details = p.details?.filter((d) => !isConcurrency(d));
  const tinted = !p.image;

  return (
    <Bezel
      className="group h-full transition-transform duration-700 ease-fluid hover:-translate-y-1"
      innerClassName={`flex flex-col overflow-hidden ${
        tinted
          ? "bg-[radial-gradient(120%_90%_at_100%_0%,rgb(143_179_255/0.14),transparent_60%)]"
          : ""
      }`}
    >
      {p.image ? (
        <div className="p-2 pb-0">
          <div className="overflow-hidden rounded-[1.25rem] border border-line bg-surface-2">
            {/* eslint-disable-next-line @next/next/no-img-element -- static export, images.unoptimized */}
            <img
              src={p.image}
              alt={`${ui.repoPreviewAlt} ${p.title}`}
              width={1200}
              height={600}
              loading="lazy"
              className="aspect-[1200/600] w-full object-cover transition-transform duration-700 ease-fluid group-hover:scale-[1.03]"
            />
          </div>
        </div>
      ) : (
        <div className="px-6 pt-6 md:px-8 md:pt-8">
          <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-line bg-white/[0.04] text-accent">
            <HardDrives size={24} weight="light" aria-hidden />
          </span>
        </div>
      )}

      <div className="flex flex-1 flex-col gap-5 p-6 md:p-8">
        <div className="flex flex-col gap-3">
          {p.status && (
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3 py-1 font-mono text-[11px] text-accent">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
              {p.status}
            </span>
          )}
          <h3 className="text-xl font-medium tracking-tight text-text md:text-2xl">{p.title}</h3>
          <p className="max-w-prose text-sm leading-relaxed text-muted md:text-base">{p.summary}</p>
        </div>

        {callout && (
          <div className="rounded-2xl border border-accent/20 bg-bg/60 p-4 font-mono text-[13px] leading-relaxed text-text md:p-5">
            <span className="mb-2 block text-[11px] uppercase tracking-[0.2em] text-accent">
              {ui.concurrency}
            </span>
            {callout}
          </div>
        )}

        {details && details.length > 0 && (
          <ul className="flex flex-col gap-2 text-sm leading-relaxed text-muted">
            {details.map((d) => (
              <li key={d} className="flex gap-3">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent/70" aria-hidden />
                {d}
              </li>
            ))}
          </ul>
        )}

        <ul className="flex flex-wrap gap-1.5" aria-label={ui.stackListLabel}>
          {p.stack.map((s) => (
            <li
              key={s}
              translate="no"
              className="rounded-full border border-line bg-white/[0.03] px-2.5 py-1 font-mono text-[11px] text-muted"
            >
              {s}
            </li>
          ))}
        </ul>

        {p.repo && (
          <a
            href={p.repo}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={ui.viewCodeOf.replace("{title}", p.title)}
            className="mt-auto inline-flex w-fit items-center gap-2 rounded-full text-sm font-medium text-text transition-colors duration-500 ease-fluid hover:text-accent"
          >
            {ui.viewCode}
            <ArrowUpRight size={16} weight="light" aria-hidden />
          </a>
        )}
      </div>
    </Bezel>
  );
}

export async function Projetos() {
  const site = await getSite();
  const { eyebrow, title, items, others } = site.projects;
  return (
    <section id="projetos" className="py-24 md:py-40">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <Reveal className="flex flex-col items-start gap-5">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h2 className="text-balance text-4xl font-medium tracking-tight text-text md:text-6xl">{title}</h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-4 md:mt-20 lg:grid-cols-12">
          {items.map((p, i) => (
            <Reveal key={p.slug} className={spans[p.slug] ?? "lg:col-span-4"} delay={i * 0.08}>
              <ProjectCard p={p} ui={site.ui} />
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-20 md:mt-28">
          <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-muted">{others.title}</h3>
        </Reveal>
        <ul className="mt-6 grid grid-cols-1 gap-3 md:grid-cols-3">
          {others.items.map((o, i) => (
            <Reveal as="li" key={o.href} delay={i * 0.08}>
              <a
                href={o.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group block h-full rounded-[2rem]"
              >
                <Bezel
                  className="h-full transition-transform duration-700 ease-fluid group-hover:-translate-y-1"
                  innerClassName="flex items-start justify-between gap-4 p-5"
                >
                  <div className="flex flex-col gap-1.5">
                    <span translate="no" className="font-mono text-sm text-text">{o.title}</span>
                    <span className="text-sm leading-relaxed text-muted">{o.summary}</span>
                  </div>
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/[0.06] text-muted transition-transform duration-500 ease-fluid group-hover:-translate-y-[1px] group-hover:translate-x-0.5 group-hover:text-accent">
                    <ArrowUpRight size={14} weight="light" aria-hidden />
                  </span>
                </Bezel>
              </a>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
