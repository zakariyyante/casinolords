export default function LargeContentSection() {
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().toLocaleString("en-GB", { month: "long" });

  return (
    <section className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-cta mb-8 text-center">
          Your Expert Guide to UK Casinos & Betting
        </h2>

        <div className="prose prose-invert max-w-none space-y-6 text-text/90">
          <p className="text-lg leading-relaxed">
            Welcome to CasinoLords, your go-to resource for finding the top
            UK-licensed casinos and betting platforms. As an independent
            affiliate, we deliver in-depth comparisons of leading operators,
            highlight exclusive bonuses, and equip you with all the details
            needed to choose wisely.
          </p>

          <div className="bg-panel border border-cta/30 rounded-lg p-6 my-8">
            <h3 className="text-2xl font-bold text-cta mb-4">
              Why Use CasinoLords?
            </h3>
            <ul className="space-y-3 list-disc list-inside">
              <li>
                <strong>Strictly UKGC-Licensed Platforms:</strong>{" "}
                Every operator we feature is fully authorised and regulated
                by the UK Gambling Commission, keeping your experience safe
                and fair.
              </li>
              <li>
                <strong>Hand-Picked Bonuses & Promotions:</strong> Unlock
                exclusive welcome packages and special deals curated just
                for our visitors.
              </li>
              <li>
                <strong>Side-by-Side Comparisons:</strong> Evaluate payment
                options, withdrawal speeds, customer support quality, and
                more across dozens of operators in one place.
              </li>
              <li>
                <strong>Honest, Unbiased Reviews:</strong> We give you
                straightforward assessments of every platform so you can
                find the right fit for your style of play.
              </li>
            </ul>
          </div>

          <h3 className="text-2xl font-bold text-cta mt-8 mb-4">
            Responsible Gambling
          </h3>
          <p className="leading-relaxed">
            At CasinoLords, player wellbeing comes first. Every operator
            listed on our site must offer responsible gambling tools such as
            deposit caps, cooling-off periods, and self-exclusion options.
            If you or someone close to you is struggling, please reach out
            to BeGambleAware, GamCare, or the National Gambling Helpline
            without delay.
          </p>

          <h3 className="text-2xl font-bold text-cta mt-8 mb-4">
            How We Work For You
          </h3>
          <p className="leading-relaxed">
            Our aim is to take the guesswork out of choosing a casino or
            betting site. We thoroughly vet and compare UK-licensed operators,
            spotlighting their bonuses, standout features, and any
            limitations. Whether you want the biggest welcome offer, the
            quickest cashouts, or a specific payment method, CasinoLords
            points you in the right direction.
          </p>

          <div className="bg-cta/10 border border-cta/30 rounded-lg p-6 my-8">
            <h3 className="text-xl font-bold text-cta mb-3">
              Important Disclosure
            </h3>
            <p className="text-sm leading-relaxed">
              <strong>Last Updated:</strong> {currentMonth} {currentYear}
              <br />
              <br />
              CasinoLords is an independent affiliate website. We may earn a
              commission when you register through our links; however, this
              has no bearing on the bonuses, services, or information we
              present. All featured operators hold UK Gambling Commission
              licences. Please gamble responsibly and never wager more than
              you can afford to lose.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
