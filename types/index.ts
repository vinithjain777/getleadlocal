export interface Industry {
  id: string;
  name: string;
  description: string;
  icon: string;
  link: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
  cta: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  client: string;
  industry: string;
  description: string;
  image: string;
  results: {
    metric: string;
    value: string;
    change: string;
  }[];
  challenge: string;
  solution: string;
  testimonial: string;
  authorName: string;
  authorRole: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  image: string;
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface BlogPost {
  id: string;
  title: string;
  description: string;
  content: string;
  image: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  tags: string[];
}

export interface ContactFormData {
  name: string;
  business: string;
  website: string;
  email: string;
  phone: string;
  budget: string;
  message: string;
}

export interface GoogleAdsLandingPage {
  slug: string;
  industry: string;
  industrySingular: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  heroSubheadline: string;
  heroIcon: string;
  whyItWorksHeading: string;
  whyItWorksIntro: string;
  whyItWorksPoints: string[];
  challenges: {
    icon: string;
    title: string;
    description: string;
  }[];
  strategyIntro: string;
  faqs: {
    question: string;
    answer: string;
  }[];
  finalCtaHeading: string;
  finalCtaSubtext: string;
  relatedIndustries: string[];
}

