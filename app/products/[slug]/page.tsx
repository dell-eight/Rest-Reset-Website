import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { EmailCaptureForm } from "@/components/EmailCaptureForm";
import { ProductViewTracker } from "@/components/ProductViewTracker";
import { TrackLink } from "@/components/TrackLink";
import { getProductBySlug, products } from "@/data/products";
import { siteConfig } from "@/lib/site";
import {
  cardClass,
  darkOutlineButtonClass,
  darkPanelClass,
  interactiveCardClass,
  inverseButtonClass,
  mutedCardClass,
  primaryButtonClass,
  secondaryButtonClass,
  sectionEyebrowClass
} from "@/lib/ui";

type ProductDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

const trustNotes = [
  "Responsible wellness language with no exaggerated medical claims.",
  "Simple tools for better routines, calmer cues, and fewer distractions.",
  "Launch updates before ordering, plus clear support and policy pages."
] as const;

const heroTrustBadges = [
  "Launch updates first",
  "No card data collected here",
  "Support and policies available"
] as const;

const bundleReasons = [
  "Combines simple tools that support a better bedtime environment.",
  "Designed for screen-heavy days, late nights, gaming sessions, and demanding work routines.",
  "Focuses on practical sleep hygiene, not extreme biohacking.",
  "Not a medical product and not intended to treat sleep disorders."
] as const;

const launchObjections = [
  {
    question: "Is this a medical product?",
    answer:
      "No. The Sleep Reset Kit is a routine-support wellness product. It does not diagnose, treat, cure, or prevent sleep disorders."
  },
  {
    question: "Who is this for?",
    answer:
      "It is for tired office workers, gamers, night-shift workers, remote workers, programmers, and young professionals who want practical tools for a calmer wind-down routine."
  },
  {
    question: "Who is this not for?",
    answer:
      "It is not a replacement for medical care. People with ongoing sleep issues, severe fatigue, or health concerns should consider speaking with a qualified professional."
  },
  {
    question: "What if checkout is not open yet?",
    answer:
      "Join the launch list for product, pricing, and ordering updates before checkout becomes available."
  },
  {
    question: "What should I expect from the kit?",
    answer:
      "Expect simple tools that can help reduce light and noise distractions, organize thoughts, and make wind-down habits easier to repeat."
  },
  {
    question: "Does this guarantee better sleep?",
    answer:
      "No. The kit supports practical sleep hygiene and routine consistency, but no product can guarantee sleep results."
  }
] as const;

export function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug
  }));
}

export async function generateMetadata({
  params
}: ProductDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return {
      title: "Product not found"
    };
  }

  return {
    title: product.name,
    description: product.description
  };
}

