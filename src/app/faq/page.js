"use client";
import NavBar from "../components/navbar.js";
import FAQ from "../components/faq.js";
import Footer from "../components/footer.js";
import Banner from "../components/banner.js";

export default function Home() {
  return (
    <>
      {/* Navigation Bar */}
      <NavBar activeLink="" />

      {/* Main Wrapper */}
      <main className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-gray-100 pt-20">
        {/* Banner Section */}
        <div className="mb-10 sm:mb-16">
          <Banner />
        </div>
        {/* Location Section */}
        <section className="bg-white py-12 shadow-inner">
          <FAQ />
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}
