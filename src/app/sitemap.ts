import type { MetadataRoute } from "next";
import { elements } from "@/data";

const SITE_URL = "https://www.thesutradhara.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: SITE_URL, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE_URL}/privacy-policy`, changeFrequency: "yearly", priority: 0.3 },
    { url: `${SITE_URL}/terms-of-service`, changeFrequency: "yearly", priority: 0.3 },
  ];

  const elementRoutes: MetadataRoute.Sitemap = elements.map((el) => ({
    url: `${SITE_URL}/elements/${el.slug}`,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticRoutes, ...elementRoutes];
}
