"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { ProductCard } from "@/components/ProductCard";
import { productCategories, products, type ProductCategory } from "@/data/products";
import { mutedCardClass, sectionEyebrowClass, textLinkClass } from "@/lib/ui";

type ActiveCategory = ProductCategory | "All";

export function ProductCatalog() {
  const [activeCategory, setActiveCategory] = useState<ActiveCategory>("All");

  const visibleProducts = useMemo(() => {
    if (activeCategory === "All") {
      return products;
    }

    return products.filter((product) => product.category === activeCategory);
  }, [activeCategory]);

  return (
    <section className="mx-auto max-w-6xl px-5 py-12 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-5 rounded-3xl border border-ink/10 bg-white/70 p-5 shadow-card md:flex-row md:items-center md:justify-between">
        <div>
          <p className={sectionEyebrowClass}>Shop by routine need</p>
          <h2 className="mt-2 text-2xl font-semibold text-ink">Find the right routine support</h2>
          <p className="mt-2 leading-7 text-ink/64">
            Start with the kit or compare individual tools by the part of your routine
            you want to make easier.
          </p>
          <p className="mt-3 text-sm font-semibold text-ink/52">
            Showing {visibleProducts.length} of {products.length} products
          </p>
        </div>
        <div aria-label="Product categories" className="flex flex-wrap gap-2" role="group">
          {productCategories.map((category) => (
            <button
              key={category}
              type="button"
              aria-controls="products-grid"
              aria-pressed={activeCategory === category}
              onClick={() => setActiveCategory(category)}
              className={`rounded-full border px-4 py-2 text-sm font-semibold transition duration-200 focus:outline-none focus:ring-2 focus:ring-clay focus:ring-offset-2 ${
                activeCategory === category
                  ? "border-ink bg-ink text-white"
                  : "border-ink/10 bg-white/85 text-ink/70 shadow-subtle hover:-translate-y-0.5 hover:border-sage hover:text-ink"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div id="products-grid" className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {visibleProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <div
        id="launch-list-note"
        className={`mt-8 border-dashed text-center ${mutedCardClass}`}
      >
        <p className="font-semibold text-ink">Launch list is open before ordering</p>
        <p className="mt-2 text-sm leading-6 text-ink/62">
          Ordering is not open yet. Product pages will guide you to the launch list
          so you can get updates before checkout becomes available.
        </p>
        <Link href="/products/sleep-reset-kit" className={`mt-4 ${textLinkClass}`}>
          Preview the Sleep Reset Kit
        </Link>
      </div>
    </section>
  );
}
