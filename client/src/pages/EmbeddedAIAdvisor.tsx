import { Link } from "wouter";
import SEO from "@/components/SEO";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";

const schema = {
  "@context": "https://schema.org",
  "@type": ["Service", "FAQPage"],
  name: "Embedded AI Advisor",
  provider: { "@type": "Organization", name: "Tech Love Consulting" },
  description: "TLC's Embedded AI Advisor provides ongoing fractional Chief AI Strategy Officer support. Consistent AI leadership without the full-time hire. Scoped after discovery.",
  mainEntity: [
    { "@type": "Question", name: "How is this different from hiring a full-time AI director?", acceptedAnswer: { "@type": "Answer", text: "A full-time AI director at a 50-person company is a $200,000 to $300,000 commitment. The Embedded AI Advisor provides senior-level AI leadership at a fraction of that cost, without the hiring risk, benefits overhead, or organizational complexity. You get the strategic function without the full-time hire." } },
    { "@type": "Question", name: "What does the monthly engagement actually look like?", acceptedAnswer: { "@type": "Answer", text: "Scope varies by business. It's confirmed during the Discovery Call and structured around what your business actually needs, not a one-size-fits-all retainer package." } },
  ],
};

const faqs = [
  {
    question: "How is this different from hiring a full-time AI director?",
    answer: "A full-time AI director at a 50-person company is a $200,000 to $300,000 commitment. The Embedded AI Advisor provides senior-level AI leadership at a fraction of that cost, without the hiring risk, benefits overhead, or organizational complexity. You get the strategic function without the full-time hire.",
  },
  {
    question: "What does the monthly engagement actually look like?",
    answer: "Scope varies by business. It's confirmed during the Discovery Call and structured around what your business actually needs, not a one-size-fits-all retainer package.",
  },
];

export default function EmbeddedAIAdvisor() {
  return (
    <>
      <SEO
        title="Embedded AI Advisor — Fractional CAISO for Founder-Led Businesses | TLC"
        description="TLC's Embedded AI Advisor provides ongoing fractional Chief AI Strategy Officer support. Consistent AI leadership without the full-time hire. Scoped after discovery."
        schema={schema}
      />

      {/* Hero */}
      <section className="section-spacing">
        <div className="container content-narrow">
          <p className="chapter-label">Embedded AI Advisor</p>
          <h1 className="mb-4">Ongoing AI leadership without the full-time hire.</h1>
          <p className="text-[#7A7A74] mb-8">Fractional Chief AI Strategy Officer. Monthly retainer. Scoped after a Discovery Call.</p>
          <Link href="/discovery-call" className="btn-primary no-underline">
            Book a Discovery Call
          </Link>
        </div>
      </section>

      <hr className="section-divider" />

      {/* Problem */}
      <section className="section-spacing">
        <div className="container content-narrow">
          <h2 className="mb-6">AI isn't a one-time project.</h2>
          <p>
            The tools evolve. Your business changes. New opportunities surface and old approaches stop working. Most founder-led businesses don't need a full-time AI executive. They need someone who shows up consistently, stays current, and keeps their AI strategy moving in the right direction.
          </p>
          <div className="conversation-marker">
            That's what the Embedded AI Advisor engagement provides.
          </div>
        </div>
      </section>

      <hr className="section-divider" />

      {/* What It Is */}
      <section className="section-spacing">
        <div className="container content-narrow">
          <h2 className="mb-6">What ongoing fractional CAISO support looks like.</h2>
          <p>
            Erynn serves as your AI strategy partner on a monthly retainer. She attends leadership meetings, advises on new initiatives, keeps your team current on what matters, and ensures your AI approach stays aligned with your business goals.
          </p>
          <p>
            The work is proactive, not reactive. You're not paying for someone to answer questions when you think to ask them. You're building a consistent AI leadership function inside your business.
          </p>
        </div>
      </section>

      <hr className="section-divider" />

      {/* What You Get */}
      <section className="section-spacing">
        <div className="container content-narrow">
          <h2 className="mb-8">What you get.</h2>
          <ul className="space-y-4 list-none pl-0">
            <li className="flex items-start gap-4">
              <div className="w-1.5 h-1.5 rounded-full bg-[#2A6E67] mt-2.5 shrink-0"></div>
              <span>Monthly strategy sessions and leadership touchpoints</span>
            </li>
            <li className="flex items-start gap-4">
              <div className="w-1.5 h-1.5 rounded-full bg-[#2A6E67] mt-2.5 shrink-0"></div>
              <span>Ongoing AI initiative oversight and guidance</span>
            </li>
            <li className="flex items-start gap-4">
              <div className="w-1.5 h-1.5 rounded-full bg-[#2A6E67] mt-2.5 shrink-0"></div>
              <span>Team education and adoption support as your work evolves</span>
            </li>
            <li className="flex items-start gap-4">
              <div className="w-1.5 h-1.5 rounded-full bg-[#2A6E67] mt-2.5 shrink-0"></div>
              <span>Vendor and tool evaluation for new opportunities</span>
            </li>
            <li className="flex items-start gap-4">
              <div className="w-1.5 h-1.5 rounded-full bg-[#2A6E67] mt-2.5 shrink-0"></div>
              <span>Ethics and governance oversight</span>
            </li>
            <li className="flex items-start gap-4">
              <div className="w-1.5 h-1.5 rounded-full bg-[#2A6E67] mt-2.5 shrink-0"></div>
              <span>Priority access for time-sensitive decisions and emerging opportunities</span>
            </li>
          </ul>
        </div>
      </section>

      <hr className="section-divider" />

      {/* Who It's For */}
      <section className="section-spacing">
        <div className="container content-narrow">
          <div className="mb-10">
            <h2 className="mb-4">Who it's for.</h2>
            <p>
              Founder-led businesses that have moved past the starting line and need consistent AI leadership to maintain momentum, manage risk, and keep the team moving in the right direction.
            </p>
          </div>
          <div>
            <h3 className="mb-4 !text-[#1A1A18]">Who it's not for.</h3>
            <p>
              Businesses that haven't yet defined their AI strategy or implemented their first initiative. The Embedded AI Advisor engagement is designed to extend and sustain progress, not to initiate it.
            </p>
          </div>
        </div>
      </section>

      <hr className="section-divider" />

      {/* FAQ */}
      <FAQSection items={faqs} headline="Common questions." />

      <hr className="section-divider" />

      {/* CTA */}
      <CTASection
        headline="Ready for consistent AI leadership that moves with your business?"
        body=""
        buttonText="Book a Discovery Call"
      />
    </>
  );
}
