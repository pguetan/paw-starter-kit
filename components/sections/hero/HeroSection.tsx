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
  const isInverse = tone === "inverse";

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

        {proofItems?.length ? (
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
