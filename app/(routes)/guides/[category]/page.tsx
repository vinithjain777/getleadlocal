import Link from "next/link";
import { notFound } from "next/navigation";
import { GUIDE_CATEGORIES, MARKETING_GUIDES } from "@/lib/marketing-guides";
import { SITE_CONFIG } from "@/lib/constants";
import { generateMetadata as buildMetadata } from "@/lib/seo";
type Props = { params: Promise<{ category: string }> };
function categoryFor(key: string) {
  return Object.keys(GUIDE_CATEGORIES).find((name): name is keyof typeof GUIDE_CATEGORIES => name === key);
}
export function generateStaticParams() {
  return Object.keys(GUIDE_CATEGORIES).map((category) => ({ category }));
}
export async function generateMetadata({ params }: Props) {
  const key = categoryFor((await params).category);
  if (!key) return { title: "Guide Not Found", robots: { index: false } };
  const c = GUIDE_CATEGORIES[key];
  return buildMetadata({
    title: c.title,
    description: c.description,
    url: `${SITE_CONFIG.url}/guides/${key}`,
  });
}
export default async function GuideCategoryPage({ params }: Props) {
  const key = categoryFor((await params).category);
  if (!key) notFound();
  const category = GUIDE_CATEGORIES[key];
  return (
    <main className="pt-28 md:pt-36 pb-20">
      <div className="container-max">
        <nav aria-label="Breadcrumb" className="mb-8 text-sm">
          <Link href="/guides" className="text-primary-700 underline">
            Marketing guides
          </Link>
          <span aria-hidden="true"> / </span>
          <span aria-current="page">{category.name}</span>
        </nav>
        <header className="max-w-3xl mb-12">
          <h1 className="mb-6">{category.title}</h1>
          <p className="text-xl">{category.description}</p>
          <p className="mt-5">
            Choose a guide for your business or explore{" "}
            <Link href={category.service} className="font-semibold underline underline-offset-4">
              {category.serviceName}
            </Link>{" "}
            for help with implementation.
          </p>
        </header>
        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {MARKETING_GUIDES.filter((g) => g.category === key).map((g) => (
            <article className="card flex flex-col" key={g.slug}>
              <h2 className="text-xl mb-4">
                <Link href={`/${g.slug}`}>{g.title}</Link>
              </h2>
              <p className="text-sm mb-6">{g.description}</p>
              <Link
                className="mt-auto text-sm font-bold text-primary-700 underline underline-offset-4"
                href={`/${g.slug}`}
              >
                Read the guide
              </Link>
            </article>
          ))}
        </div>
        <p className="mt-12">
          <Link
            className="font-semibold underline underline-offset-4"
            href={`/guides/${key === "seo" ? "facebook-ads" : "seo"}`}
          >
            Explore {key === "seo" ? "Facebook Ads" : "SEO"} guides
          </Link>
        </p>
      </div>
    </main>
  );
}
