import { BarChart3, Bot, FileStack, MapPin, Megaphone, Search, type LucideIcon } from "lucide-react";

export const site = { name: "GetLeadLocal", url: "https://www.getleadlocal.com", email: "hello@getleadlocal.com", phone: "(888) 204-0186" };
export type Service = { slug: string; title: string; description: string; icon: LucideIcon; benefit: string };
export const services: Service[] = [
  { slug: "google-ads", title: "Google Ads", description: "Capture ready-to-book customers at the exact moment they are searching.", icon: Search, benefit: "High-intent campaigns built around profitable service calls." },
  { slug: "meta-ads", title: "Meta Ads", description: "Create demand and keep your brand top of mind in every neighborhood.", icon: Megaphone, benefit: "Creative that earns attention and turns it into estimates." },
  { slug: "local-seo", title: "Local SEO", description: "Win more map rankings, calls, and website visits in your service area.", icon: MapPin, benefit: "A stronger local presence that compounds month after month." },
  { slug: "landing-pages", title: "Landing Pages", description: "Turn paid traffic into qualified calls with pages made to convert.", icon: FileStack, benefit: "Fast, clear pages that make taking the next step easy." },
  { slug: "ai-automation", title: "AI Automation", description: "Respond instantly and follow up consistently, even after business hours.", icon: Bot, benefit: "Fewer missed leads and a faster path from inquiry to booking." },
  { slug: "gohighlevel-crm", title: "GoHighLevel CRM", description: "Make every lead visible, organized, and ready for your sales team.", icon: BarChart3, benefit: "One operating system for lead tracking and nurture." }
];
export const industries = ["Plumbing", "Roofing", "Flooring", "Construction", "HVAC", "Electrical", "Solar", "Landscaping", "Pest Control"];
export const faqs = [
  ["Who do you work with?", "We partner with established home-service businesses that want a predictable pipeline of qualified local leads."],
  ["How soon can we expect leads?", "Paid media can start generating opportunities shortly after launch. SEO is a longer-term channel that grows durable local visibility."],
  ["Do you require a long contract?", "No. We earn the next month through transparent reporting, thoughtful strategy, and measurable progress."],
  ["Will we own our accounts and data?", "Absolutely. Your ad accounts, analytics, website assets, and CRM data remain yours at all times."]
];
