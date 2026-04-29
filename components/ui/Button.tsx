import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from "react";

import { cn } from "@/lib/utils/cn";

type ButtonVariant = "primary" | "secondary" | "quiet" | "inverse";
type ButtonSize = "sm" | "md" | "lg";

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "border-transparent bg-accent text-inverse-text shadow-[var(--shadow-subtle)] hover:bg-[var(--color-accent-primary-hover)]",
  secondary:
    "border-border-subtle bg-card text-primary hover:border-border-strong hover:bg-muted",
  quiet: "border-transparent bg-transparent text-primary hover:bg-muted",
  inverse:
    "border-transparent bg-white text-primary shadow-[var(--shadow-subtle)] hover:bg-white/85",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "min-h-10 px-4 text-sm",
  md: "min-h-11 px-5 text-sm",
  lg: "min-h-12 px-6 text-base",
};

type SharedButtonProps = {
  children: ReactNode;
  className?: string;
  size?: ButtonSize;
  variant?: ButtonVariant;
};

type ButtonAsButton = SharedButtonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: never;
  };

type ButtonAsLink = SharedButtonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

export type ButtonProps = ButtonAsButton | ButtonAsLink;

export function Button({
  children,
  className,
  size = "md",
  variant = "primary",
  ...props
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center rounded-[var(--radius-pill)] border font-medium transition-colors duration-[var(--duration-fast)] ease-[var(--ease-standard)]",
    "focus-visible:outline focus-visible:outline-[var(--focus-ring-width)] focus-visible:outline-offset-[var(--focus-ring-offset)] focus-visible:outline-[var(--color-focus-ring)]",
    variantClasses[variant],
    sizeClasses[size],
    className,
  );

  if ("href" in props) {
    const anchorProps = props as AnchorHTMLAttributes<HTMLAnchorElement> & {
      href: string;
    };

    return (
      <a className={classes} {...anchorProps}>
        {children}
      </a>
    );
  }

  const buttonProps = props as ButtonHTMLAttributes<HTMLButtonElement>;

  return (
    <button className={classes} {...buttonProps}>
      {children}
    </button>
  );
}
