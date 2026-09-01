"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { NAVIGATION } from "@/lib/constants";
import { Logo } from "@/components/logo";

const SERVICES_DROPDOWN = [
  { label: "Google Ads", href: "/services/google-ads" },
  { label: "Meta Ads (Facebook & Instagram)", href: "/services/meta-ads" },
  { label: "Local SEO", href: "/services/local-seo" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white z-50 border-b border-slate-200 shadow-sm">
      <div className="container-max flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Logo textClassName="hidden sm:inline" />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {NAVIGATION.map((item) => {
            if (item.href === "/services") {
              return (
                <div
                  key={item.href}
                  className="relative"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <Link
                    href={item.href}
                    className="text-sm font-medium text-slate-600 hover:text-primary-500 transition-colors flex items-center gap-1"
                  >
                    {item.label}
                    <ChevronDown className="w-4 h-4" />
                  </Link>
                  
                  {/* Dropdown Menu */}
                  {servicesOpen && (
                    <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-slate-200 py-2 z-50">
                      {SERVICES_DROPDOWN.map((service) => (
                        <Link
                          key={service.href}
                          href={service.href}
                          className="block px-4 py-2.5 text-sm text-slate-600 hover:text-primary-500 hover:bg-slate-50 transition-colors"
                        >
                          {service.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            }
            
            return (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-slate-600 hover:text-primary-500 transition-colors"
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        {/* CTA Button */}
        <div className="hidden md:flex items-center gap-5">
          <Link
            href="/contact"
            className="px-6 py-2.5 bg-secondary-500 text-navy-900 font-bold rounded-lg hover:bg-secondary-400 hover:-translate-y-0.5 transition-all"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 hover:bg-slate-100 rounded-lg transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white">
          <div className="container-max py-4 flex flex-col gap-4">
            {NAVIGATION.map((item) => {
              if (item.href === "/services") {
                return (
                  <div key={item.href}>
                    <button
                      onClick={() => setServicesOpen(!servicesOpen)}
                      className="w-full flex items-center justify-between text-sm font-medium text-slate-600 hover:text-primary-500 py-2 transition-colors"
                    >
                      {item.label}
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${
                          servicesOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {servicesOpen && (
                      <div className="pl-4 mt-2 space-y-2">
                        {SERVICES_DROPDOWN.map((service) => (
                          <Link
                            key={service.href}
                            href={service.href}
                            className="block text-sm text-slate-600 hover:text-primary-500 py-2 transition-colors"
                            onClick={() => setIsOpen(false)}
                          >
                            {service.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }
              
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm font-medium text-slate-600 hover:text-primary-500 py-2 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              );
            })}
            <Link
              href="/contact"
              className="px-6 py-2.5 bg-secondary-500 text-navy-900 font-bold rounded-lg hover:bg-secondary-400 transition-colors text-center"
              onClick={() => setIsOpen(false)}
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}