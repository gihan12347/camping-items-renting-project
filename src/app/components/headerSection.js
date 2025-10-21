// components/Hero.jsx
"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { ChevronDown, MessageCircle } from 'lucide-react';
import { WhatsAppNumber, WhatsAppMessage } from "./util.js";

const backgroundImages = [
  '/images/camping-hero-1.png',
  '/images/camping-hero-2.png',
  '/images/camping-hero-3.png',
  '/images/camping-hero-4.png',
];

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        (prevIndex + 1) % backgroundImages.length
      );
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <header
      className={`relative py-12 mb-8 rounded-xl shadow-2xl overflow-hidden min-h-[35vh] flex flex-col justify-center`}
    >
      {/* Background Layer */}
      <div className="absolute inset-0 z-0">
        {backgroundImages.map((src, index) => (
          <Image
            key={src}
            src={src}
            alt={`Camping Background ${index + 1}`}
            layout="fill"
            objectFit="cover"
            priority={index === 0}
            className={`
              absolute inset-0 
              transition-opacity duration-1000 ease-in-out 
              ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'}
              ${isMounted ? 'scale-105' : 'scale-100'}
            `}
            style={{ filter: `brightness(0.7)` }}
          />
        ))}
        <div className="absolute inset-0 bg-black opacity-40 z-10"></div>
      </div>

      {/* Content */}
      <div className="relative z-20 text-center container mx-auto px-4">
        <p className="text-lg font-medium text-amber-400 mb-1 uppercase tracking-widest">
          Nature Nest Camping
        </p>

        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-3 leading-tight drop-shadow-lg">
          Explore Down South <br className="hidden md:inline" /> Sri Lanka, Geared Up.
        </h1>

        <p className="text-base md:text-lg text-gray-100 mb-6 max-w-2xl mx-auto drop-shadow-md">
          Forget the heavy luggage. We provide reliable, high-quality tents, gear, and essentials
          right here in <strong>Galle, Mirissa, and beyond</strong>. Your adventure starts light.
        </p>

        <a
          href={`https://wa.me/${WhatsAppNumber}?text=${WhatsAppMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center space-x-2 px-8 py-3 bg-green-500 text-white font-bold text-lg rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 transform hover:scale-105"
        >
          <MessageCircle className="w-5 h-5" />
          <span>Chat on WhatsApp to Book</span>
        </a>

        <div className="mt-8">
          <a
            href="#products"
            className="text-white opacity-80 hover:opacity-100 transition-opacity flex flex-col items-center"
          >
            <span className="text-xs uppercase tracking-wider mb-0.5">View Rentals</span>
            <ChevronDown className="w-5 h-5 animate-bounce" />
          </a>
        </div>
      </div>
    </header>
  );
}