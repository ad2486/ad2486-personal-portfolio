import { Bezel } from "@/components/Bezel";
import { Eyebrow } from "@/components/Eyebrow";
import { Reveal } from "@/components/Reveal";
import { getSite } from "@/content/i18n";

export async function Sobre() {
  const site = await getSite();
  const { eyebrow, title, paragraphs, languages } = site.about;
  return (
    <section id="sobre" className="py-24 md:py-40">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 md:grid-cols-12 md:gap-8 md:px-8">
        <div className="md:col-span-5">
          <Reveal>
            <Eyebrow>{eyebrow}</Eyebrow>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-6 text-4xl font-medium leading-[1.05] tracking-tighter text-balance md:text-5xl">
              {title}
            </h2>
          </Reveal>
        </div>

        <div className="md:col-span-6 md:col-start-7 md:pt-14">
          <div className="max-w-[60ch] space-y-5 text-base leading-relaxed text-muted md:text-lg">
            {paragraphs.map((p, i) => (
              <Reveal key={p} delay={0.16 + i * 0.08}>
                <p>{p}</p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.16 + paragraphs.length * 0.08} className="mt-12">
            <Bezel innerClassName="p-2">
              <p className="px-4 pb-3 pt-4 font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
                {site.ui.languagesTitle}
              </p>
              <ul className="grid gap-2 sm:grid-cols-3">
                {languages.map((l, i) => (
                  <Reveal
                    as="li"
                    key={l.name}
                    delay={0.4 + i * 0.08}
                    className="flex flex-col gap-3 rounded-[1.375rem] border border-line bg-white/[0.02] p-4"
                  >
                    <span className="text-lg font-medium tracking-tight">{l.name}</span>
                    <span className="font-mono text-xs text-muted">{l.level}</span>
                  </Reveal>
                ))}
              </ul>
            </Bezel>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
