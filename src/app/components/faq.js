import { useState } from "react";
import { ChevronDown } from "lucide-react";
import ContactAndSupport from "../components/contact-support.js";

const faqs = [
  {
    question: "What kind of camping gear can I rent?",
    answer:
      "You can rent tents, sleeping bags, backpacks, cooking equipment, lanterns, and other essential camping gear. All items are cleaned and inspected before every rental.",
  },
  {
    question: "How does the rental process work?",
    answer:
      "Browse our catalog, select your items, choose your rental period, and check out. You can pick up your gear in-store or have it delivered to your location.",
  },
  {
    question: "Do I need to pay a deposit?",
    answer:
      "Yes, a small refundable deposit is required to cover potential damages or late returns. The amount varies by item and is refunded once the gear is returned in good condition.",
  },
  {
    question: "What happens if I return an item late?",
    answer:
      "Late returns incur a small daily fee. We recommend contacting us if you expect delays so we can help extend your rental period.",
  },
  {
    question: "Can I cancel or change my booking?",
    answer:
      "Yes! You can modify or cancel your booking up to 24 hours before your rental period starts with no extra fees.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);
  
  return (
    <section className="relative py-20 px-4 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-50 via-white to-orange-50"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-green-200/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-200/30 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
      
      <div className="relative max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r from-green-100 to-orange-100 rounded-full mb-4">
            <span className="text-sm font-semibold text-green-800">Got Questions?</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-700 via-emerald-600 to-orange-600 bg-clip-text text-transparent mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Everything you need to know about renting camping gear with Nature's Nest
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`group relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border-2 ${
                openIndex === index
                  ? "border-orange-400 shadow-orange-200/50"
                  : "border-green-100 hover:border-green-300"
              }`}
            >
              {/* Gradient accent line */}
              <div
                className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-green-500 to-orange-500 transition-opacity duration-300 ${
                  openIndex === index ? "opacity-100" : "opacity-0"
                }`}
              ></div>

              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex justify-between items-center p-6 text-left font-semibold text-lg hover:bg-gradient-to-r hover:from-green-50/50 hover:to-orange-50/50 transition-all duration-300"
              >
                <span className={`flex items-center gap-3 transition-colors duration-300 ${
                  openIndex === index 
                    ? "text-orange-600" 
                    : "text-gray-800 group-hover:text-green-700"
                }`}>
                  <span className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-300 ${
                    openIndex === index
                      ? "bg-gradient-to-br from-orange-400 to-orange-600 text-white"
                      : "bg-gradient-to-br from-green-100 to-green-200 text-green-700 group-hover:from-green-500 group-hover:to-green-600 group-hover:text-white"
                  }`}>
                    {index + 1}
                  </span>
                  {faq.question}
                </span>
                
                <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                  openIndex === index
                    ? "bg-gradient-to-br from-orange-100 to-orange-200"
                    : "bg-gradient-to-br from-green-100 to-green-200 group-hover:from-green-200 group-hover:to-green-300"
                }`}>
                  <ChevronDown
                    className={`w-5 h-5 transition-all duration-300 ${
                      openIndex === index 
                        ? "rotate-180 text-orange-600" 
                        : "text-green-700"
                    }`}
                  />
                </div>
              </button>

              {/* Animated answer section */}
              <div
                className={`transition-all duration-300 ease-in-out ${
                  openIndex === index
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-6 pb-6 pt-2">
                  <div className="pl-11 pr-4">
                    <div className="w-12 h-0.5 bg-gradient-to-r from-green-400 to-orange-400 mb-4 rounded-full"></div>
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <ContactAndSupport/>  
      </div>
    </section>
  );
}