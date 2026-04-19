export const metadata = {
  metadataBase: new URL("https://naturenestcamping.com"),
  title:
    "Camping Destinations Sri Lanka | South Coast & Beyond | Nature Nest",
  description:
    "Explore camping destinations in southern Sri Lanka—beaches, rivers, hills & towns near Galle, Mirissa & Dickwella. Plan routes with gear rental from Nature Nest Camping.",
  keywords: [
    "camping destinations Sri Lanka",
    "camping in Sri Lanka",
    "south coast Sri Lanka",
    "beach camping Sri Lanka",
    "river camping Sri Lanka",
    "Nature Nest Camping",
  ],
  alternates: {
    canonical: "https://naturenestcamping.com/destinations",
  },
  openGraph: {
    title: "Sri Lanka Camping Destinations | Nature Nest Camping",
    description:
      "Where to camp and explore in southern Sri Lanka—ideas for trips with rented gear.",
    url: "https://naturenestcamping.com/destinations",
    siteName: "Nature Nest Camping",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Camping Destinations Sri Lanka | Nature Nest",
    description: "South coast & regional highlights for campers.",
  },
  robots: { index: true, follow: true },
};

export default function DestinationsLayout({ children }) {
  return children;
}
