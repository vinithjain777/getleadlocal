export interface IndustryContent {
  introduction: string;
  heading: string;
  overview: string;
  priorities: { title: string; description: string }[];
  resources: { label: string; href: string }[];
}

export const INDUSTRY_CONTENT: Record<string, IndustryContent> = {
  plumbing: {
    introduction:
      "Plumbing demand is local and often urgent. We connect emergency and planned-service searches to a clear call or booking path, then measure which enquiries become dispatched jobs.",
    heading: "Marketing Built Around Plumbing Call Types",
    overview:
      "Emergency repairs, drain work, water heaters, repiping, and installations should not compete for the same budget. We separate them so you can see which services and locations create profitable work.",
    priorities: [
      {
        title: "Emergency visibility",
        description: "Reach nearby customers during the hours your team can answer and dispatch.",
      },
      {
        title: "Higher-value services",
        description:
          "Give water heaters, sewer work, repiping, and installations their own campaigns and pages.",
      },
      {
        title: "Booked-job reporting",
        description: "Trace calls and forms through to appointments and completed work.",
      },
    ],
    resources: [
      { label: "Google Ads for plumbers", href: "/google-ads-for-plumbers" },
      { label: "Plumber advertising guide", href: "/blog/google-ads-plumbers" },
    ],
  },
  roofing: {
    introduction:
      "Roofing customers move from urgent leak repairs to long-consideration replacement projects. We build separate paths for each need and keep the campaign aligned with inspection capacity and service territory.",
    heading: "A Roofing Pipeline From Search to Inspection",
    overview:
      "Storm demand, insurance questions, repair enquiries, and full replacements need different messages. The goal is to generate inspection opportunities that match the work your crews want.",
    priorities: [
      {
        title: "Repair and replacement split",
        description: "Separate short-term repair intent from higher-value replacement research.",
      },
      {
        title: "Storm-response coverage",
        description:
          "Adjust campaigns around affected service areas without expanding beyond operational capacity.",
      },
      {
        title: "Inspection follow-up",
        description:
          "Track inspection requests and build consistent follow-up for longer sales cycles.",
      },
    ],
    resources: [{ label: "Local SEO for roofers", href: "/blog/local-seo-roofing" }],
  },
  flooring: {
    introduction:
      "Flooring shoppers compare materials, rooms, installation quality, and project timelines. We create focused campaigns that turn those searches into qualified measure-and-quote appointments.",
    heading: "A Flooring Strategy Organized by Project",
    overview:
      "Hardwood, tile, carpet, vinyl, refinishing, and specialty coatings each have different margins and customer questions. Clear separation improves both relevance and lead qualification.",
    priorities: [
      {
        title: "Material-specific demand",
        description:
          "Match ads and pages to the flooring types and installation services you provide.",
      },
      {
        title: "Project qualification",
        description:
          "Capture location, approximate area, material interest, and desired timing before the estimate.",
      },
      {
        title: "Visual proof",
        description:
          "Use relevant project examples and explain preparation, installation, and care expectations.",
      },
    ],
    resources: [{ label: "Google Ads for epoxy flooring", href: "/google-ads-for-epoxy-flooring" }],
  },
  construction: {
    introduction:
      "Construction leads carry high potential value but require careful qualification. We focus on the project types, locations, budgets, and timelines that fit your team before an estimator invests time.",
    heading: "Lead Generation for Longer Construction Sales Cycles",
    overview:
      "Renovations, additions, commercial work, and new builds need different proof and discovery questions. Marketing should support the estimating process rather than simply increase enquiry volume.",
    priorities: [
      {
        title: "Project-type focus",
        description:
          "Build campaigns around the contracts your team is equipped and licensed to deliver.",
      },
      {
        title: "Early qualification",
        description:
          "Collect scope, location, timing, and budget context before scheduling an estimate.",
      },
      {
        title: "Pipeline visibility",
        description:
          "Follow enquiries from first contact through site visit, proposal, and signed contract.",
      },
    ],
    resources: [{ label: "Landing-page conversion guide", href: "/blog/landing-page-mistakes" }],
  },
  hvac: {
    introduction:
      "HVAC demand changes quickly with the weather. We separate repair, replacement, and maintenance campaigns so budget can follow seasonal demand and available technician capacity.",
    heading: "HVAC Marketing That Adapts to Demand",
    overview:
      "No-cooling calls require a different response from system-replacement research or maintenance-plan promotion. Each journey gets its own message, landing page, and measurement.",
    priorities: [
      {
        title: "Repair response",
        description:
          "Capture urgent heating and cooling searches while dispatch coverage is available.",
      },
      {
        title: "Replacement leads",
        description:
          "Provide clear estimate and financing paths for homeowners researching a new system.",
      },
      {
        title: "Seasonal control",
        description: "Adjust geography, scheduling, and budgets as weather and capacity change.",
      },
    ],
    resources: [
      { label: "Google Ads for HVAC", href: "/google-ads-for-hvac" },
      { label: "Meta Ads vs Google Ads for HVAC", href: "/blog/meta-vs-google-ads" },
    ],
  },
  electrical: {
    introduction:
      "Electrical searches range from immediate safety problems to planned panel, lighting, generator, and EV-charger installations. We separate those job types and measure the calls that become booked work.",
    heading: "Campaigns Built Around Electrical Job Value",
    overview:
      "Urgent faults require fast call handling, while installation projects need stronger education and qualification. Treating them separately protects budget and scheduling capacity.",
    priorities: [
      {
        title: "Urgent service calls",
        description:
          "Prioritize outage, burning smell, tripping breaker, and emergency intent during service hours.",
      },
      {
        title: "Installation projects",
        description:
          "Create dedicated paths for panels, EV chargers, generators, lighting, and rewiring.",
      },
      {
        title: "Service-area efficiency",
        description:
          "Control location and scheduling to avoid excessive travel for unsuitable jobs.",
      },
    ],
    resources: [{ label: "Google Ads for electricians", href: "/google-ads-for-electricians" }],
  },
  solar: {
    introduction:
      "Solar marketing has a long consideration cycle. We connect high-intent searches, focused landing pages, and fast follow-up so more homeowners move from initial research to a booked consultation.",
    heading: "A Lead Generation Strategy Built for Solar Installers",
    overview:
      "We build the campaign around your installation territory, project profile, and consultation capacity, then measure which enquiries become real sales opportunities.",
    priorities: [
      {
        title: "Installation-intent targeting",
        description:
          "Reach homeowners researching installation, financing, system costs, and local installers.",
      },
      {
        title: "Service-area landing pages",
        description:
          "Answer the questions homeowners ask before requesting a solar assessment in each market.",
      },
      {
        title: "Consultation follow-up",
        description:
          "Track every enquiry and maintain contact with prospects comparing installers.",
      },
    ],
    resources: [{ label: "Lead follow-up automation guide", href: "/blog/ai-automation-leads" }],
  },
  landscaping: {
    introduction:
      "Landscaping demand spans recurring maintenance, seasonal work, and high-value design-build projects. We help separate those opportunities so the pipeline supports the crews and contracts you want to grow.",
    heading: "A Landscaping Pipeline for Recurring and Project Work",
    overview:
      "A mowing enquiry, drainage problem, patio project, and full landscape redesign should not receive the same campaign or qualification process.",
    priorities: [
      {
        title: "Service-line separation",
        description: "Split maintenance, cleanups, hardscaping, drainage, and design-build demand.",
      },
      {
        title: "Seasonal planning",
        description:
          "Shift offers and budgets around local weather, booking windows, and crew availability.",
      },
      {
        title: "Property qualification",
        description:
          "Collect location, property type, scope, timing, and budget context before estimating.",
      },
    ],
    resources: [{ label: "Local SEO services", href: "/services/local-seo" }],
  },
};
