import { FadeUp, StaggerContainer, StaggerItem } from "@/components/animations";
import { ContactForm } from "@/components/contact-form";
import { CALENDLY_URL } from "@/lib/constants";
import {
  ArrowRight,
  CheckCircle2,
  Eye,
  Heart,
  Image,
  Share2,
  Target,
  Users,
} from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Facebook & Instagram Ads for Local Businesses",
  description:
    "Build brand awareness and generate leads with Meta Ads (Facebook & Instagram). Targeted social media advertising for local service businesses.",
};

const BENEFITS = [
  {
    icon: Eye,
    title: "Brand Awareness",
    description: "Build recognition and trust in your local market",
  },
  {
    icon: Target,
    title: "Precise Targeting",
    description: "Reach exact demographics, interests, and local areas",
  },
  {
    icon: Image,
    title: "Visual Storytelling",
    description: "Showcase before/after photos and project galleries",
  },
  {
    icon: Users,
    title: "Retargeting",
    description: "Re-engage website visitors who didn't convert",
  },
];

const FEATURES = [
  "Custom audience creation and targeting",
  "Scroll-stopping ad creative design",
  "Before/after photo campaigns",
  "Video ad production and editing",
  "Local area targeting (zip code and radius)",
  "Website visitor retargeting",
  "Lead generation forms on Facebook",
  "A/B testing for ad optimization",
  "Conversion tracking and reporting",
];

const PROCESS_STEPS = [
  {
    number: 1,
    title: "Audience Research",
    description:
      "We identify your ideal customers' demographics, interests, and behaviors on Facebook and Instagram.",
  },
  {
    number: 2,
    title: "Creative Development",
    description:
      "We create eye-catching ad creatives with compelling copy and visuals that stop the scroll.",
  },
  {
    number: 3,
    title: "Campaign Launch",
    description:
      "Your ads go live targeting precise local audiences with conversion tracking in place.",
  },
  {
    number: 4,
    title: "Test & Optimize",
    description:
      "We continuously test different creatives, audiences, and messaging to improve results.",
  },
];

const USE_CASES = [
  {
    title: "Brand Awareness Campaigns",
    description: "Build recognition in your local market before customers need your services",
    icon: Heart,
  },
  {
    title: "Retargeting Campaigns",
    description: "Re-engage website visitors who viewed your services but didn't book",
    icon: Target,
  },
  {
    title: "Lead Generation",
    description: "Capture leads directly on Facebook/Instagram with instant forms",
    icon: Users,
  },
  {
    title: "Before/After Showcases",
    description: "Perfect for visual industries like contractors, renovations, and landscaping",
    icon: Image,
  },
];

const FAQS = [
  {
    question: "How is Meta Ads different from Google Ads?",
    answer:
      "Google Ads captures people actively searching for your services (high intent). Meta Ads (Facebook/Instagram) builds awareness and reaches people before they search. Meta Ads work best for retargeting, visual industries, and building brand recognition in your local market.",
  },
  {
    question: "What budget do I need for Meta Ads?",
    answer:
      "Most local businesses invest $1,000-$3,000 per month in ad spend for Meta Ads. The exact amount depends on your market size, competition, and goals. We'll recommend a budget during our strategy call.",
  },
  {
    question: "Do you create the ad images and videos?",
    answer:
      "We design ad creatives using your existing photos, before/after images, and brand assets. If you need professional photography or video production, we can recommend partners or provide guidance on DIY options.",
  },
  {
    question: "Can Meta Ads generate leads for service businesses?",
    answer:
      "Yes. While Meta Ads are often used for brand awareness, they can generate leads through retargeting campaigns, lead generation forms, and targeted local promotions. They work best combined with Google Ads or SEO.",
  },
  {
    question: "How long does it take to see results?",
    answer:
      "You'll typically see initial results (impressions, clicks, engagement) within the first week. Lead generation usually takes 2-4 weeks as we test different audiences and creatives to find what works best.",
  },
];

