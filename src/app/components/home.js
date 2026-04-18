"use client";
import React, { useState } from "react";
import ProductCard from "./productCard.js";
import HeaderSectionV2 from "./header-section-v2.js";
import NavBar from "./navbar.js";
import rentalProducts from "./rentalProducts.js";
import LocateUs from "./location.js";
import ImageGallery from "./gallery.js";
import Footer from "./footer.js";
import GoogleAd from "./adsence.js";

export default function Home() {
  const [cartUpdated, setCartUpdated] = useState(0);

  const handleAddToCart = () => {
    setCartUpdated((prev) => prev + 1);
  };

  return (
    <>
      {/* Navigation Bar */}
      {/* handleAddToCart pass to clild as funtional prop, from the child
      componet call this funtion then it run on parent component and update the
      value of cartUpdated state. when cartUpdated status change, 
      the NavBar component will re-render and update the cart items.
      this call Lifting State Up design pattern in react. */}

      <NavBar key={cartUpdated} />

      {/* Main Wrapper */}
      <main className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-gray-100 pt-[calc(6.25rem+1.5rem+env(safe-area-inset-top,0px))]">
        {/* Hero Section */}
        <section className="mb-10 sm:mb-14 md:mb-16">
          <HeaderSectionV2 />
        </section>

        {/* Product Grid Section */}
        <section
          id="products"
          className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16 text-center"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-800 mb-4 sm:mb-6 text-balance">
            Camping Equipment for Rent
          </h2>
          <p className="text-gray-600 mb-8 sm:mb-12 text-base sm:text-lg max-w-2xl mx-auto px-1 sm:px-0 leading-relaxed">
            Nature Nest Camping offers camp tents for rent, stoves, and outdoor
            essentials for travelers exploring Sri Lanka, with trusted support for
            visitors from the USA and Europe.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
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

        <section className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16">
          <GoogleAd />
        </section>

        {/* Image Gallery Section */}
        <section className="bg-gray-50 py-10 sm:py-12 md:py-14">
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-800 mb-4 sm:mb-6 text-balance">
              Explore Our Gallery
            </h2>
            <p className="text-gray-600 mb-6 sm:mb-8 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              Take a look at some of our most popular camping setups and happy
              adventurers.
            </p>
            <ImageGallery />
          </div>
        </section>

        <section className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16">
          <GoogleAd />
        </section>

        {/* Location Section */}
        <section className="bg-white py-10 sm:py-12 shadow-inner">
          <LocateUs />
        </section>

        <section className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 mb-10 sm:mb-16">
          <GoogleAd />
        </section>
      </main>

      {/* Footer */}
      <Footer />
      {/* <TravelingObjects /> */}
    </>
  );
}