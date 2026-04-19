export const metadata = {
  metadataBase: new URL("https://naturenestcamping.com"),
  title:
    "Rent Camping Gear Sri Lanka | Tents & Outdoor Kits | Nature Nest",
  description:
    "Rent camping tents and outdoor gear in Sri Lanka: what to book, pickup near Colombo & the south coast, budget bundles for beach & hill-country loops—USA & Europe travelers.",
  keywords: [
    "camping gear rental Sri Lanka",
    "tent rental Sri Lanka",
    "rent camping tent online",
    "camping in Sri Lanka",
    "budget camping packages Sri Lanka",
    "outdoor camping equipment hire Sri Lanka",
    "Nature Nest Camping",
  ],
  alternates: {
    canonical: "https://naturenestcamping.com/blogs/rent-camping-gear-sri-lanka",
  },
  openGraph: {
    title: "Rent Camping Gear in Sri Lanka | Nature Nest Camping",
    description:
      "How to rent tents, stoves & kits in Sri Lanka—pickup, bundles, and trip-matching tips.",
    url: "https://naturenestcamping.com/blogs/rent-camping-gear-sri-lanka",
    siteName: "Nature Nest Camping",
    type: "article",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Camping Gear Rental Sri Lanka | Nature Nest",
    description:
      "Tent & equipment hire for Sri Lanka trips—international traveler guide.",
  },
  robots: { index: true, follow: true },
};

export default function RentGearBlogLayout({ children }) {
  return children;
}
