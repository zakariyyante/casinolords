export default function LargeContentSection() {
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().toLocaleString("en-GB", { month: "long" });

  return (
    <section className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-cta mb-8 text-center">
          Your Trusted Guide to UK Platforms
        </h2>

        <div className="prose prose-invert max-w-none space-y-6 text-text/90">
          <p className="text-lg leading-relaxed">
            Welcome to BritWager, your premier destination for discovering the
            best UK-licensed platforms. As an independent affiliate
            site, we provide comprehensive comparisons of top brands,
            exclusive bonuses, and detailed information to help you make informed
            decisions.
          </p>

          <div className="bg-panel border border-cta/30 rounded-lg p-6 my-8">
            <h3 className="text-2xl font-bold text-cta mb-4">
              Why Choose BritWager?
            </h3>
            <ul className="space-y-3 list-disc list-inside">
              <li>
                <strong>UK Gambling Commission Licensed Platforms Only:</strong>{" "}
                Every brand featured on our site is fully licensed
                and regulated by the UK Gambling Commission, ensuring your
                safety and security.
              </li>
              <li>
                <strong>Exclusive Bonuses & Offers:</strong> Access special
                welcome bonuses and promotional offers not available elsewhere.
              </li>
              <li>
                <strong>Comprehensive Comparisons:</strong> Compare payment
                methods, withdrawal times, customer support, and more across
                multiple platforms.
              </li>
              <li>
                <strong>Transparent Information:</strong> We provide clear,
                honest information about each platform to help you find the best
                match for your preferences.
              </li>
            </ul>
          </div>

          <h3 className="text-2xl font-bold text-cta mt-8 mb-4">
            Responsible Gaming
          </h3>
          <p className="leading-relaxed">
            At BritWager, we take responsible gaming seriously. All platforms
            featured on our site are required to provide tools and resources for
            responsible gaming, including deposit limits, self-exclusion
            options, and access to support services. If you or someone you know
            needs help, please seek support from organizations like
            BeGambleAware, GamCare, or the National Gambling Helpline.
          </p>

          <h3 className="text-2xl font-bold text-cta mt-8 mb-4">
            How We Help You
          </h3>
          <p className="leading-relaxed">
            Our mission is to simplify your search for the perfect
            platform. We carefully review and compare UK-licensed brands,
            highlighting their strengths, bonuses, and unique features. Whether
            you're looking for the best welcome bonus, fastest withdrawals, or
            specific payment methods, BritWager helps you find exactly what you
            need.
          </p>

          <div className="bg-cta/10 border border-cta/30 rounded-lg p-6 my-8">
            <h3 className="text-xl font-bold text-cta mb-3">
              Important Information
            </h3>
            <p className="text-sm leading-relaxed">
              <strong>Last Updated:</strong> {currentMonth} {currentYear}
              <br />
              <br />
              BritWager is an independent affiliate website. We may receive
              commissions from platforms when you sign up through our links, but
              this does not affect the bonuses, services, or information we
              provide. All platforms are licensed by the UK Gambling
              Commission. Please play responsibly and only use what you can
              afford to lose.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
