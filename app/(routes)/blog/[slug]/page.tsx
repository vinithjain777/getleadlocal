import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Calendar, Clock } from "lucide-react";
import {
  BarChart3,
  Bot,
  MapPin,
  Megaphone,
  MousePointerClick,
  Workflow,
  Wrench,
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
  "Plumbing Marketing": Wrench,
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
    notFound();
  }

  const canonical = `${SITE_CONFIG.url}/blog/${post.slug}`;
  const publishedTime = new Date(post.date).toISOString();

  return {
    title: post.title,
    description: post.description,
    alternates: {
      canonical,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      url: canonical,
      type: "article",
      publishedTime,
      authors: [`${SITE_CONFIG.url}/about`],
    },
    twitter: {
      card: "summary_large_image" as const,
      title: post.title,
      description: post.description,
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
  const relatedPosts = BLOG_POSTS.filter((candidate) => candidate.slug !== post.slug)
    .sort((a, b) => Number(b.category === post.category) - Number(a.category === post.category))
    .slice(0, 3);
  const canonical = `${SITE_CONFIG.url}/blog/${post.slug}`;

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
            <Link href="/about" className="font-medium hover:text-primary-600">
              {post.author}
            </Link>
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

        {post.relatedLinks && post.relatedLinks.length > 0 && (
          <FadeUp>
            <aside className="mb-10 rounded-2xl border border-primary-100 bg-primary-50/60 p-6">
              <h2 className="mb-5 text-2xl font-bold text-slate-900">
                Continue Your Plumbing Plan
              </h2>
              <div className="space-y-4">
                {post.relatedLinks.map((item) => (
                  <Link key={item.href} href={item.href} className="group block">
                    <span className="inline-flex items-center gap-2 font-semibold text-primary-700 group-hover:text-primary-800">
                      {item.label}
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                    <span className="mt-1 block text-sm leading-relaxed text-slate-600">
                      {item.description}
                    </span>
                  </Link>
                ))}
              </div>
            </aside>
          </FadeUp>
        )}

        <FadeUp>
          <p className="text-slate-600 leading-relaxed mb-12">{post.conclusion}</p>
        </FadeUp>

        <FadeUp>
          <aside
            className="mb-12 border-y border-slate-200 py-10"
            aria-labelledby="related-guides-heading"
          >
            <h2 id="related-guides-heading" className="mb-6 text-2xl font-bold text-slate-900">
              Related Marketing Guides
            </h2>
            <div className="grid gap-4 md:grid-cols-3">
              {relatedPosts.map((related) => (
                <Link
                  key={related.slug}
                  href={`/blog/${related.slug}`}
                  className="rounded-xl border border-slate-200 p-5 transition-colors hover:border-primary-400"
                >
                  <span className="mb-2 block text-xs font-semibold uppercase text-primary-600">
                    {related.category}
                  </span>
                  <span className="font-semibold leading-snug text-slate-900">{related.title}</span>
                </Link>
              ))}
            </div>
          </aside>
        </FadeUp>

        <FadeUp>
          <div className="text-center bg-navy-900 rounded-2xl p-10 text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">Ready To Grow Your Business?</h2>
            <p className="text-slate-300 mb-6 max-w-xl mx-auto">
              Book a free strategy call and we&apos;ll show you exactly how to generate more leads.
            </p>
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Book Your Free Strategy Call
            </a>
          </div>
        </FadeUp>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: post.title,
            description: post.description,
            datePublished: new Date(post.date).toISOString(),
            mainEntityOfPage: canonical,
            author: {
              "@type": "Organization",
              name: "GetLeadLocal",
              url: `${SITE_CONFIG.url}/about`,
            },
            publisher: {
              "@type": "Organization",
              name: "GetLeadLocal",
              url: SITE_CONFIG.url,
            },
          }),
        }}
      />
    </main>
  );
}
