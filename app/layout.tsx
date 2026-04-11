import type { Metadata, Viewport } from 'next';
import { DM_Sans, Playfair_Display } from 'next/font/google';
import type { ReactNode } from 'react';

import './globals.css';

import { portfolioConfig } from '@/config/portfolio';

const bodyFont = DM_Sans({
  subsets: ["latin"],
  weight: ['400', '500', '700'],
  variable: '--font-body',
});

const displayFont = Playfair_Display({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-display',
});

export const metadata: Metadata = {
  metadataBase: new URL(portfolioConfig.seo.url),
  title: {
    default: portfolioConfig.seo.siteTitle,
    template: portfolioConfig.seo.titleTemplate,
  },
  description: portfolioConfig.seo.description,
  keywords: portfolioConfig.seo.keywords,
  openGraph: {
    title: portfolioConfig.seo.siteTitle,
    description: portfolioConfig.seo.description,
    url: portfolioConfig.seo.url,
    siteName: portfolioConfig.seo.siteTitle,
    images: [{ url: portfolioConfig.seo.ogImage, width: 1200, height: 630 }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: portfolioConfig.seo.siteTitle,
    description: portfolioConfig.seo.description,
    images: [portfolioConfig.seo.ogImage],
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f7f7f7' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0a0a' },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>): React.JSX.Element {
  return (
    <html lang="en" className="dark">
      <body
        className={`${bodyFont.variable} ${displayFont.variable} bg-background font-body text-foreground antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
