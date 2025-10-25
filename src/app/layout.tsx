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
  // ✅ Basic SEO
  title: {
    default: "Nature’s Nest Camping | Outdoor Gear Rentals & Adventures",
    template: "%s | Nature’s Nest Camping",
  },
  description:
    "Rent high-quality camping gear and experience unforgettable outdoor adventures across Sri Lanka with Nature’s Nest Camping.",
  keywords: [
    "camping gear rental",
    "outdoor adventures",
    "Sri Lanka camping",
    "tent rental",
    "Nature’s Nest Camping",
  ],
  alternates: {
    canonical: "https://naturenestcamping.com/",
  },
  robots: {
    index: true,
    follow: true,
  },

  // ✅ Open Graph for social media (Facebook, LinkedIn, etc.)
  openGraph: {
    type: "website",
    url: "https://naturenestcamping.com/",
    title: "Nature’s Nest Camping | Outdoor Gear Rentals & Adventures",
    description:
      "Rent camping gear and explore breathtaking outdoor destinations across Sri Lanka.",
    siteName: "Nature’s Nest Camping",
    locale: "en_LK",
    images: [
      {
        url: "https://naturenestcamping.com/images/four-person-camping-tent.png",
        width: 1200,
        height: 630,
        alt: "Nature’s Nest Camping – Adventure Awaits",
      },
    ],
  },

  // ✅ Twitter Card for sharing
  twitter: {
    card: "summary_large_image",
    site: "@naturenestcamping",
    title: "Nature’s Nest Camping | Outdoor Gear Rentals & Adventures",
    description:
      "Rent top-quality camping gear and explore Sri Lanka’s best outdoor experiences.",
    images: ["https://naturenestcamping.com/images/four-person-camping-tent.png"],
  },

  // ✅ Favicon and icons
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