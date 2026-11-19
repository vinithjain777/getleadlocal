import { FACEBOOK_GUIDES } from "./guides/facebook";
import { SEO_GUIDES } from "./guides/seo";

export interface MarketingGuide {
  slug: string;
  keywords: string[];
  title: string;
  description: string;
  category: "facebook-ads" | "seo";
  intro: string;
  sections: { heading: string; paragraphs: string[] }[];
  example: { title: string; text: string };
  checklist: string[];
  measurement: string;
  faqs: { question: string; answer: string }[];
  related: string[];
}

export const GUIDE_DATE = "2026-11-19";
export const GUIDE_CATEGORIES = {
  "facebook-ads": {
    name: "Facebook Ads",
    title: "Facebook Ads Guides by Industry",
    description:
      "Practical campaign, creative, and lead follow-up guides for local businesses and community organizations.",
    service: "/services/meta-ads",
    serviceName: "Facebook & Instagram Ads management",
  },
  seo: {
    name: "SEO",
    title: "SEO Guides for Local and Small Businesses",
    description:
      "Industry-specific advice on service pages, local visibility, enquiries, and choosing an SEO provider.",
    service: "/services/local-seo",
    serviceName: "Local SEO services",
  },
} as const;
export const MARKETING_GUIDES: MarketingGuide[] = [...FACEBOOK_GUIDES, ...SEO_GUIDES];
export const getMarketingGuide = (slug: string) =>
  MARKETING_GUIDES.find((page) => page.slug === slug);
