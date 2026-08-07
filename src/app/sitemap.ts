import type { MetadataRoute } from "next";

import { siteConfig } from "@/data/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["/", "/about", "/work", "/blogs", "/ai-data", "/consulting", "/resume", "/contact"];

  return routes.map((route, index) => ({
    url: route === "/" ? siteConfig.url : `${siteConfig.url}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: index === 0 ? 1 : 0.7,
  }));
}