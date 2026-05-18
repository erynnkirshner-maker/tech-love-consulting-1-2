import { Link } from "wouter";
import SEO from "@/components/SEO";
import CTASection from "@/components/CTASection";

const aboutImage = "https://d2xsxph8kpxj0f.cloudfront.net/310519663409776713/3KuvCeY4XyBCWKjDVw6mdN/tlc-about-texture-bYzikzo9zTmVDdrzYFrctE.webp";

const schema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Erynn Kirshner",
  jobTitle: "Founder & Chief AI Strategy Officer",
  worksFor: {
    "@type": "Organization",
    name: "Tech Love Consulting",
  },
  description:
    "Erynn Kirshner is a fractional Chief AI Strategy Officer with 20+ years in operational leadership. She founded TLC to help founder-led businesses adopt AI the right way.",
  alumniOf: {
    "@type": "EducationalOrganization",
    name: "UC Berkeley Haas School of Business",
  },
};

export default function About() {
  return (
    <>
      <SEO
        title="About Erynn Kirshner | Tech Love Consulting"
        description="Erynn Kirshner is a fractional Chief AI Strategy Officer with 20+ years in operational leadership. She founded TLC to help founder-led businesses adopt AI the right way."
        schema={schema}
      />

      {/* Hero */}
      <section className="section-spacing">
        <div className="container content-narrow">
          <h1 className="mb-6">Technology should serve your team. Not the other way around.</h1>
          <p className="text-lg text-foreground/80">
            You started your business to build something. Not to become an AI expert. Not to manage a stack of tools your team doesn't trust. Not to explain to a consultant why their recommendation doesn't fit how your company actually operates.
          </p>
          <p className="text-lg text-foreground/80">
            That tension is exactly why TLC exists.
          </p>
        </div>
      </section>

      <hr className="section-divider" />

      {/* Origin Story */}
      <section className="section-spacing">
        <div className="container content-narrow">
          <p className="chapter-label">Origin</p>
          <h2 className="mb-6">Where this started.</h2>
          <p>
            I spent 20 years in operational leadership before founding Tech Love Consulting. COO roles. Enterprise SaaS teams. Rooms where technology decisions either unlocked growth or quietly destroyed morale.
          </p>
          <p>
            What I kept seeing: companies adopting tools without strategies, and strategies that ignored the people who had to live with them.
          </p>
          <p>
            The frameworks were built for enterprises with large IT departments and dedicated change management budgets. Founder-led businesses were trying to apply them anyway, and failing in predictable ways.
          </p>
          <div className="conversation-marker">
            TLC is what I built to fix that.
          </div>
        </div>
      </section>

      {/* About Image */}
      <section className="py-8">
        <div className="container">
          <img
            src={aboutImage}
            alt="Abstract warm illustration suggesting thoughtful conversation"
            className="w-full max-w-[800px] mx-auto rounded-lg"
          />
        </div>
      </section>

      <hr className="section-divider" />

      {/* Credibility */}
      <section className="section-spacing">
        <div className="container content-narrow">
          <p className="chapter-label">Credentials</p>
          <h2 className="mb-8">The background behind the work.</h2>
          <div className="space-y-4">
            <div className="flex items-start gap-4 p-4 bg-sand rounded-lg">
              <div className="w-2 h-2 rounded-full bg-teal mt-2.5 shrink-0"></div>
              <p className="mb-0">20 years of operational leadership, including COO and enterprise SaaS roles at companies including PAR Technology</p>
            </div>
            <div className="flex items-start gap-4 p-4 bg-sand rounded-lg">
              <div className="w-2 h-2 rounded-full bg-teal mt-2.5 shrink-0"></div>
              <p className="mb-0">UC Berkeley Haas certification in AI Business Strategy and Applications, completed 2024</p>
            </div>
            <div className="flex items-start gap-4 p-4 bg-sand rounded-lg">
              <div className="w-2 h-2 rounded-full bg-teal mt-2.5 shrink-0"></div>
              <p className="mb-0">Creator of the SCALE Framework, a proprietary methodology for human-centered AI adoption in founder-led businesses</p>
            </div>
            <div className="flex items-start gap-4 p-4 bg-sand rounded-lg">
              <div className="w-2 h-2 rounded-full bg-teal mt-2.5 shrink-0"></div>
              <p className="mb-0">Current fractional Chief AI Strategy Officer serving clients across multiple industries</p>
            </div>
          </div>
        </div>
      </section>

      <hr className="section-divider" />

      {/* Philosophy */}
      <section className="section-spacing">
        <div className="container content-narrow">
          <h2 className="mb-6">Tech + Love.</h2>
          <p>
            That's not a slogan. It's the standard I apply to every engagement.
          </p>
          <p>
            Technology that serves people rather than replaces them. AI that your team understands, trusts, and actually uses. Strategy that improves how your business runs without dismantling what makes your culture work.
          </p>
          <div className="conversation-marker">
            The best AI implementation isn't the most sophisticated one. It's the one that sticks.
          </div>
        </div>
      </section>

      <hr className="section-divider" />

      {/* Values */}
      <section className="section-spacing">
        <div className="container content-narrow">
          <h2 className="mb-6">How I work.</h2>
          <p>
            I tell clients what I actually think, including when the answer isn't what they hoped for. I scope engagements to the problem at hand, not the maximum billable hours. I measure success by what changes in your business, not by the quality of the deck.
          </p>
          <p>
            If that sounds different from your experience with consultants, it's supposed to.
          </p>
        </div>
      </section>

      <hr className="section-divider" />

      {/* CTA */}
      <CTASection
        headline="If this sounds like what you've been looking for, let's talk."
        body=""
        buttonText="Book a Discovery Call"
      />
    </>
  );
}
