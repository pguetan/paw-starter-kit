import type { ReactNode } from "react";

import { SiteFooter, SiteHeader } from "@/components/navigation";
import { buildMetadata } from "@/lib/seo/metadata";
import { organizationJsonLd } from "@/lib/seo/structured-data";

import "./globals.css";

export const metadata = buildMetadata();

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd()),
          }}
        />
      </body>
    </html>
  );
}
