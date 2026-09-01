import { FadeUp, StaggerContainer, StaggerItem } from "@/components/animations";
import { VisualPanel } from "@/components/visual-panel";
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  Bot,
  Calendar,
  MapPin,
  Megaphone,
  MousePointerClick,
  Workflow,
} from "lucide-react";

const CATEGORY_ICONS: Record<string, typeof Megaphone> = {
  "Google Ads": Megaphone,
  "Local SEO": MapPin,
  "Digital Marketing": BarChart3,
  Automation: Workflow,
  Conversion: MousePointerClick,
  AI: Bot,
};

const blogPosts = [
  {
    id: 1,
    title: "The Complete Guide to Google Ads for Plumbers",
    category: "Google Ads",
    author: "GetLeadLocal Team",
    date: "Jan 15, 2024",
    readTime: "8 min read",
    description:
      "Learn how to set up, optimize, and scale Google Ads campaigns specifically for plumbing businesses.",
    slug: "google-ads-plumbers",
  },
  {
    id: 2,
    title: "Local SEO Strategy for Roofing Companies in 2024",
    category: "Local SEO",
    author: "GetLeadLocal Team",
    date: "Jan 12, 2024",
    readTime: "10 min read",
    description:
      "Everything you need to know about dominating local search results for roofing services.",
    slug: "local-seo-roofing",
  },
  {
    id: 3,
    title: "Meta Ads vs Google Ads: Which Should Your HVAC Company Use?",
    category: "Digital Marketing",
    author: "GetLeadLocal Team",
    date: "Jan 10, 2024",
    readTime: "7 min read",
    description:
      "A detailed comparison to help you choose the best advertising platform for your HVAC business.",
    slug: "meta-vs-google-ads",
  },
  {
    id: 4,
    title: "How to Use GoHighLevel CRM to Close More Leads",
    category: "Automation",
    author: "GetLeadLocal Team",
    date: "Jan 8, 2024",
    readTime: "9 min read",
    description: "Step-by-step guide to setting up GoHighLevel for your home service business.",
    slug: "gohighlevel-crm",
  },
  {
    id: 5,
    title: "Top 10 Landing Page Mistakes Local Businesses Make",
    category: "Conversion",
    author: "GetLeadLocal Team",
    date: "Jan 5, 2024",
    readTime: "6 min read",
    description:
      "Discover the most common landing page mistakes and how to fix them for higher conversions.",
    slug: "landing-page-mistakes",
  },
  {
    id: 6,
    title: "AI Automation: The Future of Lead Generation for Home Services",
    category: "AI",
    author: "GetLeadLocal Team",
    date: "Jan 1, 2024",
    readTime: "11 min read",
    description: "How AI-powered automation is revolutionizing lead capture and qualification.",
    slug: "ai-automation-leads",
  },
];

export const metadata = {
  title: "Blog",
  description: "Digital marketing insights and strategies for local service businesses.",
  alternates: {
    canonical: "https://getleadlocal.com/blog",
  },
};

export default function BlogPage() {
  return (
    <main className="pt-24 md:pt-32 pb-12">
      <div className="container-max">
        {/* Header */}
        <FadeUp>
          <div className="text-center mb-12 md:mb-16 max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
              Digital Marketing Insights
            </h1>
            <p className="text-xl text-slate-600">
              Tips, strategies, and insights to help your local business grow
            </p>
          </div>
        </FadeUp>

        {/* Blog Grid */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <StaggerItem key={post.id}>
              <Link href={`/blog/${post.slug}`}>
                <div className="card card-hover overflow-hidden h-full flex flex-col group">
                  {/* Visual */}
                  <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                    <VisualPanel
                      icon={CATEGORY_ICONS[post.category] || Megaphone}
                      size="md"
                      label={post.category}
                      className="group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex-grow">
                    <p className="text-xs font-semibold text-primary-600 uppercase mb-2">
                      {post.category}
                    </p>
                    <h3 className="text-lg font-semibold text-slate-900 group-hover:text-primary-600 transition-colors mb-3 line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-sm text-slate-600 line-clamp-2 mb-4">{post.description}</p>
                  </div>

                  {/* Meta */}
                  <div className="pt-4 border-t border-slate-200 space-y-3">
                    <div className="flex items-center gap-4 text-xs text-slate-600">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {post.date}
                      </div>
                      <span>{post.readTime}</span>
                    </div>
                    <div className="flex items-center gap-2 text-primary-600 font-semibold text-sm group-hover:translate-x-1 transition-transform">
                      Read More
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </main>
  );
}
