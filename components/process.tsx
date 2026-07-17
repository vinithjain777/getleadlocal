"use client";

import { FadeUp, StaggerContainer, StaggerItem } from "./animations";
import { PROCESS_STEPS } from "@/lib/constants";

export function Process() {
  return (
    <section className="section-padding bg-slate-50">
      <div className="container-max">
        <FadeUp>
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Our Proven Process
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Six steps to generate more qualified leads and grow your business
            </p>
          </div>
        </FadeUp>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
          {/* Connecting line for desktop */}
          <div className="hidden lg:block absolute top-12 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-500 to-transparent" />

          {PROCESS_STEPS.map((step, idx) => (
            <StaggerItem key={step.number}>
              <div className="relative">
                {/* Number circle */}
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-500 text-white font-bold rounded-full mb-4 relative z-10">
                  {step.number}
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">{step.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{step.description}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* CTA */}
        <FadeUp delay={0.3}>
          <div className="mt-16 text-center">
            <a href="/contact" className="btn-primary inline-flex gap-2">
              Start Your Journey Today
            </a>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
