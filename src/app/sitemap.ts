import type { MetadataRoute } from "next";
import { threads } from "@/data";

const SITE_URL = "https://www.thesutradhara.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: SITE_URL, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE_URL}/privacy-policy`, changeFrequency: "yearly", priority: 0.3 },
    { url: `${SITE_URL}/terms-of-service`, changeFrequency: "yearly", priority: 0.3 },
  ];

  const threadRoutes: MetadataRoute.Sitemap = threads.map((el) => ({
    url: `${SITE_URL}/threads/${el.slug}`,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticRoutes, ...threadRoutes];
}
