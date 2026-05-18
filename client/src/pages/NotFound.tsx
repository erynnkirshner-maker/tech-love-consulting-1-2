import { Link } from "wouter";
import SEO from "@/components/SEO";

export default function NotFound() {
  return (
    <>
      <SEO
        title="Page Not Found | Tech Love Consulting"
        description="The page you're looking for doesn't exist."
      />
      <section className="section-spacing">
        <div className="container content-narrow text-center">
          <h1 className="mb-4">Page not found.</h1>
          <p className="text-lg text-foreground/70 mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/" className="btn-primary no-underline">
              Go Home
            </Link>
            <Link href="/discovery-call" className="btn-secondary no-underline">
              Book a Discovery Call
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
