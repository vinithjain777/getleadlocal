import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import {
  BarChart3,
  Bot,
  MapPin,
  Megaphone,
  MousePointerClick,
  Workflow,
} from "lucide-react";
import { FadeUp } from "@/components/animations";
import { VisualPanel } from "@/components/visual-panel";
import { BLOG_POSTS, getBlogPost } from "@/lib/blog-posts";
import { CALENDLY_URL, SITE_CONFIG } from "@/lib/constants";

const CATEGORY_ICONS: Record<string, typeof Megaphone> = {
  "Google Ads": Megaphone,
  "Local SEO": MapPin,
  "Digital Marketing": BarChart3,
  Automation: Workflow,
  Conversion: MousePointerClick,
  AI: Bot,
};

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    return { title: "Post Not Found | GetLeadLocal" };
  }

  return {
    title: post.title,
    description: post.description,
    alternates: {
      canonical: `${SITE_CONFIG.url}/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      url: `${SITE_CONFIG.url}/blog/${post.slug}`,
      type: "article",
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  const Icon = CATEGORY_ICONS[post.category] || Megaphone;

  return (
    <main className="pt-24 md:pt-32 pb-12">
      <div className="container-max max-w-3xl">
        <FadeUp>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary-600 mb-8 hover:gap-3 transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>
        </FadeUp>

        <FadeUp>
          <p className="text-xs font-semibold text-primary-600 uppercase mb-3">{post.category}</p>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">{post.title}</h1>
          <div className="flex items-center gap-4 text-sm text-slate-600 mb-10">
            <span>{post.author}</span>
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              {post.date}
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              {post.readTime}
            </div>
          </div>
        </FadeUp>

        <FadeUp>
          <div className="relative h-64 md:h-80 rounded-xl overflow-hidden mb-12">
            <VisualPanel icon={Icon} size="lg" label={post.category} />
          </div>
        </FadeUp>

        <FadeUp>
          <p className="text-xl text-slate-600 leading-relaxed mb-10">{post.intro}</p>
        </FadeUp>

        {post.sections.map((section, idx) => (
          <FadeUp key={idx}>
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">{section.heading}</h2>
              {section.paragraphs.map((paragraph, pIdx) => (
                <p key={pIdx} className="text-slate-600 leading-relaxed mb-4">
                  {paragraph}
                </p>
              ))}
              {section.list && (
                <ul className="space-y-2 mt-2">
                  {section.list.map((item, lIdx) => (
                    <li key={lIdx} className="flex gap-3 text-slate-600 leading-relaxed">
                      <span className="text-primary-600 font-bold">{lIdx + 1}.</span>
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </FadeUp>
        ))}

        <FadeUp>
          <p className="text-slate-600 leading-relaxed mb-12">{post.conclusion}</p>
        </FadeUp>

        <FadeUp>
          <div className="text-center bg-navy-900 rounded-2xl p-10 text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">Ready To Grow Your Business?</h2>
            <p className="text-slate-300 mb-6 max-w-xl mx-auto">
              Book a free strategy call and we&apos;ll show you exactly how to generate more leads.
            </p>
            <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">
              Book Your Free Strategy Call
            </a>
          </div>
        </FadeUp>
      </div>
    </main>
  );
}
