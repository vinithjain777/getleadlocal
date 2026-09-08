export const SITE_CONFIG = {
  name: "GetLeadLocal",
  description:
    "Digital marketing agency specializing in Google Ads, Facebook Ads, and Local SEO for local service businesses. Get more calls, more leads, more booked jobs.",
  url: "https://getleadlocal.com",
  image: "/og-image.png",
};

export const CALENDLY_URL = "https://calendly.com/vinithjain02/30min";

export const NAVIGATION = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export const INDUSTRIES = [
  {
    id: "plumbing",
    name: "Plumbing",
    description: "Generate emergency calls and new customer appointments",
    icon: "Wrench",
    link: "/industries/plumbing",
    stats: [
      { metric: "Emergency Calls", value: "142+" },
      { metric: "Average ROI", value: "310%" },
      { metric: "Cost Per Lead", value: "$22" },
      { metric: "Client Satisfaction", value: "4.9/5" },
    ],
    challenges: [
      "Losing emergency jobs to competitors who show up first in search results",
      "Slow seasons with too much downtime between service calls",
      "Spending on ads that generate calls but not booked jobs",
    ],
  },
  {
    id: "roofing",
    name: "Roofing",
    description: "Book more roofing inspections and replacements",
    icon: "Home",
    link: "/industries/roofing",
    stats: [
      { metric: "Inspections Booked", value: "98+" },
      { metric: "Average ROI", value: "380%" },
      { metric: "Cost Per Lead", value: "$34" },
      { metric: "Client Satisfaction", value: "4.8/5" },
    ],
    challenges: [
      "High-value replacement jobs going to competitors with better online reviews",
      "Storm-season lead spikes that overwhelm your sales process",
      "Insurance-claim customers who never convert to signed contracts",
    ],
  },
  {
    id: "flooring",
    name: "Flooring",
    description: "Fill your schedule with qualified flooring projects",
    icon: "Grid3x3",
    link: "/industries/flooring",
    stats: [
      { metric: "Projects Booked", value: "116+" },
      { metric: "Average ROI", value: "295%" },
      { metric: "Cost Per Lead", value: "$26" },
      { metric: "Client Satisfaction", value: "4.9/5" },
    ],
    challenges: [
      "Showroom visits that never turn into signed estimates",
      "Competing on price against big-box flooring retailers",
      "Slow months with an empty installation calendar",
    ],
  },
  {
    id: "construction",
    name: "Construction",
    description: "Secure more building and renovation contracts",
    icon: "Hammer",
    link: "/industries/construction",
    stats: [
      { metric: "Contracts Secured", value: "64+" },
      { metric: "Average ROI", value: "410%" },
      { metric: "Cost Per Lead", value: "$58" },
      { metric: "Client Satisfaction", value: "4.8/5" },
    ],
    challenges: [
      "Long sales cycles that make it hard to track marketing ROI",
      "Unqualified inquiries that waste your estimator's time",
      "Relying only on referrals and word-of-mouth for new contracts",
    ],
  },
  {
    id: "hvac",
    name: "HVAC",
    description: "Increase seasonal HVAC service calls and installations",
    icon: "Wind",
    link: "/industries/hvac",
    stats: [
      { metric: "Service Calls", value: "168+" },
      { metric: "Average ROI", value: "325%" },
      { metric: "Cost Per Lead", value: "$24" },
      { metric: "Client Satisfaction", value: "4.9/5" },
    ],
    challenges: [
      "Extreme seasonality causing feast-or-famine call volume",
      "Losing installation jobs to competitors with faster response times",
      "Maintenance-plan customers who never upgrade to new systems",
    ],
  },
  {
    id: "electrical",
    name: "Electrical",
    description: "Generate electrical service calls and large projects",
    icon: "Zap",
    link: "/industries/electrical",
    stats: [
      { metric: "Service Calls", value: "134+" },
      { metric: "Average ROI", value: "300%" },
      { metric: "Cost Per Lead", value: "$21" },
      { metric: "Client Satisfaction", value: "4.8/5" },
    ],
    challenges: [
      "Small repair calls crowding out higher-value panel and rewiring jobs",
      "Difficulty standing out from other licensed electricians online",
      "Slow response to leads causing customers to book a competitor instead",
    ],
  },
  {
    id: "solar",
    name: "Solar",
    description: "Book solar consultations and installations",
    icon: "Sun",
    link: "/industries/solar",
    stats: [
      { metric: "Consultations Booked", value: "87+" },
      { metric: "Average ROI", value: "365%" },
      { metric: "Cost Per Lead", value: "$45" },
      { metric: "Client Satisfaction", value: "4.9/5" },
    ],
    challenges: [
      "Homeowners who request quotes but never schedule a consultation",
      "Rising ad costs in a crowded, competitive solar market",
      "Long decision cycles that require ongoing nurture to close",
    ],
  },
  {
    id: "landscaping",
    name: "Landscaping",
    description: "Fill your landscaping pipeline with qualified leads",
    icon: "Leaf",
    link: "/industries/landscaping",
    stats: [
      { metric: "Projects Booked", value: "121+" },
      { metric: "Average ROI", value: "290%" },
      { metric: "Cost Per Lead", value: "$19" },
      { metric: "Client Satisfaction", value: "4.8/5" },
    ],
    challenges: [
      "Seasonal demand swings that leave crews idle in the off-season",
      "One-time mow customers instead of recurring maintenance contracts",
      "Competing against unlicensed, low-price landscaping crews",
    ],
  },
];


