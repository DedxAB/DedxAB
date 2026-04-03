import type { Metadata } from "next";
import { Manrope, Sora, VT323 } from "next/font/google";
import type { ReactNode } from "react";

import "./globals.css";

import { portfolioConfig } from "@/config/portfolio";

const lightDisplayFont = Manrope({
  subsets: ["latin"],
  variable: "--font-display-light"
});

const darkDisplayFont = Sora({
  subsets: ["latin"],
  variable: "--font-display-dark"
});

const pixelFont = VT323({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-pixel"
});

export const metadata: Metadata = {
  metadataBase: new URL(portfolioConfig.seo.url),
  title: {
    default: portfolioConfig.seo.siteTitle,
    template: portfolioConfig.seo.titleTemplate
  },
  description: portfolioConfig.seo.description,
  keywords: portfolioConfig.seo.keywords,
  openGraph: {
    title: portfolioConfig.seo.siteTitle,
    description: portfolioConfig.seo.description,
    url: portfolioConfig.seo.url,
    siteName: portfolioConfig.seo.siteTitle,
    images: [{ url: portfolioConfig.seo.ogImage, width: 1200, height: 630 }],
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: portfolioConfig.seo.siteTitle,
    description: portfolioConfig.seo.description,
    images: [portfolioConfig.seo.ogImage]
  }
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>): React.JSX.Element {
  return (
    <html lang="en" className="dark">
      <body
        className={`${lightDisplayFont.variable} ${darkDisplayFont.variable} ${pixelFont.variable} bg-background font-display text-foreground antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
