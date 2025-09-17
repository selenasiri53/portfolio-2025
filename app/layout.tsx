// app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Poppins } from "next/font/google";
import "./globals.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Fonts
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-poppins",
});

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

// Metadata (title, favicon, OG image, Twitter card)
export const metadata: Metadata = {
  title: "Selena Siri | Web Developer & Creative Technologist",
  description:
    "I help businesses elevate their digital presence through clean, creative, and functional web experiences.",
  // icons: {
  //   icon: "/favicon.ico", // put this file in /public/favicon.ico
  //   apple: "/favicon.png", // optional Apple Touch icon in /public
  // },
  openGraph: {
    title: "Selena Siri | Web Developer & Creative Technologist",
    description:
      "I help businesses elevate their digital presence through clean, creative, and functional web experiences.",
    url: "https://portfolio-2025-awss.vercel.app",
    siteName: "Selena Siri Portfolio",
    images: [
      {
        url: "/appPhotos/portfolio-cover.png", // file inside /public/appPhotos
        width: 1200,
        height: 630,
        alt: "Selena Siri Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Selena Siri | Web Developer & Creative Technologist",
    description:
      "I help businesses elevate their digital presence through clean, creative, and functional web experiences.",
    images: ["/appPhotos/portfolio-cover.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="font-sans">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
