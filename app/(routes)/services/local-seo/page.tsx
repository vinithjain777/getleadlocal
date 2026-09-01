import { FadeUp, StaggerContainer, StaggerItem } from "@/components/animations";
import { ContactForm } from "@/components/contact-form";
import { CALENDLY_URL } from "@/lib/constants";
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  MapPin,
  Search,
  Star,
  TrendingUp,
  Users,
} from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Local SEO Services for Small Businesses",
  description:
    "Rank higher in Google local search and the Map Pack. Local SEO services designed to help your business get found by customers in your area.",
  alternates: {
    canonical: "https://getleadlocal.com/services/local-seo",
  },
  openGraph: {
    title: "Local SEO Services for Small Businesses | GetLeadLocal",
    description: "Rank higher in Google local search and the Map Pack. Local SEO services designed to help your business get found by customers in your area.",
    url: "https://getleadlocal.com/services/local-seo",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Local SEO Services for Small Businesses",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Local SEO Services for Small Businesses",
    description: "Rank higher in Google local search and the Map Pack. Get found by customers in your area.",
    images: ["/og-image.png"],
  },
};

const BENEFITS = [
  {
    icon: MapPin,
    title: "Google Map Pack",
    description: "Appear in the top 3 local results when customers search",
  },
  {
    icon: Search,
    title: "Organic Rankings",
    description: "Rank for '[your service] near me' and local keywords",
  },
  {
    icon: TrendingUp,
    title: "Long-Term Growth",
    description: "SEO results compound and improve over time",
  },
  {
    icon: Star,
    title: "5-Star Reputation",
    description: "Build trust with reviews and online reputation",
  },
];

const FEATURES = [
  "Google Business Profile optimization and management",
  "Local keyword research and targeting",
  "On-page SEO (content, meta tags, schema markup)",
  "Local citation building (50+ directories)",
  "Review generation and reputation management",
  "Local link building from relevant sources",
  "Competitor analysis and market research",
  "Technical SEO audit and fixes",
  "Monthly ranking reports and performance tracking",
];

const TIMELINE = [
  {
    month: "Month 1-2",
    title: "Foundation & Setup",
    tasks: [
      "Google Business Profile optimization",
      "Website technical SEO audit",
      "Keyword research completed",
      "Citations started",
    ],
    progress: 25,
  },
  {
    month: "Month 3-4",
    title: "Momentum Building",
    tasks: [
      "Rankings improve for primary keywords",
      "Map Pack appearances increase",
      "More organic traffic and calls",
      "Review generation active",
    ],
    progress: 50,
  },
  {
    month: "Month 5-6",
    title: "Consistent Results",
    tasks: [
      "Top 3 rankings for key terms",
      "Steady lead flow from SEO",
      "Strong online reputation",
      "Expanding keyword coverage",
    ],
    progress: 75,
  },
  {
    month: "Month 7+",
    title: "Market Dominance",
    tasks: [
      "Dominate local search",
      "Ongoing optimization",
      "Scale to more keywords",
      "Maintain competitive edge",
    ],
    progress: 100,
  },
];

const RANKING_FACTORS = [
  {
    title: "Google Business Profile",
    description: "Complete optimization with posts, photos, and reviews",
    icon: MapPin,
  },
  {
    title: "Online Reviews",
    description: "Generate authentic 5-star reviews from real customers",
    icon: Star,
  },
  {
    title: "Local Citations",
    description: "Consistent NAP (name, address, phone) across 50+ directories",
    icon: Users,
  },
  {
    title: "Website Content",
    description: "Location-specific content targeting local keywords",
    icon: Search,
  },
];

const FAQS = [
  {
    question: "How long does Local SEO take to work?",
    answer:
      "Most businesses start seeing improvements in 3-6 months. Timeline depends on competition, your current website status, and market. SEO is a long-term strategy, but results compound over time and provide sustainable lead generation.",
  },
  {
    question: "What's the difference between Local SEO and regular SEO?",
    answer:
      "Local SEO focuses on ranking for location-specific searches (like 'plumber in Dallas') and appearing in the Google Map Pack. It includes Google Business Profile optimization, local citations, and local link building. Regular SEO focuses on broader, non-location terms.",
  },
  {
    question: "Do I need a website for Local SEO?",
    answer:
      "While you can rank in the Map Pack with just a Google Business Profile, having an optimized website significantly improves your chances of ranking well. We recommend having at least a basic website to maximize Local SEO results.",
  },
  {
    question: "What's included in your Local SEO pricing?",
    answer:
      "Our Local SEO service includes Google Business Profile optimization, local citation building, review management, on-page SEO, monthly ranking reports, and ongoing optimization. We'll provide a custom quote based on your market competition and goals.",
  },
  {
    question: "Can you help with negative reviews?",
    answer:
      "We help you generate positive reviews to dilute negative ones and teach you how to respond professionally. We can't remove legitimate negative reviews, but we can help build a strong overall reputation that minimizes their impact.",
  },
];

