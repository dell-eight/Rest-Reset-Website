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
import {
  cardClass,
  darkOutlineButtonClass,
  interactiveCardClass,
  inverseButtonClass,
  mutedCardClass,
  primaryButtonClass,
  secondaryButtonClass,
  sectionEyebrowClass
} from "@/lib/ui";

const heroStats = [
  ["6-piece", "starter kit"],
  ["3 min", "checklist"],
  ["0", "medical claims"]
] as const;

const bundleVisualItems = [
  ["Mask", "Light cue", "bg-sage/35"],
  ["Journal", "Thought reset", "bg-white"],
  ["Cards", "Routine prompts", "bg-clay/20"],
  ["Earplugs", "Noise support", "bg-ink/10"]
] as const;

const benefitMarkers = ["01", "02", "03", "04"] as const;

export default function Home() {
  return (
    <div className="overflow-hidden">
      <section className="relative border-b border-ink/10">
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(135deg,rgba(251,247,240,0.96),rgba(238,244,237,0.92))]" />
        <div className="mx-auto grid w-full max-w-6xl gap-9 px-5 py-10 sm:px-6 sm:py-14 lg:grid-cols-[1fr_0.88fr] lg:items-center lg:px-8 lg:py-24">
          <div>
            <p className={sectionEyebrowClass}>{siteConfig.kitName}</p>
            <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-[1.08] tracking-normal text-ink sm:text-5xl lg:text-6xl">
              A calmer wind-down kit for screen-heavy days.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-ink/72 sm:mt-6 sm:text-lg sm:leading-8">
              Preview a simple sleep and recovery bundle for tired office workers,
              gamers, night-shift workers, and young professionals who want a
              routine they can actually repeat.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="/products/sleep-reset-kit" className={primaryButtonClass}>
                View the Sleep Reset Kit
              </a>
              <a href="#email-capture" className={secondaryButtonClass}>
                Get the free reset checklist
              </a>
            </div>
            <div className="mt-8 grid max-w-2xl grid-cols-3 gap-2 sm:mt-9 sm:gap-3">
              {heroStats.map(([value, label]) => (
                <div key={label} className="rounded-xl border border-ink/10 bg-white/75 p-3 shadow-subtle backdrop-blur sm:p-4">
                  <p className="text-xl font-semibold text-ink sm:text-2xl">{value}</p>
                  <p className="mt-1 text-[0.68rem] font-semibold uppercase tracking-[0.1em] text-ink/48 sm:text-xs sm:tracking-[0.12em]">
                    {label}
                  </p>
                </div>
              ))}
            </div>
            <p className="mt-5 max-w-2xl text-sm leading-6 text-ink/58">
              Built around practical sleep hygiene: less light, fewer distractions,
              simple cues, and no exaggerated wellness promises.
            </p>
          </div>

          <div className="relative">
            <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full border border-clay/20 bg-clay/10" />
            <div className="relative rounded-2xl border border-ink/10 bg-white/90 p-3 shadow-lift backdrop-blur sm:p-5">
              <div className="rounded-2xl bg-foam p-4 sm:p-5">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
                  <div>
                    <p className="text-sm font-semibold text-clay">Bundle preview</p>
                    <h2 className="mt-2 text-2xl font-semibold text-ink">
                      {siteConfig.kitName}
                    </h2>
                    <p className="mt-2 text-sm leading-6 text-ink/62">
                      A launch-list preview of the planned routine bundle.
                    </p>
                  </div>
                  <div className="rounded-full bg-ink px-3 py-1 text-xs font-semibold text-white">
                    Launch preview
                  </div>
                </div>

                <div
                  role="img"
                  aria-label="Sleep Reset Kit bundle mockup with mask, journal, routine cards, and earplugs"
                  className="relative mt-5 min-h-64 overflow-hidden rounded-2xl border border-ink/10 bg-linen p-4 sm:mt-6 sm:min-h-72 sm:p-5"
                >
                  <div className="absolute left-5 top-7 h-32 w-36 rounded-2xl border border-ink/10 bg-white shadow-card sm:left-8 sm:h-36 sm:w-44" />
                  <div className="absolute left-10 top-12 h-24 w-40 rounded-2xl bg-clay/20 ring-1 ring-clay/20 sm:left-14 sm:h-28 sm:w-48" />
                  <div className="absolute bottom-12 left-3 h-12 w-32 rounded-full bg-sage/35 ring-1 ring-sage/30 sm:left-4 sm:h-14 sm:w-40" />
                  <div className="absolute bottom-10 right-7 h-20 w-14 rounded-xl bg-white shadow-subtle ring-1 ring-ink/10 sm:right-9 sm:h-24 sm:w-16" />
                  <div className="absolute right-6 top-20 h-14 w-24 rounded-xl bg-foam shadow-subtle ring-1 ring-ink/10 sm:right-8 sm:h-16 sm:w-28" />
                  <div className="absolute bottom-5 left-5 right-5 grid grid-cols-2 gap-2">
                    {bundleVisualItems.map(([name, role, color]) => (
                      <div key={name} className="rounded-xl border border-ink/10 bg-white/85 p-3 shadow-subtle">
                        <div className={`mb-2 h-2 w-10 rounded-full ${color}`} />
                        <p className="text-xs font-semibold text-ink">{name}</p>
                        <p className="mt-1 text-xs leading-4 text-ink/55">{role}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-4 rounded-xl border border-dashed border-ink/20 bg-white/75 p-4">
                  <p className="text-sm leading-6 text-ink/68">
                    Preview the tools, then join the launch list for product and
                    checkout updates before ordering opens.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-ink/10 bg-white/70">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-12 sm:px-6 sm:py-16 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
          <div>
            <p className={sectionEyebrowClass}>The problem</p>
            <h2 className="mt-3 text-3xl font-semibold text-ink">
              Modern routines make rest feel harder than it should.
            </h2>
            <p className="mt-4 leading-7 text-ink/62">
              The kit is designed around common evening friction points, not perfect
              routines or extreme tracking.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              "Bright screens and long work sessions can make evenings feel wired.",
              "Late nights, gaming, and shifting schedules can make routines inconsistent.",
              "Stressful days often turn bedtime into another task instead of a reset.",
              "Tired mornings can make it harder to keep the habits you meant to build."
            ].map((problem) => (
              <article key={problem} className={`${mutedCardClass} relative overflow-hidden leading-7 text-ink/68`}>
                <div className="mb-4 h-2 w-12 rounded-full bg-clay/60" />
                <p>{problem}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="sleep-reset-kit"
        className="mx-auto max-w-6xl px-5 py-12 sm:px-6 sm:py-16 lg:px-8"
        aria-labelledby="kit-title"
      >
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className={sectionEyebrowClass}>What is inside</p>
            <h2 id="kit-title" className="mt-3 text-3xl font-semibold text-ink">
              Everything in the kit has a clear role.
            </h2>
            <p className="mt-4 leading-7 text-ink/66">
              Preview the planned bundle, see how each tool supports your evening,
              and join the launch list before ordering opens.
            </p>
          </div>
          <a href="/products/sleep-reset-kit" className={secondaryButtonClass}>
            View full kit details
          </a>
        </div>

        <div className="mt-9 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {bundleItems.map((item) => (
            <article key={item.name} className={interactiveCardClass}>
              <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-full bg-clay/12 text-sm font-semibold text-clay">
                {item.name.slice(0, 1)}
              </div>
              <h3 className="text-lg font-semibold text-ink">{item.name}</h3>
              <p className="mt-3 leading-7 text-ink/65">{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-night text-white">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-12 sm:px-6 sm:py-16 lg:grid-cols-[0.72fr_1.28fr] lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-clay">
              Benefits
            </p>
            <h2 className="mt-3 max-w-2xl text-3xl font-semibold">
              Small evening habits, easier to repeat.
            </h2>
            <p className="mt-4 leading-7 text-white/68">
              Each part of the bundle has a clear job: reduce common distractions,
              simplify choices, and make the evening routine easier to repeat.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {benefits.map((benefit, index) => (
              <article key={benefit.title} className="rounded-2xl border border-white/12 bg-white/[0.08] p-5 shadow-subtle">
                <div className="mb-5 inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-xs font-semibold text-clay">
                  {benefitMarkers[index]}
                </div>
                <h3 className="text-lg font-semibold">{benefit.title}</h3>
                <p className="mt-3 leading-7 text-white/72">{benefit.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="how-it-works"
        className="mx-auto grid max-w-6xl gap-8 px-5 py-12 sm:px-6 sm:py-16 lg:grid-cols-[0.86fr_1.14fr] lg:px-8"
      >
        <div>
          <p className={sectionEyebrowClass}>How it works</p>
          <h2 className="mt-3 text-3xl font-semibold text-ink">
            Science-backed basics, made usable.
          </h2>
          <p className="mt-4 leading-7 text-ink/66">
            The Sleep Reset Kit focuses on sleep hygiene principles that are practical
            for real life: light exposure, calmer cues, less friction, and consistency.
          </p>
          <div className="mt-6 rounded-2xl border border-ink/10 bg-linen p-5 shadow-subtle">
            <p className="text-sm font-semibold text-ink">Responsible education</p>
            <p className="mt-2 text-sm leading-6 text-ink/62">
              Practical guidance without medical promises, fake citations, or
              complicated tracking rituals.
            </p>
          </div>
        </div>
        <div className="grid gap-4">
          {educationPoints.map((point, index) => (
            <article key={point} className={`${cardClass} grid gap-4 sm:grid-cols-[auto_1fr] sm:items-start`}>
              <p className="flex h-10 w-10 items-center justify-center rounded-full bg-clay/12 text-sm font-semibold text-clay">
                0{index + 1}
              </p>
              <p className="leading-7 text-ink/68">{point}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-ink/10 bg-white/70">
        <div className="mx-auto max-w-6xl px-5 py-12 sm:px-6 sm:py-16 lg:px-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className={sectionEyebrowClass}>Learn</p>
              <h2 className="mt-3 text-3xl font-semibold text-ink">
                Build a routine with practical education.
              </h2>
              <p className="mt-4 leading-7 text-ink/66">
                Read responsible, beginner-friendly guides on sleep hygiene, bedtime
                routines, and recovery tools for screen-heavy days.
              </p>
            </div>
            <Link href="/learn" className={secondaryButtonClass}>
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

      <section className="border-y border-ink/10 bg-linen/70">
        <div className="mx-auto max-w-6xl px-5 py-12 sm:px-6 sm:py-16 lg:px-8">
          <div className="max-w-2xl">
            <p className={sectionEyebrowClass}>Example shopper scenarios</p>
            <h2 className="mt-3 text-3xl font-semibold text-ink">
              A few ways the kit could fit real routines.
            </h2>
            <p className="mt-4 leading-7 text-ink/62">
              These are positioning scenarios, not verified customer reviews.
            </p>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <article key={testimonial.name} className={`${cardClass} flex h-full flex-col`}>
                <span className="rounded-full bg-clay/15 px-3 py-1 text-xs font-semibold text-ink">
                  {testimonial.label}
                </span>
                <p className="mt-5 flex-1 leading-7 text-ink/72">&quot;{testimonial.quote}&quot;</p>
                <p className="mt-5 border-t border-ink/10 pt-4 text-sm font-semibold text-ink">
                  {testimonial.name}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="faq"
        className="mx-auto grid max-w-6xl gap-8 px-5 py-12 sm:px-6 sm:py-16 lg:grid-cols-[0.8fr_1.2fr] lg:px-8"
      >
        <div>
            <p className={sectionEyebrowClass}>FAQ</p>
            <h2 className="mt-3 text-3xl font-semibold text-ink">
              Questions before you join the launch list?
            </h2>
        </div>
        <div className="grid gap-3">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className={`${cardClass} group p-6 transition duration-200 open:border-clay/25 open:shadow-lift focus-within:ring-2 focus-within:ring-clay/35 motion-reduce:transition-none`}
            >
              <summary className="flex cursor-pointer items-center justify-between gap-4 text-base font-semibold text-ink focus:outline-none sm:text-lg">
                <span>{faq.question}</span>
                <span
                  aria-hidden="true"
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-foam text-xl leading-none text-clay transition duration-200 group-open:rotate-45 motion-reduce:transform-none motion-reduce:transition-none"
                >
                  +
                </span>
              </summary>
              <p className="mt-3 leading-7 text-ink/66">{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <TrustSection />

      <section id="email-capture" className="bg-clay/12">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-12 sm:px-6 sm:py-16 lg:grid-cols-[1fr_0.9fr] lg:items-center lg:px-8">
          <div>
            <p className={sectionEyebrowClass}>Free checklist</p>
            <h2 className="mt-3 text-3xl font-semibold text-ink">
              Get the Sleep Reset Checklist.
            </h2>
            <p className="mt-4 max-w-2xl leading-7 text-ink/66">
              A simple evening checklist for reducing distractions, setting up your
              environment, and making your routine easier to repeat.
            </p>
            <div className="mt-6 flex flex-wrap gap-2 text-xs font-semibold text-ink/58">
              <span className="rounded-full border border-ink/10 bg-white/70 px-3 py-2">
                Launch updates
              </span>
              <span className="rounded-full border border-ink/10 bg-white/70 px-3 py-2">
                No payment info
              </span>
              <span className="rounded-full border border-ink/10 bg-white/70 px-3 py-2">
                Practical routine tips
              </span>
            </div>
          </div>
          <EmailCaptureForm source="homepage-sleep-reset-checklist" />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="rounded-3xl bg-night px-5 py-10 text-center text-white shadow-lift sm:px-8 lg:px-12">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-clay">
            Start here
          </p>
          <h2 className="mx-auto mt-3 max-w-2xl text-3xl font-semibold">
            Preview the kit, then get launch updates.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl leading-7 text-white/70">
            The Sleep Reset Kit is planned as a simple bundle of tools for rest and
            recovery habits, without exaggerated promises or complicated setup.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a href="/products/sleep-reset-kit" className={inverseButtonClass}>
              View the Sleep Reset Kit
            </a>
            <a href="#email-capture" className={darkOutlineButtonClass}>
              Join the launch list
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
