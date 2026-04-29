import type {
  AuthorityBioSectionProps,
  BlogPreviewSectionProps,
  CtaSectionProps,
  HeroSectionProps,
  LeadMagnetSectionProps,
  LogoStripSectionProps,
  QuoteProofSectionProps,
} from "@/components/sections";

export const homepageHero = {
  eyebrow: "Authority website starter",
  title: "Build a premium authority site from a reusable system.",
  description:
    "A starter-safe homepage composition for high-trust coaches, consultants, and expert-led businesses.",
  primaryCta: {
    label: "Book a call",
    href: "#contact",
  },
  secondaryCta: {
    label: "Learn more",
    href: "#about",
  },
  variant: "panel",
} satisfies HeroSectionProps;

export const homepageServicesIntro = {
  eyebrow: "What's in it for you",
  title: "Start your journey here",
  description:
    "Use these cards for programs, coaching offers, memberships, or other high-level paths into the client's world.",
};

export const homepageQuoteProof = {
  quote:
    "Use this centered proof moment for a sharp client outcome, authority statement, or editorial quote.",
  name: "Example Client",
  role: "Founder, Example Company",
} satisfies QuoteProofSectionProps;

export const homepageAuthorityBio = {
  eyebrow: "Who is the expert",
  title: "Authority profile",
  description: [
    "Use this section to introduce the founder, advisor, or expert behind the business with concise credibility-building copy.",
    "Pair a strong media panel with measurable proof so the page builds trust before the visitor reaches the final CTA.",
  ],
  cta: {
    label: "More about the expert",
    href: "#about",
  },
  metrics: [
    {
      value: "5.2m",
      label: "Audience reach",
    },
    {
      value: "300+",
      label: "Clients helped",
    },
    {
      value: "3.5k+",
      label: "Students",
    },
    {
      value: "1.25m",
      label: "Resources shared",
    },
  ],
} satisfies AuthorityBioSectionProps;

export const homepageLogoStrip = {
  eyebrow: "Example proof logos",
  items: [
    {
      src: "/images/logos/logo-01.svg",
      alt: "Example logo 1",
    },
    {
      src: "/images/logos/logo-02.svg",
      alt: "Example logo 2",
    },
    {
      src: "/images/logos/logo-03.svg",
      alt: "Example logo 3",
    },
    {
      src: "/images/logos/logo-04.svg",
      alt: "Example logo 4",
    },
    {
      src: "/images/logos/logo-05.svg",
      alt: "Example logo 5",
    },
  ],
} satisfies LogoStripSectionProps;

export const homepageTestimonialsIntro = {
  eyebrow: "Client testimonials",
  title: "Hear what people say about the expert",
  description:
    "Use this rail for approved client proof, video testimonials, or short outcome stories.",
};

export const homepageLeadMagnet = {
  eyebrow: "Free download",
  title: "Authority accelerator",
  subtitle: "A starter-safe lead magnet section for list growth.",
  description:
    "Replace this with approved lead magnet copy and connect the form to the selected email or CRM integration.",
} satisfies LeadMagnetSectionProps;

export const homepageBlogPreview = {
  eyebrow: "Blog",
  title: "Latest authority insights",
  ctaLabel: "View more posts",
  posts: [
    {
      date: "April 26, 2026",
      category: "Marketing",
      title: "How to frame an expert offer before building the page",
      excerpt:
        "Use this featured slot for a strategic article that supports the client's primary offer.",
    },
    {
      date: "April 26, 2026",
      category: "Positioning",
      title: "What makes an authority homepage feel premium",
    },
    {
      date: "April 26, 2026",
      category: "Conversion",
      title: "Where proof belongs on a high-trust sales path",
    },
    {
      date: "April 26, 2026",
      category: "Content",
      title: "How to turn expertise into site structure",
    },
  ],
} satisfies BlogPreviewSectionProps;

export const homepageFinalCta = {
  title: "Ready to take your business to the next level?",
  description:
    "Use this final action band for the primary conversion path once the visitor has seen the proof and offer context.",
  cta: {
    label: "Book a call",
    href: "#contact",
  },
} satisfies CtaSectionProps;
