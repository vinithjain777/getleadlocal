import { notFound } from "next/navigation";
import { GoogleAdsLandingPageTemplate } from "@/components/google-ads-landing";
import { GOOGLE_ADS_PAGES, getGoogleAdsPage } from "@/lib/google-ads-pages";
import { generateMetadata as buildMetadata } from "@/lib/seo";
import { SITE_CONFIG } from "@/lib/constants";

interface SlugPageProps {
  params: Promise<{ slug: string }>;
}

export const dynamicParams = true;

export function generateStaticParams() {
  return GOOGLE_ADS_PAGES.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: SlugPageProps) {
  const { slug } = await params;
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
  const page = getGoogleAdsPage(slug);

  if (!page) {
    notFound();
  }

  return <GoogleAdsLandingPageTemplate data={page} />;
}
