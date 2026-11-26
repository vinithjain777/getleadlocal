import type { MarketingGuide } from "../marketing-guides";

// Package and management spelling variants share the same buying decision.
const articles: Omit<MarketingGuide, "category" | "published" | "contactCta">[] = [
  {
    slug: "free-websites-for-small-business",
    keywords: ["free websites for small business"],
    title: "Free Websites for Small Business Owners Getting Started",
    description:
      "Compare a free hosted site with a paid build. Test the address, contact options, ownership, and upgrade path before printing your website on a van.",
    intro:
      "Free websites for small business owners can be enough if all your customers need are your hours, area, and phone number. If you also need customers to send job details or book a visit, we can price that work separately so you can decide whether a custom build is worth it.",
    sections: [
      {
        heading: "Try the smallest useful site",
        paragraphs: [
          "WordPress.com offers a free hosted starting point. Build one page with a real job photo, the services you take on, the towns you cover, and a tap-to-call number. Open the public address on a phone without signing in. Ask someone unfamiliar with the business to find your number and explain which jobs you accept.",
        ],
      },
      {
        heading: "Price the first feature you will outgrow",
        paragraphs: [
          "Check what it takes to use your own domain, remove platform branding, receive form submissions, and move your content later. If a booking calendar is essential, test it on the exact plan you intend to keep. Buy a permanent domain in an account your business controls before committing that address to signage.",
        ],
      },
    ],
    example: {
      title: "A handyman with a full referral book",
      text: "A handyman can send referred customers to one page explaining his repair work and service radius. If customers start asking to send photos for estimates, the next spending decision is whether a form with attachments saves enough phone time to justify the upgrade.",
    },
    checklist: [
      "Open the published mobile page.",
      "Make one test enquiry.",
      "Record the cost of adding your own domain and required features.",
    ],
    measurement:
      "Ask callers how they found the number. Keep a list of questions the page failed to answer before investing in extra pages.",
    faqs: [
      {
        question: "Does GetLeadLocal offer free custom websites?",
        answer:
          "Our custom builds are quoted projects. If a free hosted site meets your needs, the steps above will help you launch it yourself. You can request a quote when you need help with a redesign, booking, or follow-up.",
      },
    ],
    related: ["/website-platforms-for-small-business", "/website-packages-for-small-business"],
    sources: [{ label: "WordPress.com free website plan", href: "https://wordpress.com/free/" }],
  },
  {
    slug: "website-packages-for-small-business",
    keywords: ["website packages for small business", "website package for small business"],
    title: "Website Packages for Small Business Owners Comparing Quotes",
    description:
      "Compare website proposals line by line, from copy and domain ownership to booking integrations, handover, and ongoing charges.",
    intro:
      "Website packages for small business owners should tell you what happens when someone asks for a quote. With GetLeadLocal you can scope the pages, writing, booking, and follow-up in one proposal. Use the questions below to compare it with another offer.",
    sections: [
      {
        heading: "Separate launch work from running costs",
        paragraphs: [
          "Ask for an itemised price for discovery, design, copy, development, redirects, testing, and handover. Then list the recurring amounts for hosting, licences, maintenance, SMS usage, and future edits. Multiply monthly costs by twelve and add the build fee to compare the first year on equal terms.",
        ],
      },
      {
        heading: "Put acceptance criteria in the proposal",
        paragraphs: [
          "For a booking site, specify whether a request reserves a slot or asks someone to call back. Name the inbox or calendar that receives it. For a redesign, attach the list of URLs that must survive launch. Agree who supplies photos, who approves the copy, and who can export the site and contact records.",
        ],
      },
    ],
    example: {
      title: "Two five-page proposals",
      text: "One quote includes writing three service pages and connecting a survey calendar. The other supplies five page layouts and waits for you to provide copy and install booking. Ask both providers to price the same finished workflow before comparing totals.",
    },
    checklist: [
      "List required pages and customer actions.",
      "Separate one-off, recurring, and usage fees.",
      "Agree on ownership, handover, and launch tests.",
    ],
    measurement:
      "Add the staff hours you must supply to each quote. A lower build fee may still consume more of the owner’s week.",
    faqs: [
      {
        question: "Can I launch in stages?",
        answer:
          "Yes. Start with one service and a working enquiry path. Ask for a separate estimate for the next service page or integration so you can budget for it later.",
      },
    ],
    related: [
      "/website-and-content-writing-for-small-business",
      "/website-management-services-for-small-businesses",
    ],
  },
  {
    slug: "website-platforms-for-small-business",
    keywords: [
      "website platforms for small business",
      "best place to build a website for small business",
    ],
    title: "Website Platforms for Small Business Owners to Compare",
    description:
      "Choose between a hosted builder, a content management system, and a custom build using a practical booking and editing test.",
    intro:
      "Website platforms for small business owners should fit the way you sell. Tell us who updates your opening hours, where bookings go, and which tools you already pay for. We can use those answers to recommend a build your team can run.",
    sections: [
      {
        heading: "Test an edit, an enquiry, and a handover",
        paragraphs: [
          "Change holiday hours, send a quote request to the right person, and invite a colleague with editing access. Time each task. Ask where submissions go if an email fails and whether customer records can be exported.",
        ],
      },
      {
        heading: "Choose the amount of maintenance you can own",
        paragraphs: [
          "A hosted builder suits a small team that wants the provider to manage the hosting environment. A managed WordPress setup can suit an editor publishing many service pages. A custom build is worth considering when your scheduling or quoting process needs integrations the simpler options cannot handle. Obtain a quote for the exact setup you tested.",
        ],
      },
    ],
    example: {
      title: "A salon with an existing calendar",
      text: "Book an appointment on the trial site, change the time, and check the front-desk calendar. If staff must retype each change, include that work when comparing the platform with one that connects to their existing booking system.",
    },
    checklist: [
      "Give the future editor access to a trial.",
      "Try the booking flow on a phone.",
      "Check domain, data export, backups, and cancellation terms.",
    ],
    measurement:
      "Compare the yearly subscription, integration charges, and staff time needed for the same three routine tasks.",
    faqs: [
      {
        question: "What is the best place to build a website for small business use?",
        answer:
          "A basic information site can begin on a hosted builder. If you rely on a booking system or estimator, first test the platform with that tool and the person who uses it daily.",
      },
    ],
    related: [
      "/free-websites-for-small-business",
      "/wordpress-website-maintenance-service-for-small-business",
    ],
  },
  {
    slug: "website-management-services-for-small-businesses",
    keywords: [
      "website management services for small businesses",
      "website management services for small business",
    ],
    title: "Website Management Services for Small Businesses After Launch",
    description:
      "Set a practical care scope for content changes, form delivery, renewals, backups, and urgent fixes. Know what your team still owns.",
    intro:
      "Website management services for small businesses should make one thing clear. If your quote form stops delivering on Monday morning, who spots it and who fixes it? Use this guide to decide which jobs you want a provider to own and what to include in a care quote.",
    sections: [
      {
        heading: "Write down recurring checks and owners",
        paragraphs: [
          "List the domain registrar, hosting provider, booking account, and destination inbox. Keep renewal notices with the business. Name a person who can approve updates and a backup contact for urgent faults. Agree how quickly someone will acknowledge a report during and outside business hours.",
        ],
      },
      {
        heading: "Define what counts as an edit",
        paragraphs: [
          "Changing opening hours is a different job from rebuilding a booking flow. Give the provider examples of included changes, how you will submit them, and what needs a separate estimate. Ask for a record of each completed change and a test enquiry after changes that touch forms.",
        ],
      },
    ],
    example: {
      title: "When the estimator leaves the business",
      text: "The care owner updates the form destination, submits a test request, and confirms that the new estimator receives and can reply to it. The business owner removes the former employee’s access and records the new contact.",
    },
    checklist: [
      "Name account owners.",
      "Agree on response hours and escalation.",
      "Ask for evidence of form and backup checks.",
    ],
    measurement:
      "Track failed enquiries discovered, time to restore service, and how long routine change requests wait.",
    faqs: [
      {
        question: "Do I need a monthly care plan?",
        answer:
          "If a staff member can handle renewals, updates, backups, and end-to-end form checks, assign those duties internally. Outsource the tasks your team cannot reliably cover.",
      },
    ],
    related: [
      "/wordpress-website-maintenance-service-for-small-business",
      "/conversion-optimization-for-small-business-website",
    ],
  },
  {
    slug: "wordpress-website-maintenance-service-for-small-business",
    keywords: ["wordpress website maintenance service for small business"],
    title: "WordPress Website Maintenance Service for Small Business Owners",
    description:
      "Evaluate a WordPress care proposal with a restore test, plugin inventory, update routine, and checks for lead forms after changes.",
    intro:
      "WordPress website maintenance service for small business owners matters most when an update interrupts bookings. If you depend on your site for enquiries, ask what a provider will back up, test, and restore. Bring your current setup when you ask us about ongoing care.",
    sections: [
      {
        heading: "Verify what can be restored",
        paragraphs: [
          "A WordPress backup needs the database and the relevant site files. Ask where the copies live, who can retrieve them, and how frequently they are taken. Have the provider restore a copy in a test environment and confirm that pages, media, and form settings survive.",
        ],
      },
      {
        heading: "Agree on a release and rollback routine",
        paragraphs: [
          "Keep an inventory of the theme, plugins, licences, and the integrations each one supports. Test updates on a copy where practical. After release, run a quote request from a phone and check its arrival in the destination inbox. Decide how you will preserve enquiries received since the last backup if a rollback becomes necessary.",
        ],
      },
    ],
    example: {
      title: "A booking plugin update",
      text: "A site still displays its calendar after an update, but confirmation emails stop. A test booking catches the fault. The care owner records pending bookings before restoring or repairing the integration.",
    },
    checklist: [
      "Verify file and database backups.",
      "Document the last successful restore test.",
      "Check booking and form delivery after updates.",
    ],
    measurement:
      "Keep the last tested restore date, recovery time, and any failed customer journeys in the care report.",
    faqs: [
      {
        question: "Is hosting the same as maintenance?",
        answer:
          "Read the hosting scope. The host may manage infrastructure while another person owns plugin updates, content changes, and form testing. Assign each job explicitly.",
      },
    ],
    related: [
      "/website-management-services-for-small-businesses",
      "/website-redesign-for-small-business",
    ],
    sources: [
      {
        label: "WordPress documentation on backups",
        href: "https://wordpress.org/documentation/article/wordpress-backups/",
      },
    ],
  },
  {
    slug: "website-and-content-writing-for-small-business",
    keywords: ["website and content writing for small business"],
    title: "Website and Content Writing for Small Business Service Pages",
    description:
      "Turn a short owner interview into service copy that answers buyer questions and helps a visitor request the right job.",
    intro:
      "Website and content writing for small business owners starts with the questions your customers already ask. Tell us which jobs you take, what customers worry about, and how you quote. We can turn those answers into service pages for you to review.",
    sections: [
      {
        heading: "Interview the person who quotes the work",
        paragraphs: [
          "Ask which jobs they accept, which they decline, what affects the estimate, and what a customer should prepare. Get permission to use a real job photo and check the caption with the person who did the work. Write down the customer’s words for the problem.",
        ],
      },
      {
        heading: "Write one complete service page",
        paragraphs: [
          "Open with the job and the area. Explain what happens at the first visit, what the customer receives, and what might change the scope. Finish with a specific next step, such as requesting a roof inspection. Have the owner check service boundaries, hours, and claims before launch.",
        ],
      },
    ],
    example: {
      title: "Give a flooring customer something concrete",
      text: "Replace a generic line about quality with a useful detail the installer confirms, such as “At the survey we measure the rooms, check the subfloor, and ask which furniture needs moving.” The reader now knows what the visit is for.",
    },
    checklist: [
      "Collect three real buying questions.",
      "Verify job details and permission for photos.",
      "Use a call to action that describes the next step.",
    ],
    measurement:
      "Ask the team which repetitive questions disappear and whether new enquiries mention the correct service.",
    faqs: [
      {
        question: "What should I send the writer?",
        answer:
          "Send your service list, a sample estimate with customer details removed, answers to common questions, and approved photos. Mark any services or locations you want excluded.",
      },
    ],
    related: [
      "/seo-checklist-for-local-small-business-websites",
      "/website-packages-for-small-business",
    ],
  },
  {
    slug: "conversion-optimization-for-small-business-website",
    keywords: ["conversion optimization for small business website"],
    title: "Conversion Optimization for Small Business Website Forms",
    description:
      "Find out where customers abandon quote requests. Test the mobile experience, form delivery, response time, and booked-job rate.",
    intro:
      "Conversion optimization for small business website owners starts with a familiar problem. People visit the site, but the phone stays quiet. We can trace a quote request from your busiest page to your inbox and show you where a customer might give up.",
    sections: [
      {
        heading: "Find the first point that fails",
        paragraphs: [
          "Can a customer tell whether you cover their town before scrolling? Does the main button describe the next step? Try an incomplete form and check that the error explains how to fix it. After submission, make sure the customer sees a confirmation and the team receives the right details.",
        ],
      },
      {
        heading: "Change one thing and count useful outcomes",
        paragraphs: [
          "If callers need a quick callback, ask for the job type, contact details, and area. Collect complex specifications later unless they determine eligibility. Record valid submissions separately from button clicks and distinguish qualified jobs from spam or duplicates.",
        ],
      },
    ],
    example: {
      title: "An optional photo on mobile",
      text: "A roofer’s estimate form requires a roof photo. A homeowner indoors cannot safely provide one. Making the photo optional lets the team call first and request a picture only when appropriate. Check whether more suitable jobs actually reach a survey.",
    },
    checklist: [
      "Complete the mobile journey yourself.",
      "Confirm delivery and reply ownership.",
      "Compare qualified enquiries over similar traffic periods.",
    ],
    measurement:
      "Track completed requests per relevant visit, qualified enquiries per request, and bookings per qualified enquiry. On a low-traffic site, review individual journeys before drawing conclusions from small changes in percentages.",
    faqs: [
      {
        question: "Should I add an AI chat assistant?",
        answer:
          "Consider one when visitors repeatedly need help choosing a service. Give it approved answers and a human handoff, then check whether conversations produce requests your team can actually serve.",
      },
    ],
    related: [
      "/website-redesign-for-small-business",
      "/tools-for-automating-lead-generation-and-nurturing-for-small-businesses",
    ],
  },
  {
    slug: "seo-checklist-for-local-small-business-websites",
    keywords: ["seo checklist for local small business websites"],
    title: "SEO Checklist for Local Small Business Websites Before Launch",
    description:
      "Check local service content, indexability, canonical URLs, sitemap links, and your quote flow before sending Google a new website.",
    intro:
      "SEO checklist for local small business websites — use these checks when you commission a new site or sign off on a redesign. Ask your provider to show that a customer can find the right service, reach it from the homepage, and send a quote request.",
    sections: [
      {
        heading: "Check the published URL",
        paragraphs: [
          "Open the final HTTPS address. Confirm it loads successfully, has a descriptive title and heading, and identifies the intended canonical URL. Check that launch settings allow indexing, that internal links use the final address, and that the sitemap contains the page. Inspect a priority page in Google Search Console.",
        ],
      },
      {
        heading: "Verify local details with the owner",
        paragraphs: [
          "Check the phone, hours, service boundary, and whether customers can visit the premises. Describe real projects with permission. Link related services where a customer would expect them and test the mobile contact action from the page itself.",
        ],
      },
    ],
    example: {
      title: "A plumber who travels to customers",
      text: "A water heater page can explain the towns covered, what details the dispatcher needs, and how to request a visit. A customer should be able to reach that page from the plumbing services list before Google discovers it through a sitemap.",
    },
    checklist: [
      "Check the response, canonical, and indexing settings.",
      "Follow internal links and inspect the sitemap.",
      "Test the phone number and quote form.",
    ],
    measurement:
      "Use Search Console to check indexing and impressions for the intended service. Pair clicks with call and form outcomes to see whether the page brings relevant work.",
    faqs: [
      {
        question: "Does submitting a sitemap guarantee rankings?",
        answer:
          "A sitemap helps search engines discover URLs. Keep checking the indexed page, the queries it appears for, and the value it provides to someone choosing a local service.",
      },
    ],
    related: ["/services/local-seo", "/website-and-content-writing-for-small-business"],
    sources: [
      {
        label: "Google Search Central SEO starter guide",
        href: "https://developers.google.com/search/docs/fundamentals/seo-starter-guide",
      },
    ],
  },
  {
    slug: "website-redesign-for-small-business",
    keywords: ["website redesign for small business"],
    title: "Website Redesign for Small Business Owners With an Existing Site",
    description:
      "Plan a redesign around the URLs, enquiries, and integrations you need to keep. Includes a launch-day handover checklist.",
    intro:
      "Website redesign for small business owners should protect the calls you already receive. Tell us which pages customers use and which tasks frustrate them. We’ll plan what to keep, what to rebuild, and how to check the booking route on launch day.",
    sections: [
      {
        heading: "Map the old site to the new one",
        paragraphs: [
          "Export the current URLs and mark the pages that attract search visits, receive referrals, or appear on printed materials. Keep useful addresses where possible. Where a page moves, map its old address directly to the closest relevant replacement. Record the owner of every form and booking integration.",
        ],
      },
      {
        heading: "Rehearse launch with an actual enquiry",
        paragraphs: [
          "Test the priority journeys on a staging copy. On launch day repeat the checks on the public domain, including old links, mobile menu, phone actions, form validation, confirmation, and inbox delivery. Give the owner access to the domain and a written route for reporting problems.",
        ],
      },
    ],
    example: {
      title: "A QR code on a work van",
      text: "A van links to an old estimates page. The new design moves the form into a service page. Scan the code on a phone after launch and complete the request so the physical sign keeps working.",
    },
    checklist: [
      "Record valuable old URLs.",
      "Agree on redirections and account access.",
      "Retest live forms and booking notifications.",
    ],
    measurement:
      "Compare relevant search visits, qualified requests, and delivery failures before and after launch. Check changes by landing page so one broken route is visible.",
    faqs: [
      {
        question: "Do I need to replace every page?",
        answer:
          "Keep accurate pages that already answer the customer’s question. Spend the redesign budget on weak journeys, dated information, and technical problems you can identify.",
      },
    ],
    related: [
      "/conversion-optimization-for-small-business-website",
      "/seo-checklist-for-local-small-business-websites",
    ],
  },
  {
    slug: "best-website-design-agencies-for-small-businesses",
    keywords: [
      "best website design agencies for small businesses",
      "website designers for small business near me",
      "design websites for small business",
    ],
    title: "Best Website Design Agencies for Small Businesses to Shortlist",
    description:
      "Shortlist a local or remote website designer using a sample brief, account ownership questions, and a live enquiry demonstration.",
    intro:
      "Best website design agencies for small businesses often end up on a shortlist for different reasons. If you depend on estimates or appointments, ask each agency to show how a customer gets from a service page to your team. That’s a workflow we can include in your GetLeadLocal quote.",
    sections: [
      {
        heading: "Ask for a walkthrough you can verify",
        paragraphs: [
          "Give each agency the same brief. Explain your priority service, service area, current tools, and who answers the phone. Ask how a mobile visitor would request an estimate and where that request would land. Ask permission before contacting a past client for a reference.",
        ],
      },
      {
        heading: "Decide how much local presence matters",
        paragraphs: [
          "For on-site photography or in-person training, ask who travels and what is included. For a remote build, check meeting times, response hours, account ownership, and the handover process. Ask the person who will design the site to explain the trade-offs in their proposal.",
        ],
      },
    ],
    example: {
      title: "A side-by-side shortlist",
      text: "One agency offers a nearby photographer. Another can integrate the estimator’s existing calendar. If the business already has approved images but loses survey bookings, a demonstration of the calendar handoff gives the owner a better basis for a decision.",
    },
    checklist: [
      "Send an identical brief.",
      "Request a relevant reference or live walkthrough.",
      "Compare support, ownership, and the cost of future edits.",
    ],
    measurement:
      "Score each proposal against your must-have tasks. Document which tasks were demonstrated, which were promised in writing, and which remain outside the scope.",
    faqs: [
      {
        question: "How do I find website designers for small business near me?",
        answer:
          "Ask local business owners who built their sites, then verify the designer’s location, availability, and relevant work directly. If in-person work is essential, put that requirement in the brief.",
      },
    ],
    related: ["/website-packages-for-small-business", "/website-redesign-for-small-business"],
  },
  {
    slug: "small-business-website-design-for-lawn-care-tradesman-entrepreneurs",
    keywords: ["small business website design for lawn care tradesman entrepreneurs"],
    title: "Small Business Website Design for Lawn Care Tradesman Entrepreneurs",
    description:
      "Plan a lawn care site around route density, recurring mowing, real job photos, and estimate requests your crew can schedule.",
    intro:
      "Small business website design for lawn care tradesman entrepreneurs starts with your route. If you want more weekly mowing jobs close to existing customers, we can build the site around those neighbourhoods, the work you accept, and the information you need to price a visit.",
    sections: [
      {
        heading: "Separate recurring work from one-off jobs",
        paragraphs: [
          "Give weekly mowing and seasonal clean-ups distinct descriptions. Show what is included, how gate access works, and whether a site visit is needed. Use a real before-and-after photo with permission and explain the work completed.",
        ],
      },
      {
        heading: "Collect the details that affect dispatch",
        paragraphs: [
          "Ask for the service address or postcode, service type, and preferred contact method. If customers can send photos, let them do that after the initial request. Route recurring enquiries to the crew planner and explain when the customer can expect a response.",
        ],
      },
    ],
    example: {
      title: "A Thursday mowing route",
      text: "A crew has space near an existing Thursday route. Its service page names the neighbourhoods the crew covers and invites requests for recurring mowing. The estimator checks route fit before offering a visit.",
    },
    checklist: [
      "Name the route area.",
      "Distinguish repeat work from seasonal jobs.",
      "Test quote delivery to the person who schedules estimates.",
    ],
    measurement:
      "Track enquiries inside the route, estimates booked, recurring customers won, and travel time per added job.",
    faqs: [
      {
        question: "Should the site publish prices?",
        answer:
          "Publish a clear starting price only if it reflects work you can actually deliver. Explain which factors require an estimate, such as access, slope, frequency, or overgrowth.",
      },
    ],
    related: ["/industries/landscaping", "/website-and-content-writing-for-small-business"],
  },
];

export const WEBSITE_GUIDES: MarketingGuide[] = articles.map((article) => ({
  ...article,
  category: "websites",
  published: "2026-11-22",
  updated: "2026-11-26",
  contactCta: "Discuss my website project",
}));
