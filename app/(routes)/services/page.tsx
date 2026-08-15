import { SERVICES } from "@/lib/constants";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/animations";
import { ContactForm } from "@/components/contact-form";
import * as Icons from "lucide-react";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { CALENDLY_URL } from "@/lib/constants";

export const metadata = {
  title: "Services",
  description: "Google Ads, Facebook & Instagram Ads, and Local SEO for local service businesses. Get more calls and booked jobs.",
};

export default function ServicesPage() {
  return (
    <main className="pt-24 md:pt-32 pb-12">
      <div className="container-max">
        {/* Header */}
        <FadeUp>
          <div className="text-center mb-12 md:mb-16 max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">Our Services</h1>
            <p className="text-xl text-slate-600">
              3 proven strategies to get more customers: Google Ads, Facebook/Instagram Ads, and Local SEO
            </p>
          </div>
        </FadeUp>

        {/* Value Proposition */}
        <FadeUp delay={0.1}>
          <div className="mb-16 bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl p-8 md:p-12">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-primary-600 mb-2">ROI-Focused</div>
                <p className="text-slate-700">
                  Every dollar you invest should generate measurable results for your business
                </p>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary-600 mb-2">Local Experts</div>
                <p className="text-slate-700">
                  We specialize exclusively in marketing for local service businesses
                </p>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary-600 mb-2">Transparent</div>
                <p className="text-slate-700">
                  Full access to your campaigns, real-time reporting, and no hidden fees
                </p>
              </div>
            </div>
          </div>
        </FadeUp>

        {/* Services Grid */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => {
            const IconComponent = (Icons[service.icon as keyof typeof Icons] || Icons.Zap) as LucideIcon;

            return (
              <StaggerItem key={service.id}>
                <div className="card card-hover group h-full flex flex-col">
                  {/* Icon */}
                  <div className="inline-flex p-3 bg-primary-50 rounded-lg group-hover:bg-primary-100 transition-colors mb-6 w-fit">
                    <IconComponent className="w-6 h-6 text-primary-500" />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-semibold text-slate-900 mb-3">{service.title}</h3>
                  <p className="text-slate-600 mb-6 flex-grow">{service.description}</p>

                  {/* Features */}
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-primary-100 text-primary-600 flex-shrink-0 text-xs font-semibold mt-0.5">
                          ✓
                        </span>
                        <span className="text-sm text-slate-600">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Link
                    href="/contact"
                    className="text-primary-600 font-semibold text-sm hover:text-primary-700 group-hover:translate-x-1 transition-transform"
                  >
                    {service.cta} →
                  </Link>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        {/* Detailed Service Information */}
        <div className="mt-24 space-y-20">
          {/* Google Ads Section */}
          <FadeUp>
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div>
                <div className="inline-flex items-center gap-2 bg-primary-50 px-4 py-2 rounded-full mb-4">
                  <Icons.MousePointerClick className="w-4 h-4 text-primary-600" />
                  <span className="text-sm font-semibold text-primary-700">Pay-Per-Click Advertising</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                  Google Ads Management
                </h2>
                <p className="text-lg text-slate-600 mb-6">
                  Get in front of customers actively searching for your services right now. Our Google Ads campaigns are designed specifically for local service businesses to generate high-quality leads at the lowest cost per acquisition.
                </p>
                <div className="prose prose-slate">
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">What&apos;s Included:</h3>
                  <ul className="space-y-2 text-slate-600">
                    <li>Custom keyword research targeting high-intent local searches</li>
                    <li>Compelling ad copy written for your specific industry</li>
                    <li>Landing page optimization for maximum conversions</li>
                    <li>Geographic targeting to focus on your service area</li>
                    <li>Bid optimization to reduce cost per lead</li>
                    <li>Weekly performance reports and monthly strategy calls</li>
                  </ul>
                </div>
              </div>
              <div className="bg-slate-50 rounded-2xl p-8">
                <h3 className="text-xl font-semibold text-slate-900 mb-6">How It Works</h3>
                <div className="space-y-6">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-500 text-white text-sm font-bold">1</span>
                      <h4 className="font-semibold text-slate-900">Discovery & Strategy</h4>
                    </div>
                    <p className="text-sm text-slate-600 ml-11">We analyze your market, competitors, and ideal customers to build a winning strategy.</p>
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-500 text-white text-sm font-bold">2</span>
                      <h4 className="font-semibold text-slate-900">Campaign Setup</h4>
                    </div>
                    <p className="text-sm text-slate-600 ml-11">We create optimized campaigns with proven ad copy and targeting.</p>
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-500 text-white text-sm font-bold">3</span>
                      <h4 className="font-semibold text-slate-900">Launch & Monitor</h4>
                    </div>
                    <p className="text-sm text-slate-600 ml-11">Your ads go live and we monitor performance daily for opportunities.</p>
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-500 text-white text-sm font-bold">4</span>
                      <h4 className="font-semibold text-slate-900">Optimize & Scale</h4>
                    </div>
                    <p className="text-sm text-slate-600 ml-11">We continuously refine campaigns to lower costs and increase lead quality.</p>
                  </div>
                </div>
              </div>
            </div>
          </FadeUp>

          {/* Meta Ads Section */}
          <FadeUp>
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div className="order-2 md:order-1 bg-slate-50 rounded-2xl p-8">
                <h3 className="text-xl font-semibold text-slate-900 mb-6">Perfect For</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Icons.CheckCircle2 className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-1">Brand Awareness</h4>
                      <p className="text-sm text-slate-600">Build recognition in your local market with visual content</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icons.CheckCircle2 className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-1">Retargeting Campaigns</h4>
                      <p className="text-sm text-slate-600">Re-engage people who visited your website but didn&apos;t convert</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icons.CheckCircle2 className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-1">Visual Industries</h4>
                      <p className="text-sm text-slate-600">Showcase before/after photos, project galleries, and testimonials</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icons.CheckCircle2 className="w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-1">Audience Building</h4>
                      <p className="text-sm text-slate-600">Create custom audiences based on demographics and behaviors</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <div className="inline-flex items-center gap-2 bg-primary-50 px-4 py-2 rounded-full mb-4">
                  <Icons.Share2 className="w-4 h-4 text-primary-600" />
                  <span className="text-sm font-semibold text-primary-700">Social Media Advertising</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                  Meta (Facebook & Instagram) Ads
                </h2>
                <p className="text-lg text-slate-600 mb-6">
                  Reach potential customers on Facebook and Instagram with targeted ads that build brand awareness and drive qualified leads to your business.
                </p>
                <div className="prose prose-slate">
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">What We Do:</h3>
                  <ul className="space-y-2 text-slate-600">
                    <li>Create scroll-stopping ad creatives with compelling visuals</li>
                    <li>Target precise demographics, interests, and local areas</li>
                    <li>Build custom audiences from your website visitors and customer lists</li>
                    <li>A/B test different ad formats to find what converts best</li>
                    <li>Track conversions and optimize for your specific business goals</li>
                    <li>Retarget warm leads who showed interest but didn&apos;t book</li>
                  </ul>
                </div>
              </div>
            </div>
          </FadeUp>

          {/* Local SEO Section */}
          <FadeUp>
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div>
                <div className="inline-flex items-center gap-2 bg-primary-50 px-4 py-2 rounded-full mb-4">
                  <Icons.Search className="w-4 h-4 text-primary-600" />
                  <span className="text-sm font-semibold text-primary-700">Organic Search</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                  Local SEO Optimization
                </h2>
                <p className="text-lg text-slate-600 mb-6">
                  Dominate local search results and the Google Map Pack. Our local SEO strategies help your business appear when potential customers search for services in your area.
                </p>
                <div className="prose prose-slate">
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">Our SEO Services:</h3>
                  <ul className="space-y-2 text-slate-600">
                    <li>Google Business Profile optimization and management</li>
                    <li>Local citation building across 50+ directories</li>
                    <li>Review generation and reputation management</li>
                    <li>On-page SEO for your website (keywords, content, technical)</li>
                    <li>Local link building from relevant sources</li>
                    <li>Monthly ranking reports and SEO performance tracking</li>
                  </ul>
                </div>
              </div>
              <div className="bg-slate-50 rounded-2xl p-8">
                <h3 className="text-xl font-semibold text-slate-900 mb-6">Expected Results</h3>
                <div className="space-y-6">
                  <div>
                    <div className="mb-2">
                      <h4 className="font-semibold text-slate-900">Month 1-2</h4>
                      <p className="text-sm text-slate-600">Foundation & optimization complete, Google Business Profile verified</p>
                    </div>
                    <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                      <div className="h-full bg-primary-500 rounded-full" style={{width: '25%'}}></div>
                    </div>
                  </div>
                  <div>
                    <div className="mb-2">
                      <h4 className="font-semibold text-slate-900">Month 3-4</h4>
                      <p className="text-sm text-slate-600">Rankings improve, Map Pack appearances increase, more organic calls</p>
                    </div>
                    <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                      <div className="h-full bg-primary-500 rounded-full" style={{width: '50%'}}></div>
                    </div>
                  </div>
                  <div>
                    <div className="mb-2">
                      <h4 className="font-semibold text-slate-900">Month 5-6</h4>
                      <p className="text-sm text-slate-600">Consistent top 3 rankings for primary keywords, steady lead flow</p>
                    </div>
                    <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                      <div className="h-full bg-primary-500 rounded-full" style={{width: '75%'}}></div>
                    </div>
                  </div>
                  <div>
                    <div className="mb-2">
                      <h4 className="font-semibold text-slate-900">Month 7+</h4>
                      <p className="text-sm text-slate-600">Market dominance, ongoing optimization, scaling to more keywords</p>
                    </div>
                    <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                      <div className="h-full bg-primary-500 rounded-full" style={{width: '100%'}}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FadeUp>

          {/* Website Design Section */}
          <FadeUp>
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div className="order-2 md:order-1 bg-slate-50 rounded-2xl p-8">
                <h3 className="text-xl font-semibold text-slate-900 mb-6">Design Features</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-white rounded-lg">
                    <Icons.Smartphone className="w-8 h-8 text-primary-500 mx-auto mb-2" />
                    <h4 className="font-semibold text-slate-900 text-sm mb-1">Mobile First</h4>
                    <p className="text-xs text-slate-600">70% of traffic is mobile</p>
                  </div>
                  <div className="text-center p-4 bg-white rounded-lg">
                    <Icons.Zap className="w-8 h-8 text-primary-500 mx-auto mb-2" />
                    <h4 className="font-semibold text-slate-900 text-sm mb-1">Fast Loading</h4>
                    <p className="text-xs text-slate-600">&lt;3 second load times</p>
                  </div>
                  <div className="text-center p-4 bg-white rounded-lg">
                    <Icons.Star className="w-8 h-8 text-primary-500 mx-auto mb-2" />
                    <h4 className="font-semibold text-slate-900 text-sm mb-1">SEO Optimized</h4>
                    <p className="text-xs text-slate-600">Built for rankings</p>
                  </div>
                  <div className="text-center p-4 bg-white rounded-lg">
                    <Icons.Shield className="w-8 h-8 text-primary-500 mx-auto mb-2" />
                    <h4 className="font-semibold text-slate-900 text-sm mb-1">Secure SSL</h4>
                    <p className="text-xs text-slate-600">Safe & encrypted</p>
                  </div>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <div className="inline-flex items-center gap-2 bg-primary-50 px-4 py-2 rounded-full mb-4">
                  <Icons.Globe className="w-4 h-4 text-primary-600" />
                  <span className="text-sm font-semibold text-primary-700">Web Development</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                  Website Design & Development
                </h2>
                <p className="text-lg text-slate-600 mb-6">
                  Your website is your digital storefront. We build conversion-focused websites that look professional, load fast, and turn visitors into customers.
                </p>
                <div className="prose prose-slate">
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">What You Get:</h3>
                  <ul className="space-y-2 text-slate-600">
                    <li>Custom design matching your brand and industry</li>
                    <li>Mobile-responsive layout that works on all devices</li>
                    <li>Clear calls-to-action and conversion optimization</li>
                    <li>Contact forms and lead capture functionality</li>
                    <li>Fast hosting with 99.9% uptime guarantee</li>
                    <li>Easy content management system (CMS) for updates</li>
                    <li>SSL security certificate included</li>
                  </ul>
                </div>
              </div>
            </div>
          </FadeUp>
        </div>

        {/* Contact Form Section */}
        <FadeUp delay={0.3}>
          <div className="mt-24">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Let&apos;s Discuss Your Marketing Needs
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Fill out the form below and we&apos;ll create a custom strategy based on your goals and budget.
              </p>
              <div className="mt-6">
                <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="btn-outline inline-flex gap-2">
                  Prefer to talk now? Book a Free Strategy Call
                </a>
              </div>
            </div>
            <ContactForm />
          </div>
        </FadeUp>
      </div>
    </main>
  );
}
