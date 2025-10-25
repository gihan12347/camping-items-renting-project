"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import AlertModal from "./alert.js";
import { WhatsAppNumber, WhatsAppMessage } from "./util.js";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Gear Rentals", href: "/gear-rental" },
  { name: "Destinations", href: "/destinations" },
  { name: "About Us", href: "/about" },
];

const Navbar = ({ activeLink = "Home" }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [showCartModal, setShowCartModal] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [showInvalidDateAlert, setShowInvalidDateAlert] = useState(false);

  useEffect(() => {
    setMounted(true);
    const cart = JSON.parse(localStorage.getItem("item-in-cart") || "[]");
    setCartItems(cart);

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleRemoveItem = (index) => {
    const updatedCart = cartItems.filter((_, i) => i !== index);
    setCartItems(updatedCart);
    localStorage.setItem("item-in-cart", JSON.stringify(updatedCart));
  };

  const getTotalPrice = () => {
    const totalPrice = cartItems.reduce(
      (total, item) => total + (item.pricePerDay || 0),
      0
    );
    if (getDaysCount() === 0) return totalPrice;
    return totalPrice * getDaysCount();
  };

  const getTodayDate = () => {
    return new Date().toISOString().split("T")[0];
  };

  const getDaysCount = () => {
    if (!startDate || !endDate) return 0;
    if (new Date(endDate) < new Date(startDate)) {
      setShowInvalidDateAlert(true);
      return 0;
    }

    const start = new Date(startDate);
    const end = new Date(endDate);
    return Math.max(1, Math.ceil((end - start) / (1000 * 60 * 60 * 24)) + 1);
  };

  const handleWhatsAppClick = (e) => {
    e.preventDefault();

    if (!startDate || !endDate) {
      setShowAlert(true);
      return;
    }

    let msg = `${WhatsAppMessage}\n\n`;
    msg += `Rental Period: ${startDate} to ${endDate} for the (${getDaysCount()} days)\n\n`;
    msg += "Items:\n";
    cartItems.forEach((item, index) => {
      msg += `${index + 1}. ${item.name || "Product"} - LKR ${(
        item.pricePerDay || 0
      ).toFixed(2)} per day\n`;
    });
    msg += `\nSubtotal: LKR ${getTotalPrice().toFixed(2)}`;

    const encodedMsg = encodeURIComponent(msg);
    const url = `https://wa.me/${WhatsAppNumber}?text=${encodedMsg}`;

    setShowCartModal(false);

    localStorage.removeItem("item-in-cart");
    setCartItems([]);
    window.open(url, "_blank");
  };

  const handleWhatsAppChatClick = () => {
    const message = encodeURIComponent(
      "Hi! I'd like to inquire about your services."
    );
    const url = `https://wa.me/${WhatsAppNumber}?text=${message}`;
    window.open(url, "_blank");
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-gradient-to-r from-emerald-900/95 via-green-900/95 to-teal-900/95 backdrop-blur-md shadow-2xl"
            : "bg-gradient-to-r from-emerald-900/90 via-green-900/90 to-teal-900/90 backdrop-blur-sm"
        }`}
      >
        {/* Top accent line */}
        <div className="h-1 bg-gradient-to-r from-amber-400 via-orange-400 to-amber-500"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-24">
            {/* Logo Section with Enhanced Design */}
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative">
                {/* Animated glow effect */}
                <div className="absolute inset-0 bg-amber-400/20 rounded-full blur-xl group-hover:bg-amber-400/40 transition-all duration-300"></div>
                <div className="relative w-16 h-16 lg:w-20 lg:h-20 transform group-hover:scale-110 transition-transform duration-300">
                  <img
                    src="images/logo.png"
                    alt="Nature's Nest Logo"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl lg:text-3xl font-bold tracking-wider text-white drop-shadow-lg">
                  Nature's Nest
                </span>
                <span className="text-xs lg:text-sm text-amber-300 font-medium tracking-widest uppercase">
                  Experience the Excitement
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navLinks.map((link, index) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative px-4 py-2 text-base font-semibold transition-all duration-200 group ${
                    activeLink === link.name
                      ? "text-amber-300"
                      : "text-gray-100 hover:text-amber-300"
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <span className="relative z-10">{link.name}</span>
                  <div
                    className={`absolute inset-0 bg-white/5 rounded-lg transition-transform duration-200 ${
                      activeLink === link.name
                        ? "scale-100"
                        : "scale-0 group-hover:scale-100"
                    }`}
                  ></div>
                  <div
                    className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-gradient-to-r from-amber-400 to-orange-500 transition-all duration-300 ${
                      activeLink === link.name
                        ? "w-3/4"
                        : "w-0 group-hover:w-3/4"
                    }`}
                  ></div>
                </Link>
              ))}
            </nav>

            {/* Right Side Actions */}
            <div className="flex items-center space-x-3">
              {/* WhatsApp Chat Button - Desktop Only */}
              <button
                onClick={handleWhatsAppChatClick}
                className="hidden lg:flex relative items-center justify-center w-11 h-11 text-white bg-green-600 hover:bg-green-700 rounded-full transition-all duration-200 group shadow-lg hover:shadow-xl transform hover:scale-110"
                aria-label="Chat on WhatsApp"
              >
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                {/* Pulse effect */}
                <span className="absolute inset-0 rounded-full bg-green-400 opacity-0 group-hover:opacity-30 group-hover:animate-ping"></span>
              </button>

              {/* Cart with Badge - Opens Modal */}
              <button
                onClick={() => setShowCartModal(true)}
                className="relative flex items-center justify-center w-10 h-10 text-gray-200 hover:text-amber-300 hover:bg-white/10 rounded-full transition-all duration-200 group"
                aria-label="Shopping Cart"
              >
                <svg
                  className="h-5 w-5 sm:h-6 sm:w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                {cartItems.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center shadow-lg animate-pulse">
                    {mounted ? cartItems.length : 0}
                  </span>
                )}
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden flex items-center justify-center w-10 h-10 text-gray-200 hover:text-amber-300 hover:bg-white/10 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-amber-400"
                aria-expanded={isOpen}
                aria-label="Toggle menu"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {isOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu with Animation */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="px-4 pt-2 pb-4 space-y-1 bg-gradient-to-b from-green-900/95 to-emerald-900/95 backdrop-blur-md border-t border-white/10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 rounded-lg text-base font-semibold transition-all duration-200 border-l-4 ${
                  activeLink === link.href
                    ? "text-amber-300 bg-white/10 border-amber-400"
                    : "text-gray-200 hover:text-amber-300 hover:bg-white/10 border-transparent hover:border-amber-400"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </header>

      {/* Cart Modal */}
      {showCartModal && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
            onClick={() => setShowCartModal(false)}
          ></div>

          {/* Modal Panel */}
          <div className="absolute right-0 top-0 h-full w-full max-w-md">
            <div className="h-full flex flex-col bg-gradient-to-b from-emerald-900 via-green-900 to-teal-900 shadow-2xl">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-white/10">
                <div className="flex items-center space-x-3">
                  <div className="bg-gradient-to-br from-amber-400 to-orange-500 p-2 rounded-full">
                    <svg
                      className="h-6 w-6 text-green-900"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-white">Your Cart</h2>
                    <p className="text-sm text-amber-300">
                      {cartItems.length}{" "}
                      {cartItems.length === 1 ? "item" : "items"}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setShowCartModal(false)}
                  className="text-gray-300 hover:text-amber-300 hover:bg-white/10 p-2 rounded-full transition-all duration-200"
                  aria-label="Close cart"
                >
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              {/* Cart Items */}
              <div className="flex-1 overflow-y-auto p-6 space-y-4">
                {/* Rental Period Section */}
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-amber-400/30 space-y-3">
                  <div className="flex items-center space-x-2 mb-2">
                    <svg
                      className="h-5 w-5 text-amber-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    <h3 className="text-white font-semibold">Rental Period</h3>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs text-gray-300 mb-1">
                        Start Date
                      </label>
                      <input
                        type="date"
                        value={startDate}
                        min={getTodayDate()}
                        max={endDate}
                        onChange={(e) => setStartDate(e.target.value)}
                        className="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-gray-300 mb-1">
                        End Date
                      </label>
                      <input
                        type="date"
                        value={endDate}
                        min={startDate || getTodayDate()}
                        onChange={(e) => setEndDate(e.target.value)}
                        className="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t border-white/10">
                    <span className="text-sm text-gray-300">
                      Total Duration:
                    </span>
                    <span className="text-amber-300 font-semibold">
                      {getDaysCount()} {getDaysCount() === 1 ? "day" : "days"}
                    </span>
                  </div>
                </div>
                {cartItems.length === 0 ? (
                  <div className="flex flex-col items-center justify-center h-full text-center">
                    <div className="bg-white/5 p-8 rounded-full mb-4">
                      <svg
                        className="h-16 w-16 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                        />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      Your cart is empty
                    </h3>
                    <p className="text-gray-400 mb-6">
                      Add some items to get started!
                    </p>
                    <Link
                      href="/"
                      onClick={() => setShowCartModal(false)}
                      className="bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-500 hover:to-orange-600 text-green-900 py-3 px-8 rounded-full font-bold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
                    >
                      Browse Rentals
                    </Link>
                  </div>
                ) : (
                  cartItems.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-4 bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10 hover:border-amber-400/50 transition-all duration-200"
                    >
                      {/* Item Image */}
                      <div className="flex-shrink-0 w-20 h-20 bg-gradient-to-br from-amber-400/20 to-orange-500/20 rounded-lg flex items-center justify-center overflow-hidden">
                        {item.imageUrl ? (
                          <img
                            src={item.imageUrl}
                            alt={item.name}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <svg
                            className="h-10 w-10 text-amber-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                            />
                          </svg>
                        )}
                      </div>

                      {/* Item Details */}
                      <div className="flex-1 min-w-0">
                        <h4 className="text-white font-semibold truncate">
                          {item.name || "Product"}
                        </h4>
                        <p className="text-amber-300 text-sm">
                          LKR {(item.pricePerDay || 0).toFixed(2)}
                        </p>
                        <p className="text-gray-400 text-xs">Qty: 1</p>
                      </div>

                      {/* Remove Button */}
                      <button
                        onClick={() => handleRemoveItem(index)}
                        className="text-red-400 hover:text-red-300 hover:bg-red-500/10 p-2 rounded-lg transition-all duration-200"
                        aria-label="Remove item"
                      >
                        <svg
                          className="h-5 w-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                          />
                        </svg>
                      </button>
                    </div>
                  ))
                )}
              </div>

              {/* Footer with Total and Checkout */}
              {cartItems.length > 0 && (
                <div className="border-t border-white/10 p-6 space-y-4 bg-gradient-to-b from-transparent to-black/20">
                  {/* Subtotal */}
                  <div className="flex items-center justify-between text-lg">
                    <span className="text-gray-300 font-medium">Subtotal:</span>
                    <span className="text-amber-300 font-bold text-xl">
                      LKR {getTotalPrice().toFixed(2)}
                    </span>
                  </div>

                  {/* Action Buttons */}
                  <div className="space-y-3">
                    <button
                      onClick={handleWhatsAppClick}
                      className="block w-full bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-500 hover:to-orange-600 text-green-900 py-4 px-6 rounded-full font-bold text-center shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
                    >
                      Proceed to Checkout
                    </button>
                    <button
                      onClick={() => setShowCartModal(false)}
                      className="block w-full bg-white/10 hover:bg-white/20 text-white py-3 px-6 rounded-full font-semibold text-center border border-white/20 hover:border-amber-400/50 transition-all duration-200"
                    >
                      Continue Shopping
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
      <AlertModal
        show={showAlert}
        onClose={() => setShowAlert(false)}
        title="Missing Dates"
        message="Please select both start and end dates for the rental period before continuing."
      />
      <AlertModal
        show={showInvalidDateAlert}
        onClose={() => setShowInvalidDateAlert(false)}
        title="Invalid Dates"
        message="End date should be comes"
      />
    </>
  );
};

export default Navbar;
