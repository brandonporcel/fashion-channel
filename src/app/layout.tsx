import type { Metadata } from "next";
import { Outfit, Geist_Mono } from "next/font/google";
import "./globals.css";

const outfitSans = Outfit({
  variable: "--font-outfit-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fashion Channel",
  description: "Exploring the world of fashion",
  authors: { name: "Brandon Porcel", url: "https://github.com/brandonporcel?" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://fashion-channel.vercel.app/",
    title: "Fashion Channel",
    description: "Exploring the world of fashion",
    siteName: "Fashion Channel",
    images: [
      {
        url: "https://fashion-channel.vercel.app/og.png",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fashion Channel",
    description: "Exploring the world of fashion",
    images: [
      {
        url: "https://keep-code.vercel.app/og.png",
        width: 1200,
        height: 630,
      },
    ],
  },
  icons: [
    {
      type: "favicon",
      url: "favicon.ico",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${outfitSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
