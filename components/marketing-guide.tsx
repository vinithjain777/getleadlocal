import Link from "next/link";
import { ArrowUpRight, Check, BookOpen } from "lucide-react";
import {
  GUIDE_CATEGORIES,
  GUIDE_DATE,
  getMarketingGuide,
  type MarketingGuide,
} from "@/lib/marketing-guides";
import { SITE_CONFIG } from "@/lib/constants";

export function MarketingGuidePage({ guide }: { guide: MarketingGuide }) {
  const category = GUIDE_CATEGORIES[guide.category];
  const enquiryUrl = guide.category === "websites" ? category.service + "#project-quote" : "/contact";
  const published = guide.published ?? GUIDE_DATE;
  const url = `${SITE_CONFIG.url}/${guide.slug}`;
  const related = guide.related.map((href) => ({
    href,
    label:
      getMarketingGuide(href.slice(1))?.title ??
      href
        .split("/")
        .filter(Boolean)
        .pop()!
        .replace(/-/g, " ")
        .replace(/\b\w/g, (letter) => letter.toUpperCase()),
  }));
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${url}#article`,
        headline: guide.title,
        description: guide.description,
        datePublished: published,
        dateModified: published,
        mainEntityOfPage: url,
        author: {
          "@type": "Organization",
          name: SITE_CONFIG.name,
          url: `${SITE_CONFIG.url}/about`,
        },
        publisher: { "@type": "Organization", name: SITE_CONFIG.name, url: SITE_CONFIG.url },
        image: `${SITE_CONFIG.url}/og-image.png`,
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Marketing guides",
            item: `${SITE_CONFIG.url}/guides`,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: category.name,
            item: `${SITE_CONFIG.url}/guides/${guide.category}`,
          },
          { "@type": "ListItem", position: 3, name: guide.title, item: url },
        ],
      },
    ],
  };
  return (
    <main className="marketing-guide pt-28 pb-20 md:pt-36">
      <div className="container-max">
        <nav aria-label="Breadcrumb" className="mb-8 flex flex-wrap gap-2 text-sm text-primary-600">
          <Link href="/guides">Marketing guides</Link>
          <span aria-hidden="true">/</span>
          <Link href={`/guides/${guide.category}`}>{category.name}</Link>
          <span aria-hidden="true">/</span>
          <span aria-current="page">{guide.keywords[0]}</span>
        </nav>
        <header className="max-w-4xl mb-12">
          <span className="badge mb-6">
            <BookOpen size={16} aria-hidden="true" /> Practical marketing guide
          </span>
          <h1 className="mb-6">{guide.title}</h1>
          <p className="text-xl leading-relaxed mb-5">{guide.intro}</p>
          <p className="text-sm text-slate-600">
            By{" "}
            <Link className="underline underline-offset-4" href="/about">
              GetLeadLocal
            </Link>{" "}
            · Published{" "}
            <time dateTime={published}>
              {new Date(published).toLocaleDateString("en-GB", {
                dateStyle: "long",
                timeZone: "UTC",
              })}
            </time>
          </p>
          {guide.contactCta && (
            <Link className="btn-primary mt-5" href={enquiryUrl}>
              {guide.contactCta} <ArrowUpRight size={18} aria-hidden="true" />
            </Link>
          )}
        </header>
        <div className="guide-layout">
          <aside className="guide-contents">
            <nav aria-label="On this page" className="card">
              <p className="text-xs font-bold uppercase tracking-widest mb-5 text-primary-700">
                In this guide
              </p>
              <ol className="space-y-4 text-sm">
                {guide.sections.map((s, i) => (
                  <li key={s.heading}>
                    <a href={`#section-${i + 1}`} className="hover:underline">
                      {s.heading}
                    </a>
                  </li>
                ))}
                <li>
                  <a href="#example">An example plan</a>
                </li>
                <li>
                  <a href="#checklist">Action checklist</a>
                </li>
                <li>
                  <a href="#measurement">What to measure</a>
                </li>
                <li>
                  <a href="#questions">Common questions</a>
                </li>
              </ol>
            </nav>
            <div className="mt-6 p-5">
              <p className="text-sm mb-3">Looking for implementation help?</p>
              <Link
                href={category.service}
                className="text-sm font-bold text-primary-700 underline underline-offset-4"
              >
                {category.serviceName}
              </Link>
            </div>
          </aside>
          <article className="guide-body min-w-0">
            {guide.sections.map((s, i) => (
              <section id={`section-${i + 1}`} className="mb-12 scroll-mt-28" key={s.heading}>
                <p className="guide-step">0{i + 1}</p>
                <h2 className="text-3xl mb-5">{s.heading}</h2>
                {s.paragraphs.map((p) => (
                  <p className="mb-5 leading-relaxed" key={p}>
                    {p}
                  </p>
                ))}
              </section>
            ))}
            <section id="example" className="card guide-example mb-12 scroll-mt-28">
              <p className="text-xs font-bold uppercase tracking-wider mb-3">
                Illustrative plan — not client results
              </p>
              <h2 className="text-2xl mb-4">{guide.example.title}</h2>
              <p className="leading-relaxed">{guide.example.text}</p>
            </section>
            <section id="checklist" className="mb-12 scroll-mt-28">
              <h2 className="text-3xl mb-5">Your action checklist</h2>
              <ul className="space-y-4">
                {guide.checklist.map((item) => (
                  <li className="flex gap-3" key={item}>
                    <Check
                      size={21}
                      aria-hidden="true"
                      className="shrink-0 text-primary-600 mt-1"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>
            <section id="measurement" className="mb-12 scroll-mt-28">
              <h2 className="text-3xl mb-5">What to measure</h2>
              <p className="leading-relaxed">{guide.measurement}</p>
            </section>
            <section id="questions" className="mb-12 scroll-mt-28">
              <h2 className="text-3xl mb-5">Common questions</h2>
              {guide.faqs.map((f) => (
                <details className="guide-question" key={f.question}>
                  <summary>{f.question}</summary>
                  <p className="pb-5 leading-relaxed">{f.answer}</p>
                </details>
              ))}
            </section>
            {guide.sources?.length || guide.category === "seo" || guide.category === "facebook-ads" ? (
              <section
                aria-label="Further reading"
                className="mb-12 border-t border-slate-300 pt-6"
              >
                <h2 className="text-xl mb-4">Platform guidance to check alongside your plan</h2>
                {guide.sources ? (
                  <ul className="space-y-3 text-sm">
                    {guide.sources.map((source) => (
                      <li key={source.href}>
                        <a className="underline underline-offset-4" href={source.href}>
                          {source.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                ) : guide.category === "seo" ? (
                  <ul className="space-y-3 text-sm">
                    <li>
                      <a
                        className="underline underline-offset-4"
                        href="https://developers.google.com/search/docs/fundamentals/seo-starter-guide"
                      >
                        Google’s SEO Starter Guide
                      </a>
                    </li>
                    <li>
                      <a
                        className="underline underline-offset-4"
                        href="https://support.google.com/business/answer/7091?hl=en"
                      >
                        Google’s guidance on local ranking
                      </a>
                    </li>
                  </ul>
                ) : (
                  <p className="text-sm">
                    Before launching, review the current{" "}
                    <a
                      className="underline underline-offset-4"
                      href="https://transparency.meta.com/policies/ad-standards/"
                    >
                      Meta Advertising Standards
                    </a>{" "}
                    for your service and campaign. Available features and requirements can change.
                  </p>
                )}
              </section>
            ) : null}
            <section className="mb-12">
              <h2 className="text-2xl mb-5">Keep building your plan</h2>
              <div className="grid gap-4">
                {related.map((r) => (
                  <Link
                    className="rounded-xl border p-5 flex items-center justify-between gap-4 font-semibold"
                    key={r.href}
                    href={r.href}
                  >
                    <span>{r.label}</span>
                    <ArrowUpRight size={18} aria-hidden="true" className="shrink-0" />
                  </Link>
                ))}
              </div>
            </section>
            <section className="bg-navy-900 text-white rounded-2xl p-8">
              <h2 className="text-3xl mb-4">Turn the guide into a practical next step.</h2>
              <p className="mb-6">
                Tell us about your services, location, and current marketing. We can discuss what to
                prioritize and agree on a scope that fits your business.
              </p>
              <Link className="btn-primary" href={enquiryUrl}>
                {guide.contactCta ?? "Discuss your marketing plan"}{" "}
                <ArrowUpRight size={18} aria-hidden="true" />
              </Link>
            </section>
          </article>
        </div>
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
    </main>
  );
}
