"use client";

import { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Download, ZoomIn, ZoomOut } from 'lucide-react';

export default function ImageGallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [zoom, setZoom] = useState(1);

  // Sample images - replace with your own
  const images = [
    { id: 1, url: '/images/camping-hero-1.png', title: 'Mountain Vista', category: 'Nature' },
    { id: 2, url: '/images/camping-hero-2.png', title: 'Forest Path', category: 'Nature' },
    { id: 3, url: '/images/camping-hero-3.png', title: 'Ocean Waves', category: 'Nature' },
    { id: 4, url: '/images/camping-hero-4.png', title: 'Desert Sunset', category: 'Nature' },
    { id: 5, url: 'https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?w=800&q=80', title: 'Tropical Beach', category: 'Nature' },
    { id: 6, url: 'https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?w=800&q=80', title: 'Lake Reflection', category: 'Nature' },
    { id: 7, url: 'https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=800&q=80', title: 'Snowy Peaks', category: 'Nature' },
    { id: 8, url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80', title: 'Canyon View', category: 'Nature' },
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
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-orange-50 to-green-100 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-green-600 to-orange-500 bg-clip-text text-transparent mb-4 tracking-tight">
            Gallery
          </h1>
          <p className="text-green-700 text-lg font-medium">Explore stunning imagery</p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {images.map((image, index) => (
            <div
              key={image.id}
              className="group relative overflow-hidden rounded-2xl cursor-pointer aspect-square bg-white shadow-lg hover:shadow-orange-300/60 transition-all duration-500 hover:scale-105 border-2 border-green-100"
              onClick={() => setSelectedImage(image)}
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
              }}
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-green-900/80 via-orange-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="inline-block px-3 py-1 bg-gradient-to-r from-green-500 to-orange-500 text-white text-xs font-semibold rounded-full mb-2">
                    {image.category}
                  </span>
                  <h3 className="text-white font-bold text-xl">{image.title}</h3>
                </div>
              </div>
              <div className="absolute inset-0 ring-2 ring-orange-400 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-green-900/95 to-orange-900/95 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-50 p-3 bg-white/20 hover:bg-orange-500 rounded-full text-white transition-all duration-300 hover:rotate-90 border border-white/30"
            >
              <X size={24} />
            </button>

            {/* Control Buttons */}
            <div className="absolute top-4 left-4 z-50 flex gap-2">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setZoom(Math.min(zoom + 0.25, 3));
                }}
                className="p-3 bg-white/20 hover:bg-green-500 rounded-full text-white transition-colors border border-white/30"
              >
                <ZoomIn size={20} />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setZoom(Math.max(zoom - 0.25, 0.5));
                }}
                className="p-3 bg-white/20 hover:bg-green-500 rounded-full text-white transition-colors border border-white/30"
              >
                <ZoomOut size={20} />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleDownload();
                }}
                className="p-3 bg-white/20 hover:bg-orange-500 rounded-full text-white transition-colors border border-white/30"
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
              className="absolute left-4 p-4 bg-white/20 hover:bg-green-500 rounded-full text-white transition-all duration-300 hover:scale-110 border border-white/30"
            >
              <ChevronLeft size={32} />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              className="absolute right-4 p-4 bg-white/20 hover:bg-orange-500 rounded-full text-white transition-all duration-300 hover:scale-110 border border-white/30"
            >
              <ChevronRight size={32} />
            </button>

            {/* Image Container */}
            <div 
              className="relative max-w-6xl max-h-[90vh] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.url}
                alt={selectedImage.title}
                className="max-w-full max-h-[90vh] object-contain transition-transform duration-300 rounded-lg shadow-2xl border-4 border-white/20"
                style={{ transform: `scale(${zoom})` }}
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-green-900/90 via-orange-900/70 to-transparent p-6 rounded-b-lg">
                <span className="inline-block px-3 py-1 bg-gradient-to-r from-green-500 to-orange-500 text-white text-xs font-semibold rounded-full mb-2">
                  {selectedImage.category}
                </span>
                <h3 className="text-white font-bold text-2xl">{selectedImage.title}</h3>
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