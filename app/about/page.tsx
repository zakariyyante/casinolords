import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us - CasinoLords",
  description: "Learn about CasinoLords and our mission to help UK players find the best casinos and betting sites",
};

export default function AboutPage() {
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().toLocaleString("en-GB", { month: "long" });

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-cta mb-8">About CasinoLords</h1>

        <div className="prose prose-invert max-w-none space-y-6 text-text/90">
          <p className="text-lg leading-relaxed">
            CasinoLords is an independent affiliate platform dedicated to
            guiding UK players towards the best licensed casinos and betting
            sites in the country. Built on the principles of transparency,
            player safety, and responsible gambling, we deliver detailed
            comparisons of fully regulated UK operators.
          </p>

          <h2 className="text-2xl font-bold text-cta mt-8 mb-4">Our Mission</h2>
          <p className="leading-relaxed">
            We exist to make choosing the right casino or betting site
            straightforward for UK players. By carefully evaluating and
            comparing UKGC-licensed operators on their bonuses, features,
            payment options, and support quality, we give you the insight
            needed to decide with confidence.
          </p>

          <h2 className="text-2xl font-bold text-cta mt-8 mb-4">
            What We Do
          </h2>
          <ul className="space-y-3 list-disc list-inside">
            <li>
              Compare UK-licensed casinos and betting sites on bonuses,
              features, and services
            </li>
            <li>
              Curate exclusive bonus offers and the latest promotional deals
            </li>
            <li>
              Publish honest, impartial reviews and side-by-side comparisons
            </li>
            <li>
              Champion responsible gambling and connect players with support
              resources
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-cta mt-8 mb-4">
            Our Commitment to Player Safety
          </h2>
          <p className="leading-relaxed">
            Every operator listed on CasinoLords is licenced by the UK
            Gambling Commission. We only showcase platforms that satisfy strict
            regulatory requirements covering player protection, game integrity,
            and responsible gambling practices.
          </p>

          <h2 className="text-2xl font-bold text-cta mt-8 mb-4">
            Responsible Gambling
          </h2>
          <p className="leading-relaxed">
            We take our responsibility to players seriously. All operators on
            our platform must provide tools that support responsible gambling,
            including deposit limits, reality checks, and self-exclusion. If
            you ever need help, please visit the support organisations
            linked in our footer.
          </p>

          <div className="bg-panel border border-cta/30 rounded-lg p-6 my-8">
            <h3 className="text-xl font-bold text-cta mb-3">
              Independent Affiliate Disclosure
            </h3>
            <p className="text-sm leading-relaxed">
              CasinoLords is an independent affiliate. We may receive a
              commission when you register via our links, but this never
              influences our reviews or the information we share. Our sole
              objective is to help you find the operator that suits you best.
            </p>
          </div>

          <p className="text-sm text-text/60 mt-8">
            Last updated: {currentMonth} {currentYear}
          </p>
        </div>
      </div>
    </div>
  );
}
