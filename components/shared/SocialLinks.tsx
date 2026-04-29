import Image from "next/image";

import { cn } from "@/lib/utils/cn";

export type SocialLinkItem = {
  icon: string;
  label: string;
  href: string;
};

type SocialLinksTone = "light" | "muted";

type SocialLinksProps = {
  items: SocialLinkItem[];
  tone?: SocialLinksTone;
};

const toneClasses: Record<SocialLinksTone, string> = {
  light: "bg-white text-primary hover:bg-muted",
  muted: "bg-white/50 text-primary hover:bg-white",
};

export function SocialLinks({ items, tone = "light" }: SocialLinksProps) {
  return (
    <ul className="flex items-center gap-2" aria-label="Social links">
      {items.map((item) => (
        <li key={item.label}>
          <a
            className={cn(
              "flex size-8 items-center justify-center rounded-full transition-colors duration-[var(--duration-fast)] ease-[var(--ease-standard)]",
              "focus-visible:outline focus-visible:outline-[var(--focus-ring-width)] focus-visible:outline-offset-[var(--focus-ring-offset)] focus-visible:outline-[var(--color-focus-ring)]",
              toneClasses[tone],
            )}
            href={item.href}
            aria-label={item.label}
          >
            <Image
              src={item.icon}
              alt=""
              width={16}
              height={16}
              style={{ width: 16, height: 16 }}
            />
          </a>
        </li>
      ))}
    </ul>
  );
}
