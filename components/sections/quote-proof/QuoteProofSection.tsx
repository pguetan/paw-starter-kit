import { Container, Section, Text } from "@/components/ui";

export type QuoteProofSectionProps = {
  quote: string;
  name: string;
  role: string;
};

export function QuoteProofSection({
  quote,
  name,
  role,
}: QuoteProofSectionProps) {
  return (
    <Section tone="default" spacing="default">
      <Container width="narrow" className="text-center">
        <p className="text-6xl font-bold leading-none" aria-hidden="true">
          ”
        </p>
        <blockquote className="mx-auto max-w-4xl text-[var(--font-size-3xl)] leading-[var(--line-height-snug)] md:text-[var(--font-size-4xl)]">
          {quote}
        </blockquote>
        <footer className="mt-10 flex items-center justify-center gap-4 text-left">
          <span
            className="block size-16 rounded-full bg-inverse"
            aria-hidden="true"
          />
          <div>
            <p className="font-semibold">{name}</p>
            <Text size="sm">{role}</Text>
          </div>
        </footer>
      </Container>
    </Section>
  );
}
