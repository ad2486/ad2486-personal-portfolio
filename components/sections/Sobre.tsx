import { getSite } from "@/content/i18n";

export async function Sobre() {
  const site = await getSite();
  const { title, paragraphs, languages } = site.about;
  return (
    <section id="sobre" className="py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-4 md:px-8">
        <div className="grid gap-8 border-t border-line pt-6 md:grid-cols-12">
          <h2 className="font-mono text-xl font-medium text-text md:col-span-3 md:text-2xl">{title}</h2>
          <div className="md:col-span-9">
            <div className="max-w-[65ch] space-y-4 text-[15px] leading-relaxed text-muted md:text-base">
              {paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
            <p className="mt-10 font-mono text-xs text-muted">{site.ui.languagesTitle}</p>
            <dl className="mt-3 max-w-md divide-y divide-line border-y border-line">
              {languages.map((l) => (
                <div key={l.name} className="flex items-baseline justify-between gap-4 py-2.5">
                  <dt className="text-text">{l.name}</dt>
                  <dd className="font-mono text-xs text-muted">{l.level}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
