import type React from "react";
import type { Metadata } from "next";

import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";

import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { Navbar1 } from "@/components/navbar/Navbar";

export const metadata: Metadata = {
  title: "Portfolio | Amitkys",
  description: "Portfolio site | amitkys",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="en">
      <body
        className={`${GeistSans.variable} ${GeistMono.variable} font-sans antialiased dark:text-foreground/70 text-foreground mx-2`}
      >
        <Navbar1 />
        <ThemeProvider
          disableTransitionOnChange
          enableSystem
          attribute="class"
          defaultTheme="system"
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
