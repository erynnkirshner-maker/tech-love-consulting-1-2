import SEO from "@/components/SEO";

export default function TermsOfService() {
  return (
    <>
      <SEO
        title="Terms of Service | Tech Love Consulting"
        description="Terms of service for the Tech Love Consulting website."
      />

      <section className="section-spacing">
        <div className="container content-narrow">
          <h1 className="mb-8">Terms of Service</h1>
          <p className="text-sm text-muted-foreground mb-8">Last updated: May 2026</p>

          <h2 className="text-xl mb-4">Agreement to terms</h2>
          <p>
            By accessing or using the Tech Love Consulting website at techlove.consulting, you agree to these terms. If you do not agree, please do not use the site.
          </p>

          <h2 className="text-xl mb-4">Services described</h2>
          <p>
            This website describes the consulting services offered by Tech Love Consulting. The information provided is for general informational purposes. Specific engagement terms, deliverables, timelines, and pricing are confirmed in separate written agreements between TLC and each client.
          </p>

          <h2 className="text-xl mb-4">Intellectual property</h2>
          <p>
            All content on this website, including text, graphics, logos, and the SCALE Framework methodology, is the property of Tech Love Consulting and is protected by applicable intellectual property laws. You may not reproduce, distribute, or create derivative works from this content without written permission.
          </p>

          <h2 className="text-xl mb-4">Use of the website</h2>
          <p>You agree to use this website only for lawful purposes and in a way that does not infringe on the rights of others or restrict their use of the site. You agree not to:</p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>Submit false or misleading information through any form on this site</li>
            <li>Attempt to gain unauthorized access to any part of the website</li>
            <li>Use the website in any way that could damage, disable, or impair it</li>
          </ul>

          <h2 className="text-xl mb-4">Contact forms and communications</h2>
          <p>
            When you submit information through our contact or booking forms, you consent to being contacted by Erynn Kirshner at Tech Love Consulting regarding your inquiry. We will not use your information for unsolicited marketing.
          </p>

          <h2 className="text-xl mb-4">Disclaimer</h2>
          <p>
            The information on this website is provided "as is" without warranties of any kind. While we strive to keep content accurate and current, we make no guarantees about the completeness or reliability of any information on this site. Results described on this website are specific to individual client situations and are not guaranteed for all engagements.
          </p>

          <h2 className="text-xl mb-4">Limitation of liability</h2>
          <p>
            Tech Love Consulting shall not be liable for any indirect, incidental, or consequential damages arising from your use of this website or reliance on any information provided here.
          </p>

          <h2 className="text-xl mb-4">External links</h2>
          <p>
            This website may contain links to external sites. We are not responsible for the content or privacy practices of those sites.
          </p>

          <h2 className="text-xl mb-4">Changes to these terms</h2>
          <p>
            We may update these terms from time to time. Changes take effect when posted on this page. Continued use of the website after changes constitutes acceptance of the updated terms.
          </p>

          <h2 className="text-xl mb-4">Governing law</h2>
          <p>
            These terms are governed by the laws of the State of Georgia, United States.
          </p>

          <h2 className="text-xl mb-4">Contact</h2>
          <p>
            Questions about these terms? Contact Erynn Kirshner at{" "}
            <a href="mailto:erynn.kirshner@gmail.com" className="text-teal underline">erynn.kirshner@gmail.com</a>.
          </p>
        </div>
      </section>
    </>
  );
}
