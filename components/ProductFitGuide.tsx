import Link from "next/link";

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
    <section className="border-y border-ink/10 bg-white/65">
      <div className="mx-auto max-w-6xl px-5 py-12 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-sage">
            Choose by need
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-ink">
            Not sure where to start?
          </h2>
          <p className="mt-4 leading-7 text-ink/66">
            Use this guide to match a common routine problem with a simple next step.
          </p>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {fitGuideItems.map((item) => (
            <article key={item.need} className="rounded-lg border border-ink/10 bg-mist p-5">
              <p className="text-sm font-semibold text-clay">{item.need}</p>
              <h3 className="mt-3 text-xl font-semibold text-ink">{item.recommendation}</h3>
              <p className="mt-3 leading-7 text-ink/66">{item.reason}</p>
              <Link
                href={item.href}
                className="mt-5 inline-flex rounded-full bg-white px-5 py-3 text-sm font-semibold text-ink transition hover:bg-clay/15 focus:outline-none focus:ring-2 focus:ring-clay focus:ring-offset-2"
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
