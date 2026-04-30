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
  panel: {
    container:
      "grid min-h-[calc(100vh-1.5rem)] gap-12 rounded-[var(--radius-panel)] bg-[var(--surface-hero)] px-6 pb-14 pt-52 text-[color:var(--text-on-hero)] md:min-h-[calc(100vh-2rem)] md:px-16 md:pb-20 md:pt-64 lg:grid-cols-[1.1fr_0.8fr] lg:items-end",
    content: "items-start text-left",
    proofGrid: "grid gap-4 md:max-w-[26rem]",
  },
};
