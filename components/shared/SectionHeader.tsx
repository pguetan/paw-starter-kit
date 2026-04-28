import { Badge, Heading, Text } from "@/components/ui";
import { cn } from "@/lib/utils/cn";

type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" && "mx-auto items-center text-center",
        className,
      )}
    >
      {eyebrow ? <Badge tone="proof">{eyebrow}</Badge> : null}
      <Heading className={align === "center" ? "mx-auto" : undefined}>
        {title}
      </Heading>
      {description ? (
        <Text size="lg" className={align === "center" ? "mx-auto" : undefined}>
          {description}
        </Text>
      ) : null}
    </div>
  );
}
