import { Link } from "wouter";
import SEO from "@/components/SEO";
import CTASection from "@/components/CTASection";

const heroImage = "https://d2xsxph8kpxj0f.cloudfront.net/310519663409776713/3KuvCeY4XyBCWKjDVw6mdN/tlc-hero-home-v2-nZMRDckP5bGW8qTPX4GwZu.webp";

const schema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Tech Love Consulting",
  url: "https://techlove.consulting",
  founder: {
    "@type": "Person",
    name: "Erynn Kirshner",
    jobTitle: "Founder & Chief AI Strategy Officer",
  },
  description:
    "TLC helps founder-led businesses with 10 to 80 employees build practical, human-centered AI strategies that improve margins and morale.",
  contactPoint: {
    "@type": "ContactPoint",
    email: "Erynn.Kirshner@techloveconsulting.com",
    contactType: "customer service",
  },
};

export default function Home() {
  return (
    <>
      <SEO
        title="AI Strategy for Founder-Led Businesses | Tech Love Consulting"
        description="TLC helps founder-led businesses build practical AI strategies that improve margins and morale. No code degree required. Book a Discovery Call."
        schema={schema}
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="Abstract watercolor in warm teal and cream tones representing growth and connection"
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="relative z-10 container section-spacing">
          <div className="content-narrow">
            <p className="chapter-label">AI Strategy for Founder-Led Businesses</p>
            <h1 className="mb-6">
              You know AI matters. You're not sure what to do next.
            </h1>
            <p className="text-lg text-foreground/80 mb-8 max-w-[600px]">
              That's a smart place to pause. Founders who rush into AI tools end up with expensive experiments and exhausted teams. TLC helps you build a strategy that actually works, for your business and your people.
            </p>
            <Link href="/discovery-call" className="btn-primary no-underline">
              Book a Discovery Call
            </Link>
          </div>
        </div>
      </section>

      <hr className="section-divider" />

      {/* Problem Block */}
      <section className="section-spacing">
        <div className="container content-narrow">
          <h2 className="mb-6">The pressure is real. So is the risk of getting it wrong.</h2>
          <p>
            You're watching competitors talk about AI. Your team is asking questions you don't have answers to yet. And somewhere between the vendor pitches and the LinkedIn posts, you're trying to figure out what actually applies to your business.
          </p>
          <p>
            Getting it wrong doesn't just cost money. It costs trust.
          </p>
          <p>
            The founders who get AI right don't move faster than everyone else. They move with more clarity. They know which problems are worth solving, which tools fit their team, and how to bring people along without creating fear.
          </p>
          <div className="conversation-marker">
            That's exactly the work TLC does.
          </div>
        </div>
      </section>

      <hr className="section-divider" />

      {/* Solution Overview */}
      <section className="section-spacing">
        <div className="container content-narrow">
          <h2 className="mb-6">Practical AI strategy built for how your business actually runs.</h2>
          <p>
            TLC is a boutique AI strategy consultancy serving founder-led businesses with 10 to 80 employees. We don't sell tools. We don't hand you a deck and disappear.
          </p>
          <p>
            We work alongside you to identify where AI creates real leverage, design an approach your team can adopt, and implement it in a way that sticks.
          </p>
          <p>
            The result: better margins, stronger operations, and a team that feels equipped, not replaced.
          </p>
        </div>
      </section>

      <hr className="section-divider" />

      {/* Social Proof Strip */}
      <section className="py-10 bg-sand">
        <div className="container content-narrow text-center">
          <p className="font-serif italic text-lg text-foreground/70 mb-0">
            Trusted by founder-led businesses navigating AI adoption without the chaos.
          </p>
        </div>
      </section>

      <hr className="section-divider" />

      {/* Services Preview */}
      <section className="section-spacing">
        <div className="container">
          <div className="content-narrow mb-12">
            <h2 className="mb-3">Find your entry point.</h2>
            <p className="text-lg text-foreground/70">Every engagement starts with a conversation. Here's where most clients begin.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[960px] mx-auto">
            {/* AI Fit Check Card */}
            <div className="bg-card rounded-lg p-8 border border-border hover:shadow-md transition-shadow duration-200">
              <h3 className="text-xl mb-3">AI Fit Check</h3>
              <p className="text-foreground/70 mb-4">
                A 60-minute session that surfaces your highest-leverage AI opportunity and gives you a clear next step. Starting at $750.
              </p>
              <Link href="/services/ai-fit-check" className="text-teal font-semibold text-sm no-underline hover:text-plum">
                Learn more &rarr;
              </Link>
            </div>

            {/* AI Clarity Sprint Card */}
            <div className="bg-card rounded-lg p-8 border border-border hover:shadow-md transition-shadow duration-200">
              <h3 className="text-xl mb-3">AI Clarity Sprint</h3>
              <p className="text-foreground/70 mb-4">
                A structured diagnostic that produces your AI Readiness Snapshot using the SCALE Framework. Scoped after discovery.
              </p>
              <Link href="/services/ai-clarity-sprint" className="text-teal font-semibold text-sm no-underline hover:text-plum">
                Learn more &rarr;
              </Link>
            </div>

            {/* AI Design + Activation Sprint Card */}
            <div className="bg-card rounded-lg p-8 border border-border hover:shadow-md transition-shadow duration-200">
              <h3 className="text-xl mb-3">AI Design + Activation Sprint</h3>
              <p className="text-foreground/70 mb-4">
                A four-week embedded engagement that designs and implements your priority AI initiative. Scoped after discovery.
              </p>
              <Link href="/services/ai-design-activation-sprint" className="text-teal font-semibold text-sm no-underline hover:text-plum">
                Learn more &rarr;
              </Link>
            </div>

            {/* Embedded AI Advisor Card */}
            <div className="bg-card rounded-lg p-8 border border-border hover:shadow-md transition-shadow duration-200">
              <h3 className="text-xl mb-3">Embedded AI Advisor</h3>
              <p className="text-foreground/70 mb-4">
                Ongoing fractional Chief AI Strategy Officer support for businesses that need consistent AI leadership. Monthly retainer, scoped after discovery.
              </p>
              <Link href="/services/embedded-ai-advisor" className="text-teal font-semibold text-sm no-underline hover:text-plum">
                Learn more &rarr;
              </Link>
            </div>
          </div>
          <div className="content-narrow text-center mt-10">
            <p className="text-foreground/70 mb-2">Not sure where to start?</p>
            <Link href="/discovery-call" className="btn-primary no-underline">
              Book a Discovery Call
            </Link>
            <p className="text-sm text-muted-foreground mt-3">and we'll figure it out together.</p>
          </div>
        </div>
      </section>

      <hr className="section-divider" />

      {/* Authority Block */}
      <section className="section-spacing">
        <div className="container content-narrow">
          <h2 className="mb-6">You need someone who has actually run a business.</h2>
          <p>
            Erynn Kirshner founded Tech Love Consulting after 20 years in operational leadership, including COO roles and enterprise SaaS leadership at companies like PAR Technology. She holds UC Berkeley Haas certification in AI Business Strategy and Applications.
          </p>
          <div className="conversation-marker">
            She built TLC on one belief: the best AI strategy is the one your team will actually use.
          </div>
          <div className="mt-8">
            <Link href="/about" className="text-teal font-semibold no-underline hover:text-plum">
              Read more about Erynn &rarr;
            </Link>
          </div>
        </div>
      </section>

      <hr className="section-divider" />

      {/* Featured Proof Placeholder */}
      <section className="section-spacing bg-sand">
        <div className="container content-narrow text-center">
          <p className="chapter-label">Results</p>
          <p className="text-foreground/60 italic mb-0">
            Client results and case studies coming soon.
          </p>
        </div>
      </section>

      <hr className="section-divider" />

      {/* Final CTA */}
      <CTASection
        headline="Ready to find out where AI can move the needle in your business?"
        body="The Discovery Call is where we start. No pitch. No pressure. A real conversation about where you are and what's possible."
        buttonText="Book Your Discovery Call"
      />
    </>
  );
}
