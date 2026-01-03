import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  applicationName: "Nature Nest Camping",

  title: {
    default: "Nature Nest | Camping Gear Rental in Sri Lanka for Travelers",
    template: "%s | Nature Nest Camping",
  },

  description:
    "Nature Nest Camping provides camping tents and outdoor gear rentals in Sri Lanka for tourists from the USA and Europe. Ideal for backpackers, adventurers, and nature lovers.",

  keywords: [
    "nature nest",
    "nature nest camping",
    "camping tent rentals",
    "camping gear rental",
    "outdoor gear rental",
    "tent rental Europe",
    "camping gear rental USA",
    "sleeping bags for rent",
    "canopy tent rental",
    "eco camping gear",
    "Nature Nest outdoor gear",
  ],

  alternates: {
    canonical: "https://naturenestcamping.com/",
  },

  robots: {
    index: true,
    follow: true,
  },

  other: {
    "geo.region": "US, EU, LK",
    "geo.placename": "United States, Europe, Sri Lanka",
    "ICBM": "37.0902, -95.7129",
  },

  openGraph: {
    type: "website",
    url: "https://naturenestcamping.com/",
    title: "Nature Nest Camping | Outdoor Gear & Tent Rentals",
    description:
      "Rent high-quality camping tents, outdoor gear, and accessories from Nature Nest Camping. Available for campers in Europe, the USA, and Sri Lanka.",
    siteName: "Nature Nest Camping",
    locale: "en_US",
    images: [
      {
        url: "https://naturenestcamping.com/og-image-v5.png",
        width: 1200,
        height: 630,
        alt: "Nature Nest Camping tents and outdoor gear",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Nature Nest Camping | Outdoor Gear Rentals",
    description:
      "Looking for camping tents and outdoor gear? Nature Nest Camping provides high-quality rental gear across Europe, the USA, and Sri Lanka.",
    images: ["https://naturenestcamping.com/og-image-v5.png"],
  },

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-05QERYB3BS"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-05QERYB3BS');
          `}
        </Script>

        {/* Google AdSense */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2010341405700903"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />

        {/* Structured Data for Global Business */}
        <Script
          id="structured-data"
          type="application/ld+json"
          strategy="afterInteractive"
        >
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Nature Nest Camping",
            url: "https://naturenestcamping.com/",
            logo: "https://naturenestcamping.com/images/logo.png",
            description:
              "Nature Nest Camping provides camping tents and outdoor gear rentals for adventurers in Europe, the USA, and Sri Lanka.",
            sameAs: [
              "https://web.facebook.com/profile.php?id=61563870370550"
            ],
            areaServed: [
              { "@type": "Country", name: "United States" },
              { "@type": "Continent", name: "Europe" },
              { "@type": "Country", name: "Sri Lanka" }
            ],
            priceRange: "$$",
          })}
        </Script>

        {children}
      </body>
    </html>
  );
}


//Readonly<{
//  children: React.ReactNode;

// A TypeScript type annotation. 
// It says children can be any renderable React
// content (text, elements, fragments, etc.), 
// and Readonly makes the props object immutable inside the function.