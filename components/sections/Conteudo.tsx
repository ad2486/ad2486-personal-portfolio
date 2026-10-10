import { getSite } from "@/content/i18n";
import { Bezel } from "@/components/Bezel";
import { Button } from "@/components/Button";
import { Eyebrow } from "@/components/Eyebrow";
import { Reveal } from "@/components/Reveal";
import { TechIcon } from "@/components/TechIcon";

export async function Conteudo() {
  const site = await getSite();
  const c = site.content;
  return (
    <section id="conteudo" className="py-24 md:py-40">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <Reveal>
          <Bezel innerClassName="relative overflow-hidden p-8 md:p-14">
            <TechIcon
              icon="youtube"
              size={220}
              className="pointer-events-none absolute -right-10 -top-10 text-white/[0.03]"
            />
            <div className="relative grid gap-12 md:grid-cols-2 md:items-end">
              <div className="flex flex-col items-start gap-6">
                <Reveal delay={0.1}>
                  <Eyebrow>{c.eyebrow}</Eyebrow>
                </Reveal>
                <Reveal delay={0.15}>
                  <h2 className="text-balance text-4xl font-medium tracking-tighter md:text-5xl">{c.title}</h2>
                </Reveal>
                <Reveal delay={0.2}>
                  <p className="max-w-md text-base leading-relaxed text-muted">{c.summary}</p>
                </Reveal>
                <Reveal delay={0.25}>
                  <Button href={c.channel.href} variant="ghost" external>
                    {site.ui.viewChannel} <span translate="no">{c.channel.label}</span>
                  </Button>
                </Reveal>
              </div>
              <dl className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:border-l md:border-line md:pl-12">
                {c.stats.map((s, i) => (
                  <Reveal key={s.label} delay={0.3 + i * 0.1} className="flex flex-col-reverse gap-3">
                    <dt className="font-mono text-xs uppercase tracking-[0.2em] text-muted">{s.label}</dt>
                    <dd className="whitespace-nowrap font-sans tabular-nums text-5xl font-medium tracking-tighter md:text-4xl lg:text-6xl">{s.value}</dd>
                  </Reveal>
                ))}
              </dl>
            </div>
          </Bezel>
        </Reveal>
      </div>
    </section>
  );
}
