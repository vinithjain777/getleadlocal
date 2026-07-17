import { SERVICES } from "@/lib/constants";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/animations";
import * as Icons from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Services",
  description: "Our digital marketing services for local service businesses.",
};

export default function ServicesPage() {
  return (
    <main className="pt-24 md:pt-32 pb-12">
      <div className="container-max">
        {/* Header */}
        <FadeUp>
          <div className="text-center mb-12 md:mb-16 max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">Our Services</h1>
            <p className="text-xl text-slate-600">
              Complete digital marketing solutions to generate more leads and book more jobs
            </p>
          </div>
        </FadeUp>

        {/* Services Grid */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => {
            const IconComponent = Icons[service.icon as keyof typeof Icons] || Icons.Zap;

            return (
              <StaggerItem key={service.id}>
                <div className="card card-hover group h-full flex flex-col">
                  {/* Icon */}
                  <div className="inline-flex p-3 bg-primary-50 rounded-lg group-hover:bg-primary-100 transition-colors mb-6 w-fit">
                    <IconComponent className="w-6 h-6 text-primary-500" />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-semibold text-slate-900 mb-3">{service.title}</h3>
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
                    href="/contact"
                    className="text-primary-600 font-semibold text-sm hover:text-primary-700 group-hover:translate-x-1 transition-transform"
                  >
                    {service.cta} →
                  </Link>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        {/* CTA */}
        <FadeUp delay={0.3}>
          <div className="mt-20 text-center bg-slate-50 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Ready to get started?
            </h2>
            <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
              Book a free strategy call to discuss which services are right for your business.
            </p>
            <Link href="/contact" className="btn-primary inline-flex gap-2">
              Book Your Free Strategy Call
            </Link>
          </div>
        </FadeUp>
      </div>
    </main>
  );
}
