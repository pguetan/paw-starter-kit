import type { TestimonialsSectionProps } from "./testimonials.schema";

type TestimonialsVariant = NonNullable<TestimonialsSectionProps["variant"]>;

export const testimonialsVariants: Record<
  TestimonialsVariant,
  {
    header: "left" | "center";
    list: string;
    item: string;
  }
> = {
  grid: {
    header: "center",
    list: "grid gap-4 md:grid-cols-3",
    item: "h-full",
  },
  rail: {
    header: "left",
    list: "flex gap-4 overflow-x-auto pb-2",
    item: "min-w-[18rem] max-w-sm",
  },
};
