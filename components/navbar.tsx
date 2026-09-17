"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, ChevronDown, Menu, X } from "lucide-react";
import { NAVIGATION } from "@/lib/constants";
import { Logo } from "@/components/logo";

const SERVICES = [
  { label: "Google Ads", href: "/services/google-ads" },
  { label: "Facebook & Instagram Ads", href: "/services/meta-ads" },
  { label: "Local SEO", href: "/services/local-seo" },
];

export function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const mobileButton = useRef<HTMLButtonElement>(null);
  const servicesButton = useRef<HTMLButtonElement>(null);
  const closeMenus = () => {
    setMobileOpen(false);
    setServicesOpen(false);
  };
  const active = (href: string) =>
    pathname === href || (href !== "/" && pathname.startsWith(`${href}/`));
  const linkStyle = (href: string) =>
    `rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${active(href) ? "bg-primary-50 text-primary-700" : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"}`;

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
  }, [pathname]);
  useEffect(() => {
    const outside = (event: PointerEvent) => {
      if (!navRef.current?.contains(event.target as Node)) closeMenus();
    };
    document.addEventListener("pointerdown", outside);
    return () => document.removeEventListener("pointerdown", outside);
  }, []);

  return (
    <nav
      ref={navRef}
      aria-label="Main navigation"
      onKeyDown={(event) => {
        if (event.key === "Escape") {
          if (mobileOpen) mobileButton.current?.focus();
          else if (servicesOpen) servicesButton.current?.focus();
          closeMenus();
        }
      }}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node)) closeMenus();
      }}
      className="fixed top-0 z-50 w-full border-b border-slate-200/80 bg-white/95 backdrop-blur-xl"
    >
      <div className="container-max flex h-16 items-center justify-between gap-4 lg:h-20">
        <Link
          href="/"
          aria-label="GetLeadLocal home"
          onClick={closeMenus}
          className="shrink-0 rounded-lg"
        >
          <Logo />
        </Link>
        <div className="hidden items-center gap-1 lg:flex">
          {NAVIGATION.map((item) =>
            item.href === "/services" ? (
              <div key={item.href} className="relative flex items-center">
                <Link
                  href={item.href}
                  onClick={closeMenus}
                  aria-current={pathname === item.href ? "page" : undefined}
                  className={linkStyle(item.href)}
                >
                  {item.label}
                </Link>
                <button
                  ref={servicesButton}
                  type="button"
                  aria-label="Service pages"
                  aria-expanded={servicesOpen}
                  aria-controls="desktop-services"
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className="rounded-lg p-2 text-slate-600 hover:bg-primary-50"
                >
                  <ChevronDown
                    aria-hidden="true"
                    className={`h-4 w-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`}
                  />
                </button>
                <div
                  id="desktop-services"
                  hidden={!servicesOpen}
                  className="absolute left-0 top-full mt-3 w-72 rounded-2xl border border-slate-200 bg-white p-2 shadow-xl"
                >
                  {SERVICES.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      onClick={closeMenus}
                      aria-current={pathname === service.href ? "page" : undefined}
                      className={`block ${linkStyle(service.href)}`}
                    >
                      {service.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                aria-current={pathname === item.href ? "page" : undefined}
                className={linkStyle(item.href)}
              >
                {item.label}
              </Link>
            )
          )}
        </div>
        <Link
          href="/contact"
          className="btn-primary hidden shrink-0 px-5 py-2.5 text-sm lg:inline-flex"
        >
          Get My Free Plan <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
        </Link>
        <button
          ref={mobileButton}
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={mobileOpen}
          aria-controls="mobile-navigation"
          className="rounded-xl p-3 text-slate-900 hover:bg-slate-100 lg:hidden"
        >
          {mobileOpen ? (
            <X aria-hidden="true" className="h-6 w-6" />
          ) : (
            <Menu aria-hidden="true" className="h-6 w-6" />
          )}
        </button>
      </div>
      <div
        id="mobile-navigation"
        hidden={!mobileOpen}
        className="max-h-[calc(100dvh-8rem)] overflow-y-auto border-t border-slate-100 bg-white lg:hidden"
      >
        <div className="container-max space-y-1 py-4">
          {NAVIGATION.map((item) => (
            <div key={item.href}>
              <Link
                href={item.href}
                onClick={closeMenus}
                aria-current={pathname === item.href ? "page" : undefined}
                className={`block ${linkStyle(item.href)}`}
              >
                {item.label}
              </Link>
              {item.href === "/services" && (
                <div className="ml-4 border-l border-primary-100 pl-3">
                  {SERVICES.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      onClick={closeMenus}
                      aria-current={pathname === service.href ? "page" : undefined}
                      className={`block ${linkStyle(service.href)}`}
                    >
                      {service.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <Link href="/contact" onClick={closeMenus} className="btn-primary !mt-4 w-full">
            Get My Free Plan <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </nav>
  );
}
