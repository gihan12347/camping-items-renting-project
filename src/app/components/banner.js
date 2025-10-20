import { MessageCircle } from "lucide-react";

export default function NaturesNestBanner() {
  const whatsappNumber = "1234567890"; // Replace with your actual WhatsApp number
  const whatsappMessage =
    "Hi! I'm interested in renting camping equipment from Nature's Nest.";

  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      whatsappMessage
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
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-10 sm:py-14">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-10">
          {/* Left Side - Logo */}
          <div className="flex-shrink-0 mb-4 md:mb-0">
            <img
              src="images/logo.png"
              alt="Nature's Nest Camping Logo"
              className="w-40 sm:w-56 lg:w-64 drop-shadow-2xl hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Right Side - Tagline and Button */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left gap-4 sm:gap-5 md:gap-6">
            {/* Main Tagline */}
            <h1 className="text-white text-2xl sm:text-3xl md:text-4xl font-semibold leading-tight">
              Discover Beauty of Down South Sri Lanka
            </h1>

            {/* Supporting Text */}
            <p className="text-emerald-100 text-base sm:text-lg md:text-xl max-w-lg leading-relaxed">
              Rent top-quality camping gear and outdoor essentials from{" "}
              <span className="font-semibold text-white">Nature’s Nest</span> — 
              your trusted partner for unforgettable adventures in the lush forests, 
              serene beaches, and mountain trails of southern Sri Lanka.
            </p>

            {/* WhatsApp Button */}
            <button
              onClick={handleWhatsAppClick}
              className="bg-gradient-to-r from-orange-500 to-orange-400 hover:from-orange-600 hover:to-orange-500 text-white font-bold py-2.5 px-6 sm:py-3 sm:px-8 rounded-full text-sm sm:text-base shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 inline-flex items-center gap-2 sm:gap-3"
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
