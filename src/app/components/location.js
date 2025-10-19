"use client";
import { useEffect, useRef } from 'react';
import { MapPin, Navigation, Phone, Mail, Clock } from 'lucide-react';

export default function LocateUs({
  businessName = "Camping Rent.lk",
  address = "1, 1 Gangarama Rd, Piliyandala 10300",
  lat = 6.8014,
  lng = 79.9223,
  zoom = 15,
  phone = "+94 11 234 5678",
  email = "info@campingrent.lk",
  hours = "Mon - Fri: 9:00 AM - 6:00 PM"
}) {
  const mapRef = useRef(null);

  useEffect(() => {
    const loadGoogleMaps = () => {
      if (window.google) {
        initializeMap();
        return;
      }

      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY`;
      script.async = true;
      script.defer = true;
      script.onload = initializeMap;
      document.head.appendChild(script);
    };

    const initializeMap = () => {
      if (!mapRef.current || !window.google) return;

      const position = { lat, lng };

      const map = new window.google.maps.Map(mapRef.current, {
        center: position,
        zoom: zoom,
        mapTypeControl: true,
        streetViewControl: true,
        fullscreenControl: true,
        zoomControl: true,
        styles: [
          {
            featureType: "poi",
            elementType: "labels",
            stylers: [{ visibility: "simplified" }]
          }
        ]
      });

      const marker = new window.google.maps.Marker({
        position: position,
        map: map,
        title: businessName,
        animation: window.google.maps.Animation.DROP,
        icon: {
          path: window.google.maps.SymbolPath.CIRCLE,
          scale: 12,
          fillColor: "#EF4444",
          fillOpacity: 1,
          strokeColor: "#FFFFFF",
          strokeWeight: 3,
        }
      });

      const infoWindow = new window.google.maps.InfoWindow({
        content: `
          <div style="padding: 12px; max-width: 220px;">
            <h3 style="margin: 0 0 8px 0; font-size: 16px; font-weight: 700; color: #1f2937;">
              ${businessName}
            </h3>
            <p style="margin: 0; font-size: 14px; color: #6b7280; line-height: 1.5;">
              ${address}
            </p>
          </div>
        `
      });

      marker.addListener('click', () => {
        infoWindow.open(map, marker);
      });

      infoWindow.open(map, marker);
    };

    loadGoogleMaps();
  }, [businessName, address, lat, lng, zoom]);

  const openInGoogleMaps = () => {
    window.open(`https://www.google.com/maps/search/?api=1&query=${lat},${lng}`, '_blank');
  };

  return (
    <div className="w-full bg-gradient-to-br from-rose-50 via-rose-100 to-orange-50 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-500 rounded-full mb-4 shadow-lg">
            <MapPin className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-800 mb-4">
            Locate Us
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-orange-400 to-red-500 mx-auto rounded-full shadow-md"></div>
          <p className="mt-6 text-gray-600 text-lg max-w-2xl mx-auto">
            Visit us at our location or get in touch. We're here to help you with all your camping needs.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Cards */}
          <div className="lg:col-span-1 space-y-6">
            {/* Address Card */}
            <div className="bg-white rounded-2xl shadow-xl p-6 transform hover:scale-105 transition-transform duration-300">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-red-500 to-orange-500 rounded-xl flex items-center justify-center shadow-lg">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 text-lg mb-2">Our Location</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{address}</p>
                </div>
              </div>
            </div>

            {/* Phone Card */}
            <div className="bg-white rounded-2xl shadow-xl p-6 transform hover:scale-105 transition-transform duration-300">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 text-lg mb-2">Phone</h3>
                  <a href={`tel:${phone}`} className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                    {phone}
                  </a>
                </div>
              </div>
            </div>

            {/* Email Card */}
            <div className="bg-white rounded-2xl shadow-xl p-6 transform hover:scale-105 transition-transform duration-300">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 text-lg mb-2">Email</h3>
                  <a href={`mailto:${email}`} className="text-purple-600 hover:text-purple-700 text-sm font-medium break-all">
                    {email}
                  </a>
                </div>
              </div>
            </div>

            {/* Hours Card */}
            <div className="bg-white rounded-2xl shadow-xl p-6 transform hover:scale-105 transition-transform duration-300">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center shadow-lg">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 text-lg mb-2">Business Hours</h3>
                  <p className="text-gray-600 text-sm">{hours}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Map Container */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden h-full">
              <div ref={mapRef} className="w-full h-[300px] md:h-[400px] lg:h-[450px]"></div>
            </div>
          </div>
        </div>

        {/* Get Directions Button */}
        <div className="mt-12 text-center">
          <button
            onClick={openInGoogleMaps}
            className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold text-lg rounded-full hover:from-orange-600 hover:to-red-600 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105"
          >
            <Navigation className="w-6 h-6 group-hover:rotate-12 transition-transform" />
            Get Directions
          </button>
          <p className="mt-4 text-gray-600 text-sm">
            Click to open in Google Maps and start navigation
          </p>
        </div>
      </div>
    </div>
  );
}