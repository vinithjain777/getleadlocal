import type { MetadataRoute } from "next";
import { BLOG_POSTS } from "@/lib/blog-posts";
import { INDUSTRIES, SITE_CONFIG } from "@/lib/constants";
import { GOOGLE_ADS_PAGES } from "@/lib/google-ads-pages";

export default function sitemap(): MetadataRoute.Sitemap {
  const corePaths = [
    "",
    "/about",
    "/services",
    "/services/google-ads",
    "/services/meta-ads",
    "/services/local-seo",
    "/industries",
    "/blog",
    "/contact",
  ];

  // Omit lastModified when the true content-update date is unknown. A fresh
  // timestamp on every deployment gives crawlers an inaccurate change signal.
  const corePages: MetadataRoute.Sitemap = corePaths.map((path) => ({
    url: `${SITE_CONFIG.url}${path}`,
  }));

  const googleAdsPages: MetadataRoute.Sitemap = GOOGLE_ADS_PAGES.map((page) => ({
    url: `${SITE_CONFIG.url}/${page.slug}`,
  }));

  const industryPages: MetadataRoute.Sitemap = INDUSTRIES.map((industry) => ({
    url: `${SITE_CONFIG.url}${industry.link}`,
  }));

  const blogPages: MetadataRoute.Sitemap = BLOG_POSTS.map((post) => ({
    url: `${SITE_CONFIG.url}/blog/${post.slug}`,
    lastModified: new Date(post.date),
  }));

  return [...corePages, ...googleAdsPages, ...industryPages, ...blogPages];
}
