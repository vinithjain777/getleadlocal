import { FACEBOOK_GUIDES } from "./guides/facebook";
import { SEO_GUIDES } from "./guides/seo";
import { LEAD_GENERATION_GUIDES } from "./guides/lead-generation";
import { CONTRACTOR_GUIDES } from "./guides/contractor-enquiries";
import { WEBSITE_GUIDES } from "./guides/websites";

export interface MarketingGuide {
  slug: string;
  keywords: string[];
  title: string;
  description: string;
  category: keyof typeof GUIDE_CATEGORIES;
  published?: string;
  updated?: string;
  contactCta?: string;
  sources?: { label: string; href: string }[];
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
  websites: {
    name: "Websites",
    title: "Small Business Website Guides",
    description: "Compare build options, prepare your content, and plan how your team will handle website enquiries after launch.",
    service: "/services/websites-for-small-businesses",
    serviceName: "Website development for small businesses",
    enquiry: "/services/websites-for-small-businesses#project-quote",
    offer: "Tell us what a good website enquiry looks like for your business. We’ll scope the pages, booking options, and follow-up you need and explain what the build would cost.",
    action: "Request a website quote",
  },
  "lead-generation": {
    name: "Lead Generation",
    title: "Small Business Lead Generation Guides",
    description:
      "Choose a source of enquiries, build a weekly prospecting routine, or find help turning requests into booked work.",
    service: "/services",
    serviceName: "GetLeadLocal marketing services",
    enquiry: "/contact",
    offer: "Tell us which jobs you can take and where you work. We’ll help you choose a way to reach those customers within your budget.",
    action: "Discuss my lead generation plan",
  },
  "facebook-ads": {
    name: "Facebook Ads",
    title: "Facebook Ads Guides by Industry",
    description:
      "See how we can promote the services you want to book on Facebook and Instagram, and what your team needs to do when a customer responds.",
    service: "/services/meta-ads",
    serviceName: "Facebook & Instagram Ads management",
    enquiry: "/services/meta-ads#service-enquiry",
    offer: "You choose the service to promote and the area you cover. GetLeadLocal builds the ads and enquiry form. Together we review which requests turn into appointments or estimates.",
    action: "Ask about Facebook Ads for my business",
  },
  seo: {
    name: "SEO",
    title: "SEO Guides for Local and Small Businesses",
    description:
      "Industry-specific advice on service pages, local visibility, enquiries, and choosing an SEO provider.",
    service: "/services/local-seo",
    serviceName: "Local SEO services",
    enquiry: "/services/local-seo#service-enquiry",
    offer: "Tell us what customers should find you for and which towns you serve. We’ll review your local listings and service pages, then explain the work we recommend and how we’d track enquiries.",
    action: "Request local SEO help",
  },
} as const;
export const MARKETING_GUIDES: MarketingGuide[] = [
  ...FACEBOOK_GUIDES,
  ...SEO_GUIDES,
  ...LEAD_GENERATION_GUIDES,
  ...CONTRACTOR_GUIDES,
  ...WEBSITE_GUIDES,
];
export const getMarketingGuide = (slug: string) =>
  MARKETING_GUIDES.find((page) => page.slug === slug);
