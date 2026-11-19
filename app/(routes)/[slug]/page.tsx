import { notFound } from "next/navigation";
import { GoogleAdsLandingPageTemplate } from "@/components/google-ads-landing";
import { GOOGLE_ADS_PAGES, getGoogleAdsPage } from "@/lib/google-ads-pages";
import { generateMetadata as buildMetadata } from "@/lib/seo";
import { SITE_CONFIG } from "@/lib/constants";
import { MARKETING_GUIDES, getMarketingGuide } from "@/lib/marketing-guides";
import { MarketingGuidePage } from "@/components/marketing-guide";
import { RelatedMarketingGuides } from "@/components/related-marketing-guides";

interface SlugPageProps {
  params: Promise<{ slug: string }>;
}

export const dynamicParams = true;

export function generateStaticParams() {
  return [...GOOGLE_ADS_PAGES, ...MARKETING_GUIDES].map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: SlugPageProps) {
  const { slug } = await params;
  const guide = getMarketingGuide(slug);
  if (guide)
    return buildMetadata({
      title: guide.title,
      description: guide.description,
      url: `${SITE_CONFIG.url}/${guide.slug}`,
      type: "article",
    });
  const page = getGoogleAdsPage(slug);

  if (!page) {
    return { title: "Page Not Found | GetLeadLocal" };
  }

  return buildMetadata({
    title: page.metaTitle,
    description: page.metaDescription,
    url: `${SITE_CONFIG.url}/${page.slug}`,
  });
}

export default async function GoogleAdsIndustryPage({ params }: SlugPageProps) {
  const { slug } = await params;
  const guide = getMarketingGuide(slug);
  if (guide) return <MarketingGuidePage guide={guide} />;
  const page = getGoogleAdsPage(slug);

  if (!page) {
    notFound();
  }

  return (
    <>
      <GoogleAdsLandingPageTemplate data={page} />
      <RelatedMarketingGuides path={`/${page.slug}`} />
    </>
  );
}
