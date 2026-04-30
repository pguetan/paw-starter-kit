import type { CSSProperties, ReactNode } from "react";

import { SectionHeader, SocialLinks } from "@/components/shared";
import {
  Badge,
  Button,
  Card,
  Container,
  Heading,
  Section,
  Text,
} from "@/components/ui";
import { siteConfig } from "@/data/site";

export const metadata = {
  title: "Design System Preview",
  description: "Visual reference for starter tokens and reusable components.",
};

const primitiveColors = [
  { name: "neutral-0", token: "--color-neutral-0" },
  { name: "neutral-50", token: "--color-neutral-50" },
  { name: "neutral-100", token: "--color-neutral-100" },
  { name: "neutral-200", token: "--color-neutral-200" },
  { name: "neutral-300", token: "--color-neutral-300" },
  { name: "neutral-500", token: "--color-neutral-500", dark: true },
  { name: "neutral-700", token: "--color-neutral-700", dark: true },
  { name: "neutral-900", token: "--color-neutral-900", dark: true },
  { name: "neutral-950", token: "--color-neutral-950", dark: true },
  { name: "blue-700", token: "--color-blue-700", dark: true },
  { name: "blue-800", token: "--color-blue-800", dark: true },
  { name: "gold-500", token: "--color-gold-500", dark: true },
  { name: "green-600", token: "--color-green-600", dark: true },
  { name: "amber-600", token: "--color-amber-600", dark: true },
  { name: "red-600", token: "--color-red-600", dark: true },
];

const semanticColors = [
  { name: "text-primary", token: "--color-text-primary", dark: true },
  { name: "text-secondary", token: "--color-text-secondary", dark: true },
  { name: "text-muted", token: "--color-text-muted", dark: true },
  { name: "text-inverse", token: "--color-text-inverse" },
  { name: "surface-page", token: "--color-surface-page" },
  { name: "surface-section", token: "--color-surface-section" },
  { name: "surface-card", token: "--color-surface-card" },
  { name: "surface-muted", token: "--color-surface-muted" },
  { name: "surface-inverse", token: "--color-surface-inverse", dark: true },
  { name: "border-subtle", token: "--color-border-subtle" },
  { name: "border-strong", token: "--color-border-strong", dark: true },
  { name: "accent-primary", token: "--color-accent-primary", dark: true },
  {
    name: "accent-primary-hover",
    token: "--color-accent-primary-hover",
    dark: true,
  },
  { name: "accent-secondary", token: "--color-accent-secondary", dark: true },
  { name: "accent-contrast", token: "--color-accent-contrast" },
  { name: "proof-highlight", token: "--color-proof-highlight" },
  { name: "success", token: "--color-success", dark: true },
  { name: "warning", token: "--color-warning", dark: true },
  { name: "error", token: "--color-error", dark: true },
  { name: "focus-ring", token: "--color-focus-ring", dark: true },
];

const themeColors = [
  { name: "brand-primary", token: "--brand-primary", dark: true },
  { name: "brand-primary-hover", token: "--brand-primary-hover", dark: true },
  { name: "brand-secondary", token: "--brand-secondary", dark: true },
  { name: "brand-contrast", token: "--brand-contrast" },
  { name: "surface-brand", token: "--surface-brand", dark: true },
  { name: "surface-hero", token: "--surface-hero", dark: true },
  { name: "surface-panel", token: "--surface-panel" },
  { name: "surface-panel-muted", token: "--surface-panel-muted" },
  {
    name: "surface-media-placeholder",
    token: "--surface-media-placeholder",
    dark: true,
  },
  { name: "text-on-brand", token: "--text-on-brand" },
  { name: "text-on-hero", token: "--text-on-hero" },
  { name: "button-primary-bg", token: "--button-primary-bg", dark: true },
  { name: "button-primary-text", token: "--button-primary-text" },
  { name: "button-inverse-bg", token: "--button-inverse-bg" },
  { name: "button-inverse-text", token: "--button-inverse-text", dark: true },
  { name: "eyebrow-proof-bg", token: "--eyebrow-proof-bg" },
  { name: "eyebrow-proof-text", token: "--eyebrow-proof-text", dark: true },
];

