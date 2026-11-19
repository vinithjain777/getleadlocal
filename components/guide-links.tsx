import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { GUIDE_CATEGORIES, MARKETING_GUIDES } from "@/lib/marketing-guides";

export function GuideLinks({ category }: { category: keyof typeof GUIDE_CATEGORIES }) {
  const group = GUIDE_CATEGORIES[category];
  return (
    <section className="section-padding" aria-labelledby={`guides-${category}`}>
      <div className="container-max">
        <p className="text-xs font-bold uppercase tracking-widest text-primary-700 mb-4">
          Plan your next step
        </p>
        <h2 id={`guides-${category}`} className="text-3xl md:text-4xl mb-4">
          {group.title}
        </h2>
        <p className="mb-8 max-w-2xl">{group.description}</p>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {MARKETING_GUIDES.filter((g) => g.category === category).map((g) => (
            <Link
              key={g.slug}
              className="rounded-xl border p-5 flex justify-between gap-3 font-semibold"
              href={`/${g.slug}`}
            >
              <span>{g.keywords[0]}</span>
              <ArrowUpRight size={18} aria-hidden="true" className="shrink-0" />
            </Link>
          ))}
        </div>
        <Link
          href={`/guides/${category}`}
          className="mt-8 inline-flex font-bold text-primary-700 underline underline-offset-4"
        >
          Browse the {group.name} guide hub
        </Link>
      </div>
    </section>
  );
}
