"use client";

import { FadeUp } from "./animations";
import { BarChart3, MapPinned, Sparkles, Target } from "lucide-react";

const BADGES = [
  { icon: Target, text: "Google Ads Specialists" },
  { icon: MapPinned, text: "Local SEO Experts" },
  { icon: Sparkles, text: "AI Automation" },
  { icon: BarChart3, text: "Transparent Reporting" },
];

export function TrustBar() {
  return (
    <section className="py-8 md:py-10 bg-slate-50 border-b border-slate-200">
      <div className="container-max">
        <FadeUp>
          <div className="grid grid-cols-2 gap-6 lg:flex lg:flex-wrap lg:items-center lg:justify-center lg:gap-12">
            {BADGES.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="flex items-center justify-center gap-3 lg:justify-start">
                  <div className="p-2 bg-primary-50 rounded-lg">
                    <Icon className="w-5 h-5 text-primary-600" />
                  </div>
                  <span className="text-sm md:text-base font-semibold text-slate-900">
                    {item.text}
                  </span>
                </div>
              );
            })}
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
