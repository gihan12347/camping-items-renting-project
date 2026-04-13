import HomeClient from "./components/home.js";

export const metadata = {
  title:
    "Nature Nest Camping | Camping Equipment for Rent in Sri Lanka, USA & Europe",
  description:
    "Nature Nest Camping (Nature Nest / Natures Nest) offers camping equipment for rent, camp tents for rent, and outdoor essentials for travelers in Sri Lanka, the USA, and Europe.",
  keywords: [
    "nature nest",
    "nature nest camping",
    "naturenest",
    "nest camping",
    "nature and nest",
    "camping stove near me",
    "natures nest",
    "camping equipment for rent",
    "nature's nest",
    "camp tent for rent",
  ],
  alternates: {
    canonical: "https://naturenestcamping.com/",
  },
  openGraph: {
    title:
      "Nature Nest Camping | Camping Equipment for Rent in Sri Lanka, USA & Europe",
    description:
      "Book camping gear, camp tents, and outdoor equipment from Nature Nest Camping for adventures across Sri Lanka and international travelers from the USA and Europe.",
    url: "https://naturenestcamping.com",
    siteName: "Nature Nest Camping",
    locale: "en_US",
    localeAlternate: ["en_GB", "en_LK"],
    type: "website",
    images: [
      {
        url: "https://naturenestcamping.com/og-image-v5.png",
        width: 1200,
        height: 630,
        alt: "Nature Nest Camping gear and tents",
      },
    ],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function Page() {
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Nature Nest Camping",
    alternateName: ["Nature Nest", "Naturenest", "Nature's Nest", "Natures Nest"],
    url: "https://naturenestcamping.com/",
    inLanguage: ["en-US", "en-GB", "en-LK"],
    potentialAction: {
      "@type": "SearchAction",
      target: "https://naturenestcamping.com/gear-rental",
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <HomeClient />
    </>
  );
}
