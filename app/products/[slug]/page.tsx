import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { EmailCaptureForm } from "@/components/EmailCaptureForm";
import { ProductViewTracker } from "@/components/ProductViewTracker";
import { TrackLink } from "@/components/TrackLink";
import { getProductBySlug, products } from "@/data/products";
import { siteConfig } from "@/lib/site";

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
      <section className="border-b border-ink/10 bg-white/65">
        <div className="mx-auto max-w-6xl px-5 py-10 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="text-sm font-medium text-ink/60">
            <Link href="/products" className="transition hover:text-ink">
              Products
            </Link>
            <span aria-hidden="true" className="px-2">
              /
            </span>
            <span className="text-ink">{product.name}</span>
          </nav>

          <div className="mt-8 grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <div className="rounded-lg border border-ink/10 bg-mist p-5 shadow-soft">
              <div
                role="img"
                aria-label={`${product.name} product bundle preview`}
                className="flex min-h-80 items-center justify-center rounded-lg border border-ink/10 bg-white/80 p-8"
              >
                <div className="w-full max-w-sm text-center">
                  {isSleepResetKit ? (
                    <div className="relative mx-auto h-56 max-w-sm">
                      <div className="absolute left-8 top-4 h-32 w-44 rounded-lg border border-ink/10 bg-white shadow-soft" />
                      <div className="absolute left-14 top-10 h-24 w-44 rounded-lg bg-clay/18 ring-1 ring-clay/20" />
                      <div className="absolute bottom-10 left-2 h-12 w-36 rounded-full bg-sage/35 ring-1 ring-sage/30" />
                      <div className="absolute bottom-8 right-4 h-20 w-14 rounded-md bg-ink/12" />
                      <div className="absolute right-12 top-28 h-12 w-20 rounded-md bg-mist ring-1 ring-ink/10" />
                      <div className="absolute right-3 top-8 rounded-full bg-ink px-3 py-1 text-xs font-semibold text-white">
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
              <h1 className="mt-3 text-4xl font-semibold tracking-normal text-ink sm:text-5xl">
                {product.name}
              </h1>
              <p className="mt-5 text-lg leading-8 text-ink/70">{product.description}</p>

              <div className="mt-6 flex flex-col gap-4 rounded-lg border border-ink/10 bg-white/75 p-5 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm font-semibold text-ink/55">
                    Estimated launch price
                  </p>
                  <p className="mt-1 text-2xl font-semibold text-ink">{product.price}</p>
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
                    className="inline-flex items-center justify-center rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white transition hover:bg-night focus:outline-none focus:ring-2 focus:ring-clay focus:ring-offset-2"
                  >
                    Continue to checkout
                  </TrackLink>
                ) : (
                  <Link
                    href={checkoutHref}
                    className="inline-flex items-center justify-center rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white transition hover:bg-night focus:outline-none focus:ring-2 focus:ring-clay focus:ring-offset-2"
                  >
                    Join the launch list
                  </Link>
                )}
              </div>

              <div className="mt-5 rounded-lg border border-dashed border-ink/20 bg-mist p-4">
                <p className="text-sm leading-6 text-ink/62">
                  Ordering is not open yet. No card data is collected on this website
                  until a trusted checkout provider is connected.
                </p>
              </div>

              <div className="mt-5 grid gap-3 sm:grid-cols-3">
                {[
                  ["Best for", product.featured ? "Full routine reset" : product.category],
                  ["Setup", "Beginner-friendly"],
                  ["Claim style", "Habit support"]
                ].map(([label, value]) => (
                  <div key={label} className="rounded-lg border border-ink/10 bg-white/75 p-4">
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

      <section className="mx-auto grid max-w-6xl gap-6 px-5 py-12 sm:px-6 lg:grid-cols-3 lg:px-8">
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-semibold text-ink">Benefits</h2>
          <div className="mt-5 grid gap-4 sm:grid-cols-3">
            {product.benefits.map((benefit) => (
              <div key={benefit} className="rounded-lg border border-ink/10 bg-white/70 p-5">
                <div className="mb-4 h-2 w-12 rounded-full bg-clay" />
                <p className="leading-7 text-ink/68">{benefit}</p>
              </div>
            ))}
          </div>
        </div>

        <aside className="rounded-lg border border-ink/10 bg-night p-5 text-white">
          <h2 className="text-xl font-semibold">Trust notes</h2>
          <ul className="mt-4 space-y-3 text-sm leading-6 text-white/75">
            {trustNotes.map((note) => (
              <li key={note}>{note}</li>
            ))}
          </ul>
        </aside>
      </section>

      {product.includedItems ? (
        <section className="border-y border-ink/10 bg-white/65">
          <div className="mx-auto max-w-6xl px-5 py-12 sm:px-6 lg:px-8">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-sage">
              Bundle contents
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-ink">
              What's inside the {siteConfig.kitName}
            </h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {product.includedItems.map((item) => (
                <div key={item.name} className="rounded-lg border border-ink/10 bg-mist p-5">
                  <p className="font-semibold text-ink">{item.name}</p>
                  <p className="mt-3 leading-7 text-ink/66">{item.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {isSleepResetKit ? (
        <section className="mx-auto grid max-w-6xl gap-8 px-5 py-12 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-sage">
              Why this bundle?
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-ink">
              Practical sleep hygiene without extreme biohacking.
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {bundleReasons.map((reason) => (
              <article key={reason} className="rounded-lg border border-ink/10 bg-white/70 p-5">
                <div className="mb-4 h-2 w-12 rounded-full bg-clay" />
                <p className="leading-7 text-ink/68">{reason}</p>
              </article>
            ))}
          </div>
        </section>
      ) : null}

      <section className="mx-auto grid max-w-6xl gap-8 px-5 py-12 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-sage">
            How to use
          </p>
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
            <article key={step} className="rounded-lg border border-ink/10 bg-white/70 p-5">
              <p className="text-sm font-semibold text-clay">Step {index + 1}</p>
              <p className="mt-2 leading-7 text-ink/68">{step}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-clay/12">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-12 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-sage">
              Responsible science-backed note
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-ink">
              Support habits, avoid hype.
            </h2>
          </div>
          <p className="rounded-lg border border-ink/10 bg-white/75 p-5 leading-7 text-ink/68">
            {product.scienceNote}
          </p>
          <Link
            href="/learn"
            className="inline-flex rounded-full bg-ink px-5 py-3 text-sm font-semibold text-white transition hover:bg-night focus:outline-none focus:ring-2 focus:ring-clay focus:ring-offset-2"
          >
            Read education guides
          </Link>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-8 px-5 py-12 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-sage">
            Product FAQ
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-ink">
            Clear answers before ordering.
          </h2>
        </div>
        <div className="grid gap-4">
          {product.faqs.map((faq) => (
            <article key={faq.question} className="rounded-lg border border-ink/10 bg-white/70 p-5">
              <h3 className="text-lg font-semibold text-ink">{faq.question}</h3>
              <p className="mt-3 leading-7 text-ink/66">{faq.answer}</p>
            </article>
          ))}
        </div>
      </section>

      {isSleepResetKit ? (
        <section className="border-t border-ink/10 bg-white/65">
          <div className="mx-auto grid max-w-6xl gap-8 px-5 py-12 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-sage">
                Before you join
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-ink">
                Clear answers near the launch CTA.
              </h2>
            </div>
            <div className="grid gap-4">
              {launchObjections.map((item) => (
                <article key={item.question} className="rounded-lg border border-ink/10 bg-white/75 p-5">
                  <h3 className="text-lg font-semibold text-ink">{item.question}</h3>
                  <p className="mt-3 leading-7 text-ink/66">{item.answer}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section id="email-capture" className="border-t border-ink/10 bg-night text-white">
        <div className="mx-auto grid max-w-6xl gap-6 px-5 py-12 sm:px-6 lg:grid-cols-[1fr_0.72fr] lg:items-center lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-clay">
              Launch list
            </p>
            <h2 className="mt-3 text-3xl font-semibold">
              Get updates before ordering opens.
            </h2>
            <p className="mt-4 leading-7 text-white/72">
              Join for product details, launch pricing, and checkout updates. No card
              data is collected here.
            </p>
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
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-ink transition hover:bg-mist focus:outline-none focus:ring-2 focus:ring-clay focus:ring-offset-2"
              >
                Continue to checkout
              </TrackLink>
            ) : (
              <EmailCaptureForm source={`product-${product.slug}-launch-list`} />
            )}
            <Link
              href="/products"
              className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-clay focus:ring-offset-2"
            >
              Back to products
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