export const SERVICES = [
  {
    id: "google-ads",
    title: "Google Ads",
    description: "Get your business in front of customers actively searching for your services right now",
    icon: "Search",
    features: [
      "Local service ads for plumbers, HVAC, contractors",
      "High-intent keyword targeting",
      "Call-focused campaign optimization",
      "Geographic targeting for your service area",
      "Real-time performance tracking",
    ],
    cta: "Get More Calls with Google Ads",
  },
  {
    id: "meta-ads",
    title: "Facebook & Instagram Ads",
    description: "Build brand awareness and retarget potential customers in your local area",
    icon: "Share2",
    features: [
      "Local area targeting (zip code & radius)",
      "Before/after photo campaigns",
      "Retargeting website visitors",
      "Lead generation forms on Facebook",
      "Mobile-optimized ad creatives",
    ],
    cta: "Grow Your Brand with Meta Ads",
  },
  {
    id: "local-seo",
    title: "Local SEO",
    description: "Dominate the Google Map Pack and rank #1 for local searches in your city",
    icon: "MapPin",
    features: [
      "Google Business Profile optimization",
      "Get found on Google Maps",
      "5-star review generation system",
      "Local citation building (50+ directories)",
      "On-page SEO for local keywords",
    ],
    cta: "Rank Higher in Local Search",
  },
];

export const WHY_CHOOSE_US = [
  {
    id: "local-focus",
    title: "Local Business Focused",
    description:
      "We build strategies around businesses that depend on local customers and enquiries.",
    icon: "Target",
  },
  {
    id: "three-channels",
    title: "Three Core Channels",
    description:
      "We focus deeply on Google Ads, Meta Ads and Local SEO instead of trying to sell every marketing service.",
    icon: "Layers",
  },
  {
    id: "lead-focused",
    title: "Lead-Focused",
    description:
      "We care about qualified enquiries and business opportunities, not vanity metrics.",
    icon: "TrendingUp",
  },
  {
    id: "full-funnel",
    title: "Full-Funnel Thinking",
    description:
      "We look beyond the click and consider landing pages, tracking and follow-up.",
    icon: "Zap",
  },
  {
    id: "transparent",
    title: "Transparent",
    description:
      "Clear communication and understandable reporting.",
    icon: "Eye",
  },
  {
    id: "optimization",
    title: "Continuous Optimization",
    description:
      "We use performance data to improve campaigns and strategies over time.",
    icon: "RefreshCw",
  },
];

export const MARKETING_TECH = [
  {
    id: "google-ads",
    name: "Google Ads",
    description: "Search campaigns & Local Service Ads",
    icon: "Megaphone",
  },
  {
    id: "meta-ads",
    name: "Facebook & Instagram",
    description: "Targeted local ad campaigns",
    icon: "Share2",
  },
  {
    id: "google-analytics",
    name: "Google Analytics",
    description: "Track calls, leads & conversions",
    icon: "LineChart",
  },
  {
    id: "gbp",
    name: "Google Business Profile",
    description: "Optimize for Google Map Pack",
    icon: "MapPin",
  },
  {
    id: "call-tracking",
    name: "Call Tracking",
    description: "Know which ads generate phone calls",
    icon: "Phone",
  },
  {
    id: "search-console",
    name: "Google Search Console",
    description: "Monitor local search rankings",
    icon: "TrendingUp",
  },
];

export const PROCESS_STEPS = [
  {
    number: 1,
    title: "Discover",
    description:
      "Understand your business, customers, services and market.",
  },
  {
    number: 2,
    title: "Research",
    description: "Research your competitors, customers, search behavior and opportunities.",
  },
  {
    number: 3,
    title: "Build",
    description: "Build the right Google Ads, Meta Ads or SEO strategy.",
  },
  {
    number: 4,
    title: "Launch",
    description: "Launch campaigns or begin the SEO growth plan.",
  },
  {
    number: 5,
    title: "Optimize",
    description: "Use real performance data to improve results.",
  },
  {
    number: 6,
    title: "Grow",
    description: "Scale what works and continue improving performance.",
  },
];
