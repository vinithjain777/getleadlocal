"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ArrowRight, CheckCircle2, Loader2, ShieldCheck } from "lucide-react";

const leadSchema = z.object({
  name: z.string().min(2, "Enter your full name"),
  phone: z.string().min(10, "Enter a valid phone number").max(20, "Enter a valid phone number"),
  email: z.string().email("Enter a valid email address"),
  service: z.string().min(1, "Select a service"),
});

type LeadFormData = z.infer<typeof leadSchema>;

const SERVICE_OPTIONS = [
  "Google Ads",
  "Meta Ads",
  "Local SEO",
  "Website Design",
  "Not sure yet",
];

/**
 * Primary hero lead-capture form. Replaces the old image + single-field
 * "quick audit" widget with a short, fully qualifying form (name, phone,
 * email, service) — this is the highest-intent conversion point on the
 * page, so it's designed to be the visual centerpiece of the hero rather
 * than a secondary floating card.
 */
export function LeadCaptureForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LeadFormData>({
    resolver: zodResolver(leadSchema),
  });

  const onSubmit = async (data: LeadFormData) => {
    setStatus("loading");
    try {
      // TODO: wire up to /api/contact or CRM webhook in production
      await new Promise((resolve) => setTimeout(resolve, 800));
      console.log("Hero lead captured:", data);
      setStatus("success");
    } catch (error) {
      console.error("Hero lead submission error:", error);
      setStatus("idle");
    }
  };

  if (status === "success") {
    return (
      <div className="flex flex-col items-center gap-3 rounded-2xl bg-white p-8 text-center shadow-xl ring-1 ring-slate-900/5 md:p-10">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-green-50">
          <CheckCircle2 className="h-7 w-7 text-green-600" />
        </span>
        <p className="text-lg font-bold text-slate-900">You're all set!</p>
        <p className="text-sm text-slate-600">
          A strategist will call you within 24 hours with your custom growth plan.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-2xl bg-white p-6 shadow-xl ring-1 ring-slate-900/5 md:p-8">
      <div className="mb-5">
        <p className="text-lg font-bold text-slate-900 md:text-xl">
          Get Your Free Marketing Plan
        </p>
        <p className="mt-1 text-sm text-slate-500">
          Tell us about your business — we&apos;ll reply with a custom plan within 24 hours.
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-4">
        <div>
          <input
            {...register("name")}
            type="text"
            placeholder="Full name"
            aria-label="Full name"
            aria-invalid={errors.name ? "true" : "false"}
            className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm text-slate-900 transition-all focus:border-transparent focus:outline-none focus:ring-2 focus:ring-primary-500"
          />
          {errors.name && <p className="mt-1 text-xs text-red-600">{errors.name.message}</p>}
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <input
              {...register("phone")}
              type="tel"
              inputMode="tel"
              placeholder="Phone number"
              aria-label="Phone number"
              aria-invalid={errors.phone ? "true" : "false"}
              className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm text-slate-900 transition-all focus:border-transparent focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
            {errors.phone && <p className="mt-1 text-xs text-red-600">{errors.phone.message}</p>}
          </div>
          <div>
            <input
              {...register("email")}
              type="email"
              placeholder="Email address"
              aria-label="Email address"
              aria-invalid={errors.email ? "true" : "false"}
              className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm text-slate-900 transition-all focus:border-transparent focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
            {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email.message}</p>}
          </div>
        </div>

        <div>
          <select
            {...register("service")}
            defaultValue=""
            aria-label="Service you're interested in"
            aria-invalid={errors.service ? "true" : "false"}
            className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 transition-all focus:border-transparent focus:outline-none focus:ring-2 focus:ring-primary-500"
          >
            <option value="" disabled>
              What do you need help with?
            </option>
            {SERVICE_OPTIONS.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          {errors.service && (
            <p className="mt-1 text-xs text-red-600">{errors.service.message}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={status === "loading"}
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-secondary-500 px-5 py-3.5 text-sm font-bold text-navy-900 transition-all hover:bg-secondary-400 hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {status === "loading" ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : (
            <>
              Get My Free Plan
              <ArrowRight className="h-4 w-4" />
            </>
          )}
        </button>

        <p className="flex items-center justify-center gap-1.5 text-center text-xs text-slate-500">
          <ShieldCheck className="h-3.5 w-3.5 text-primary-500" />
          No spam. No obligation. 24-hour response guaranteed.
        </p>
      </form>
    </div>
  );
}
