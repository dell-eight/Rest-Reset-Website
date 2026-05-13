import Link from "next/link";
import { mutedCardClass, secondaryButtonClass, sectionEyebrowClass } from "@/lib/ui";

const fitGuideItems = [
  {
    need: "I want the easiest starting point",
    recommendation: "Sleep Reset Kit",
    href: "/products/sleep-reset-kit",
    reason:
      "The bundle combines light, sound, comfort, and routine cues so shoppers do not have to build a setup from scratch."
  },
  {
    need: "Screens are my biggest evening issue",
    recommendation: "Blue-Light Blocking Glasses",
    href: "/products/blue-light-blocking-glasses",
    reason:
      "A practical light-management cue for late work, gaming, or programming sessions."
  },
  {
    need: "My room feels distracting",
    recommendation: "White Noise Machine",
    href: "/products/white-noise-machine",
    reason:
      "A simple way to reduce everyday background noise and make the rest environment feel more consistent."
  },
  {
    need: "I want to understand my habits",
    recommendation: "Sleep Journal",
    href: "/products/sleep-journal",
    reason:
      "A low-pressure reflection tool for noticing patterns without turning bedtime into a project."
  }
] as const;

export function ProductFitGuide() {
  return (
    <section className="border-y border-ink/10 bg-linen/70">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className={sectionEyebrowClass}>Choose by need</p>
          <h2 className="mt-3 text-3xl font-semibold text-ink">
            Not sure where to start?
          </h2>
          <p className="mt-4 leading-7 text-ink/66">
            Use this guide to match a common routine problem with a simple next step.
          </p>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {fitGuideItems.map((item) => (
            <article key={item.need} className={`${mutedCardClass} flex h-full flex-col`}>
              <p className="text-sm font-semibold text-clay">{item.need}</p>
              <h3 className="mt-3 text-xl font-semibold text-ink">{item.recommendation}</h3>
              <p className="mt-3 flex-1 leading-7 text-ink/66">{item.reason}</p>
              <Link
                href={item.href}
                className={`mt-5 ${secondaryButtonClass}`}
              >
                View recommendation
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
