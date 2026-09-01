import { FadeUp, StaggerContainer, StaggerItem } from "@/components/animations";
import { ContactForm } from "@/components/contact-form";
import { CALENDLY_URL } from "@/lib/constants";
import {
  ArrowRight,
  CheckCircle2,
  MousePointerClick,
  Phone,
  Search,
  Target,
  TrendingUp,
  Zap,
} from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Google Ads Management for Local Businesses",
  description:
    "Get more calls and booked jobs with Google Ads campaigns designed for local service businesses. Expert campaign management, keyword targeting, and conversion tracking.",
  alternates: {
    canonical: "https://getleadlocal.com/services/google-ads",
  },
};

const BENEFITS = [
  {
    icon: Target,
    title: "High-Intent Customers",
    description: "Reach people actively searching for your services right now",
  },
  {
    icon: Phone,
    title: "More Phone Calls",
    description: "Campaigns optimized to generate calls and lead form submissions",
  },
  {
    icon: TrendingUp,
    title: "Measurable Results",
    description: "Track every call, lead, and dollar spent with full transparency",
  },
  {
    icon: Zap,
    title: "Fast Results",
    description: "Start generating leads within days of campaign launch",
  },
];

const FEATURES = [
  "Custom keyword research for your industry and location",
  "Compelling ad copy that drives clicks and calls",
  "Landing page optimization for maximum conversions",
  "Geographic targeting focused on your service area",
  "Negative keyword management to eliminate wasted spend",
  "Bid optimization to lower cost per lead",
  "Call tracking to measure phone lead volume",
  "Weekly performance monitoring and optimization",
  "Monthly reporting and strategy sessions",
];

const PROCESS_STEPS = [
  {
    number: 1,
    title: "Discovery & Research",
    description:
      "We analyze your business, competitors, and market to identify the best keywords and ad strategies.",
  },
  {
    number: 2,
    title: "Campaign Build",
    description:
      "We create optimized campaigns with targeted ad copy, keyword lists, and conversion tracking.",
  },
  {
    number: 3,
    title: "Launch & Monitor",
    description:
      "Your ads go live and we monitor performance daily, making adjustments as needed.",
  },
  {
    number: 4,
    title: "Optimize & Scale",
    description:
      "We continuously improve performance, lower costs, and scale what works best.",
  },
];

const FAQS = [
  {
    question: "How much do I need to spend on Google Ads?",
    answer:
      "Most local businesses invest $1,500-$5,000 per month in ad spend. The exact amount depends on your market competition and goals. We'll recommend a budget during our strategy call based on your specific situation.",
  },
  {
    question: "How quickly will I see results?",
    answer:
      "Google Ads can generate leads within the first few days. However, it typically takes 2-4 weeks to gather enough data to optimize performance and reduce your cost per lead.",
  },
  {
    question: "What's included in your management fee?",
    answer:
      "Our management fee covers campaign strategy, setup, keyword research, ad copywriting, ongoing optimization, call tracking, landing page recommendations, weekly monitoring, and monthly performance reports.",
  },
  {
    question: "Can you take over my existing Google Ads account?",
    answer:
      "Yes. We can audit your existing account, identify issues and wasted spend, then take over management to improve performance.",
  },
  {
    question: "Do you guarantee results?",
    answer:
      "We cannot guarantee specific lead numbers, but we do guarantee our campaigns will be professionally managed using best practices. Most clients see improved performance within the first 60-90 days.",
  },
];

export default function GoogleAdsPage() {
  return (
    <main className="pt-24 md:pt-32 pb-12">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 via-white to-secondary-50 py-16 md:py-24">
        <div className="container-max">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <FadeUp>
              <div className="inline-flex items-center gap-2 bg-primary-500 px-4 py-2 rounded-full mb-6">
                <Search className="w-4 h-4 text-white" />
                <span className="text-sm font-semibold text-white">Google Ads Management</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
                Get More Customers From Google Search
              </h1>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                Reach customers actively searching for your services with Google Ads campaigns
                designed specifically for local businesses.
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
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-secondary-500/10 rounded-2xl blur-3xl"></div>
                <div className="relative bg-white rounded-2xl p-8 shadow-xl">
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-green-50 rounded-lg">
                        <CheckCircle2 className="w-6 h-6 text-green-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-900 mb-1">
                          Appear When Customers Search
                        </h3>
                        <p className="text-sm text-slate-600">
                          Show up at the top of Google when someone searches for your services
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-blue-50 rounded-lg">
                        <Phone className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-900 mb-1">
                          Generate Phone Calls
                        </h3>
                        <p className="text-sm text-slate-600">
                          Get more calls from customers ready to book your services
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-purple-50 rounded-lg">
                        <TrendingUp className="w-6 h-6 text-purple-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-900 mb-1">Track Every Lead</h3>
                        <p className="text-sm text-slate-600">
                          Know exactly which keywords and ads drive your best customers
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
                Why Google Ads Works for Local Businesses
              </h2>
              <p className="text-lg text-slate-600">
                Google Ads puts your business in front of high-intent customers at the exact moment
                they&apos;re searching for your services.
              </p>
            </div>
          </FadeUp>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {BENEFITS.map((benefit) => {
              const Icon = benefit.icon;
              return (
                <StaggerItem key={benefit.title}>
                  <div className="card h-full text-center">
                    <div className="inline-flex p-4 bg-primary-50 rounded-xl mb-4">
                      <Icon className="w-8 h-8 text-primary-500" />
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

      {/* What's Included Section */}
      <section className="section-padding bg-slate-50">
        <div className="container-max">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <FadeUp>
              <div className="inline-flex items-center gap-2 bg-primary-50 px-4 py-2 rounded-full mb-6 w-fit">
                <MousePointerClick className="w-4 h-4 text-primary-600" />
                <span className="text-sm font-semibold text-primary-700">
                  Comprehensive Management
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                What&apos;s Included in Our Google Ads Service
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                We handle every aspect of your Google Ads campaigns, from strategy and setup to
                ongoing optimization and reporting.
              </p>
            </FadeUp>

            <FadeUp delay={0.2}>
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <ul className="space-y-4">
                  {FEATURES.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <FadeUp>
            <div className="text-center mb-12 md:mb-16 max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                Our Google Ads Process
              </h2>
              <p className="text-lg text-slate-600">
                A proven 4-step process to launch and optimize your campaigns
              </p>
            </div>
          </FadeUp>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {PROCESS_STEPS.map((step) => (
              <StaggerItem key={step.number}>
                <div className="relative">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-500 text-white font-bold rounded-full mb-4 relative z-10 text-lg">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">{step.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{step.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <FadeUp delay={0.4}>
            <div className="mt-12 text-center">
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex gap-2"
              >
                Get Started with Google Ads →
              </a>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-slate-50">
        <div className="container-max">
          <FadeUp>
            <div className="text-center mb-12 md:mb-16 max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-slate-600">
                Common questions about our Google Ads management service
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
      <section className="section-padding bg-white">
        <div className="container-max">
          <FadeUp>
            <div className="text-center mb-12 md:mb-16 max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                Ready to Get More Customers?
              </h2>
              <p className="text-lg text-slate-600">
                Let&apos;s discuss how Google Ads can help your business generate more qualified
                leads and grow revenue.
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
    </main>
  );
}
