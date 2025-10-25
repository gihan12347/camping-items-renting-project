"use client";
import React, { useState } from "react";
import Head from "next/head"; // ✅ Import Head
import ProductCard from "./components/productCard.js";
import HeaderSection from "./components/headerSection.js";
import NavBar from "./components/navbar.js";
import rentalProducts from "./components/rentalProducts.js";
import LocateUs from "./components/location.js";
import ImageGallery from "./components/gallery.js";
import Footer from "./components/footer.js";
import TravelingObjects from "./components/traveling-objects.js";

export default function Home() {
  const [cartUpdated, setCartUpdated] = useState(0);

  const handleAddToCart = () => {
    setCartUpdated((prev) => prev + 1);
  };

  return (
    <>
      <Head>
        <title>Nature Nest Camping | Outdoor Gear Rentals & Adventures</title>
        <meta
          name="description"
          content="Rent high-quality camping gear and experience unforgettable outdoor adventures with Nature Nest Camping. Explore our gallery, locations, and rental products."
        />
        <link
          rel="canonical"
          href="https://naturenestcamping.com/"
        />
      </Head>

      {/* Navigation Bar */}
      <NavBar key={cartUpdated} />

      {/* Main Wrapper */}
      <main className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-gray-100 pt-20">
        {/* Hero Section */}
        <section className="mb-16">
          <HeaderSection />
        </section>

        {/* Product Grid Section */}
        <section
          id="products"
          className="container mx-auto px-4 md:px-8 mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-6">
            Featured Equipment
          </h2>
          <p className="text-gray-600 mb-12 text-lg max-w-2xl mx-auto">
            High-quality camping gear available for rent — everything you need
            for your next outdoor adventure.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {rentalProducts.map((product) => (
              <div
                key={product.id}
                className="transform transition duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <ProductCard product={product} onAddToCart={handleAddToCart} />
              </div>
            ))}
          </div>
        </section>

        {/* Image Gallery Section */}
        <section className="bg-gray-50 py-12">
          <div className="container mx-auto px-4 md:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-6">
              Explore Our Gallery
            </h2>
            <p className="text-gray-600 mb-8 text-lg max-w-2xl mx-auto">
              Take a look at some of our most popular camping setups and happy
              adventurers.
            </p>
            <ImageGallery />
          </div>
        </section>

        {/* Location Section */}
        <section className="bg-white py-12 shadow-inner">
          <LocateUs />
        </section>
      </main>

      {/* Footer */}
      <Footer />
      <TravelingObjects />
    </>
  );
}