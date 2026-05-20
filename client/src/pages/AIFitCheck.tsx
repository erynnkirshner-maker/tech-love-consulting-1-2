import { Link } from "wouter";
import SEO from "@/components/SEO";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";

const schema = {
  "@context": "https://schema.org",
  "@type": ["Service", "FAQPage"],
  name: "AI Fit Check",
  provider: { "@type": "Organization", name: "Tech Love Consulting" },
  description: "A 60-minute session with Erynn Kirshner that surfaces your highest-leverage AI opportunity and gives you a clear next step. Starting at $750.",
  offers: { "@type": "Offer", price: "750", priceCurrency: "USD", priceSpecification: { "@type": "PriceSpecification", price: "750", priceCurrency: "USD", valueAddedTaxIncluded: false } },
  mainEntity: [
    { "@type": "Question", name: "What if I'm not ready for AI yet?", acceptedAnswer: { "@type": "Answer", text: "That's exactly what this session is designed to figure out. Readiness is part of what we assess. You'll leave knowing where you actually stand, not where you wish you were." } },
    { "@type": "Question", name: "How is this different from a sales call?", acceptedAnswer: { "@type": "Answer", text: "It isn't one. You pay for the session upfront. The goal is clarity, not commitment to a larger engagement. Some clients move forward with TLC afterward. Some don't. Either outcome is fine." } },
  ],
};

const faqs = [
  {
    question: "What if I'm not ready for AI yet?",
    answer: "That's exactly what this session is designed to figure out. Readiness is part of what we assess. You'll leave knowing where you actually stand, not where you wish you were.",
  },
  {
    question: "How is this different from a sales call?",
    answer: "It isn't one. You pay for the session upfront. The goal is clarity, not commitment to a larger engagement. Some clients move forward with TLC afterward. Some don't. Either outcome is fine.",
  },
];

export default function AIFitCheck() {
  return (
    <>
      <SEO
        title="AI Fit Check — 60-Minute AI Strategy Session | TLC"
        description="The AI Fit Check is a 60-minute session with Erynn Kirshner that surfaces your highest-leverage AI opportunity and gives you a clear next step. Starting at $750."
        schema={schema}
      />

      {/* Hero */}
      <section className="section-spacing">
        <div className="container content-narrow">
          <p className="chapter-label">AI Fit Check</p>
          <h1 className="mb-4">Find out exactly where AI can move the needle in your business.</h1>
          <p className="text-[#7A7A74] mb-8">60 minutes. One highest-leverage opportunity. A clear next step.</p>
          <Link href="/discovery-call" className="btn-primary no-underline">
            Book Your AI Fit Check
          </Link>
        </div>
      </section>

      <hr className="section-divider" />

      {/* Problem */}
      <section className="section-spacing">
        <div className="container content-narrow">
          <h2 className="mb-6">You don't need to know everything about AI. You need to know what matters right now.</h2>
          <p>
            Most founders spend months researching tools that don't fit their business, or chasing use cases that sound impressive but won't move their numbers. The AI Fit Check cuts through that.
          </p>
          <div className="conversation-marker">
            This is not a sales call. It's a working session.
          </div>
        </div>
      </section>

      <hr className="section-divider" />

      {/* What It Is */}
      <section className="section-spacing">
        <div className="container content-narrow">
          <h2 className="mb-6">What happens in 60 minutes.</h2>
          <p>
            You'll talk directly with Erynn Kirshner. We look at your business, your operations, and your team. We identify the single highest-leverage AI opportunity available to you right now.
          </p>
          <p>
            You'll leave with a clear picture of what's worth pursuing, what isn't, and what your next move should be.
          </p>
        </div>
      </section>

      <hr className="section-divider" />

      {/* What You Get */}
      <section className="section-spacing">
        <div className="container content-narrow">
          <h2 className="mb-8">What you walk away with.</h2>
          <ul className="space-y-4 list-none pl-0">
            <li className="flex items-start gap-4">
              <div className="w-1.5 h-1.5 rounded-full bg-[#2A6E67] mt-2.5 shrink-0"></div>
              <span>A direct assessment of where AI creates real value in your specific business</span>
            </li>
            <li className="flex items-start gap-4">
              <div className="w-1.5 h-1.5 rounded-full bg-[#2A6E67] mt-2.5 shrink-0"></div>
              <span>Identification of your highest-priority AI opportunity</span>
            </li>
            <li className="flex items-start gap-4">
              <div className="w-1.5 h-1.5 rounded-full bg-[#2A6E67] mt-2.5 shrink-0"></div>
              <span>A candid view of your current readiness and what stands in the way</span>
            </li>
            <li className="flex items-start gap-4">
              <div className="w-1.5 h-1.5 rounded-full bg-[#2A6E67] mt-2.5 shrink-0"></div>
              <span>A clear recommendation for your next step</span>
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
              Founders and operators who are done researching and ready for a real conversation about what applies to their business. You don't need to come in with an AI strategy. You just need to be ready to have an honest conversation about how your business actually runs.
            </p>
          </div>
          <div>
            <h3 className="mb-4 !text-[#1A1A18]">Who it's not for.</h3>
            <p>
              Companies looking for a vendor recommendation or a tool demo. This is strategy, not software sales.
            </p>
          </div>
        </div>
      </section>

      <hr className="section-divider" />

      {/* Investment */}
      <section className="section-spacing">
        <div className="container content-narrow text-center">
          <p className="chapter-label">Investment</p>
          <p className="font-sans text-xl font-700 text-[#2A6E67]">Starting at $750.</p>
        </div>
      </section>

      <hr className="section-divider" />

      {/* FAQ */}
      <FAQSection items={faqs} headline="Common questions." />

      <hr className="section-divider" />

      {/* Final CTA */}
      <CTASection
        headline="60 minutes to find your highest-leverage AI opportunity."
        body=""
        buttonText="Book Your AI Fit Check"
        buttonHref="/discovery-call"
      />
    </>
  );
}
