import type { MetadataRoute } from "next";
import { SITE_URL, threads } from "@/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: SITE_URL, lastModified, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE_URL}/privacy-policy`, lastModified, changeFrequency: "yearly", priority: 0.3 },
    { url: `${SITE_URL}/terms-of-service`, lastModified, changeFrequency: "yearly", priority: 0.3 },
  ];

  const threadRoutes: MetadataRoute.Sitemap = threads.map((el) => ({
    url: `${SITE_URL}/threads/${el.slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticRoutes, ...threadRoutes];
}
