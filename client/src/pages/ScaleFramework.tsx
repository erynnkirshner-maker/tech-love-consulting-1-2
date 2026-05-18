import { Link } from "wouter";
import SEO from "@/components/SEO";
import CTASection from "@/components/CTASection";

const scaleImage = "https://d2xsxph8kpxj0f.cloudfront.net/310519663409776713/3KuvCeY4XyBCWKjDVw6mdN/tlc-scale-framework-3kVG2rfuYMjBqJ6eNi4d6Q.webp";

const dimensions = [
  {
    letter: "S",
    title: "Strategy",
    body: "AI adoption without a clear business strategy is expensive experimentation. Strategy ensures every AI initiative connects to a real business outcome: better margins, faster delivery, stronger retention.\n\nWe start here because everything else depends on it. The tools, the team, the timeline: all of it flows from a clear strategic picture of what you're trying to accomplish and why AI is the right lever.",
  },
  {
    letter: "C",
    title: "Culture and Change",
    body: "The most sophisticated AI implementation fails if your team doesn't trust it. Culture and Change addresses how your people experience the shift: what they fear, what they need to believe, and how you build adoption that lasts beyond the launch.\n\nThis is where most AI initiatives break down. It's also where the most durable competitive advantage lives.",
  },
  {
    letter: "A",
    title: "Architecture and Intelligence",
    body: "The right tools, the right data, and the right infrastructure. Architecture and Intelligence ensures your AI approach is built on a foundation that works for your business today and scales as you grow, without creating technical debt or locking you into the wrong vendors.\n\nYou don't need the most sophisticated stack. You need the right one.",
  },
  {
    letter: "L",
    title: "Leadership and Experience",
    body: "AI adoption is a leadership challenge as much as a technology challenge. Leadership and Experience focuses on how your leaders guide the transition, how your team's day-to-day work changes, and how you measure what's actually working.\n\nThe best AI initiatives don't just improve output. They make your team better at their jobs.",
  },
  {
    letter: "E",
    title: "Ethics and Governance",
    body: "AI creates real risk if it isn't governed thoughtfully. Ethics and Governance builds the policies, oversight structures, and decision frameworks your business needs to use AI responsibly and protect what you've built.\n\nThis isn't a compliance checkbox. It's the foundation that lets you move fast without creating liability.",
  },
];

export default function ScaleFramework() {
  return (
    <>
      <SEO
        title="The SCALE Framework — TLC's AI Adoption Methodology"
        description="SCALE is TLC's proprietary methodology for human-centered AI adoption in founder-led businesses. Five dimensions. One coherent approach."
      />

      {/* Hero */}
      <section className="section-spacing">
        <div className="container content-narrow">
          <p className="chapter-label">The SCALE Framework</p>
          <h1 className="mb-6">A framework built for how founder-led businesses actually adopt AI.</h1>
          <p className="text-lg text-foreground/80">
            Most AI frameworks are built for enterprises. They assume large IT teams, dedicated change management budgets, and months of runway.
          </p>
          <p className="text-lg text-foreground/80">
            The SCALE Framework was built for something different: businesses where the founder is still in the room, where culture is fragile and precious, and where every initiative has to earn its place.
          </p>
          <p className="text-lg text-foreground/80">
            SCALE is TLC's proprietary methodology for human-centered AI adoption. It addresses the five dimensions that determine whether AI creates lasting value or becomes an expensive distraction.
          </p>
        </div>
      </section>

      {/* SCALE Image */}
      <section className="pb-8">
        <div className="container">
          <img
            src={scaleImage}
            alt="Five interconnected organic shapes representing the SCALE Framework dimensions"
            className="w-full max-w-[700px] mx-auto rounded-lg"
          />
        </div>
      </section>

      <hr className="section-divider" />

      {/* Dimensions */}
      {dimensions.map((dim, index) => (
        <div key={dim.letter}>
          <section className="section-spacing">
            <div className="container content-narrow">
              <div className="flex items-baseline gap-4 mb-6">
                <span className="font-serif text-4xl font-bold text-apricot">{dim.letter}</span>
                <h2 className="mb-0">{dim.title}</h2>
              </div>
              {dim.body.split("\n\n").map((paragraph, pIndex) => (
                <p key={pIndex}>{paragraph}</p>
              ))}
            </div>
          </section>
          {index < dimensions.length - 1 && <hr className="section-divider" />}
        </div>
      ))}

      <hr className="section-divider" />

      {/* CTA */}
      <CTASection
        headline="See how SCALE applies to your business."
        body=""
        buttonText="Book a Discovery Call"
      />
    </>
  );
}
