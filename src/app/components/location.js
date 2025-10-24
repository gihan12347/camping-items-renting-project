"use client";
import { MapPin, Navigation, Phone, Mail, Clock, Tent } from 'lucide-react';
import { address, lat, lng, phone, email, hours } from "./util.js";

export default function LocateUs() {
  const openInGoogleMaps = () => {
    window.open(`https://www.google.com/maps/place/Nature's+Nest+Camping/@5.9534779,80.563538,17z/data=!3m1!4b1!4m6!3m5!1s0x3ae139003e92ca31:0xae05877071b29bb1!8m2!3d5.9534726!4d80.5661129!16s%2Fg%2F11wwrc5gxc?entry=ttu&g_ep=EgoyMDI1MTAyMC4wIKXMDSoASAFQAw%3D%3D`, '_blank');
  };

  return (
    <div className="w-full relative py-12 px-4">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/get-in-touch-background.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/85 via-green-800/90 to-orange-900/85"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-24 h-24 mb-4">
            <img 
              src="images/logo.png" 
              alt="Nature's Nest Logo"
              className="w-full h-full object-contain drop-shadow-2xl"
            />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2 drop-shadow-lg">Get In Touch</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-orange-300 to-green-400 mx-auto rounded-full shadow-md"></div>
          <p className="mt-4 text-white text-base md:text-lg max-w-2xl mx-auto px-4 drop-shadow-md">
            Ready for your next adventure? Contact us today and let's make your camping experience unforgettable.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Contact Cards */}
          <div className="lg:col-span-1 flex flex-col h-full">
            <div className="space-y-4 flex-1 flex flex-col justify-center">
              {/* Address Card */}
              <div className="bg-white rounded-2xl shadow-xl p-5 transform hover:scale-105 transition-transform duration-300">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-300 rounded-xl flex items-center justify-center shadow-lg">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 text-lg mb-1">Our Location</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{address}</p>
                  </div>
                </div>
              </div>

              {/* Phone Card */}
              <div className="bg-white rounded-2xl shadow-xl p-5 transform hover:scale-105 transition-transform duration-300">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-300 rounded-xl flex items-center justify-center shadow-lg">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 text-lg mb-1">Phone</h3>
                    <a href={`tel:${phone}`} className="text-orange-600 hover:text-orange-700 text-sm font-medium">{phone}</a>
                  </div>
                </div>
              </div>

              {/* Email Card */}
              <div className="bg-white rounded-2xl shadow-xl p-5 transform hover:scale-105 transition-transform duration-300">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-green-400 to-green-300 rounded-xl flex items-center justify-center shadow-lg">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 text-lg mb-1">Email</h3>
                    <a href={`mailto:${email}`} className="text-green-600 hover:text-green-700 text-sm font-medium break-all">{email}</a>
                  </div>
                </div>
              </div>

              {/* Hours Card */}
              <div className="bg-white rounded-2xl shadow-xl p-5 transform hover:scale-105 transition-transform duration-300">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-green-300 to-green-200 rounded-xl flex items-center justify-center shadow-lg">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 text-lg mb-1">Business Hours</h3>
                    <p className="text-gray-600 text-sm">{hours}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Image and Description Section */}
          <div className="lg:col-span-2 flex flex-col space-y-6">
            {/* About Section */}
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-6 md:p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-orange-400 to-green-400 rounded-xl flex items-center justify-center shadow-lg">
                  <Tent className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-800">About Nature's Nest</h3>
              </div>
              <div className="space-y-4 text-gray-700 text-sm md:text-base leading-relaxed">
                <p>
                  Welcome to <span className="font-semibold text-green-600">Nature's Nest</span>, your premier destination for quality camping gear rentals in Sri Lanka. We believe that everyone should have the opportunity to experience the beauty of nature without the burden of expensive equipment purchases.
                </p>
                <p>
                  Our extensive collection includes premium tents, sleeping bags, camping stoves, backpacks, and all the essential equipment you need for an unforgettable outdoor adventure. Whether you're planning a weekend getaway, a family camping trip, or an extended wilderness expedition, we have everything you need.
                </p>
                <p>
                  With years of experience in outdoor recreation, our team carefully selects and maintains each piece of equipment to ensure your safety and comfort. We offer flexible rental periods, competitive pricing, and expert advice to help you choose the right gear for your adventure.
                </p>
                <p className="font-semibold text-orange-600">
                  Start your next adventure with us - because nature is calling, and we have all the gear you need to answer!
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Get Directions Button */}
        <div className="mt-8 text-center">
          <button
            onClick={openInGoogleMaps}
            className="group inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-green-400 to-orange-400 text-white font-bold text-base md:text-lg rounded-full hover:from-green-500 hover:to-orange-500 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105"
          >
            <Navigation className="w-5 h-5 md:w-6 md:h-6 group-hover:rotate-12 transition-transform" />
            Get Directions
          </button>
          <p className="mt-2 text-white drop-shadow-md text-xs md:text-sm px-4">
            Click to open in Google Maps and start navigation
          </p>
        </div>
      </div>
    </div>
  );
}