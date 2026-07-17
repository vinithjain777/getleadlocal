import { ContactForm } from "@/components/contact-form";
import { FadeUp } from "@/components/animations";
import { Phone, Mail, MapPin } from "lucide-react";

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
              Let's Talk About Your Lead Generation
            </h1>
            <p className="text-xl text-slate-600">
              Fill out the form below and we'll get back to you within 24 hours with a customized
              strategy.
            </p>
          </div>
        </FadeUp>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <ContactForm />
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <FadeUp delay={0.1}>
              <div className="card">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary-50 rounded-lg">
                    <Phone className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">Call Us</h3>
                    <a href="tel:(888)2040186" className="text-primary-600 hover:text-primary-700">
                      (888) 204-0186
                    </a>
                    <p className="text-sm text-slate-600 mt-1">Mon-Fri, 9am-5pm EST</p>
                  </div>
                </div>
              </div>
            </FadeUp>

            <FadeUp delay={0.2}>
              <div className="card">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary-50 rounded-lg">
                    <Mail className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">Email</h3>
                    <a
                      href="mailto:hello@getleadlocal.com"
                      className="text-primary-600 hover:text-primary-700"
                    >
                      hello@getleadlocal.com
                    </a>
                    <p className="text-sm text-slate-600 mt-1">Usually responds in 1 hour</p>
                  </div>
                </div>
              </div>
            </FadeUp>

            <FadeUp delay={0.3}>
              <div className="card">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary-50 rounded-lg">
                    <MapPin className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">Based In</h3>
                    <p className="text-slate-600">United States</p>
                    <p className="text-sm text-slate-600 mt-1">We serve clients nationwide</p>
                  </div>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>

        {/* FAQ Preview */}
        <FadeUp>
          <div className="bg-slate-50 rounded-xl p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">Have Questions?</h2>
            <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
              Check out our FAQ section to learn more about our services, pricing, and process.
            </p>
            <a href="/#faq" className="text-primary-600 font-semibold hover:text-primary-700">
              View FAQs →
            </a>
          </div>
        </FadeUp>
      </div>
    </main>
  );
}
