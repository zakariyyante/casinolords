import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us - BritWager",
  description: "Get in touch with BritWager for inquiries, support, or feedback",
};

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-cta mb-8">Contact Us</h1>

        <div className="prose prose-invert max-w-none space-y-6 text-text/90">
          <p className="text-lg leading-relaxed">
            We'd love to hear from you! Whether you have questions, feedback, or
            need assistance, please don't hesitate to reach out.
          </p>

          <div className="bg-panel border border-cta/30 rounded-lg p-6 my-8">
            <h2 className="text-2xl font-bold text-cta mb-4">
              General Inquiries
            </h2>
            <p className="leading-relaxed mb-4">
              For general inquiries about BritWager, our services, or the
              platforms featured on our site, please use the contact
              information below.
            </p>
            <p className="text-cta font-semibold">
              Email: contact@britwager.org
            </p>
          </div>

          <div className="bg-panel border border-cta/30 rounded-lg p-6 my-8">
            <h2 className="text-2xl font-bold text-cta mb-4">
              Platform Inquiries
            </h2>
            <p className="leading-relaxed">
              If you are a UK-licensed platform interested in being
              featured on BritWager, please contact us with your licensing
              information and details about your services.
            </p>
          </div>

          <div className="bg-panel border border-cta/30 rounded-lg p-6 my-8">
            <h2 className="text-2xl font-bold text-cta mb-4">
              Support Resources
            </h2>
            <p className="leading-relaxed mb-4">
              If you need help, please contact one of
              these organizations:
            </p>
            <ul className="space-y-2 list-disc list-inside">
              <li>
                <strong>BeGambleAware:</strong>{" "}
                <a
                  href="https://www.begambleaware.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cta hover:underline"
                >
                  www.begambleaware.org
                </a>
              </li>
              <li>
                <strong>GamCare:</strong>{" "}
                <a
                  href="https://www.gamcare.org.uk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cta hover:underline"
                >
                  www.gamcare.org.uk
                </a>
              </li>
              <li>
                <strong>National Gambling Helpline:</strong> 0808 8020 133
              </li>
            </ul>
          </div>

          <div className="bg-cta/10 border border-cta/30 rounded-lg p-6 my-8">
            <h3 className="text-xl font-bold text-cta mb-3">
              Response Times
            </h3>
            <p className="text-sm leading-relaxed">
              We aim to respond to all inquiries within 2-3 business days.
              For urgent matters, please contact
              the support organizations listed above immediately.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
