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
  title: {
    default: "Nature Nest Camping | Camping Tent Rentals & Outdoor Gear in Sri Lanka",
    template: "%s | Nature Nest Camping",
  },

  description:
    "Nature Nest Camping offers premium camping tent rentals, sleeping bags for rent, canopy tents, and complete outdoor gear packages in Sri Lanka. Book high-quality, affordable camp gear near you and start your next adventure with Nature Nest.",

  keywords: [
    "nature nest",
    "nature nest camping",
    "naturenest",
    "camp tent for rent",
    "camping tent rentals",
    "camping nest",
    "camp gear near me",
    "sleeping bags for rent",
    "canopy tent for sale near me",
    "camping gear rental Sri Lanka",
    "outdoor gear rental",
    "camping equipment Sri Lanka",
    "Nature Nest outdoor gear",
    "Sri Lanka camping rentals",
  ],

  alternates: {
    canonical: "https://naturenestcamping.com/",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    type: "website",
    url: "https://naturenestcamping.com/",
    title: "Nature Nest Camping | Tents & Outdoor Gear Rentals in Sri Lanka",
    description:
      "Rent high-quality tents, camping gear, canopy tents, and sleeping bags from Nature Nest Camping. Your trusted outdoor gear partner in Sri Lanka.",
    siteName: "Nature Nest Camping",
    locale: "en_LK",
    images: [
      {
        url: "https://naturenestcamping.com/og-image-v3.jpg",
        width: 1200,
        height: 630,
        alt: "Nature Nest Camping tents and outdoor gear",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    site: "@naturenestcamping",
    title: "Nature Nest Camping | Rent Camping Tents & Gear in Sri Lanka",
    description:
      "Planning a camping trip? Nature Nest Camping offers tent rentals, canopy tents, sleeping bags, and complete outdoor gear packages.",
    images: ["https://naturenestcamping.com/og-image-v3.jpg"],
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
        
        {/* Google AdSense (Auto Ads enabled) */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2010341405700903"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />

        {/* ✅ Optional: JSON-LD Structured Data for Business */}
        <Script id="structured-data" type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Nature’s Nest Camping",
            url: "https://naturenestcamping.com/",
            logo: "https://naturenestcamping.com/images/logo.png",
            description:
              "Rent high-quality camping gear and explore nature in Sri Lanka with ease.",
            sameAs: [
              "https://web.facebook.com/profile.php?id=61563870370550"
            ],
            address: {
              "@type": "PostalAddress",
              addressCountry: "LK",
            },
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