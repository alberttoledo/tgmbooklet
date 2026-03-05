import type { Metadata } from "next";
import localFont from "next/font/local";
import { Inter, Staatliches } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap"
});

const staatliches = Staatliches({
  variable: "--font-staatliches",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap"
});

const perfectlyNineties = localFont({
  variable: "--font-perfectly-nineties",
  src: [
    { path: "../public/fonts/PerfectlyNineties-Regular.otf", weight: "400", style: "normal" },
    { path: "../public/fonts/PerfectlyNineties-Semibold.otf", weight: "600", style: "normal" },
    { path: "../public/fonts/PerfectlyNineties-Bold.otf", weight: "700", style: "normal" }
  ],
  display: "swap"
});

export const metadata: Metadata = {
  title: "The Great Mystery",
  description: "Philosophy, Brand System & Strategic Roadmap"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${perfectlyNineties.variable} ${staatliches.variable} bg-[#f4efe4] text-[#171513] antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
