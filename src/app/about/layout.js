export const metadata = {
  metadataBase: new URL("https://naturenestcamping.com"),
  title: "About Us | Camping Gear Hire in Sri Lanka | Nature Nest",
  description:
    "Learn about Nature Nest Camping—trusted camping gear rental in southern Sri Lanka for USA & Europe travelers, beach & hill-country adventures, and local support.",
  keywords: [
    "Nature Nest Camping",
    "camping gear rental Sri Lanka",
    "camping in Sri Lanka",
    "tent rental Sri Lanka",
    "south coast camping Sri Lanka",
  ],
  alternates: {
    canonical: "https://naturenestcamping.com/about",
  },
  openGraph: {
    title: "About Nature Nest Camping | Sri Lanka Gear Rental",
    description:
      "Who we are and how we help travelers rent quality camping equipment in Sri Lanka.",
    url: "https://naturenestcamping.com/about",
    siteName: "Nature Nest Camping",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Nature Nest Camping",
    description: "Camping gear rental team serving southern Sri Lanka.",
  },
  robots: { index: true, follow: true },
};

export default function AboutLayout({ children }) {
  return children;
}
