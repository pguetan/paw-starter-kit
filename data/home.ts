import type { HeroSectionProps } from "@/components/sections/hero";

export const homepageHero = {
  eyebrow: "Reference homepage placeholder",
  title: "Premium authority website system",
  description:
    "Placeholder homepage introduction. Replace this with approved positioning and homepage copy before client review.",
  primaryCta: {
    label: "Primary CTA placeholder",
    href: "/",
  },
  secondaryCta: {
    label: "Secondary CTA placeholder",
    href: "/",
  },
  proofItems: [
    {
      value: "01",
      label: "Placeholder proof point. Replace with approved credibility data.",
    },
    {
      value: "02",
      label: "Placeholder proof point. Replace with approved credibility data.",
    },
    {
      value: "03",
      label: "Placeholder proof point. Replace with approved credibility data.",
    },
  ],
} satisfies HeroSectionProps;

export const homepageServicesIntro = {
  eyebrow: "Services placeholder",
  title: "Approved service structure goes here",
  description:
    "Placeholder services intro. Replace with approved offer framing before launch.",
};

export const homepageTestimonialsIntro = {
  eyebrow: "Proof placeholder",
  title: "Approved client proof goes here",
  description:
    "Placeholder testimonials intro. Replace with approved proof and client outcomes.",
};
