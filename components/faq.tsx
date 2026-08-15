"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { FadeUp } from "./animations";

const faqs = [
  {
    question: "How long does it take to see results?",
    answer:
      "Google Ads can generate calls within days. Facebook/Instagram Ads typically show results in 1-2 weeks. Local SEO is a 3-6 month strategy, but the results compound over time.",
  },
  {
    question: "What's included in your services?",
    answer:
      "Campaign strategy, ad account setup, keyword research (Google Ads), audience targeting (Facebook/Instagram), Google Business Profile optimization (Local SEO), weekly optimization, and monthly performance reports. We handle everything.",
  },
  {
    question: "Do you work with businesses outside of home services?",
    answer:
      "We exclusively focus on local service businesses like plumbers, HVAC companies, roofers, contractors, electricians, and other home service professionals. This specialization allows us to deliver better results.",
  },
  {
    question: "What's your pricing model?",
    answer:
      "We charge a management fee based on the services you choose. Most clients invest $1,500-$3,000/month in management fees, plus ad spend (typically $1,500-$5,000/month for Google/Facebook Ads). We'll provide a custom quote after our strategy call.",
  },
  {
    question: "Can you help if my Google Ads are underperforming?",
    answer:
      "Yes! We specialize in fixing underperforming campaigns. We'll audit your account, identify wasted spend, optimize targeting, improve ad copy, and reduce your cost per lead.",
  },
  {
    question: "Do I need all three services?",
    answer:
      "Not necessarily. Many clients start with Google Ads for immediate results, then add Local SEO for long-term growth. Facebook/Instagram Ads work great for brand awareness. We'll recommend the best strategy for your goals and budget.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <FadeUp>
          <div className="text-center mb-12 md:mb-16 max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-slate-600">
              Have questions? We&apos;ve got answers. If you don&apos;t find what you&apos;re looking for, reach
              out directly.
            </p>
          </div>
        </FadeUp>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <FadeUp key={index} delay={index * 0.05}>
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full card card-hover text-left"
              >
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-lg font-semibold text-slate-900 flex-grow">{faq.question}</h3>
                  <ChevronDown
                    className={`w-5 h-5 text-primary-500 flex-shrink-0 transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </div>

                {/* Answer */}
                {openIndex === index && (
                  <div className="mt-4 pt-4 border-t border-slate-200">
                    <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </button>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
