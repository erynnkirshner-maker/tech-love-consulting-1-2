import { Link } from "wouter";
import SEO from "@/components/SEO";

export default function Blog() {
  return (
    <>
      <SEO
        title="Blog | Tech Love Consulting"
        description="Thought leadership on human-centered AI adoption for founder-led businesses. Practical strategy, not hype."
      />

      {/* Hero */}
      <section className="section-spacing">
        <div className="container content-narrow">
          <h1 className="mb-6">Blog</h1>
          <p>
            Thought leadership on human-centered AI adoption for founder-led businesses. Practical strategy, not hype.
          </p>
        </div>
      </section>

      <hr className="section-divider" />

      {/* Coming Soon */}
      <section className="section-spacing">
        <div className="container content-narrow text-center">
          <p className="text-[#7A7A74] italic font-serif mb-8">
            Blog posts are coming soon. In the meantime, explore the resources below.
          </p>
          <div className="space-y-4">
            <Link href="/scale-framework" className="block btn-secondary no-underline inline-block">
              Read about the SCALE Framework &rarr;
            </Link>
            <Link href="/services" className="block btn-secondary no-underline inline-block">
              Explore our services &rarr;
            </Link>
            <Link href="/discovery-call" className="block btn-secondary no-underline inline-block">
              Book a Discovery Call &rarr;
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
