"use client";

import { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Download, ZoomIn, ZoomOut, Camera, Heart } from 'lucide-react';

export default function ImageGallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [zoom, setZoom] = useState(1);

  // Sample images with enhanced content
  const images = [
    { 
      id: 1, 
      url: '/images/camping-hero-1.png', 
      title: 'Tranquil Blue Beach Sunrise', 
      category: 'Beach Camping',
      description: 'Experience the serene morning vibes with golden sunrays dancing on pristine shores'
    },
    { 
      id: 2, 
      url: '/images/camping-hero-2.png', 
      title: 'Coastal Paradise Retreat', 
      category: 'Beach Camping',
      description: 'A perfect getaway where turquoise waves meet endless horizons'
    },
    { 
      id: 3, 
      url: '/images/camping-hero-3.png', 
      title: 'Seaside Adventure Camp', 
      category: 'Beach Camping',
      description: 'Unforgettable moments under palm trees with ocean breezes'
    },
    { 
      id: 4, 
      url: '/images/camping-hero-4.png', 
      title: 'Azure Coast Explorer', 
      category: 'Beach Camping',
      description: 'Discover hidden coves and crystal-clear waters along untouched beaches'
    },
    { 
      id: 5, 
      url: '/images/ussangoda.jpg', 
      title: 'Ussangoda Mystical Dawn', 
      category: 'Morning Vibes',
      description: 'Witness breathtaking sunrise views over ancient red plateaus and mystical landscapes'
    },
    { 
      id: 6, 
      url: '/images/night-mode.jpeg', 
      title: 'Starlit Wilderness Night', 
      category: 'Night Camping',
      description: 'Immerse yourself in a galaxy of stars while cozy campfires illuminate the dark'
    },
    { 
      id: 7, 
      url: '/images/patna.jpeg', 
      title: 'Deniyaya Rainforest Escape', 
      category: 'Nature & Wildlife',
      description: 'Trek through lush green valleys with cascading waterfalls and exotic wildlife'
    },
    { 
      id: 8, 
      url: '/images/matara.jpg', 
      title: 'Matara Golden Sunset', 
      category: 'Sunset Views',
      description: 'Watch the sky paint itself in vibrant oranges and pinks as day meets night'
    },
  ];

  const handlePrevious = () => {
    const currentIndex = images.findIndex(img => img.id === selectedImage.id);
    const prevIndex = currentIndex > 0 ? currentIndex - 1 : images.length - 1;
    setSelectedImage(images[prevIndex]);
    setZoom(1);
  };

  const handleNext = () => {
    const currentIndex = images.findIndex(img => img.id === selectedImage.id);
    const nextIndex = currentIndex < images.length - 1 ? currentIndex + 1 : 0;
    setSelectedImage(images[nextIndex]);
    setZoom(1);
  };

  const handleDownload = async () => {
    const response = await fetch(selectedImage.url);
    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${selectedImage.title}.jpg`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-orange-50 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Enhanced Header */}
        <div className="text-center mb-16 relative">
          <div className="inline-block mb-4">
            <div className="flex items-center justify-center gap-3 mb-3">
              <div className="h-1 w-12 bg-gradient-to-r from-transparent to-emerald-500 rounded-full"></div>
              <Camera className="w-8 h-8 text-orange-500" />
              <div className="h-1 w-12 bg-gradient-to-l from-transparent to-orange-500 rounded-full"></div>
            </div>
          </div>
          <div className="text-6xl md:text-7xl font-black bg-gradient-to-r from-emerald-600 via-green-500 to-orange-500 bg-clip-text text-transparent mb-4 tracking-tight leading-tight">
            Adventure Gallery
          </div>
          <p className="text-gray-600 text-lg md:text-xl font-medium max-w-2xl mx-auto leading-relaxed">
            Explore breathtaking landscapes and unforgettable camping moments captured across Sri Lanka's most stunning destinations
          </p>
          <div className="mt-6 flex items-center justify-center gap-2 text-sm text-gray-500">
            <Heart className="w-4 h-4 text-orange-500 fill-orange-500" />
            <span>{images.length} stunning locations waiting for you</span>
          </div>
        </div>

        {/* Gallery Grid with Enhanced Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {images.map((image, index) => (
            <div
              key={image.id}
              className="group relative overflow-hidden rounded-3xl cursor-pointer bg-white shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 border-2 border-emerald-100 hover:border-orange-300"
              onClick={() => setSelectedImage(image)}
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
              }}
            >
              {/* Image Container */}
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={image.url}
                  alt={'Nature Nest ' + image.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              
              {/* Overlay Content */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-5 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="inline-block px-3 py-1.5 bg-gradient-to-r from-emerald-500 to-orange-500 text-white text-xs font-bold rounded-full mb-3 shadow-lg">
                    {image.category}
                  </span>
                  <h3 className="text-white font-bold text-lg mb-2 leading-tight">
                    {image.title}
                  </h3>
                  <p className="text-white/90 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75">
                    {image.description}
                  </p>
                </div>
              </div>
              
              {/* Corner Accent */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-orange-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Border Glow */}
              <div className="absolute inset-0 ring-2 ring-orange-400 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-gray-900/98 via-emerald-900/95 to-orange-900/98 backdrop-blur-md"
            onClick={() => setSelectedImage(null)}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 z-50 p-3 bg-white/10 hover:bg-orange-500 rounded-full text-white transition-all duration-300 hover:rotate-90 border border-white/20 backdrop-blur-sm"
            >
              <X size={24} />
            </button>

            {/* Control Buttons */}
            <div className="absolute top-6 left-6 z-50 flex gap-3">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setZoom(Math.min(zoom + 0.25, 3));
                }}
                className="p-3 bg-white/10 hover:bg-emerald-500 rounded-full text-white transition-all duration-300 hover:scale-110 border border-white/20 backdrop-blur-sm"
              >
                <ZoomIn size={20} />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setZoom(Math.max(zoom - 0.25, 0.5));
                }}
                className="p-3 bg-white/10 hover:bg-emerald-500 rounded-full text-white transition-all duration-300 hover:scale-110 border border-white/20 backdrop-blur-sm"
              >
                <ZoomOut size={20} />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleDownload();
                }}
                className="p-3 bg-white/10 hover:bg-orange-500 rounded-full text-white transition-all duration-300 hover:scale-110 border border-white/20 backdrop-blur-sm"
              >
                <Download size={20} />
              </button>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handlePrevious();
              }}
              className="absolute left-6 p-4 bg-white/10 hover:bg-emerald-500 rounded-full text-white transition-all duration-300 hover:scale-110 border border-white/20 backdrop-blur-sm"
            >
              <ChevronLeft size={32} />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              className="absolute right-6 p-4 bg-white/10 hover:bg-orange-500 rounded-full text-white transition-all duration-300 hover:scale-110 border border-white/20 backdrop-blur-sm"
            >
              <ChevronRight size={32} />
            </button>

            {/* Image Container */}
            <div 
              className="relative max-w-6xl max-h-[85vh] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.url}
                alt={selectedImage.title}
                className="max-w-full max-h-[85vh] object-contain transition-transform duration-300 rounded-2xl shadow-2xl"
                style={{ transform: `scale(${zoom})` }}
              />
              
              {/* Enhanced Image Info Overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-900 via-gray-900/95 to-transparent p-8 rounded-b-2xl">
                <div className="max-w-3xl">
                  <span className="inline-block px-4 py-2 bg-gradient-to-r from-emerald-500 to-orange-500 text-white text-sm font-bold rounded-full mb-3 shadow-lg">
                    {selectedImage.category}
                  </span>
                  <h3 className="text-white font-bold text-3xl mb-3 leading-tight">
                    {selectedImage.title}
                  </h3>
                  <p className="text-white/90 text-base leading-relaxed">
                    {selectedImage.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}