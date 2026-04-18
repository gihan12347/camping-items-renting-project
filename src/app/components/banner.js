import { MessageCircle } from "lucide-react";
import { WhatsAppNumber, WhatsAppMessage } from "./util.js";

export default function NaturesNestBanner() {

  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${WhatsAppNumber}?text=${encodeURIComponent(
      WhatsAppMessage
    )}`;
    window.open(url, "_blank");
  };

  return (
    <div className="relative w-full bg-gradient-to-r from-emerald-800 to-emerald-600 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-20 h-20 sm:w-28 sm:h-28 bg-white rounded-full -translate-x-10 -translate-y-10"></div>
        <div className="absolute bottom-0 right-0 w-24 h-24 sm:w-36 sm:h-36 bg-orange-500 rounded-full translate-x-10 translate-y-10"></div>
        <div className="absolute top-1/3 left-1/4 w-16 h-16 sm:w-20 sm:h-20 bg-orange-400 rounded-full"></div>
      </div>

      {/* Content Wrapper */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-14">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8 lg:gap-10">
          {/* Left Side - Logo */}
          <div className="flex-shrink-0 mb-4 md:mb-0">
            <img
              src="images/logo.png"
              alt="Nature Nest Camping Logo"
              className="w-40 sm:w-56 lg:w-64 drop-shadow-2xl hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Right Side - Tagline and Button */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left gap-4 sm:gap-5 md:gap-6">
            {/* Main Tagline */}
            <h1 className="text-white text-xl sm:text-3xl md:text-4xl font-semibold leading-snug sm:leading-tight text-balance">
              Discover Beauty of Down South Sri Lanka
            </h1>

            {/* Supporting Text */}
            <p className="text-emerald-100 text-sm sm:text-lg md:text-xl max-w-lg leading-relaxed">
              Rent top-quality camping gear and outdoor essentials from{" "}
              <span className="font-semibold text-white">Nature’s Nest</span> — 
              your trusted partner for unforgettable adventures in the lush forests, 
              serene beaches, and mountain trails of southern Sri Lanka.
            </p>

            {/* WhatsApp Button */}
            <button
              type="button"
              onClick={handleWhatsAppClick}
              className="min-h-[44px] w-full sm:w-auto justify-center bg-gradient-to-r from-orange-500 to-orange-400 hover:from-orange-600 hover:to-orange-500 text-white font-bold py-3 px-6 sm:py-3 sm:px-8 rounded-full text-sm sm:text-base shadow-lg hover:shadow-2xl active:scale-[0.98] md:hover:scale-105 transition-all duration-300 inline-flex items-center gap-2 sm:gap-3 touch-manipulation"
            >
              <MessageCircle size={20} className="sm:w-6 sm:h-6" />
              <span>Contact Us on WhatsApp</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
