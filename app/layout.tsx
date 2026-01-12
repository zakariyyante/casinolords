import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";
import GclidHandler from "@/components/GclidHandler";

export const revalidate = 0;

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BritWager - UK's Premier Betting Affiliate Platform",
  description: "Discover the best UK betting brands with exclusive bonuses and offers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().toLocaleString("en-GB", { month: "long" });

  return (
    <html lang="en" data-click-id="">
      <body className={inter.className}>
        <GclidHandler />
        <Header />
        <main className="min-h-screen bg-gradient-to-b from-background to-background-light">
          {children}
        </main>
        <Footer currentYear={currentYear} currentMonth={currentMonth} />
        <CookieConsent />
      </body>
    </html>
  );
}
