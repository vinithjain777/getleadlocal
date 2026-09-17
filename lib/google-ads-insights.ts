export interface GoogleAdsInsight {
  heading: string;
  introduction: string;
  priorities: {
    title: string;
    description: string;
  }[];
}

export const GOOGLE_ADS_INSIGHTS: Record<string, GoogleAdsInsight> = {
  "google-ads-for-dentists": {
    heading: "A Dental Campaign Built Around Patient Intent",
    introduction:
      "Dental searches vary from urgent pain relief to elective treatment research. The account structure should reflect those different decisions instead of sending every patient through one generic campaign.",
    priorities: [
      {
        title: "Emergency demand",
        description:
          "Give tooth pain, broken tooth, and emergency searches dedicated budgets, call-focused ads, and immediate appointment options.",
      },
      {
        title: "Treatment-specific journeys",
        description:
          "Separate implants, Invisalign, cosmetic, hygiene, and general dentistry so each ad and landing page answers the right patient questions.",
      },
      {
        title: "New-patient measurement",
        description:
          "Track calls and appointment requests by treatment, then optimize toward attended consultations rather than raw form volume.",
      },
    ],
  },
  "google-ads-for-doctors": {
    heading: "A Medical Campaign Organized by Service Line",
    introduction:
      "Patients search differently for urgent care, a named specialty, a procedure, or a second opinion. Clear service-line campaigns help protect budget and make the path to an appointment easier to understand.",
    priorities: [
      {
        title: "Procedure-level targeting",
        description:
          "Group keywords and ads around the conditions and procedures the practice actually wants to grow.",
      },
      {
        title: "Location and availability",
        description:
          "Prioritize the areas the clinic serves and make opening hours, appointment availability, and directions easy to find.",
      },
      {
        title: "Compliant conversion paths",
        description:
          "Use careful medical language and privacy-conscious forms while measuring calls and appointment requests.",
      },
    ],
  },
  "google-ads-for-law-firms": {
    heading: "A Legal Campaign Focused on Qualified Matters",
    introduction:
      "A law firm does not need the most enquiries; it needs enquiries that match its practice areas, jurisdiction, and case criteria. Campaign decisions should follow that intake reality.",
    priorities: [
      {
        title: "Practice-area separation",
        description:
          "Build distinct campaigns for the case types the firm accepts so budgets and messages match potential matter value.",
      },
      {
        title: "Jurisdiction control",
        description:
          "Constrain targeting to the locations where the firm can act and filter research, employment, and unrelated legal searches.",
      },
      {
        title: "Intake-quality feedback",
        description:
          "Connect call and form outcomes to signed-case quality so optimization goes beyond cost per lead.",
      },
    ],
  },
  "google-ads-for-plumbers": {
    heading: "A Plumbing Campaign Matched to Dispatch Urgency",
    introduction:
      "A burst pipe search and a planned water-heater replacement have different urgency, economics, and response requirements. They should not compete inside one undifferentiated campaign.",
    priorities: [
      {
        title: "Emergency call coverage",
        description:
          "Use call-led ads during hours when someone can answer and target high-urgency leak, blockage, and no-water searches.",
      },
      {
        title: "High-value service groups",
        description:
          "Separate water heaters, repiping, sewer work, and installations from low-value informational traffic.",
      },
      {
        title: "Booked-job tracking",
        description:
          "Review which search terms produce dispatches and completed jobs, not merely phone calls.",
      },
    ],
  },
  "google-ads-for-therapists": {
    heading: "A Therapy Campaign Designed for Trust and Fit",
    introduction:
      "People looking for a therapist evaluate specialty, approach, availability, insurance, and personal fit. Ads should help them identify the right care without using intrusive or insensitive messaging.",
    priorities: [
      {
        title: "Specialty and modality",
        description:
          "Organize campaigns around the populations, concerns, and therapy formats the practice supports.",
      },
      {
        title: "Privacy-conscious messaging",
        description:
          "Use respectful language, avoid overpromising outcomes, and keep enquiry forms limited to necessary contact details.",
      },
      {
        title: "Consultation availability",
        description:
          "Make location, telehealth options, insurance information, and the first-call process clear before a prospect enquires.",
      },
    ],
  },
  "google-ads-for-restaurants": {
    heading: "A Restaurant Campaign Split by Dining Occasion",
    introduction:
      "A nearby dinner search, a catering enquiry, and a delivery order have different value and conversion paths. Campaigns work better when each occasion has its own message and action.",
    priorities: [
      {
        title: "Reservation demand",
        description:
          "Target cuisine, location, and occasion searches with direct access to menus, hours, and reservation options.",
      },
      {
        title: "Orders and catering",
        description:
          "Separate takeaway, delivery, private dining, and catering so higher-value enquiries receive appropriate budgets.",
      },
      {
        title: "Local performance windows",
        description:
          "Adjust scheduling and bids around meal periods, days of week, service radius, and actual order capacity.",
      },
    ],
  },
  "google-ads-for-accountants": {
    heading: "An Accounting Campaign Balanced Across the Year",
    introduction:
      "Tax-season demand is intense, while bookkeeping, payroll, and advisory services require an always-on pipeline. Separate planning keeps seasonal traffic from consuming the entire budget.",
    priorities: [
      {
        title: "Service-specific qualification",
        description:
          "Distinguish personal tax, business tax, bookkeeping, payroll, and advisory searches before the click.",
      },
      {
        title: "Seasonal budget planning",
        description:
          "Increase coverage for filing deadlines while maintaining campaigns for recurring business services.",
      },
      {
        title: "Client-fit tracking",
        description:
          "Measure consultations by service, business size, and engagement potential rather than treating every enquiry equally.",
      },
    ],
  },
  "google-ads-for-apartments": {
    heading: "A Leasing Campaign Connected to Available Inventory",
    introduction:
      "Apartment ads should reflect the units, price bands, amenities, and move-in dates that are actually available. Otherwise clicks rise while qualified tours do not.",
    priorities: [
      {
        title: "Unit and amenity intent",
        description:
          "Structure campaigns around bedroom count, pet policies, furnished options, amenities, and neighborhood searches.",
      },
      {
        title: "Commuter-area targeting",
        description:
          "Reach renters searching near employers, universities, transit, and the practical radius around the property.",
      },
      {
        title: "Tour conversion",
        description:
          "Send prospects to current availability and measure scheduled tours, completed applications, and leased units.",
      },
    ],
  },
  "google-ads-for-electricians": {
    heading: "An Electrical Campaign Split by Job Type",
    introduction:
      "Urgent faults, safety inspections, EV charger installations, and rewiring projects differ greatly in value and response time. Separate campaigns make those tradeoffs visible.",
    priorities: [
      {
        title: "Urgent fault calls",
        description:
          "Prioritize outage, burning smell, tripping breaker, and emergency searches when dispatch coverage is available.",
      },
      {
        title: "Installation projects",
        description:
          "Build focused groups for panels, EV chargers, lighting, generators, and rewiring with project-specific landing pages.",
      },
      {
        title: "Service-area economics",
        description:
          "Control radius and scheduling so travel time and low-value jobs do not consume profitable capacity.",
      },
    ],
  },
  "google-ads-for-pest-control": {
    heading: "A Pest Campaign That Responds to Species and Season",
    introduction:
      "Pest demand changes with weather, region, property type, and the species involved. Campaigns should respond to those patterns instead of using the same budget allocation all year.",
    priorities: [
      {
        title: "Pest-specific campaigns",
        description:
          "Separate rodents, termites, bed bugs, roaches, wildlife, and seasonal insects to match urgency and treatment value.",
      },
      {
        title: "Seasonal coverage",
        description:
          "Shift budget as local pest activity changes and maintain protection for year-round recurring services.",
      },
      {
        title: "Treatment qualification",
        description:
          "Capture property type, location, pest, and urgency so the team can prioritize the right calls.",
      },
    ],
  },
  "google-ads-for-realtors": {
    heading: "A Real Estate Campaign Divided by Client Journey",
    introduction:
      "Buyers, sellers, investors, and people requesting a valuation are distinct audiences. A useful campaign gives each group a relevant next step rather than routing everyone to a generic property page.",
    priorities: [
      {
        title: "Seller intent",
        description:
          "Target valuation, listing-agent, and selling-process searches with a clear consultation or home-value path.",
      },
      {
        title: "Buyer and area intent",
        description:
          "Build location-focused campaigns around neighborhoods, property types, and the areas where the agent is active.",
      },
      {
        title: "Lead-stage measurement",
        description:
          "Track consultations, listing appointments, and represented buyers instead of optimizing only for registrations.",
      },
    ],
  },
  "google-ads-for-hvac": {
    heading: "An HVAC Campaign Built for Weather and Capacity",
    introduction:
      "HVAC demand can change in a matter of days. Repair, replacement, and maintenance campaigns need separate controls so budget follows both weather and technician availability.",
    priorities: [
      {
        title: "Repair demand",
        description:
          "Capture no-cooling, no-heat, breakdown, and same-day searches with call-focused ads during dispatch hours.",
      },
      {
        title: "Replacement opportunities",
        description:
          "Separate installation and system-replacement searches with financing, equipment, and estimate information.",
      },
      {
        title: "Capacity-based optimization",
        description:
          "Adjust geography, schedules, and budgets around seasonal demand and the jobs the team can actually serve.",
      },
    ],
  },
  "google-ads-for-manufacturers": {
    heading: "A Manufacturing Campaign Designed for Qualified RFQs",
    introduction:
      "Industrial buyers search with technical language and longer buying cycles. The campaign must communicate capabilities precisely and make it easy for the right prospect to submit a useful request for quote.",
    priorities: [
      {
        title: "Capability keywords",
        description:
          "Target processes, materials, tolerances, certifications, and production capabilities rather than broad manufacturing terms.",
      },
      {
        title: "Regional and national reach",
        description:
          "Set geography around shipping economics, sales territories, and the markets the operation can serve competitively.",
      },
      {
        title: "RFQ quality",
        description:
          "Design forms around drawings, quantities, materials, timelines, and specifications so sales receives actionable enquiries.",
      },
    ],
  },
  "google-ads-for-painters": {
    heading: "A Painting Campaign Organized Around Project Value",
    introduction:
      "Interior rooms, full exteriors, cabinets, and commercial projects produce very different estimates. Campaign structure should make those differences visible before budget is scaled.",
    priorities: [
      {
        title: "Project-type separation",
        description:
          "Split interior, exterior, cabinet, and commercial searches with the right proof and estimate language.",
      },
      {
        title: "Season and crew planning",
        description:
          "Shift emphasis between indoor and outdoor work based on weather, backlog, and crew availability.",
      },
      {
        title: "Estimate qualification",
        description:
          "Collect location, property type, surfaces, timing, and project scope to reduce unsuitable quote requests.",
      },
    ],
  },
  "google-ads-for-epoxy-flooring": {
    heading: "An Epoxy Campaign Built Around Surface and Use Case",
    introduction:
      "A residential garage floor, commercial kitchen, warehouse, and showroom need different systems and carry different project values. The campaign should qualify that use case early.",
    priorities: [
      {
        title: "Residential versus commercial",
        description:
          "Separate garage and basement demand from industrial, retail, warehouse, and food-service flooring projects.",
      },
      {
        title: "Visual landing pages",
        description:
          "Use relevant project examples and explain preparation, coating options, cure time, and durability for each setting.",
      },
      {
        title: "Scope qualification",
        description:
          "Ask about square footage, existing surface, property type, location, and desired timing before scheduling an estimate.",
      },
    ],
  },
  "google-ads-for-physios": {
    heading: "A Physio Campaign Organized Around Patient Needs",
    introduction:
      "Patients may search by pain, injury, treatment type, practitioner, or location. A clear campaign structure connects those searches to the most relevant service and booking path.",
    priorities: [
      {
        title: "Condition and service groups",
        description:
          "Separate sports injuries, post-operative rehabilitation, back pain, workplace injuries, and specialist treatments.",
      },
      {
        title: "Local appointment intent",
        description:
          "Emphasize clinic location, availability, practitioner information, and online booking for nearby patients.",
      },
      {
        title: "New-patient outcomes",
        description:
          "Measure completed booking requests and attended initial assessments instead of counting every contact equally.",
      },
    ],
  },
};

export function getGoogleAdsInsight(slug: string) {
  return GOOGLE_ADS_INSIGHTS[slug];
}