export default function MetaAdsPage() {
  return (
    <main className="pt-24 md:pt-32 pb-12">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-16 md:py-24">
        <div className="container-max">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <FadeUp>
              <div className="inline-flex items-center gap-2 bg-blue-500 px-4 py-2 rounded-full mb-6">
                <Share2 className="w-4 h-4 text-white" />
                <span className="text-sm font-semibold text-white">
                  Meta Ads (Facebook & Instagram)
                </span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
                Build Your Brand on Facebook & Instagram
              </h1>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                Reach local customers where they spend their time with targeted Meta Ads campaigns
                designed to build awareness and generate qualified leads.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={CALENDLY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex gap-2 group"
                >
                  Book Your Free Strategy Call
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
                <Link href="/contact" className="btn-outline inline-flex gap-2">
                  Contact Us
                </Link>
              </div>
            </FadeUp>

            <FadeUp delay={0.2}>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl blur-3xl"></div>
                <div className="relative bg-white rounded-2xl p-8 shadow-xl">
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-blue-50 rounded-lg">
                        <Eye className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-900 mb-1">
                          Reach Local Customers
                        </h3>
                        <p className="text-sm text-slate-600">
                          Target by zip code, radius, and demographics in your service area
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-purple-50 rounded-lg">
                        <Image className="w-6 h-6 text-purple-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-900 mb-1">
                          Visual Storytelling
                        </h3>
                        <p className="text-sm text-slate-600">
                          Show off your work with before/after photos and video
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-pink-50 rounded-lg">
                        <Users className="w-6 h-6 text-pink-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-900 mb-1">Retarget Visitors</h3>
                        <p className="text-sm text-slate-600">
                          Re-engage people who viewed your website but didn&apos;t book
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <FadeUp>
            <div className="text-center mb-12 md:mb-16 max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                Why Meta Ads Work for Local Businesses
              </h2>
              <p className="text-lg text-slate-600">
                Facebook and Instagram give you powerful tools to reach local customers, build
                brand awareness, and stay top-of-mind.
              </p>
            </div>
          </FadeUp>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {BENEFITS.map((benefit) => {
              const Icon = benefit.icon;
              return (
                <StaggerItem key={benefit.title}>
                  <div className="card h-full text-center">
                    <div className="inline-flex p-4 bg-blue-50 rounded-xl mb-4">
                      <Icon className="w-8 h-8 text-blue-500" />
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-slate-600 text-sm">{benefit.description}</p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="section-padding bg-slate-50">
        <div className="container-max">
          <FadeUp>
            <div className="text-center mb-12 md:mb-16 max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                How Local Businesses Use Meta Ads
              </h2>
              <p className="text-lg text-slate-600">
                Different campaign types to achieve different business goals
              </p>
            </div>
          </FadeUp>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {USE_CASES.map((useCase) => {
              const Icon = useCase.icon;
              return (
                <StaggerItem key={useCase.title}>
                  <div className="card h-full">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-blue-50 rounded-lg flex-shrink-0">
                        <Icon className="w-6 h-6 text-blue-500" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-slate-900 mb-2">
                          {useCase.title}
                        </h3>
                        <p className="text-slate-600">{useCase.description}</p>
                      </div>
                    </div>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <FadeUp>
              <div className="inline-flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-full mb-6 w-fit">
                <CheckCircle2 className="w-4 h-4 text-blue-600" />
                <span className="text-sm font-semibold text-blue-700">
                  Comprehensive Management
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                What&apos;s Included in Our Meta Ads Service
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                We handle every aspect of your Facebook and Instagram advertising, from creative
                development to targeting and optimization.
              </p>
            </FadeUp>

            <FadeUp delay={0.2}>
              <div className="bg-slate-50 rounded-2xl p-8">
                <ul className="space-y-4">
                  {FEATURES.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-slate-50">
        <div className="container-max">
          <FadeUp>
            <div className="text-center mb-12 md:mb-16 max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                Our Meta Ads Process
              </h2>
              <p className="text-lg text-slate-600">
                A proven 4-step process to launch and optimize your campaigns
              </p>
            </div>
          </FadeUp>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {PROCESS_STEPS.map((step) => (
              <StaggerItem key={step.number}>
                <div className="relative">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-500 text-white font-bold rounded-full mb-4 relative z-10 text-lg">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">{step.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{step.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <FadeUp delay={0.4}>
            <div className="mt-12 text-center">
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex gap-2"
              >
                Get Started with Meta Ads →
              </a>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <FadeUp>
            <div className="text-center mb-12 md:mb-16 max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-slate-600">
                Common questions about Meta Ads for local businesses
              </p>
            </div>
          </FadeUp>

          <div className="max-w-3xl mx-auto space-y-4">
            {FAQS.map((faq, idx) => (
              <FadeUp key={idx} delay={idx * 0.05}>
                <div className="card">
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">{faq.question}</h3>
                  <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="section-padding bg-slate-50">
        <div className="container-max">
          <FadeUp>
            <div className="text-center mb-12 md:mb-16 max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                Ready to Build Your Brand?
              </h2>
              <p className="text-lg text-slate-600">
                Let&apos;s discuss how Meta Ads can help you reach more local customers on Facebook
                and Instagram.
              </p>
            </div>
          </FadeUp>

          <FadeUp delay={0.2}>
            <div className="max-w-2xl mx-auto">
              <ContactForm />
            </div>
          </FadeUp>
        </div>
      </section>
    </main>
  );
}
