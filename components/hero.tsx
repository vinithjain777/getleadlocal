"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { FadeUp, StaggerContainer, StaggerItem } from "./animations";
import { LeadCaptureForm } from "./lead-capture-form";

const HERO_HIGHLIGHTS = [
  "Google Ads for Local Businesses",
  "Facebook & Instagram Advertising",
  "Local SEO & Map Rankings",
  "Month-to-Month Pricing",
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
                Generate More Qualified Leads For Your Local Business
              </h1>
            </FadeUp>

            <FadeUp delay={0.2}>
              <p className="text-lg md:text-xl text-slate-600 leading-relaxed text-balance">
                We specialize in Google Ads, Facebook/Instagram Ads, and Local SEO for local service businesses.
                Get more phone calls and more booked jobs from customers in your area.
              </p>
            </FadeUp>

            <FadeUp delay={0.3}>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link
                  href="/contact"
                  className="btn-primary flex items-center justify-center gap-2 group"
                >
                  Book Free Strategy Call
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/services"
                  className="btn-outline flex items-center justify-center gap-2"
                >
                  View Our Services
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
