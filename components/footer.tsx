"use client";

import Link from "next/link";
import { Linkedin, Twitter } from "lucide-react";
import { NAVIGATION } from "@/lib/constants";
import { Logo } from "@/components/logo";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-900 text-slate-300">
      <div className="container-max py-12 md:py-16">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12 pb-12 border-b border-white/10">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <Logo light textClassName="text-white" />
            </div>
            <p className="text-sm text-slate-400">Digital marketing for local service businesses</p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold text-white mb-4">Navigation</h4>
            <ul className="space-y-2">
              {NAVIGATION.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm hover:text-primary-400 transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/services/google-ads"
                  className="hover:text-primary-400 transition-colors"
                >
                  Google Ads
                </Link>
              </li>
              <li>
                <Link
                  href="/services/meta-ads"
                  className="hover:text-primary-400 transition-colors"
                >
                  Facebook & Instagram Ads
                </Link>
              </li>
              <li>
                <Link
                  href="/services/local-seo"
                  className="hover:text-primary-400 transition-colors"
                >
                  Local SEO
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white mb-4">Get Started</h4>
            <Link
              href="/contact"
              className="inline-block text-sm bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded-lg transition-colors"
            >
              Contact Us Today
            </Link>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-400">
            © {currentYear} GetLeadLocal. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-slate-400 hover:text-primary-400 transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="text-slate-400 hover:text-primary-400 transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
