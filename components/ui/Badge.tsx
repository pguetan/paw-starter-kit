import type { ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils/cn";

type BadgeTone = "default" | "proof" | "inverse" | "ghost";

const toneClasses: Record<BadgeTone, string> = {
  default:
    "border-[color:var(--eyebrow-default-border)] bg-[var(--eyebrow-default-bg)] text-[color:var(--eyebrow-default-text)]",
  proof:
    "border-[color:var(--eyebrow-proof-border)] bg-[var(--eyebrow-proof-bg)] text-[color:var(--eyebrow-proof-text)]",
  inverse:
    "border-[color:var(--eyebrow-inverse-border)] bg-[var(--eyebrow-inverse-bg)] text-[color:var(--eyebrow-inverse-text)]",
  ghost: "border-0 bg-transparent px-0 text-[color:var(--eyebrow-ghost-text)]",
};

type BadgeProps = ComponentPropsWithoutRef<"span"> & {
  tone?: BadgeTone;
};

export function Badge({ tone = "default", className, ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex w-fit items-center rounded-[var(--radius-pill)] border px-3 py-1 text-base font-medium uppercase tracking-normal",
        toneClasses[tone],
        className,
      )}
      {...props}
    />
  );
}
