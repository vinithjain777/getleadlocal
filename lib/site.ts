import { MapPin, Megaphone, Search, type LucideIcon } from "lucide-react";

export const site = { name: "GetLeadLocal", url: "https://www.getleadlocal.com" };
export type Service = { slug: string; title: string; description: string; icon: LucideIcon; benefit: string };
export const services: Service[] = [
  { slug: "google-ads", title: "Google Ads", description: "Capture ready-to-book customers actively searching for your services right now.", icon: Search, benefit: "More phone calls from high-intent local customers." },
  { slug: "facebook-ads", title: "Facebook & Instagram Ads", description: "Build brand awareness and retarget potential customers in your local market.", icon: Megaphone, benefit: "Stay top-of-mind with homeowners in your area." },
  { slug: "local-seo", title: "Local SEO", description: "Dominate Google Maps and local search results in your service area.", icon: MapPin, benefit: "Consistent organic leads month after month." },
];
export const industries = ["Plumbing", "Roofing", "Flooring", "Construction", "HVAC", "Electrical", "Solar", "Landscaping", "Pest Control"];
export const faqs = [
  ["Who do you work with?", "We partner with established home-service businesses that want a predictable pipeline of qualified local leads."],
  ["How soon can we expect leads?", "Paid media can start generating opportunities shortly after launch. SEO is a longer-term channel that grows durable local visibility."],
  ["Do you require a long contract?", "No. We earn the next month through transparent reporting, thoughtful strategy, and measurable progress."],
  ["Will we own our accounts and data?", "Absolutely. Your ad accounts, analytics, website assets, and CRM data remain yours at all times."]
];
