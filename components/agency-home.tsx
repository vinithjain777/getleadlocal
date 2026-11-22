import Link from "next/link";
import {
  ArrowUpRight,
  Check,
  Phone,
  MapPin,
  Search,
  MousePointer2,
  Megaphone,
  Wrench,
  Wind,
  House,
  Zap,
  Hammer,
  Trees,
  Sun,
  Grid3X3,
  Plus,
  PanelsTopLeft,
} from "lucide-react";
import { LeadCaptureForm } from "@/components/lead-capture-form";
import { CALENDLY_URL } from "@/lib/constants";

const services = [
  {
    title: "Be there when they need you.",
    name: "Google Ads",
    icon: Search,
    href: "/services/google-ads",
    copy: "Reach people actively searching for your services. Put your business in front of the right customers, in the right service area.",
    tags: ["Search campaigns", "Local targeting", "Call tracking"],
  },
  {
    title: "Become the name they remember.",
    name: "Facebook & Instagram Ads",
    icon: Megaphone,
    href: "/services/meta-ads",
    copy: "Introduce your business to nearby homeowners. Give them a reason to choose you with relevant offers and creative that gets noticed.",
    tags: ["Local audiences", "Ad creative", "Retargeting"],
  },
  {
    title: "Make your business easier to find.",
    name: "Local SEO",
    icon: MapPin,
    href: "/services/local-seo",
    copy: "Build your visibility in local search with a stronger Google Business Profile, useful service pages, and a solid technical foundation.",
    tags: ["Google Maps", "Service pages", "Technical SEO"],
  },
  {
    title: "Make it easy to request a quote.",
    name: "Website Development",
    icon: PanelsTopLeft,
    href: "/services/websites-for-small-businesses",
    copy: "Show customers what you do and where you work. Connect their enquiries to your calendar, inbox, or CRM.",
    tags: ["Website design", "AI intake", "SMS follow-up"],
  },
];
const industries = [
  { name: "Plumbing", slug: "plumbing", icon: Wrench },
  { name: "HVAC", slug: "hvac", icon: Wind },
  { name: "Roofing", slug: "roofing", icon: House },
  { name: "Electrical", slug: "electrical", icon: Zap },
  { name: "Construction", slug: "construction", icon: Hammer },
  { name: "Landscaping", slug: "landscaping", icon: Trees },
  { name: "Flooring", slug: "flooring", icon: Grid3X3 },
  { name: "Solar", slug: "solar", icon: Sun },
];
const questions = [
  [
    "Which service should I start with?",
    "That depends on your market, budget, and goals. Google Ads can reach people already searching. Meta Ads can build demand locally. Local SEO develops your organic visibility over time. We’ll help you choose a sensible starting point.",
  ],
  [
    "How soon can I expect leads?",
    "Paid campaigns can begin reaching potential customers once approved and launched, but enquiries are not guaranteed. Testing and optimization take time. SEO is a longer-term investment, and progress depends on your competition and starting point.",
  ],
  [
    "Do you guarantee leads or Google rankings?",
    "No. No agency controls customer demand or Google’s rankings. We focus on clear targeting, useful landing pages, accurate tracking, and ongoing improvements, with honest reporting on what is working.",
  ],
  [
    "Is advertising spend included?",
    "Advertising spend and agency management fees are separate. We’ll discuss your budget and agree on the scope before starting, so you understand where your money goes.",
  ],
  [
    "Can you work with my existing website and ad account?",
    "Yes. We can review your current website and campaigns, identify opportunities, and recommend what to improve. You don’t need to start everything from scratch.",
  ],
  [
    "What happens on the free strategy call?",
    "We talk about your services, service area, current marketing, and the jobs you want more of. You’ll get a clear recommendation for next steps and a chance to decide whether we’re a fit.",
  ],
];
function CallButton({ children = "Get my free marketing plan" }: { children?: React.ReactNode }) {
  return (
    <a className="gll-button" href="#free-plan">
      {children}
      <ArrowUpRight aria-hidden="true" size={19} />
    </a>
  );
}
export function AgencyHome() {
  return (
    <div className="gll-home">
      <section className="gll-hero">
        <div className="gll-wrap gll-hero-grid">
          <div className="gll-hero-copy">
            <p className="gll-eyebrow">Local businesses. Bigger possibilities.</p>
            <h1>
              GREAT AT
              <br />
              YOUR TRADE.
              <br />
              <span>
                GET KNOWN
                <br className="gll-desktop-break" /> FOR IT.
              </span>
            </h1>
            <p className="gll-intro">
              Help local customers find your business with Google Ads, Meta Ads, and local SEO.
              Give them a website where they can request a quote or book a visit.
            </p>
            <div className="gll-actions">
              <CallButton />
              <a className="gll-text-link" href="#services">
                See how we help <ArrowUpRight size={16} aria-hidden="true" />
              </a>
            </div>
            <p className="gll-fine">
              <Check size={15} aria-hidden="true" /> Free strategy call. Clear next steps. No
              pressure.
            </p>
          </div>
          <div
            className="gll-visual"
            role="img"
            aria-label="Illustration of a local customer finding a business and requesting a quote"
          >
            <div className="gll-visual-orbit" />
            <div className="gll-round-stamp">
              THINK LOCAL.
              <br />
              <ArrowUpRight size={39} />
              <strong>GROW BIG.</strong>
            </div>
            <div className="gll-search-card">
              <Search size={19} />
              <span>plumber near me</span>
              <MousePointer2 className="gll-cursor" size={35} />
            </div>
            <div className="gll-phone">
              <div className="gll-phone-notch" />
              <div className="gll-map">
                <span className="gll-road road-one" />
                <span className="gll-road road-two" />
                <span className="gll-road road-three" />
                <div className="gll-map-pin">
                  <MapPin size={37} />
                </div>
                <span className="gll-map-label">YOUR SERVICE AREA</span>
              </div>
              <div className="gll-phone-body">
                <span className="gll-micro">THE RIGHT BUSINESS. RIGHT NEARBY.</span>
                <strong>Your local expert.</strong>
                <p>Ready to help with the next job.</p>
                <div className="gll-phone-cta">
                  <Phone size={15} /> Let’s talk about your project
                </div>
              </div>
            </div>
            <div className="gll-notification">
              <span>
                <Check size={19} />
              </span>
              <div>
                <strong>A new enquiry.</strong>
                <small>A new opportunity.</small>
              </div>
              <ArrowUpRight size={21} />
            </div>
            <span className="gll-visual-note">From “near me” to “call me.”</span>
            <span className="gll-example-label">Illustrative customer journey</span>
          </div>
        </div>
        <div className="gll-wrap">
          <div className="gll-value-strip">
            {[
              ["01", "GET FOUND", "Reach the right local customers"],
              ["02", "GET CHOSEN", "Give them a reason to call"],
              ["03", "KEEP GROWING", "Learn from every campaign"],
            ].map(([n, t, c]) => (
              <div key={n}>
                <strong>{n}</strong>
                <span>
                  <b>{t}</b>
                  <small>{c}</small>
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
      <div className="gll-trades" aria-label="Industries we serve">
        {industries.slice(0, 6).map((x) => (
          <Link key={x.slug} href={`/industries/${x.slug}`}>
            {x.name}
            <span aria-hidden="true">✦</span>
          </Link>
        ))}
      </div>
      <section className="gll-dark gll-section">
        <div className="gll-wrap">
          <div className="gll-split">
            <div>
              <p className="gll-eyebrow">Good work deserves to get noticed</p>
              <h2>
                You handle the jobs.
                <br />
                We help bring
                <br />
                the enquiries.
              </h2>
            </div>
            <div className="gll-side-copy">
              <p className="gll-lead">
                Being great at what you do is only half the story. Your next customer needs to find
                you first.
              </p>
              <p>
                We connect your marketing around one goal: helping the right people in your area
                take the next step with your business.
              </p>
              <Link className="gll-text-link" href="/about">
                Meet your marketing partner <ArrowUpRight size={18} aria-hidden="true" />
              </Link>
            </div>
          </div>
          <div className="gll-journey">
            <div>
              <span className="gll-micro">A CLEAR PATH TO YOUR BUSINESS</span>
              <h3>
                Less guesswork.
                <br />
                More direction.
              </h3>
            </div>
            {[
              ["01", "Get discovered", "Search, social & Maps"],
              ["02", "Build confidence", "A clear offer & useful pages"],
              ["03", "Make contact", "Calls & quote requests"],
              ["04", "Improve", "Track, learn & refine"],
            ].map(([n, t, c]) => (
              <div key={n}>
                <span className="gll-number">{n}</span>
                <strong>{t}</strong>
                <small>{c}</small>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section id="services" className="gll-section">
        <div className="gll-wrap">
          <div className="gll-section-heading">
            <div>
              <p className="gll-eyebrow">Our services</p>
              <h2>
                Local marketing.
                <br />
                All pulling together.
              </h2>
            </div>
            <p>
              Start with what your business needs. Build from there. Every channel has a job to do.
            </p>
          </div>
          <div className="gll-service-grid">
            {services.map((s, i) => (
              <Link className={`gll-service-card gll-card-${i}`} href={s.href} key={s.name}>
                <div className="gll-card-top">
                  <span className="gll-number">0{i + 1}</span>
                  <span className="gll-micro">{s.name}</span>
                </div>
                <s.icon
                  className="gll-service-icon"
                  size={44}
                  strokeWidth={1.7}
                  aria-hidden="true"
                />
                <h3>{s.title}</h3>
                <p>{s.copy}</p>
                <div className="gll-tags">
                  {s.tags.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
                <div className="gll-card-link">
                  Explore {s.name}
                  <ArrowUpRight size={19} aria-hidden="true" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="gll-section gll-lime">
        <div className="gll-wrap">
          <div className="gll-centered">
            <p className="gll-eyebrow">A straightforward start</p>
            <h2>
              From “where do I start?”
              <br />
              to a plan that makes sense.
            </h2>
          </div>
          <div className="gll-steps">
            {[
              [
                "Talk about your business",
                "Your services. Your area. Your goals. We start by understanding the jobs and customers that matter to you.",
              ],
              [
                "Build the right plan",
                "We recommend the channels, budget, and next steps that fit your business. You know what’s included before we begin.",
              ],
              [
                "Launch. Learn. Improve.",
                "Once approved, we set up your campaigns and tracking, then use real performance data to guide improvements.",
              ],
            ].map(([t, c], i) => (
              <article key={t}>
                <span className="gll-step-sticker">{i + 1}</span>
                <span className="gll-micro">STEP 0{i + 1}</span>
                <h3>{t}</h3>
                <p>{c}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="gll-section">
        <div className="gll-wrap gll-split">
          <div>
            <p className="gll-eyebrow">Built for the people who get things done</p>
            <h2>
              Your trade.
              <br />
              Your town.
              <br />
              Your next chapter.
            </h2>
            <p className="gll-intro">
              Different trades. Different customers. Marketing shaped around the work you actually
              want.
            </p>
            <Link href="/industries" className="gll-text-link">
              Explore all industries <ArrowUpRight size={18} aria-hidden="true" />
            </Link>
          </div>
          <div className="gll-industry-grid">
            {industries.map((s) => (
              <Link href={`/industries/${s.slug}`} key={s.slug}>
                <s.icon size={29} strokeWidth={1.6} aria-hidden="true" />
                <strong>{s.name}</strong>
                <ArrowUpRight size={17} aria-hidden="true" />
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="gll-section gll-blue">
        <div className="gll-wrap gll-split">
          <div>
            <p className="gll-eyebrow">Know what your marketing is doing</p>
            <h2>
              Clicks are a start.
              <br />
              Conversations
              <br />
              are the goal.
            </h2>
            <p className="gll-intro">
              We help connect your ads, landing pages, and conversion tracking so you can understand
              where enquiries come from and what to improve.
            </p>
            <CallButton>Let’s talk about your goals</CallButton>
          </div>
          <div className="gll-plan-card">
            <span className="gll-plan-label">YOUR GROWTH PLAN</span>
            <p className="gll-micro">FOCUS ON WHAT MATTERS</p>
            <h3>
              A clear view.
              <br />A practical next step.
            </h3>
            {[
              ["Your local market", "Who you want to reach and where they are."],
              ["Your customer journey", "What happens between a click and an enquiry."],
              ["Your campaign performance", "Which efforts bring enquiries, and at what cost."],
            ].map(([t, c]) => (
              <div className="gll-plan-item" key={t}>
                <Check size={19} aria-hidden="true" />
                <div>
                  <strong>{t}</strong>
                  <p>{c}</p>
                </div>
              </div>
            ))}
            <Link href="/services" className="gll-text-link">
              See what we can help with <ArrowUpRight size={18} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
      <section className="gll-section gll-resources">
        <div className="gll-wrap">
          <div className="gll-section-heading">
            <div>
              <p className="gll-eyebrow">Useful ideas. No jargon.</p>
              <h2>
                A little clarity
                <br />
                goes a long way.
              </h2>
            </div>
            <Link href="/blog" className="gll-text-link">
              Visit the learning hub <ArrowUpRight size={18} aria-hidden="true" />
            </Link>
          </div>
          <div className="gll-resource-grid">
            <Link href="/blog/how-to-get-more-plumbing-leads">
              <span className="gll-micro">PLUMBING MARKETING</span>
              <h3>How to get more leads for your plumbing business.</h3>
              <span className="gll-text-link">
                Read the guide <ArrowUpRight size={18} aria-hidden="true" />
              </span>
            </Link>
            <Link href="/blog/facebook-ads-for-plumbers">
              <span className="gll-micro">FACEBOOK & INSTAGRAM ADS</span>
              <h3>Make Facebook ads work harder for your plumbing business.</h3>
              <span className="gll-text-link">
                Read the guide <ArrowUpRight size={18} aria-hidden="true" />
              </span>
            </Link>
          </div>
        </div>
      </section>
      <section className="gll-section" id="faq">
        <div className="gll-wrap gll-faq-layout">
          <div>
            <p className="gll-eyebrow">Straight answers</p>
            <h2>
              Good questions.
              <br />
              Let’s clear
              <br />
              them up.
            </h2>
            <p>You should feel informed before you ever get on a call.</p>
          </div>
          <div className="gll-faq-list">
            {questions.map(([q, a]) => (
              <details key={q}>
                <summary>
                  {q}
                  <span>
                    <Plus size={16} aria-hidden="true" />
                  </span>
                </summary>
                <p>{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
      <section className="gll-section gll-dark gll-final" id="free-plan">
        <div className="gll-wrap gll-split">
          <div>
            <p className="gll-eyebrow">Your next chapter starts with a conversation</p>
            <h2>
              Let’s put your
              <br />
              business
              <br />
              <span>on the map.</span>
            </h2>
            <p className="gll-intro">
              Tell us where you are now and where you want to go. We’ll help you work out the next
              step.
            </p>
            <ul className="gll-checklist">
              {[
                "A conversation about your business",
                "Practical recommendations for your market",
                "A clear scope before you commit",
              ].map((t) => (
                <li key={t}>
                  <Check size={16} aria-hidden="true" />
                  {t}
                </li>
              ))}
            </ul>
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="gll-text-link"
            >
              Prefer to book a time? <ArrowUpRight size={18} aria-hidden="true" />
            </a>
          </div>
          <div className="gll-form-frame">
            <LeadCaptureForm />
          </div>
        </div>
      </section>
    </div>
  );
}
