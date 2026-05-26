import SEO from "@/components/SEO";
import FAQSection from "@/components/FAQSection";

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

  return (
    <>
      <SEO
        title="Book a Discovery Call | Tech Love Consulting"
        description="The TLC Discovery Call is a 30 to 45 minute conversation with Erynn Kirshner. Find out where AI creates the most leverage in your business. No pitch. No pressure."
        schema={schema}
      />

      {/* Hero — clean whitespace, no decorative graphic */}
      <section className="section-spacing" style={{ backgroundColor: '#F2F5F4' }}>
        <div className="container content-narrow">
          <h1 className="mb-4">Let's figure out where you are and what's possible.</h1>
          <p style={{ color: '#7A7A74' }}>The Discovery Call is a real conversation. Not a pitch.</p>
        </div>
      </section>

      <hr className="section-divider" />

      {/* What to Expect */}
      <section className="section-spacing" style={{ backgroundColor: '#F2F5F4' }}>
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
      <section className="section-spacing" style={{ backgroundColor: '#F2F5F4' }}>
        <div className="container content-narrow">
          <h2 className="mb-8">What you get.</h2>
          <ul className="space-y-4 list-none pl-0">
            <li className="flex items-start gap-4">
              <div className="w-1.5 h-1.5 rounded-full mt-2.5 shrink-0" style={{ backgroundColor: '#2A6E67' }}></div>
              <span>30 to 45 minutes with Erynn Kirshner</span>
            </li>
            <li className="flex items-start gap-4">
              <div className="w-1.5 h-1.5 rounded-full mt-2.5 shrink-0" style={{ backgroundColor: '#2A6E67' }}></div>
              <span>A candid assessment of your current AI readiness</span>
            </li>
            <li className="flex items-start gap-4">
              <div className="w-1.5 h-1.5 rounded-full mt-2.5 shrink-0" style={{ backgroundColor: '#2A6E67' }}></div>
              <span>A recommendation for your highest-leverage starting point</span>
            </li>
            <li className="flex items-start gap-4">
              <div className="w-1.5 h-1.5 rounded-full mt-2.5 shrink-0" style={{ backgroundColor: '#2A6E67' }}></div>
              <span>No pressure. No pitch. Just clarity.</span>
            </li>
          </ul>
        </div>
      </section>

      <hr className="section-divider" />

      {/* Who This Is For */}
      <section className="section-spacing" style={{ backgroundColor: '#F2F5F4' }}>
        <div className="container content-narrow">
          <h2 className="mb-6">Who should book a call.</h2>
          <p>
            Founders and operational leaders at businesses with 10 to 80 employees who are ready to move from AI curiosity to AI strategy. You don't need to have a plan. You just need to be ready to have an honest conversation about where your business actually is.
          </p>
        </div>
      </section>

      <hr className="section-divider" />

      {/* Booking Form */}
      <section className="section-spacing" style={{ backgroundColor: '#F2F5F4' }}>
        <div className="container content-narrow">
          <div className="max-w-[480px] mx-auto">
            <h2 className="mb-4">Book Your Discovery Call</h2>
            <p className="mb-8" style={{ color: '#7A7A74' }}>
              Fill out the form below and Erynn will reach out to schedule your call.
            </p>
            {false ? (
              <div className="p-8 text-center" style={{ backgroundColor: '#ECF0EE', borderRadius: '4px' }}>
                <h3 className="text-base mb-3" style={{ color: '#2A6E67' }}>Thank you!</h3>
                <p className="mb-0" style={{ color: '#3C3C38' }}>
                  Your request has been received. Erynn will be in touch within one business day to schedule your Discovery Call.
                </p>
              </div>
            ) : (
              <form
                name="discovery-call"
                method="POST"
                action="/thank-you"
                data-netlify="true"
                netlify-honeypot="bot-field"
                className="space-y-5"
              >
                <input type="hidden" name="form-name" value="discovery-call" />
                <input type="hidden" name="bot-field" />
                <div>
                  <label htmlFor="name" className="block font-sans font-700 uppercase tracking-[0.12em] mb-2" style={{ fontSize: '0.6875rem', color: '#7A7A74' }}>Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-0 py-3 bg-transparent focus:outline-none transition-colors"
                    style={{ borderBottom: '1px solid #C8CCCA', color: '#1A1A18' }}
                    onFocus={(e) => e.target.style.borderBottomColor = '#2A6E67'}
                    onBlur={(e) => e.target.style.borderBottomColor = '#C8CCCA'}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block font-sans font-700 uppercase tracking-[0.12em] mb-2" style={{ fontSize: '0.6875rem', color: '#7A7A74' }}>Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-0 py-3 bg-transparent focus:outline-none transition-colors"
                    style={{ borderBottom: '1px solid #C8CCCA', color: '#1A1A18' }}
                    onFocus={(e) => e.target.style.borderBottomColor = '#2A6E67'}
                    onBlur={(e) => e.target.style.borderBottomColor = '#C8CCCA'}
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block font-sans font-700 uppercase tracking-[0.12em] mb-2" style={{ fontSize: '0.6875rem', color: '#7A7A74' }}>Company</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    className="w-full px-0 py-3 bg-transparent focus:outline-none transition-colors"
                    style={{ borderBottom: '1px solid #C8CCCA', color: '#1A1A18' }}
                    onFocus={(e) => e.target.style.borderBottomColor = '#2A6E67'}
                    onBlur={(e) => e.target.style.borderBottomColor = '#C8CCCA'}
                  />
                </div>
                <div>
                  <label htmlFor="comments" className="block font-sans font-700 uppercase tracking-[0.12em] mb-2" style={{ fontSize: '0.6875rem', color: '#7A7A74' }}>Tell me briefly about your business and what prompted this call.</label>
                  <textarea
                    id="comments"
                    name="comments"
                    rows={4}
                    className="w-full px-0 py-3 bg-transparent focus:outline-none transition-colors resize-none"
                    style={{ borderBottom: '1px solid #C8CCCA', color: '#1A1A18' }}
                    onFocus={(e) => e.target.style.borderBottomColor = '#2A6E67'}
                    onBlur={(e) => e.target.style.borderBottomColor = '#C8CCCA'}
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
