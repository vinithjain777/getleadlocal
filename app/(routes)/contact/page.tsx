import { ContactForm } from "@/components/contact-form";
import { FadeUp } from "@/components/animations";
import Link from "next/link";

export const metadata = {
  title: "Contact Us",
  description: "Get in touch with GetLeadLocal to discuss your lead generation needs.",
};

export default function ContactPage() {
  return (
    <main className="pt-24 md:pt-32 pb-12">
      <div className="container-max">
        {/* Header */}
        <FadeUp>
          <div className="text-center mb-12 md:mb-16 max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
              Let&apos;s Talk About Your Lead Generation
            </h1>
            <p className="text-xl text-slate-600">
              Fill out the form below and we&apos;ll get back to you within 24 hours with a customized
              strategy.
            </p>
          </div>
        </FadeUp>

        <div className="max-w-3xl mx-auto mb-16">
          <ContactForm />
        </div>

        {/* FAQ Preview */}
        <FadeUp>
          <div className="bg-slate-50 rounded-xl p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">Have Questions?</h2>
            <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
              Check out our FAQ section to learn more about our services, pricing, and process.
            </p>
            <Link href="/#faq" className="text-primary-600 font-semibold hover:text-primary-700">
              View FAQs →
            </Link>
          </div>
        </FadeUp>
      </div>
    </main>
  );
}
