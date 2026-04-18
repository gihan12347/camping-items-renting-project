"use client";
import NavBar from "../components/navbar.js";
import ImageGallery from "../components/gallery.js";
import Footer from "../components/footer.js";
import Banner from "../components/banner.js";
import GoogleAd from "../components/adsence.js";

export default function Home() {
  return (
    <>
      {/* Navigation Bar */}
      <NavBar activeLink="Destinations" />

      {/* Main Wrapper */}
      <main className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-gray-100 pt-[calc(4rem+1.5vh)] sm:pt-[calc(5rem+2vh)]">
        {/* Banner Section */}
        <div className="mb-8 sm:mb-12 md:mb-16">
          <Banner />
        </div>

        <section className="mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8 mb-10 sm:mb-12">
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

        <section className="mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8 mb-10 sm:mb-12">
          <GoogleAd />
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}
