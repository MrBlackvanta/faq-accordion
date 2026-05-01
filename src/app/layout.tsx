import Footer from "@/components/layout/footer";
import type { Metadata } from "next";
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${workSans.variable} antialiased`}>
      <body className="flex min-h-dvh w-full flex-col items-center justify-center bg-white sm:bg-stone-100 sm:px-19">
        {children}
        <Footer />
      </body>
    </html>
  );
}
