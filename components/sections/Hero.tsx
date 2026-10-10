import { Bezel } from "@/components/Bezel";
import { Button } from "@/components/Button";
import { Eyebrow } from "@/components/Eyebrow";
import { Reveal } from "@/components/Reveal";
import { getSite } from "@/content/i18n";

// Reveal's whileInView fires on mount for above-the-fold content, so delays give the load sequence.
export async function Hero() {
  const site = await getSite();
  const { hero } = site;
  return (
    <section id="top" className="flex min-h-[100dvh] items-center pb-24 pt-32 md:pt-24">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 px-4 md:grid-cols-[1.4fr_1fr] md:gap-16 md:px-8">
        <div>
          <Reveal>
            <Eyebrow>{hero.eyebrow}</Eyebrow>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 translate="no" className="mt-6 text-5xl font-medium tracking-tighter text-text md:text-7xl">{site.name}</h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-4 text-xl tracking-tight text-accent md:text-2xl">{hero.headline}</p>
          </Reveal>
          <Reveal delay={0.3}>
            <p className="mt-6 max-w-[45ch] text-base leading-relaxed text-muted md:text-lg">{hero.sub}</p>
          </Reveal>
          <Reveal delay={0.4} className="mt-10 flex flex-wrap gap-3">
            <Button href={hero.ctaPrimary.href}>{hero.ctaPrimary.label}</Button>
            <Button href={hero.ctaSecondary.href} variant="ghost" external>
              {hero.ctaSecondary.label}
            </Button>
          </Reveal>
        </div>
        {/* No Reveal: the avatar is the LCP element and must paint before hydration. */}
        <div className="mx-auto w-full max-w-64 md:mt-24 md:max-w-sm">
          <Bezel innerClassName="overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element -- static export, images.unoptimized */}
            <img
              src={site.avatar}
              alt={site.ui.avatarAlt}
              width={460}
              height={460}
              fetchPriority="high"
              className="aspect-square w-full object-cover"
            />
          </Bezel>
        </div>
      </div>
    </section>
  );
}
