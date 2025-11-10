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
    default: "Nature’s Nest Camping | Premium Camping Gear Rentals in Sri Lanka",
    template: "%s | Nature’s Nest Camping",
  },
  description:
    "Discover Sri Lanka’s best camping gear rental service with Nature’s Nest Camping. Rent premium tents, sleeping bags, and outdoor essentials — perfectly packed for your next nature adventure.",
  keywords: [
    "camping gear rental Sri Lanka",
    "outdoor gear rental",
    "tent rental Sri Lanka",
    "camping equipment",
    "Sri Lanka camping",
    "Nature’s Nest Camping",
    "outdoor adventures",
    "eco-friendly camping",
    "camping supplies",
    "hiking gear rental",
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
    title: "Nature’s Nest Camping | Premium Camping Gear Rentals in Sri Lanka",
    description:
      "Experience nature like never before with Nature’s Nest Camping — Sri Lanka’s trusted camping gear rental and adventure partner.",
    siteName: "Nature’s Nest Camping",
    locale: "en_LK",
    images: [
      {
        url: "https://naturenestcamping.com/og-image-v2.jpg",
        width: 1200,
        height: 630,
        alt: "Nature Nest Camping gear and tents",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    site: "@naturenestcamping",
    title: "Nature’s Nest Camping | Rent Camping Gear in Sri Lanka",
    description:
      "Plan your next adventure with ease — rent high-quality camping gear and outdoor essentials from Nature’s Nest Camping.",
    images: [
      "https://naturenestcamping.com/og-image-v2.jpg"
    ],
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