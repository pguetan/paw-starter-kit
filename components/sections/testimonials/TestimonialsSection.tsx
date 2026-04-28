import { Card, Container, Section, Text } from "@/components/ui";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { cn } from "@/lib/utils/cn";

import type { TestimonialsSectionProps } from "./testimonials.schema";
import { testimonialsVariants } from "./testimonials.variants";

export function TestimonialsSection({
  eyebrow,
  title,
  description,
  items,
  variant = "grid",
  tone = "default",
}: TestimonialsSectionProps) {
  const classes = testimonialsVariants[variant];
  const isInverse = tone === "inverse";

  return (
    <Section tone={tone} spacing="default">
      <Container width="wide" className="flex flex-col gap-12">
        <SectionHeader
          eyebrow={eyebrow}
          title={title}
          description={description}
          align={classes.header}
          className={
            isInverse
              ? "[&_h2]:text-inverse-text [&_p]:text-white/75"
              : undefined
          }
        />

        <div className={classes.list}>
          {items.map((item) => (
            <Card
              key={`${item.name}-${item.quote}`}
              className={cn(
                "flex flex-col justify-between gap-8",
                classes.item,
                isInverse && "border-white/15 bg-white/10 text-inverse-text",
              )}
            >
              <blockquote
                className={cn(
                  "text-[var(--font-size-lg)] leading-[var(--line-height-relaxed)] text-primary",
                  isInverse && "text-inverse-text",
                )}
              >
                &quot;{item.quote}&quot;
              </blockquote>
              <footer>
                <p className="font-semibold">{item.name}</p>
                {item.role ? (
                  <Text
                    as="p"
                    size="sm"
                    className={isInverse ? "text-white/70" : undefined}
                  >
                    {item.role}
                  </Text>
                ) : null}
              </footer>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}
