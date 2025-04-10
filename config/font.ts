import { Borel, Inter, Space_Mono } from "next/font/google";

export const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const borel = Borel({
  variable: "--font-borel",
  subsets: ["latin"],
  weight: ["400"],
});
