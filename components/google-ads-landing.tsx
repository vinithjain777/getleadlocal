"use client";

import { useState } from "react";
import Link from "next/link";
import * as Icons from "lucide-react";
import { ArrowRight, Check, ChevronDown, PhoneCall } from "lucide-react";
import { FadeUp, StaggerContainer, StaggerItem } from "./animations";
import { VisualPanel } from "./visual-panel";
import {
  GOOGLE_ADS_INCLUDED,
  GOOGLE_ADS_PROCESS,
  GOOGLE_ADS_STRATEGY,
  GOOGLE_ADS_WHY_CHOOSE_US,
  getGoogleAdsPage,
} from "@/lib/google-ads-pages";
import type { GoogleAdsLandingPage } from "@/types";

const RELATED_SERVICES = [
  { label: "Google Ads", href: "/services" },
  { label: "Meta Ads", href: "/services" },
  { label: "Local SEO", href: "/services" },
  { label: "Landing Pages", href: "/services" },
  { label: "AI Automation", href: "/services" },
];

function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="card">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between gap-4 text-left"
        aria-expanded={open}
      >
        <h3 className="text-base md:text-lg font-semibold text-slate-900">{question}</h3>
        <ChevronDown
          className={`h-5 w-5 shrink-0 text-primary-600 transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      {open && <p className="mt-4 text-slate-600 leading-relaxed">{answer}</p>}
    </div>
  );
}

export function GoogleAdsLandingPageTemplate({ data }: { data: GoogleAdsLandingPage }) {
  const HeroIcon = (Icons[data.heroIcon as keyof typeof Icons] ||
    Icons.Target) as React.ComponentType<{ className?: string; strokeWidth?: number }>;

  return (
    <main className="pt-24 md:pt-32">
      {/* 1. Hero */}
      <section className="section-padding pt-0 md:pt-0 pb-16 md:pb-20">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeUp>
              <div>
                <div className="badge mb-6">Google Ads Management</div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight text-balance">
                  {data.h1}
                </h1>
                <p className="text-lg md:text-xl text-slate-600 mb-8 leading-relaxed text-balance">
                  {data.heroSubheadline}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/contact" className="btn-primary">
                    Book Free Strategy Call
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link href="/contact" className="btn-secondary">
                    Contact Us
                  </Link>
                </div>
              </div>
            </FadeUp>

            <FadeUp delay={0.15} type="scaleIn">
              <div className="relative h-72 sm:h-96 lg:h-[28rem] rounded-2xl overflow-hidden shadow-card border border-slate-200">
                <VisualPanel icon={HeroIcon} size="lg" label={data.industry} />
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* 2. Why Google Ads Work For [Industry] */}
      <section className="section-padding bg-surface">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <FadeUp>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                  {data.whyItWorksHeading}
                </h2>
                <p className="text-slate-600 leading-relaxed">{data.whyItWorksIntro}</p>
              </div>
            </FadeUp>

            <FadeUp delay={0.1}>
              <ul className="space-y-4">
                {data.whyItWorksPoints.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-50">
                      <Check className="h-3.5 w-3.5 text-primary-600" />
                    </span>
                    <span className="text-slate-700">{point}</span>
                  </li>
                ))}
              </ul>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* 3. Common Challenges */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <FadeUp>
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Common Challenges For {data.industry}
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Here&apos;s what typically gets in the way of a profitable ad account
              </p>
            </div>
          </FadeUp>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.challenges.map((item) => {
              const Icon = (Icons[item.icon as keyof typeof Icons] ||
                Icons.AlertTriangle) as React.ComponentType<{ className?: string }>;
              return (
                <StaggerItem key={item.title}>
                  <div className="card h-full">
                    <div className="inline-flex p-3 bg-primary-50 rounded-lg mb-4">
                      <Icon className="w-6 h-6 text-primary-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">{item.title}</h3>
                    <p className="text-slate-600 text-sm">{item.description}</p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* 4. Our Google Ads Strategy */}
      <section className="section-padding bg-surface">
        <div className="container-max">
          <FadeUp>
            <div className="max-w-3xl mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Our Google Ads Strategy
              </h2>
              <p className="text-lg text-slate-600">{data.strategyIntro}</p>
            </div>
          </FadeUp>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {GOOGLE_ADS_STRATEGY.map((item) => {
              const Icon = (Icons[item.icon as keyof typeof Icons] ||
                Icons.Target) as React.ComponentType<{ className?: string }>;
              return (
                <StaggerItem key={item.title}>
                  <div className="card h-full">
                    <div className="inline-flex p-3 bg-primary-50 rounded-lg mb-4">
                      <Icon className="w-6 h-6 text-primary-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">{item.title}</h3>
                    <p className="text-slate-600 text-sm">{item.description}</p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* 5. What's Included */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <FadeUp>
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                What&apos;s Included
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Everything you need to launch and scale a profitable Google Ads account
              </p>
            </div>
          </FadeUp>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {GOOGLE_ADS_INCLUDED.map((item) => (
              <StaggerItem key={item}>
                <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-surface px-5 py-4">
                  <Check className="h-5 w-5 shrink-0 text-primary-600" />
                  <span className="font-medium text-slate-900">{item}</span>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* 6. Why Choose Us */}
      <section className="section-padding bg-surface">
        <div className="container-max">
          <FadeUp>
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Why Choose Us</h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                A dedicated approach built specifically for {data.industry.toLowerCase()}
              </p>
            </div>
          </FadeUp>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {GOOGLE_ADS_WHY_CHOOSE_US.map((item) => {
              const Icon = (Icons[item.icon as keyof typeof Icons] ||
                Icons.Target) as React.ComponentType<{ className?: string }>;
              return (
                <StaggerItem key={item.title}>
                  <div className="card card-hover h-full">
                    <div className="inline-flex p-3 bg-primary-50 rounded-lg mb-4">
                      <Icon className="w-6 h-6 text-primary-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">{item.title}</h3>
                    <p className="text-slate-600 text-sm">{item.description}</p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* 7. Our Process */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <FadeUp>
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Process</h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                A clear, proven path from strategy call to scaled results
              </p>
            </div>
          </FadeUp>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {GOOGLE_ADS_PROCESS.map((step) => (
              <StaggerItem key={step.number}>
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-navy-900 font-semibold text-white">
                    {step.number}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-1">{step.title}</h3>
                    <p className="text-slate-600 text-sm">{step.description}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* 8. FAQ */}
      <section className="section-padding bg-surface">
        <div className="container-max max-w-3xl">
          <FadeUp>
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-slate-600">
                Common questions from {data.industry.toLowerCase()} we work with
              </p>
            </div>
          </FadeUp>

          <div className="space-y-4">
            {data.faqs.map((faq) => (
              <FaqItem key={faq.question} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </section>

      {/* 9. Final CTA */}
      <section className="section-padding bg-navy-900">
        <div className="container-max text-center">
          <FadeUp>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              {data.finalCtaHeading}
            </h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-8">
              {data.finalCtaSubtext}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary">
                Book Your Free Strategy Call
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/contact" className="btn-outline-dark">
                <PhoneCall className="w-4 h-4" />
                Contact Us
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* 10. Related Services & Industries */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <FadeUp>
              <div>
                <h2 className="text-xl font-semibold text-slate-900 mb-5">Related Services</h2>
                <div className="flex flex-wrap gap-3">
                  {RELATED_SERVICES.map((service) => (
                    <Link
                      key={service.label}
                      href={service.href}
                      className="rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 hover:border-primary-500 hover:text-primary-600 transition-colors"
                    >
                      {service.label}
                    </Link>
                  ))}
                  <Link
                    href="/contact"
                    className="rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 hover:border-primary-500 hover:text-primary-600 transition-colors"
                  >
                    Contact
                  </Link>
                  <Link
                    href="/"
                    className="rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 hover:border-primary-500 hover:text-primary-600 transition-colors"
                  >
                    Homepage
                  </Link>
                </div>
              </div>
            </FadeUp>

            {data.relatedIndustries.length > 0 && (
              <FadeUp delay={0.1}>
                <div>
                  <h2 className="text-xl font-semibold text-slate-900 mb-5">Related Industries</h2>
                  <div className="flex flex-wrap gap-3">
                    {data.relatedIndustries.map((slug) => {
                      const related = getGoogleAdsPage(slug);
                      if (!related) return null;
                      return (
                        <Link
                          key={slug}
                          href={`/${slug}`}
                          className="rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 hover:border-primary-500 hover:text-primary-600 transition-colors"
                        >
                          Google Ads for {related.industry}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </FadeUp>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
