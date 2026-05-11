"use client";

import { useEffect } from "react";
import { trackEvent } from "@/lib/analytics";

type ProductViewTrackerProps = {
  productSlug: string;
  productName: string;
  category: string;
  featured?: boolean;
};

export function ProductViewTracker({
  productSlug,
  productName,
  category,
  featured
}: ProductViewTrackerProps) {
  useEffect(() => {
    trackEvent("product_view", {
      product_slug: productSlug,
      product_name: productName,
      category,
      featured: Boolean(featured)
    });
  }, [category, featured, productName, productSlug]);

  return null;
}
