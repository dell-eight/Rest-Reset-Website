import Link from "next/link";

const trustItems = [
  {
    title: "Responsible wellness language",
    body:
      "Rest Reset products support routines and calmer environments. We do not claim to diagnose, treat, cure, or guarantee sleep outcomes."
  },
  {
    title: "Launch updates before ordering",
    body:
      "Ordering is not open yet. Launch-list updates should come before any payment flow or product ordering step."
  },
  {
    title: "Clear support and policy pages",
    body:
      "Shipping, returns, FAQ, and contact pages are available so shoppers can review practical details before ordering."
  }
] as const;

export function TrustSection() {
  return (
    <section className="border-y border-ink/10 bg-white/65">
      <div className="mx-auto max-w-6xl px-5 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-sage">
              Trust basics
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-ink">
              Clear claims, clear policies, clear next steps.
            </h2>
          </div>
          <Link
            href="/faq"
            className="inline-flex rounded-full border border-ink/15 bg-white px-5 py-3 text-sm font-semibold text-ink transition hover:border-ink/35 hover:bg-mist focus:outline-none focus:ring-2 focus:ring-clay focus:ring-offset-2"
          >
            Read FAQ
          </Link>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {trustItems.map((item) => (
            <article key={item.title} className="rounded-lg border border-ink/10 bg-mist p-5">
              <h3 className="text-lg font-semibold text-ink">{item.title}</h3>
              <p className="mt-3 leading-7 text-ink/66">{item.body}</p>
            </article>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap gap-3 text-sm font-semibold">
          <Link href="/shipping" className="text-ink/68 transition hover:text-ink">
            Shipping
          </Link>
          <Link href="/returns" className="text-ink/68 transition hover:text-ink">
            Returns
          </Link>
          <Link href="/contact" className="text-ink/68 transition hover:text-ink">
            Contact support
          </Link>
        </div>
      </div>
    </section>
  );
}
