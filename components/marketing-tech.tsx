"use client";

import { FadeUp, StaggerContainer, StaggerItem } from "./animations";
import { LineChart, MapPin, Megaphone, Share2, Phone, TrendingUp } from "lucide-react";
import { MARKETING_TECH } from "@/lib/constants";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  "google-ads": Megaphone,
  "meta-ads": Share2,
  "google-analytics": LineChart,
  "gbp": MapPin,
  "call-tracking": Phone,
  "search-console": TrendingUp,
};

export function MarketingTech() {
  return (
    <section className="section-padding bg-slate-50">
      <div className="container-max">
        <FadeUp>
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Tools & Platforms We Use
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Professional marketing platforms to track every call, lead, and conversion
            </p>
          </div>
        </FadeUp>

        <StaggerContainer className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {MARKETING_TECH.map((tool) => {
            const Icon = iconMap[tool.id] || Megaphone;

            return (
              <StaggerItem key={tool.id}>
                <div className="card card-hover h-full text-center flex flex-col items-center py-8">
                  <div className="inline-flex p-3 bg-primary-50 rounded-xl mb-4">
                    <Icon className="w-7 h-7 text-primary-500" />
                  </div>
                  <h3 className="text-sm font-semibold text-slate-900 mb-1">{tool.name}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{tool.description}</p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
