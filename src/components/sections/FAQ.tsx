"use client";

import { useState } from "react";

/**
 * FAQ Section
 *
 * Uses an accordion pattern: clicking a question expands/collapses its answer.
 * "use client" needed for the toggle state.
 *
 * The FAQ items will be editable from admin via the PageContent model.
 */

const faqs = [
  {
    question: "What's the buying process?",
    answer:
      "Our buying process is straightforward. Start by browsing our properties, schedule a tour, and our team will guide you through documentation, payment plans, and handover.",
  },
  {
    question: "How much deposit do I need?",
    answer:
      "Deposit requirements vary by property. Typically, we require an initial deposit of 30-50% with flexible payment plans available for the balance.",
  },
  {
    question: "Do you offer payment plans?",
    answer:
      "Yes, we offer flexible payment plans tailored to your financial situation. Plans range from 6 to 24 months depending on the property.",
  },
  {
    question: "Can I customize my property?",
    answer:
      "Absolutely! We offer customization options during the construction phase. Our interior design team will work with you to create your dream home.",
  },
];

export default function FAQ() {
  // Track which FAQ item is currently open. null means all are closed.
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    // If clicking the already-open item, close it. Otherwise, open the clicked item.
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left: Title & Description */}
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-navy mb-4 font-sans">
              FAQ
            </h2>
            <p className="text-gray-dark leading-relaxed">
              Find quick answers to common questions about buying, selling, and
              investing in property with Rex&apos;o&apos;s.
            </p>
          </div>

          {/* Right: Accordion */}
          <div className="space-y-0">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-200">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between py-5 text-left"
                >
                  <span className="text-lg font-semibold text-navy italic">
                    {faq.question}
                  </span>
                  <svg
                    className={`w-5 h-5 text-navy shrink-0 transition-transform duration-200 ${
                      openIndex === index ? "rotate-45" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                </button>

                {/* Collapsible Answer */}
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? "max-h-40 pb-5" : "max-h-0"
                  }`}
                >
                  <p className="text-gray-dark text-sm leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
