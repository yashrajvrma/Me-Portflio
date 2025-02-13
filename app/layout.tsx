import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Switzer from "next/font/local";
import "./globals.css";

const switzer = Switzer({
  src: [
    {
      path: "../public/assets/fonts/Switzer-Regular.otf",
      weight: "400",
    },
    {
      path: "../public/assets/fonts/Switzer-Medium.otf",
      weight: "500",
    },
    {
      path: "../public/assets/fonts/Switzer-Semibold.otf",
      weight: "600",
    },
    {
      path: "../public/assets/fonts/Switzer-Bold.otf",
      weight: "700",
    },
    {
      path: "../public/assets/fonts/Switzer-Extrabold.otf",
      weight: "800",
    },
  ],
  variable: "--font-switzer",
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
  title: "Yashraj Verma",
  description: "Yashraj Verma- Portfolio Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${switzer.variable} antialiased`}>{children}</body>
    </html>
  );
}
