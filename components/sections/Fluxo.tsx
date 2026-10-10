import { CalendarIcon as Calendar } from "@phosphor-icons/react/ssr";
import { SpotlightPanel } from "@/components/SpotlightPanel";
import { getSite } from "@/content/i18n";

// Packet: a full-width carrier slides from -100% to 0% of the rail track, so its
// right-edge dot travels from the first marker to the last. Transform/opacity only.
// It moves linearly from 12% to 72% of the loop, so marker i is reached at
// 12% + 60% * i / (steps - 1); each marker flashes with the same period, delayed to that moment.
const LOOP_S = 4;
const keyframes = `@keyframes fluxo-packet {
  0%, 12% { transform: translateX(-100%); opacity: 0; }
  14% { opacity: 1; }
  72% { transform: translateX(0); opacity: 1; }
  86%, 100% { transform: translateX(0); opacity: 0; }
}
@keyframes fluxo-node {
  0% { opacity: 1; transform: scale(1.6); }
  18% { opacity: 0; transform: scale(1); }
  100% { opacity: 0; transform: scale(1); }
}`;
const arrival = (i: number, n: number) => LOOP_S * (0.12 + (0.6 * i) / (n - 1));

// Rail spans first marker center to last marker center: grid-cols-6 with gap-4
// puts the last column's start at 100% minus one column width.
const railEnd = "right-[calc((100%-5rem)/6-5px)]";

export async function Fluxo() {
  const site = await getSite();
  const { title, summary, steps, weekly } = site.flow;
  const last = steps.length - 1;

  return (
    <section id="deploy" className="py-16 md:py-24">
      <style>{keyframes}</style>
      <div className="mx-auto max-w-5xl px-4 md:px-8">
        <div className="border-t border-line pt-6">
          <h2 className="font-mono text-xl font-medium text-text md:text-2xl">{title}</h2>
          <p className="mt-4 max-w-[65ch] text-[15px] leading-relaxed text-muted md:text-base">{summary}</p>

          <div className="relative mt-12">
            <div aria-hidden className={`absolute left-[5px] top-[4.5px] hidden h-px bg-line lg:block ${railEnd}`} />
            <div aria-hidden className={`absolute left-[5px] top-[1.5px] hidden h-1.5 lg:block motion-reduce:hidden! ${railEnd}`}>
              <div className="relative h-full w-full animate-[fluxo-packet_4s_linear_infinite]">
                <span className="absolute right-0 top-0 size-1.5 translate-x-1/2 bg-white shadow-[0_0_10px_2px_rgb(255_255_255/0.7)]" />
              </div>
            </div>

            <ol className="lg:grid lg:grid-cols-6 lg:gap-4">
              {steps.map((s, i) => (
                <li key={s.label} className="relative pb-8 pl-8 last:pb-0 lg:pb-0 lg:pl-0">
                  {i < last && (
                    <span aria-hidden className="absolute -bottom-[5px] left-[4.5px] top-[15px] w-px bg-line lg:hidden" />
                  )}
                  <span
                    aria-hidden
                    className={`absolute left-0 top-[5px] block size-2.5 lg:relative lg:top-0 lg:mb-4 ${
                      i === last ? "bg-accent" : "border border-line bg-surface-2"
                    }`}
                  >
                    {/* Flash when the packet passes; desktop only, like the packet. */}
                    <span
                      className="absolute inset-0 hidden bg-white opacity-0 shadow-[0_0_14px_3px_rgb(255_255_255/0.55)] lg:block lg:animate-[fluxo-node_4s_linear_infinite] motion-reduce:hidden!"
                      style={{ animationDelay: `${arrival(i, steps.length)}s` }}
                    />
                  </span>
                  <p translate={i < last ? "no" : undefined} className="font-mono text-sm text-text">
                    {s.label}
                  </p>
                  <p className="mt-1 max-w-[40ch] text-xs leading-snug text-muted lg:max-w-[16ch]">{s.detail}</p>
                </li>
              ))}
            </ol>
          </div>

          <SpotlightPanel className="mt-12 flex max-w-[65ch] gap-3 p-4 text-sm text-muted">
            <Calendar size={16} aria-hidden className="mt-0.5 shrink-0" />
            <p>{weekly}</p>
          </SpotlightPanel>
        </div>
      </div>
    </section>
  );
}
