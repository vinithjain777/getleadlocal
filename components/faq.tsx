"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { FadeUp } from "./animations";

const faqs = [
  {
    question: "How long does it take to see results?",
    answer:
      "Most clients see their first leads within 1-2 weeks. However, significant ROI improvements typically take 4-6 weeks as we optimize and refine campaigns based on performance data.",
  },
  {
    question: "What's included in your services?",
    answer:
      "Our services include campaign strategy, implementation, landing pages, tracking setup, weekly optimization, and detailed monthly reporting. We handle everything from setup to ongoing management.",
  },
  {
    question: "Do you work with businesses outside of home services?",
    answer:
      "While we specialize in home service businesses (plumbing, roofing, HVAC, etc.), our digital marketing strategies can be adapted for other local service industries. Contact us to discuss your specific needs.",
  },
  {
    question: "What's your pricing model?",
    answer:
      "We offer flexible pricing based on your service mix, ad spend, and marketing objectives. Most clients invest between $1,500-$5,000 per month. We'll provide a custom quote after our discovery call.",
  },
  {
    question: "Can you help if my Google Ads are underperforming?",
    answer:
      "Absolutely. This is one of our specialties. We'll audit your campaigns, identify issues, and implement proven optimization strategies to improve your ROI and reduce cost per lead.",
  },
  {
    question: "Do you provide training for our team?",
    answer:
      "Yes. We can train your team on how to manage GoHighLevel, review performance reports, and understand your marketing funnel. We want you to be empowered with knowledge.",
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
              Have questions? We've got answers. If you don't find what you're looking for, reach
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
