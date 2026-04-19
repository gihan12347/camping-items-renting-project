export const metadata = {
  metadataBase: new URL("https://naturenestcamping.com"),
  title: "Terms of Service | Nature Nest Camping Sri Lanka",
  description:
    "Terms of service for Nature Nest Camping website and camping gear rental in Sri Lanka—rental conditions, use of site, and policies for travelers.",
  keywords: [
    "Nature Nest Camping terms",
    "camping gear rental Sri Lanka terms",
  ],
  alternates: {
    canonical: "https://naturenestcamping.com/terms",
  },
  openGraph: {
    title: "Terms of Service | Nature Nest Camping",
    url: "https://naturenestcamping.com/terms",
    siteName: "Nature Nest Camping",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function TermsLayout({ children }) {
  return children;
}
