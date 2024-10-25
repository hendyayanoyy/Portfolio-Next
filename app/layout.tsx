import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import "./globals.css";

const lexend = Lexend({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-lexend",
});

export const metadata: Metadata = {
  title:
    "Portfolio",
  description:
    "Portfolio Hendi Saputra",
};

import Header from "../components/Header";
import Footer from "../components/Footer";

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={lexend.className}>
        {/* Pass the baseUrl to the Header component */}
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
