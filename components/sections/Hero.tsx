import { Button } from "@/components/Button";
import { Reveal } from "@/components/Reveal";
import { getSite } from "@/content/i18n";

// Reveal's whileInView fires on mount for above-the-fold content, so delays give the load sequence.
export async function Hero() {
  const site = await getSite();
  const { hero } = site;
  return (
    <section id="top" className="pb-8 pt-32 md:pb-12 md:pt-40">
      <div className="mx-auto max-w-5xl px-4 md:px-8">
        <div className="flex items-center gap-5">
          {/* No Reveal: the avatar is the LCP element and must paint before hydration. */}
          {/* eslint-disable-next-line @next/next/no-img-element -- static export, images.unoptimized */}
          <img
            src={site.avatar}
            alt={site.ui.avatarAlt}
            width={128}
            height={128}
            fetchPriority="high"
            className="h-16 w-16 shrink-0 rounded-lg border border-line object-cover"
          />
          <Reveal>
            <h1
              translate="no"
              className="bg-gradient-to-b from-white to-[#7a7a7a] bg-clip-text pb-1 text-4xl font-semibold tracking-tight text-transparent md:text-6xl"
            >
              {site.name}
            </h1>
            <p className="mt-2 font-mono text-base text-accent md:text-lg">{hero.headline}</p>
          </Reveal>
        </div>
        <Reveal delay={0.1} className="mt-8">
          <p className="max-w-[65ch] text-[15px] leading-relaxed text-muted md:text-base">{hero.sub}</p>
          <p className="mt-4 font-mono text-xs text-muted">{site.location}</p>
        </Reveal>
        <Reveal delay={0.2} className="mt-8 flex flex-wrap gap-3">
          <Button href={hero.ctaPrimary.href}>{hero.ctaPrimary.label}</Button>
          <Button href={hero.ctaSecondary.href} variant="ghost" external>
            {hero.ctaSecondary.label}
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
