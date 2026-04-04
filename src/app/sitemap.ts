import type { MetadataRoute } from "next";
import { PRODUCT_CATEGORIES } from "@/data/products";

const LOCALES = ["ko", "en"];
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://ducksungtp.com";

const STATIC_PATHS = [
  "",
  "/about/ceo",
  "/about/organization",
  "/about/history",
  "/about/business",
  "/about/people",
  "/about/location",
  "/mro",
  "/mro/agent",
  "/products",
  "/sourcing/strategy",
  "/sourcing/network",
  "/sourcing/delivery",
  "/sourcing/service",
  "/contact/inquiry",
  "/contact/notice",
  "/nso",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries: MetadataRoute.Sitemap = STATIC_PATHS.flatMap((path) =>
    LOCALES.map((locale) => ({
      url: `${SITE_URL}/${locale}${path}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: path === "" ? 1 : 0.8,
    }))
  );

  const categoryEntries: MetadataRoute.Sitemap = PRODUCT_CATEGORIES.flatMap((cat) =>
    LOCALES.map((locale) => ({
      url: `${SITE_URL}/${locale}/products/${cat.id}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    }))
  );

  return [...staticEntries, ...categoryEntries];
}
