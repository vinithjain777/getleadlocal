"use client";

import Link from "next/link";
import { FadeUp } from "./animations";
import { ArrowRight } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="section-padding bg-navy-900">
      <div className="container-max text-center">
        <FadeUp>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 text-balance">
            Ready to Generate More Customers?
          </h2>
        </FadeUp>

        <FadeUp delay={0.1}>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-8">
            Let&apos;s discuss how we can help your business generate more qualified leads and grow
            revenue.
          </p>
        </FadeUp>

        <FadeUp delay={0.2}>
          <Link href="/contact" className="btn-primary group inline-flex">
            Book Your Free Strategy Call
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </FadeUp>
      </div>
    </section>
  );
}
