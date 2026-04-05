import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: 'swap',
  preload: true,
});

export const metadata: Metadata = {
  title: {
    template: '%s | Airbnb Assistants',
    default: 'Airbnb Assistants - Professional Property Management & Automation Tools',
  },
  description: "Scale your Airbnb business with intelligent automation, smart listing tools, and world-class guest support. The ultimate STR assistant platform.",
  metadataBase: new URL('https://airbnb-assistants.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Airbnb Assistants',
    description: 'Scale your Airbnb business with intelligent automation.',
    url: 'https://airbnb-assistants.vercel.app',
    siteName: 'Airbnb Assistants',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Airbnb Assistants',
    description: 'Scale your Airbnb business with intelligent automation.',
  },
  robots: {
    index: true,
    follow: true,
  },
  appleWebApp: {
    title: 'Airbnb Assistants',
    statusBarStyle: 'default',
    capable: true,
  },
};

export const viewport = {
  themeColor: '#ED3C6A',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} font-sans h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        {/* Preconnect to Google Fonts domains — eliminates the 962ms DNS+TCP overhead */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="" suppressHydrationWarning>
        <Navbar />
        <main className="min-h-full flex flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
