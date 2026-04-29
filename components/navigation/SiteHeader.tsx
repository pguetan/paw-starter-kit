import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/ui";
import { primaryNavigation } from "@/data/navigation";
import { siteConfig } from "@/data/site";

import { SocialLinks } from "../shared";

export function SiteHeader() {
  return (
    <header className="absolute inset-x-0 top-8 z-20">
      <Container width="default">
        <div className="mx-auto flex min-h-14 max-w-4xl items-center justify-between rounded-[var(--radius-pill)] bg-white/15 px-5 text-inverse-text shadow-[var(--shadow-subtle)] backdrop-blur-md">
          <Link
            className="flex items-center gap-3"
            href="/"
            aria-label={`${siteConfig.name} home`}
          >
            <Image
              src={siteConfig.brand.logo}
              alt=""
              width={105}
              height={24}
              priority
              style={{ width: 105, height: 24 }}
            />
          </Link>

          <nav
            className="hidden items-center gap-8 text-sm font-medium md:flex"
            aria-label="Primary navigation"
          >
            {primaryNavigation.map((item) => (
              <a
                className="transition-colors duration-[var(--duration-fast)] ease-[var(--ease-standard)] hover:text-white/75"
                href={item.href}
                key={item.label}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:block">
            <SocialLinks items={siteConfig.socialLinks} />
          </div>
        </div>
      </Container>
    </header>
  );
}
