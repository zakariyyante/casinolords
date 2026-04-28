"use client";

import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "Is CasinoLords a licensed gambling operator?",
    answer:
      "No. CasinoLords is an independent affiliate website that reviews and compares UK-licensed operators. We do not offer gambling services directly. Every platform we list holds a valid licence from the UK Gambling Commission.",
  },
  {
    question: "How do I claim the bonuses shown on the site?",
    answer:
      "Simply click any operator card to visit their website. Welcome bonuses are generally available to first-time customers who satisfy the operator's eligibility criteria. Make sure you read the full terms and conditions before claiming any offer.",
  },
  {
    question: "Are the featured sites trustworthy?",
    answer:
      "Yes. Every operator shown on CasinoLords is regulated by the UK Gambling Commission, which enforces rigorous standards around player security, game fairness, and responsible gambling measures.",
  },
  {
    question: "What payment methods are supported?",
    answer:
      "Available payment options differ by operator. Common choices include Visa, Mastercard, PayPal, Skrill, Neteller, and bank transfers. Check the individual operator's page for a full breakdown of accepted methods.",
  },
  {
    question: "How fast are withdrawals processed?",
    answer:
      "Processing times vary depending on the platform and the withdrawal method chosen. Many UK-licensed sites pay out e-wallet requests the same day or within 24 hours. Standard bank transfers usually take 3–5 business days.",
  },
  {
    question: "Is there a minimum deposit amount?",
    answer:
      "Most operators require a minimum deposit, commonly between £10 and £20. You can find this information on each operator's card or within their terms and conditions page.",
  },
  {
    question: "Where can I get help if gambling becomes a problem?",
    answer:
      "Help is always available. Contact BeGambleAware.org, GamCare.org.uk, or call the free National Gambling Helpline on 0808 8020 133. Links to all support organisations are also found in the footer of every page.",
  },
  {
    question: "Is there a charge for using CasinoLords?",
    answer:
      "Not at all. CasinoLords is entirely free to use. We operate as an affiliate, meaning we may earn a referral fee when you sign up via one of our links. This arrangement does not affect the bonus values or quality of service you receive from the operator.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="text-4xl font-bold text-cta mb-12 text-center">
        Frequently Asked Questions
      </h2>
      <div className="max-w-3xl mx-auto space-y-4">
        {faqData.map((faq, index) => (
          <div
            key={index}
            className="bg-panel border border-cta/30 rounded-lg overflow-hidden"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-cta/5 transition-colors"
            >
              <span className="font-semibold text-text">{faq.question}</span>
              <span className="text-cta text-xl">
                {openIndex === index ? "−" : "+"}
              </span>
            </button>
            {openIndex === index && (
              <div className="px-6 py-4 border-t border-cta/20">
                <p className="text-text/80 leading-relaxed">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
