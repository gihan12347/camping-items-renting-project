"use client";
import React, { useState } from "react";
import ProductCard from "../components/productCard.js";
import NavBar from "../components/navbar.js";
import rentalProducts from "../components/rentalProducts.js";
import Footer from "../components/footer.js";
import Banner from "../components/banner.js";
import GoogleAd from "../components/adsence.js";

export default function Home() {
  const [cartUpdated, setCartUpdated] = useState(0);

  const handleAddToCart = () => {
    setCartUpdated((prev) => prev + 1);
  };

  return (
    <>
      {/* Navigation Bar */}
      <NavBar key={cartUpdated} activeLink="Gear Rentals" />

      {/* Main Wrapper */}
      <main className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-gray-100 pt-[calc(6.25rem+1.5rem+env(safe-area-inset-top,0px))]">
        {/* Banner Section */}
        <div className="mb-8 sm:mb-12 md:mb-16">
          <Banner />
        </div>

        <section className="mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8 mb-10 sm:mb-12">
          <GoogleAd />
        </section>

        {/* Product Grid Section */}
        <section
          id="products"
          className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 mb-16 sm:mb-20 md:mb-24 text-center"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-800 mb-4 sm:mb-6 text-balance">
            Featured Equipment
          </h2>
          <p className="text-gray-600 mb-8 sm:mb-12 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed px-1 sm:px-0">
            High-quality camping gear available for rent — everything you need
            for your next outdoor adventure across the stunning landscapes of
            southern Sri Lanka.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
            {rentalProducts.map((product) => (
              <div
                key={product.id}
                className="transform transition duration-300 hover:-translate-y-2 hover:shadow-2xl rounded-2xl bg-white p-4"
              >
                <ProductCard product={product} onAddToCart={handleAddToCart} />
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8 mb-10 sm:mb-12">
          <GoogleAd />
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}
