import BlogShell from "../components/BlogShell.js";

export const metadata = {
  metadataBase: new URL("https://naturenestcamping.com"),
  title:
    "Sri Lanka Camping Guide for USA & Europe Travelers | Beach & Mountains | Nature Nest Camping",
  description:
    "Discover Sri Lanka’s best beach and mountain camping areas for travelers from the USA and Europe: south coast, hill country, and how to rent camping gear in Sri Lanka. Plan tent rental, outdoor equipment hire, and a compact island adventure.",
  keywords: [
    "Sri Lanka camping USA travelers",
    "Sri Lanka camping Europe",
    "Sri Lanka beach camping",
    "Sri Lanka mountain camping",
    "Ella camping Sri Lanka",
    "south coast Sri Lanka camping",
    "camping gear rental Sri Lanka",
    "rent camping tent online",
    "outdoor camping equipment hire",
    "camping gear USA travel",
    "best camping tents for beginners",
    "camping in Sri Lanka for tourists",
    "tent rental Sri Lanka",
    "Nuwara Eliya camping",
    "Nature Nest Camping",
  ],
  alternates: {
    canonical: "https://naturenestcamping.com/blogs",
  },
  openGraph: {
    title:
      "Sri Lanka’s Beautiful Camping Areas | Guide for USA & Europe | Nature Nest Camping",
    description:
      "Beach and hill-country camping in Sri Lanka—why US and European travelers love it, where to go, and how to rent quality outdoor gear on the island.",
    url: "https://naturenestcamping.com/blogs",
    siteName: "Nature Nest Camping",
    locale: "en_US",
    localeAlternate: ["en_GB", "en_DE", "en_FR"],
    type: "article",
    images: [
      {
        url: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=1200&h=630&fit=crop&q=80",
        width: 1200,
        height: 630,
        alt: "Tropical beach and palms—Sri Lanka coastal camping inspiration",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sri Lanka Camping | USA & Europe Traveler Guide",
    description:
      "Beach + mountain camping areas, flights from the US & EU, and gear rental in Sri Lanka.",
  },
  robots: { index: true, follow: true },
};

export default function BlogsLayout({ children }) {
  return <BlogShell>{children}</BlogShell>;
}
