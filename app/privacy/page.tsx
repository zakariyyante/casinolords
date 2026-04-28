import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - CasinoLords",
  description: "Read CasinoLords' privacy policy to understand how we handle your personal data",
};

export default function PrivacyPage() {
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().toLocaleString("en-GB", { month: "long" });

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-cta mb-8">Privacy Policy</h1>

        <div className="prose prose-invert max-w-none space-y-6 text-text/90">
          <p className="text-sm text-text/60 mb-8">
            Last updated: {currentMonth} {currentYear}
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-cta mb-4">
              1. Introduction
            </h2>
            <p className="leading-relaxed">
              CasinoLords ("we," "our," or "us") is committed to protecting
              your privacy. This Privacy Policy sets out how we collect, use,
              and safeguard your information when you visit our Website.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-cta mb-4">
              2. Information We Collect
            </h2>
            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-cta">
                Information You Provide
              </h3>
              <p className="leading-relaxed">
                We may collect information you voluntarily submit when
                contacting us, such as your name and email address.
              </p>

              <h3 className="text-xl font-semibold text-cta">
                Automatically Collected Information
              </h3>
              <ul className="list-disc list-inside space-y-2">
                <li>IP address and browser type</li>
                <li>Device details and operating system</li>
                <li>Pages viewed and time spent on each page</li>
                <li>Traffic sources and click-tracking data</li>
              </ul>

              <h3 className="text-xl font-semibold text-cta">Cookies</h3>
              <p className="leading-relaxed">
                We use cookies to improve your browsing experience, monitor
                site usage, and track affiliate referrals. You can adjust
                your cookie preferences through the consent banner displayed
                on your first visit.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-cta mb-4">
              3. How We Use Your Information
            </h2>
            <ul className="list-disc list-inside space-y-2">
              <li>To deliver and enhance our services</li>
              <li>To monitor website performance and usage patterns</li>
              <li>To record affiliate referrals and associated commissions</li>
              <li>To respond to your messages and requests</li>
              <li>To fulfil our legal and regulatory obligations</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-cta mb-4">
              4. Google Consent Mode v2
            </h2>
            <p className="leading-relaxed">
              We implement Google Consent Mode v2 to handle cookie consent
              and analytics. This framework lets us respect your privacy
              choices while maintaining core website functionality. You may
              update your consent preferences at any time via our cookie
              consent banner.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-cta mb-4">
              5. Click Tracking (GCLID)
            </h2>
            <p className="leading-relaxed">
              We may capture and store click-tracking identifiers (such as
              gclid) appended to URLs in order to attribute affiliate
              referrals. This data is held in cookies and used exclusively
              for affiliate tracking.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-cta mb-4">
              6. Third-Party Services
            </h2>
            <p className="leading-relaxed">
              We may engage third-party providers for analytics, advertising,
              and site functionality. Each provider operates under its own
              privacy policy. When you follow links to operators, their
              privacy notices will govern any data they collect.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-cta mb-4">
              7. Data Security
            </h2>
            <p className="leading-relaxed">
              We apply suitable technical and organisational measures to
              protect your data. Nevertheless, no internet transmission is
              entirely risk-free, and we cannot warrant absolute security.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-cta mb-4">
              8. Your Rights
            </h2>
            <p className="leading-relaxed mb-3">
              Under UK GDPR you have the right to:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>Access your personal data</li>
              <li>Request correction of inaccurate data</li>
              <li>Request erasure of your data</li>
              <li>Object to the processing of your data</li>
              <li>Withdraw your consent at any time</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-cta mb-4">
              9. Data Retention
            </h2>
            <p className="leading-relaxed">
              We hold your information only for as long as required to
              fulfil the purposes described in this Privacy Policy, unless
              a longer period is mandated by law.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-cta mb-4">
              10. Children's Privacy
            </h2>
            <p className="leading-relaxed">
              This Website is strictly for individuals aged 18 and over. We
              do not knowingly collect data from anyone under 18. If you are
              under 18, please leave this Website immediately.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-cta mb-4">
              11. Policy Updates
            </h2>
            <p className="leading-relaxed">
              We may revise this Privacy Policy periodically. Any updates
              will appear on this page alongside a new "Last updated" date.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-cta mb-4">
              12. Contact Us
            </h2>
            <p className="leading-relaxed">
              For questions about this Privacy Policy or to exercise your
              data rights, please write to us at contact@casinolords.org.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
