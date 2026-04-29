import Image from "next/image";

import { Container } from "@/components/ui";
import { primaryNavigation } from "@/data/navigation";
import { siteConfig } from "@/data/site";

import { SocialLinks } from "../shared";

export function SiteFooter() {
  return (
    <footer
      className="bg-inverse py-16 text-center text-inverse-text md:py-24"
      id="contact"
    >
      <Container width="wide">
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-6">
          <SocialLinks items={siteConfig.socialLinks} tone="muted" />

          <Image
            src={siteConfig.brand.wordmark}
            alt={siteConfig.shortName}
            width={660}
            height={180}
            className="mt-8 w-full max-w-5xl opacity-50"
          />

          <nav
            className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-white/55"
            aria-label="Footer navigation"
          >
            {primaryNavigation.map((item) => (
              <a
                className="transition-colors duration-[var(--duration-fast)] ease-[var(--ease-standard)] hover:text-white"
                href={item.href}
                key={item.label}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <p className="text-sm text-white/45">
            © 2026 {siteConfig.shortName}. All rights reserved.
          </p>

          <nav
            className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-white/45"
            aria-label="Legal navigation"
          >
            {siteConfig.legalLinks.map((item) => (
              <a
                className="transition-colors duration-[var(--duration-fast)] ease-[var(--ease-standard)] hover:text-white"
                href={item.href}
                key={item.label}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </Container>
    </footer>
  );
}
