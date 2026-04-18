"use client";
import NavBar from "../components/navbar.js";
import LocateUs from "../components/location.js";
import Footer from "../components/footer.js";
import Banner from "../components/banner.js";
import GoogleAd from "../components/adsence.js";

export default function Home() {
  return (
    <>
      {/* Navigation Bar */}
      <NavBar activeLink="About Us" />

      <main className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-gray-100 pt-0">
        <div className="bg-gradient-to-r from-emerald-800 to-emerald-600 pt-[calc(6.25rem+env(safe-area-inset-top,0px))]">
          <div className="mb-8 sm:mb-12 md:mb-16">
            <Banner />
          </div>
        </div>

        {/* Location Section */}
        <section className="bg-white py-10 sm:py-12 shadow-inner">
          <LocateUs />
        </section>

        <section className="mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8 mt-8 sm:mt-12 mb-4">
          <GoogleAd />
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}
