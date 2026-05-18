import { Link } from "wouter";
import SEO from "@/components/SEO";
import CTASection from "@/components/CTASection";

const servicesImage = "https://d2xsxph8kpxj0f.cloudfront.net/310519663409776713/3KuvCeY4XyBCWKjDVw6mdN/tlc-services-v2-JyQ2MW7cXWepRouk6dFN8t.webp";

const services = [
  {
    title: "AI Fit Check",
    description: "A 60-minute session that surfaces your highest-leverage AI opportunity and gives you a clear next step. Starting at $750.",
    href: "/services/ai-fit-check",
    tier: "Start Here",
  },
  {
    title: "AI Clarity Sprint",
    description: "A structured diagnostic that produces your AI Readiness Snapshot using the SCALE Framework. Scoped after discovery.",
    href: "/services/ai-clarity-sprint",
    tier: "Go Deeper",
  },
  {
    title: "AI Design + Activation Sprint",
    description: "A four-week embedded engagement that designs and implements your priority AI initiative. Scoped after discovery.",
    href: "/services/ai-design-activation-sprint",
    tier: "Implement",
  },
  {
    title: "Embedded AI Advisor",
    description: "Ongoing fractional Chief AI Strategy Officer support for businesses that need consistent AI leadership. Monthly retainer, scoped after discovery.",
    href: "/services/embedded-ai-advisor",
    tier: "Sustain",
  },
];

export default function Services() {
  return (
    <>
      <SEO
        title="AI Strategy Services for Founder-Led Businesses | TLC"
        description="TLC offers four engagement tiers, from a single AI strategy session to ongoing fractional CAISO support. Find your entry point and build from there."
      />

      {/* Hero */}
      <section className="section-spacing">
        <div className="container content-narrow">
          <h1 className="mb-6">Find your entry point. Build from there.</h1>
          <p className="text-lg text-foreground/80">
            Every TLC engagement starts with a conversation. The offer ladder below is designed to meet you where you are, from a single focused session to ongoing fractional AI leadership.
          </p>
          <p className="text-lg text-foreground/80">
            Most clients start with the AI Fit Check and move from there. The right path depends on what you need right now.
          </p>
        </div>
      </section>

      {/* Services Image */}
      <section className="pb-8">
        <div className="container">
          <img
            src={servicesImage}
            alt="Abstract watercolor showing stepping stones in warm progression"
            className="w-full max-w-[800px] mx-auto rounded-lg"
          />
        </div>
      </section>

      <hr className="section-divider" />

      {/* Offer Cards */}
      <section className="section-spacing">
        <div className="container">
          <div className="space-y-6 max-w-[760px] mx-auto">
            {services.map((service, index) => (
              <Link
                key={index}
                href={service.href}
                className="block no-underline group"
              >
                <div className="bg-card border border-border rounded-lg p-8 hover:shadow-md transition-all duration-200 hover:-translate-y-0.5">
                  <p className="chapter-label">{service.tier}</p>
                  <h3 className="text-xl mb-3 group-hover:text-plum transition-colors">{service.title}</h3>
                  <p className="text-foreground/70 mb-3">{service.description}</p>
                  <span className="text-teal font-semibold text-sm group-hover:text-plum transition-colors">
                    Learn more &rarr;
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <hr className="section-divider" />

      {/* CTA */}
      <CTASection
        headline="Not sure which engagement is right for you?"
        body=""
        buttonText="Book a Discovery Call — we'll figure it out together."
      />
    </>
  );
}
