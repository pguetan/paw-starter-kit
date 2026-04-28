import type { MetadataRoute } from "next";

import { siteConfig } from "@/data/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: siteConfig.robots.index
      ? {
          userAgent: "*",
          allow: "/",
        }
      : {
          userAgent: "*",
          disallow: "/",
        },
    sitemap: new URL("/sitemap.xml", siteConfig.url).toString(),
  };
}
