import {
  BackgroundPatternDesktopSVG,
  BackgroundPatternMobileSVG,
} from "@/components/icons";
import Footer from "@/components/layout/footer";
import type { Metadata, Viewport } from "next";
import { Work_Sans } from "next/font/google";
import "./globals.css";

const workSans = Work_Sans({
  variable: "--font-work-sans",
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "FAQ Accordion",
  description:
    "Frontend Mentor FAQ Accordion challenge built with Next.js and TypeScript.",
  icons: {
    icon: [{ url: "/favicon.ico" }, { url: "/icon.png", type: "image/png" }],
    apple: [{ url: "/apple-icon.png" }],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#F7F2F8",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${workSans.variable} antialiased`}>
      <body className="bg-light-pink flex min-h-dvh w-full flex-col items-center justify-between">
        <BackgroundPatternMobileSVG
          className="absolute top-0 left-0 sm:hidden"
          aria-hidden="true"
        />
        <BackgroundPatternDesktopSVG
          className="absolute top-0 left-0 hidden sm:block"
          aria-hidden="true"
        />
        {children}
        <Footer />
      </body>
    </html>
  );
}
