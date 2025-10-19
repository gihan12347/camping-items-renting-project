import Link from "next/link";
import { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Gear Rentals", href: "/rentals" },
    { name: "Destinations", href: "/destinations" },
    { name: "About Us", href: "/about" },
  ];

  const support = [
    { name: "FAQ", href: "/faq" },
    { name: "Shipping & Returns", href: "/shipping" },
    { name: "Contact Us", href: "/contact" },
    { name: "Terms & Conditions", href: "/terms" },
  ];

  const adventures = [
    { name: "Hiking Trails", href: "/hiking" },
    { name: "Camping Spots", href: "/camping" },
    { name: "Water Sports", href: "/water-sports" },
    { name: "Mountain Climbing", href: "/climbing" },
  ];

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (email) {
      console.log("Newsletter email:", email);
      alert("Thank you for subscribing!");
      setEmail("");
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <footer className="bg-gradient-to-b from-emerald-950 via-green-950 to-black text-gray-300 relative overflow-hidden">
        {/* Decorative background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-64 h-64 bg-amber-400 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-500 rounded-full filter blur-3xl"></div>
        </div>

        {/* Top decorative line */}
        <div className="h-1 bg-gradient-to-r from-amber-400 via-orange-400 to-amber-500"></div>

        {/* Main Footer Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <Link href="/" className="flex items-center space-x-3 mb-6 group">
                <div className="relative">
                  <div className="absolute inset-0 bg-amber-400/20 rounded-full blur-xl group-hover:bg-amber-400/30 transition-all duration-300"></div>
                  <div className="relative w-20 h-20">
                    <img
                      src="images/logo.png"
                      alt="Nature's Nest Logo"
                      className="w-full h-full object-contain drop-shadow-2xl"
                    />
                  </div>
                </div>
              </Link>
              <h3 className="text-2xl font-bold text-white mb-2">Nature's Nest</h3>
              <p className="text-amber-300 text-sm font-medium mb-4 tracking-wide">
                CAMPING
              </p>
              <p className="text-gray-400 mb-6 leading-relaxed text-sm">
                Your ultimate destination for outdoor adventure gear and unforgettable camping experiences in nature.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center space-x-3 text-sm">
                  <div className="w-8 h-8 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="h-4 w-4 text-green-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <span className="text-gray-300">+94 123 456 789</span>
                </div>
                <div className="flex items-center space-x-3 text-sm">
                  <div className="w-8 h-8 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="h-4 w-4 text-green-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <span className="text-gray-300">info@naturesnest.lk</span>
                </div>
                <div className="flex items-start space-x-3 text-sm">
                  <div className="w-8 h-8 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="h-4 w-4 text-green-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <span className="text-gray-300">Negombo, Sri Lanka</span>
                </div>
              </div>

              {/* Social Media Icons */}
              <div className="flex space-x-3">
                <a
                  href="#"
                  className="w-10 h-10 bg-white/5 hover:bg-gradient-to-br hover:from-amber-400 hover:to-orange-500 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:-translate-y-1 group border border-white/10"
                  aria-label="Facebook"
                >
                  <svg className="h-5 w-5 text-gray-400 group-hover:text-green-900 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-white/5 hover:bg-gradient-to-br hover:from-amber-400 hover:to-orange-500 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:-translate-y-1 group border border-white/10"
                  aria-label="Instagram"
                >
                  <svg className="h-5 w-5 text-gray-400 group-hover:text-green-900 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-white/5 hover:bg-gradient-to-br hover:from-amber-400 hover:to-orange-500 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:-translate-y-1 group border border-white/10"
                  aria-label="Twitter"
                >
                  <svg className="h-5 w-5 text-gray-400 group-hover:text-green-900 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-white/5 hover:bg-gradient-to-br hover:from-amber-400 hover:to-orange-500 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:-translate-y-1 group border border-white/10"
                  aria-label="YouTube"
                >
                  <svg className="h-5 w-5 text-gray-400 group-hover:text-green-900 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-white font-bold text-lg mb-6 relative inline-block">
                Quick Links
                <span className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full"></span>
              </h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-amber-300 transition-all duration-200 flex items-center group text-sm"
                    >
                      <span className="w-0 group-hover:w-2 h-0.5 bg-gradient-to-r from-amber-400 to-orange-500 mr-0 group-hover:mr-3 transition-all duration-200 rounded-full"></span>
                      <span className="group-hover:translate-x-1 transition-transform duration-200">{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Adventures */}
            <div>
              <h3 className="text-white font-bold text-lg mb-6 relative inline-block">
                Adventures
                <span className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full"></span>
              </h3>
              <ul className="space-y-3">
                {adventures.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-amber-300 transition-all duration-200 flex items-center group text-sm"
                    >
                      <span className="w-0 group-hover:w-2 h-0.5 bg-gradient-to-r from-amber-400 to-orange-500 mr-0 group-hover:mr-3 transition-all duration-200 rounded-full"></span>
                      <span className="group-hover:translate-x-1 transition-transform duration-200">{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter & Support */}
            <div>
              <h3 className="text-white font-bold text-lg mb-6 relative inline-block">
                Stay Connected
                <span className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full"></span>
              </h3>
              
              {/* Newsletter */}
              <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/10 mb-6 shadow-xl">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center mr-3">
                    <svg className="h-5 w-5 text-green-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-sm">Newsletter</h4>
                    <p className="text-gray-400 text-xs">Join our adventure</p>
                  </div>
                </div>
                <p className="text-gray-400 text-xs mb-3">
                  Get camping tips, gear deals & exclusive updates!
                </p>
                <div className="flex gap-2">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email"
                    className="flex-1 bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-all"
                  />
                  <button
                    onClick={handleNewsletterSubmit}
                    className="bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-500 hover:to-orange-600 text-green-900 px-4 py-2 rounded-lg font-bold transition-all duration-200 hover:shadow-lg hover:scale-105"
                  >
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Support Links */}
              <h4 className="text-white font-semibold text-sm mb-3">Support</h4>
              <ul className="space-y-2">
                {support.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-amber-300 transition-all duration-200 flex items-center group text-xs"
                    >
                      <span className="w-0 group-hover:w-1.5 h-0.5 bg-gradient-to-r from-amber-400 to-orange-500 mr-0 group-hover:mr-2 transition-all duration-200 rounded-full"></span>
                      <span className="group-hover:translate-x-1 transition-transform duration-200">{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Divider with decorative elements */}
          <div className="relative my-12">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/10"></div>
            </div>
            <div className="relative flex justify-center">
              <span className="px-4 bg-gradient-to-r from-amber-400 to-orange-500 text-green-900 text-xs font-bold py-1 rounded-full">
                ⛺ CAMPING ADVENTURE ⛺
              </span>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-gray-400 text-sm text-center md:text-left">
              © {currentYear} <span className="text-amber-300 font-semibold">Nature's Nest</span>. All rights reserved.
              <span className="hidden md:inline"> | Made with </span>
              <span className="text-red-500 mx-1">❤</span>
              <span className="hidden md:inline">for adventurers</span>
            </div>
          </div>

          {/* Tagline */}
          <div className="text-center mt-8 pt-6 border-t border-white/5">
            <p className="text-amber-300 text-sm font-medium italic">
              "Experience the Excitement - Your Adventure Starts Here"
            </p>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-500 hover:from-amber-500 hover:to-orange-600 text-green-900 rounded-full shadow-2xl hover:shadow-amber-500/50 flex items-center justify-center transition-all duration-300 hover:scale-110 z-40 group border-2 border-white/20"
        aria-label="Scroll to top"
      >
        <svg
          className="h-6 w-6 group-hover:-translate-y-1 transition-transform"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={3}
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
      </button>
    </>
  );
};

export default Footer;