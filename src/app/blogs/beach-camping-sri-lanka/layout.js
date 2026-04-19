export const metadata = {
  metadataBase: new URL("https://naturenestcamping.com"),
  title:
    "Beach Camping Sri Lanka | South Coast & Coast Tips | Nature Nest",
  description:
    "Beach camping in Sri Lanka: south & east coast seasons, Mirissa to Tangalle, eco-camps, and budget tent rental for USA & Europe travelers—coastal camping done right.",
  keywords: [
    "beach camping Sri Lanka",
    "camping in Sri Lanka",
    "south coast Sri Lanka camping",
    "Mirissa camping",
    "river camping Sri Lanka",
    "budget camping packages Sri Lanka",
    "tent rental Sri Lanka",
    "Nature Nest Camping",
  ],
  alternates: {
    canonical: "https://naturenestcamping.com/blogs/beach-camping-sri-lanka",
  },
  openGraph: {
    title: "Beach Camping Sri Lanka | Coast Guide | Nature Nest Camping",
    description:
      "Plan Sri Lanka beach camping: seasons, eco-camps, south coast stops, and gear rental for international travelers.",
    url: "https://naturenestcamping.com/blogs/beach-camping-sri-lanka",
    siteName: "Nature Nest Camping",
    type: "article",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Beach Camping Sri Lanka | Nature Nest",
    description:
      "South & east coast camping tips, seasons, and tent rental in Sri Lanka.",
  },
  robots: { index: true, follow: true },
};

export default function BeachCampingLayout({ children }) {
  return children;
}
