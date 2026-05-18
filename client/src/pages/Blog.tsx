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
          <p className="text-lg text-foreground/80">
            Thought leadership on human-centered AI adoption for founder-led businesses. Practical strategy, not hype.
          </p>
        </div>
      </section>

      <hr className="section-divider" />

      {/* Coming Soon */}
      <section className="section-spacing">
        <div className="container content-narrow text-center">
          <p className="text-foreground/60 italic mb-8">
            Blog posts are coming soon. In the meantime, explore the resources below.
          </p>
          <div className="space-y-4">
            <Link href="/scale-framework" className="block text-teal font-semibold no-underline hover:text-plum">
              Read about the SCALE Framework &rarr;
            </Link>
            <Link href="/services" className="block text-teal font-semibold no-underline hover:text-plum">
              Explore our services &rarr;
            </Link>
            <Link href="/discovery-call" className="block text-teal font-semibold no-underline hover:text-plum">
              Book a Discovery Call &rarr;
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
