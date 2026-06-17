import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "zynkk | Launch Your Career with Guaranteed Internships",
  description: "Zynkk connects you with verified, industry-leading remote internships. Opt in today to build your portfolio, get mentorship, and earn professional certification.",
  keywords: ["internships", "remote internships", "student internships", "zynkk", "career development", "tech internships"],
  authors: [{ name: "zynkk Team" }],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: "cover",
};

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SmoothScroll from "./components/SmoothScroll";
import InternshipNotification from "./components/InternshipNotification";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#050508] text-[#f8fafc] selection:bg-cyan-500/30 selection:text-cyan-200">
        <SmoothScroll>
          <div id="grid-transition-overlay" className="fixed top-0 left-0 w-full h-[100vh] z-[9999] pointer-events-none flex overflow-hidden">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="grid-column flex-1 h-full bg-[#050508]"
                style={{ transform: "translateY(-100%)" }}
              />
            ))}
          </div>
          <Navbar />
          {children}
          <Footer />
          <InternshipNotification />
        </SmoothScroll>
      </body>
    </html>
  );
}
