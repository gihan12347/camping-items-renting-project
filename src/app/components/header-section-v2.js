"use client";
import { MessageCircle, Tent } from "lucide-react";
import { WhatsAppNumber, WhatsAppMessage } from "./util.js";

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Video Container with reduced height */}
      <div className="relative h-[40vh] md:h-[55vh] lg:h-[60vh] w-full">
        {/* Background Video Layer */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src="/video/blue-beach.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
        
        {/* Gradient Overlay - Green to Orange theme */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/60 via-black/50 to-orange-900/60"></div>
        
        {/* Content Container */}
        <div className="relative z-10 h-full flex items-center justify-center px-3 sm:px-6">
          <div className="max-w-4xl w-full text-center text-white">
            
            {/* Icon Badge - Hidden on small mobile */}
            <div className="hidden xs:inline-flex items-center justify-center w-14 h-14 md:w-20 md:h-20 bg-gradient-to-br from-green-500 to-orange-500 rounded-full mb-3 md:mb-6 shadow-lg">
              <Tent size={28} className="md:w-10 md:h-10" />
            </div>
            
            {/* Heading */}
            <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2 md:mb-4 leading-tight px-2">
              Nature&apos;s Nest Camping
            </h1>
            
            {/* Subheading */}
            <p className="text-base xs:text-lg sm:text-xl md:text-2xl mb-3 md:mb-6 text-orange-200 font-medium px-2">
              Explore Down South Beach Camping, Geared Up.
            </p>
            
            {/* Description - More compact on mobile */}
            <p className="text-xs xs:text-sm sm:text-base md:text-lg mb-4 md:mb-8 text-gray-100 max-w-2xl mx-auto px-4 leading-relaxed">
              Forget the heavy luggage. We provide reliable, high-quality tents,
              gear, and essentials right here in Galle, Mirissa, Dickwella and beyond.
              Your adventure starts light.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col items-center gap-2.5 md:gap-4 px-4">
              {/* WhatsApp Button - Compact on mobile */}
              <a
                href={`https://wa.me/${WhatsAppNumber}?text=${encodeURIComponent(
                  WhatsAppMessage
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-green-600 via-green-500 to-orange-500 hover:from-green-700 hover:via-green-600 hover:to-orange-600 text-white px-4 py-2.5 sm:px-6 sm:py-3 md:px-7 md:py-3.5 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl active:scale-95 md:hover:scale-105 font-medium text-sm sm:text-base w-auto max-w-xs sm:max-w-none"
              >
                <MessageCircle size={18} className="sm:w-5 sm:h-5 flex-shrink-0" />
                <span className="whitespace-nowrap">Contact on WhatsApp</span>
              </a>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}