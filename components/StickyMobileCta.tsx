"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function StickyMobileCta() {
  const pathname = usePathname();
  const isProductDetail = pathname.startsWith("/products/") && pathname !== "/products";
  const primaryHref = isProductDetail ? "#email-capture" : "/products/sleep-reset-kit";
  const primaryLabel = isProductDetail ? "Join launch list" : "View kit";
  const secondaryHref = isProductDetail ? "/products" : "/learn";
  const secondaryLabel = isProductDetail ? "Products" : "Learn";

  return (
    <div
      className="fixed inset-x-0 bottom-0 z-40 border-t border-ink/10 bg-linen/95 px-4 pb-[calc(0.75rem+env(safe-area-inset-bottom))] pt-3 shadow-[0_-12px_30px_rgba(23,32,27,0.12)] backdrop-blur md:hidden"
      aria-label="Mobile quick actions"
    >
      <div className="mx-auto flex max-w-md gap-3">
        <Link
          href={primaryHref}
          className="inline-flex min-h-11 flex-1 items-center justify-center rounded-full bg-ink px-4 text-sm font-semibold text-white shadow-button focus:outline-none focus:ring-2 focus:ring-clay focus:ring-offset-2"
        >
          {primaryLabel}
        </Link>
        <Link
          href={secondaryHref}
          className="inline-flex min-h-11 flex-1 items-center justify-center rounded-full border border-ink/15 bg-white/85 px-4 text-sm font-semibold text-ink shadow-subtle focus:outline-none focus:ring-2 focus:ring-clay focus:ring-offset-2"
        >
          {secondaryLabel}
        </Link>
      </div>
    </div>
  );
}
