import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { faqItems } from "@/data/core-pages";
import { darkOutlineButtonClass, darkPanelClass, inverseButtonClass } from "@/lib/ui";

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
          <details
            key={item.question}
            className="group rounded-xl border border-ink/10 bg-white/85 p-5 shadow-card transition duration-200 open:border-clay/25 open:shadow-lift focus-within:ring-2 focus-within:ring-clay/35 motion-reduce:transition-none"
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
      <div className={`mt-8 ${darkPanelClass}`}>
        <h2 className="text-2xl font-semibold">Still deciding?</h2>
        <p className="mt-3 leading-7 text-white/72">
          Review the main product page, read the education guides, or contact support
          before checkout is connected.
        </p>
        <div className="mt-5 flex flex-col gap-3 sm:flex-row">
          <Link href="/products/sleep-reset-kit" className={inverseButtonClass}>
            View Sleep Reset Kit
          </Link>
          <Link href="/learn" className={darkOutlineButtonClass}>
            Read Learn guides
          </Link>
          <Link href="/contact" className={darkOutlineButtonClass}>
            Contact us
          </Link>
        </div>
      </div>
    </PageShell>
  );
}
