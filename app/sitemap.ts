import type { MetadataRoute } from "next";
import { learnArticles } from "@/data/learn";
import { products } from "@/data/products";
import { siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/products",
    "/learn",
    "/about",
    "/contact",
    "/faq",
    "/shipping",
    "/returns",
    "/privacy",
    "/terms"
  ];

  return [
    ...staticRoutes.map((route) => ({
      url: `${siteConfig.url}${route}`,
      lastModified: new Date()
    })),
    ...products.map((product) => ({
      url: `${siteConfig.url}/products/${product.slug}`,
      lastModified: new Date()
    })),
    ...learnArticles.map((article) => ({
      url: `${siteConfig.url}/learn/${article.slug}`,
      lastModified: new Date()
    }))
  ];
}
