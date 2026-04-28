import type { ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils/cn";

type SectionTone = "default" | "muted" | "inverse";
type SectionSpacing = "compact" | "default" | "spacious";

const toneClasses: Record<SectionTone, string> = {
  default: "bg-section text-primary",
  muted: "bg-muted text-primary",
  inverse: "bg-inverse text-inverse-text",
};

const spacingClasses: Record<SectionSpacing, string> = {
  compact: "py-12 md:py-16",
  default: "py-16 md:py-24",
  spacious: "py-20 md:py-32",
};

type SectionProps = ComponentPropsWithoutRef<"section"> & {
  tone?: SectionTone;
  spacing?: SectionSpacing;
};

export function Section({
  tone = "default",
  spacing = "default",
  className,
  ...props
}: SectionProps) {
  return (
    <section
      className={cn(
        "w-full",
        toneClasses[tone],
        spacingClasses[spacing],
        className,
      )}
      {...props}
    />
  );
}
