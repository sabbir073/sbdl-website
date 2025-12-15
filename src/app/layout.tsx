import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { BackToTop } from "@/components/ui/BackToTop";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sinbad Builders & Developers | Quality Real Estate Development",
  description: "Sinbad Builders & Developers (SBD) is a leading real estate development firm delivering quality aspirational developments that encourage great community living in Bangladesh.",
  keywords: ["real estate", "construction", "developers", "Bangladesh", "Dhaka", "property", "residential", "commercial", "Sinbad Builders"],
  authors: [{ name: "Sinbad Builders & Developers" }],
  openGraph: {
    title: "Sinbad Builders & Developers",
    description: "Quality Real Estate Development for Great Community Living",
    url: "https://www.sinbadbdl.com",
    siteName: "Sinbad Builders & Developers",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
      >
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
