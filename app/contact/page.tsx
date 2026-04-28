import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us - CasinoLords",
  description: "Get in touch with CasinoLords for enquiries, partnership requests, or feedback",
};

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-cta mb-8">Contact Us</h1>

        <div className="prose prose-invert max-w-none space-y-6 text-text/90">
          <p className="text-lg leading-relaxed">
            We welcome your messages. Whether you have a question, some
            feedback, or simply need a hand, feel free to get in touch and
            we'll do our best to help.
          </p>

          <div className="bg-panel border border-cta/30 rounded-lg p-6 my-8">
            <h2 className="text-2xl font-bold text-cta mb-4">
              General Enquiries
            </h2>
            <p className="leading-relaxed mb-4">
              For any questions about CasinoLords, the services we offer, or
              the operators featured on our site, reach us using the details
              below.
            </p>
            <p className="text-cta font-semibold">
              Email: contact@casinolords.org
            </p>
          </div>

          <div className="bg-panel border border-cta/30 rounded-lg p-6 my-8">
            <h2 className="text-2xl font-bold text-cta mb-4">
              Operator Enquiries
            </h2>
            <p className="leading-relaxed">
              If you represent a UK-licensed casino or betting operator and
              would like to be considered for a listing on CasinoLords, please
              get in touch with your licence details and a summary of your
              platform's services.
            </p>
          </div>

          <div className="bg-panel border border-cta/30 rounded-lg p-6 my-8">
            <h2 className="text-2xl font-bold text-cta mb-4">
              Gambling Support
            </h2>
            <p className="leading-relaxed mb-4">
              If you or someone you know needs support with problem gambling,
              please contact one of these organisations:
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
              We aim to reply to all messages within 2–3 business days. For
              urgent welfare concerns, please contact one of the support
              organisations above straight away.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
