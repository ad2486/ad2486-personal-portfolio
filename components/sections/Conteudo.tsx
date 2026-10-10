import { getSite } from "@/content/i18n";
import { Button } from "@/components/Button";

export async function Conteudo() {
  const site = await getSite();
  const c = site.content;
  return (
    <section id="conteudo" className="py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-4 md:px-8">
        <div className="grid gap-8 border-t border-line pt-6 md:grid-cols-12">
          <h2 className="font-mono text-xl font-medium text-text md:col-span-3 md:text-2xl">{c.title}</h2>
          <div className="md:col-span-9">
            <p className="max-w-[65ch] text-[15px] leading-relaxed text-muted md:text-base">{c.summary}</p>
            <dl className="mt-8 flex flex-wrap gap-10">
              {c.stats.map((s) => (
                <div key={s.label} className="flex flex-col-reverse gap-1">
                  <dt className="text-xs text-muted">{s.label}</dt>
                  <dd className="font-mono text-2xl tabular-nums text-text md:text-3xl">{s.value}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-8">
              <Button href={c.channel.href} variant="ghost" external>
                {site.ui.viewChannel} <span translate="no">{c.channel.label}</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
