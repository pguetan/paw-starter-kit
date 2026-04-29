import { Card, Container, Section, Text } from "@/components/ui";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { cn } from "@/lib/utils/cn";

import type { ServicesSectionProps } from "./services.schema";
import { servicesVariants } from "./services.variants";

export function ServicesSection({
  eyebrow,
  title,
  description,
  items,
  variant = "grid",
  tone = "default",
}: ServicesSectionProps) {
  const classes = servicesVariants[variant];
  const isProgramCards = variant === "programCards";

  return (
    <Section tone={tone} spacing="default" id="programs">
      <Container width="wide" className="flex flex-col gap-12">
        {isProgramCards ? (
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1fr] lg:items-end">
            <SectionHeader
              eyebrow={eyebrow}
              title={title}
              align={classes.header}
            />
            {description ? (
              <Text className="max-w-md lg:justify-self-end">
                {description}
              </Text>
            ) : null}
          </div>
        ) : (
          <SectionHeader
            eyebrow={eyebrow}
            title={title}
            description={description}
            align={classes.header}
          />
        )}

        <div className={classes.grid}>
          {items.map((item) => (
            <Card
              key={item.title}
              className={cn(
                "flex flex-col justify-between gap-8",
                classes.card,
              )}
            >
              <div className="flex items-start justify-between gap-4">
                {item.label ? (
                  <span
                    className={cn(
                      "rounded-[var(--radius-pill)] px-3 py-1 text-xs font-semibold",
                      isProgramCards
                        ? "bg-white text-primary"
                        : "bg-muted text-primary",
                    )}
                  >
                    {item.label}
                  </span>
                ) : null}
                {isProgramCards ? (
                  <span
                    className="flex size-10 items-center justify-center rounded-full bg-white text-xl leading-none text-primary"
                    aria-hidden="true"
                  >
                    ↗
                  </span>
                ) : null}
              </div>
              <div>
                <h3 className="text-[var(--font-size-xl)] font-semibold leading-[var(--line-height-snug)]">
                  {item.title}
                </h3>
                <Text
                  className={cn(
                    "mt-4",
                    isProgramCards ? "text-white/80" : undefined,
                  )}
                >
                  {item.description}
                </Text>
              </div>
              {item.href && item.ctaLabel ? (
                <a
                  href={item.href}
                  className="text-sm font-medium text-accent underline-offset-4 hover:underline"
                >
                  {item.ctaLabel}
                </a>
              ) : null}
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}
