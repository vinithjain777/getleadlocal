"use client";

import { FadeUp, StaggerContainer, StaggerItem } from "./animations";
import { Eye, Layers, RefreshCw, Target, TrendingUp, Zap } from "lucide-react";
import { WHY_CHOOSE_US } from "@/lib/constants";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  "local-focus": Target,
  "three-channels": Layers,
  "lead-focused": TrendingUp,
  "full-funnel": Zap,
  transparent: Eye,
  optimization: RefreshCw,
};

export function WhyChooseUs() {
  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <FadeUp>
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Why GetLeadLocal?
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Focused on the three channels that can consistently bring local businesses new customers.
            </p>
          </div>
        </FadeUp>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {WHY_CHOOSE_US.map((item) => {
            const Icon = iconMap[item.id] || Target;

            return (
              <StaggerItem key={item.id}>
                <div className="card card-hover h-full">
                  <div className="inline-flex p-3 bg-primary-50 rounded-lg mb-4">
                    <Icon className="w-6 h-6 text-primary-500" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-slate-600">{item.description}</p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
