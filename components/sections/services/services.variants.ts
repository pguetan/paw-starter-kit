import type { ServicesSectionProps } from "./services.schema";

type ServicesVariant = NonNullable<ServicesSectionProps["variant"]>;

export const servicesVariants: Record<
  ServicesVariant,
  {
    header: "left" | "center";
    grid: string;
    card: string;
  }
> = {
  grid: {
    header: "center",
    grid: "grid gap-4 md:grid-cols-3",
    card: "min-h-56",
  },
  featured: {
    header: "left",
    grid: "grid gap-4 lg:grid-cols-[1.1fr_0.95fr_0.95fr]",
    card: "min-h-64 first:bg-muted",
  },
};
