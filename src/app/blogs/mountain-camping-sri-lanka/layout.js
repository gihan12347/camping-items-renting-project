export const metadata = {
  metadataBase: new URL("https://naturenestcamping.com"),
  title:
    "Mountain Camping Sri Lanka | Ella & Hill Country | Nature Nest",
  description:
    "Hill-country camping in Sri Lanka: Ella, Nuwara Eliya, tea-country weather, licensed sites, and gear for cool nights—guides for USA & Europe travelers planning mountain trips.",
  keywords: [
    "mountain camping Sri Lanka",
    "Ella camping Sri Lanka",
    "camping in Sri Lanka",
    "hill country camping Sri Lanka",
    "Nuwara Eliya camping",
    "budget camping packages Sri Lanka",
    "camping gear rental Sri Lanka",
    "Nature Nest Camping",
  ],
  alternates: {
    canonical: "https://naturenestcamping.com/blogs/mountain-camping-sri-lanka",
  },
  openGraph: {
    title: "Mountain & Hill Camping Sri Lanka | Nature Nest Camping",
    description:
      "Tea country, Ella & cool-night camping in Sri Lanka—permits, gear, and routes for travelers.",
    url: "https://naturenestcamping.com/blogs/mountain-camping-sri-lanka",
    siteName: "Nature Nest Camping",
    type: "article",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hill Country Camping Sri Lanka | Nature Nest",
    description:
      "Ella, Nuwara Eliya & Knuckles area camping tips and gear rental.",
  },
  robots: { index: true, follow: true },
};

export default function MountainCampingLayout({ children }) {
  return children;
}
