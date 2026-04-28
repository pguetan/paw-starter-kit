import type { ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils/cn";

type BadgeTone = "default" | "proof" | "inverse";

const toneClasses: Record<BadgeTone, string> = {
  default: "border-border-subtle bg-muted text-secondary",
  proof: "border-transparent bg-[var(--color-proof-highlight)] text-primary",
  inverse: "border-white/20 bg-white/10 text-inverse-text",
};

type BadgeProps = ComponentPropsWithoutRef<"span"> & {
  tone?: BadgeTone;
};

export function Badge({ tone = "default", className, ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex w-fit items-center rounded-[var(--radius-pill)] border px-3 py-1 text-xs font-medium uppercase tracking-normal",
        toneClasses[tone],
        className,
      )}
      {...props}
    />
  );
}