export default async function ProductDetailPage({ params }: ProductDetailPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const hasCheckout = product.checkoutUrl.trim().length > 0 && !product.checkoutUrl.startsWith("#");
  const checkoutHref = hasCheckout ? product.checkoutUrl : "#email-capture";
  const isSleepResetKit = product.slug === "sleep-reset-kit";

  return (
    <div>
      <ProductViewTracker
        productSlug={product.slug}
        productName={product.name}
        category={product.category}
        featured={product.featured}
      />
      <section className="border-b border-ink/10 bg-[linear-gradient(135deg,rgba(251,247,240,0.96),rgba(238,244,237,0.92))]">
        <div className="mx-auto max-w-6xl px-5 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-14">
          <nav aria-label="Breadcrumb" className="text-sm font-medium text-ink/60">
            <Link
              href="/products"
              className="rounded-full transition hover:text-ink focus:outline-none focus:ring-2 focus:ring-clay focus:ring-offset-2"
            >
              Products
            </Link>
            <span aria-hidden="true" className="px-2">
              /
            </span>
            <span className="text-ink">{product.name}</span>
          </nav>

          <div className="mt-8 grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
            <div className={`${mutedCardClass} p-4 sm:p-5`}>
              <div
                role="img"
                aria-label={`${product.name} product bundle preview`}
                className="flex min-h-72 items-center justify-center overflow-hidden rounded-2xl border border-ink/10 bg-white/90 p-4 shadow-card sm:min-h-96 sm:p-8"
              >
                <div className="w-full max-w-sm text-center">
                  {isSleepResetKit ? (
                    <div className="relative mx-auto h-56 max-w-sm sm:h-72">
                      <div className="absolute left-5 top-8 h-32 w-40 rounded-2xl border border-ink/10 bg-white shadow-lift sm:left-7 sm:h-40 sm:w-52" />
                      <div className="absolute left-12 top-16 h-24 w-40 rounded-2xl bg-clay/18 ring-1 ring-clay/20 sm:left-16 sm:h-28 sm:w-48" />
                      <div className="absolute bottom-10 left-0 h-12 w-32 rounded-full bg-sage/35 ring-1 ring-sage/30 sm:bottom-12 sm:h-14 sm:w-40" />
                      <div className="absolute bottom-8 right-5 h-20 w-14 rounded-xl bg-ink/12 sm:bottom-9 sm:right-6 sm:h-24 sm:w-16" />
                      <div className="absolute right-8 top-32 h-12 w-20 rounded-xl bg-foam ring-1 ring-ink/10 sm:right-10 sm:top-36 sm:h-14 sm:w-24" />
                      <div className="absolute right-2 top-6 rounded-full bg-ink px-3 py-1 text-xs font-semibold text-white">
                        Kit
                      </div>
                    </div>
                  ) : (
                    <>
                      <div className="mx-auto h-28 w-48 rounded-full border-[14px] border-sage/45 bg-clay/15" />
                      <div className="mx-auto mt-6 h-4 w-56 rounded-full bg-ink/12" />
                      <div className="mx-auto mt-3 h-4 w-36 rounded-full bg-sage/35" />
                    </>
                  )}
                  <p className="mt-8 text-xs font-semibold uppercase tracking-[0.14em] text-ink/45">
                    {product.imagePlaceholder}
                  </p>
                </div>
              </div>
            </div>

            <div>
              {product.featured ? (
                <p className="inline-flex rounded-full bg-clay px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-white">
                  Main offer
                </p>
              ) : null}
              <p className="mt-4 text-sm font-semibold uppercase tracking-[0.14em] text-sage">
                {product.category}
              </p>
              <h1 className="mt-3 text-4xl font-semibold leading-tight tracking-normal text-ink sm:text-5xl">
                {product.name}
              </h1>
              <p className="mt-5 text-lg leading-8 text-ink/70">{product.description}</p>
              <p className="mt-3 text-sm leading-6 text-ink/56">
                Review the routine fit, estimated launch price, and responsible claim notes
                before joining the list.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {heroTrustBadges.map((badge) => (
                  <span
                    key={badge}
                    className="rounded-full border border-ink/10 bg-white/75 px-3 py-2 text-xs font-semibold text-ink/58 shadow-subtle"
                  >
                    {badge}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex flex-col gap-4 rounded-2xl border border-ink/10 bg-white/90 p-5 shadow-card sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm font-semibold text-ink/55">
                    Estimated launch price
                  </p>
                  <p className="mt-1 text-2xl font-semibold text-ink">{product.price}</p>
                  <p className="mt-1 text-xs font-medium text-ink/50">
                    Final product details will be confirmed before ordering opens.
                  </p>
                </div>
                {hasCheckout ? (
                  <TrackLink
                    href={checkoutHref}
                    eventName="checkout_cta_click"
                    eventParams={{
                      location: "product_detail_hero",
                      product_slug: product.slug,
                      product_name: product.name
                    }}
                    className={primaryButtonClass}
                  >
                    Continue to checkout
                  </TrackLink>
                ) : (
                  <Link
                    href={checkoutHref}
                    className={primaryButtonClass}
                  >
                    Join the launch list
                  </Link>
                )}
              </div>

              <div className="mt-5 rounded-xl border border-dashed border-ink/20 bg-foam p-4">
                <p className="text-sm leading-6 text-ink/62">
                  Ordering is not open yet. No card data is collected on this website
                  until a trusted checkout provider is connected.
                </p>
              </div>

              <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                <Link href="#product-benefits" className={secondaryButtonClass}>
                  See benefits
                </Link>
                <Link href="#product-faq" className={secondaryButtonClass}>
                  Read product FAQ
                </Link>
              </div>

              <div className="mt-5 grid gap-3 sm:grid-cols-3">
                {[
                  ["Best for", product.featured ? "Full routine reset" : product.category],
                  ["Setup", "Beginner-friendly"],
                  ["Claim style", "Habit support"]
                ].map(([label, value]) => (
                  <div key={label} className="rounded-xl border border-ink/10 bg-white/85 p-4 shadow-subtle">
                    <p className="text-xs font-semibold uppercase tracking-[0.12em] text-sage">
                      {label}
                    </p>
                    <p className="mt-2 text-sm leading-6 text-ink/68">{value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="product-benefits"
        className="mx-auto grid max-w-6xl gap-6 px-5 py-12 sm:px-6 sm:py-14 lg:grid-cols-3 lg:px-8"
      >
        <div className="lg:col-span-2">
          <p className={sectionEyebrowClass}>Product benefits</p>
          <h2 className="mt-3 text-2xl font-semibold text-ink">
            What this helps you set up.
          </h2>
          <p className="mt-3 max-w-2xl leading-7 text-ink/64">
            Benefits are framed around routine support, comfort, and reduced
            distractions rather than guaranteed sleep outcomes.
          </p>
          <div className="mt-5 grid gap-4 sm:grid-cols-3">
            {product.benefits.map((benefit, index) => (
              <div key={benefit} className={cardClass}>
                <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-full bg-clay/12 text-sm font-semibold text-clay">
                  0{index + 1}
                </div>
                <p className="leading-7 text-ink/68">{benefit}</p>
              </div>
            ))}
          </div>
        </div>

        <aside className={darkPanelClass}>
          <h2 className="text-xl font-semibold">Trust notes</h2>
          <ul className="mt-4 space-y-3 text-sm leading-6 text-white/75">
            {trustNotes.map((note) => (
              <li key={note} className="flex gap-3">
                <span aria-hidden="true" className="mt-2 h-2 w-2 shrink-0 rounded-full bg-clay" />
                <span>{note}</span>
              </li>
            ))}
          </ul>
        </aside>
      </section>

      {product.includedItems ? (
        <section className="border-y border-ink/10 bg-linen/70">
          <div className="mx-auto max-w-6xl px-5 py-12 sm:px-6 sm:py-14 lg:px-8">
            <p className={sectionEyebrowClass}>Bundle contents</p>
            <h2 className="mt-3 text-3xl font-semibold text-ink">
              What's inside the {siteConfig.kitName}
            </h2>
            <p className="mt-4 max-w-2xl leading-7 text-ink/66">
              Each item is included for one practical job in the wind-down routine,
              so the bundle feels simple instead of overloaded.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {product.includedItems.map((item, index) => (
                <div key={item.name} className={mutedCardClass}>
                  <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-full bg-white/85 text-sm font-semibold text-clay shadow-subtle">
                    {index + 1}
                  </div>
                  <p className="font-semibold text-ink">{item.name}</p>
                  <p className="mt-3 leading-7 text-ink/66">{item.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {isSleepResetKit ? (
        <section className="mx-auto grid max-w-6xl gap-8 px-5 py-12 sm:px-6 sm:py-14 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
          <div>
            <p className={sectionEyebrowClass}>Why this bundle?</p>
            <h2 className="mt-3 text-3xl font-semibold text-ink">
              Practical sleep hygiene without extreme biohacking.
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {bundleReasons.map((reason) => (
              <article key={reason} className={interactiveCardClass}>
                <div className="mb-4 h-2 w-12 rounded-full bg-clay" />
                <p className="leading-7 text-ink/68">{reason}</p>
              </article>
            ))}
          </div>
        </section>
      ) : null}

      <section className="mx-auto grid max-w-6xl gap-8 px-5 py-12 sm:px-6 sm:py-14 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
        <div>
          <p className={sectionEyebrowClass}>How to use</p>
          <h2 className="mt-3 text-3xl font-semibold text-ink">
            Keep the routine simple.
          </h2>
          <p className="mt-4 leading-7 text-ink/66">
            These steps are written for everyday use and should be adjusted to your
            preferences, schedule, and environment.
          </p>
        </div>
        <div className="grid gap-4">
          {product.howToUse.map((step, index) => (
            <article key={step} className={`${cardClass} grid gap-4 sm:grid-cols-[auto_1fr] sm:items-start`}>
              <p className="flex h-10 w-10 items-center justify-center rounded-full bg-clay/12 text-sm font-semibold text-clay">
                {index + 1}
              </p>
              <p className="leading-7 text-ink/68">{step}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-clay/12">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-12 sm:px-6 sm:py-14 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
          <div>
            <p className={sectionEyebrowClass}>Responsible science-backed note</p>
            <h2 className="mt-3 text-3xl font-semibold text-ink">
              Support habits, avoid hype.
            </h2>
          </div>
          <p className={`${cardClass} leading-7 text-ink/68`}>
            {product.scienceNote}
          </p>
          <Link
            href="/learn"
            className={primaryButtonClass}
          >
            Read education guides
          </Link>
        </div>
      </section>

      <section
        id="product-faq"
        className="mx-auto grid max-w-6xl gap-8 px-5 py-12 sm:px-6 sm:py-14 lg:grid-cols-[0.85fr_1.15fr] lg:px-8"
      >
        <div>
          <p className={sectionEyebrowClass}>Product FAQ</p>
          <h2 className="mt-3 text-3xl font-semibold text-ink">
            Clear answers before ordering.
          </h2>
        </div>
        <div className="grid gap-4">
          {product.faqs.map((faq) => (
            <details
              key={faq.question}
              className={`${cardClass} group p-6 transition duration-200 open:border-clay/25 open:shadow-lift focus-within:ring-2 focus-within:ring-clay/35 motion-reduce:transition-none`}
            >
              <summary className="flex cursor-pointer items-center justify-between gap-4 text-lg font-semibold text-ink focus:outline-none">
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

      {isSleepResetKit ? (
        <section className="border-t border-ink/10 bg-white/70">
          <div className="mx-auto grid max-w-6xl gap-8 px-5 py-12 sm:px-6 sm:py-14 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
            <div>
            <p className={sectionEyebrowClass}>Before you join</p>
            <h2 className="mt-3 text-3xl font-semibold text-ink">
                Clear answers before the launch CTA.
            </h2>
            <p className="mt-4 leading-7 text-ink/66">
              These answers are placed close to the sign-up form so shoppers can
              understand fit, limitations, and next steps before sharing an email.
            </p>
            </div>
            <div className="grid gap-4">
              {launchObjections.map((item) => (
                <details
                  key={item.question}
                  className={`${cardClass} group p-6 transition duration-200 open:border-clay/25 open:shadow-lift focus-within:ring-2 focus-within:ring-clay/35 motion-reduce:transition-none`}
                >
                  <summary className="flex cursor-pointer items-center justify-between gap-4 text-lg font-semibold text-ink focus:outline-none">
                    <span>{item.question}</span>
                    <span
                      aria-hidden="true"
                      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-foam text-xl leading-none text-clay transition duration-200 group-open:rotate-45 motion-reduce:transform-none motion-reduce:transition-none"
                    >
                      +
                    </span>
                  </summary>
                  <p className="mt-3 leading-7 text-ink/66">{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section id="email-capture" className="border-t border-ink/10 bg-night text-white">
        <div className="mx-auto grid max-w-6xl gap-6 px-5 py-12 sm:px-6 sm:py-14 lg:grid-cols-[1fr_0.72fr] lg:items-center lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-clay">
              Launch list
            </p>
            <h2 className="mt-3 text-3xl font-semibold">
              Join the list for launch details.
            </h2>
            <p className="mt-4 leading-7 text-white/72">
              Get product details, launch pricing, and checkout updates before ordering
              opens. No card data is collected here.
            </p>
            <div className="mt-6 grid gap-2 text-xs font-semibold text-white/60 sm:grid-cols-3 lg:grid-cols-1">
              <span className="rounded-full border border-white/10 bg-white/10 px-3 py-2">
                Launch updates before ordering
              </span>
              <span className="rounded-full border border-white/10 bg-white/10 px-3 py-2">
                Clear policies and support
              </span>
              <span className="rounded-full border border-white/10 bg-white/10 px-3 py-2">
                No exaggerated claims
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            {hasCheckout ? (
              <TrackLink
                href={checkoutHref}
                eventName="checkout_cta_click"
                eventParams={{
                  location: "product_detail_bottom",
                  product_slug: product.slug,
                  product_name: product.name
                }}
                className={inverseButtonClass}
              >
                Continue to checkout
              </TrackLink>
            ) : (
              <EmailCaptureForm source={`product-${product.slug}-launch-list`} />
            )}
            <Link
              href="/products"
              className={darkOutlineButtonClass}
            >
              Back to products
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
