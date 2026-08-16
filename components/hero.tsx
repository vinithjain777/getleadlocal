"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { FadeUp, StaggerContainer, StaggerItem } from "./animations";
import { LeadCaptureForm } from "./lead-capture-form";
import { CALENDLY_URL } from "@/lib/constants";

const HERO_HIGHLIGHTS = [
  "Google Ads for Local Businesses",
  "Facebook & Instagram Advertising",
  "Local SEO & Map Rankings",
  "Conversion Tracking & Optimization",
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white pb-16 pt-24 md:pb-20 md:pt-32">
      <div className="container-max">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 md:space-y-8">
            <FadeUp>
              <div className="badge">
                <span className="h-2 w-2 rounded-full bg-primary-500" />
                Now accepting new clients for this month
              </div>
            </FadeUp>

            <FadeUp delay={0.1}>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 leading-tight text-balance">
                Get More Customers From Google & Facebook
              </h1>
            </FadeUp>

            <FadeUp delay={0.2}>
              <p className="text-lg md:text-xl text-slate-600 leading-relaxed text-balance">
                We help local businesses generate qualified leads through Google Ads, Meta Ads and Local SEO.
              </p>
              <p className="text-base md:text-lg text-slate-600 leading-relaxed text-balance mt-3">
                From getting found to generating the enquiry, we focus on the channels that bring local customers to your business.
              </p>
            </FadeUp>

            <FadeUp delay={0.3}>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a
                  href={CALENDLY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary flex items-center justify-center gap-2 group"
                >
                  Book Your Free Strategy Call
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
                <Link
                  href="/contact"
                  className="btn-outline flex items-center justify-center gap-2"
                >
                  Contact Us
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </FadeUp>

            {/* Highlights */}
            <FadeUp delay={0.4}>
              <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-8 border-t border-slate-200">
                {HERO_HIGHLIGHTS.map((item) => (
                  <StaggerItem key={item}>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 shrink-0 text-primary-500" />
                      <span className="text-sm md:text-base font-medium text-slate-700">
                        {item}
                      </span>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </FadeUp>
          </div>

          {/* Right: Lead capture form */}
          <FadeUp delay={0.2} type="scaleIn">
            <div className="relative mx-auto w-full max-w-md">
              <LeadCaptureForm />
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
