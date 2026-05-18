import { useState, useEffect } from "react";

/**
 * Cookie Consent Banner
 * 
 * Google Analytics Integration Instructions:
 * 1. Sign up at https://analytics.google.com
 * 2. Create a new GA4 property for techlove.consulting
 * 3. Get your Measurement ID (format: G-XXXXXXXXXX)
 * 4. Replace 'G-XXXXXXXXXX' in the loadGoogleAnalytics function below
 * 5. Analytics will only load AFTER the user clicks "Accept"
 * 
 * Google Search Console Verification:
 * 1. Go to https://search.google.com/search-console
 * 2. Add property: techlove.consulting
 * 3. Choose "HTML tag" verification method
 * 4. Add the meta tag to client/index.html <head> section
 * 5. Verify ownership
 */

function loadGoogleAnalytics() {
  // Replace G-XXXXXXXXXX with your actual GA4 Measurement ID
  const GA_ID = "G-XXXXXXXXXX";
  
  if (document.querySelector(`script[src*="googletagmanager"]`)) return;

  const script = document.createElement("script");
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  script.async = true;
  document.head.appendChild(script);

  const inlineScript = document.createElement("script");
  inlineScript.textContent = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${GA_ID}');
  `;
  document.head.appendChild(inlineScript);
}

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("tlc-cookie-consent");
    if (!consent) {
      setVisible(true);
    } else if (consent === "accepted") {
      // Load analytics if previously accepted
      loadGoogleAnalytics();
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("tlc-cookie-consent", "accepted");
    loadGoogleAnalytics();
    setVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem("tlc-cookie-consent", "declined");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] bg-card border-t border-border shadow-lg p-4 md:p-6">
      <div className="container flex flex-col md:flex-row items-start md:items-center justify-between gap-4 max-w-[960px]">
        <p className="text-sm text-foreground/80 mb-0">
          This website uses cookies to analyze traffic and improve your experience. 
          By clicking "Accept," you consent to our use of analytics cookies. 
          See our <a href="/privacy-policy" className="underline text-teal">Privacy Policy</a> for details.
        </p>
        <div className="flex gap-3 shrink-0">
          <button
            onClick={handleDecline}
            className="px-4 py-2 text-sm font-semibold text-foreground/70 border border-border rounded-md hover:bg-sand transition-colors"
          >
            Decline
          </button>
          <button
            onClick={handleAccept}
            className="px-4 py-2 text-sm font-semibold bg-teal text-cream rounded-md hover:bg-teal-light transition-colors"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
