import HomeClient from "./components/home.js";

export const metadata = {
  title: "Nature Nest Camping | Rent Camping Gear & Outdoor Essentials",
  description:
    "Discover Nature Nest Camping — your go-to destination for renting high-quality camping gear, tents, sleeping bags, and outdoor essentials. Affordable, eco-friendly, and adventure-ready equipment for your next outdoor getaway.",
  openGraph: {
    title: "Nature Nest Camping | Rent Camping Gear & Outdoor Essentials",
    description:
      "Plan your next outdoor adventure with Nature Nest Camping. Rent premium camping gear and outdoor equipment easily — eco-friendly, affordable, and ready for your next trip.",
    url: "https://naturenestcamping.com",
    siteName: "Nature Nest Camping",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://naturenestcamping.com/og-image-v2.jpg",
        width: 1200,
        height: 630,
        alt: "Nature Nest Camping gear and tents",
      },
    ],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function Page() {
  return <HomeClient />;
}
