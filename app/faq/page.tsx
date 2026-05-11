import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { faqItems } from "@/data/core-pages";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Frequently asked questions about Rest Reset and the Sleep Reset Kit."
};

export default function FaqPage() {
  return (
    <PageShell
      eyebrow="FAQ"
      title="Clear answers for a calmer shopping experience."
      description="These answers will be updated as products, fulfillment, and checkout details are finalized before launch."
    >
      <div className="grid gap-4">
        {faqItems.map((item) => (
          <article key={item.question} className="rounded-lg border border-ink/10 bg-white/75 p-5">
            <h2 className="text-lg font-semibold text-ink">{item.question}</h2>
            <p className="mt-3 leading-7 text-ink/66">{item.answer}</p>
          </article>
        ))}
      </div>
      <div className="mt-8 rounded-lg border border-ink/10 bg-night p-6 text-white">
        <h2 className="text-2xl font-semibold">Still deciding?</h2>
        <p className="mt-3 leading-7 text-white/72">
          Review the main product page, read the education guides, or contact support
          before checkout is connected.
        </p>
        <div className="mt-5 flex flex-col gap-3 sm:flex-row">
          <Link href="/products/sleep-reset-kit" className="rounded-full bg-white px-5 py-3 text-center text-sm font-semibold text-ink">
            View Sleep Reset Kit
          </Link>
          <Link href="/learn" className="rounded-full border border-white/20 px-5 py-3 text-center text-sm font-semibold text-white">
            Read Learn guides
          </Link>
          <Link href="/contact" className="rounded-full border border-white/20 px-5 py-3 text-center text-sm font-semibold text-white">
            Contact us
          </Link>
        </div>
      </div>
    </PageShell>
  );
}
