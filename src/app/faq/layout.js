export const metadata = {
  metadataBase: new URL("https://naturenestcamping.com"),
  title: "FAQ | Camping Rental & Trips in Sri Lanka | Nature Nest",
  description:
    "Answers about camping gear rental in Sri Lanka, bookings, delivery areas, beach & mountain trips, and travel tips for USA & Europe visitors—Nature Nest Camping.",
  keywords: [
    "camping gear rental Sri Lanka FAQ",
    "tent rental Sri Lanka",
    "camping in Sri Lanka",
    "Nature Nest Camping",
    "budget camping packages Sri Lanka",
  ],
  alternates: {
    canonical: "https://naturenestcamping.com/faq",
  },
  openGraph: {
    title: "Camping Rental FAQ | Nature Nest Camping Sri Lanka",
    description:
      "Common questions about renting tents and gear, trips, and support in Sri Lanka.",
    url: "https://naturenestcamping.com/faq",
    siteName: "Nature Nest Camping",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Camping FAQ Sri Lanka | Nature Nest",
    description: "Rental & trip questions answered.",
  },
  robots: { index: true, follow: true },
};

export default function FaqLayout({ children }) {
  return children;
}
