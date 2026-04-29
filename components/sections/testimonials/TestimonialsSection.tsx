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
  const isRail = variant === "rail";

  return (
    <Section tone={tone} spacing="default">
      <Container width="wide" className="flex flex-col gap-12">
        <div className="flex items-end justify-between gap-8">
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
          {isRail ? (
            <div
              className="hidden items-center gap-3 lg:flex"
              aria-hidden="true"
            >
              <span className="flex size-10 items-center justify-center rounded-full bg-inverse text-inverse-text">
                ‹
              </span>
              <span className="flex size-10 items-center justify-center rounded-full bg-inverse text-inverse-text">
                ›
              </span>
            </div>
          ) : null}
        </div>

        <div className={classes.list}>
          {items.map((item, index) => (
            <Card
              key={`${item.name}-${item.role ?? "testimonial"}-${index}`}
              className={cn(
                "flex flex-col justify-between gap-8",
                classes.item,
                isInverse && "border-white/15 bg-white/10 text-inverse-text",
                isRail && "border-transparent bg-inverse text-inverse-text",
              )}
            >
              {isRail ? (
                <span
                  className="ml-auto flex size-10 items-center justify-center rounded-full bg-white text-primary"
                  aria-hidden="true"
                >
                  ▶
                </span>
              ) : null}
              <blockquote
                className={cn(
                  "text-[var(--font-size-lg)] leading-[var(--line-height-relaxed)] text-primary",
                  (isInverse || isRail) && "text-inverse-text",
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
                    className={
                      isInverse || isRail ? "text-white/70" : undefined
                    }
                  >
                    {item.role}
                  </Text>
                ) : null}
              </footer>
            </Card>
          ))}
        </div>
        {isRail ? (
          <div className="flex justify-center gap-3" aria-hidden="true">
            {items.map((item, index) => (
              <span
                className={cn(
                  "size-3 rounded-full border border-primary",
                  index === 0 && "bg-primary",
                )}
                key={`${item.name}-${index}`}
              />
            ))}
          </div>
        ) : null}
      </Container>
    </Section>
  );
}
