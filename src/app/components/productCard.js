"use client";

import Image from "next/image";
import { ShoppingCart, Star } from "lucide-react";

export default function ProductCard({ product, onAddToCart }) {
  const { name, description, pricePerDay, rating, imageUrl } = product;
  const stars = Array(5)
    .fill(0)
    .map((_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${
          i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
        }`}
      />
    ));

  const handleClick = (key, value) => {
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
    window.scrollTo({ top: 0, behavior: "smooth" });
    if (onAddToCart) onAddToCart();
  };

  return (
    <div className="max-w-xs mx-auto bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden border border-gray-100">
      {/* Product Image */}
      <div className="relative h-48 w-full">
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={name}
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-500 hover:scale-105"
          />
        ) : (
          <div className="flex items-center justify-center h-full bg-gray-200 text-gray-500">
            [Image Placeholder]
          </div>
        )}
      </div>

      <div className="p-4">
        {/* Product Name */}
        <h3 className="text-xl font-semibold text-gray-800 truncate mb-1">
          {name}
        </h3>

        {/* Product Description */}
        <p className="text-sm text-gray-500 line-clamp-2 mb-3 h-10">
          {description}
        </p>

        {/* Rating */}
        <div className="flex items-center mb-3">
          <div className="flex mr-2">{stars}</div>
          <span className="text-sm font-medium text-gray-600">
            ({rating.toFixed(1)})
          </span>
        </div>

        {/* Price and CTA */}
        <div className="flex items-center justify-between">
          <p className="text-2xl font-bold text-green-600">
            LKR {pricePerDay}
            <span className="text-sm font-normal text-gray-500"> / day</span>
          </p>

          <button
            className="flex items-center space-x-2 px-4 py-2 bg-indigo-600 text-white text-sm font-medium rounded-full hover:bg-indigo-700 transition duration-150 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            onClick={() => handleClick("item-in-cart", product)}
          >
            <ShoppingCart className="w-4 h-4" />
            <span>Rent Now</span>
          </button>
        </div>
      </div>
    </div>
  );
}
