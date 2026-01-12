"use client";

import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "Is BritWager a licensed platform?",
    answer:
      "No, BritWager is an independent affiliate website that compares UK-licensed platforms. We do not provide services directly. All platforms featured on our site are licensed by the UK Gambling Commission.",
  },
  {
    question: "How do I claim the bonuses shown?",
    answer:
      "Click on any brand card to visit their website. Bonuses are typically available to new customers who meet the platform's terms and conditions. Always read the full terms before claiming any bonus.",
  },
  {
    question: "Are the sites safe and secure?",
    answer:
      "Yes, all platforms featured on BritWager are licensed by the UK Gambling Commission, which ensures they meet strict security, fairness, and responsible gaming standards.",
  },
  {
    question: "What payment methods are accepted?",
    answer:
      "Payment methods vary by operator. Common methods include Visa, Mastercard, PayPal, Skrill, Neteller, and bank transfers. Check each operator's card for specific payment options.",
  },
  {
    question: "How quickly can I withdraw my funds?",
    answer:
      "Withdrawal times vary by platform and payment method. Many UK-licensed platforms offer same-day or next-day withdrawals for e-wallets. Bank transfers typically take 3-5 business days.",
  },
  {
    question: "Is there a minimum deposit requirement?",
    answer:
      "Most platforms have a minimum deposit requirement, typically around £10-£20. This information is usually displayed on each platform's card or in their terms and conditions.",
  },
  {
    question: "What should I do if I need help?",
    answer:
      "If you need support, seek help immediately. Visit BeGambleAware.org, GamCare.org.uk, or call the National Gambling Helpline at 0808 8020 133. Links to support organizations are available in our footer.",
  },
  {
    question: "Do you charge any fees for using your service?",
    answer:
      "No, BritWager is completely free to use. We are an affiliate website, which means we may receive a commission from platforms when you sign up through our links, but this does not affect the bonuses or services you receive.",
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
