import type { GoogleAdsLandingPage } from "@/types";

/**
 * Shared "Our Google Ads Strategy" pillars.
 * Same structure across every industry landing page — only the
 * per-page `strategyIntro` copy changes to stay industry-specific.
 */
export const GOOGLE_ADS_STRATEGY = [
  {
    title: "Keyword Research",
    icon: "Search",
    description:
      "We identify the exact terms your customers search — including buying-intent and emergency keywords — so your budget targets people ready to convert.",
  },
  {
    title: "Campaign Structure",
    icon: "LayoutGrid",
    description:
      "Campaigns are organized by service, location and intent so performance data stays clean and every dollar can be optimized individually.",
  },
  {
    title: "Competitor Research",
    icon: "Binoculars",
    description:
      "We analyze what competitors are bidding on and how they position themselves, so your ads stand out and win the click.",
  },
  {
    title: "Landing Pages",
    icon: "Layout",
    description:
      "Every campaign links to a dedicated, conversion-focused landing page — not just your homepage — built to turn clicks into calls and form submissions.",
  },
  {
    title: "Call Tracking",
    icon: "PhoneCall",
    description:
      "Every number is tracked back to the exact keyword and ad that generated the call, so you know precisely what's working.",
  },
  {
    title: "Conversion Tracking",
    icon: "Target",
    description:
      "We track form submissions, calls and booked appointments so performance is measured by real business results, not just clicks.",
  },
  {
    title: "Weekly Optimization",
    icon: "TrendingUp",
    description:
      "We review performance weekly, pausing what isn't working and reinvesting in the keywords and ads that generate results.",
  },
  {
    title: "Negative Keywords",
    icon: "ShieldOff",
    description:
      "We continuously add negative keywords to filter out irrelevant searches, protecting your budget from unqualified clicks.",
  },
  {
    title: "AI Follow-up",
    icon: "Bot",
    description:
      "Leads are automatically followed up with AI-powered messaging within minutes, so no inquiry goes cold while you're busy running your business.",
  },
];

/** Shared "What's Included" checklist — identical deliverables on every page. */
export const GOOGLE_ADS_INCLUDED = [
  "Campaign Setup",
  "Keyword Research",
  "Ad Copy",
  "Landing Pages",
  "Conversion Tracking",
  "Call Tracking",
  "Monthly Reports",
  "Weekly Optimization",
  "Remarketing",
];

/** Shared "Why Choose Us" feature cards. */
export const GOOGLE_ADS_WHY_CHOOSE_US = [
  {
    title: "Industry Specialists",
    icon: "Target",
    description:
      "We focus specifically on local service and professional businesses, so every strategy is built around how your customers actually search.",
  },
  {
    title: "Transparent Reporting",
    icon: "ClipboardCheck",
    description:
      "Clear, honest reporting shows exactly where your budget is going and what results it's producing — no confusing jargon.",
  },
  {
    title: "ROI Focused",
    icon: "TrendingUp",
    description:
      "Every campaign decision is made to maximize return on ad spend, not just clicks or impressions.",
  },
  {
    title: "Google Ads Experts",
    icon: "BadgeCheck",
    description:
      "Our team lives inside Google Ads every day, staying current with platform changes so your campaigns stay ahead of the competition.",
  },
  {
    title: "AI Automation",
    icon: "Zap",
    description:
      "We use AI-powered follow-up and automation so leads are contacted instantly, improving your close rate without adding staff.",
  },
  {
    title: "Long-Term Growth Partner",
    icon: "Handshake",
    description:
      "We work alongside your business month after month, continuously refining campaigns as your goals and market evolve.",
  },
];

/** Shared 6-step process, identical across every landing page. */
export const GOOGLE_ADS_PROCESS = [
  {
    number: 1,
    title: "Book Strategy Call",
    description: "We start with a free call to understand your business, goals and current marketing efforts.",
  },
  {
    number: 2,
    title: "Research",
    description: "We research your market, competitors and the exact keywords your customers are searching for.",
  },
  {
    number: 3,
    title: "Build Campaign",
    description: "We build your campaigns, ad copy, landing pages and tracking from the ground up.",
  },
  {
    number: 4,
    title: "Launch",
    description: "We launch your campaigns and monitor performance closely during the critical first days.",
  },
  {
    number: 5,
    title: "Optimize",
    description: "We refine keywords, bids and ad copy weekly based on real performance data.",
  },
  {
    number: 6,
    title: "Scale",
    description: "Once a campaign is profitable, we scale budget to generate even more qualified leads.",
  },
];

