export type HeroCta = {
  label: string;
  href: string;
  variant?: "primary" | "secondary";
};

export type HeroProofItem = {
  value: string;
  label: string;
};

export type HeroSectionProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  primaryCta?: HeroCta;
  secondaryCta?: HeroCta;
  proofItems?: HeroProofItem[];
  variant?: "split" | "centered" | "panel";
  tone?: "default" | "muted" | "inverse";
};
