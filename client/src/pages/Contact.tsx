import { Link } from "wouter";
import SEO from "@/components/SEO";

export default function Contact() {
  // Check if Netlify redirected back with ?submitted=true after form submission
  const submitted = typeof window !== 'undefined' && new URLSearchParams(window.location.search).get('submitted') === 'true';

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
          <p>
            Prefer email? Reach Erynn directly at{" "}
            <a href="mailto:Erynn.Kirshner@techloveconsulting.com" className="text-[#2A6E67] border-b border-[#2A6E67] pb-[1px] no-underline">
              Erynn.Kirshner@techloveconsulting.com
            </a>.
          </p>
          <p>
            For a focused conversation about your business, the Discovery Call is the faster path.
          </p>
          <Link href="/discovery-call" className="btn-primary no-underline inline-block mt-4">
            Book a Discovery Call
          </Link>
        </div>
      </section>

      <hr className="section-divider" />

      {/* Contact Form */}
      <section className="section-spacing">
        <div className="container content-narrow">
          <div className="max-w-[480px] mx-auto">
            {submitted ? (
              <div className="bg-[#ECF0EE] rounded-[4px] p-8 text-center">
                <h3 className="text-base mb-3 text-[#2A6E67]">Message sent.</h3>
                <p className="text-[#3C3C38] mb-0">
                  Thank you for reaching out. Erynn will respond within one business day.
                </p>
              </div>
            ) : (
              <form
                name="contact"
                method="POST"
                action="/contact?submitted=true"
                data-netlify="true"
                netlify-honeypot="bot-field"
                className="space-y-5"
              >
                <input type="hidden" name="form-name" value="contact" />
                <input type="hidden" name="bot-field" />
                <div>
                  <label htmlFor="contact-name" className="block font-sans text-[0.6875rem] font-700 uppercase tracking-[0.12em] text-[#7A7A74] mb-2">Name</label>
                  <input
                    type="text"
                    id="contact-name"
                    name="name"
                    required
                    className="w-full px-4 py-3 border-b border-[#C8CCCA] bg-transparent text-[#1A1A18] focus:border-[#2A6E67] focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" className="block font-sans text-[0.6875rem] font-700 uppercase tracking-[0.12em] text-[#7A7A74] mb-2">Email</label>
                  <input
                    type="email"
                    id="contact-email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border-b border-[#C8CCCA] bg-transparent text-[#1A1A18] focus:border-[#2A6E67] focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="contact-message" className="block font-sans text-[0.6875rem] font-700 uppercase tracking-[0.12em] text-[#7A7A74] mb-2">Message</label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={5}
                    required
                    className="w-full px-4 py-3 border-b border-[#C8CCCA] bg-transparent text-[#1A1A18] focus:border-[#2A6E67] focus:outline-none transition-colors resize-none"
                  />
                </div>
                <button type="submit" className="btn-primary w-full">
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
