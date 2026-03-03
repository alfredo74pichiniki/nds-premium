import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { CookieConsentBanner } from "@/components/ui/CookieConsentBanner";

const inter = Inter({
  subsets: ["latin"],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-inter'
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nestdigitalstudio.com"),
  title: {
    default: "Nest Digital Studio | Expert Tech Reviews Powered by AI",
    template: "%s | Nest Digital Studio",
  },
  description: "In-depth, unbiased analysis of the best technology products. AI-powered recommendations based on 50,000+ verified user reviews.",
  keywords: "tech reviews, product recommendations, AI assistant, buying guides, best products 2026",
  verification: {
    google: "9-hbkjkJzJhzqRenz4lVK6fsDq-drky3PSzzAwiDRWU",
  },
  openGraph: {
    type: "website",
    siteName: "Nest Digital Studio",
    title: "Nest Digital Studio | Expert Tech Reviews Powered by AI",
    description: "In-depth, unbiased analysis of the best technology products. AI-powered recommendations based on 50,000+ verified user reviews.",
    url: "https://nestdigitalstudio.com",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Nest Digital Studio" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nest Digital Studio | Expert Tech Reviews Powered by AI",
    description: "In-depth, unbiased analysis of the best technology products. AI-powered recommendations based on 50,000+ verified user reviews.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://nestdigitalstudio.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        {/* Google Analytics GA4 — G-GZHJ56RTYQ */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-GZHJ56RTYQ"
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-GZHJ56RTYQ');
          `}
        </Script>
      </head>
      <body className={`${inter.variable} font-sans antialiased bg-[#0a0a0a] text-white min-h-screen animated-bg-orbs`}>
        {children}
        <CookieConsentBanner />
      </body>
    </html>
  );
}
