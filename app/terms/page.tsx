import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms and Conditions - CasinoLords",
  description: "Read CasinoLords' terms and conditions for using our affiliate comparison platform",
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
              By accessing and using CasinoLords.org ("the Website"), you
              confirm that you have read, understood, and agree to be bound by
              these Terms and Conditions. If you do not accept these terms,
              please discontinue use of this Website.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-cta mb-4">
              2. Age Restriction
            </h2>
            <p className="leading-relaxed">
              You must be at least 18 years old to use this Website. By
              continuing to browse, you confirm that you are of legal age
              in your jurisdiction to engage with gambling-related content.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-cta mb-4">
              3. Affiliate Relationship
            </h2>
            <p className="leading-relaxed">
              CasinoLords operates as an independent affiliate. We may receive
              a referral fee when you register with an operator through a link
              on our Website. This arrangement has no impact on the bonuses,
              services, or impartiality of the information we provide. All
              evaluations are based on our own independent assessment.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-cta mb-4">
              4. Third-Party Operators
            </h2>
            <p className="leading-relaxed">
              All operators featured on CasinoLords are licensed by the UK
              Gambling Commission. However, CasinoLords bears no responsibility
              for the content, terms, promotions, or conduct of any
              third-party operator. Your dealings with any operator are
              entirely separate from CasinoLords.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-cta mb-4">
              5. Bonuses and Offers
            </h2>
            <p className="leading-relaxed">
              All bonuses and promotional offers are governed by the terms
              of the individual operator. CasinoLords makes no guarantees
              regarding the availability, accuracy, or conditions attached to
              any bonus. Always review an operator's full terms before
              participating in any promotion.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-cta mb-4">
              6. Responsible Gambling
            </h2>
            <p className="leading-relaxed">
              Gambling can be addictive. Please play within your means and
              set sensible limits. If you feel your gambling is becoming a
              problem, seek support straight away from BeGambleAware, GamCare,
              or the National Gambling Helpline (0808 8020 133).
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-cta mb-4">
              7. Limitation of Liability
            </h2>
            <p className="leading-relaxed">
              CasinoLords provides all content on an "as is" basis without
              warranties of any kind. We accept no liability for losses,
              damages, or disputes arising from your use of third-party
              operators or from reliance on information published on this
              Website.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-cta mb-4">
              8. Intellectual Property
            </h2>
            <p className="leading-relaxed">
              All content on CasinoLords — including text, graphics, logos,
              and imagery — is the property of CasinoLords or its licensors
              and is protected by copyright and applicable intellectual
              property legislation.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-cta mb-4">
              9. Amendments to Terms
            </h2>
            <p className="leading-relaxed">
              CasinoLords reserves the right to amend these Terms and
              Conditions at any time. Updated terms take effect immediately
              upon publication. Continued use of the Website after any
              amendment constitutes your acceptance of the revised terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-cta mb-4">
              10. Contact Information
            </h2>
            <p className="leading-relaxed">
              If you have any queries regarding these Terms and Conditions,
              please reach us at contact@casinolords.org.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
