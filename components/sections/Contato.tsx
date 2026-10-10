import { ArrowUpRightIcon as ArrowUpRight } from "@phosphor-icons/react/ssr";
import { getSite } from "@/content/i18n";
import { Bezel } from "@/components/Bezel";
import { Eyebrow } from "@/components/Eyebrow";
import { Reveal } from "@/components/Reveal";
import { TechIcon } from "@/components/TechIcon";

export async function Contato() {
  const site = await getSite();
  const c = site.contact;
  return (
    <section id="contato" className="py-24 md:py-40">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <Reveal>
          <Eyebrow>{c.eyebrow}</Eyebrow>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-6 text-balance text-5xl font-medium tracking-tighter md:text-7xl">{c.title}</h2>
        </Reveal>
        <ul className="mt-16 flex flex-col gap-4">
          {c.links.map((l, i) => (
            <Reveal as="li" key={l.href} delay={0.2 + i * 0.1}>
              <Bezel>
                <a
                  href={l.href}
                  {...(l.href.startsWith("mailto:") ? {} : { target: "_blank", rel: "noopener noreferrer" })}
                  className="group flex items-center gap-4 rounded-[calc(2rem-0.375rem)] py-3 pl-6 pr-3 transition-colors duration-500 ease-fluid hover:bg-white/[0.04] active:scale-[0.99] md:gap-6 md:py-4 md:pl-8"
                >
                  <TechIcon icon={l.icon} size={28} className="text-muted transition-colors duration-500 group-hover:text-text" />
                  <span className="flex min-w-0 flex-1 flex-col gap-1">
                    <span className="text-2xl font-medium tracking-tight md:text-4xl">{l.label}</span>
                    {l.detail && <span translate="no" className="break-all font-mono text-xs text-muted md:text-sm">{l.detail}</span>}
                  </span>
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 transition-transform duration-500 ease-fluid group-hover:-translate-y-1 group-hover:translate-x-1 md:h-14 md:w-14">
                    <ArrowUpRight size={20} weight="light" aria-hidden />
                  </span>
                </a>
              </Bezel>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
