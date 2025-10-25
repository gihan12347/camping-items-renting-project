  import { WhatsAppNumber, WhatsAppMessage } from "../components/util.js";
  
  const chatForMoreDetails = () => {
    const url = `https://wa.me/${WhatsAppNumber}?text=${encodeURIComponent(WhatsAppMessage)}`;
    window.open(url, "_blank");
  };

export default function contactAndSupport () {
  return (
        <div className="mt-12 text-center p-8 bg-gradient-to-r from-green-100 via-emerald-100 to-orange-100 rounded-2xl border-2 border-green-200">
          <h3 className="text-2xl font-bold text-gray-800 mb-3">
            Still have questions?
          </h3>
          <p className="text-gray-600 mb-6">
            Our team is here to help you plan the perfect outdoor adventure
          </p>
          <button className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
            onClick={chatForMoreDetails}>
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
            </svg>
            Contact Us
          </button>
        </div>
  );
}
