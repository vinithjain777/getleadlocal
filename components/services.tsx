"use client";

import { SERVICES } from "@/lib/constants";
import { FadeUp, StaggerContainer, StaggerItem } from "./animations";
import * as Icons from "lucide-react";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";

const SERVICE_ROUTES: Record<string, string> = {
  "google-ads": "/services/google-ads",
  "meta-ads": "/services/meta-ads",
  "local-seo": "/services/local-seo",
};

export function Services() {
  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <FadeUp>
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Three Ways We Help Local Businesses Get More Customers
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              We focus on the channels that connect your business with people actively looking for what you sell — or are ready to become your next customer.
            </p>
          </div>
        </FadeUp>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => {
            const IconComponent = (Icons[service.icon as keyof typeof Icons] || Icons.Zap) as LucideIcon;
            const serviceRoute = SERVICE_ROUTES[service.id] || "/contact";

            return (
              <StaggerItem key={service.id}>
                <div className="card card-hover group h-full flex flex-col">
                  {/* Icon */}
                  <div className="inline-flex p-3 bg-primary-50 rounded-lg group-hover:bg-primary-100 transition-colors mb-6">
                    <IconComponent className="w-6 h-6 text-primary-500" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">{service.title}</h3>
                  <p className="text-slate-600 mb-6 flex-grow">{service.description}</p>

                  {/* Features */}
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-primary-100 text-primary-600 flex-shrink-0 text-xs font-semibold mt-0.5">
                          ✓
                        </span>
                        <span className="text-sm text-slate-600">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Link
                    href={serviceRoute}
                    className="text-primary-600 font-semibold text-sm hover:text-primary-700 group-hover:translate-x-1 transition-transform inline-block"
                  >
                    {service.cta} →
                  </Link>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
