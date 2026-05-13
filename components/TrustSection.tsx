import Link from "next/link";
import { mutedCardClass, secondaryButtonClass, sectionEyebrowClass } from "@/lib/ui";

const trustItems = [
  {
    title: "Responsible wellness language",
    body:
      "Rest Reset products support routines and calmer environments. We do not claim to diagnose, treat, cure, or guarantee sleep outcomes."
  },
  {
    title: "Launch updates before ordering",
    body:
      "Ordering is not open yet. Shoppers can join the launch list before any payment flow or product ordering step."
  },
  {
    title: "Clear support and policy pages",
    body:
      "Shipping, returns, FAQ, and contact pages are available so shoppers can review practical details before ordering."
  }
] as const;

const supportLinks = [
  { label: "Shipping", href: "/shipping", note: "Review delivery expectations" },
  { label: "Returns", href: "/returns", note: "Understand policy notes" },
  { label: "Contact", href: "/contact", note: "Ask before ordering" },
  { label: "FAQ", href: "/faq", note: "Read common answers" }
] as const;

export function TrustSection() {
  return (
    <section className="border-y border-ink/10 bg-white/70">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className={sectionEyebrowClass}>Trust basics</p>
            <h2 className="mt-3 text-3xl font-semibold text-ink">
              Clear claims, visible policies, simple next steps.
            </h2>
            <p className="mt-4 leading-7 text-ink/62">
              The store is currently pre-launch, so support and policy paths stay
              visible before any payment flow is enabled.
            </p>
          </div>
          <Link
            href="/faq"
            className={secondaryButtonClass}
          >
            Read FAQ
          </Link>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {trustItems.map((item, index) => (
            <article key={item.title} className={mutedCardClass}>
              <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-full bg-white/85 text-sm font-semibold text-clay shadow-subtle">
                0{index + 1}
              </div>
              <h3 className="text-lg font-semibold text-ink">{item.title}</h3>
              <p className="mt-3 leading-7 text-ink/66">{item.body}</p>
            </article>
          ))}
        </div>

        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {supportLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-xl border border-ink/10 bg-linen/80 p-4 transition hover:-translate-y-0.5 hover:bg-linen hover:shadow-card focus:outline-none focus:ring-2 focus:ring-clay focus:ring-offset-2"
            >
              <span className="font-semibold text-ink">{item.label}</span>
              <span className="mt-1 block text-sm leading-6 text-ink/58">{item.note}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
