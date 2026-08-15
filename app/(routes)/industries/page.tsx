import { INDUSTRIES } from "@/lib/constants";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/animations";
import * as Icons from "lucide-react";
import { VisualPanel } from "@/components/visual-panel";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { CALENDLY_URL } from "@/lib/constants";

export const metadata = {
  title: "Industries",
  description: "Digital marketing for local service businesses across multiple industries.",
};

export default function IndustriesPage() {
  return (
    <main className="pt-24 md:pt-32 pb-12">
      <div className="container-max">
        {/* Header */}
        <FadeUp>
          <div className="text-center mb-12 md:mb-16 max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
              Industries We Serve
            </h1>
            <p className="text-xl text-slate-600">
              Specialized lead generation strategies for home service businesses
            </p>
          </div>
        </FadeUp>

        {/* Industries Grid */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {INDUSTRIES.map((industry) => {
            const IconComponent = (Icons[industry.icon as keyof typeof Icons] || Icons.Briefcase) as LucideIcon;

            return (
              <StaggerItem key={industry.id}>
                <Link href={industry.link}>
                  <div className="card card-hover group overflow-hidden h-full flex flex-col">
                    {/* Visual */}
                    <div className="relative h-40 mb-4 rounded-lg overflow-hidden">
                      <VisualPanel
                        icon={IconComponent}
                        size="md"
                        className="group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>

                    {/* Content */}
                    <div className="flex items-start gap-3 mb-3">
                      <div className="p-2 bg-primary-50 rounded-lg group-hover:bg-primary-100 transition-colors flex-shrink-0">
                        <IconComponent className="w-5 h-5 text-primary-500" />
                      </div>
                      <h3 className="text-lg font-semibold text-slate-900 flex-grow">
                        {industry.name}
                      </h3>
                    </div>
                    <p className="text-sm text-slate-600 mb-4 flex-grow">{industry.description}</p>
                    <div className="text-primary-500 font-semibold text-sm group-hover:translate-x-1 transition-transform">
                      View Details →
                    </div>
                  </div>
                </Link>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        {/* Additional Info */}
        <FadeUp>
          <div className="bg-slate-50 rounded-xl p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Don&apos;t see your industry?
            </h2>
            <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
              Our strategies can be adapted to any local service business. Contact us to discuss
              your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="btn-primary inline-flex gap-2">
                Book a Free Strategy Call
              </a>
              <Link href="/contact" className="btn-outline inline-flex gap-2">
                Get in Touch
              </Link>
            </div>
          </div>
        </FadeUp>
      </div>
    </main>
  );
}
