import type { Metadata } from "next";
import Link from "next/link";
import { ProductFitGuide } from "@/components/ProductFitGuide";
import { ProductCatalog } from "@/components/ProductCatalog";
import { TrustSection } from "@/components/TrustSection";

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
      <section className="border-b border-ink/10 bg-white/65">
        <div className="mx-auto max-w-6xl px-5 py-12 sm:px-6 lg:px-8 lg:py-16">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-sage">
            Product catalog
          </p>
          <div className="mt-4 grid gap-6 lg:grid-cols-[1fr_0.72fr] lg:items-end">
            <div>
              <h1 className="max-w-3xl text-4xl font-semibold tracking-normal text-ink sm:text-5xl">
                Sleep and recovery tools for modern routines.
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-ink/70">
                Preview the Sleep Reset Kit and supporting tools before ordering opens.
                Product photos, inventory, and checkout links will be finalized before launch.
              </p>
            </div>
            <div className="rounded-lg border border-ink/10 bg-mist p-5">
              <p className="text-sm font-semibold text-ink">Responsible shopping note</p>
              <p className="mt-2 text-sm leading-6 text-ink/64">
                Prices are estimated launch prices. Join the launch list for product
                updates before ordering opens, and learn how the tools support routines.
              </p>
              <Link
                href="/learn"
                className="mt-4 inline-flex text-sm font-semibold text-ink transition hover:text-clay"
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
