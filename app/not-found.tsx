"use client";

import Link from "next/link";
import { FadeUp } from "@/components/animations";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main className="pt-24 md:pt-32 pb-12 min-h-screen flex items-center">
      <div className="container-max">
        <FadeUp>
          <div className="text-center max-w-2xl mx-auto">
            <div className="mb-8">
              <h1 className="text-9xl font-bold text-primary-500 mb-4">404</h1>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                Page Not Found
              </h2>
              <p className="text-xl text-slate-600 mb-8">
                Sorry, we couldn&apos;t find the page you&apos;re looking for. It might have been moved
                or deleted.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/"
                className="btn-primary inline-flex items-center gap-2 justify-center"
              >
                <Home className="w-5 h-5" />
                Go to Homepage
              </Link>
              <button
                onClick={() => window.history.back()}
                className="btn-outline inline-flex items-center gap-2 justify-center"
              >
                <ArrowLeft className="w-5 h-5" />
                Go Back
              </button>
            </div>

            <div className="mt-12 pt-12 border-t border-slate-200">
              <h3 className="text-lg font-semibold text-slate-900 mb-4">
                Looking for something specific?
              </h3>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link
                  href="/services"
                  className="text-primary-500 hover:text-primary-600 font-medium"
                >
                  Our Services
                </Link>
                <Link
                  href="/industries"
                  className="text-primary-500 hover:text-primary-600 font-medium"
                >
                  Industries We Serve
                </Link>
                <Link
                  href="/contact"
                  className="text-primary-500 hover:text-primary-600 font-medium"
                >
                  Contact Us
                </Link>
                <Link
                  href="/blog"
                  className="text-primary-500 hover:text-primary-600 font-medium"
                >
                  Blog
                </Link>
              </div>
            </div>
          </div>
        </FadeUp>
      </div>
    </main>
  );
}
