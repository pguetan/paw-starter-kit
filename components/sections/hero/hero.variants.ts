import type { HeroSectionProps } from "./hero.schema";

type HeroVariant = NonNullable<HeroSectionProps["variant"]>;

export const heroVariants: Record<
  HeroVariant,
  {
    container: string;
    content: string;
    proofGrid: string;
  }
> = {
  split: {
    container:
      "grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(20rem,0.9fr)] lg:items-end",
    content: "items-start text-left",
    proofGrid: "grid gap-4 sm:grid-cols-3 lg:grid-cols-1",
  },
  centered: {
    container: "mx-auto max-w-[var(--container-narrow)]",
    content: "items-center text-center",
    proofGrid: "grid gap-4 sm:grid-cols-3",
  },
};
