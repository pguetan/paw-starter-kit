import { Button, Container, Section, Text } from "@/components/ui";

export type CtaSectionProps = {
  title: string;
  description: string;
  cta: {
    label: string;
    href: string;
  };
};

export function CtaSection({ title, description, cta }: CtaSectionProps) {
  return (
    <Section tone="inverse" spacing="spacious">
      <Container width="wide" className="text-center">
        <h2 className="mx-auto max-w-3xl text-[var(--font-size-4xl)] font-bold leading-[var(--line-height-tight)] text-inverse-text md:text-[var(--font-size-5xl)]">
          {title}
        </h2>
        <Text className="mx-auto mt-6 max-w-xl text-white/78">
          {description}
        </Text>
        <Button
          className="mt-8 bg-white !text-primary hover:bg-white/85"
          href={cta.href}
          variant="secondary"
        >
          {cta.label}
        </Button>
      </Container>
    </Section>
  );
}
