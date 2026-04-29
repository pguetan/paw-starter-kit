export const siteConfig = {
  name: "Premium Authority Website System",
  shortName: "PAW Starter",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  description:
    "A reusable implementation system for premium authority websites.",
  locale: "en_US",
  ogImage: "/og/default-og.svg",
  creator: "Premium Authority Website System",
  brand: {
    logo: "/images/brand/logo.svg",
    logoMark: "/images/brand/logo-mark.svg",
    wordmark: "/images/brand/wordmark.svg",
  },
  socialLinks: [
    {
      label: "Facebook",
      href: "https://facebook.com",
      icon: "/icons/social/facebook.svg",
    },
    {
      label: "LinkedIn",
      href: "https://linkedin.com",
      icon: "/icons/social/linkedin.svg",
    },
    {
      label: "YouTube",
      href: "https://youtube.com",
      icon: "/icons/social/youtube.svg",
    },
    {
      label: "X",
      href: "https://x.com",
      icon: "/icons/social/x.svg",
    },
  ],
  legalLinks: [
    {
      label: "Privacy Policy",
      href: "/privacy",
    },
    {
      label: "Terms Of Use",
      href: "/terms",
    },
  ],
  robots: {
    index: true,
    follow: true,
  },
};
