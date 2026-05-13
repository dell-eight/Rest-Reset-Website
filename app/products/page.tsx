import type { Metadata } from "next";
import Link from "next/link";
import { ProductFitGuide } from "@/components/ProductFitGuide";
import { ProductCatalog } from "@/components/ProductCatalog";
import { TrustSection } from "@/components/TrustSection";
import {
  mutedCardClass,
  primaryButtonClass,
  secondaryButtonClass,
  sectionEyebrowClass,
  textLinkClass
} from "@/lib/ui";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Browse sleep and recovery tools for routines, screen-heavy work, and calmer rest environments.",
  openGraph: {
    title: "Products | Rest Reset",
    description:
      "Compare the Sleep Reset Kit and practical routine-support tools for modern workers."
  }
};

export default function ProductsPage() {
  return (
    <div>
      <section className="border-b border-ink/10 bg-[linear-gradient(135deg,rgba(251,247,240,0.96),rgba(238,244,237,0.92))]">
        <div className="mx-auto max-w-6xl px-5 py-14 sm:px-6 lg:px-8 lg:py-20">
          <p className={sectionEyebrowClass}>
            Product catalog
          </p>
          <div className="mt-4 grid gap-6 lg:grid-cols-[1fr_0.72fr] lg:items-end">
            <div>
              <h1 className="max-w-3xl text-4xl font-semibold tracking-normal text-ink sm:text-5xl">
                Start with the Sleep Reset Kit, then add what your routine needs.
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-ink/70">
                Preview the main bundle and compare supporting tools before ordering
                opens. Photos, inventory, and checkout links will be finalized before launch.
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Link href="/products/sleep-reset-kit" className={primaryButtonClass}>
                  View Sleep Reset Kit
                </Link>
                <Link href="#products-grid" className={secondaryButtonClass}>
                  Browse all products
                </Link>
              </div>
            </div>
            <div className={mutedCardClass}>
              <p className="text-sm font-semibold text-ink">Responsible shopping note</p>
              <p className="mt-2 text-sm leading-6 text-ink/64">
                Prices are estimated launch prices. Product pages explain what each
                tool is for and guide you to the launch list before checkout opens.
              </p>
              <div className="mt-4 grid gap-2 text-xs font-semibold text-ink/58">
                <span className="rounded-full bg-white/75 px-3 py-2">
                  No card data collected yet
                </span>
                <span className="rounded-full bg-white/75 px-3 py-2">
                  Clear support and policy pages
                </span>
              </div>
              <Link
                href="/learn"
                className={`mt-4 ${textLinkClass}`}
              >
                Read education guides
              </Link>
            </div>
          </div>
        </div>
      </section>

      <ProductCatalog />
      <ProductFitGuide />
      <TrustSection />
    </div>
  );
}
