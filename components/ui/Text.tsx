import type { ComponentPropsWithoutRef, ElementType } from "react";

import { cn } from "@/lib/utils/cn";

type TextSize = "sm" | "base" | "lg";
type TextTone = "primary" | "secondary" | "muted" | "inverse";

const sizeClasses: Record<TextSize, string> = {
  sm: "text-sm leading-[var(--line-height-normal)]",
  base: "text-base leading-[var(--line-height-relaxed)]",
  lg: "text-lg leading-[var(--line-height-relaxed)]",
};

const toneClasses: Record<TextTone, string> = {
  primary: "text-primary",
  secondary: "text-secondary",
  muted: "text-[var(--color-text-muted)]",
  inverse: "text-inverse-text",
};

type TextProps<T extends ElementType> = {
  as?: T;
  size?: TextSize;
  tone?: TextTone;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "size">;

export function Text<T extends ElementType = "p">({
  as,
  size = "base",
  tone = "secondary",
  className,
  ...props
}: TextProps<T>) {
  const Component = as ?? "p";

  return (
    <Component
      className={cn(
        "max-w-[var(--container-narrow)] text-pretty",
        sizeClasses[size],
        toneClasses[tone],
        className,
      )}
      {...props}
    />
  );
}
