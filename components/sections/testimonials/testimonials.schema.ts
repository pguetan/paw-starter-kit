export type TestimonialItem = {
  quote: string;
  name: string;
  role?: string;
};

export type TestimonialsSectionProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  items: TestimonialItem[];
  variant?: "grid" | "rail";
  tone?: "default" | "muted" | "inverse";
};
