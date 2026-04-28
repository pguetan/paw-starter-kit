import type { ComponentPropsWithoutRef, ElementType } from "react";

import { cn } from "@/lib/utils/cn";

type HeadingSize = "display" | "headline" | "title" | "subtitle";

const sizeClasses: Record<HeadingSize, string> = {
  display:
    "text-[clamp(var(--font-size-4xl),8vw,var(--font-size-6xl))] leading-[var(--line-height-tight)]",
  headline:
    "text-[clamp(var(--font-size-3xl),5vw,var(--font-size-5xl))] leading-[var(--line-height-tight)]",
  title: "text-[var(--font-size-2xl)] leading-[var(--line-height-snug)]",
  subtitle: "text-[var(--font-size-xl)] leading-[var(--line-height-snug)]",
};

type HeadingProps<T extends ElementType> = {
  as?: T;
  size?: HeadingSize;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "size">;

export function Heading<T extends ElementType = "h2">({
  as,
  size = "headline",
  className,
  ...props
}: HeadingProps<T>) {
  const Component = as ?? "h2";

  return (
    <Component
      className={cn(
        "max-w-[var(--container-narrow)] font-semibold tracking-normal text-balance text-primary",
        sizeClasses[size],
        className,
      )}
      {...props}
    />
  );
}
