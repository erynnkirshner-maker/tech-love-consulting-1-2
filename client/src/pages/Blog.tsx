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
          <ul className="space-y-4 list-none pl-0 text-left max-w-xs mx-auto">
            <li>
              <Link href="/scale-framework" className="btn-secondary no-underline">
                Read about the SCALE Framework &rarr;
              </Link>
            </li>
            <li>
              <Link href="/services" className="btn-secondary no-underline">
                Explore our services &rarr;
              </Link>
            </li>
            <li>
              <Link href="/discovery-call" className="btn-secondary no-underline">
                Book a Discovery Call &rarr;
              </Link>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
