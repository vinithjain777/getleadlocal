import type { Metadata } from "next";
import { GeistSans, GeistMono } from "geist/font";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { StickyMobileCTA } from "@/components/sticky-mobile-cta";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default: "GetLeadLocal | Generate More Qualified Leads",
    template: "%s | GetLeadLocal",
  },
  description:
    "Digital marketing agency helping local service businesses generate more qualified leads through Google Ads, Meta Ads, Local SEO, and AI-powered automation.",
  keywords: [
    "lead generation",
    "digital marketing",
    "local seo",
    "google ads",
    "plumbing leads",
    "roofing leads",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    title: "GetLeadLocal | Generate More Qualified Leads",
    description:
      "Digital marketing agency for local service businesses. Google Ads, Meta Ads, Local SEO, AI Automation.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "GetLeadLocal",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@getleadlocal",
    creator: "@getleadlocal",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: SITE_CONFIG.name,
  url: SITE_CONFIG.url,
  description: SITE_CONFIG.description,
  areaServed: "US",
  priceRange: "$1500-$5000",
  serviceType: ["Digital Marketing", "Lead Generation", "Google Ads", "Meta Ads", "Local SEO"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href={SITE_CONFIG.url} />
      </head>
      <body className={`${GeistSans.variable} ${GeistMono.variable} font-sans antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <StickyMobileCTA />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
