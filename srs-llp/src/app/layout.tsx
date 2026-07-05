import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: {
    default: "SRS LLP – A House of Plywood | Premium Plywood Solutions",
    template: "%s | SRS LLP",
  },
  description:
    "SRS LLP is a leading plywood manufacturer and supplier offering premium plywood, block boards, flush doors, laminates, veneers, and MDF boards across India.",
  keywords: [
    "plywood",
    "SRS LLP",
    "block board",
    "flush doors",
    "laminates",
    "veneers",
    "MDF board",
    "BWR plywood",
    "marine plywood",
    "particle board",
    "plywood supplier India",
  ],
  openGraph: {
    title: "SRS LLP – A House of Plywood",
    description:
      "Premium quality plywood, laminates, and wood panel products for every project.",
    type: "website",
    locale: "en_IN",
    siteName: "SRS LLP",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
