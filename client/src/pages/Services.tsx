import { Link } from "wouter";
import SEO from "@/components/SEO";
import CTASection from "@/components/CTASection";

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

      {/* Hero — clean whitespace, no decorative graphic */}
      <section className="section-spacing" style={{ backgroundColor: '#F2F5F4' }}>
        <div className="container content-narrow">
          <h1 className="mb-6">Find your entry point. Build from there.</h1>
          <p>
            Every TLC engagement starts with a conversation. The offer ladder below is designed to meet you where you are, from a single focused session to ongoing fractional AI leadership.
          </p>
          <p>
            Most clients start with the AI Fit Check and move from there. The right path depends on what you need right now.
          </p>
        </div>
      </section>

      <hr className="section-divider" />

      {/* Offer Cards */}
      <section className="section-spacing" style={{ backgroundColor: '#F2F5F4' }}>
        <div className="container">
          <div className="space-y-6 max-w-[640px] mx-auto">
            {services.map((service, index) => (
              <Link
                key={index}
                href={service.href}
                className="block no-underline group"
              >
                <div className="p-6 transition-colors duration-200" style={{ backgroundColor: '#ECF0EE', borderRadius: '4px' }}>
                  <p className="chapter-label">{service.tier}</p>
                  <h3 className="text-base mb-3 transition-colors" style={{ color: '#1A1A18' }}>{service.title}</h3>
                  <p className="mb-3" style={{ fontSize: '15px', color: '#3C3C38' }}>{service.description}</p>
                  <span className="font-sans font-700 text-[0.8125rem] uppercase tracking-[0.08em] pb-[2px]" style={{ color: '#2A6E67', borderBottom: '1px solid #2A6E67' }}>
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