export const GOOGLE_ADS_PAGES: GoogleAdsLandingPage[] = [
  {
    slug: "google-ads-for-dentists",
    industry: "Dentists",
    industrySingular: "dentist",
    metaTitle: "Google Ads for Dentists | Get More Patients Booked Every Week",
    metaDescription:
      "Grow your dental practice with Google Ads built for dentists. Target high-intent searches like \"emergency dentist near me\" and turn clicks into booked appointments.",
    h1: "Google Ads for Dentists That Fill Your Appointment Book",
    heroSubheadline:
      "Patients searching \"dentist near me\" are ready to book. We turn those searches into new patient appointments for your practice — not just website clicks.",
    heroIcon: "Smile",
    whyItWorksHeading: "Why Google Ads Work For Dentists",
    whyItWorksIntro:
      "When someone searches \"dentist near me\" or \"emergency dentist,\" they aren't researching — they're ready to book. Google Ads for dentists puts your practice in front of these high-intent patients at the exact moment they're choosing a provider, whether that's a routine cleaning or a same-day toothache emergency.",
    whyItWorksPoints: [
      "Capture emergency searches like \"tooth pain relief\" or \"emergency dentist open today\"",
      "Target cosmetic and high-value procedures such as Invisalign, veneers and implants",
      "Show up above competitors for \"new patient specials\" and insurance-related searches",
      "Fill same-day cancellations with location-targeted urgent care campaigns",
    ],
    challenges: [
      { icon: "Swords", title: "High Competition", description: "Dental keywords are some of the most competitive in local search, with practices bidding aggressively for the same patients." },
      { icon: "DollarSign", title: "Expensive Leads", description: "Without tight targeting, cost-per-click for dental keywords can spiral, wasting budget on the wrong searches." },
      { icon: "Filter", title: "Low-Quality Enquiries", description: "Generic campaigns attract price-shoppers instead of patients looking for long-term care." },
      { icon: "BarChart2", title: "No Tracking", description: "Many practices can't tell which ads actually generated a booked appointment versus a missed call." },
    ],
    strategyIntro:
      "We build dental Google Ads campaigns around procedures and patient intent — not just generic keywords — so your budget goes toward searches that turn into booked chairs.",
    faqs: [
      { question: "How much should a dental practice spend on Google Ads?", answer: "Most single-location practices start seeing consistent new patient bookings with a monthly ad spend between $1,500–$3,000, depending on local competition and target procedures." },
      { question: "Do Google Ads work for dental practices?", answer: "Yes. Dental searches have extremely high buying intent — patients searching for a dentist are typically ready to book within days, making Google Ads one of the fastest ways to fill your schedule." },
      { question: "Can Google Ads help with emergency dental appointments?", answer: "Absolutely. We build dedicated campaigns around emergency searches like \"tooth pain\" and \"emergency dentist near me\" to capture same-day, high-value appointments." },
      { question: "How long before I get new patients from Google Ads?", answer: "Most dental practices start receiving calls and form submissions within the first 1–2 weeks of launch, with campaigns fully optimized by week four." },
      { question: "Can you target specific procedures like Invisalign or implants?", answer: "Yes, we build separate campaigns for high-value procedures so you can control budget and messaging for each service line." },
      { question: "Will Google Ads work alongside my existing SEO?", answer: "Yes, Google Ads and SEO work best together — Ads generate immediate bookings while SEO builds long-term organic visibility." },
      { question: "How do you track which ads generate booked appointments?", answer: "We set up call tracking and conversion tracking so you can see exactly which keywords and ads are generating booked patients, not just clicks." },
      { question: "Do you handle ad copy and landing pages for dental offers?", answer: "Yes, we write dental-specific ad copy and build dedicated landing pages for offers like new patient specials, whitening and Invisalign consultations." },
    ],
    finalCtaHeading: "Ready To Generate More Dentist Leads?",
    finalCtaSubtext: "Book a free strategy call and we'll show you exactly how Google Ads can fill your appointment book with new patients.",
    relatedIndustries: ["google-ads-for-doctors", "google-ads-for-physios", "google-ads-for-therapists"],
  },
  {
    slug: "google-ads-for-doctors",
    industry: "Doctors",
    industrySingular: "doctor",
    metaTitle: "Google Ads for Doctors | Attract More Patients to Your Practice",
    metaDescription:
      "Google Ads for doctors and medical practices. Reach patients searching for care in your area and convert them into booked appointments with compliant campaigns.",
    h1: "Google Ads for Doctors That Convert Searches Into Booked Visits",
    heroSubheadline:
      "Patients searching for a doctor in your area are ready to book. We build compliant, high-converting Google Ads campaigns that turn those searches into appointments.",
    heroIcon: "Stethoscope",
    whyItWorksHeading: "Why Google Ads Work For Doctors",
    whyItWorksIntro:
      "Searches like \"family doctor near me\" or \"walk-in clinic today\" show exactly what a patient needs and when they need it. Google Ads for doctors lets your practice appear the moment someone is choosing a provider, rather than waiting for referrals or word of mouth.",
    whyItWorksPoints: [
      "Capture urgent-care and same-day searches from patients who need to be seen quickly",
      "Target patients actively searching by insurance provider or specialty",
      "Promote specific services like physicals, telehealth or chronic care management",
      "Reach new residents searching for a primary care provider in your area",
    ],
    challenges: [
      { icon: "ShieldAlert", title: "Compliance Restrictions", description: "Medical advertising has strict rules around claims and patient privacy that generic agencies often get wrong." },
      { icon: "Swords", title: "High Competition", description: "Hospital systems and large clinics often outspend independent practices on the same keywords." },
      { icon: "DollarSign", title: "Expensive Leads", description: "Broad medical keywords can be costly without tight geographic and service-line targeting." },
      { icon: "BarChart2", title: "No Tracking", description: "Without call tracking, it's difficult to know which campaigns are actually filling your schedule." },
    ],
    strategyIntro:
      "We build medical practice campaigns with compliant ad copy and service-line targeting, so your budget is spent reaching patients who are ready to book — not just browsing.",
    faqs: [
      { question: "How much should a medical practice spend on Google Ads?", answer: "Most independent practices start with a monthly budget of $1,500–$3,500, scaling based on the number of providers and services promoted." },
      { question: "Do Google Ads work for doctors and medical clinics?", answer: "Yes. Patients searching for a doctor are typically looking to book within days, making search ads one of the fastest ways to fill open appointment slots." },
      { question: "Are there advertising restrictions for medical practices?", answer: "Yes, Google has specific healthcare advertising policies. We build campaigns that comply with these rules while still highlighting your services effectively." },
      { question: "Can Google Ads help fill same-day appointments?", answer: "Yes, we run urgent-care and same-day campaigns specifically targeting patients who need to be seen quickly." },
      { question: "How long before I see new patient bookings?", answer: "Most practices see calls and form submissions within 1–2 weeks, with full optimization by week four." },
      { question: "Can you target by insurance or specialty?", answer: "Yes, we build campaigns around specific services and commonly searched insurance terms relevant to your practice." },
      { question: "How do you measure success for a medical practice?", answer: "We track calls, form submissions and booked appointments — not just clicks — using dedicated call and conversion tracking." },
      { question: "Do you build landing pages for specific services?", answer: "Yes, we create dedicated landing pages for services like physicals, telehealth and chronic care to improve conversion rates." },
    ],
    finalCtaHeading: "Ready To Generate More Doctor Leads?",
    finalCtaSubtext: "Book a free strategy call and see how Google Ads can keep your appointment book full.",
    relatedIndustries: ["google-ads-for-dentists", "google-ads-for-physios", "google-ads-for-therapists"],
  },
  {
    slug: "google-ads-for-law-firms",
    industry: "Law Firms",
    industrySingular: "law firm",
    metaTitle: "Google Ads for Law Firms | Generate More Qualified Case Leads",
    metaDescription:
      "Google Ads for law firms designed to attract high-value case leads. Target people actively searching for legal help and turn clicks into consultations.",
    h1: "Google Ads for Law Firms That Bring In Qualified Case Leads",
    heroSubheadline:
      "People searching for a lawyer are dealing with a real, urgent problem. We build campaigns that connect them with your firm before they call a competitor.",
    heroIcon: "Scale",
    whyItWorksHeading: "Why Google Ads Work For Law Firms",
    whyItWorksIntro:
      "Searches like \"personal injury lawyer near me\" or \"DUI attorney\" come from people who need legal help right now. Google Ads for law firms puts your practice in front of these high-intent, often high-value searches at the exact moment someone is choosing representation.",
    whyItWorksPoints: [
      "Capture urgent searches such as \"car accident lawyer near me\" or \"criminal defense attorney today\"",
      "Target high-value practice areas like personal injury, family law or estate planning",
      "Outrank directory sites and referral services for your core practice areas",
      "Filter out unqualified inquiries with intake-focused landing pages",
    ],
    challenges: [
      { icon: "DollarSign", title: "Expensive Leads", description: "Legal keywords are among the most expensive in Google Ads, so poor targeting can burn through budget fast." },
      { icon: "Swords", title: "High Competition", description: "National injury firms and legal directories compete aggressively for the same searches." },
      { icon: "Filter", title: "Low-Quality Enquiries", description: "Broad campaigns often generate calls for case types you don't take, wasting intake staff time." },
      { icon: "BarChart2", title: "No Tracking", description: "Without call tracking tied to case type, it's hard to know which campaigns produce signed clients." },
    ],
    strategyIntro:
      "We structure campaigns by practice area and case value, with dedicated intake landing pages, so your firm attracts qualified cases instead of tire-kickers.",
    faqs: [
      { question: "How much should a law firm spend on Google Ads?", answer: "Budgets vary widely by practice area, but most firms start with $2,000–$5,000 per month, with personal injury and family law often requiring higher spend due to competition." },
      { question: "Do Google Ads work for law firms?", answer: "Yes. People searching for legal help are typically dealing with an active issue and are ready to speak with an attorney, making search ads highly effective for case generation." },
      { question: "Can Google Ads generate personal injury leads?", answer: "Yes, personal injury is one of the most effective practice areas for Google Ads due to high search intent, though it requires tighter budget control due to cost-per-click." },
      { question: "How do you filter out low-quality leads?", answer: "We use dedicated intake landing pages and qualifying questions to filter out cases you don't handle before they reach your intake team." },
      { question: "How long before I get case inquiries?", answer: "Most firms start receiving calls within the first 1–2 weeks, with lead quality improving as we optimize over the following month." },
      { question: "Can you target specific practice areas?", answer: "Yes, we build separate campaigns for each practice area so budget and messaging are tailored to that case type." },
      { question: "How is call tracking used for law firms?", answer: "We track every call by campaign and keyword so you know exactly which searches are producing signed cases, not just phone calls." },
      { question: "Is Google Ads better than SEO for law firms?", answer: "They work best together — Google Ads generates immediate case inquiries while SEO builds long-term, lower-cost visibility for your firm." },
    ],
    finalCtaHeading: "Ready To Generate More Law Firm Leads?",
    finalCtaSubtext: "Book a free strategy call and see how Google Ads can bring in more qualified case inquiries.",
    relatedIndustries: ["google-ads-for-accountants", "google-ads-for-realtors", "google-ads-for-doctors"],
  },
  {
    slug: "google-ads-for-plumbers",
    industry: "Plumbers",
    industrySingular: "plumber",
    metaTitle: "Google Ads for Plumbers | Generate More Emergency & Repair Calls",
    metaDescription:
      "Google Ads for plumbers built to capture emergency and same-day plumbing calls. Turn high-intent searches into booked jobs with call tracking and fast follow-up.",
    h1: "Google Ads for Plumbers That Generate More Booked Jobs",
    heroSubheadline:
      "When a pipe bursts, homeowners search and call immediately. We build Google Ads campaigns that put your plumbing company first in those emergency moments.",
    heroIcon: "Wrench",
    whyItWorksHeading: "Why Google Ads Work For Plumbers",
    whyItWorksIntro:
      "Searches like \"emergency plumber near me\" or \"water heater repair today\" come from homeowners who need help immediately. Google Ads for plumbers puts your business at the top of the page during these urgent, high-intent moments — often before your competitors even show up.",
    whyItWorksPoints: [
      "Capture true emergencies like burst pipes, gas leaks and no-hot-water calls",
      "Target high-value jobs such as water heater installs and repiping",
      "Show up for \"plumber near me open now\" searches during nights and weekends",
      "Win seasonal spikes in demand for drain cleaning and pipe-freezing issues",
    ],
    challenges: [
      { icon: "DollarSign", title: "Expensive Leads", description: "Emergency plumbing keywords can be costly, so budget needs to be focused on jobs worth winning." },
      { icon: "Filter", title: "Low-Quality Enquiries", description: "Broad campaigns often generate DIY questions instead of paying service calls." },
      { icon: "CalendarClock", title: "Seasonal Demand", description: "Demand spikes during freezes and holidays, requiring campaigns that scale up and down quickly." },
      { icon: "BarChart2", title: "No Tracking", description: "Without call tracking, it's hard to know which ads are generating booked jobs versus missed calls." },
    ],
    strategyIntro:
      "We build plumbing campaigns around real service calls — emergencies, repairs and installs — with call tracking on every number so you know exactly which ads are booking jobs.",
    faqs: [
      { question: "How much should plumbers spend on Google Ads?", answer: "Most plumbing companies see strong results starting between $1,500–$3,000 per month, scaling up during peak seasons like winter freezes." },
      { question: "Do Google Ads work for plumbing companies?", answer: "Yes. Plumbing searches have very high buying intent — most people searching need service the same day, making Google Ads one of the fastest ways to book jobs." },
      { question: "Can Google Ads generate emergency plumbing calls?", answer: "Yes, we build dedicated emergency campaigns targeting searches like \"burst pipe\" and \"emergency plumber near me\" so your phone rings during true emergencies." },
      { question: "How long before I get leads?", answer: "Most plumbing companies start receiving calls within the first few days of launch, with volume increasing as we optimize over the first month." },
      { question: "Can you target specific services like water heaters or drain cleaning?", answer: "Yes, we build separate campaigns for each service so you can control budget toward your most profitable jobs." },
      { question: "How do you handle seasonal demand spikes?", answer: "We monitor search trends and increase budget and bids during high-demand periods like cold snaps, so you capture more emergency calls when they matter most." },
      { question: "How is call tracking set up for plumbers?", answer: "Every campaign gets a unique tracked number so you can see exactly which keywords and ads are generating booked jobs, not just calls." },
      { question: "Do you build landing pages for plumbing services?", answer: "Yes, we create service-specific landing pages for emergencies, installs and repairs to improve conversion rates and booking speed." },
    ],
    finalCtaHeading: "Ready To Generate More Plumbing Leads?",
    finalCtaSubtext: "Book a free strategy call and we'll show you how Google Ads can keep your schedule full of booked jobs.",
    relatedIndustries: ["google-ads-for-electricians", "google-ads-for-hvac", "google-ads-for-pest-control"],
  },
  {
    slug: "google-ads-for-therapists",
    industry: "Therapists",
    industrySingular: "therapist",
    metaTitle: "Google Ads for Therapists | Fill Your Caseload With New Clients",
    metaDescription:
      "Google Ads for therapists and counseling practices. Reach people actively searching for support and convert them into booked sessions with compliant campaigns.",
    h1: "Google Ads for Therapists That Fill Your Caseload",
    heroSubheadline:
      "People searching for a therapist are often ready to book their first session. We build sensitive, high-converting campaigns that connect them with your practice.",
    heroIcon: "HeartHandshake",
    whyItWorksHeading: "Why Google Ads Work For Therapists",
    whyItWorksIntro:
      "Searches like \"therapist near me\" or \"anxiety counseling\" come from people actively looking for support, often ready to book a first session. Google Ads for therapists helps your practice appear at that critical moment, connecting you with new clients before they choose another provider.",
    whyItWorksPoints: [
      "Reach people searching for specific concerns like anxiety, couples counseling or grief support",
      "Target new clients actively searching by insurance or sliding-scale availability",
      "Promote openings and new client availability in real time",
      "Build a steady, predictable stream of new intake calls each month",
    ],
    challenges: [
      { icon: "ShieldAlert", title: "Sensitive Messaging", description: "Mental health advertising requires careful, compliant language that respects privacy and avoids overpromising." },
      { icon: "Filter", title: "Low-Quality Enquiries", description: "Generic campaigns can attract inquiries outside your specialty or availability." },
      { icon: "DollarSign", title: "Expensive Leads", description: "Popular counseling keywords can be competitive in larger metro areas without tight targeting." },
      { icon: "BarChart2", title: "No Tracking", description: "Many practices can't tell which campaigns are actually converting into booked intake calls." },
    ],
    strategyIntro:
      "We build therapy practice campaigns around specific concerns and client fit, using compliant messaging that respects the sensitivity of mental health searches.",
    faqs: [
      { question: "How much should a therapy practice spend on Google Ads?", answer: "Most solo and small group practices start with $800–$2,000 per month, depending on the number of clinicians and specialties promoted." },
      { question: "Do Google Ads work for therapists?", answer: "Yes. People searching for a therapist are often ready to book, making search ads an effective way to fill open intake slots consistently." },
      { question: "Can you target specific specialties like anxiety or couples counseling?", answer: "Yes, we build separate campaigns for each specialty so you attract clients that match your clinicians' focus areas." },
      { question: "How do you handle the sensitivity of mental health advertising?", answer: "We write compliant, empathetic ad copy that respects Google's healthcare advertising policies and the sensitivity of these searches." },
      { question: "How long before I get new client inquiries?", answer: "Most practices see new inquiries within the first 1–2 weeks, with volume increasing as campaigns are optimized." },
      { question: "Can Google Ads help fill last-minute openings?", answer: "Yes, we can run flexible campaigns that scale up when you have new client availability and pause when your caseload is full." },
      { question: "Do you track which ads generate booked sessions?", answer: "Yes, we set up conversion tracking on your booking or contact form so you know exactly which campaigns are producing new clients." },
      { question: "Is Google Ads a good fit for group practices?", answer: "Yes, especially for group practices with multiple specialties — we can run individual campaigns for each clinician's focus area." },
    ],
    finalCtaHeading: "Ready To Fill Your Caseload With New Clients?",
    finalCtaSubtext: "Book a free strategy call and see how Google Ads can bring consistent, qualified inquiries to your practice.",
    relatedIndustries: ["google-ads-for-doctors", "google-ads-for-physios", "google-ads-for-dentists"],
  },
  {
    slug: "google-ads-for-restaurants",
    industry: "Restaurants",
    industrySingular: "restaurant",
    metaTitle: "Google Ads for Restaurants | Fill More Tables & Online Orders",
    metaDescription:
      "Google Ads for restaurants that drive reservations, walk-ins and online orders. Reach hungry, nearby customers at the exact moment they're deciding where to eat.",
    h1: "Google Ads for Restaurants That Fill More Tables",
    heroSubheadline:
      "Diners searching \"restaurants near me\" are choosing where to eat right now. We build campaigns that put your restaurant in front of them at the perfect moment.",
    heroIcon: "UtensilsCrossed",
    whyItWorksHeading: "Why Google Ads Work For Restaurants",
    whyItWorksIntro:
      "Searches like \"restaurants near me\" or \"best [cuisine] near me\" happen right before a decision is made. Google Ads for restaurants puts you in front of hungry, nearby customers at that exact moment, driving more reservations, walk-ins and online orders.",
    whyItWorksPoints: [
      "Capture last-minute dinner decisions with location-targeted campaigns",
      "Promote specials, happy hour and events to drive slower-day traffic",
      "Drive online ordering and delivery during peak meal times",
      "Target searches for private events, catering and large group bookings",
    ],
    challenges: [
      { icon: "Swords", title: "High Competition", description: "Restaurants compete with delivery apps and directory listings for the same local searches." },
      { icon: "Filter", title: "Low-Quality Enquiries", description: "Broad campaigns can drive menu browsers instead of people ready to book or order." },
      { icon: "CalendarClock", title: "Seasonal Demand", description: "Traffic fluctuates around holidays, weather and local events, requiring flexible campaigns." },
      { icon: "BarChart2", title: "No Tracking", description: "Without tracking, it's hard to connect ad spend to actual reservations or orders." },
    ],
    strategyIntro:
      "We build restaurant campaigns around dayparts and intent — lunch, dinner, events and catering — so your ad spend drives actual reservations and orders, not just impressions.",
    faqs: [
      { question: "How much should a restaurant spend on Google Ads?", answer: "Most independent restaurants start with $500–$1,500 per month, scaling up around holidays, events or new location openings." },
      { question: "Do Google Ads work for restaurants?", answer: "Yes. Local search ads are highly effective for restaurants because most searches happen minutes before a dining decision is made." },
      { question: "Can Google Ads drive online orders?", answer: "Yes, we can link campaigns directly to your online ordering platform to drive delivery and pickup orders during peak hours." },
      { question: "Can you target searches for catering and private events?", answer: "Yes, we build dedicated campaigns for catering and event bookings, which are often higher-value than individual meals." },
      { question: "How long before I see more reservations?", answer: "Most restaurants see increased calls, website visits and reservations within the first 1–2 weeks of launch." },
      { question: "Do you help promote specials and happy hour?", answer: "Yes, we can run time-targeted campaigns that promote specials during your slower dayparts to fill more seats." },
      { question: "How do you track results for a restaurant?", answer: "We track calls, reservation clicks and online order conversions so you can see exactly what your ad spend is producing." },
      { question: "Is Google Ads better than social media ads for restaurants?", answer: "They serve different purposes — Google Ads captures people actively searching to dine now, while social ads build awareness. Many restaurants benefit from both." },
    ],
    finalCtaHeading: "Ready To Fill More Tables?",
    finalCtaSubtext: "Book a free strategy call and see how Google Ads can drive more reservations, walk-ins and online orders.",
    relatedIndustries: ["google-ads-for-realtors", "google-ads-for-apartments", "google-ads-for-accountants"],
  },
  {
    slug: "google-ads-for-accountants",
    industry: "Accountants",
    industrySingular: "accountant",
    metaTitle: "Google Ads for Accountants | Generate More Tax & Bookkeeping Clients",
    metaDescription:
      "Google Ads for accountants and CPA firms. Attract individuals and businesses searching for tax help, bookkeeping and financial services year-round.",
    h1: "Google Ads for Accountants That Generate More Clients",
    heroSubheadline:
      "People and businesses searching for an accountant need help now — often with a tax deadline approaching. We turn those searches into booked consultations.",
    heroIcon: "Calculator",
    whyItWorksHeading: "Why Google Ads Work For Accountants",
    whyItWorksIntro:
      "Searches like \"tax preparer near me\" or \"small business bookkeeping\" come from people who need financial help on a deadline. Google Ads for accountants puts your firm in front of these searches at the exact moment someone is choosing a provider, not just browsing.",
    whyItWorksPoints: [
      "Capture seasonal tax-time surges with time-sensitive campaigns",
      "Target small business owners searching for bookkeeping and payroll help",
      "Promote specialized services like audits, estate planning or business formation",
      "Stay visible year-round with campaigns that scale beyond tax season",
    ],
    challenges: [
      { icon: "CalendarClock", title: "Seasonal Demand", description: "Demand spikes heavily around tax season, requiring campaigns that scale up and down throughout the year." },
      { icon: "Filter", title: "Low-Quality Enquiries", description: "Broad campaigns can attract DIY tax filers instead of qualified business or individual clients." },
      { icon: "Swords", title: "High Competition", description: "National tax franchises and software companies compete heavily for the same keywords." },
      { icon: "BarChart2", title: "No Tracking", description: "Without tracking, it's difficult to know which campaigns are generating booked consultations." },
    ],
    strategyIntro:
      "We build accounting campaigns around both seasonal tax demand and year-round services like bookkeeping and payroll, so your firm stays busy in every quarter.",
    faqs: [
      { question: "How much should an accounting firm spend on Google Ads?", answer: "Most firms start with $1,000–$2,500 per month, increasing spend during tax season when demand and competition are highest." },
      { question: "Do Google Ads work for accountants?", answer: "Yes. People searching for tax or accounting help are typically on a deadline, making search ads highly effective for generating booked consultations." },
      { question: "Can Google Ads help during tax season specifically?", answer: "Yes, we build dedicated tax-season campaigns that scale up in Q1 to capture the seasonal surge in search volume." },
      { question: "Can you target small business owners for bookkeeping services?", answer: "Yes, we build separate campaigns targeting business owners searching for bookkeeping, payroll and CFO services." },
      { question: "How long before I get new client inquiries?", answer: "Most firms see new calls and form submissions within the first 1–2 weeks, with volume increasing as we optimize." },
      { question: "How do you keep campaigns effective outside of tax season?", answer: "We shift campaign focus to year-round services like bookkeeping, payroll and business advisory to maintain consistent lead flow." },
      { question: "How do you track which ads generate booked consultations?", answer: "We set up call tracking and conversion tracking so you know exactly which keywords and ads are producing new clients." },
      { question: "Is Google Ads worth it for a small accounting practice?", answer: "Yes, especially in competitive markets, since it lets a smaller firm compete directly with larger firms for the same searches." },
    ],
    finalCtaHeading: "Ready To Generate More Accounting Clients?",
    finalCtaSubtext: "Book a free strategy call and see how Google Ads can keep your firm busy all year.",
    relatedIndustries: ["google-ads-for-law-firms", "google-ads-for-realtors", "google-ads-for-manufacturers"],
  },
  {
    slug: "google-ads-for-apartments",
    industry: "Apartments",
    industrySingular: "apartment community",
    metaTitle: "Google Ads for Apartments | Fill Vacancies With Qualified Renters",
    metaDescription:
      "Google Ads for apartment communities and property managers. Reach renters actively searching in your area and turn clicks into scheduled tours and applications.",
    h1: "Google Ads for Apartments That Fill Vacancies Faster",
    heroSubheadline:
      "Renters searching \"apartments near me\" are actively comparing communities. We build campaigns that get your available units in front of them first.",
    heroIcon: "Building2",
    whyItWorksHeading: "Why Google Ads Work For Apartments",
    whyItWorksIntro:
      "Searches like \"apartments for rent near me\" or \"2 bedroom apartments in [city]\" come from renters actively comparing communities and ready to schedule a tour. Google Ads for apartments puts your available units in front of these high-intent searchers before they choose a competitor.",
    whyItWorksPoints: [
      "Target renters searching by bedroom count, neighborhood or price range",
      "Promote move-in specials and limited-time leasing offers",
      "Capture searches for pet-friendly, luxury or student housing niches",
      "Fill vacancies faster with location-targeted campaigns around your community",
    ],
    challenges: [
      { icon: "Swords", title: "High Competition", description: "Apartment listing sites and competing communities bid aggressively for the same renter searches." },
      { icon: "Filter", title: "Low-Quality Enquiries", description: "Broad campaigns can generate inquiries for unit types or price points you don't offer." },
      { icon: "CalendarClock", title: "Seasonal Demand", description: "Leasing demand shifts throughout the year, requiring budgets that adjust with vacancy needs." },
      { icon: "BarChart2", title: "No Tracking", description: "Without tracking, it's hard to know which campaigns are generating scheduled tours versus just clicks." },
    ],
    strategyIntro:
      "We build leasing campaigns around your specific unit mix, floor plans and specials, so your budget targets renters who are the right fit for your community.",
    faqs: [
      { question: "How much should an apartment community spend on Google Ads?", answer: "Budgets typically range from $1,000–$3,000 per month per property, depending on unit count and how quickly you need to fill vacancies." },
      { question: "Do Google Ads work for apartment leasing?", answer: "Yes. Renters actively searching for apartments are usually ready to schedule a tour within days, making search ads highly effective for filling vacancies." },
      { question: "Can you target renters by unit type or price range?", answer: "Yes, we build campaigns around specific floor plans, bedroom counts and price points to attract renters who are the right fit." },
      { question: "Can Google Ads promote move-in specials?", answer: "Yes, we build time-sensitive campaigns highlighting move-in specials and limited-time leasing offers to drive urgency." },
      { question: "How long before I see more scheduled tours?", answer: "Most communities see increased calls and tour requests within the first 1–2 weeks of launch." },
      { question: "How do you handle seasonal leasing demand?", answer: "We adjust budget and targeting based on your vacancy needs and seasonal leasing patterns throughout the year." },
      { question: "How do you track leads for apartment communities?", answer: "We track calls, tour requests and application starts so you can see exactly which campaigns are filling units, not just generating clicks." },
      { question: "Is Google Ads better than listing sites like Apartments.com?", answer: "They work well together — Google Ads drives direct traffic to your own site and tour scheduler, reducing reliance on paid listing sites." },
    ],
    finalCtaHeading: "Ready To Fill Your Vacancies Faster?",
    finalCtaSubtext: "Book a free strategy call and see how Google Ads can bring qualified renters to your community.",
    relatedIndustries: ["google-ads-for-realtors", "google-ads-for-restaurants", "google-ads-for-manufacturers"],
  },
  {
    slug: "google-ads-for-electricians",
    industry: "Electricians",
    industrySingular: "electrician",
    metaTitle: "Google Ads for Electricians | Generate More Service & Install Calls",
    metaDescription:
      "Google Ads for electricians built to capture emergency and installation calls. Reach homeowners searching for electrical help and turn clicks into booked jobs.",
    h1: "Google Ads for Electricians That Generate More Booked Jobs",
    heroSubheadline:
      "When the power goes out or an outlet stops working, homeowners search and call immediately. We put your electrical company first in those moments.",
    heroIcon: "Zap",
    whyItWorksHeading: "Why Google Ads Work For Electricians",
    whyItWorksIntro:
      "Searches like \"electrician near me\" or \"power outage electrician\" come from homeowners who need help immediately. Google Ads for electricians puts your company at the top of the page during these urgent moments, capturing jobs before competitors even see them.",
    whyItWorksPoints: [
      "Capture emergency searches like \"no power in house\" or \"electrician near me now\"",
      "Target high-value jobs such as panel upgrades and EV charger installs",
      "Win after-hours and weekend searches when fewer competitors are advertising",
      "Promote seasonal services like holiday lighting or storm damage repairs",
    ],
    challenges: [
      { icon: "DollarSign", title: "Expensive Leads", description: "Emergency electrical keywords can be costly, so targeting needs to focus on jobs worth winning." },
      { icon: "Filter", title: "Low-Quality Enquiries", description: "Generic campaigns can attract DIY questions instead of paying service calls." },
      { icon: "Swords", title: "High Competition", description: "Larger electrical companies often outbid smaller shops for the same local searches." },
      { icon: "BarChart2", title: "No Tracking", description: "Without call tracking, it's hard to tell which ads are generating booked jobs versus missed calls." },
    ],
    strategyIntro:
      "We build electrician campaigns around real service calls — emergencies, upgrades and installs — with call tracking so you know exactly which ads are booking jobs.",
    faqs: [
      { question: "How much should electricians spend on Google Ads?", answer: "Most electrical companies see strong results starting between $1,200–$2,800 per month, depending on your service area and competition." },
      { question: "Do Google Ads work for electrical companies?", answer: "Yes. Electrical searches have high buying intent — most people searching need service quickly, making Google Ads an effective way to book jobs fast." },
      { question: "Can Google Ads generate emergency electrical calls?", answer: "Yes, we build dedicated emergency campaigns targeting searches like \"power outage\" and \"electrician near me now\" so your phone rings during real emergencies." },
      { question: "How long before I get leads?", answer: "Most electricians start receiving calls within the first few days of launch, with volume increasing as we optimize over the first month." },
      { question: "Can you target higher-value jobs like panel upgrades?", answer: "Yes, we build separate campaigns for higher-value services so your budget prioritizes the most profitable jobs." },
      { question: "Do Google Ads work for after-hours calls?", answer: "Yes, we can schedule campaigns to run during evenings and weekends when emergency demand is high and competition is lower." },
      { question: "How is call tracking set up for electricians?", answer: "Every campaign gets a unique tracked number, so you can see exactly which keywords and ads are generating booked jobs." },
      { question: "Do you build landing pages for electrical services?", answer: "Yes, we create service-specific landing pages for emergencies, installs and upgrades to improve conversion rates." },
    ],
    finalCtaHeading: "Ready To Generate More Electrician Leads?",
    finalCtaSubtext: "Book a free strategy call and we'll show you how Google Ads can keep your schedule full of booked jobs.",
    relatedIndustries: ["google-ads-for-plumbers", "google-ads-for-hvac", "google-ads-for-pest-control"],
  },
  {
    slug: "google-ads-for-pest-control",
    industry: "Pest Control",
    industrySingular: "pest control company",
    metaTitle: "Google Ads for Pest Control | Generate More Service Calls Year-Round",
    metaDescription:
      "Google Ads for pest control companies. Capture homeowners searching for exterminators and pest treatments and turn them into booked service calls.",
    h1: "Google Ads for Pest Control That Generates More Booked Jobs",
    heroSubheadline:
      "When homeowners spot pests, they search and call immediately. We build campaigns that put your pest control company first in that moment.",
    heroIcon: "Bug",
    whyItWorksHeading: "Why Google Ads Work For Pest Control",
    whyItWorksIntro:
      "Searches like \"exterminator near me\" or \"get rid of ants fast\" come from homeowners dealing with an active problem right now. Google Ads for pest control puts your company in front of these searches at the exact moment they're choosing who to call.",
    whyItWorksPoints: [
      "Capture urgent searches for ants, roaches, rodents and bed bugs",
      "Target seasonal spikes like mosquito and wasp treatments in summer",
      "Promote recurring service plans for long-term customer value",
      "Win termite inspection searches tied to home sales and financing",
    ],
    challenges: [
      { icon: "CalendarClock", title: "Seasonal Demand", description: "Pest issues spike seasonally, requiring campaigns that scale budget up and down throughout the year." },
      { icon: "Filter", title: "Low-Quality Enquiries", description: "Broad campaigns can generate DIY questions instead of paying service calls." },
      { icon: "Swords", title: "High Competition", description: "National pest control brands often outspend local companies for the same searches." },
      { icon: "BarChart2", title: "No Tracking", description: "Without call tracking, it's hard to know which ads are generating booked treatments." },
    ],
    strategyIntro:
      "We build pest control campaigns around seasonal pest trends and recurring service plans, so your budget captures both urgent one-time jobs and long-term customers.",
    faqs: [
      { question: "How much should pest control companies spend on Google Ads?", answer: "Most companies start with $1,000–$2,500 per month, increasing spend seasonally during peak pest activity like summer months." },
      { question: "Do Google Ads work for pest control companies?", answer: "Yes. Homeowners searching for pest control are usually dealing with an active problem, making search ads a fast way to generate booked service calls." },
      { question: "Can Google Ads help during seasonal pest surges?", answer: "Yes, we increase budget and adjust targeting during high-demand seasons like mosquito and wasp season to capture more calls." },
      { question: "Can you promote recurring pest control plans?", answer: "Yes, we build campaigns specifically around recurring service plans to help you grow long-term, predictable revenue." },
      { question: "How long before I get service calls?", answer: "Most pest control companies start receiving calls within the first few days of launch, with volume increasing as campaigns are optimized." },
      { question: "Can Google Ads generate termite inspection leads?", answer: "Yes, we build dedicated campaigns for termite inspections, which are often tied to home sales and can be high-value jobs." },
      { question: "How do you track results for pest control companies?", answer: "We set up call tracking on every campaign so you know exactly which keywords and ads are generating booked treatments." },
      { question: "Is Google Ads worth it for a smaller local pest control company?", answer: "Yes, especially with tight geographic targeting, which lets smaller companies compete directly with national brands in their service area." },
    ],
    finalCtaHeading: "Ready To Generate More Pest Control Leads?",
    finalCtaSubtext: "Book a free strategy call and see how Google Ads can keep your schedule full of booked treatments.",
    relatedIndustries: ["google-ads-for-electricians", "google-ads-for-plumbers", "google-ads-for-hvac"],
  },
  {
    slug: "google-ads-for-realtors",
    industry: "Realtors",
    industrySingular: "realtor",
    metaTitle: "Google Ads for Realtors | Generate More Buyer & Seller Leads",
    metaDescription:
      "Google Ads for realtors and real estate agents. Reach buyers and sellers actively searching in your market and convert them into qualified leads.",
    h1: "Google Ads for Realtors That Generate More Buyer & Seller Leads",
    heroSubheadline:
      "Buyers and sellers searching for a realtor are actively making a decision. We build campaigns that put you in front of them at the right moment.",
    heroIcon: "Key",
    whyItWorksHeading: "Why Google Ads Work For Realtors",
    whyItWorksIntro:
      "Searches like \"realtor near me\" or \"homes for sale in [city]\" come from buyers and sellers who are actively in the market. Google Ads for realtors puts your listings and services in front of these high-intent searchers before they choose another agent.",
    whyItWorksPoints: [
      "Capture seller-intent searches like \"what's my home worth\" and \"sell my house fast\"",
      "Target buyers searching by neighborhood, price range or property type",
      "Promote new and open-house listings to nearby, active buyers",
      "Build a consistent pipeline of both buyer and seller leads each month",
    ],
    challenges: [
      { icon: "Swords", title: "High Competition", description: "National real estate portals and competing agents bid heavily on the same buyer and seller searches." },
      { icon: "Filter", title: "Low-Quality Enquiries", description: "Broad campaigns can generate browsers instead of serious buyers or sellers." },
      { icon: "DollarSign", title: "Expensive Leads", description: "Popular real estate keywords can be costly without tight geographic and intent targeting." },
      { icon: "BarChart2", title: "No Tracking", description: "Without tracking, it's hard to know which campaigns are producing real buyer or seller conversations." },
    ],
    strategyIntro:
      "We build campaigns that separate buyer intent from seller intent, so your budget speaks directly to each audience instead of a single generic message.",
    faqs: [
      { question: "How much should realtors spend on Google Ads?", answer: "Most individual agents start with $800–$2,000 per month, while teams and brokerages often invest more to cover multiple markets and listings." },
      { question: "Do Google Ads work for realtors?", answer: "Yes. Buyers and sellers searching online are actively in the market, making search ads an effective way to generate qualified conversations." },
      { question: "Can Google Ads generate seller leads specifically?", answer: "Yes, we build dedicated campaigns around searches like \"what's my home worth\" to attract homeowners considering selling." },
      { question: "Can you target buyers by neighborhood or price range?", answer: "Yes, we build location and price-specific campaigns so you attract buyers looking in the areas and budgets you specialize in." },
      { question: "How long before I get buyer or seller leads?", answer: "Most realtors start seeing inquiries within the first 1–2 weeks, with lead quality improving as campaigns are optimized." },
      { question: "Can Google Ads promote individual listings?", answer: "Yes, we can run listing-specific campaigns to drive traffic to new listings and open houses in real time." },
      { question: "How do you track leads for realtors?", answer: "We set up call and form tracking so you know exactly which campaigns are generating real buyer and seller conversations." },
      { question: "Is Google Ads better than Zillow ads for realtors?", answer: "They serve different purposes — Google Ads drives leads directly to your own site and brand, reducing dependency on third-party portals." },
    ],
    finalCtaHeading: "Ready To Generate More Buyer & Seller Leads?",
    finalCtaSubtext: "Book a free strategy call and see how Google Ads can build a consistent pipeline of real estate leads.",
    relatedIndustries: ["google-ads-for-apartments", "google-ads-for-law-firms", "google-ads-for-accountants"],
  },
  {
    slug: "google-ads-for-hvac",
    industry: "HVAC",
    industrySingular: "HVAC company",
    metaTitle: "Google Ads for HVAC | Generate More Repair & Install Calls",
    metaDescription:
      "Google Ads for HVAC companies built to capture emergency repair and installation calls. Turn seasonal search spikes into booked jobs year-round.",
    h1: "Google Ads for HVAC That Generates More Booked Jobs",
    heroSubheadline:
      "When the AC breaks in July or the heat fails in January, homeowners search and call immediately. We put your HVAC company first in those moments.",
    heroIcon: "Wind",
    whyItWorksHeading: "Why Google Ads Work For HVAC Companies",
    whyItWorksIntro:
      "Searches like \"AC repair near me\" or \"furnace not working\" come from homeowners dealing with an urgent comfort issue. Google Ads for HVAC companies puts your business at the top of the page during these seasonal spikes, capturing high-value repair and install jobs.",
    whyItWorksPoints: [
      "Capture true emergencies like \"no heat\" or \"AC not cooling\" searches",
      "Target high-value install and replacement jobs before your competitors",
      "Scale campaigns up during heat waves and cold snaps to match demand",
      "Promote maintenance plans to build recurring, predictable revenue",
    ],
    challenges: [
      { icon: "CalendarClock", title: "Seasonal Demand", description: "HVAC demand spikes heavily in summer and winter, requiring campaigns that scale quickly with the weather." },
      { icon: "DollarSign", title: "Expensive Leads", description: "Emergency HVAC keywords can be costly, so targeting needs to focus on the highest-value jobs." },
      { icon: "Filter", title: "Low-Quality Enquiries", description: "Broad campaigns can attract DIY questions instead of paying service calls." },
      { icon: "BarChart2", title: "No Tracking", description: "Without call tracking, it's difficult to know which ads are generating booked repairs and installs." },
    ],
    strategyIntro:
      "We build HVAC campaigns that scale with the seasons — emergencies, installs and maintenance plans — with call tracking so you know exactly which ads are booking jobs.",
    faqs: [
      { question: "How much should HVAC companies spend on Google Ads?", answer: "Most companies start with $1,500–$3,500 per month, increasing significantly during peak summer and winter seasons." },
      { question: "Do Google Ads work for HVAC companies?", answer: "Yes. HVAC searches have extremely high intent during seasonal spikes, making Google Ads one of the fastest ways to book emergency and install jobs." },
      { question: "Can Google Ads generate emergency HVAC calls?", answer: "Yes, we build dedicated emergency campaigns targeting searches like \"no heat\" and \"AC not working\" so your phone rings during real emergencies." },
      { question: "How long before I get leads?", answer: "Most HVAC companies start receiving calls within the first few days of launch, with volume increasing as we optimize the campaign." },
      { question: "Can you target higher-value install and replacement jobs?", answer: "Yes, we build separate campaigns for system replacements and installs so your budget prioritizes the most profitable work." },
      { question: "How do you handle seasonal demand spikes?", answer: "We monitor weather trends and increase budget and bids during heat waves and cold snaps to capture more emergency calls." },
      { question: "How is call tracking set up for HVAC companies?", answer: "Every campaign gets a unique tracked number so you can see exactly which keywords and ads are generating booked jobs." },
      { question: "Can Google Ads promote maintenance plans?", answer: "Yes, we build campaigns specifically around maintenance plans to help you build recurring, predictable revenue outside of peak seasons." },
    ],
    finalCtaHeading: "Ready To Generate More HVAC Leads?",
    finalCtaSubtext: "Book a free strategy call and we'll show you how Google Ads can keep your schedule full year-round.",
    relatedIndustries: ["google-ads-for-plumbers", "google-ads-for-electricians", "google-ads-for-pest-control"],
  },
  {
    slug: "google-ads-for-manufacturers",
    industry: "Manufacturers",
    industrySingular: "manufacturer",
    metaTitle: "Google Ads for Manufacturers | Generate More B2B Sales Leads",
    metaDescription:
      "Google Ads for manufacturers designed to generate qualified B2B leads. Reach procurement teams and buyers actively searching for suppliers and capabilities.",
    h1: "Google Ads for Manufacturers That Generate More B2B Leads",
    heroSubheadline:
      "Buyers and procurement teams searching for a manufacturing partner are evaluating suppliers right now. We put your capabilities in front of them first.",
    heroIcon: "Factory",
    whyItWorksHeading: "Why Google Ads Work For Manufacturers",
    whyItWorksIntro:
      "Searches like \"custom metal fabrication near me\" or \"contract manufacturer for [product]\" come from procurement teams and buyers actively evaluating suppliers. Google Ads for manufacturers puts your capabilities in front of these decision-makers at the exact point they're researching partners.",
    whyItWorksPoints: [
      "Capture searches for specific capabilities like CNC machining or injection molding",
      "Target regional and national buyers searching for reliable domestic suppliers",
      "Promote capacity and capabilities pages to qualified procurement searches",
      "Generate RFQ requests from buyers actively comparing vendors",
    ],
    challenges: [
      { icon: "Filter", title: "Low-Quality Enquiries", description: "Broad campaigns can generate student or hobbyist inquiries instead of serious B2B buyers." },
      { icon: "Clock", title: "Long Sales Cycles", description: "Manufacturing deals often involve multiple decision-makers and longer timelines than typical local searches." },
      { icon: "BarChart2", title: "No Tracking", description: "Without proper tracking, it's hard to connect ad spend to actual RFQs and closed contracts." },
      { icon: "Swords", title: "High Competition", description: "Larger manufacturers and industrial directories often outspend smaller shops for the same keywords." },
    ],
    strategyIntro:
      "We build manufacturing campaigns around specific capabilities and buyer intent, with landing pages designed to generate RFQs from qualified procurement searches.",
    faqs: [
      { question: "How much should manufacturers spend on Google Ads?", answer: "Most manufacturers start with $1,500–$4,000 per month, depending on the number of capabilities promoted and target regions." },
      { question: "Do Google Ads work for manufacturing companies?", answer: "Yes. Procurement teams increasingly search online for suppliers, making search ads an effective way to generate qualified RFQ requests." },
      { question: "Can Google Ads target specific capabilities like CNC or injection molding?", answer: "Yes, we build separate campaigns for each capability so your budget targets buyers searching for that exact service." },
      { question: "How do you handle longer B2B sales cycles?", answer: "We set up tracking that follows leads from initial inquiry through to RFQ submission, giving you visibility even on longer decision timelines." },
      { question: "How long before I get RFQ inquiries?", answer: "Most manufacturers start seeing inquiries within the first 2–3 weeks, as procurement searches often involve more research than consumer searches." },
      { question: "Can you target national or regional buyers?", answer: "Yes, we can build campaigns targeting specific regions or run nationally depending on your production capacity and shipping capabilities." },
      { question: "How do you track leads for manufacturers?", answer: "We set up conversion tracking on RFQ forms and calls, so you can see which campaigns are producing real buyer inquiries." },
      { question: "Is Google Ads a good fit for niche manufacturing capabilities?", answer: "Yes, especially for niche capabilities, since search ads let you reach the specific, smaller pool of buyers searching for that exact service." },
    ],
    finalCtaHeading: "Ready To Generate More Manufacturing Leads?",
    finalCtaSubtext: "Book a free strategy call and see how Google Ads can bring in more qualified RFQ requests.",
    relatedIndustries: ["google-ads-for-accountants", "google-ads-for-law-firms", "google-ads-for-apartments"],
  },
  {
    slug: "google-ads-for-painters",
    industry: "Painters",
    industrySingular: "painting company",
    metaTitle: "Google Ads for Painters | Generate More Painting Project Leads",
    metaDescription:
      "Google Ads for painting companies. Reach homeowners and businesses searching for interior, exterior and commercial painting services in your area.",
    h1: "Google Ads for Painters That Fill Your Project Schedule",
    heroSubheadline:
      "Homeowners searching \"painters near me\" are ready to get quotes. We build campaigns that put your painting company in front of them first.",
    heroIcon: "PaintRoller",
    whyItWorksHeading: "Why Google Ads Work For Painters",
    whyItWorksIntro:
      "Searches like \"exterior painters near me\" or \"interior painting quote\" come from homeowners actively planning a project and comparing quotes. Google Ads for painters puts your company in front of these ready-to-hire searchers at the exact moment they're deciding who to call.",
    whyItWorksPoints: [
      "Capture project-ready searches for interior, exterior and cabinet painting",
      "Target seasonal spikes in exterior painting demand during spring and summer",
      "Promote commercial and multi-unit painting contracts for larger jobs",
      "Win quote-comparison searches before competitors respond",
    ],
    challenges: [
      { icon: "CalendarClock", title: "Seasonal Demand", description: "Exterior painting demand is highly seasonal, requiring campaigns that scale with weather and season." },
      { icon: "Filter", title: "Low-Quality Enquiries", description: "Broad campaigns can generate price-shoppers instead of serious, ready-to-book projects." },
      { icon: "Swords", title: "High Competition", description: "Painting is a crowded local market with many companies bidding on the same project searches." },
      { icon: "BarChart2", title: "No Tracking", description: "Without tracking, it's hard to know which campaigns are generating booked estimates." },
    ],
    strategyIntro:
      "We build painting campaigns around project type and season, so your budget captures homeowners who are ready to book an estimate — not just browsing colors.",
    faqs: [
      { question: "How much should painting companies spend on Google Ads?", answer: "Most painting companies start with $1,000–$2,500 per month, increasing during peak exterior painting season." },
      { question: "Do Google Ads work for painting companies?", answer: "Yes. Homeowners searching for painters are typically comparing quotes and ready to book, making search ads effective for filling your project schedule." },
      { question: "Can Google Ads generate exterior painting leads specifically?", answer: "Yes, we build dedicated seasonal campaigns for exterior painting to capture the spring and summer demand surge." },
      { question: "Can you target commercial painting contracts?", answer: "Yes, we build separate campaigns targeting property managers and businesses searching for commercial painting services." },
      { question: "How long before I get project inquiries?", answer: "Most painting companies start receiving quote requests within the first 1–2 weeks of launch." },
      { question: "How do you handle seasonal demand for painters?", answer: "We adjust budget and targeting seasonally, increasing spend during peak exterior painting months and shifting focus to interior work in the off-season." },
      { question: "How do you track leads for painting companies?", answer: "We track calls and quote form submissions so you know exactly which campaigns are generating booked estimates." },
      { question: "Is Google Ads worth it for a small painting company?", answer: "Yes, especially with tight local targeting, which helps smaller crews compete directly with larger painting companies in the same area." },
    ],
    finalCtaHeading: "Ready To Fill Your Painting Project Schedule?",
    finalCtaSubtext: "Book a free strategy call and see how Google Ads can keep your crews booked with quality projects.",
    relatedIndustries: ["google-ads-for-epoxy-flooring", "google-ads-for-electricians", "google-ads-for-plumbers"],
  },
  {
    slug: "google-ads-for-epoxy-flooring",
    industry: "Epoxy Flooring",
    industrySingular: "epoxy flooring company",
    metaTitle: "Google Ads for Epoxy Flooring | Generate More Installation Leads",
    metaDescription:
      "Google Ads for epoxy flooring companies. Reach homeowners and businesses searching for garage, industrial and commercial epoxy flooring installation.",
    h1: "Google Ads for Epoxy Flooring That Generates More Leads",
    heroSubheadline:
      "Homeowners and businesses searching for epoxy flooring are comparing installers right now. We put your company in front of them first.",
    heroIcon: "Layers",
    whyItWorksHeading: "Why Google Ads Work For Epoxy Flooring Companies",
    whyItWorksIntro:
      "Searches like \"epoxy garage floor near me\" or \"commercial epoxy flooring installer\" come from homeowners and businesses actively planning a flooring project. Google Ads for epoxy flooring companies puts you in front of these high-intent searchers while they're comparing installers and pricing.",
    whyItWorksPoints: [
      "Capture residential searches for garage floor and basement epoxy coatings",
      "Target commercial and industrial searches for warehouse and shop flooring",
      "Promote specific finishes like metallic or flake epoxy to premium buyers",
      "Win quote-comparison searches before competitors respond",
    ],
    challenges: [
      { icon: "Filter", title: "Low-Quality Enquiries", description: "Broad campaigns can attract DIY researchers instead of homeowners ready to hire a professional installer." },
      { icon: "Swords", title: "High Competition", description: "Epoxy flooring is a growing niche with increasing competition for the same local searches." },
      { icon: "DollarSign", title: "Expensive Leads", description: "Popular flooring keywords can be costly without tight targeting around project type and budget." },
      { icon: "BarChart2", title: "No Tracking", description: "Without tracking, it's hard to know which campaigns are producing booked installation jobs." },
    ],
    strategyIntro:
      "We build epoxy flooring campaigns around project type — residential, commercial and industrial — so your budget reaches buyers ready to book an installation.",
    faqs: [
      { question: "How much should epoxy flooring companies spend on Google Ads?", answer: "Most companies start with $1,000–$2,500 per month, depending on whether you focus on residential, commercial or both." },
      { question: "Do Google Ads work for epoxy flooring companies?", answer: "Yes. People searching for epoxy flooring are typically comparing installers and ready to request a quote, making search ads effective for generating booked jobs." },
      { question: "Can Google Ads target commercial and industrial epoxy projects?", answer: "Yes, we build separate campaigns for commercial and industrial searches, which are often higher-value than residential garage projects." },
      { question: "Can you promote specific finishes like metallic epoxy?", answer: "Yes, we build campaigns around specific finish types to attract buyers looking for premium, higher-margin projects." },
      { question: "How long before I get quote requests?", answer: "Most epoxy flooring companies start receiving quote requests within the first 1–2 weeks of launch." },
      { question: "How do you track leads for epoxy flooring companies?", answer: "We track calls and quote form submissions so you know exactly which campaigns are generating booked installations." },
      { question: "Is Google Ads better than SEO for epoxy flooring companies?", answer: "They work best together — Google Ads generates immediate quote requests while SEO builds long-term visibility for flooring searches." },
      { question: "Is Google Ads worth it for a smaller epoxy flooring company?", answer: "Yes, especially with tight geographic and project-type targeting, which helps smaller companies compete for the same searches as larger flooring brands." },
    ],
    finalCtaHeading: "Ready To Generate More Epoxy Flooring Leads?",
    finalCtaSubtext: "Book a free strategy call and see how Google Ads can keep your installation schedule full.",
    relatedIndustries: ["google-ads-for-painters", "google-ads-for-manufacturers", "google-ads-for-plumbers"],
  },
  {
    slug: "google-ads-for-physios",
    industry: "Physios",
    industrySingular: "physiotherapist",
    metaTitle: "Google Ads for Physios | Fill Your Schedule With New Patients",
    metaDescription:
      "Google Ads for physiotherapy clinics. Reach patients actively searching for pain relief and rehabilitation and convert them into booked appointments.",
    h1: "Google Ads for Physios That Fill Your Appointment Schedule",
    heroSubheadline:
      "Patients searching \"physiotherapist near me\" are dealing with pain right now. We build campaigns that connect them with your clinic before a competitor.",
    heroIcon: "Activity",
    whyItWorksHeading: "Why Google Ads Work For Physios",
    whyItWorksIntro:
      "Searches like \"physiotherapist near me\" or \"back pain relief\" come from patients dealing with an active injury or condition, often ready to book within days. Google Ads for physios puts your clinic in front of these high-intent searches at the exact moment they're choosing a provider.",
    whyItWorksPoints: [
      "Capture pain-specific searches like \"knee pain physio\" or \"sports injury rehab\"",
      "Target post-surgery and referral-adjacent searches for rehabilitation",
      "Promote direct-access appointments for patients without a doctor referral",
      "Fill schedule gaps with location-targeted campaigns around your clinic",
    ],
    challenges: [
      { icon: "Swords", title: "High Competition", description: "Physio clinics compete with larger multi-location chains for the same local searches." },
      { icon: "Filter", title: "Low-Quality Enquiries", description: "Broad campaigns can generate general fitness inquiries instead of patients needing treatment." },
      { icon: "DollarSign", title: "Expensive Leads", description: "Popular physio keywords can be competitive in dense urban markets without tight targeting." },
      { icon: "BarChart2", title: "No Tracking", description: "Without call tracking, it's hard to know which campaigns are actually filling booked appointments." },
    ],
    strategyIntro:
      "We build physiotherapy campaigns around specific conditions and injuries, so your clinic attracts patients who are ready to book treatment, not just researching symptoms.",
    faqs: [
      { question: "How much should a physiotherapy clinic spend on Google Ads?", answer: "Most clinics start with $1,000–$2,500 per month, scaling based on the number of practitioners and treatment areas offered." },
      { question: "Do Google Ads work for physiotherapy clinics?", answer: "Yes. Patients searching for a physiotherapist are usually dealing with active pain and ready to book, making search ads an effective way to fill your schedule." },
      { question: "Can Google Ads target specific conditions like back or knee pain?", answer: "Yes, we build separate campaigns around specific conditions so you attract patients whose needs match your clinic's specialties." },
      { question: "Can Google Ads help promote direct-access appointments?", answer: "Yes, we can highlight direct-access booking in your ads for patients who don't yet have a doctor referral." },
      { question: "How long before I get new patient bookings?", answer: "Most clinics start receiving calls and bookings within the first 1–2 weeks of launch, with volume increasing as we optimize." },
      { question: "Can you target post-surgery rehabilitation patients?", answer: "Yes, we build campaigns around post-surgical rehab searches, which are often higher-value, longer-term treatment plans." },
      { question: "How do you track which ads generate booked appointments?", answer: "We set up call tracking and conversion tracking on your booking system so you know exactly which campaigns are filling your schedule." },
      { question: "Is Google Ads a good fit for multi-practitioner clinics?", answer: "Yes, especially for clinics with multiple practitioners, since we can run individual campaigns around each specialty to fill every schedule." },
    ],
    finalCtaHeading: "Ready To Fill Your Physio Schedule With New Patients?",
    finalCtaSubtext: "Book a free strategy call and see how Google Ads can keep your clinic's schedule full.",
    relatedIndustries: ["google-ads-for-doctors", "google-ads-for-therapists", "google-ads-for-dentists"],
  },
];

export function getGoogleAdsPage(slug: string) {
  return GOOGLE_ADS_PAGES.find((page) => page.slug === slug);
}
