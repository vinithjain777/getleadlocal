"use client";

import { FadeUp, StaggerContainer, StaggerItem } from "./animations";
import { ArrowRight, CheckCircle, ClipboardList, PhoneCall, Search } from "lucide-react";

const FLOW_STEPS = [
  {
    id: "get-found",
    title: "Get Found",
    icon: Search,
    items: ["Google Ads", "Meta Ads", "Local SEO"],
  },
  {
    id: "get-enquiry",
    title: "Get the Enquiry",
    icon: PhoneCall,
    items: ["Landing Page", "Phone Call", "Lead Form"],
  },
  {
    id: "follow-up",
    title: "Follow Up",
    icon: ClipboardList,
    items: ["Tracking", "CRM", "Automated Follow-Up"],
  },
  {
    id: "get-customer",
    title: "Get the Customer",
    icon: CheckCircle,
    items: ["Appointment", "Estimate", "Booked Job"],
  },
];

export function SystemFlow() {
  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <FadeUp>
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              More Than Getting You Clicks
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              We focus on what happens after someone finds your business.
            </p>
          </div>
        </FadeUp>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* Desktop arrow connectors */}
          <div className="hidden lg:block absolute top-16 left-0 right-0 h-0.5 pointer-events-none">
            <div className="flex items-center justify-between px-[12%]">
              <ArrowRight className="w-6 h-6 text-primary-500" />
              <ArrowRight className="w-6 h-6 text-primary-500" />
              <ArrowRight className="w-6 h-6 text-primary-500" />
            </div>
          </div>

          {FLOW_STEPS.map((step) => {
            const Icon = step.icon;
            return (
              <StaggerItem key={step.id}>
                <div className="card h-full">
                  {/* Icon */}
                  <div className="inline-flex p-3 bg-primary-50 rounded-lg mb-4">
                    <Icon className="w-6 h-6 text-primary-500" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold text-slate-900 mb-4">{step.title}</h3>

                  {/* Items */}
                  <ul className="space-y-2">
                    {step.items.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="inline-flex h-1.5 w-1.5 rounded-full bg-primary-500 mt-2 flex-shrink-0" />
                        <span className="text-sm text-slate-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        {/* Mobile arrow indicators */}
        <div className="lg:hidden flex justify-center gap-2 mt-6">
          <span className="h-1 w-8 bg-primary-500 rounded" />
          <span className="h-1 w-8 bg-primary-500 rounded" />
          <span className="h-1 w-8 bg-primary-500 rounded" />
        </div>
      </div>
    </section>
  );
}
