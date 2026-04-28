import type { ServicesSectionProps } from "./services.schema";

export const servicesPresets = {
  focusedGrid: {
    variant: "grid",
    tone: "default",
  },
  authorityFeatured: {
    variant: "featured",
    tone: "muted",
  },
} satisfies Record<string, Pick<ServicesSectionProps, "variant" | "tone">>;
