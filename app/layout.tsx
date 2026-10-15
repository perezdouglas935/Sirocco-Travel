import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Karla, Newsreader } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingCTA } from "@/components/FloatingCTA";
import { BackToTop } from "@/components/BackToTop";
import "./globals.css";

const display = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const body = Karla({
  variable: "--font-karla",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "SIROCCO | Beyond First Class",
  description:
    "Warm concierge travel for people who do not book trips. Private jet hops, yacht weeks, Michelin trails, and membership tiers under one desk.",
  openGraph: {
    title: "SIROCCO",
    description:
      "Concierge travel for people who do not book trips. One desk, one standard, every detail arranged before you ask.",
    url: "https://sirocco.example",
    siteName: "SIROCCO",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <Navbar />
        <main id="main">{children}</main>
        <Footer />
        <FloatingCTA />
        <BackToTop />
      </body>
    </html>
  );
}
