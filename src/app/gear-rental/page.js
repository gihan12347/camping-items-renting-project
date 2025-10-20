"use client";
import React, { useState } from "react";
import ProductCard from "../components/productCard.js";
import NavBar from "../components/navbar.js";
import rentalProducts from "../components/rentalProducts.js";
import Footer from "../components/footer.js";
import Banner from "../components/banner.js";

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
      <main className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-gray-100 pt-[calc(4rem+2vh)] sm:pt-[calc(5rem+2vh)]">
        {/* Banner Section */}
        <div className="mb-10 sm:mb-16">
          <Banner />
        </div>

        {/* Product Grid Section */}
        <section
          id="products"
          className="container mx-auto px-4 md:px-8 mb-24 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-6">
            Featured Equipment
          </h2>
          <p className="text-gray-600 mb-12 text-lg max-w-2xl mx-auto">
            High-quality camping gear available for rent — everything you need
            for your next outdoor adventure across the stunning landscapes of
            southern Sri Lanka.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
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
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}
