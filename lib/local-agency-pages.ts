interface AgencySection {
  heading: string;
  copy: string;
  link?: { href: string; label: string };
}

export interface LocalAgencyPage {
  slug: string;
  title: string;
  description: string;
  intro: string;
  action: string;
  sections: AgencySection[];
}

export const LOCAL_AGENCY_PAGES: LocalAgencyPage[] = [
  {
    slug: "local-business-marketing-agency",
    title: "Local Business Marketing Agency for More Nearby Customers",
    description: "Tell GetLeadLocal which services and towns you want more bookings from. Get a marketing plan built around your service area, crew capacity, and budget.",
    intro: "A local business marketing agency should know which jobs are worth the drive. Tell GetLeadLocal where you work and what you want to book. We’ll help nearby customers find those services and reach the person who can give them a quote.",
    action: "Plan marketing for my service area",
    sections: [
      {
        heading: "Which towns do you want more work in?",
        copy: "Take a look at your last week of bookings. Two calls on the same street might make a profitable morning, while a single small repair an hour away can tie up a van until lunch. We use your preferred towns, job sizes, and travel limits to decide where to focus.",
      },
      {
        heading: "What should customers find you for?",
        copy: "A flooring installer who wants whole-home projects needs different enquiries from one who can fit in small repairs. We review how your business listing and website describe the work, then use your own project photos and service details to help customers decide whether to call.",
        link: { href: "/services/local-seo", label: "See what our local SEO service covers" },
      },
      {
        heading: "Where will the first enquiries come from?",
        copy: "If your repair crew has space this week, we can scope search ads for the towns and hours you cover. If referrals already bring people to your site but the phone stays quiet, we’ll look at what they see before asking you to buy more traffic.",
      },
      {
        heading: "Who picks up when a customer calls?",
        copy: "We walk through a test enquiry with you. A shop with a receptionist can invite callers to book straight away. An owner working on site may be better served by a short quote form that asks for the town, service, and best callback time.",
        link: { href: "/digital-marketing-agency-for-local-businesses", label: "Connect your ads, website, and enquiry follow-up" },
      },
      {
        heading: "How will you know which towns pay off?",
        copy: "Keep the town and outcome beside each enquiry. If one area sends ten calls and no jobs while another sends three calls and two bookings, review the job values and travel costs before choosing where the next part of your budget goes.",
      },
      {
        heading: "What should we cover on the first call?",
        copy: "Bring your website, the places you serve, and two examples of work you would happily take again. We’ll discuss where there is room in your calendar and what we would change first. You can ask for the scope and costs before deciding.",
        link: { href: "/marketing-agency-for-local-business", label: "See how to compare a proposal and budget" },
      },
    ],
  },
  {
    slug: "digital-marketing-agency-for-local-businesses",
    title: "Digital Marketing Agency for Local Businesses Seeking More Bookings",
    description: "Already paying for clicks? GetLeadLocal reviews your ads, website, and booking process to find where customers drop off and scope the work to fix it.",
    intro: "A digital marketing agency for local businesses can help when people click your ads but few become customers. We follow the same steps a customer takes, from the search or social ad to the phone call, form, or booking, and show you where that journey breaks down.",
    action: "Review my ads and website",
    sections: [
      {
        heading: "Where are enquiries getting lost?",
        copy: "Show us a campaign you already pay for. We open the ad on a phone, follow its link, and try the next step ourselves. A boiler replacement ad that lands on a general repairs page gives the homeowner more work before they can even request a survey.",
      },
      {
        heading: "Which advertising channel fits the decision?",
        copy: "Someone searching for a same-day appointment is ready to act. Someone considering a garden redesign may want to see a finished project first. We can scope Google Search for the first situation or Facebook and Instagram creative for the second, with a budget you approve.",
        link: { href: "/services/google-ads", label: "Explore managed Google Ads" },
      },
      {
        heading: "Can your existing website take the booking?",
        copy: "We check the page your ad actually opens. Can a visitor confirm the service, see whether you cover their address, and use the form on a phone? Sometimes a clearer booking link or a smaller form is the whole first project.",
        link: { href: "/services/websites-for-small-businesses", label: "See our website and booking options" },
      },
      {
        heading: "Who receives the request after the customer clicks send?",
        copy: "We test where the enquiry lands and how the customer knows it arrived. If a clinic’s forms go to a general inbox while reception works from a booking system, we’ll agree how the two should connect and who will return appointment requests.",
      },
      {
        heading: "Which numbers tell you it worked?",
        copy: "Start with one campaign and record enquiries, appointments booked, and appointments attended. If spend stays level and more people attend, the change may be worth extending. If form submissions rise but bookings stay flat, review the requests with the person answering them.",
      },
      {
        heading: "What do we need to review your setup?",
        copy: "Send your website address, the service you advertise, and what customers are meant to do next. Tell us what you see happening instead. We’ll discuss the first fix, how to test it, and what it would cost you.",
      },
    ],
  },
  {
    slug: "marketing-agency-for-local-business",
    title: "Marketing Agency for Local Business Owners Comparing Proposals",
    description: "Hiring your first marketing agency? Compare fees, ad spend, deliverables, account access, and reporting. Ask GetLeadLocal for a proposal for your business.",
    intro: "A marketing agency for local business owners should make it easy to see what you’re paying for. If you’re hiring help for the first time or replacing a provider, ask GetLeadLocal for a proposal you can compare line by line against your current costs.",
    action: "Request a proposal for my business",
    sections: [
      {
        heading: "What work are you actually buying?",
        copy: "Ask which service the agency will promote, what it will create or change, and who will do the work. For a plumber, a useful first scope might cover a boiler installation page, a search campaign for two towns, and a test call to the office. Each item gives you something concrete to review.",
        link: { href: "/local-business-marketing-agency", label: "Plan around the jobs and towns you want" },
      },
      {
        heading: "How much of the quote goes to advertising?",
        copy: "Ask for setup work, ongoing management, ad spend, and any software charges on separate lines. Two proposals with the same monthly total can leave very different amounts to reach customers. Tell us your spending limit so we can show what fits inside it.",
      },
      {
        heading: "What can you afford to spend on a new customer?",
        copy: "Suppose you can spend $100 to win a typical job and still make the profit you need. If one in four qualified quotes becomes paid work, that gives you $25 per qualified quote to cover acquisition costs. Use your own margins and close rate when weighing a proposal.",
      },
      {
        heading: "Who controls your accounts and customer enquiries?",
        copy: "Before signing, confirm who has admin access to the ad account, domain, website, and enquiry records. If you already work with a provider, check what you can take with you and how calls and forms will keep reaching you during a handover.",
      },
      {
        heading: "What will you review together?",
        copy: "Agree on the question your report should answer. A dental practice filling hygiene appointments may care about cost per attended visit. A builder quoting extensions may need to track site visits through to signed projects over several months. Ask how your team can supply those outcomes.",
      },
      {
        heading: "What happens before you commit?",
        copy: "Share your service, budget range, and any existing agreement you need to work around. On the call we’ll discuss responsibilities on both sides, what needs your approval, and the terms to check in the written proposal. You can then decide whether the work fits your business.",
      },
    ],
  },
];
