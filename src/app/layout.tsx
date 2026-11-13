import type { Metadata, Viewport } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/common/WhatsAppButton";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0A192F",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://themonkpowerindia.com"),
  title: {
    default: "The Monk Power India | Premium Industrial PVC & Polymer Piping Systems",
    template: "%s | The Monk Power India",
  },
  description:
    "Leading Indian manufacturer of high-precision PVC Suction Hoses, UPVC Plumbing & Pressure Pipes, Fire-Retardant Electrical Conduits, Agricultural Irrigation Pipes, and Borewell Casing Pipes.",
  keywords: [
    "PVC pipe manufacturer India",
    "UPVC plumbing pipes",
    "suction hose pipes",
    "fire retardant electrical conduits",
    "agricultural irrigation pipes",
    "borewell casing pipes",
    "polymer pipes India",
    "The Monk Power India",
  ],
  authors: [{ name: "The Monk Power India" }],
  creator: "The Monk Power India",
  publisher: "The Monk Power India",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  icons: {
    icon: "/images/logo.png",
    apple: "/images/logo.png",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://themonkpowerindia.com",
    siteName: "The Monk Power India",
    title: "The Monk Power India | Premium Industrial PVC & Polymer Piping Systems",
    description:
      "Engineering reliable fluid flow and resilient electrical protection. Explore certified UPVC pipes, agricultural irrigation systems, and industrial hoses.",
    images: [
      {
        url: "/images/hero/hero-1.jpg",
        width: 1200,
        height: 630,
        alt: "The Monk Power India Industrial Piping",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Monk Power India | Premium Industrial PVC Pipes",
    description:
      "Engineering reliable fluid flow and resilient electrical protection across India.",
    images: ["/images/hero/hero-1.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full scroll-smooth">
      <body className="min-h-full flex flex-col bg-white text-slate-900 antialiased font-sans">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
