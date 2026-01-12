import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us - BritWager",
  description: "Learn about BritWager and our mission to help UK users find the best platforms",
};

export default function AboutPage() {
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().toLocaleString("en-GB", { month: "long" });

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-cta mb-8">About BritWager</h1>

        <div className="prose prose-invert max-w-none space-y-6 text-text/90">
          <p className="text-lg leading-relaxed">
            BritWager is an independent affiliate website dedicated to helping
            UK users discover and compare the best licensed platforms
            in the United Kingdom. Founded with a commitment to transparency,
            safety, and responsible gaming, we provide comprehensive
            information about UK-licensed brands.
          </p>

          <h2 className="text-2xl font-bold text-cta mt-8 mb-4">Our Mission</h2>
          <p className="leading-relaxed">
            Our mission is to simplify the process of finding the right
            platform for UK players. We carefully review and compare
            UK-licensed brands, highlighting their features, bonuses,
            payment methods, and customer service to help you make informed
            decisions.
          </p>

          <h2 className="text-2xl font-bold text-cta mt-8 mb-4">
            What We Do
          </h2>
          <ul className="space-y-3 list-disc list-inside">
            <li>
              Compare UK-licensed platforms based on bonuses, features,
              and services
            </li>
            <li>
              Provide exclusive bonus offers and promotional information
            </li>
            <li>
              Offer transparent, honest reviews and comparisons
            </li>
            <li>
              Promote responsible gaming and provide access to support
              resources
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-cta mt-8 mb-4">
            Our Commitment to Safety
          </h2>
          <p className="leading-relaxed">
            All platforms featured on BritWager are licensed by the UK
            Gambling Commission. We only feature platforms that meet strict
            regulatory standards for security, fairness, and responsible
            gaming practices.
          </p>

          <h2 className="text-2xl font-bold text-cta mt-8 mb-4">
            Responsible Gaming
          </h2>
          <p className="leading-relaxed">
            We are committed to promoting responsible gaming. All platforms on
            our site are required to provide tools for responsible gaming,
            including deposit limits, self-exclusion options, and access to
            support services. If you need help, please
            visit the support organizations listed in our footer.
          </p>

          <div className="bg-panel border border-cta/30 rounded-lg p-6 my-8">
            <h3 className="text-xl font-bold text-cta mb-3">
              Independent Affiliate
            </h3>
            <p className="text-sm leading-relaxed">
              BritWager is an independent affiliate website. We may receive
              commissions from platforms when you sign up through our links, but
              this does not influence our reviews or the information we provide.
              Our goal is to help you find the best platform for your
              needs.
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
