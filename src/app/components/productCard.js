"use client";
import Image from "next/image";
import { ShoppingCart, Star, Package } from "lucide-react";

export default function ProductCard({ product, onAddToCart }) {
  //object destructuring.
  const { name, description, pricePerDay, rating, imageUrl } = product;
  
  const stars = Array(5)
    .fill(0)
    .map((_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${
          i < rating ? "text-amber-500 fill-amber-500" : "text-gray-300"
        }`}
      />
    ));

  const handleClick = (key, value) => {
    const audio = new Audio("/audio/button-click.mp3");
    audio.play();
    audio.addEventListener("ended", () => {
      if (typeof window === "undefined") return;
      const existing = localStorage.getItem(key);
      let cart;
      try {
        cart = existing ? JSON.parse(existing) : [];
      } catch (error) {
        console.error("Failed to parse localStorage:", error);
        cart = [];
      }
      if (!Array.isArray(cart)) {
        cart = [];
      }
      cart.push(value);
      localStorage.setItem(key, JSON.stringify(cart));
      window.scrollTo({ top: -20, behavior: "smooth" });
      if (onAddToCart) onAddToCart();
    });
  };

  return (
    <div className="max-w-xs mx-auto bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group">
      {/* Product Image - Full display with contain */}
      <div className="relative h-64 w-full bg-gradient-to-br from-emerald-50 via-white to-orange-50 overflow-hidden">
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={name}
            layout="fill"
            objectFit="contain"
            className="transition-transform duration-500 group-hover:scale-105 p-4"
          />
        ) : (
          <div className="flex items-center justify-center h-full">
            <div className="text-center">
              <div className="w-24 h-24 mx-auto mb-3 rounded-2xl bg-gradient-to-br from-emerald-100 to-orange-100 flex items-center justify-center shadow-inner">
                <Package className="w-12 h-12 text-emerald-600" />
              </div>
              <p className="text-sm text-gray-400 font-medium">
                No Image Available
              </p>
            </div>
          </div>
        )}
        {/* Premium badge */}
        <div className="absolute top-3 right-3 px-3 py-1 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white text-xs font-bold rounded-full shadow-md">
          RENTAL
        </div>
      </div>

      {/* Content Section */}
      <div className="p-5 bg-gradient-to-b from-white to-gray-50">
        {/* Product Name */}
        <h3 className="text-lg font-bold text-gray-800 truncate mb-2 group-hover:text-emerald-700 transition-colors">
          {name}
        </h3>

        {/* Product Description */}
        <p className="text-sm text-gray-600 line-clamp-2 mb-4 h-10 leading-5">
          {description}
        </p>

        {/* Rating */}
        <div className="flex items-center gap-2 mb-4 pb-4 border-b border-gray-200">
          <div className="flex">{stars}</div>
          <span className="text-sm font-bold text-gray-700">
            {rating.toFixed(1)}
          </span>
        </div>

        {/* Price Section */}
        <div className="mb-4">
          <div className="flex items-baseline gap-1">
            <span className="text-sm text-gray-500 font-medium">LKR</span>
            <span className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-emerald-700 bg-clip-text text-transparent">
              {pricePerDay}
            </span>
          </div>
          <p className="text-xs text-gray-500 font-medium mt-0.5">
            per day rental
          </p>
        </div>

        {/* CTA Button */}
        <button
          className="w-full flex items-center justify-center gap-2 px-5 py-3 bg-gradient-to-r from-orange-500 via-orange-600 to-orange-500 text-white font-bold rounded-xl hover:from-orange-600 hover:via-orange-700 hover:to-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 active:scale-95 group/button"
          onClick={() => handleClick("item-in-cart", product)}
        >
          <ShoppingCart className="w-5 h-5 group-hover/button:animate-bounce" />
          <span className="text-sm tracking-wide">RENT NOW</span>
        </button>
      </div>
    </div>
  );
}