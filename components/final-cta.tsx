"use client";

import Link from "next/link";
import { FadeUp } from "./animations";
import { ArrowRight } from "lucide-react";
import { CALENDLY_URL } from "@/lib/constants";

export function FinalCTA() {
  return (
    <section className="section-padding bg-navy-900">
      <div className="container-max text-center">
        <FadeUp>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 text-balance">
            Ready to Get More Customers?
          </h2>
        </FadeUp>

        <FadeUp delay={0.1}>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-8">
            Tell us about your business and we&apos;ll help you identify the best opportunities across Google Ads, Meta Ads and Local SEO.
          </p>
        </FadeUp>

        <FadeUp delay={0.2}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="btn-primary group inline-flex">
              Book Your Free Strategy Call
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <Link href="/contact" className="btn-outline-dark inline-flex gap-2">
              Contact Us
            </Link>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
