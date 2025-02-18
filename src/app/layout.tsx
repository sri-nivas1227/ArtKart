import type { Metadata } from "next";
import localFont from "next/font/local";
import { Delius } from "next/font/google";
import { Finger_Paint, Itim } from "next/font/google";

import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const waterLily = localFont({
  src: "./fonts/waterlily.woff2",
  variable: "--font-water-lily",
  weight: "100 900",
});
const itim = Itim({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-itim",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
const delius = Delius({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-delius",
});
const fingerPaint = Finger_Paint({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-finger-paint",
});
export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${delius.variable} ${fingerPaint.variable} ${waterLily.variable} ${itim.variable} font-delius antialiased bg-[#eed] h-screen`}
      >
        {/* <Image src={logo} alt="logo" className="hover:bg-red-50 hover:motion-preset-pop" /> */}
        {children}
      </body>
    </html>
  );
}
