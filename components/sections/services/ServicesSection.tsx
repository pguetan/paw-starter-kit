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

  return (
    <Section tone={tone} spacing="default">
      <Container width="wide" className="flex flex-col gap-12">
        <SectionHeader
          eyebrow={eyebrow}
          title={title}
          description={description}
          align={classes.header}
        />

        <div className={classes.grid}>
          {items.map((item) => (
            <Card
              key={item.title}
              className={cn(
                "flex flex-col justify-between gap-8",
                classes.card,
              )}
            >
              <div>
                <h3 className="text-[var(--font-size-xl)] font-semibold leading-[var(--line-height-snug)]">
                  {item.title}
                </h3>
                <Text className="mt-4">{item.description}</Text>
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
