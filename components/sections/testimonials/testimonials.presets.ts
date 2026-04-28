import type { TestimonialsSectionProps } from "./testimonials.schema";

export const testimonialsPresets = {
  proofGrid: {
    variant: "grid",
    tone: "default",
  },
  editorialRail: {
    variant: "rail",
    tone: "muted",
  },
} satisfies Record<string, Pick<TestimonialsSectionProps, "variant" | "tone">>;
