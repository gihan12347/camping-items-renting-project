"use client";
import NavBar from "../components/navbar.js";
import ImageGallery from "../components/gallery.js";
import Footer from "../components/footer.js";
import Banner from "../components/banner.js";

export default function Home() {
  return (
    <>
      {/* Navigation Bar */}
      <NavBar activeLink="Destinations" />

      {/* Main Wrapper */}
      <main className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-gray-100 pt-20">
        {/* Banner Section */}
        <div className="mb-10 sm:mb-16">
          <Banner />
        </div>

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
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}
