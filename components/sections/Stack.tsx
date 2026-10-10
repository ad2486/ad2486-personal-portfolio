import { Reveal } from "@/components/Reveal";
import { TechIcon } from "@/components/TechIcon";
import { getSite } from "@/content/i18n";
import type { IconKey } from "@/content/site";

// Brand hex is near-black (Rust, Fastify, Prisma): invisible on the dark bg, so hover to text instead.
const darkBrand = new Set<IconKey>(["rust", "fastify", "prisma"]);

export async function Stack() {
  const site = await getSite();
  const { title, groups } = site.stack;
  return (
    <section id="stack" className="py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-4 md:px-8">
        <div className="grid gap-8 border-t border-line pt-6 md:grid-cols-12">
          <h2 className="font-mono text-xl font-medium text-text md:col-span-3 md:text-2xl">{title}</h2>
          <div className="divide-y divide-line md:col-span-9">
            {groups.map((g, gi) => {
              const studying = g.id === "studying";
              return (
                <Reveal key={g.id} delay={gi * 0.08} className="flex flex-col gap-3 py-4 first:pt-0 md:flex-row md:gap-6">
                  <h3 className="shrink-0 font-mono text-xs text-muted md:w-32 md:pt-0.5">{g.title}</h3>
                  <ul className="flex flex-wrap gap-x-5 gap-y-2" aria-label={g.title}>
                    {g.items.map((it) => (
                      <li
                        key={it.label}
                        className={`group flex items-center gap-2 text-sm ${studying ? "text-muted" : "text-text"}`}
                      >
                        <TechIcon
                          icon={it.icon}
                          size={16}
                          className={`shrink-0 text-muted transition-colors duration-300 ease-fluid ${
                            darkBrand.has(it.icon)
                              ? "group-hover:text-text"
                              : "group-hover:text-[var(--brand,var(--color-accent))]"
                          }`}
                        />
                        <span translate="no">{it.label}</span>
                      </li>
                    ))}
                  </ul>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
