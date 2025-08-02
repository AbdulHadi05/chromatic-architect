import type React from "react";
import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "BN haus - Modern Architectural Design",
  description:
    "Innovative architectural design studio specializing in modern, sustainable, and futuristic building solutions.",
  keywords:
    "architecture, design, modern, sustainable, futuristic, building, construction",
  authors: [{ name: "BN haus" }],
  openGraph: {
    title: "BN haus - Modern Architectural Design",
    description:
      "Innovative architectural design studio specializing in modern, sustainable, and futuristic building solutions.",
    url: "https://bnhaus.vercel.app",
    siteName: "BN haus",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "BN haus",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BN haus - Modern Architectural Design",
    description:
      "Innovative architectural design studio specializing in modern, sustainable, and futuristic building solutions.",
    images: ["/og-image.jpg"],
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
  icons: {
    icon: [
      { url: "/favicon/favicon.ico" },
      {
        url: "/favicon/favicon-32x32.png",
        type: "image/png",
        sizes: "32x32",
      },
      {
        url: "/favicon/favicon-16x16.png",
        type: "image/png",
        sizes: "16x16",
      },
    ],
    apple: "/favicon/apple-touch-icon.png",
    other: {
      rel: "manifest",
      url: "/favicon/site.webmanifest",
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        style={{
          fontFamily:
            "'Century Gothic', 'Futura', 'Avant Garde', Arial, sans-serif",
        }}
      >
        <div className="min-h-screen bg-background text-foreground">
          <Navbar />
          <main>{children}</main>
          <Footer />
          <Toaster />
        </div>
      </body>
    </html>
  );
}
