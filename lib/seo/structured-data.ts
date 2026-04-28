import { siteConfig } from "@/data/site";

import { absoluteUrl } from "./metadata";

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: absoluteUrl("/"),
  };
}