export default function LocalSEOPage() {
  return (
    <main className="pt-24 md:pt-32 pb-12">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 via-white to-blue-50 py-16 md:py-24">
        <div className="container-max">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <FadeUp>
              <div className="inline-flex items-center gap-2 bg-green-500 px-4 py-2 rounded-full mb-6">
                <MapPin className="w-4 h-4 text-white" />
                <span className="text-sm font-semibold text-white">Local SEO Services</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
                Get Found in Google Local Search
              </h1>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                Rank higher in Google Maps and local search results. Our Local SEO strategies help
                your business appear when customers search for services in your area.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={CALENDLY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex gap-2 group"
                >
                  Book Your Free Strategy Call
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
                <Link href="/contact" className="btn-outline inline-flex gap-2">
                  Contact Us
                </Link>
              </div>
            </FadeUp>

            <FadeUp delay={0.2}>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-blue-500/10 rounded-2xl blur-3xl"></div>
                <div className="relative bg-white rounded-2xl p-8 shadow-xl">
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-green-50 rounded-lg">
                        <MapPin className="w-6 h-6 text-green-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-900 mb-1">Google Map Pack</h3>
                        <p className="text-sm text-slate-600">
                          Appear in the top 3 local results with maps and reviews
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-blue-50 rounded-lg">
                        <Search className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-900 mb-1">
                          Organic Local Rankings
                        </h3>
                        <p className="text-sm text-slate-600">
                          Rank for &quot;[service] near me&quot; and location searches
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-purple-50 rounded-lg">
                        <TrendingUp className="w-6 h-6 text-purple-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-900 mb-1">Sustainable Growth</h3>
                        <p className="text-sm text-slate-600">
                          SEO results compound over time with no ad spend
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <FadeUp>
            <div className="text-center mb-12 md:mb-16 max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                Why Local SEO Matters
              </h2>
              <p className="text-lg text-slate-600">
                When customers search for services in your area, Local SEO ensures your business
                appears at the top.
              </p>
            </div>
          </FadeUp>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {BENEFITS.map((benefit) => {
              const Icon = benefit.icon;
              return (
                <StaggerItem key={benefit.title}>
                  <div className="card h-full text-center">
                    <div className="inline-flex p-4 bg-green-50 rounded-xl mb-4">
                      <Icon className="w-8 h-8 text-green-500" />
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-slate-600 text-sm">{benefit.description}</p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="section-padding bg-slate-50">
        <div className="container-max">
          <FadeUp>
            <div className="text-center mb-12 md:mb-16 max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                Expected Results Timeline
              </h2>
              <p className="text-lg text-slate-600">
                Local SEO is a long-term strategy. Here&apos;s what to expect month by month.
              </p>
            </div>
          </FadeUp>

          <div className="max-w-4xl mx-auto space-y-8">
            {TIMELINE.map((phase, idx) => (
              <FadeUp key={phase.month} delay={idx * 0.1}>
                <div className="card">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="inline-flex items-center justify-center w-10 h-10 bg-green-500 text-white font-bold rounded-full text-sm">
                      {idx + 1}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-slate-900">{phase.title}</h3>
                      <p className="text-sm text-slate-500">{phase.month}</p>
                    </div>
                  </div>

                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
                    {phase.tasks.map((task) => (
                      <li key={task} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-slate-600">{task}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="h-3 bg-slate-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-green-500 to-blue-500 rounded-full transition-all duration-1000"
                      style={{ width: `${phase.progress}%` }}
                    ></div>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Ranking Factors Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <FadeUp>
            <div className="text-center mb-12 md:mb-16 max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                Key Local SEO Ranking Factors
              </h2>
              <p className="text-lg text-slate-600">
                What Google looks at when ranking local businesses
              </p>
            </div>
          </FadeUp>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {RANKING_FACTORS.map((factor) => {
              const Icon = factor.icon;
              return (
                <StaggerItem key={factor.title}>
                  <div className="card h-full">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-green-50 rounded-lg flex-shrink-0">
                        <Icon className="w-6 h-6 text-green-500" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-slate-900 mb-2">
                          {factor.title}
                        </h3>
                        <p className="text-slate-600">{factor.description}</p>
                      </div>
                    </div>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="section-padding bg-slate-50">
        <div className="container-max">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <FadeUp>
              <div className="inline-flex items-center gap-2 bg-green-50 px-4 py-2 rounded-full mb-6 w-fit">
                <Clock className="w-4 h-4 text-green-600" />
                <span className="text-sm font-semibold text-green-700">
                  Comprehensive Optimization
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                What&apos;s Included in Our Local SEO Service
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                We handle every aspect of Local SEO, from Google Business Profile optimization to
                citation building and ongoing ranking improvements.
              </p>
            </FadeUp>

            <FadeUp delay={0.2}>
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <ul className="space-y-4">
                  {FEATURES.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <FadeUp>
            <div className="text-center mb-12 md:mb-16 max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-slate-600">
                Common questions about Local SEO for small businesses
              </p>
            </div>
          </FadeUp>

          <div className="max-w-3xl mx-auto space-y-4">
            {FAQS.map((faq, idx) => (
              <FadeUp key={idx} delay={idx * 0.05}>
                <div className="card">
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">{faq.question}</h3>
                  <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="section-padding bg-slate-50">
        <div className="container-max">
          <FadeUp>
            <div className="text-center mb-12 md:mb-16 max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                Ready to Rank Higher?
              </h2>
              <p className="text-lg text-slate-600">
                Let&apos;s discuss how Local SEO can help your business get found by more local
                customers.
              </p>
            </div>
          </FadeUp>

          <FadeUp delay={0.2}>
            <div className="max-w-2xl mx-auto">
              <ContactForm />
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "Service",
              "serviceType": "Local SEO Services",
              "provider": {
                "@type": "Organization",
                "name": "GetLeadLocal",
                "url": "https://getleadlocal.com",
              },
              "areaServed": "United States",
              "description": "Local SEO services to help your business rank higher in Google local search and the Map Pack. Get found by customers in your area.",
              "offers": {
                "@type": "Offer",
                "priceRange": "$1500-$5000",
                "priceCurrency": "USD",
              },
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": FAQS.map((faq) => ({
                "@type": "Question",
                "name": faq.question,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": faq.answer,
                },
              })),
            },
          ]),
        }}
      />
    </main>
  );
}
