import { FadeUp } from "@/components/animations";
import { INDUSTRIES, SERVICES } from "@/lib/constants";
import * as Icons from "lucide-react";
import Link from "next/link";
import { VisualPanel } from "@/components/visual-panel";

interface IndustryPageProps {
  params: Promise<{ industry: string }>;
}

async function getIndustry(slug: string) {
  return INDUSTRIES.find((ind) => ind.id === slug);
}

export async function generateMetadata({ params }: IndustryPageProps) {
  const { industry } = await params;
  const ind = await getIndustry(industry);
  return {
    title: `${ind?.name} Lead Generation | GetLeadLocal`,
    description: `Get more ${ind?.name?.toLowerCase()} leads with our proven digital marketing strategies.`,
  };
}

export const dynamicParams = true;

export function generateStaticParams() {
  return INDUSTRIES.map((industry) => ({
    industry: industry.id,
  }));
}

export default async function IndustryPage({ params }: IndustryPageProps) {
  const { industry: industrySlug } = await params;
  const industry = await getIndustry(industrySlug);

  if (!industry) {
    return <div>Industry not found</div>;
  }

  const IconComponent = Icons[industry.icon as keyof typeof Icons] || Icons.Briefcase;

  const stats = [
    { metric: "Leads Generated", value: "127+", icon: "TrendingUp" },
    { metric: "Average ROI", value: "340%", icon: "Target" },
    { metric: "Cost Per Lead", value: "$18", icon: "DollarSign" },
    { metric: "Client Satisfaction", value: "4.9/5", icon: "Star" },
  ];

  const processs = [
    "Audit your current marketing efforts",
    "Develop customized strategy",
    "Set up campaigns and tracking",
    "Launch and optimize",
    "Monthly reporting and scaling",
  ];

  return (
    <main className="pt-24 md:pt-32 pb-12">
      <div className="container-max">
        {/* Hero */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <FadeUp>
            <div>
              <div className="inline-flex p-3 bg-primary-50 rounded-lg mb-6">
                <IconComponent className="w-8 h-8 text-primary-600" />
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
                More {industry.name} Leads For Your Business
              </h1>
              <p className="text-xl text-slate-600 mb-8">
                {industry.description} Our proven digital marketing strategies have helped hundreds
                of {industry.name?.toLowerCase()} companies grow their revenue.
              </p>
              <Link href="/contact" className="btn-primary inline-flex gap-2">
                Book Your Free Strategy Call
              </Link>
            </div>
          </FadeUp>

          <FadeUp delay={0.1} type="scaleIn">
            <div className="relative h-96 rounded-xl overflow-hidden shadow-lg">
              <VisualPanel icon={IconComponent} size="lg" label={industry.name} />
            </div>
          </FadeUp>
        </div>

        {/* Stats */}
        <FadeUp>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20 bg-slate-50 rounded-xl p-8">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-slate-900 mb-1">{stat.value}</p>
                <p className="text-sm text-slate-600">{stat.metric}</p>
              </div>
            ))}
          </div>
        </FadeUp>

        {/* Services for this industry */}
        <FadeUp>
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">
              Services For {industry.name} Companies
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {SERVICES.slice(0, 3).map((service) => {
                const ServiceIcon = Icons[service.icon as keyof typeof Icons] || Icons.Zap;
                return (
                  <FadeUp key={service.id} delay={0.05}>
                    <div className="card">
                      <div className="inline-flex p-3 bg-primary-50 rounded-lg mb-4">
                        <ServiceIcon className="w-6 h-6 text-primary-600" />
                      </div>
                      <h3 className="text-lg font-semibold text-slate-900 mb-2">{service.title}</h3>
                      <p className="text-slate-600 text-sm">{service.description}</p>
                    </div>
                  </FadeUp>
                );
              })}
            </div>
          </div>
        </FadeUp>

        {/* Process */}
        <FadeUp>
          <div className="mb-20 bg-slate-50 rounded-2xl p-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
              How We Help {industry.name} Companies
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              {processs.map((step, idx) => (
                <div key={idx} className="text-center">
                  <div className="inline-flex items-center justify-center w-10 h-10 bg-primary-600 text-white font-semibold rounded-full mb-4">
                    {idx + 1}
                  </div>
                  <p className="text-sm font-medium text-slate-900">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </FadeUp>

        {/* CTA */}
        <FadeUp>
          <div className="text-center bg-navy-900 rounded-2xl p-12 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready To Generate More {industry.name} Leads?
            </h2>
            <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
              Let&apos;s discuss a custom strategy tailored to your {industry.name?.toLowerCase()}{" "}
              business.
            </p>
            <Link href="/contact" className="btn-primary">
              Get Your Free Strategy
            </Link>
          </div>
        </FadeUp>
      </div>
    </main>
  );
}
