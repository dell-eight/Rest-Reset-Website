import Link from "next/link";
import type { Product } from "@/data/products";
import { TrackLink } from "@/components/TrackLink";

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  const hasCheckout = product.checkoutUrl.trim().length > 0 && !product.checkoutUrl.startsWith("#");

  return (
    <article
      id={`product-${product.slug}`}
      className="flex h-full flex-col overflow-hidden rounded-lg border border-ink/10 bg-white/75 shadow-soft"
    >
      <div className="relative min-h-48 bg-mist p-5">
        {product.featured ? (
          <span className="absolute right-4 top-4 rounded-full bg-clay px-3 py-1 text-xs font-semibold text-white">
            Featured
          </span>
        ) : null}
        <div
          role="img"
          aria-label={`${product.name} product preview`}
          className="flex h-40 items-center justify-center rounded-lg border border-ink/10 bg-white/80"
        >
          <div className="relative h-28 w-full max-w-48">
            {product.featured ? (
              <>
                <div className="absolute left-6 top-4 h-20 w-28 rounded-md border border-ink/10 bg-white shadow-soft" />
                <div className="absolute left-12 top-8 h-16 w-28 rounded-md bg-clay/18 ring-1 ring-clay/20" />
                <div className="absolute bottom-3 left-3 h-8 w-24 rounded-full bg-sage/35 ring-1 ring-sage/30" />
                <div className="absolute bottom-4 right-6 h-12 w-9 rounded-md bg-ink/12" />
              </>
            ) : (
              <>
                <div className="absolute left-6 top-5 h-14 w-32 rounded-full bg-clay/18 ring-8 ring-sage/35" />
                <div className="absolute bottom-8 left-10 h-3 w-32 rounded-full bg-ink/12" />
                <div className="absolute bottom-3 left-16 h-3 w-20 rounded-full bg-sage/35" />
              </>
            )}
          </div>
        </div>
        <p className="mt-4 text-center text-xs font-medium uppercase tracking-[0.12em] text-ink/48">
          {product.imagePlaceholder}
        </p>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-sage">
              {product.category}
            </p>
            <h2 className="mt-2 text-xl font-semibold text-ink">{product.name}</h2>
          </div>
          <p className="rounded-full bg-mist px-3 py-1 text-sm font-semibold text-ink">
            {product.price}
          </p>
        </div>

        <p className="mt-4 leading-7 text-ink/66">{product.description}</p>

        <ul className="mt-5 space-y-2 text-sm leading-6 text-ink/68">
          {product.benefits.map((benefit) => (
            <li key={benefit} className="flex gap-2">
              <span aria-hidden="true" className="mt-2 h-2 w-2 shrink-0 rounded-full bg-clay" />
              <span>{benefit}</span>
            </li>
          ))}
        </ul>

        <div className="mt-auto flex flex-col gap-3 pt-6 sm:flex-row">
          <Link
            href={`/products/${product.slug}`}
            className={`inline-flex flex-1 items-center justify-center rounded-full px-4 py-3 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-clay focus:ring-offset-2 ${
              hasCheckout
                ? "border border-ink/15 bg-white text-ink hover:border-ink/35 hover:bg-mist"
                : "bg-ink text-white hover:bg-night"
            }`}
          >
            View details
          </Link>
          {hasCheckout ? (
            <TrackLink
              href={product.checkoutUrl}
              eventName="checkout_cta_click"
              eventParams={{
                location: "product_card",
                product_slug: product.slug,
                product_name: product.name
              }}
              className="inline-flex flex-1 items-center justify-center rounded-full bg-ink px-4 py-3 text-sm font-semibold text-white transition hover:bg-night focus:outline-none focus:ring-2 focus:ring-clay focus:ring-offset-2"
            >
              Shop now
            </TrackLink>
          ) : null}
        </div>
      </div>
    </article>
  );
}
