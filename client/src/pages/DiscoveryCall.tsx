import { useState } from "react";
import SEO from "@/components/SEO";
import FAQSection from "@/components/FAQSection";

const discoveryImage = "https://d2xsxph8kpxj0f.cloudfront.net/310519663409776713/3KuvCeY4XyBCWKjDVw6mdN/tlc-discovery-v2-dg69z76rxXfM3zEDrU6ozs.webp";

const schema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "What if I'm not sure we're ready?", acceptedAnswer: { "@type": "Answer", text: "Readiness is exactly what we assess on the call. Come as you are." } },
    { "@type": "Question", name: "Will I be pitched a large engagement?", acceptedAnswer: { "@type": "Answer", text: "No. The Discovery Call exists to surface the right first step for your situation. Sometimes that's a small session. Sometimes it's a larger engagement. Sometimes the answer is \"come back in six months.\" You'll get the honest answer, not the convenient one." } },
  ],
};

const faqs = [
  {
    question: "What if I'm not sure we're ready?",
    answer: "Readiness is exactly what we assess on the call. Come as you are.",
  },
  {
    question: "Will I be pitched a large engagement?",
    answer: "No. The Discovery Call exists to surface the right first step for your situation. Sometimes that's a small session. Sometimes it's a larger engagement. Sometimes the answer is \"come back in six months.\" You'll get the honest answer, not the convenient one.",
  },
];

export default function DiscoveryCall() {
  const [formData, setFormData] = useState({ name: "", email: "", company: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <SEO
        title="Book a Discovery Call | Tech Love Consulting"
        description="The TLC Discovery Call is a 30 to 45 minute conversation with Erynn Kirshner. Find out where AI creates the most leverage in your business. No pitch. No pressure."
        schema={schema}
      />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={discoveryImage}
            alt=""
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative z-10 section-spacing">
          <div className="container content-narrow">
            <h1 className="mb-4">Let's figure out where you are and what's possible.</h1>
            <p className="text-[#7A7A74]">The Discovery Call is a real conversation. Not a pitch.</p>
          </div>
        </div>
      </section>

      <hr className="section-divider" />

      {/* What to Expect */}
      <section className="section-spacing">
        <div className="container content-narrow">
          <h2 className="mb-6">What happens on the call.</h2>
          <p>
            You'll talk to Erynn directly. No intake form that gets routed to a junior associate. No discovery questionnaire dressed up as a strategy session.
          </p>
          <p>
            We'll spend 30 to 45 minutes covering three things: where your business is right now, where AI creates the most leverage for your specific situation, and what the right first step looks like.
          </p>
          <p>
            You'll leave with a clear point of view on what's worth pursuing, whether or not we work together.
          </p>
        </div>
      </section>

      <hr className="section-divider" />

      {/* What You Get */}
      <section className="section-spacing">
        <div className="container content-narrow">
          <h2 className="mb-8">What you get.</h2>
          <ul className="space-y-4 list-none pl-0">
            <li className="flex items-start gap-4">
              <div className="w-1.5 h-1.5 rounded-full bg-[#2A6E67] mt-2.5 shrink-0"></div>
              <span>30 to 45 minutes with Erynn Kirshner</span>
            </li>
            <li className="flex items-start gap-4">
              <div className="w-1.5 h-1.5 rounded-full bg-[#2A6E67] mt-2.5 shrink-0"></div>
              <span>A candid assessment of your current AI readiness</span>
            </li>
            <li className="flex items-start gap-4">
              <div className="w-1.5 h-1.5 rounded-full bg-[#2A6E67] mt-2.5 shrink-0"></div>
              <span>A recommendation for your highest-leverage starting point</span>
            </li>
            <li className="flex items-start gap-4">
              <div className="w-1.5 h-1.5 rounded-full bg-[#2A6E67] mt-2.5 shrink-0"></div>
              <span>No pressure. No pitch. Just clarity.</span>
            </li>
          </ul>
        </div>
      </section>

      <hr className="section-divider" />

      {/* Who This Is For */}
      <section className="section-spacing">
        <div className="container content-narrow">
          <h2 className="mb-6">Who should book a call.</h2>
          <p>
            Founders and operational leaders at businesses with 10 to 80 employees who are ready to move from AI curiosity to AI strategy. You don't need to have a plan. You just need to be ready to have an honest conversation about where your business actually is.
          </p>
        </div>
      </section>

      <hr className="section-divider" />

      {/* Booking Form */}
      <section className="section-spacing">
        <div className="container content-narrow">
          <div className="max-w-[480px] mx-auto">
            <h2 className="mb-4">Book Your Discovery Call</h2>
            <p className="text-[#7A7A74] mb-8">
              Fill out the form below and Erynn will reach out to schedule your call.
            </p>
            {submitted ? (
              <div className="bg-[#ECF0EE] rounded-[4px] p-8 text-center">
                <h3 className="text-base mb-3 text-[#2A6E67]">Thank you!</h3>
                <p className="text-[#3C3C38] mb-0">
                  Your request has been received. Erynn will be in touch within one business day to schedule your Discovery Call.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                name="discovery-call"
                method="POST"
                data-netlify="true"
                className="space-y-5"
              >
                <input type="hidden" name="form-name" value="discovery-call" />
                <div>
                  <label htmlFor="name" className="block font-sans text-[0.6875rem] font-700 uppercase tracking-[0.12em] text-[#7A7A74] mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 border-b border-[#C8CCCA] bg-transparent text-[#1A1A18] focus:border-[#2A6E67] focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block font-sans text-[0.6875rem] font-700 uppercase tracking-[0.12em] text-[#7A7A74] mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 border-b border-[#C8CCCA] bg-transparent text-[#1A1A18] focus:border-[#2A6E67] focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block font-sans text-[0.6875rem] font-700 uppercase tracking-[0.12em] text-[#7A7A74] mb-2">Company</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-4 py-3 border-b border-[#C8CCCA] bg-transparent text-[#1A1A18] focus:border-[#2A6E67] focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block font-sans text-[0.6875rem] font-700 uppercase tracking-[0.12em] text-[#7A7A74] mb-2">Tell me briefly about your business and what prompted this call.</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 border-b border-[#C8CCCA] bg-transparent text-[#1A1A18] focus:border-[#2A6E67] focus:outline-none transition-colors resize-none"
                  />
                </div>
                <button type="submit" className="btn-primary w-full">
                  Book Your Discovery Call
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <hr className="section-divider" />

      {/* FAQ */}
      <FAQSection items={faqs} headline="Common questions." />
    </>
  );
}
