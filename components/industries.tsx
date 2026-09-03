"use client";

import { INDUSTRIES } from "@/lib/constants";
import { FadeUp, StaggerContainer, StaggerItem } from "./animations";
import Link from "next/link";
import * as Icons from "lucide-react";
import { VisualPanel } from "./visual-panel";
import type { LucideIcon } from "lucide-react";

export function Industries() {
  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <FadeUp>
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Marketing Built for Local Businesses
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Focused strategies for businesses that depend on local customers, phone calls, enquiries and booked jobs.
            </p>
          </div>
        </FadeUp>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {INDUSTRIES.map((industry) => {
            const IconComponent = (Icons[industry.icon as keyof typeof Icons] || Icons.Briefcase) as LucideIcon;

            return (
              <StaggerItem key={industry.id}>
                <Link href={industry.link}>
                  <div className="card card-hover group overflow-hidden">
                    {/* Visual */}
                    <div className="relative h-32 mb-4 rounded-lg overflow-hidden">
                      <VisualPanel
                        icon={IconComponent}
                        size="sm"
                        className="group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>

                    {/* Content */}
                    <div className="flex items-start gap-3 mb-3">
                      <div className="p-2 bg-primary-50 rounded-lg group-hover:bg-primary-100 transition-colors">
                        <IconComponent className="w-5 h-5 text-primary-500" />
                      </div>
                      <h3 className="text-lg font-semibold text-slate-900">{industry.name}</h3>
                    </div>
                    <p className="text-sm text-slate-600 mb-4">{industry.description}</p>
                    <div className="text-primary-500 font-semibold text-sm group-hover:translate-x-1 transition-transform">
                      Learn More →
                    </div>
                  </div>
                </Link>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
