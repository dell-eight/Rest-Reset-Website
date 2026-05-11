import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about Rest Reset and the Sleep Reset Kit."
};

export default function AboutPage() {
  return (
    <PageShell
      eyebrow="About Rest Reset"
      title="Practical rest tools for people with modern schedules."
      description="Rest Reset is built around a simple idea: better routines should feel approachable for people who work late, stare at screens, switch shifts, or end the day overstimulated."
    >
      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <section className="rounded-lg border border-ink/10 bg-white/75 p-6">
          <h2 className="text-2xl font-semibold text-ink">Our point of view</h2>
          <p className="mt-4 leading-7 text-ink/66">
            {siteConfig.name} focuses on science-informed basics like light exposure,
            calmer environments, and consistent cues. We avoid exaggerated promises and
            keep the language grounded in everyday habits.
          </p>
          <p className="mt-4 leading-7 text-ink/66">
            The {siteConfig.kitName} is the main offer: a bundle of simple tools that
            supports a better sleep routine without pretending to be a medical solution.
          </p>
        </section>

        <section className="rounded-lg border border-ink/10 bg-mist p-6">
          <h2 className="text-2xl font-semibold text-ink">What we are building</h2>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            {[
              "Clean product education",
              "Responsible wellness copy",
              "Simple ecommerce flow",
              "Helpful support policies"
            ].map((item) => (
              <p key={item} className="rounded-lg bg-white/75 p-4 font-semibold text-ink">
                {item}
              </p>
            ))}
          </div>
          <Link
            href="/products/sleep-reset-kit"
            className="mt-6 inline-flex rounded-full bg-ink px-5 py-3 text-sm font-semibold text-white transition hover:bg-night focus:outline-none focus:ring-2 focus:ring-clay focus:ring-offset-2"
          >
            View the main offer
          </Link>
        </section>
      </div>
    </PageShell>
  );
}
