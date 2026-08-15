"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { FadeUp } from "./animations";
import { Mail, Phone, Briefcase, User, CheckCircle } from "lucide-react";

const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  business: z.string().min(2, "Business name is required"),
  website: z.string().url("Valid website URL required").optional().or(z.literal("")),
  email: z.string().email("Valid email required"),
  phone: z.string().min(10, "Valid phone number required"),
  budget: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setLoading(true);
    try {
      // Submit to Web3Forms
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_key: "81f1a7af-0858-44be-b131-1d4ab5633954",
          name: data.name,
          business: data.business,
          website: data.website || "Not provided",
          email: data.email,
          phone: data.phone,
          budget: data.budget || "Not specified",
          message: data.message,
          form_type: "Contact Page Form",
          from_name: "GetLeadLocal Website",
          subject: `New Contact Form: ${data.name} - ${data.business}`,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitted(true);
        reset();
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("There was an error submitting the form. Please try again or call us directly.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <FadeUp>
      <div className="bg-white border border-slate-200 rounded-xl p-6 md:p-8 max-w-2xl mx-auto">
        {submitted ? (
          <div className="text-center py-12">
            <div className="inline-flex p-3 bg-green-50 rounded-lg mb-4">
              <CheckCircle className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-2xl font-semibold text-slate-900 mb-2">Thank you!</h3>
            <p className="text-slate-600 mb-6">
              We&apos;ll review your information and get back to you within 24 hours with a customized
              strategy.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name */}
              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-2">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    Your Name
                  </div>
                </label>
                <input
                  {...register("name")}
                  type="text"
                  placeholder="Your full name"
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                />
                {errors.name && <p className="text-sm text-red-600 mt-1">{errors.name.message}</p>}
              </div>

              {/* Business */}
              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-2">
                  <div className="flex items-center gap-2">
                    <Briefcase className="w-4 h-4" />
                    Business Name
                  </div>
                </label>
                <input
                  {...register("business")}
                  type="text"
                  placeholder="Your Business"
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                />
                {errors.business && (
                  <p className="text-sm text-red-600 mt-1">{errors.business.message}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-2">
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    Email
                  </div>
                </label>
                <input
                  {...register("email")}
                  type="email"
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                />
                {errors.email && (
                  <p className="text-sm text-red-600 mt-1">{errors.email.message}</p>
                )}
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-2">
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    Phone Number
                  </div>
                </label>
                <input
                  {...register("phone")}
                  type="tel"
                  placeholder="(555) 123-4567"
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                />
                {errors.phone && (
                  <p className="text-sm text-red-600 mt-1">{errors.phone.message}</p>
                )}
              </div>

              {/* Website */}
              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-2">
                  Website (optional)
                </label>
                <input
                  {...register("website")}
                  type="url"
                  placeholder="https://yourwebsite.com"
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                />
              </div>

              {/* Budget */}
              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-2">
                  Marketing Budget
                </label>
                <select
                  {...register("budget")}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                >
                  <option value="">Select...</option>
                  <option value="1000-2000">$1,000 - $2,000/month</option>
                  <option value="2000-3000">$2,000 - $3,000/month</option>
                  <option value="3000-5000">$3,000 - $5,000/month</option>
                  <option value="5000+">$5,000+/month</option>
                </select>
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-semibold text-slate-900 mb-2">
                Tell us about your business
              </label>
              <textarea
                {...register("message")}
                placeholder="What are your main challenges? What results are you looking for?"
                rows={4}
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
              />
              {errors.message && (
                <p className="text-sm text-red-600 mt-1">{errors.message.message}</p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Sending..." : "Get Your Free Strategy"}
            </button>

            <p className="text-xs text-slate-600 text-center">
              We respect your privacy. Your information is safe with us.
            </p>
          </form>
        )}
      </div>
    </FadeUp>
  );
}
