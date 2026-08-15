# 🚀 GetLeadLocal - Launch Checklist & Code Updates

This file contains ALL the code changes needed to make your website launch-ready.

---

## ✅ COMPLETED
- ✓ Created dynamic sitemap at `app/sitemap.ts`
- ✓ Created schema utilities at `lib/schemas.ts`

---

## 📝 FILES TO UPDATE

### 1. UPDATE: `components/lead-capture-form.tsx`

**Find the `onSubmit` function (lines ~43-53) and replace with:**

```typescript
  const onSubmit = async (data: LeadFormData) => {
    setStatus("loading");
    try {
      // Submit to Web3Forms
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_key: "81f1a7af-0858-44be-b131-1d4ab5633954",
          name: data.name,
          phone: data.phone,
          email: data.email,
          service: data.service,
          form_type: "Hero Lead Capture",
          from_name: "GetLeadLocal Website",
          subject: `New Lead: ${data.name} - ${data.service}`,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus("success");
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      console.error("Hero lead submission error:", error);
      alert("There was an error submitting the form. Please try again.");
      setStatus("idle");
    }
  };
```

---

### 2. UPDATE: `components/contact-form.tsx`

**Find the `onSubmit` function (lines ~34-47) and replace with:**

```typescript
  const onSubmit = async (data: ContactFormData) => {
    setLoading(true);
    try {
      // Submit to Web3Forms
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_key: "81f1a7af-0858-44be-b131-1d4ab5633954",
          name: data.name,
          business: data.business,
          website: data.website || "",
          email: data.email,
          phone: data.phone,
          budget: data.budget || "Not specified",
          message: data.message,
          form_type: "Contact Page Form",
          from_name: "GetLeadLocal Website",
          subject: `New Contact: ${data.name} - ${data.business}`,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitted(true);
        reset();
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("There was an error submitting the form. Please try again.");
    } finally {
      setLoading(false);
    }
  };
```

---

### 3. UPDATE: `app/page.tsx`

**Add this at the TOP of the file (before the Home component):**

```typescript
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Generate More Qualified Leads For Your Local Business | GetLeadLocal",
  description: "Digital marketing agency specializing in Google Ads, Meta Ads, and Local SEO for plumbers, roofers, HVAC companies, dentists, contractors, and local service businesses. Get more booked jobs with proven lead generation strategies.",
  keywords: [
    "lead generation agency",
    "Google Ads for local businesses",
    "local SEO services",
    "plumber marketing",
    "HVAC marketing",
    "contractor lead generation",
    "Meta Ads for service businesses",
    "digital marketing for contractors",
    "local business marketing",
  ],
  alternates: {
    canonical: "https://www.getleadlocal.com",
  },
  openGraph: {
    title: "GetLeadLocal - More Leads, More Calls, More Booked Jobs",
    description: "We help local service businesses generate qualified leads through Google Ads, Meta Ads, Local SEO and AI automation.",
    url: "https://www.getleadlocal.com",
    type: "website",
    images: [
      {
        url: "/og-home.png",
        width: 1200,
        height: 630,
        alt: "GetLeadLocal - Lead Generation for Local Businesses",
      },
    ],
  },
};
```

---

### 4. UPDATE: `app/layout.tsx`

**Replace the imports at the top with:**

```typescript
import type { Metadata } from "next";
import { GeistSans, GeistMono } from "geist/font";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { StickyMobileCTA } from "@/components/sticky-mobile-cta";
import { SITE_CONFIG } from "@/lib/constants";
import { localBusinessSchema } from "@/lib/schemas";
```

**Update the metadata object to include icons:**

```typescript
export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default: "GetLeadLocal | Generate More Qualified Leads",
    template: "%s | GetLeadLocal",
  },
  description:
    "Digital marketing agency helping local service businesses generate more qualified leads through Google Ads, Meta Ads, Local SEO, and AI-powered automation.",
  keywords: [
    "lead generation",
    "digital marketing",
    "local seo",
    "google ads",
    "plumbing leads",
    "roofing leads",
    "contractor marketing",
    "local business marketing",
  ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    title: "GetLeadLocal | Generate More Qualified Leads",
    description:
      "Digital marketing agency for local service businesses. Google Ads, Meta Ads, Local SEO, AI Automation.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "GetLeadLocal",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@getleadlocal",
    creator: "@getleadlocal",
  },
  robots: {
    index: true,
    follow: true,
  },
};
```

**Replace the old jsonLd with the new localBusinessSchema:**

