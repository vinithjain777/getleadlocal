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
    "Google Ads, Facebook/Instagram Ads, and Local SEO for plumbers, HVAC companies, roofers, and local service businesses. Get more calls and booked jobs.",
  keywords: [
    "google ads for plumbers",
    "local seo for contractors",
    "facebook ads for hvac",
    "lead generation local business",
    "google ads local service",
    "contractor marketing",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    title: "GetLeadLocal | Google Ads, Facebook Ads & Local SEO",
    description:
      "Google Ads, Facebook/Instagram Ads, and Local SEO specialists for local service businesses. More calls, more leads, more jobs.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "GetLeadLocal",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: "C0_PtJ7to003_TlMIMJvfz8LQT5tN4Yrv_gnRPhcZXk",
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
