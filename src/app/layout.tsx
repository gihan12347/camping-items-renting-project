import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const sans = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const mono = JetBrains_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://naturenestcamping.com"),
  applicationName: "Nature Nest Camping",
  category: "Travel",

  title: {
    default:
      "Camping in Sri Lanka | Tent & Outdoor Gear Rental | Nature Nest",
    template: "%s | Nature Nest Camping",
  },

  description:
    "Camping in Sri Lanka: rent tents, stoves & outdoor gear in southern Sri Lanka (Galle, Mirissa, Dickwella). Budget camping packages, river & beach trips—gear for USA & Europe travelers.",

  keywords: [
    "camping in Sri Lanka",
    "Sri Lanka camping",
    "river camping Sri Lanka",
    "beach camping Sri Lanka",
    "budget camping packages Sri Lanka",
    "camping gear rental Sri Lanka",
    "tent rental Sri Lanka",
    "outdoor gear rental Sri Lanka",
    "camping equipment hire Sri Lanka",
    "Nature Nest Camping",
    "nature nest camping",
    "camp tent for rent Sri Lanka",
    "south coast Sri Lanka camping",
    "hill country camping Sri Lanka",
    "USA travelers camping Sri Lanka",
    "Europe travelers Sri Lanka camping",
    "camping tent rentals",
    "outdoor gear rental",
    "eco camping gear",
  ],

  alternates: {
    canonical: "https://naturenestcamping.com/",
    languages: {
      "en-US": "https://naturenestcamping.com/",
      "en-GB": "https://naturenestcamping.com/",
      "en-LK": "https://naturenestcamping.com/",
    },
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
    title:
      "Camping in Sri Lanka | Tent & Gear Rental | Nature Nest Camping",
    description:
      "Rent camping tents and outdoor gear in Sri Lanka—south coast & hill country. Budget-friendly packages for international travelers.",
    siteName: "Nature Nest Camping",
    locale: "en_US",
    localeAlternate: ["en_GB", "en_LK"],
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
    title: "Camping in Sri Lanka | Gear Rental | Nature Nest",
    description:
      "Tent & camping gear rental in Sri Lanka for beach, river & hill-country trips. Serving USA & Europe travelers.",
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
    <html lang="en" className="overflow-x-hidden">
      <body
        className={`${sans.variable} ${mono.variable} font-sans antialiased bg-white text-neutral-900 min-h-dvh overflow-x-hidden selection:bg-emerald-200/60 selection:text-emerald-950`}
      >
        {/* AdSense loader once in <body>; `id` avoids duplicate injection by Next.js */}
        <Script
          id="adsbygoogle-js"
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2010341405700903"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />

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