```typescript
// Remove the old jsonLd object and use the imported one
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href={SITE_CONFIG.url} />
      </head>
      <body className={`${GeistSans.variable} ${GeistMono.variable} font-sans antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <StickyMobileCTA />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </body>
    </html>
  );
}
```

---

### 5. UPDATE: `middleware.ts`

**Fix the unused parameter warning:**

```typescript
import { type NextRequest, NextResponse } from "next/server";

export function middleware(_request: NextRequest) {
  const response = NextResponse.next();

  // Security Headers
  response.headers.set("X-Content-Type-Options", "nosniff");
  response.headers.set("X-Frame-Options", "SAMEORIGIN");
  response.headers.set("X-XSS-Protection", "1; mode=block");
  response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");

  return response;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
```

---

### 6. UPDATE: `app/(routes)/[slug]/page.tsx`

**Add FAQ schema to Google Ads pages. Replace the entire file with:**

```typescript
import { notFound } from "next/navigation";
import { GoogleAdsLandingPageTemplate } from "@/components/google-ads-landing";
import { GOOGLE_ADS_PAGES, getGoogleAdsPage } from "@/lib/google-ads-pages";
import { generateMetadata as buildMetadata } from "@/lib/seo";
import { generateFAQSchema } from "@/lib/schemas";
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

  // Generate FAQ schema for this page
  const faqSchema = generateFAQSchema(page.faqs);

  return (
    <>
      <GoogleAdsLandingPageTemplate data={page} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
```

---

### 7. UPDATE: `components/google-ads-landing.tsx`

**Add a lead capture form to the hero section. Find the hero section and add the form:**

After the existing imports, add:
```typescript
import { LeadCaptureForm } from "./lead-capture-form";
```

**Then find the hero section (around line 100-150) and update it to include the form on the right side:**

Look for the hero section that currently only has text content, and wrap it in a grid like the homepage:

```typescript
{/* Hero Section */}
<section className="relative overflow-hidden bg-white pb-16 pt-24 md:pb-20 md:pt-32">
  <div className="container-max">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      {/* Left: Hero Content */}
      <div className="space-y-6 md:space-y-8">
        <FadeUp>
          <div className="badge">
            <Icon className="h-4 w-4" />
            {data.industry} Lead Generation
          </div>
        </FadeUp>

        <FadeUp delay={0.1}>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 leading-tight text-balance">
            {data.h1}
          </h1>
        </FadeUp>

        <FadeUp delay={0.2}>
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed text-balance">
            {data.heroSubheadline}
          </p>
        </FadeUp>

        <FadeUp delay={0.3}>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Link
              href="/contact"
              className="btn-primary flex items-center justify-center gap-2 group"
            >
              Book Free Strategy Call
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/services"
              className="btn-outline flex items-center justify-center gap-2"
            >
              View Our Services
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </FadeUp>
      </div>

      {/* Right: Lead Capture Form */}
      <FadeUp delay={0.2} type="scaleIn">
        <div className="relative mx-auto w-full max-w-md">
          <LeadCaptureForm />
        </div>
      </FadeUp>
    </div>
  </div>
</section>
```

---

## 📦 FILES TO CREATE

### 8. CREATE: `public/favicon.ico`

You need to add a favicon file. You can:
1. Use an online favicon generator (https://favicon.io/)
2. Upload your logo
3. Download and place these files in `/public/`:
   - favicon.ico
   - favicon-16x16.png
   - favicon-32x32.png
   - apple-touch-icon.png

---

### 9. CREATE: `public/og-home.png`

Create a 1200x630 Open Graph image for the homepage showing:
- "GetLeadLocal" branding
- "Generate More Qualified Leads"
- Your value proposition

---

## 🔍 VERIFICATION CHECKLIST

After making all changes, verify:

- [ ] Forms submit successfully to Web3Forms
- [ ] Homepage has unique metadata
- [ ] All pages have canonical tags
- [ ] Dynamic sitemap works at `/sitemap.xml`
- [ ] FAQ schema appears in Google Ads pages
- [ ] LocalBusiness schema is in layout
- [ ] No TypeScript errors
- [ ] All images have alt text
- [ ] Favicon appears in browser tab
- [ ] Mobile responsive on all pages

---

## 🚀 TEST BEFORE LAUNCH

1. Test lead capture form on homepage
2. Test contact form on /contact page
3. Test forms on Google Ads landing pages
4. Check /sitemap.xml is generating correctly
5. Validate schema with Google Rich Results Test
6. Test on mobile devices
7. Check Core Web Vitals
8. Submit sitemap to Google Search Console

---

## 📊 AFTER LAUNCH

1. Set up Google Search Console
2. Submit sitemap
3. Set up Google Analytics 4
4. Install Meta Pixel
5. Set up Google Ads conversion tracking
6. Monitor Web3Forms submissions
7. Set up auto-responder emails in Web3Forms
