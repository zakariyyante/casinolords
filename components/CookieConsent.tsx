"use client";

import { useState, useEffect } from "react";
import { getCookie, setCookie } from "@/lib/cookies";

export default function CookieConsent() {
  const [showConsent, setShowConsent] = useState(false);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    // Check if consent was already given
    const consent = getCookie("cookie_consent");
    if (!consent) {
      setShowConsent(true);
    }

    // Migrate from localStorage if exists
    if (typeof window !== "undefined") {
      const oldConsent = localStorage.getItem("cookie_consent");
      if (oldConsent) {
        setCookie("cookie_consent", oldConsent, 365);
        localStorage.removeItem("cookie_consent");
      }
    }
  }, []);

  const handleAccept = () => {
    setCookie("cookie_consent", "accepted", 365);
    setCookie("analytics_storage", "granted", 365);
    setCookie("ad_storage", "granted", 365);
    setShowConsent(false);
    setSaved(true);
    
    // Google Consent Mode v2
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("consent", "update", {
        analytics_storage: "granted",
        ad_storage: "granted",
      });
    }
  };

  const handleReject = () => {
    setCookie("cookie_consent", "rejected", 365);
    setCookie("analytics_storage", "denied", 365);
    setCookie("ad_storage", "denied", 365);
    setShowConsent(false);
    setSaved(true);
    
    // Google Consent Mode v2
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("consent", "update", {
        analytics_storage: "denied",
        ad_storage: "denied",
      });
    }
  };

  if (!showConsent) {
    if (saved) {
      return (
        <div className="fixed bottom-4 right-4 bg-cta/10 border border-cta rounded-lg p-3 text-sm text-cta z-50 animate-pulse">
          Preferences saved!
        </div>
      );
    }
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-panel border-t border-cta/30 p-4 z-50 shadow-lg">
      <div className="container mx-auto max-w-4xl">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-cta mb-2">
              Cookie Consent
            </h3>
            <p className="text-sm text-text/80">
              We use cookies to enhance your browsing experience and analyze
              site traffic. By clicking "Accept All", you consent to our use of
              cookies. You can manage your preferences at any time.
            </p>
          </div>
          <div className="flex gap-3">
            <button
              onClick={handleReject}
              className="px-4 py-2 bg-transparent border border-cta/50 text-cta rounded-lg hover:bg-cta/10 transition-colors"
            >
              Reject
            </button>
            <button
              onClick={handleAccept}
              className="px-4 py-2 bg-cta text-background rounded-lg hover:bg-cta/90 transition-colors font-semibold"
            >
              Accept All
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
