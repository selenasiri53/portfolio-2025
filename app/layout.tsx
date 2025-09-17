import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Poppins } from "next/font/google";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-poppins",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Selena Siri Portfolio",
  description:
    "I believe a digital presence can change the trajectory of a company's success and look forward to supporting businesses to showcase what they do best.",
  openGraph: {
    title: "Selena Siri Portfolio",
    description:
      "I believe a digital presence can change the trajectory of a company's success and look forward to supporting businesses to showcase what they do best.",
    url: "https://portfolio-2025-awss.vercel.app",
    siteName: "Selena Siri Portfolio",
    images: [
      {
        url: "https://portfolio-2025-awss.vercel.app/appPhotos/portfolio-cover.png", // <-- your thumbnail here
        width: 1200,
        height: 630,
        alt: "Selena Siri Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Selena Siri Portfolio",
    description:
      "I believe a digital presence can change the trajectory of a company's success and look forward to supporting businesses to showcase what they do best.",
    images: "https://portfolio-2025-awss.vercel.app/appPhotos/portfolio-cover.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} font-sans`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
