export const metadata = {
  metadataBase: new URL("https://naturenestcamping.com"),
  title: "Delivery Areas | Camping Gear Sri Lanka | Nature Nest",
  description:
    "Delivery and service areas for Nature Nest Camping gear rental in southern Sri Lanka—where we support campers near Galle, Mirissa, Dickwella & surrounding routes.",
  keywords: [
    "camping gear delivery Sri Lanka",
    "camping gear rental Sri Lanka",
    "south coast Sri Lanka",
    "Nature Nest Camping",
  ],
  alternates: {
    canonical: "https://naturenestcamping.com/delever",
  },
  openGraph: {
    title: "Delivery Areas | Nature Nest Camping",
    description:
      "Where we deliver and support camping gear rentals in southern Sri Lanka.",
    url: "https://naturenestcamping.com/delever",
    siteName: "Nature Nest Camping",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function DeleverLayout({ children }) {
  return children;
}
