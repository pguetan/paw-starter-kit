export const siteConfig = {
  name: "Premium Authority Website System",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  description:
    "A reusable implementation system for premium authority websites.",
  locale: "en_US",
  ogImage: "/og/default-og.svg",
  creator: "Premium Authority Website System",
  robots: {
    index: true,
    follow: true,
  },
};
