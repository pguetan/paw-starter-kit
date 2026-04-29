import {
  Badge,
  Button,
  Card,
  Container,
  Heading,
  Section,
  Text,
} from "@/components/ui";
import { cn } from "@/lib/utils/cn";

import type { HeroSectionProps } from "./hero.schema";
import { heroVariants } from "./hero.variants";

export function HeroSection({
  eyebrow,
  title,
  description,
  primaryCta,
  secondaryCta,
  proofItems,
  variant = "split",
  tone = "default",
}: HeroSectionProps) {
  const classes = heroVariants[variant];
  const isPanel = variant === "panel";
  const isInverse = tone === "inverse" || isPanel;

  if (isPanel) {
    return (
      <Section
        tone="default"
        spacing="none"
        className="min-h-screen p-3 md:p-4"
      >
        <Container width="full" className={cn("px-0", classes.container)}>
          <div
            className={cn(
              "flex max-w-[var(--container-narrow)] flex-col gap-6",
              classes.content,
            )}
          >
            {eyebrow ? <Badge tone="ghost">{eyebrow}</Badge> : null}
            <Heading as="h1" size="display" className="text-inverse-text">
              {title}
            </Heading>
          </div>

          <div className="flex max-w-md flex-col items-start gap-6 lg:justify-self-end">
            {description ? (
              <Text size="lg" tone="inverse">
                {description}
              </Text>
            ) : null}
            {primaryCta || secondaryCta ? (
              <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
                {primaryCta ? (
                  <Button
                    href={primaryCta.href}
                    size="lg"
                    variant={primaryCta.variant ?? "inverse"}
                  >
                    {primaryCta.label}
                  </Button>
                ) : null}
                {secondaryCta ? (
                  <Button
                    href={secondaryCta.href}
                    size="lg"
                    variant={secondaryCta.variant ?? "secondary"}
                    className="border-white/80 bg-transparent text-inverse-text hover:bg-white/10"
                  >
                    {secondaryCta.label}
                  </Button>
                ) : null}
              </div>
            ) : null}
          </div>
        </Container>
      </Section>
    );
  }

  return (
    <Section tone={tone} spacing="spacious">
      <Container width="wide" className={classes.container}>
        <div
          className={cn(
            "flex max-w-[var(--container-narrow)] flex-col gap-6",
            classes.content,
          )}
        >
          {eyebrow ? (
            <Badge tone={isInverse ? "inverse" : "proof"}>{eyebrow}</Badge>
          ) : null}
          <Heading
            as="h1"
            size="display"
            className={isInverse ? "text-inverse-text" : undefined}
          >
            {title}
          </Heading>
          {description ? (
            <Text
              size="lg"
              tone={isInverse ? "inverse" : "secondary"}
              className={variant === "centered" ? "mx-auto" : undefined}
            >
              {description}
            </Text>
          ) : null}
          {primaryCta || secondaryCta ? (
            <div className="flex flex-col gap-3 sm:flex-row">
              {primaryCta ? (
                <Button
                  href={primaryCta.href}
                  size="lg"
                  variant={primaryCta.variant ?? "primary"}
                >
                  {primaryCta.label}
                </Button>
              ) : null}
              {secondaryCta ? (
                <Button
                  href={secondaryCta.href}
                  size="lg"
                  variant={secondaryCta.variant ?? "secondary"}
                >
                  {secondaryCta.label}
                </Button>
              ) : null}
            </div>
          ) : null}
        </div>

        {proofItems?.length && !isPanel ? (
          <div
            className={classes.proofGrid}
            aria-label="Credibility highlights"
          >
            {proofItems.map((item) => (
              <Card
                key={`${item.value}-${item.label}`}
                className={cn(
                  "bg-card/90",
                  isInverse && "border-white/15 bg-white/10 text-inverse-text",
                )}
              >
                <p className="text-[var(--font-size-3xl)] font-semibold leading-[var(--line-height-tight)]">
                  {item.value}
                </p>
                <p
                  className={cn(
                    "mt-3 text-sm leading-[var(--line-height-normal)] text-secondary",
                    isInverse && "text-white/75",
                  )}
                >
                  {item.label}
                </p>
              </Card>
            ))}
          </div>
        ) : null}
      </Container>
    </Section>
  );
}
