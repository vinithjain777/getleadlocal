import { SITE_CONFIG } from "./constants";

/**
 * Enhanced LocalBusiness schema for better local SEO
 */
export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${SITE_CONFIG.url}#organization`,
  "name": SITE_CONFIG.name,
  "description": SITE_CONFIG.description,
  "url": SITE_CONFIG.url,
  "logo": {
    "@type": "ImageObject",
    "url": `${SITE_CONFIG.url}/logo.png`,
    "width": 200,
    "height": 60,
  },
  "image": `${SITE_CONFIG.url}/og-image.png`,
  "priceRange": "$$-$$$",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Digital Marketing Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Google Ads Management",
          "description": "Pay-per-click advertising campaigns for local service businesses",
          "provider": {
            "@type": "LocalBusiness",
            "name": SITE_CONFIG.name,
          },
        },
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Local SEO",
          "description": "Search engine optimization for local businesses",
          "provider": {
            "@type": "LocalBusiness",
            "name": SITE_CONFIG.name,
          },
        },
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Meta Ads Management",
          "description": "Facebook and Instagram advertising for local businesses",
          "provider": {
            "@type": "LocalBusiness",
            "name": SITE_CONFIG.name,
          },
        },
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "AI Automation",
          "description": "Automated lead follow-up and customer communication",
          "provider": {
            "@type": "LocalBusiness",
            "name": SITE_CONFIG.name,
          },
        },
      },
    ],
  },
};

/**
 * Generate FAQ schema for any page with FAQs
 */
export function generateFAQSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
      },
    })),
  };
}

/**
 * Generate Service schema for service pages
 */
export function generateServiceSchema(serviceName: string, description: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": serviceName,
    "provider": {
      "@type": "LocalBusiness",
      "name": SITE_CONFIG.name,
      "url": SITE_CONFIG.url,
    },
    "description": description,
  };
}

/**
 * Generate Breadcrumb schema
 */
export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url,
    })),
  };
}
