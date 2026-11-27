import Link from "next/link";
import type { LocalAgencyPage } from "@/lib/local-agency-pages";

export function LocalAgencyLanding({ page }: { page: LocalAgencyPage }) {
  return (
    <main className="marketing-guide pt-28 pb-20 md:pt-36">
      <div className="container-max">
        <header className="max-w-4xl mb-12">
          <h1 className="mb-6">{page.title}</h1>
          <p className="text-xl leading-relaxed mb-6">{page.intro}</p>
          <Link className="btn-primary" href="/contact">{page.action}</Link>
        </header>
        <div className="max-w-3xl space-y-10">
          {page.sections.map(({ heading, copy, link }) => (
            <section key={heading} className="border-t pt-6">
              <h2 className="text-3xl mb-4">{heading}</h2>
              <p className="leading-relaxed">{copy}</p>
              {link && (
                <Link href={link.href} className="inline-block mt-4 font-semibold underline underline-offset-4">
                  {link.label}
                </Link>
              )}
            </section>
          ))}
          <Link className="btn-primary" href="/contact">{page.action}</Link>
        </div>
      </div>
    </main>
  );
}
