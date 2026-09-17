"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle2, MapPin } from "lucide-react";
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
    <section className="relative overflow-hidden border-b border-slate-200 bg-gradient-to-br from-white via-slate-50 to-primary-50 pb-16 pt-28 md:pb-24 md:pt-36">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-24 h-[34rem] w-[34rem] rounded-full border-[64px] border-primary-100/50"
      />
      <div className="container-max relative">
        <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_1fr] gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-6 md:space-y-8">
            <FadeUp>
              <div className="badge border border-primary-100 bg-white/80">
                <MapPin className="h-4 w-4" aria-hidden="true" />
                Built for local businesses
              </div>
            </FadeUp>

            <FadeUp delay={0.1}>
              <h1 className="text-[2.75rem] sm:text-6xl xl:text-7xl font-bold tracking-tight text-slate-900 leading-[1.08] text-balance">
                More local customers.
                <br />
                <span className="text-primary-600">More booked jobs.</span>
              </h1>
            </FadeUp>

            <FadeUp delay={0.2}>
              <p className="text-lg md:text-xl text-slate-600 leading-relaxed text-balance">
                Get found on Google and Facebook. Turn that attention into qualified enquiries with
                Google Ads, Meta Ads, and Local SEO built around your service area.
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
                  Book a Free Strategy Call
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center gap-2 px-3 py-3.5 font-semibold text-slate-700 hover:text-primary-600"
                >
                  Explore Our Services
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
            <div className="relative mx-auto w-full max-w-md rounded-[2rem] border border-primary-100 bg-white/60 p-3 shadow-[0_24px_80px_-32px_rgba(30,64,175,0.3)] sm:p-5">
              <div className="mb-4 flex items-center gap-3 px-2 pt-1">
                <span
                  aria-hidden="true"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-navy-900 text-sm font-semibold text-white"
                >
                  01
                </span>
                <span className="text-sm font-medium text-slate-600">
                  Your next stage of growth starts here
                </span>
              </div>
              <LeadCaptureForm />
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
