import { Container, Section, Text } from "@/components/ui";

export type BlogPreviewItem = {
  title: string;
  excerpt?: string;
  date: string;
  category: string;
};

export type BlogPreviewSectionProps = {
  eyebrow: string;
  title: string;
  ctaLabel: string;
  posts: BlogPreviewItem[];
};

export function BlogPreviewSection({
  eyebrow,
  title,
  ctaLabel,
  posts,
}: BlogPreviewSectionProps) {
  const [featured, ...secondaryPosts] = posts;

  return (
    <Section tone="default" spacing="default" id="blog">
      <Container width="wide">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_0.8fr] lg:items-end">
          <div>
            <p className="text-sm font-bold uppercase">{eyebrow}</p>
            <h2 className="mt-4 max-w-xl text-[var(--font-size-4xl)] font-bold leading-[var(--line-height-tight)] md:text-[var(--font-size-5xl)]">
              {title}
            </h2>
          </div>
          <a
            className="justify-self-start text-sm font-bold uppercase lg:justify-self-end"
            href="/blog"
          >
            {ctaLabel} →
          </a>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-[1.2fr_1.3fr]">
          {featured ? (
            <article>
              <div className="min-h-[21rem] rounded-[1.5rem] bg-inverse" />
              <PostMeta post={featured} className="mt-8" />
              <h3 className="mt-4 text-[var(--font-size-2xl)] font-bold leading-[var(--line-height-snug)] md:text-[var(--font-size-3xl)]">
                {featured.title}
              </h3>
              {featured.excerpt ? (
                <Text className="mt-4">{featured.excerpt}</Text>
              ) : null}
            </article>
          ) : null}

          <div className="grid gap-5">
            {secondaryPosts.map((post) => (
              <article
                key={post.title}
                className="grid gap-5 md:grid-cols-[0.9fr_1fr] md:items-center"
              >
                <div className="min-h-40 rounded-[1.25rem] bg-inverse" />
                <div>
                  <PostMeta post={post} />
                  <h3 className="mt-4 text-[var(--font-size-2xl)] font-bold leading-[var(--line-height-snug)]">
                    {post.title}
                  </h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}

function PostMeta({
  post,
  className,
}: {
  post: BlogPreviewItem;
  className?: string;
}) {
  return (
    <p className={className}>
      <span className="text-sm text-secondary">{post.date}</span>
      <span className="mx-3" aria-hidden="true">
        •
      </span>
      <span className="text-sm text-secondary">{post.category}</span>
    </p>
  );
}
