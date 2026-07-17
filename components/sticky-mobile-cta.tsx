"use client";

import Link from "next/link";
import { PhoneCall, Send } from "lucide-react";
import { site } from "@/lib/site";

/**
 * Fixed bottom action bar shown on mobile only. Mobile visitors from
 * paid ads convert far more often via a persistent, thumb-friendly
 * call/quote bar than they do scrolling back up to a navbar CTA.
 */
export function StickyMobileCTA() {
  const telHref = `tel:${site.phone.replace(/[^\d+]/g, "")}`;

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 flex border-t border-slate-200 bg-white shadow-[0_-4px_20px_rgba(15,23,42,0.08)] md:hidden">
      <a
        href={telHref}
        className="flex flex-1 items-center justify-center gap-2 border-r border-slate-200 py-3.5 text-sm font-semibold text-navy-900 active:bg-slate-50"
      >
        <PhoneCall className="h-4 w-4 text-primary-600" />
        Call Now
      </a>
      <Link
        href="/contact"
        className="flex flex-1 items-center justify-center gap-2 bg-secondary-500 py-3.5 text-sm font-bold text-navy-900 active:bg-secondary-400"
      >
        <Send className="h-4 w-4" />
        Get Free Quote
      </Link>
    </div>
  );
}
