import { FadeUp } from "@/components/animations";
import { INDUSTRIES, SERVICES, SITE_CONFIG } from "@/lib/constants";
import * as Icons from "lucide-react";
import { VisualPanel } from "@/components/visual-panel";
import type { LucideIcon } from "lucide-react";
import { CALENDLY_URL } from "@/lib/constants";
import { INDUSTRY_CONTENT } from "@/lib/industry-content";
import Link from "next/link";
import { notFound } from "next/navigation";

interface IndustryPageProps {
  params: Promise<{ industry: string }>;
}

async function getIndustry(slug: string) {
  return INDUSTRIES.find((ind) => ind.id === slug);
}

const SERVICE_ROUTES: Record<string, string> = {
  "google-ads": "/services/google-ads",
  "meta-ads": "/services/meta-ads",
  "local-seo": "/services/local-seo",
};

export async function generateMetadata({ params }: IndustryPageProps) {
  const { industry } = await params;
  const ind = await getIndustry(industry);

  if (!ind) {
    notFound();
  }

  const canonical = `${SITE_CONFIG.url}/industries/${ind.id}`;
  const industryContent = INDUSTRY_CONTENT[ind.id];
  const description = industryContent
    ? industryContent.introduction
    : `${ind.description}. Google Ads, Meta Ads, and Local SEO built specifically for ${ind.name.toLowerCase()} businesses.`;

  return {
    title: `${ind.name} Lead Generation`,
    description,
    alternates: {
      canonical,
    },
    openGraph: {
      title: `${ind.name} Lead Generation | GetLeadLocal`,
      description,
      url: canonical,
      type: "website",
    },
    twitter: {
      card: "summary_large_image" as const,
      title: `${ind.name} Lead Generation | GetLeadLocal`,
      description,
    },
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
    notFound();
  }

  const IconComponent = (Icons[industry.icon as keyof typeof Icons] ||
    Icons.Briefcase) as LucideIcon;

  const industryContent = INDUSTRY_CONTENT[industry.id];

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
        <nav aria-label="Breadcrumb" className="mb-8 text-sm text-slate-600">
          <Link href="/industries" className="hover:text-primary-600">
            Industries
          </Link>
          <span aria-hidden="true" className="mx-2">
            /
          </span>
          <span aria-current="page">{industry.name}</span>
        </nav>

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
                {industryContent?.introduction ||
                  `${industry.description}. We create focused campaigns that connect ${industry.name.toLowerCase()} businesses with local customers who are ready to enquire.`}
              </p>
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex gap-2"
              >
                Book Your Free Strategy Call
              </a>
            </div>
          </FadeUp>

          <FadeUp delay={0.1} type="scaleIn">
            <div className="relative h-96 rounded-xl overflow-hidden shadow-lg">
              <VisualPanel icon={IconComponent} size="lg" label={industry.name} />
            </div>
          </FadeUp>
        </div>

        {industryContent && (
          <FadeUp>
            <section aria-labelledby="industry-strategy-heading" className="mb-20">
              <div className="mx-auto mb-10 max-w-3xl text-center">
                <h2
                  id="industry-strategy-heading"
                  className="mb-4 text-4xl font-bold text-slate-900"
                >
                  {industryContent.heading}
                </h2>
                <p className="text-lg leading-relaxed text-slate-600">{industryContent.overview}</p>
              </div>
              <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                {industryContent.priorities.map((strategy) => (
                  <article key={strategy.title} className="card h-full">
                    <h3 className="mb-3 text-xl font-semibold text-slate-900">{strategy.title}</h3>
                    <p className="leading-relaxed text-slate-600">{strategy.description}</p>
                  </article>
                ))}
              </div>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                {industryContent.resources.map((resource) => (
                  <Link
                    key={resource.href}
                    href={resource.href}
                    className="rounded-full border border-primary-200 bg-primary-50 px-4 py-2 text-sm font-semibold text-primary-700 hover:border-primary-500"
                  >
                    {resource.label}
                  </Link>
                ))}
              </div>
            </section>
          </FadeUp>
        )}

        {industry.id === "plumbing" && (
          <FadeUp>
            <section className="mb-20 rounded-2xl bg-slate-50 p-8 md:p-12" aria-labelledby="plumbing-plan-heading">
              <div className="max-w-3xl">
                <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-primary-700">Example plan, not client results</p>
                <h2 id="plumbing-plan-heading" className="mb-5 text-3xl font-bold text-slate-900 md:text-4xl">
                  What a plumbing lead generation plan could look like
                </h2>
                <p className="mb-8 text-lg leading-relaxed text-slate-600">
                  A plan starts with the jobs you want, the areas you serve, and who can answer enquiries. Here is an illustrative setup to discuss on a first call.
                </p>
              </div>
              <div className="grid gap-6 md:grid-cols-3">
                <article className="card h-full">
                  <h3 className="mb-3 text-xl font-semibold text-slate-900">Separate service demand</h3>
                  <p className="text-slate-600">Group urgent leak repairs, drain cleaning, and water heater work by intent. Match each group to the right message and page.</p>
                </article>
                <article className="card h-full">
                  <h3 className="mb-3 text-xl font-semibold text-slate-900">Set practical boundaries</h3>
                  <p className="text-slate-600">Choose service areas, dispatch hours, and an initial budget based on your capacity before launching ads.</p>
                </article>
                <article className="card h-full">
                  <h3 className="mb-3 text-xl font-semibold text-slate-900">Measure booked work</h3>
                  <p className="text-slate-600">Plan call and form tracking, then review which enquiries become appointments and completed jobs.</p>
                </article>
              </div>
              <div className="mt-8 rounded-xl border border-slate-200 bg-white p-6">
                <h3 className="mb-3 text-xl font-semibold text-slate-900">What we would cover on a first call</h3>
                <p className="leading-relaxed text-slate-600">
                  Your priority services, current lead sources, service radius, monthly budget range, and how calls are handled. From there, we can outline an audit, a proposed campaign structure, the tracking needed, and what to review in the first month.
                </p>
                <Link href="/blog/how-to-get-more-plumbing-leads" className="mt-4 inline-flex font-semibold text-primary-700 hover:text-primary-800">
                  Read the plumbing lead generation guide
                </Link>
              </div>
            </section>
          </FadeUp>
        )}

        {/* Services for this industry */}
        <FadeUp>
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">
              Services For {industry.name} Companies
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {SERVICES.slice(0, 3).map((service) => {
                const ServiceIcon = (Icons[service.icon as keyof typeof Icons] ||
                  Icons.Zap) as LucideIcon;
                return (
                  <FadeUp key={service.id} delay={0.05}>
                    <div className="card">
                      <div className="inline-flex p-3 bg-primary-50 rounded-lg mb-4">
                        <ServiceIcon className="w-6 h-6 text-primary-600" />
                      </div>
                      <h3 className="text-lg font-semibold text-slate-900 mb-2">{service.title}</h3>
                      <p className="text-slate-600 text-sm">{service.description}</p>
                      <Link
                        href={SERVICE_ROUTES[service.id] || "/services"}
                        className="mt-4 inline-flex text-sm font-semibold text-primary-600 hover:text-primary-700"
                      >
                        Explore {service.title}
                      </Link>
                    </div>
                  </FadeUp>
                );
              })}
            </div>
          </div>
        </FadeUp>

        {/* Challenges */}
        <FadeUp>
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">
              Common Challenges {industry.name} Businesses Face
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {industry.challenges.map((challenge, idx) => (
                <FadeUp key={idx} delay={0.05}>
                  <div className="card h-full">
                    <p className="text-slate-600">{challenge}</p>
                  </div>
                </FadeUp>
              ))}
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
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Get Your Free Strategy
            </a>
          </div>
        </FadeUp>
      </div>
    </main>
  );
}
