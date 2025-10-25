import { ShieldCheck, ScrollText, Info, Users, Check } from "lucide-react";
import ContactAndSupport from "../components/contact-support.js";

export default function TermsAndConditions() {
  const sections = [
    {
      icon: ShieldCheck,
      title: "Rental Agreement",
      color: "green",
      items: [
        "All rentals require a valid form of ID for verification",
        "Rental duration begins from the time of pickup or delivery",
        "All items must be returned by the agreed return date",
        "Extension of the rental period must be requested in advance"
      ]
    },
    {
      icon: ScrollText,
      title: "Damage, Loss & Deposits",
      color: "orange",
      items: [
        "A refundable security deposit may be required for certain items",
        "Customers are responsible for damages, loss, or theft during the rental period",
        "Deposits will be refunded after item inspection and approval",
        "Normal wear and tear will not be charged"
      ]
    },
    {
      icon: Info,
      title: "Cancellations & Refunds",
      color: "green",
      items: [
        "Cancellations made 24 hours before pickup are eligible for a full refund",
        "Late cancellations may incur a small administrative fee",
        "Refunds are processed within 3–5 business days"
      ]
    },
    {
      icon: Users,
      title: "Customer Responsibilities",
      color: "orange",
      items: [
        "Use the rented items responsibly and for their intended purpose only",
        "Clean items before returning them (unless otherwise specified)",
        "Report any damages or missing parts as soon as possible",
        "Respect return times to avoid late fees"
      ]
    }
  ];

  const getColorClasses = (color) => {
    if (color === "green") {
      return {
        border: "border-green-100 hover:border-green-300",
        gradient: "from-green-500 to-emerald-600",
        text: "text-green-700",
        accent: "bg-gradient-to-r from-green-500 to-emerald-500",
        checkBg: "from-green-100 to-emerald-100",
        checkHover: "group-hover/item:from-green-500 group-hover/item:to-emerald-500",
        checkIcon: "text-green-600"
      };
    }
    return {
      border: "border-orange-100 hover:border-orange-300",
      gradient: "from-orange-500 to-amber-600",
      text: "text-orange-700",
      accent: "bg-gradient-to-r from-orange-500 to-amber-500",
      checkBg: "from-orange-100 to-amber-100",
      checkHover: "group-hover/item:from-orange-500 group-hover/item:to-amber-500",
      checkIcon: "text-orange-600"
    };
  };

  return (
    <section className="relative py-20 px-4 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-emerald-50 to-orange-50"></div>

      {/* Decorative elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-orange-300/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-green-300/20 rounded-full blur-3xl"></div>

      <div className="relative max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r from-green-100 to-orange-100 rounded-full mb-4">
            <span className="text-sm font-semibold text-green-800">
              Please Read Carefully
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-700 via-emerald-600 to-orange-600 bg-clip-text text-transparent mb-4">
            Terms & Conditions
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            These terms ensure a fair, safe, and enjoyable rental experience for all our customers
          </p>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-6">
          {sections.map((section, index) => {
            const colors = getColorClasses(section.color);
            const Icon = section.icon;
            
            return (
              <div
                key={index}
                className={`group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 ${colors.border} overflow-hidden`}
              >
                {/* Gradient accent line */}
                <div className={`absolute top-0 left-0 right-0 h-1.5 ${colors.accent}`}></div>

                {/* Icon Header */}
                <div className="flex items-start gap-4 mb-6">
                  <div className="relative flex-shrink-0">
                    <div className={`absolute inset-0 bg-gradient-to-br ${colors.gradient} rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity`}></div>
                    <div className={`relative bg-gradient-to-br ${colors.gradient} p-4 rounded-2xl shadow-lg`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                  </div>
                  <h3 className={`text-xl font-bold ${colors.text} leading-tight pt-2`}>
                    {section.title}
                  </h3>
                </div>

                {/* Items with custom checkmarks */}
                <div className="space-y-3">
                  {section.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-start gap-3 group/item">
                      <div className={`flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br ${colors.checkBg} flex items-center justify-center mt-0.5 ${colors.checkHover} transition-all duration-300`}>
                        <Check className={`w-4 h-4 ${colors.checkIcon} group-hover/item:text-white transition-colors`} />
                      </div>
                      <span className="text-gray-600 leading-relaxed group-hover/item:text-gray-800 transition-colors">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Important Notice Banner */}
        <div className="mt-12 relative bg-gradient-to-r from-green-100 via-emerald-100 to-orange-100 rounded-3xl p-8 shadow-lg border-2 border-green-200 overflow-hidden">
          {/* Decorative background pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 right-0 w-64 h-64 bg-green-600 rounded-full -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-600 rounded-full translate-y-1/2 -translate-x-1/2"></div>
          </div>

          <div className="relative flex flex-col md:flex-row items-center gap-6">
            <div className="flex-shrink-0">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-orange-400 rounded-full blur-xl opacity-40"></div>
                <div className="relative bg-gradient-to-br from-green-500 via-emerald-500 to-orange-500 p-5 rounded-full shadow-xl">
                  <Info className="w-10 h-10 text-white" />
                </div>
              </div>
            </div>
            
            <div className="text-center md:text-left">
              <h4 className="text-2xl font-bold text-gray-800 mb-2">
                Agreement & Acceptance
              </h4>
              <p className="text-gray-700 text-lg leading-relaxed">
                By renting from <span className="font-semibold text-green-700">Nature's Nest</span>, you agree to these Terms & Conditions.
                For any questions or clarifications, please contact our support team.
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