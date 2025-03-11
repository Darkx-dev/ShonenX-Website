import type React from "react";
import type { Metadata } from "next";
import "./globals.css";

// Enhanced metadata for SEO
export const metadata: Metadata = {
  // Basic metadata
  title: {
    default: "ShonenX - Anime Streaming Reimagined",
    template: "%s | ShonenX", // For dynamic page titles (e.g., "About | ShonenX")
  },
  description:
    "Discover ShonenX, an open-source anime streaming app built with Flutter. Enjoy seamless streaming on mobile and desktop with a modern, user-friendly interface designed for anime fans.",
  keywords: [
    "ShonenX",
    "anime streaming",
    "open-source",
    "Flutter app",
    "anime app",
    "streaming platform",
    "mobile streaming",
    "desktop streaming",
  ],
  // Open Graph (for social media sharing)
  openGraph: {
    title: "ShonenX - Anime Streaming Reimagined",
    description:
      "Stream your favorite anime with ShonenX, an open-source app built with Flutter. Available on mobile and desktop.",
    url: "https://www.shonenx.com", // Replace with your actual domain
    siteName: "ShonenX",
    images: [
      {
        url: "https://www.shonenx.com/og-image.jpg", // Replace with your actual image URL
        width: 1200,
        height: 630,
        alt: "ShonenX Anime Streaming App",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  // Twitter Cards
  twitter: {
    card: "summary_large_image",
    title: "ShonenX - Anime Streaming Reimagined",
    description:
      "Stream anime seamlessly with ShonenX, an open-source Flutter app for mobile and desktop.",
    images: ["https://www.shonenx.com/twitter-image.jpg"], // Replace with your actual image URL
  },
  // Robots and indexing
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  // Verification for search engines (optional)
  // Example: Google Search Console verification
  // verification: {
  //   google: "your-google-verification-code",
  // },
};

// Structured data (JSON-LD) for rich snippets
const structuredData = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "ShonenX",
  description:
    "ShonenX is an open-source anime streaming app built with Flutter, offering a seamless experience on mobile and desktop devices.",
  applicationCategory: "Entertainment",
  operatingSystem: "Android, Windows",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  url: "https://www.shonenx.com", // Replace with your actual domain
  image: "https://www.shonenx.com/og-image.jpg", // Replace with your actual image URL
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Character encoding */}
        <meta charSet="utf-8" />
        {/* Viewport for responsive design */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Preconnect to critical resources (optional) */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        {/* Structured data (JSON-LD) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}