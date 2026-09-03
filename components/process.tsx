"use client";

import { FadeUp, StaggerContainer, StaggerItem } from "./animations";
import { PROCESS_STEPS, CALENDLY_URL } from "@/lib/constants";

export function Process() {
  return (
    <section className="section-padding bg-slate-50">
      <div className="container-max">
        <FadeUp>
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              How We Grow Your Local Business
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              A proven process to generate more qualified leads and customers
            </p>
          </div>
        </FadeUp>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROCESS_STEPS.map((step, _idx) => (
            <StaggerItem key={step.number}>
              <div className="card h-full">
                {/* Number circle */}
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-500 text-white font-bold rounded-full mb-4">
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
            <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="btn-primary inline-flex gap-2">
              Book Your Free Strategy Call →
            </a>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
