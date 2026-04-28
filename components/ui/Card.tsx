import type { ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils/cn";

type CardProps = ComponentPropsWithoutRef<"article">;

export function Card({ className, ...props }: CardProps) {
  return (
    <article
      className={cn(
        "rounded-[var(--radius-medium)] border border-border-subtle bg-card p-6 shadow-[var(--shadow-subtle)]",
        className,
      )}
      {...props}
    />
  );
}
