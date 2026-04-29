import { Button, Container, Section, Text } from "@/components/ui";

export type LeadMagnetSectionProps = {
  eyebrow: string;
  title: string;
  subtitle: string;
  description: string;
};

export function LeadMagnetSection({
  eyebrow,
  title,
  subtitle,
  description,
}: LeadMagnetSectionProps) {
  return (
    <Section tone="default" spacing="default" id="downloads">
      <Container width="wide">
        <div className="grid min-h-[36rem] gap-12 overflow-hidden rounded-[2rem] bg-inverse p-8 text-inverse-text md:p-14 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div aria-hidden="true" />
          <div className="min-w-0">
            <p className="text-sm font-bold uppercase">{eyebrow}</p>
            <h2 className="mt-4 text-[var(--font-size-4xl)] font-bold leading-[var(--line-height-tight)] md:text-[var(--font-size-5xl)]">
              {title}
            </h2>
            <p className="mt-4 text-[var(--font-size-lg)] font-semibold leading-[var(--line-height-snug)]">
              {subtitle}
            </p>
            <Text className="mt-6 text-white/76">{description}</Text>

            <form className="mt-8 w-full max-w-full rounded-[1.5rem] bg-white/12 p-6">
              <p className="font-semibold">Enter your details</p>
              <div className="mt-5 grid gap-3">
                <input
                  className="min-h-12 w-full min-w-0 rounded-[var(--radius-medium)] border border-white/10 bg-black px-4 text-sm text-inverse-text placeholder:text-white/35"
                  name="name"
                  placeholder="Your name"
                  type="text"
                />
                <input
                  className="min-h-12 w-full min-w-0 rounded-[var(--radius-medium)] border border-white/10 bg-black px-4 text-sm text-inverse-text placeholder:text-white/35"
                  name="email"
                  placeholder="Your email"
                  type="email"
                />
                <Button className="w-full" type="button" variant="inverse">
                  Download now
                </Button>
              </div>
              <p className="mt-5 text-center text-xs text-white/40">
                Your information will never be shared.
              </p>
            </form>
          </div>
        </div>
      </Container>
    </Section>
  );
}
