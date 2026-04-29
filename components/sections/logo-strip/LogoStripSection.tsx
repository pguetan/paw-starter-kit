import Image from "next/image";

import { Container, Section } from "@/components/ui";

export type LogoStripItem = {
  src: string;
  alt: string;
};

export type LogoStripSectionProps = {
  eyebrow: string;
  items: LogoStripItem[];
};

export function LogoStripSection({ eyebrow, items }: LogoStripSectionProps) {
  return (
    <Section tone="default" spacing="compact">
      <Container width="wide" className="text-center">
        <p className="text-sm font-medium">{eyebrow}</p>
        <div className="mx-auto mt-10 flex max-w-4xl flex-wrap items-center justify-center gap-x-12 gap-y-8">
          {items.map((item) => (
            <Image
              key={item.src}
              src={item.src}
              alt={item.alt}
              width={170}
              height={64}
              className="h-14 w-auto opacity-90"
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}