const spacingScale = [
  { name: "space-1", token: "--space-1" },
  { name: "space-2", token: "--space-2" },
  { name: "space-3", token: "--space-3" },
  { name: "space-4", token: "--space-4" },
  { name: "space-5", token: "--space-5" },
  { name: "space-6", token: "--space-6" },
  { name: "space-8", token: "--space-8" },
  { name: "space-10", token: "--space-10" },
  { name: "space-12", token: "--space-12" },
  { name: "space-16", token: "--space-16" },
  { name: "space-20", token: "--space-20" },
  { name: "space-24", token: "--space-24" },
  { name: "space-32", token: "--space-32" },
];

const typographyScale = [
  { name: "xs", token: "--font-size-xs" },
  { name: "sm", token: "--font-size-sm" },
  { name: "base", token: "--font-size-base" },
  { name: "lg", token: "--font-size-lg" },
  { name: "xl", token: "--font-size-xl" },
  { name: "2xl", token: "--font-size-2xl" },
  { name: "3xl", token: "--font-size-3xl" },
  { name: "4xl", token: "--font-size-4xl" },
  { name: "5xl", token: "--font-size-5xl" },
  { name: "6xl", token: "--font-size-6xl" },
];

const lineHeights = [
  { name: "tight", token: "--line-height-tight" },
  { name: "snug", token: "--line-height-snug" },
  { name: "normal", token: "--line-height-normal" },
  { name: "relaxed", token: "--line-height-relaxed" },
];

const radiusScale = [
  { name: "none", token: "--radius-none" },
  { name: "subtle", token: "--radius-subtle" },
  { name: "medium", token: "--radius-medium" },
  { name: "large", token: "--radius-large" },
  { name: "pill", token: "--radius-pill" },
  { name: "panel", token: "--radius-panel" },
  { name: "media", token: "--radius-media" },
  { name: "control", token: "--radius-control" },
];

const shadows = [
  { name: "subtle", token: "--shadow-subtle" },
  { name: "elevated", token: "--shadow-elevated" },
];

const buttonVariants = ["primary", "secondary", "quiet", "inverse"] as const;
const buttonSizes = ["sm", "md", "lg"] as const;
const badgeTones = ["default", "proof", "inverse", "ghost"] as const;
const sectionTones = ["default", "muted", "inverse"] as const;
const sectionSpacings = ["none", "compact", "default", "spacious"] as const;
const headingSizes = ["display", "headline", "title", "subtitle"] as const;
const textSizes = ["sm", "base", "lg"] as const;
const textTones = ["primary", "secondary", "muted", "inverse"] as const;
const containerWidths = ["narrow", "default", "wide", "full"] as const;

function TokenSwatch({
  name,
  token,
  dark = false,
}: {
  name: string;
  token: string;
  dark?: boolean;
}) {
  return (
    <div className="overflow-hidden rounded-[var(--radius-medium)] border border-border-subtle bg-card">
      <div
        className="flex min-h-28 flex-col justify-between p-4"
        style={
          {
            backgroundColor: `var(${token})`,
            color: dark
              ? "var(--color-text-inverse)"
              : "var(--color-text-primary)",
          } satisfies CSSProperties
        }
      >
        <span className="text-sm font-semibold">{name}</span>
        <span className="text-xs opacity-75">{token}</span>
      </div>
    </div>
  );
}

function PreviewBlock({
  title,
  children,
  className,
}: {
  title: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <Card className={className}>
      <h3 className="text-[length:var(--font-size-xl)] font-semibold leading-[var(--line-height-snug)]">
        {title}
      </h3>
      <div className="mt-6">{children}</div>
    </Card>
  );
}

function ScaleLabel({ name, token }: { name: string; token: string }) {
  return (
    <div className="min-w-28 text-sm">
      <p className="font-medium text-primary">{name}</p>
      <p className="text-xs text-secondary">{token}</p>
    </div>
  );
}

