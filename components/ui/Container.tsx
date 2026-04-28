import type { ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils/cn";

type ContainerWidth = "narrow" | "default" | "wide" | "full";

const widthClasses: Record<ContainerWidth, string> = {
  narrow: "max-w-[var(--container-narrow)]",
  default: "max-w-[var(--container-default)]",
  wide: "max-w-[var(--container-wide)]",
  full: "max-w-none",
};

type ContainerProps = ComponentPropsWithoutRef<"div"> & {
  width?: ContainerWidth;
};

export function Container({
  width = "default",
  className,
  ...props
}: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full px-[var(--container-gutter)]",
        widthClasses[width],
        className,
      )}
      {...props}
    />
  );
}
