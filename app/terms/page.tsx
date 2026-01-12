import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms and Conditions - BritWager",
  description: "Read BritWager's terms and conditions for using our affiliate betting platform",
};

export default function TermsPage() {
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().toLocaleString("en-GB", { month: "long" });

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-cta mb-8">
          Terms and Conditions
        </h1>

        <div className="prose prose-invert max-w-none space-y-6 text-text/90">
          <p className="text-sm text-text/60 mb-8">
            Last updated: {currentMonth} {currentYear}
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-cta mb-4">
              1. Acceptance of Terms
            </h2>
            <p className="leading-relaxed">
              By accessing and using BritWager.org ("the Website"), you accept
              and agree to be bound by these Terms and Conditions. If you do not
              agree to these terms, please do not use this Website.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-cta mb-4">
              2. Age Restriction
            </h2>
            <p className="leading-relaxed">
              You must be 18 years of age or older to use this Website. By using
              this Website, you confirm that you are at least 18 years old and
              of legal age to gamble in your jurisdiction.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-cta mb-4">
              3. Affiliate Relationship
            </h2>
            <p className="leading-relaxed">
              BritWager is an independent affiliate website. We may receive
              commissions from betting operators when you sign up through links
              on our Website. This does not affect the bonuses, services, or
              information we provide. All reviews and comparisons are based on
              our independent assessment.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-cta mb-4">
              4. Third-Party Operators
            </h2>
            <p className="leading-relaxed">
              All betting operators featured on BritWager are licensed by the UK
              Gambling Commission. However, BritWager is not responsible for the
              content, services, terms, or practices of third-party betting
              operators. Your relationship with any betting operator is
              independent of BritWager.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-cta mb-4">
              5. Bonuses and Offers
            </h2>
            <p className="leading-relaxed">
              All bonuses and offers are subject to the terms and conditions of
              the respective betting operators. BritWager does not guarantee the
              availability, accuracy, or terms of any bonus or offer. Always read
              the operator's terms and conditions before claiming any bonus.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-cta mb-4">
              6. Responsible Gambling
            </h2>
            <p className="leading-relaxed">
              Gambling can be addictive. Please gamble responsibly and only bet
              what you can afford to lose. If you feel you may have a gambling
              problem, seek help immediately from organizations like
              BeGambleAware, GamCare, or the National Gambling Helpline (0808
              8020 133).
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-cta mb-4">
              7. Limitation of Liability
            </h2>
            <p className="leading-relaxed">
              BritWager provides information "as is" without warranties of any
              kind. We are not liable for any losses, damages, or issues arising
              from your use of third-party betting operators or the information
              provided on this Website.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-cta mb-4">
              8. Intellectual Property
            </h2>
            <p className="leading-relaxed">
              All content on BritWager, including text, graphics, logos, and
              images, is the property of BritWager or its licensors and is
              protected by copyright and other intellectual property laws.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-cta mb-4">
              9. Changes to Terms
            </h2>
            <p className="leading-relaxed">
              BritWager reserves the right to modify these Terms and Conditions
              at any time. Changes will be effective immediately upon posting.
              Your continued use of the Website constitutes acceptance of any
              modified terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-cta mb-4">
              10. Contact Information
            </h2>
            <p className="leading-relaxed">
              If you have questions about these Terms and Conditions, please
              contact us at contact@britwager.org.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
