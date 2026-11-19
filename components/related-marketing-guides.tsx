import Link from "next/link";
import { MARKETING_GUIDES } from "@/lib/marketing-guides";

export function RelatedMarketingGuides({ path }: { path: string }) {
  const guides = MARKETING_GUIDES.filter((guide) => guide.related.includes(path));
  if (!guides.length) return null;
  return (
    <section className="section-padding">
      <div className="container-max">
        <h2 className="text-3xl mb-7">Related marketing guides</h2>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {guides.map((guide) => (
            <Link className="card block" href={`/${guide.slug}`} key={guide.slug}>
              <h3 className="text-lg mb-3">{guide.title}</h3>
              <p className="text-sm">{guide.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
