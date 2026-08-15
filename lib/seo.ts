import { SITE_CONFIG } from "./constants";

export interface SEOMetadata {
  title: string;
  description: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: "website" | "article";
  author?: string;
  publishedDate?: string;
  updatedDate?: string;
}

export function generateMetadata(metadata: SEOMetadata) {
  return {
    title: metadata.title,
    description: metadata.description,
    keywords: metadata.keywords?.join(", "),
    openGraph: {
      title: metadata.title,
      description: metadata.description,
      url: metadata.url || SITE_CONFIG.url,
      type: metadata.type || "website",
      images: [
        {
          url: metadata.image || SITE_CONFIG.image,
          width: 1200,
          height: 630,
          alt: metadata.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: metadata.title,
      description: metadata.description,
      images: [metadata.image || SITE_CONFIG.image],
    },
  };
}

export function generateJsonLd(data: Record<string, unknown>) {
  return {
    __html: JSON.stringify(data),
  };
}
