import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - BritWager",
  description: "Read BritWager's privacy policy to understand how we collect and use your data",
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
              BritWager ("we," "our," or "us") is committed to protecting your
              privacy. This Privacy Policy explains how we collect, use, and
              safeguard your information when you visit our Website.
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
                We may collect information that you voluntarily provide when
                contacting us, including your name and email address.
              </p>

              <h3 className="text-xl font-semibold text-cta">
                Automatically Collected Information
              </h3>
              <ul className="list-disc list-inside space-y-2">
                <li>IP address and browser type</li>
                <li>Device information and operating system</li>
                <li>Pages visited and time spent on pages</li>
                <li>Referral sources and click tracking data</li>
              </ul>

              <h3 className="text-xl font-semibold text-cta">Cookies</h3>
              <p className="leading-relaxed">
                We use cookies to enhance your experience, analyze site usage,
                and track referral links. You can manage cookie preferences
                through our cookie consent banner.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-cta mb-4">
              3. How We Use Your Information
            </h2>
            <ul className="list-disc list-inside space-y-2">
              <li>To provide and improve our services</li>
              <li>To analyze website usage and performance</li>
              <li>To track affiliate referrals and commissions</li>
              <li>To respond to your inquiries and requests</li>
              <li>To comply with legal obligations</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-cta mb-4">
              4. Google Consent Mode v2
            </h2>
            <p className="leading-relaxed">
              We use Google Consent Mode v2 to manage cookie consent and
              analytics. This allows us to respect your privacy preferences
              while still providing essential website functionality. You can
              manage your consent preferences at any time through our cookie
              consent banner.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-cta mb-4">
              5. Click Tracking (GCLID)
            </h2>
            <p className="leading-relaxed">
              We may capture and store click tracking identifiers (such as
              gclid) from URLs to track affiliate referrals. This information is
              stored in cookies and used solely for affiliate tracking purposes.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-cta mb-4">
              6. Third-Party Services
            </h2>
            <p className="leading-relaxed">
              We may use third-party services for analytics, advertising, and
              website functionality. These services have their own privacy
              policies. When you click on links to platforms, you will
              be subject to their privacy policies.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-cta mb-4">
              7. Data Security
            </h2>
            <p className="leading-relaxed">
              We implement appropriate security measures to protect your
              information. However, no method of transmission over the internet
              is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-cta mb-4">
              8. Your Rights
            </h2>
            <p className="leading-relaxed mb-3">
              Under UK GDPR, you have the right to:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>Access your personal data</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Object to processing of your data</li>
              <li>Withdraw consent at any time</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-cta mb-4">
              9. Data Retention
            </h2>
            <p className="leading-relaxed">
              We retain your information only for as long as necessary to
              fulfill the purposes outlined in this Privacy Policy, unless a
              longer retention period is required by law.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-cta mb-4">
              10. Children's Privacy
            </h2>
            <p className="leading-relaxed">
              Our Website is not intended for individuals under 18 years of age.
              We do not knowingly collect information from children. If you are
              under 18, please do not use this Website.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-cta mb-4">
              11. Changes to Privacy Policy
            </h2>
            <p className="leading-relaxed">
              We may update this Privacy Policy from time to time. Changes will
              be posted on this page with an updated "Last updated" date.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-cta mb-4">
              12. Contact Us
            </h2>
            <p className="leading-relaxed">
              If you have questions about this Privacy Policy or wish to exercise
              your rights, please contact us at contact@britwager.org.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
