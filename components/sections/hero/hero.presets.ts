import type { HeroSectionProps } from "./hero.schema";

export const heroPresets = {
  editorialTrust: {
    variant: "split",
    tone: "default",
  },
  focusedAuthority: {
    variant: "centered",
    tone: "muted",
  },
} satisfies Record<string, Pick<HeroSectionProps, "variant" | "tone">>;
