import HomeClient from "./components/home.js";

export const metadata = {
  title:
    "Camping in Sri Lanka | Rent Tents & Outdoor Gear | Nature Nest",
  description:
    "Camping in Sri Lanka: rent tents, stoves & gear in Galle, Mirissa & south coast. Budget camping packages, beach & river trips—outdoor hire for USA & Europe travelers.",
  keywords: [
    "camping in Sri Lanka",
    "Sri Lanka camping",
    "river camping Sri Lanka",
    "beach camping Sri Lanka",
    "budget camping packages Sri Lanka",
    "tent rental Sri Lanka",
    "camping gear rental Sri Lanka",
    "Nature Nest Camping",
    "camp tent for rent",
    "south coast camping Sri Lanka",
  ],
  alternates: {
    canonical: "https://naturenestcamping.com/",
  },
  openGraph: {
    title:
      "Camping in Sri Lanka | Tent & Gear Rental | Nature Nest Camping",
    description:
      "Rent quality camping equipment in Sri Lanka—south coast & hill country. Ideal for USA & Europe travelers planning beach, river & mountain trips.",
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
    description:
      "Camping gear rental in Sri Lanka—tents, stoves & outdoor equipment for beach, river & hill-country trips.",
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
