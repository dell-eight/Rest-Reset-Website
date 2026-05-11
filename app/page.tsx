import {
  benefits,
  bundleItems,
  educationPoints,
  faqs,
  testimonials
} from "@/data/homepage";
import Link from "next/link";
import { ArticleCard } from "@/components/ArticleCard";
import { EmailCaptureForm } from "@/components/EmailCaptureForm";
import { TrustSection } from "@/components/TrustSection";
import { siteConfig } from "@/lib/site";
import { learnArticles } from "@/data/learn";

const sectionLabelClass =
  "text-sm font-semibold uppercase tracking-[0.14em] text-sage";

const primaryCtaClass =
  "inline-flex items-center justify-center rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white transition hover:bg-night focus:outline-none focus:ring-2 focus:ring-clay focus:ring-offset-2";

const secondaryCtaClass =
  "inline-flex items-center justify-center rounded-full border border-ink/15 bg-white/70 px-6 py-3 text-sm font-semibold text-ink transition hover:border-ink/35 hover:bg-white focus:outline-none focus:ring-2 focus:ring-clay focus:ring-offset-2";

export default function Home() {
  return (
    <div>
      <section className="mx-auto grid w-full max-w-6xl gap-10 px-5 py-12 sm:px-6 lg:grid-cols-[1fr_0.92fr] lg:items-center lg:px-8 lg:py-20">
        <div>
          <p className={sectionLabelClass}>{siteConfig.kitName}</p>
          <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-normal text-ink sm:text-5xl lg:text-6xl">
            Sleep better. Recover smarter. Feel human again.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-ink/72">
            Simple science-backed sleep and recovery tools for tired office workers,
            gamers, and young professionals.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="/products/sleep-reset-kit" className={primaryCtaClass}>
              View the Sleep Reset Kit
            </a>
            <a href="#email-capture" className={secondaryCtaClass}>
              Get the free reset checklist
            </a>
          </div>
          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {[
              ["Best for", "Screen-heavy workers and late-night routines"],
              ["Includes", "Mask, pillowcase, earplugs, journal, and cards"],
              ["Promise", "Routine support without medical claims"]
            ].map(([label, value]) => (
              <div key={label} className="rounded-lg border border-ink/10 bg-white/70 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-sage">
                  {label}
                </p>
                <p className="mt-2 text-sm leading-6 text-ink/68">{value}</p>
              </div>
            ))}
          </div>
          <p className="mt-5 text-sm leading-6 text-ink/58">
            Built for screen-heavy days, late nights, shifting schedules, and routines
            that need to feel practical.
          </p>
        </div>

        <div className="rounded-lg border border-ink/10 bg-white/80 p-5 shadow-soft">
          <div className="rounded-lg bg-mist p-5">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm font-semibold text-clay">Bundle preview</p>
                <h2 className="mt-2 text-2xl font-semibold text-ink">
                  {siteConfig.kitName}
                </h2>
              </div>
              <div className="rounded-full bg-ink px-3 py-1 text-xs font-semibold text-white">
                Launch preview
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3">
              {bundleItems.slice(0, 4).map((item) => (
                <div
                  key={item.name}
                  className="min-h-28 rounded-lg border border-ink/10 bg-white p-4"
                >
                  <div className="mb-4 h-2 w-12 rounded-full bg-sage/55" />
                  <p className="text-sm font-semibold text-ink">{item.name}</p>
                </div>
              ))}
            </div>

            <div className="mt-4 rounded-lg border border-dashed border-ink/20 bg-white/65 p-4">
              <p className="text-sm leading-6 text-ink/68">
                A simple starter bundle for creating a calmer bedtime environment and
                repeatable rest routine.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-ink/10 bg-white/65">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-14 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
          <div>
            <p className={sectionLabelClass}>The problem</p>
            <h2 className="mt-3 text-3xl font-semibold text-ink">
              Modern routines make rest feel harder than it should.
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              "Bright screens and long work sessions can make evenings feel wired.",
              "Late nights, gaming, and shifting schedules can make routines inconsistent.",
              "Stressful days often turn bedtime into another task instead of a reset.",
              "Tired mornings can make it harder to keep the habits you meant to build."
            ].map((problem) => (
              <p key={problem} className="rounded-lg border border-ink/10 bg-mist p-5 leading-7 text-ink/68">
                {problem}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section
        id="sleep-reset-kit"
        className="mx-auto max-w-6xl px-5 py-14 sm:px-6 lg:px-8"
        aria-labelledby="kit-title"
      >
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className={sectionLabelClass}>What is inside</p>
            <h2 id="kit-title" className="mt-3 text-3xl font-semibold text-ink">
              A practical kit for your wind-down routine.
            </h2>
            <p className="mt-4 leading-7 text-ink/66">
              Preview the planned bundle, how each tool supports the routine, and
              how to join the launch list before ordering opens.
            </p>
          </div>
          <a href="/products/sleep-reset-kit" className={secondaryCtaClass}>
            View full kit details
          </a>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {bundleItems.map((item) => (
            <article key={item.name} className="rounded-lg border border-ink/10 bg-white/70 p-5">
              <h3 className="text-lg font-semibold text-ink">{item.name}</h3>
              <p className="mt-3 leading-7 text-ink/65">{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-night text-white">
        <div className="mx-auto max-w-6xl px-5 py-14 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-clay">
            Benefits
          </p>
          <h2 className="mt-3 max-w-2xl text-3xl font-semibold">
            Built for small habits that are easy to repeat.
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit) => (
              <article key={benefit.title} className="rounded-lg border border-white/12 bg-white/8 p-5">
                <h3 className="text-lg font-semibold">{benefit.title}</h3>
                <p className="mt-3 leading-7 text-white/72">{benefit.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="how-it-works"
        className="mx-auto grid max-w-6xl gap-8 px-5 py-14 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8"
      >
        <div>
          <p className={sectionLabelClass}>How it works</p>
          <h2 className="mt-3 text-3xl font-semibold text-ink">
            Science-backed basics, made usable.
          </h2>
          <p className="mt-4 leading-7 text-ink/66">
            The Sleep Reset Kit focuses on sleep hygiene principles that are practical
            for real life: light exposure, calmer cues, less friction, and consistency.
          </p>
        </div>
        <div className="grid gap-4">
          {educationPoints.map((point, index) => (
            <article key={point} className="rounded-lg border border-ink/10 bg-white/70 p-5">
              <p className="text-sm font-semibold text-clay">0{index + 1}</p>
              <p className="mt-2 leading-7 text-ink/68">{point}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-ink/10 bg-white/65">
        <div className="mx-auto max-w-6xl px-5 py-14 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className={sectionLabelClass}>Learn</p>
              <h2 className="mt-3 text-3xl font-semibold text-ink">
                Build a routine with practical education.
              </h2>
              <p className="mt-4 leading-7 text-ink/66">
                Read responsible, beginner-friendly guides on sleep hygiene, bedtime
                routines, and recovery tools for screen-heavy days.
              </p>
            </div>
            <Link href="/learn" className={secondaryCtaClass}>
              Visit Learn
            </Link>
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {learnArticles.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-ink/10 bg-white/65">
        <div className="mx-auto max-w-6xl px-5 py-14 sm:px-6 lg:px-8">
          <p className={sectionLabelClass}>Example shopper scenarios</p>
          <h2 className="mt-3 text-3xl font-semibold text-ink">
            A few ways the kit could fit real routines.
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <article key={testimonial.name} className="rounded-lg border border-ink/10 bg-mist p-5">
                <span className="rounded-full bg-clay/15 px-3 py-1 text-xs font-semibold text-ink">
                  {testimonial.label}
                </span>
                <p className="mt-5 leading-7 text-ink/72">&quot;{testimonial.quote}&quot;</p>
                <p className="mt-5 text-sm font-semibold text-ink">{testimonial.name}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="faq"
        className="mx-auto grid max-w-6xl gap-8 px-5 py-14 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8"
      >
        <div>
          <p className={sectionLabelClass}>FAQ</p>
          <h2 className="mt-3 text-3xl font-semibold text-ink">
            Straight answers before checkout is live.
          </h2>
        </div>
        <div className="grid gap-4">
          {faqs.map((faq) => (
            <article key={faq.question} className="rounded-lg border border-ink/10 bg-white/70 p-5">
              <h3 className="text-lg font-semibold text-ink">{faq.question}</h3>
              <p className="mt-3 leading-7 text-ink/66">{faq.answer}</p>
            </article>
          ))}
        </div>
      </section>

      <TrustSection />

      <section id="email-capture" className="bg-clay/12">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-14 sm:px-6 lg:grid-cols-[1fr_0.9fr] lg:items-center lg:px-8">
          <div>
            <p className={sectionLabelClass}>Free checklist</p>
            <h2 className="mt-3 text-3xl font-semibold text-ink">
              Get the Sleep Reset Checklist.
            </h2>
            <p className="mt-4 max-w-2xl leading-7 text-ink/66">
              A simple evening checklist for reducing distractions, setting up your
              environment, and making your routine easier to repeat.
            </p>
          </div>
          <EmailCaptureForm source="homepage-sleep-reset-checklist" />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-14 text-center sm:px-6 lg:px-8">
        <p className={sectionLabelClass}>Ready to reset?</p>
        <h2 className="mx-auto mt-3 max-w-2xl text-3xl font-semibold text-ink">
          Start with a calmer routine, then build from there.
        </h2>
        <p className="mx-auto mt-4 max-w-2xl leading-7 text-ink/66">
          The Sleep Reset Kit is planned as a simple bundle of tools for rest and
          recovery habits, without exaggerated promises or complicated setup.
        </p>
        <div className="mt-8">
          <a href="/products/sleep-reset-kit" className={primaryCtaClass}>
            View the Sleep Reset Kit
          </a>
        </div>
      </section>
    </div>
  );
}
