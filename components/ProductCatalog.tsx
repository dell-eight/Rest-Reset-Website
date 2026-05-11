"use client";

import { useMemo, useState } from "react";
import { ProductCard } from "@/components/ProductCard";
import { productCategories, products, type ProductCategory } from "@/data/products";

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
    <section className="mx-auto max-w-6xl px-5 py-10 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-2xl font-semibold text-ink">Preview the launch catalog</h2>
          <p className="mt-2 leading-7 text-ink/64">
            Filter by the kind of support you want for your rest routine.
          </p>
        </div>
        <div aria-label="Product categories" className="flex flex-wrap gap-2" role="group">
          {productCategories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`rounded-full border px-4 py-2 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-clay focus:ring-offset-2 ${
                activeCategory === category
                  ? "border-ink bg-ink text-white"
                  : "border-ink/10 bg-white/80 text-ink/70 hover:border-sage hover:text-ink"
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
        className="mt-8 rounded-lg border border-dashed border-ink/20 bg-white/70 p-5 text-center"
      >
        <p className="font-semibold text-ink">Launch offer coming soon</p>
        <p className="mt-2 text-sm leading-6 text-ink/62">
          Ordering is not open yet. Product pages will guide you to the launch list
          so you can get updates before checkout becomes available.
        </p>
      </div>
    </section>
  );
}
