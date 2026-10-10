import { Bezel } from "@/components/Bezel";
import { Eyebrow } from "@/components/Eyebrow";
import { Reveal } from "@/components/Reveal";
import { TechIcon } from "@/components/TechIcon";
import { getSite } from "@/content/i18n";
import type { IconKey, StackGroup } from "@/content/site";

// Asymmetric 12-col placement: Infra wide on the left, two small cells stacked right, Estudando full strip.
const layout: Record<StackGroup["id"], { cell: string; items: string }> = {
  languages: { cell: "md:col-span-4 md:col-start-9 md:row-start-1", items: "grid-cols-2" },
  backend: { cell: "md:col-span-4 md:col-start-9 md:row-start-2", items: "grid-cols-2" },
  infra: { cell: "md:col-span-8 md:col-start-1 md:row-span-2 md:row-start-1", items: "grid-cols-2 sm:grid-cols-3 md:flex-1 md:auto-rows-fr" },
  studying: { cell: "md:col-span-12 md:row-start-3", items: "grid-cols-1 sm:grid-cols-3" },
};

// Brand hex is near-black (Rust, Fastify, Prisma): invisible on the dark bg, so hover to text instead.
const darkBrand = new Set<IconKey>(["rust", "fastify", "prisma"]);

export async function Stack() {
  const site = await getSite();
  const { eyebrow, title, groups } = site.stack;
  return (
    <section id="stack" className="py-24 md:py-40">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <Reveal>
          <Eyebrow>{eyebrow}</Eyebrow>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="mt-6 text-balance text-4xl font-medium tracking-tighter md:text-5xl">{title}</h2>
        </Reveal>

        <div className="mt-14 grid gap-4 md:grid-cols-12">
          {groups.map((g, gi) => {
            const studying = g.id === "studying";
            return (
              <Reveal key={g.title} delay={0.12 + gi * 0.08} className={layout[g.id].cell}>
                <Bezel className="h-full" innerClassName="flex flex-col p-6 md:p-8">
                  <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
                    <h3 className="flex items-center gap-2">
                      {studying && <span className="size-1.5 rounded-full border border-accent" aria-hidden />}
                      {g.title}
                    </h3>
                  </div>
                  <ul className={`mt-6 grid gap-2 ${layout[g.id].items}`}>
                    {g.items.map((it, i) => (
                      <Reveal
                        as="li"
                        key={it.label}
                        delay={0.2 + gi * 0.08 + i * 0.04}
                        className={`group flex items-center gap-3 rounded-2xl border px-4 py-3 text-sm leading-tight transition-colors duration-500 ease-fluid ${
                          studying
                            ? "border-dashed border-white/15 text-muted"
                            : "border-line bg-white/[0.02] hover:bg-white/[0.04]"
                        }`}
                      >
                        <TechIcon
                          icon={it.icon}
                          size={22}
                          className={`shrink-0 text-muted transition-colors duration-500 ease-fluid ${
                            darkBrand.has(it.icon)
                              ? "group-hover:text-text"
                              : "group-hover:text-[var(--brand,var(--color-accent))]"
                          }`}
                        />
                        <span translate="no">{it.label}</span>
                      </Reveal>
                    ))}
                  </ul>
                </Bezel>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
