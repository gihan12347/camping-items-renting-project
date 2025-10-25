import { Truck, MapPin, RefreshCcw, Check } from "lucide-react";
import ContactAndSupport from "../components/contact-support.js";

export default function DeliveryAndReturn() {
  return (
    <section className="relative py-20 px-4 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-emerald-50 to-orange-50"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-0 w-72 h-72 bg-orange-300/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-green-300/20 rounded-full blur-3xl"></div>
      
      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r from-green-100 to-orange-100 rounded-full mb-4">
            <span className="text-sm font-semibold text-green-800">Hassle-Free Service</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-700 via-emerald-600 to-orange-600 bg-clip-text text-transparent mb-4">
            Delivery & Return Information
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Convenient delivery and flexible return options for your camping adventures
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Delivery Section */}
          <div className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-green-100 hover:border-green-300 overflow-hidden">
            {/* Gradient accent */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-green-500 to-emerald-500"></div>
            
            {/* Icon with gradient background */}
            <div className="flex items-center gap-4 mb-6">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity"></div>
                <div className="relative bg-gradient-to-br from-green-500 to-emerald-600 p-4 rounded-2xl shadow-lg">
                  <Truck className="w-8 h-8 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-green-700 to-emerald-600 bg-clip-text text-transparent">
                Delivery Options
              </h3>
            </div>
            
            <p className="text-gray-700 mb-6 text-lg leading-relaxed">
              We currently deliver within <span className="font-bold text-green-700">Matara</span> and nearby towns
              such as <span className="font-bold text-green-700">Weligama</span>, <span className="font-bold text-green-700">Dikwella</span>,{" "}
              <span className="font-bold text-green-700">Hakmana</span>, and <span className="font-bold text-green-700">Kamburugamuwa</span>.
            </p>
            
            <div className="space-y-3">
              {[
                "Same-day delivery available for Matara area",
                "Next-day delivery for nearby towns",
                "Delivery charges vary by distance (from Rs. 200)",
                "Free delivery for orders over Rs. 5,000"
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3 group/item">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-green-100 to-emerald-100 flex items-center justify-center mt-0.5 group-hover/item:from-green-500 group-hover/item:to-emerald-500 transition-all duration-300">
                    <Check className="w-4 h-4 text-green-600 group-hover/item:text-white transition-colors" />
                  </div>
                  <span className="text-gray-600 group-hover/item:text-gray-800 transition-colors">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Return Section */}
          <div className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-orange-100 hover:border-orange-300 overflow-hidden">
            {/* Gradient accent */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-orange-500 to-amber-500"></div>
            
            {/* Icon with gradient background */}
            <div className="flex items-center gap-4 mb-6">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-amber-500 rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity"></div>
                <div className="relative bg-gradient-to-br from-orange-500 to-amber-600 p-4 rounded-2xl shadow-lg">
                  <RefreshCcw className="w-8 h-8 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
                Return Policy
              </h3>
            </div>
            
            <p className="text-gray-700 mb-6 text-lg leading-relaxed">
              Returning your camping gear is easy and flexible. Choose the option
              that works best for you:
            </p>
            
            <div className="space-y-3">
              {[
                "Free in-store return at our Matara pickup point",
                "We can pick up items from your address (pickup fee applies)",
                "Please return items clean and undamaged",
                "Late returns may incur a small daily charge"
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3 group/item">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-orange-100 to-amber-100 flex items-center justify-center mt-0.5 group-hover/item:from-orange-500 group-hover/item:to-amber-500 transition-all duration-300">
                    <Check className="w-4 h-4 text-orange-600 group-hover/item:text-white transition-colors" />
                  </div>
                  <span className="text-gray-600 group-hover/item:text-gray-800 transition-colors">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Service Area Section */}
        <div className="relative bg-gradient-to-r from-green-100 via-emerald-100 to-orange-100 rounded-3xl p-8 shadow-lg border-2 border-green-200 overflow-hidden">
          {/* Decorative background pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 right-0 w-64 h-64 bg-green-600 rounded-full -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-600 rounded-full translate-y-1/2 -translate-x-1/2"></div>
          </div>
          
          <div className="relative flex flex-col md:flex-row items-center justify-center gap-6 text-center md:text-left">
            <div className="flex-shrink-0">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-orange-400 rounded-full blur-xl opacity-40"></div>
                <div className="relative bg-gradient-to-br from-green-500 via-emerald-500 to-orange-500 p-5 rounded-full shadow-xl">
                  <MapPin className="w-10 h-10 text-white" />
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-2xl font-bold text-gray-800 mb-2">Our Service Area</h4>
              <p className="text-gray-700 text-lg">
                <span className="font-semibold text-green-700">Matara</span>, <span className="font-semibold text-green-700">Weligama</span>, <span className="font-semibold text-green-700">Dikwella</span>, <span className="font-semibold text-green-700">Hakmana</span>,
                <span className="font-semibold text-green-700"> Kamburugamuwa</span>, and nearby towns.
              </p>
            </div>
          </div>
        </div>

        {/* Contact CTA */}
         <ContactAndSupport/>       
      </div>
    </section>
  );
}