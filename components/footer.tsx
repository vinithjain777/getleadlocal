"use client";

import Link from "next/link";
import { Mail, Phone, Linkedin, Twitter } from "lucide-react";
import { NAVIGATION, SITE_CONFIG } from "@/lib/constants";
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
                  href="/services#google-ads"
                  className="hover:text-primary-400 transition-colors"
                >
                  Google Ads
                </Link>
              </li>
              <li>
                <Link
                  href="/services#meta-ads"
                  className="hover:text-primary-400 transition-colors"
                >
                  Meta Ads
                </Link>
              </li>
              <li>
                <Link
                  href="/services#local-seo"
                  className="hover:text-primary-400 transition-colors"
                >
                  Local SEO
                </Link>
              </li>
              <li>
                <Link
                  href="/services#ai-automation"
                  className="hover:text-primary-400 transition-colors"
                >
                  AI Automation
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white mb-4">Contact</h4>
            <div className="space-y-3">
              <a
                href={`mailto:hello@getleadlocal.com`}
                className="flex items-center gap-2 text-sm hover:text-primary-400 transition-colors"
              >
                <Mail className="w-4 h-4" />
                hello@getleadlocal.com
              </a>
              <a
                href="tel:(888)2040186"
                className="flex items-center gap-2 text-sm hover:text-primary-400 transition-colors"
              >
                <Phone className="w-4 h-4" />
                (888) 204-0186
              </a>
            </div>
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
