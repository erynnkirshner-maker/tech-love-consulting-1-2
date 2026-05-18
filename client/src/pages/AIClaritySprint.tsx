import { Link } from "wouter";
import SEO from "@/components/SEO";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";

const schema = {
  "@context": "https://schema.org",
  "@type": ["Service", "FAQPage"],
  name: "AI Clarity Sprint",
  provider: { "@type": "Organization", name: "Tech Love Consulting" },
  description: "The AI Clarity Sprint delivers your AI Readiness Snapshot using the SCALE Framework, a clear gap analysis and prioritized roadmap built for founder-led businesses.",
  mainEntity: [
    { "@type": "Question", name: "How long does this take?", acceptedAnswer: { "@type": "Answer", text: "Scope and timeline are set during the Discovery Call based on your business size and complexity. This is not a six-month engagement." } },
    { "@type": "Question", name: "What if we already have an internal AI initiative underway?", acceptedAnswer: { "@type": "Answer", text: "The Clarity Sprint can run alongside existing work. In many cases, it gives leadership a clearer view of whether the current initiative is pointed at the right problem." } },
  ],
};

const faqs = [
  {
    question: "How long does this take?",
    answer: "Scope and timeline are set during the Discovery Call based on your business size and complexity. This is not a six-month engagement.",
  },
  {
    question: "What if we already have an internal AI initiative underway?",
    answer: "The Clarity Sprint can run alongside existing work. In many cases, it gives leadership a clearer view of whether the current initiative is pointed at the right problem.",
  },
];

export default function AIClaritySprint() {
  return (
    <>
      <SEO
        title="AI Clarity Sprint — AI Readiness Snapshot & Roadmap | TLC"
        description="The AI Clarity Sprint delivers your AI Readiness Snapshot using the SCALE Framework, a clear gap analysis and prioritized roadmap built for founder-led businesses."
        schema={schema}
      />

      {/* Hero */}
      <section className="section-spacing">
        <div className="container content-narrow">
          <p className="chapter-label">AI Clarity Sprint</p>
          <h1 className="mb-4">A clear AI roadmap built around how your business actually works.</h1>
          <p className="text-lg text-foreground/70 mb-8">Diagnostic. AI Readiness Snapshot. Strategy. Scoped after a Discovery Call.</p>
          <Link href="/discovery-call" className="btn-primary no-underline">
            Book a Discovery Call
          </Link>
        </div>
      </section>

      <hr className="section-divider" />

      {/* Problem */}
      <section className="section-spacing">
        <div className="container content-narrow">
          <h2 className="mb-6">Knowing you need an AI strategy and actually having one are two different things.</h2>
          <p>
            Most founders have pieces: a tool here, an experiment there, a half-formed plan someone on the team drafted. What they don't have is a coherent picture of where they are and where they're going.
          </p>
          <div className="conversation-marker">
            The AI Clarity Sprint builds that picture.
          </div>
        </div>
      </section>

      <hr className="section-divider" />

      {/* What It Is */}
      <section className="section-spacing">
        <div className="container content-narrow">
          <h2 className="mb-6">How the Clarity Sprint works.</h2>
          <p>
            Using the <Link href="/scale-framework" className="text-teal font-semibold underline">SCALE Framework</Link>, TLC assesses your business across five dimensions: Strategy, Culture and Change, Architecture and Intelligence, Leadership and Experience, and Ethics and Governance.
          </p>
          <p>
            The output is your AI Readiness Snapshot: a clear view of where you stand, where the gaps are, and which moves will create the most leverage in your specific business.
          </p>
        </div>
      </section>

      <hr className="section-divider" />

      {/* What You Get */}
      <section className="section-spacing bg-sand">
        <div className="container content-narrow">
          <h2 className="mb-8">What you walk away with.</h2>
          <ul className="space-y-4 list-none pl-0">
            <li className="flex items-start gap-4">
              <div className="w-2 h-2 rounded-full bg-apricot mt-2.5 shrink-0"></div>
              <span>AI Readiness Snapshot built on the SCALE Framework</span>
            </li>
            <li className="flex items-start gap-4">
              <div className="w-2 h-2 rounded-full bg-apricot mt-2.5 shrink-0"></div>
              <span>Gap analysis across all five dimensions</span>
            </li>
            <li className="flex items-start gap-4">
              <div className="w-2 h-2 rounded-full bg-apricot mt-2.5 shrink-0"></div>
              <span>Prioritized opportunity map</span>
            </li>
            <li className="flex items-start gap-4">
              <div className="w-2 h-2 rounded-full bg-apricot mt-2.5 shrink-0"></div>
              <span>Implementation roadmap with sequenced next steps</span>
            </li>
            <li className="flex items-start gap-4">
              <div className="w-2 h-2 rounded-full bg-apricot mt-2.5 shrink-0"></div>
              <span>Executive summary ready to share with your leadership team</span>
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
              Founder-led businesses that have started exploring AI but don't yet have a coherent strategy. Teams that need alignment before they can move. Leaders who want a defensible plan before they start spending.
            </p>
          </div>
          <div>
            <h3 className="mb-4 text-plum">Who it's not for.</h3>
            <p>
              Businesses that haven't yet had a strategic conversation about AI at the leadership level. If you're at the very beginning, the <Link href="/services/ai-fit-check" className="text-teal font-semibold underline">AI Fit Check</Link> is the right first step.
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
        headline="Ready for a clear picture of where AI fits in your business?"
        body=""
        buttonText="Book a Discovery Call"
      />
    </>
  );
}
