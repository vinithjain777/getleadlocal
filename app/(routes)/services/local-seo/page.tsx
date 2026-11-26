import { GuideLinks } from "@/components/guide-links";
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


export const metadata = {
  title: "Local SEO Services for Small Businesses",
  description:
    "Rank higher in Google local search and the Map Pack. Local SEO services designed to help your business get found by customers in your area.",
  alternates: {
    canonical: "https://getleadlocal.com/services/local-seo",
  },
  openGraph: {
    title: "Local SEO Services for Small Businesses | GetLeadLocal",
    description:
      "Rank higher in Google local search and the Map Pack. Local SEO services designed to help your business get found by customers in your area.",
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
    description:
      "Rank higher in Google local search and the Map Pack. Get found by customers in your area.",
    images: ["/og-image.png"],
  },
};

const BENEFITS = [
  {
    icon: MapPin,
    title: "Google Map Pack",
    description: "Help nearby customers find your address, opening hours, and phone number",
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
  { title: "Tell us which calls you want", tasks: ["Choose a priority service and the towns you cover.", "Show us how a customer currently gets in touch."] },
  { title: "We check what a customer sees", tasks: ["Review the business listing, hours, and contact details.", "Identify missing service information and broken enquiry routes."] },
  { title: "We make the agreed changes", tasks: ["Update priority pages and listings with your approval.", "Test calls and forms on the published pages."] },
  { title: "Review the enquiries together", tasks: ["Look at the services and areas people asked about.", "Use your feedback on booked jobs to choose the next improvement."] },
];

const RANKING_FACTORS = [
  {
    title: "Google Business Profile",
    description: "Complete optimization with posts, photos, and reviews",
    icon: MapPin,
  },
  {
    title: "Online Reviews",
    description: "Invite customers to leave an honest review of their experience",
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
      "We help you respond to customer feedback and invite honest reviews from people you have served. We can't remove legitimate negative reviews, but we can help build a strong overall reputation that minimizes their impact.",
  },
];

export default function LocalSEOPage() {
  return (
    <main className="brand-service-page pt-24 md:pt-32 pb-12">
      {/* Hero Section */}
      <section className="brand-service-hero bg-gradient-to-br from-green-50 via-white to-blue-50 py-16 md:py-24">
        <div className="container-max">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <FadeUp>
              <div className="inline-flex items-center gap-2 bg-green-500 px-4 py-2 rounded-full mb-6">
                <MapPin className="w-4 h-4 text-white" />
                <span className="text-sm font-semibold text-white">Local SEO Services</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
                Local SEO Services for Small Businesses
              </h1>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                Local SEO services for small businesses help nearby customers find the right number, the right service, and a reason to call. GetLeadLocal reviews your Google Business Profile and website, fixes unclear business details, and helps you see which searches bring enquiries.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#service-enquiry" className="btn-primary inline-flex gap-2">
                  Request help with local SEO <ArrowRight className="w-4 h-4" />
                </a>
                <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="btn-outline inline-flex gap-2">
                  Book a free call
                </a>
              </div>
            </FadeUp>

            <FadeUp delay={0.2}>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-blue-500/10 rounded-2xl blur-3xl"></div>
                <div className="brand-feature-panel relative bg-white rounded-2xl p-8 shadow-xl">
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-green-50 rounded-lg">
                        <MapPin className="w-6 h-6 text-green-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-900 mb-1">Google Map Pack</h3>
                        <p className="text-sm text-slate-600">
                          Give customers directions, current hours, and a way to call
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
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">{benefit.title}</h3>
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
                How we work with your business
              </h2>
              <p className="text-lg text-slate-600">
                You know which customers you can serve. We use that information to choose and review the work.
              </p>
            </div>
          </FadeUp>

          <div className="max-w-4xl mx-auto space-y-8">
            {TIMELINE.map((phase, idx) => (
              <FadeUp key={phase.title} delay={idx * 0.1}>
                <div className="card">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="inline-flex items-center justify-center w-10 h-10 bg-green-500 text-white font-bold rounded-full text-sm">
                      {idx + 1}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-slate-900">{phase.title}</h3>

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

      <GuideLinks category="seo" />
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
      <section id="service-enquiry" className="scroll-mt-24 section-padding bg-slate-50">
        <div className="container-max">
          <FadeUp>
            <div className="text-center mb-12 md:mb-16 max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                Where would you like more customers to find you?
              </h2>
              <p className="text-lg text-slate-600">
                Tell us your main service and the towns you cover. Share your website or business profile if you have one, and we’ll discuss what to improve first.
              </p>
            </div>
          </FadeUp>

          <FadeUp delay={0.2}>
            <div className="max-w-2xl mx-auto">
              <ContactForm service="Local SEO" />
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
              serviceType: "Local SEO Services",
              provider: {
                "@type": "Organization",
                name: "GetLeadLocal",
                url: "https://getleadlocal.com",
              },
              areaServed: "United States",
              description:
                "Local SEO services to help your business rank higher in Google local search and the Map Pack. Get found by customers in your area.",
              offers: {
                "@type": "Offer",
                priceRange: "$1500-$5000",
                priceCurrency: "USD",
              },
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: FAQS.map((faq) => ({
                "@type": "Question",
                name: faq.question,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: faq.answer,
                },
              })),
            },
          ]),
        }}
      />
    </main>
  );
}
