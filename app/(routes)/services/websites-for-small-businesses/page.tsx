import Link from "next/link";
import { ArrowDownRight, CalendarDays, ClipboardList, MessageSquare } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { WEBSITE_GUIDES } from "@/lib/guides/websites";
import { SITE_CONFIG } from "@/lib/constants";
import { generateMetadata } from "@/lib/seo";

const url = SITE_CONFIG.url + "/services/websites-for-small-businesses";
export const metadata = generateMetadata({
  title: "Websites for Small Businesses With Booking and Follow-Up",
  description:
    "Request a website development quote from GetLeadLocal. Plan a new site or redesign with quote forms, booking, optional AI intake, and opt-in SMS follow-up.",
  url,
});

const buildOptions = [
  [
    "New website",
    "Give customers the facts they need before calling. We plan the service pages, locations, photos, contact options, and the inbox that receives each request.",
  ],
  [
    "Redesign",
    "Keep valuable pages and working links while improving the parts that lose enquiries. We map old URLs, agree on what carries over, and test the quote journey before launch.",
  ],
  [
    "Booking and follow-up",
    "Connect the form to the people who handle the work. Choose a calendar, CRM handoff, or reminder flow according to who answers, when they work, and how appointments are confirmed.",
  ],
];
const workflow = [
  {
    icon: ClipboardList,
    title: "A visitor describes the job",
    detail:
      "A quote form collects the service and postcode. Optional AI intake can summarise the request for your estimator and flag questions for a person to answer.",
  },
  {
    icon: CalendarDays,
    title: "Your team agrees on a time",
    detail:
      "Send the enquiry to a named owner or let the customer choose an available survey slot. Staff confirm scope and price before the customer commits.",
  },
  {
    icon: MessageSquare,
    title: "The customer gets a reminder",
    detail:
      "Where the customer opts into texts, send the agreed appointment details by SMS. Stop reminders after cancellation or opt-out, and send replies to a monitored inbox.",
  },
];

export default function WebsiteDevelopmentPage() {
  return (
    <main className="container-max pt-28 pb-20 md:pt-36">
      <header className="max-w-4xl mb-14">
        <Link href="/services" className="font-semibold underline underline-offset-4">
          Our services
        </Link>
        <h1 className="my-6">Websites for Small Businesses That Run on Booked Jobs</h1>
        <p className="text-xl mb-7">
          Websites for small businesses should answer three questions quickly. Can you do this job?
          Do you work in my area? How do I get an estimate? We build the pages and connect the
          forms, calendars, and follow-up your team needs to answer that last question.
        </p>
        <a href="#project-quote" className="btn-primary">
          Request a website quote <ArrowDownRight size={18} aria-hidden="true" />
        </a>
      </header>
      <section className="mb-16">
        <h2 className="text-3xl mb-6">What do you need built?</h2>
        <div className="grid gap-5 md:grid-cols-3">
          {buildOptions.map(([title, detail]) => (
            <section className="card" key={title}>
              <h3 className="text-xl mb-3">{title}</h3>
              <p>{detail}</p>
            </section>
          ))}
        </div>
      </section>
      <section className="mb-16 max-w-4xl">
        <h2 className="text-3xl mb-4">From a quote request to a booked visit</h2>
        <p className="mb-6">
          For a lawn care business, a request for weekly mowing might need a site visit before
          anyone can give a price. Here’s one way we can build that handoff.
        </p>
        <ol className="space-y-6">
          {workflow.map(({ icon: Icon, title, detail }) => (
            <li className="flex gap-4" key={title}>
              <Icon className="shrink-0 text-primary-600" aria-hidden="true" />
              <div>
                <h3 className="font-bold mb-1">{title}</h3>
                <p>{detail}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>
      <section className="mb-14 max-w-3xl">
        <h2 className="text-3xl mb-4">What goes into your quote?</h2>
        <p>
          Send your current URL if you have one, your priority services, and an example of an
          enquiry you want to receive. We’ll discuss the pages, copy, integrations, and handover you
          need. Your proposal separates the build from ongoing care, hosting, and any messaging or
          software charges.
        </p>
      </section>
      <section id="project-quote" className="scroll-mt-28 mb-16">
        <div className="max-w-2xl mx-auto mb-6">
          <h2 className="text-3xl mb-3">Tell us about your website project</h2>
          <p>
            A new business can leave the current website field blank. Include any booking or CRM
            tools you already use.
          </p>
        </div>
        <ContactForm websiteProject />
      </section>
      <section>
        <h2 className="text-2xl mb-5">Plan your website</h2>
        <div className="grid gap-3 md:grid-cols-2">
          {WEBSITE_GUIDES.map((guide) => (
            <Link
              key={guide.slug}
              className="font-semibold underline underline-offset-4"
              href={`/${guide.slug}`}
            >
              {guide.title}
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
