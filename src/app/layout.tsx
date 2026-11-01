import type { Metadata } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { studioMetadata, generateStudioJsonLd } from "@/lib/seo";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(studioMetadata.url),
  title: {
    default: "PARAM SANTI | Residential & Commercial Interior Design Studio",
    template: "%s | PARAM SANTI Studio",
  },
  description:
    "PARAM SANTI is an interior design studio led by Shivam. We create beautiful and comfortable spaces for homes and businesses.",
  keywords: studioMetadata.serviceKeywords,
  authors: [{ name: "Shivam", url: studioMetadata.url }],
  creator: "PARAM SANTI Studio",
  publisher: "PARAM SANTI Studio",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: studioMetadata.url,
    title: "PARAM SANTI — Beautiful Spaces. Designed for You.",
    description:
      "We create beautiful and comfortable spaces for homes and businesses. Full interior design services led by Shivam.",
    siteName: "PARAM SANTI",
    images: [
      {
        url: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "PARAM SANTI Interior Design Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PARAM SANTI | Interior Design Studio",
    description:
      "Designing Spaces. Creating Experiences. Beautiful interior design for homes and businesses led by Shivam.",
    images: ["https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80"],
  },
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = generateStudioJsonLd();

  return (
    <html lang="en" className={`${cormorant.variable} ${jakarta.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-[#F8F6F1] text-[#242424] font-sans-clean antialiased selection:bg-[#A58A68] selection:text-white">
        {children}
      </body>
    </html>
  );
}
