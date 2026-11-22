import Link from "next/link";
import { GuideLinks } from "@/components/guide-links";
import { SITE_CONFIG } from "@/lib/constants";
import { generateMetadata as buildMetadata } from "@/lib/seo";
export const metadata = buildMetadata({
  title: "Marketing Guides for Local Businesses",
  description:
    "Explore lead generation, Facebook Ads, and SEO guides for local businesses, with campaign examples, planning checklists, and help choosing your next step.",
  url: `${SITE_CONFIG.url}/guides`,
});
export default function GuidesPage() {
  return (
    <main className="pt-28 md:pt-36 pb-16">
      <header className="container-max">
        <span className="badge mb-6">The local marketing library</span>
        <h1 className="max-w-3xl mb-6">A clearer plan for your next stage of growth.</h1>
        <p className="max-w-2xl text-xl">
          Start with your industry and the channel you want to understand. Each guide includes a
          practical example, a checklist, and questions to help you decide what to do next.
        </p>
        <p className="mt-5">
          <Link
            href="/blog"
            className="font-semibold text-primary-700 underline underline-offset-4"
          >
            Browse more marketing articles
          </Link>
        </p>
      </header>
      <GuideLinks category="lead-generation" />
      <GuideLinks category="websites" />
      <GuideLinks category="facebook-ads" />
      <GuideLinks category="seo" />
    </main>
  );
}
