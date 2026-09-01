import { FadeUp } from "@/components/animations";
import { ArrowRight, CheckCircle } from "lucide-react";
import { CALENDLY_URL } from "@/lib/constants";

export const metadata = {
  title: "About Us",
  description: "Learn about GetLeadLocal and our mission to help local businesses grow.",
  alternates: {
    canonical: "https://getleadlocal.com/about",
  },
};

const values = [
  {
    title: "Results-Driven",
    description: "Every strategy is built around measurable ROI, not vanity metrics.",
  },
  {
    title: "Transparency",
    description: "We explain everything clearly and share detailed performance reports monthly.",
  },
  {
    title: "Partnership",
    description: "Your success is our success. We&apos;re invested in your growth long-term.",
  },
  {
    title: "Innovation",
    description: "We stay ahead of algorithm changes and implement cutting-edge strategies.",
  },
];

export default function AboutPage() {
  return (
    <main className="pt-24 md:pt-32 pb-12">
      <div className="container-max">
        {/* Hero */}
        <FadeUp>
          <div className="text-center mb-16 md:mb-20 max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
              About GetLeadLocal
            </h1>
            <p className="text-xl text-slate-600">
              We&apos;re a team of digital marketers, designers, and strategists dedicated to helping
              local service businesses generate more qualified leads and grow revenue.
            </p>
          </div>
        </FadeUp>

        {/* Story Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <FadeUp>
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Our Story</h2>
              <p className="text-lg text-slate-600 mb-4 leading-relaxed">
                GetLeadLocal was founded on a simple observation: most home service business owners
                don&apos;t have the time or expertise to master digital marketing. They&apos;re focused on
                running their business, not learning Google Ads algorithms.
              </p>
              <p className="text-lg text-slate-600 mb-4 leading-relaxed">
                We created GetLeadLocal to be the partner they needed—a team that understands their
                industry, speaks their language, and delivers results they can measure.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                We&apos;re focused on building long-term partnerships with local service businesses,
                combining Google Ads, Local SEO and AI automation into one accountable growth system.
              </p>
            </div>
          </FadeUp>

          <FadeUp delay={0.1} type="scaleIn">
            <div className="bg-navy-900 rounded-2xl p-8 text-white">
              <div className="space-y-6">
                <div>
                  <p className="text-sm font-semibold opacity-90">Our Focus</p>
                  <p className="text-2xl font-bold">Local Service Businesses</p>
                </div>
                <div>
                  <p className="text-sm font-semibold opacity-90">Our Approach</p>
                  <p className="text-2xl font-bold">Google Ads + Local SEO + AI</p>
                </div>
                <div>
                  <p className="text-sm font-semibold opacity-90">Our Commitment</p>
                  <p className="text-2xl font-bold">Transparent, No-Contract Results</p>
                </div>
              </div>
            </div>
          </FadeUp>
        </div>

        {/* Values */}
        <FadeUp>
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((value, idx) => (
                <FadeUp key={idx} delay={idx * 0.05}>
                  <div className="card">
                    <div className="flex items-start gap-4">
                      <CheckCircle className="w-6 h-6 text-primary-500 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold text-slate-900 mb-2">{value.title}</h3>
                        <p className="text-slate-600">{value.description}</p>
                      </div>
                    </div>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </FadeUp>

        {/* CTA */}
        <FadeUp>
          <div className="bg-navy-900 rounded-2xl p-12 text-center text-white">
            <h2 className="text-4xl font-bold mb-4">Ready to grow your business?</h2>
            <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
              Let&apos;s discuss how we can help you generate more qualified leads and book more jobs.
            </p>
            <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="btn-primary group">
              Book Your Free Strategy Call
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </FadeUp>
      </div>
    </main>
  );
}
