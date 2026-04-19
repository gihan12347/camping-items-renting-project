import BlogShell from "../components/BlogShell.js";

export const metadata = {
  metadataBase: new URL("https://naturenestcamping.com"),
  title:
    "Sri Lanka Camping Guide | Beach, Hills & Gear | Nature Nest",
  description:
    "Camping in Sri Lanka: beach, river & mountain areas, budget tent rental, and gear hire for USA & Europe travelers—south coast, Ella, Mirissa, and trip planning tips.",
  keywords: [
    "camping in Sri Lanka",
    "Sri Lanka camping guide",
    "river camping Sri Lanka",
    "beach camping Sri Lanka",
    "budget camping packages Sri Lanka",
    "Sri Lanka mountain camping",
    "Ella camping Sri Lanka",
    "south coast Sri Lanka camping",
    "camping gear rental Sri Lanka",
    "tent rental Sri Lanka",
    "camping in Sri Lanka for tourists",
    "Nature Nest Camping",
  ],
  alternates: {
    canonical: "https://naturenestcamping.com/blogs",
  },
  openGraph: {
    title:
      "Sri Lanka Camping Guide | Beach, Hills & Rentals | Nature Nest",
    description:
      "Where to go camping in Sri Lanka, beach vs hill country, budget gear rental, and routes for USA & Europe travelers.",
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
    title: "Sri Lanka Camping Guide | Nature Nest",
    description:
      "Beach, river & hill camping in Sri Lanka—routes, seasons, and tent rental tips for international travelers.",
  },
  robots: { index: true, follow: true },
};

export default function BlogsLayout({ children }) {
  return <BlogShell>{children}</BlogShell>;
}
