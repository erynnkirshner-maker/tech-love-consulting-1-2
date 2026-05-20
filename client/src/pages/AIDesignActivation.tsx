import { Link } from "wouter";
import SEO from "@/components/SEO";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";

const schema = {
  "@context": "https://schema.org",
  "@type": ["Service", "FAQPage"],
  name: "AI Design + Activation Sprint",
  provider: { "@type": "Organization", name: "Tech Love Consulting" },
  description: "A four-week embedded engagement that designs and implements your priority AI initiative. TLC stays until your team is confident, not just until the deck is done.",
  mainEntity: [
    { "@type": "Question", name: "What counts as one priority?", acceptedAnswer: { "@type": "Answer", text: "One defined workflow, process, or operational problem. The sprint is designed to go deep on one thing rather than shallow on many. Scope is confirmed during the Discovery Call." } },
    { "@type": "Question", name: "What happens after the four weeks?", acceptedAnswer: { "@type": "Answer", text: "Some clients move into the Embedded AI Advisor retainer for ongoing support. Others are ready to run independently. Both outcomes are valid. The sprint is designed to leave your team equipped either way." } },
  ],
};

const faqs = [
  {
    question: "What counts as one priority?",
    answer: "One defined workflow, process, or operational problem. The sprint is designed to go deep on one thing rather than shallow on many. Scope is confirmed during the Discovery Call.",
  },
  {
    question: "What happens after the four weeks?",
    answer: "Some clients move into the Embedded AI Advisor retainer for ongoing support. Others are ready to run independently. Both outcomes are valid. The sprint is designed to leave your team equipped either way.",
  },
];

export default function AIDesignActivation() {
  return (
    <>
      <SEO
        title="AI Design + Activation Sprint — Implement AI That Sticks | TLC"
        description="A four-week embedded engagement that designs and implements your priority AI initiative. TLC stays until your team is confident, not just until the deck is done."
        schema={schema}
      />

      {/* Hero */}
      <section className="section-spacing">
        <div className="container content-narrow">
          <p className="chapter-label">AI Design + Activation Sprint</p>
          <h1 className="mb-4">Design it. Build it. Make it stick.</h1>
          <p className="text-[#7A7A74] mb-8">Four weeks. One priority. Real implementation. Scoped after a Discovery Call.</p>
          <Link href="/discovery-call" className="btn-primary no-underline">
            Book a Discovery Call
          </Link>
        </div>
      </section>

      <hr className="section-divider" />

      {/* Problem */}
      <section className="section-spacing">
        <div className="container content-narrow">
          <h2 className="mb-6">Most AI projects stall between strategy and execution.</h2>
          <p>
            A great plan sits in a deck while the team waits for someone to make the first move. Or the tools get implemented and nobody uses them. Or adoption starts strong and fades within 90 days.
          </p>
          <div className="conversation-marker">
            The AI Design and Activation Sprint closes that gap.
          </div>
        </div>
      </section>

      <hr className="section-divider" />

      {/* What It Is */}
      <section className="section-spacing">
        <div className="container content-narrow">
          <h2 className="mb-6">What a four-week embedded engagement looks like.</h2>
          <p>
            TLC designs and implements your highest-priority AI initiative alongside your team. We don't hand you a blueprint and wish you luck.
          </p>
          <p>
            We build it with you and stay through activation until your team is confident and the work is producing real results.
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
              <span>Designed workflow or process incorporating your priority AI initiative</span>
            </li>
            <li className="flex items-start gap-4">
              <div className="w-1.5 h-1.5 rounded-full bg-[#2A6E67] mt-2.5 shrink-0"></div>
              <span>Full implementation support through the activation cycle</span>
            </li>
            <li className="flex items-start gap-4">
              <div className="w-1.5 h-1.5 rounded-full bg-[#2A6E67] mt-2.5 shrink-0"></div>
              <span>Team adoption guidance throughout</span>
            </li>
            <li className="flex items-start gap-4">
              <div className="w-1.5 h-1.5 rounded-full bg-[#2A6E67] mt-2.5 shrink-0"></div>
              <span>Documentation your team can use, build on, and hand to future hires</span>
            </li>
            <li className="flex items-start gap-4">
              <div className="w-1.5 h-1.5 rounded-full bg-[#2A6E67] mt-2.5 shrink-0"></div>
              <span>Post-activation review with recommendations for what's next</span>
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
              Businesses that have identified their priority initiative and are ready to move. Teams that need an implementation partner, not another advisor who disappears after the strategy phase.
            </p>
          </div>
          <div>
            <h3 className="mb-4 !text-[#1A1A18]">Who it's not for.</h3>
            <p>
              Businesses that haven't yet identified their priority. If you're not sure where to start, the <Link href="/services/ai-fit-check" className="text-[#2A6E67] underline">AI Fit Check</Link> or <Link href="/services/ai-clarity-sprint" className="text-[#2A6E67] underline">AI Clarity Sprint</Link> is the right first step.
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
        headline="Ready to move from strategy to implementation?"
        body=""
        buttonText="Book a Discovery Call"
      />
    </>
  );
}
