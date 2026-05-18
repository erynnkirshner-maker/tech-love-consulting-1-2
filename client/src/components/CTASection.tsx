import { Link } from "wouter";

interface CTASectionProps {
  headline?: string;
  body?: string;
  buttonText?: string;
  buttonHref?: string;
}

export default function CTASection({
  headline = "Ready to find out where AI can move the needle in your business?",
  body = "The Discovery Call is where we start. No pitch. No pressure. A real conversation about where you are and what's possible.",
  buttonText = "Book Your Discovery Call",
  buttonHref = "/discovery-call",
}: CTASectionProps) {
  return (
    <section className="section-spacing bg-sand">
      <div className="container content-narrow text-center">
        <h2 className="mb-6">{headline}</h2>
        {body && <p className="text-lg text-muted-foreground mb-8">{body}</p>}
        <Link href={buttonHref} className="btn-primary no-underline">
          {buttonText}
        </Link>
      </div>
    </section>
  );
}
