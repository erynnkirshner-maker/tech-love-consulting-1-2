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
 */

function loadGoogleAnalytics() {
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
    <div className="fixed bottom-0 left-0 right-0 z-[100] bg-[#F2F5F4] border-t border-[#C8CCCA] p-4 md:p-6" style={{ borderTopWidth: '0.5px' }}>
      <div className="container flex flex-col md:flex-row items-start md:items-center justify-between gap-4 max-w-[960px]">
        <p className="text-[13px] text-[#3C3C38] mb-0 leading-relaxed">
          This website uses cookies to analyze traffic and improve your experience. 
          By clicking "Accept," you consent to our use of analytics cookies. 
          See our <a href="/privacy-policy" className="text-[#2A6E67] border-b border-[#2A6E67] pb-[1px] no-underline">Privacy Policy</a> for details.
        </p>
        <div className="flex gap-3 shrink-0">
          <button
            onClick={handleDecline}
            className="px-4 py-2 font-sans text-[0.75rem] font-700 uppercase tracking-[0.08em] text-[#7A7A74] border border-[#C8CCCA] rounded-[4px] hover:text-[#1A1A18] transition-colors"
          >
            Decline
          </button>
          <button
            onClick={handleAccept}
            className="px-4 py-2 font-sans text-[0.75rem] font-700 uppercase tracking-[0.08em] text-white bg-[#2A6E67] rounded-[4px] hover:bg-[#1F5550] transition-colors"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
