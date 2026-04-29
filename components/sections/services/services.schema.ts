export type ServiceItem = {
  title: string;
  description: string;
  label?: string;
  href?: string;
  ctaLabel?: string;
};

export type ServicesSectionProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  items: ServiceItem[];
  variant?: "grid" | "featured" | "programCards";
  tone?: "default" | "muted";
};
