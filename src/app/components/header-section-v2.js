"use client";
import { useEffect, useRef, useState } from "react";
import { MessageCircle } from "lucide-react";
import { WhatsAppNumber, WhatsAppMessage } from "./util.js";

export default function Hero() {
  const videoRef = useRef(null);
  const [loadVideo, setLoadVideo] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setLoadVideo(true);
        }
      },
      { threshold: 0.1 }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative w-full overflow-hidden bg-zinc-950">
      <div
        ref={videoRef}
        className="relative isolate min-h-[280px] h-[42vh] w-full overflow-hidden bg-zinc-950 bg-[url('/images/tumbnail.png')] bg-cover bg-center bg-no-repeat sm:h-[45vh] md:h-[55vh] lg:h-[60vh]"
      >
        {/* Video covers frame; poster as CSS bg so any edge gap matches poster, not page chrome */}
        <video
          className="absolute inset-0 z-0 h-full w-full object-cover object-center"
          style={{ minWidth: "100%", minHeight: "100%" }}
          poster="/images/tumbnail.png"
          src={loadVideo ? "/video/blue-beach.mp4" : undefined}
          autoPlay
          muted
          loop
          playsInline
          title="South coast beach camping in Sri Lanka — Nature Nest Camping gear rental"
          aria-label="Video: South coast beach and ocean in Sri Lanka for camping and outdoor trips with Nature Nest Camping"
        />

        {/* Gradient Overlay — slightly stronger for text on bright waves */}
        <div
          className="absolute inset-0 z-[1] bg-gradient-to-br from-green-950/75 via-black/60 to-orange-950/70"
          aria-hidden
        />

        {/* Content */}
        <div className="relative z-10 flex h-full min-h-[280px] items-center justify-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl w-full text-center text-white">

            <h1 className="text-[1.65rem] leading-tight sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2 md:mb-4 px-1 sm:px-2">
              Nature&apos;s Nest Camping
            </h1>

            <p className="text-base sm:text-xl md:text-2xl mb-3 md:mb-6 text-orange-200 font-medium px-2">
              Explore Down South Beach Camping, Geared Up.
            </p>

            <p className="text-sm sm:text-base md:text-lg mb-4 md:mb-8 text-gray-100 max-w-2xl mx-auto px-2 sm:px-4 leading-relaxed">
              Forget the heavy luggage. We provide reliable, high-quality tents, gear,
              and essentials right here in Galle, Mirissa, Dickwella and beyond.
              Your adventure starts light.
            </p>

            <div className="flex flex-col items-stretch sm:items-center gap-2.5 md:gap-4 px-3 sm:px-4 max-w-md mx-auto w-full">
              <a
                href={`https://wa.me/${WhatsAppNumber}?text=${encodeURIComponent(
                  WhatsAppMessage
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[44px] w-full sm:w-auto items-center justify-center gap-2 bg-gradient-to-r from-green-600 via-green-500 to-orange-500 hover:from-green-700 hover:via-green-600 hover:to-orange-600 text-white px-4 py-3 sm:px-6 sm:py-3 md:px-7 md:py-3.5 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl active:scale-[0.98] md:hover:scale-105 font-medium text-sm sm:text-base touch-manipulation"
              >
                <MessageCircle size={18} className="sm:w-5 sm:h-5 shrink-0" />
                <span className="text-center sm:whitespace-nowrap">Contact on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}