export default function DesignSystemPreviewPage() {
  return (
    <div className="bg-page">
      <Section spacing="spacious">
        <Container width="wide">
          <div className="grid gap-8 lg:grid-cols-[0.7fr_1fr] lg:items-end">
            <div>
              <Badge tone="proof">Design system preview</Badge>
              <Heading as="h1" size="display" className="mt-5">
                Tokens and components at a glance.
              </Heading>
            </div>
            <Text size="lg">
              Use this route as a visual reference while editing CSS, section
              layouts, and reusable primitives. It reflects the current starter
              tokens and component variant APIs.
            </Text>
          </div>
        </Container>
      </Section>

      <Section tone="muted" spacing="spacious">
        <Container width="wide">
          <SectionHeader
            eyebrow="Colors"
            title="Primitive and semantic color tokens"
            description="Primitive colors are raw palette values. Semantic colors describe usage and should be preferred inside components."
          />

          <div className="mt-10 grid gap-8">
            <PreviewBlock title="Primitive colors">
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
                {primitiveColors.map((color) => (
                  <TokenSwatch key={color.name} {...color} />
                ))}
              </div>
            </PreviewBlock>

            <PreviewBlock title="Semantic colors">
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
                {semanticColors.map((color) => (
                  <TokenSwatch key={color.name} {...color} />
                ))}
              </div>
            </PreviewBlock>

            <PreviewBlock title="Theme contract colors">
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
                {themeColors.map((color) => (
                  <TokenSwatch key={color.name} {...color} />
                ))}
              </div>
            </PreviewBlock>
          </div>
        </Container>
      </Section>

      <Section spacing="spacious">
        <Container width="wide">
          <SectionHeader
            eyebrow="Scales"
            title="Spacing, typography, radius, and elevation"
            description="These are the foundational values to reach for before adding new arbitrary CSS."
          />

          <div className="mt-10 grid gap-6">
            <PreviewBlock title="Spacing scale">
              <div className="grid gap-4">
                {spacingScale.map((space) => (
                  <div
                    key={space.name}
                    className="grid gap-4 md:grid-cols-[9rem_1fr]"
                  >
                    <ScaleLabel name={space.name} token={space.token} />
                    <div className="flex items-center gap-4">
                      <div
                        className="h-6 rounded-[var(--radius-subtle)] bg-accent"
                        style={
                          {
                            width: `var(${space.token})`,
                          } satisfies CSSProperties
                        }
                      />
                      <code className="text-sm text-secondary">
                        var({space.token})
                      </code>
                    </div>
                  </div>
                ))}
              </div>
            </PreviewBlock>

            <PreviewBlock title="Typography scale">
              <div className="grid gap-5">
                {typographyScale.map((type) => (
                  <div
                    key={type.name}
                    className="grid gap-3 border-b border-border-subtle pb-5 last:border-b-0 last:pb-0 md:grid-cols-[9rem_1fr]"
                  >
                    <ScaleLabel name={type.name} token={type.token} />
                    <p
                      className="font-semibold leading-[var(--line-height-tight)] text-primary"
                      style={
                        {
                          fontSize: `var(${type.token})`,
                        } satisfies CSSProperties
                      }
                    >
                      The quick brown fox
                    </p>
                  </div>
                ))}
              </div>
            </PreviewBlock>

            <div className="grid gap-6 lg:grid-cols-2">
              <PreviewBlock title="Line-height scale">
                <div className="grid gap-5">
                  {lineHeights.map((height) => (
                    <div key={height.name} className="grid gap-2">
                      <ScaleLabel name={height.name} token={height.token} />
                      <p
                        className="max-w-xl text-[length:var(--font-size-lg)] text-secondary"
                        style={
                          {
                            lineHeight: `var(${height.token})`,
                          } satisfies CSSProperties
                        }
                      >
                        Premium perception comes from rhythm, precision, and
                        enough space for the content to breathe.
                      </p>
                    </div>
                  ))}
                </div>
              </PreviewBlock>

              <PreviewBlock title="Radius scale">
                <div className="grid gap-4 sm:grid-cols-2">
                  {radiusScale.map((radius) => (
                    <div key={radius.name} className="grid gap-3">
                      <ScaleLabel name={radius.name} token={radius.token} />
                      <div
                        className="h-24 border border-border-subtle bg-muted"
                        style={
                          {
                            borderRadius: `var(${radius.token})`,
                          } satisfies CSSProperties
                        }
                      />
                    </div>
                  ))}
                </div>
              </PreviewBlock>
            </div>

            <PreviewBlock title="Shadow scale">
              <div className="grid gap-5 sm:grid-cols-2">
                {shadows.map((shadow) => (
                  <div
                    key={shadow.name}
                    className="rounded-[var(--radius-medium)] border border-border-subtle bg-card p-6"
                    style={
                      {
                        boxShadow: `var(${shadow.token})`,
                      } satisfies CSSProperties
                    }
                  >
                    <ScaleLabel name={shadow.name} token={shadow.token} />
                  </div>
                ))}
              </div>
            </PreviewBlock>
          </div>
        </Container>
      </Section>

      <Section tone="muted" spacing="spacious">
        <Container width="wide">
          <SectionHeader
            eyebrow="Components"
            title="Reusable primitives and shared components"
            description="Use these component APIs before adding one-off styles. If a needed mode repeats, promote it into a variant."
          />

          <div className="mt-10 grid gap-6">
            <PreviewBlock title="Button variants">
              <div className="grid gap-5">
                {buttonVariants.map((variant) => (
                  <div
                    key={variant}
                    className={`flex flex-wrap items-center gap-4 rounded-[var(--radius-medium)] border border-border-subtle p-5 ${
                      variant === "inverse" ? "bg-inverse" : "bg-section"
                    }`}
                  >
                    <code
                      className={`min-w-24 text-sm ${
                        variant === "inverse"
                          ? "text-inverse-text"
                          : "text-secondary"
                      }`}
                    >
                      {variant}
                    </code>
                    {buttonSizes.map((size) => (
                      <Button
                        key={`${variant}-${size}`}
                        href="#"
                        size={size}
                        variant={variant}
                      >
                        {size}
                      </Button>
                    ))}
                  </div>
                ))}
              </div>
            </PreviewBlock>

            <div className="grid gap-6 lg:grid-cols-2">
              <PreviewBlock title="Badge tones">
                <div className="grid gap-4">
                  {badgeTones.map((tone) => (
                    <div
                      key={tone}
                      className={`flex min-h-16 items-center justify-between gap-4 rounded-[var(--radius-medium)] border border-border-subtle p-4 ${
                        tone === "inverse" || tone === "ghost"
                          ? "bg-inverse text-inverse-text"
                          : "bg-section"
                      }`}
                    >
                      <code className="text-sm opacity-75">{tone}</code>
                      <Badge tone={tone}>{tone} badge</Badge>
                    </div>
                  ))}
                </div>
              </PreviewBlock>

              <PreviewBlock title="Text tones and sizes">
                <div className="grid gap-5">
                  {textTones.map((tone) => (
                    <div
                      key={tone}
                      className={`rounded-[var(--radius-medium)] border border-border-subtle p-4 ${
                        tone === "inverse" ? "bg-inverse" : "bg-section"
                      }`}
                    >
                      <code
                        className={`text-sm ${
                          tone === "inverse"
                            ? "text-inverse-text"
                            : "text-secondary"
                        }`}
                      >
                        tone: {tone}
                      </code>
                      <div className="mt-3 grid gap-2">
                        {textSizes.map((size) => (
                          <Text key={`${tone}-${size}`} size={size} tone={tone}>
                            {size} text for readable supporting copy.
                          </Text>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </PreviewBlock>
            </div>

            <PreviewBlock title="Heading sizes">
              <div className="grid gap-8">
                {headingSizes.map((size) => (
                  <div key={size} className="grid gap-3">
                    <code className="text-sm text-secondary">{size}</code>
                    <Heading as="h3" size={size}>
                      Heading preview sample
                    </Heading>
                  </div>
                ))}
              </div>
            </PreviewBlock>

            <PreviewBlock title="Card">
              <div className="grid gap-4 md:grid-cols-3">
                <Card>
                  <Badge tone="proof">Default</Badge>
                  <Heading as="h3" size="title" className="mt-5">
                    Card primitive
                  </Heading>
                  <Text className="mt-3">
                    Uses tokenized radius, border, surface, spacing, and subtle
                    elevation.
                  </Text>
                </Card>
                <Card className="bg-muted shadow-none">
                  <Badge>Muted override</Badge>
                  <Heading as="h3" size="title" className="mt-5">
                    Local surface
                  </Heading>
                  <Text className="mt-3">
                    Local classes can adjust a card when the pattern is still
                    section-specific.
                  </Text>
                </Card>
                <Card className="bg-inverse text-inverse-text [&_h3]:text-inverse-text [&_p]:text-white/75">
                  <Badge tone="inverse">Inverse</Badge>
                  <Heading as="h3" size="title" className="mt-5">
                    Dark surface
                  </Heading>
                  <Text className="mt-3">
                    Repeated dark card usage should become a proper variant.
                  </Text>
                </Card>
              </div>
            </PreviewBlock>

            <PreviewBlock title="Section tones and spacing">
              <div className="grid gap-5">
                {sectionTones.map((tone) => (
                  <div key={tone} className="grid gap-3">
                    <code className="text-sm text-secondary">tone: {tone}</code>
                    <div className="grid gap-3 md:grid-cols-4">
                      {sectionSpacings.map((spacing) => (
                        <Section
                          key={`${tone}-${spacing}`}
                          tone={tone}
                          spacing={spacing}
                          className="rounded-[var(--radius-medium)] border border-border-subtle"
                        >
                          <div className="px-4">
                            <p className="font-semibold">{spacing}</p>
                            <p className="mt-1 text-sm opacity-75">
                              spacing preset
                            </p>
                          </div>
                        </Section>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </PreviewBlock>

            <PreviewBlock title="Container widths">
              <div className="grid gap-5">
                {containerWidths.map((width) => (
                  <div key={width} className="grid gap-2">
                    <code className="text-sm text-secondary">
                      width: {width}
                    </code>
                    <div className="rounded-[var(--radius-medium)] bg-muted py-4">
                      <Container width={width}>
                        <div className="rounded-[var(--radius-medium)] bg-accent p-4 text-sm font-medium text-inverse-text">
                          Container {width}
                        </div>
                      </Container>
                    </div>
                  </div>
                ))}
              </div>
            </PreviewBlock>

            <div className="grid gap-6 lg:grid-cols-2">
              <PreviewBlock title="SectionHeader">
                <div className="grid gap-10">
                  <SectionHeader
                    eyebrow="Left aligned"
                    title="Section heading block"
                    description="Reusable intro pattern for page sections."
                  />
                  <SectionHeader
                    eyebrow="Centered"
                    title="Centered section heading"
                    description="Use this when a section needs a balanced editorial intro."
                    align="center"
                  />
                </div>
              </PreviewBlock>

              <PreviewBlock title="SocialLinks">
                <div className="grid gap-5">
                  <div className="rounded-[var(--radius-medium)] bg-inverse p-6 text-inverse-text">
                    <code className="text-sm opacity-75">tone: light</code>
                    <div className="mt-4">
                      <SocialLinks items={siteConfig.socialLinks} />
                    </div>
                  </div>
                  <div className="rounded-[var(--radius-medium)] bg-muted p-6">
                    <code className="text-sm text-secondary">tone: muted</code>
                    <div className="mt-4">
                      <SocialLinks
                        items={siteConfig.socialLinks}
                        tone="muted"
                      />
                    </div>
                  </div>
                </div>
              </PreviewBlock>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
