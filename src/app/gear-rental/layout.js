export const metadata = {
  metadataBase: new URL("https://naturenestcamping.com"),
  title:
    "Camping Gear Rental Sri Lanka | Tents & Equipment | Nature Nest",
  description:
    "Rent camping tents, stoves & outdoor equipment in southern Sri Lanka. Budget-friendly gear for beach, river & hill-country trips—Galle, Mirissa, Dickwella & beyond.",
  keywords: [
    "camping gear rental Sri Lanka",
    "tent rental Sri Lanka",
    "camping in Sri Lanka",
    "budget camping packages Sri Lanka",
    "outdoor gear rental Sri Lanka",
    "beach camping Sri Lanka",
    "Nature Nest Camping",
  ],
  alternates: {
    canonical: "https://naturenestcamping.com/gear-rental",
  },
  openGraph: {
    title: "Camping Gear Rental Sri Lanka | Nature Nest Camping",
    description:
      "Featured tents and outdoor equipment for rent—south coast pickup, ideal for international travelers.",
    url: "https://naturenestcamping.com/gear-rental",
    siteName: "Nature Nest Camping",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gear Rental Sri Lanka | Nature Nest",
    description:
      "Rent tents & camping equipment for your Sri Lanka adventure.",
  },
  robots: { index: true, follow: true },
};

export default function GearRentalLayout({ children }) {
  return children;
}
