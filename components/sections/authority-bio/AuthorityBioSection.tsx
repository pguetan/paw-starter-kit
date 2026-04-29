import { SocialLinks } from "@/components/shared";
import { Button, Container, Section, Text } from "@/components/ui";
import { siteConfig } from "@/data/site";

export type AuthorityMetric = {
  value: string;
  label: string;
};

export type AuthorityBioSectionProps = {
  eyebrow: string;
  title: string;
  description: string[];
  cta: {
    label: string;
    href: string;
  };
  metrics: AuthorityMetric[];
};

export function AuthorityBioSection({
  eyebrow,
  title,
  description,
  cta,
  metrics,
}: AuthorityBioSectionProps) {
  return (
    <Section tone="default" spacing="default" id="about">
      <Container width="wide">
        <div className="grid gap-4 lg:grid-cols-[1.35fr_0.85fr]">
          <div className="flex min-h-[42rem] flex-col justify-end rounded-[2rem] bg-inverse p-8 text-inverse-text md:p-14">
            <p className="mb-5 text-sm font-semibold">Connect with example:</p>
            <SocialLinks items={siteConfig.socialLinks} />
          </div>

          <div className="grid gap-4">
            <dl className="grid grid-cols-2 gap-x-10 gap-y-8 px-2 py-4">
              {metrics.map((metric) => (
                <div key={metric.label}>
                  <dd className="text-[var(--font-size-4xl)] font-bold leading-[var(--line-height-tight)] md:text-[var(--font-size-5xl)]">
                    {metric.value}
                  </dd>
                  <dt className="mt-1 text-[var(--font-size-sm)] leading-none">
                    {metric.label}
                  </dt>
                </div>
              ))}
            </dl>

            <article className="rounded-[2rem] bg-inverse p-8 text-inverse-text md:p-12">
              <p className="text-sm font-bold uppercase">{eyebrow}</p>
              <h2 className="mt-4 text-[var(--font-size-4xl)] font-bold leading-[var(--line-height-tight)] md:text-[var(--font-size-5xl)]">
                {title}
              </h2>
              <div className="mt-8 flex flex-col gap-5">
                {description.map((paragraph) => (
                  <Text key={paragraph} className="text-white/78">
                    {paragraph}
                  </Text>
                ))}
              </div>
              <Button className="mt-8" href={cta.href} variant="inverse">
                {cta.label}
              </Button>
            </article>
          </div>
        </div>
      </Container>
    </Section>
  );
}
