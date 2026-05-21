import { Link } from "wouter";
import SEO from "@/components/SEO";

export default function ThankYou() {
  return (
    <>
      <SEO
        title="Thank You — Tech Love Consulting"
        description="Your message has been received. Erynn will be in touch shortly."
      />
      <section className="section-spacing">
        <div className="container content-narrow text-center" style={{ paddingTop: '6rem', paddingBottom: '6rem' }}>
          <p className="font-sans font-700 uppercase tracking-[0.12em] text-[0.6875rem] text-[#7A7A74] mb-6">Message received</p>
          <h1 className="mb-6">Thank you.</h1>
          <p className="text-[#3C3C38] mb-8" style={{ fontSize: '1.125rem', lineHeight: '1.8' }}>
            Erynn will review your request and respond within one business day.
          </p>
          <Link href="/" className="btn-primary no-underline inline-block">
            Return Home
          </Link>
        </div>
      </section>
    </>
  );
}
