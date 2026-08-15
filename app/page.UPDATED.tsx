import type { Metadata } from "next";
import { Hero } from "@/components/hero";
import { TrustBar } from "@/components/trust-bar";
import { Industries } from "@/components/industries";
import { Services } from "@/components/services";
import { WhyChooseUs } from "@/components/why-choose-us";
import { Process } from "@/components/process";
import { MarketingTech } from "@/components/marketing-tech";
import { FAQ } from "@/components/faq";
import { FinalCTA } from "@/components/final-cta";

export const metadata: Metadata = {
  title: "Generate More Qualified Leads For Your Local Business | GetLeadLocal",
  description: "Digital marketing agency specializing in Google Ads, Meta Ads, and Local SEO for plumbers, roofers, HVAC companies, dentists, contractors, and local service businesses. Get more booked jobs with proven lead generation strategies.",
  keywords: [
    "lead generation agency",
    "Google Ads for local businesses",
    "local SEO services",
    "plumber marketing",
    "HVAC marketing",
    "contractor lead generation",
    "Meta Ads for service businesses",
    "digital marketing for contractors",
    "local business marketing",
  ],
  alternates: {
    canonical: "https://www.getleadlocal.com",
  },
  openGraph: {
    title: "GetLeadLocal - More Leads, More Calls, More Booked Jobs",
    description: "We help local service businesses generate qualified leads through Google Ads, Meta Ads, Local SEO and AI automation.",
    url: "https://www.getleadlocal.com",
    type: "website",
    images: [
      {
        url: "/og-home.png",
        width: 1200,
        height: 630,
        alt: "GetLeadLocal - Lead Generation for Local Businesses",
      },
    ],
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Industries />
      <Services />
      <Process />
      <WhyChooseUs />
      <MarketingTech />
      <FAQ />
      <FinalCTA />
    </>
  );
}
