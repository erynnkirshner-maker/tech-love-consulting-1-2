import SEO from "@/components/SEO";

export default function PrivacyPolicy() {
  return (
    <>
      <SEO
        title="Privacy Policy | Tech Love Consulting"
        description="Tech Love Consulting's privacy policy. How we collect, use, and protect your information."
      />

      <section className="section-spacing">
        <div className="container content-narrow">
          <h1 className="mb-8">Privacy Policy</h1>
          <p className="text-[13px] text-[#7A7A74] mb-8">Last updated: May 2026</p>

          <h2 className="mb-4">Who we are</h2>
          <p>
            Tech Love Consulting ("TLC," "we," "us") is a boutique AI strategy consultancy based in Canton, Georgia, founded by Erynn Kirshner. This policy explains how we handle information collected through our website at techlove.consulting.
          </p>

          <h2 className="mb-4">What we collect</h2>
          <p>We collect information in two ways:</p>
          <p>
            <strong>Information you provide directly.</strong> When you submit a contact form or book a Discovery Call through our website, you provide your name, email address, company name, and any message content you choose to include. We use this information solely to respond to your inquiry and schedule conversations.
          </p>
          <p>
            <strong>Information collected automatically.</strong> We use website analytics (Google Analytics) to understand how visitors use our site. This includes standard web traffic data such as pages visited, time on site, referring source, browser type, and general geographic location. This data is aggregated and does not personally identify you.
          </p>

          <h2 className="mb-4">How we use your information</h2>
          <p>We use the information we collect to:</p>
          <ul className="list-disc pl-6 space-y-2 mb-6 text-[15px] text-[#3C3C38]">
            <li>Respond to your inquiries and schedule Discovery Calls</li>
            <li>Understand how visitors use our website so we can improve it</li>
            <li>Send follow-up communication related to your inquiry (we will not add you to a marketing list without your explicit consent)</li>
          </ul>

          <h2 className="mb-4">Who we share it with</h2>
          <p>
            We do not sell, rent, or trade your personal information. We may share data with service providers who help us operate our website (such as our hosting provider and analytics service), but only to the extent necessary for them to provide those services.
          </p>

          <h2 className="mb-4">Cookies</h2>
          <p>
            Our website uses cookies for analytics purposes. When you first visit, you will see a cookie consent banner. You can accept or decline analytics cookies. If you decline, no analytics cookies will be set. Essential cookies required for basic website functionality may still be used.
          </p>

          <h2 className="mb-4">Your rights</h2>
          <p>
            You can request access to, correction of, or deletion of any personal information we hold about you. To make a request, email us at <a href="mailto:Erynn.Kirshner@techloveconsulting.com" className="text-[#2A6E67] border-b border-[#2A6E67] pb-[1px] no-underline">Erynn.Kirshner@techloveconsulting.com</a>. We will respond within 30 days.
          </p>

          <h2 className="mb-4">Data retention</h2>
          <p>
            We retain contact form submissions and related correspondence for as long as necessary to maintain our business relationship or respond to your inquiry. Analytics data is retained in aggregated form according to our analytics provider's standard retention policies.
          </p>

          <h2 className="mb-4">Changes to this policy</h2>
          <p>
            We may update this policy from time to time. Changes will be posted on this page with an updated "Last updated" date. We encourage you to review this page periodically.
          </p>

          <h2 className="mb-4">Contact</h2>
          <p>
            If you have questions about this privacy policy or how we handle your information, contact Erynn Kirshner at{" "}
            <a href="mailto:Erynn.Kirshner@techloveconsulting.com" className="text-[#2A6E67] border-b border-[#2A6E67] pb-[1px] no-underline">Erynn.Kirshner@techloveconsulting.com</a>.
          </p>
        </div>
      </section>
    </>
  );
}
