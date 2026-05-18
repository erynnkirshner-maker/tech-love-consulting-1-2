import { useState } from "react";
import { Link } from "wouter";
import SEO from "@/components/SEO";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <SEO
        title="Contact Tech Love Consulting"
        description="Reach Erynn Kirshner at Tech Love Consulting. For a focused conversation about your business, book a Discovery Call directly."
      />

      {/* Hero */}
      <section className="section-spacing">
        <div className="container content-narrow">
          <h1 className="mb-6">Get in touch.</h1>
          <p className="text-lg text-foreground/80">
            Prefer email? Reach Erynn directly at{" "}
            <a href="mailto:Erynn.Kirshner@techloveconsulting.com" className="text-teal font-semibold underline">
              Erynn.Kirshner@techloveconsulting.com
            </a>.
          </p>
          <p className="text-lg text-foreground/80">
            For a focused conversation about your business, the Discovery Call is the faster path.
          </p>
          <Link href="/discovery-call" className="btn-primary no-underline inline-block mt-4">
            Book a Discovery Call
          </Link>
        </div>
      </section>

      <hr className="section-divider" />

      {/* Contact Form */}
      <section className="section-spacing bg-sand">
        <div className="container content-narrow">
          {submitted ? (
            <div className="bg-card border border-border rounded-lg p-8 text-center">
              <h3 className="text-xl mb-3 text-teal">Message sent.</h3>
              <p className="text-foreground/70 mb-0">
                Thank you for reaching out. Erynn will respond within one business day.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              name="contact"
              method="POST"
              data-netlify="true"
              className="bg-card border border-border rounded-lg p-8 space-y-5 max-w-[560px] mx-auto"
            >
              <input type="hidden" name="form-name" value="contact" />
              <div>
                <label htmlFor="contact-name" className="block text-sm font-semibold mb-1.5">Name</label>
                <input
                  type="text"
                  id="contact-name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 border border-border rounded-md bg-background text-foreground focus:ring-2 focus:ring-teal/30 focus:border-teal transition-colors"
                />
              </div>
              <div>
                <label htmlFor="contact-email" className="block text-sm font-semibold mb-1.5">Email</label>
                <input
                  type="email"
                  id="contact-email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 border border-border rounded-md bg-background text-foreground focus:ring-2 focus:ring-teal/30 focus:border-teal transition-colors"
                />
              </div>
              <div>
                <label htmlFor="contact-message" className="block text-sm font-semibold mb-1.5">Message</label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={5}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 border border-border rounded-md bg-background text-foreground focus:ring-2 focus:ring-teal/30 focus:border-teal transition-colors resize-none"
                />
              </div>
              <button type="submit" className="btn-primary w-full">
                Send Message
              </button>
            </form>
          )}
        </div>
      </section>
    </>
  );
}
