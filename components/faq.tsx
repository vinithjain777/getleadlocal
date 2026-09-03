"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { FadeUp } from "./animations";

const faqs = [
  {
    question: "How quickly can Google Ads generate leads?",
    answer:
      "Google Ads can start generating leads within the first few days of launch. However, it typically takes 2-4 weeks to gather enough data to optimize performance and reduce cost per lead.",
  },
  {
    question: "How much should a local business spend on Google Ads?",
    answer:
      "Most local businesses invest $1,500-$5,000 per month in ad spend, depending on competition in their market and service area. We'll recommend a budget based on your goals and market after our strategy call.",
  },
  {
    question: "Should I use Google Ads, Meta Ads or SEO?",
    answer:
      "It depends on your goals and timeline. Google Ads captures high-intent customers actively searching for your services. Meta Ads builds awareness and reaches people before they search. Local SEO is a long-term strategy that compounds over time. Many businesses start with Google Ads and add the others as they grow.",
  },
  {
    question: "Do you work with my industry?",
    answer:
      "We work with local service businesses across many industries including plumbing, HVAC, roofing, electrical, construction, landscaping, pest control, dental, legal, and more. If you depend on local customers and enquiries, we can likely help.",
  },
  {
    question: "Can you manage my existing Google Ads account?",
    answer:
      "Yes. We can audit your existing account, identify wasted spend, and take over management to improve performance and reduce cost per lead.",
  },
  {
    question: "How long does Local SEO take?",
    answer:
      "Local SEO typically takes 3-6 months to show meaningful results. The timeline depends on your current website, Google Business Profile, competition, and market. Results compound over time as your rankings and visibility improve.",
  },
  {
    question: "Can Meta Ads work for local businesses?",
    answer:
      "Yes. Meta Ads (Facebook & Instagram) are effective for building brand awareness, retargeting website visitors, and generating leads through highly targeted local campaigns. They work best when combined with Google Ads or SEO.",
  },
  {
    question: "Do you provide landing pages and conversion tracking?",
    answer:
      "Yes. Landing pages, conversion tracking, and call tracking are part of our campaign setup and optimization process. We focus on the complete customer journey, not just clicks.",
  },
  {
    question: "Do I need all three services?",
    answer:
      "No. Many businesses start with one service (usually Google Ads) and add others as they scale. We'll recommend the best approach based on your goals, budget, and timeline during our strategy call.",
  },
  {
    question: "How do I get started?",
    answer:
      "Book a free strategy call using the button above. We'll discuss your business, goals, and market, then recommend the best approach to generate more qualified leads.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="section-padding bg-slate-50">
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
