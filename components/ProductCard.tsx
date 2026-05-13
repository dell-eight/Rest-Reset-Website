import Link from "next/link";
import type { Product } from "@/data/products";
import { TrackLink } from "@/components/TrackLink";
import { productCardClass, primaryButtonClass, secondaryButtonClass } from "@/lib/ui";

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  const hasCheckout = product.checkoutUrl.trim().length > 0 && !product.checkoutUrl.startsWith("#");
  const ctaLabel = product.featured ? "View Sleep Reset Kit" : "View details";

  return (
    <article
      id={`product-${product.slug}`}
      className={`${productCardClass} ${product.featured ? "ring-1 ring-clay/25" : ""}`}
    >
      <div className={`relative min-h-52 p-4 sm:min-h-56 sm:p-5 ${product.featured ? "bg-linen" : "bg-foam"}`}>
        {product.featured ? (
          <span className="absolute right-4 top-4 z-10 rounded-full bg-clay px-3 py-1 text-xs font-semibold text-white shadow-subtle">
            Main offer
          </span>
        ) : null}
        <div
          role="img"
          aria-label={`${product.name} product preview`}
          className="flex h-40 items-center justify-center overflow-hidden rounded-2xl border border-ink/10 bg-white/90 shadow-subtle sm:h-44"
        >
          <div className="relative h-32 w-full max-w-56">
            {product.featured ? (
              <>
                <div className="absolute left-5 top-3 h-24 w-32 rounded-xl border border-ink/10 bg-white shadow-card" />
                <div className="absolute left-12 top-8 h-20 w-36 rounded-xl bg-clay/18 ring-1 ring-clay/20" />
                <div className="absolute bottom-3 left-2 h-10 w-28 rounded-full bg-sage/35 ring-1 ring-sage/30" />
                <div className="absolute bottom-5 right-5 h-16 w-11 rounded-lg bg-ink/12 transition duration-200 group-hover:-translate-y-1 motion-reduce:transform-none motion-reduce:transition-none" />
                <div className="absolute right-7 top-4 h-9 w-16 rounded-lg bg-foam ring-1 ring-ink/10" />
              </>
            ) : (
              <>
                <div className="absolute left-7 top-5 h-16 w-36 rounded-full bg-clay/18 ring-8 ring-sage/35 transition duration-200 group-hover:scale-[1.03] motion-reduce:transform-none motion-reduce:transition-none" />
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

      <div className="flex flex-1 flex-col p-4 sm:p-5">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-sage">
              {product.category}
            </p>
            <h2 className="mt-2 text-xl font-semibold text-ink">{product.name}</h2>
          </div>
          <div className="rounded-xl bg-foam px-3 py-2 text-right">
            <p className="text-xs font-semibold uppercase tracking-[0.1em] text-ink/45">
              Launch est.
            </p>
            <p className="text-sm font-semibold text-ink">{product.price}</p>
          </div>
        </div>

        <p className="mt-4 leading-7 text-ink/66">{product.description}</p>

        <ul className="mt-5 space-y-2 text-sm leading-6 text-ink/68">
          {product.benefits.slice(0, 3).map((benefit) => (
            <li key={benefit} className="flex gap-2">
              <span aria-hidden="true" className="mt-2 h-2 w-2 shrink-0 rounded-full bg-clay" />
              <span>{benefit}</span>
            </li>
          ))}
        </ul>

        <div className="mt-5 rounded-xl border border-ink/10 bg-foam/75 px-3 py-2 text-xs font-semibold text-ink/58">
          {hasCheckout ? "Checkout provider link ready" : "Launch list open before ordering"}
        </div>

        <div className="mt-auto flex flex-col gap-3 pt-6 sm:flex-row">
          <Link
            href={`/products/${product.slug}`}
            className={`flex-1 ${
              hasCheckout
                ? secondaryButtonClass
                : primaryButtonClass
            }`}
          >
            {ctaLabel}
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
              className={`flex-1 ${primaryButtonClass}`}
            >
              Continue to checkout
            </TrackLink>
          ) : null}
        </div>
      </div>
    </article>
  );
}
