"use client";

import "./globals.css";
import { GeistSans } from "geist/font/sans";
import { useState } from "react";
import { ThemeProvider } from "@/hooks/useTheme";
import MainLayout from "@/components/layout/MainLayout";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isDark, setIsDark] = useState(true);
  return (
    <html lang="en" id="palette-root" className={`${GeistSans.className}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta property="og:image" content="<generated>" />
        <meta property="og:image:type" content="<generated>" />
        <meta property="og:image:width" content="<generated>" />
        <meta property="og:image:height" content="<generated>" />

        <meta name="twitter:image" content="<generated>" />
        <meta name="twitter:image:type" content="<generated>" />
        <meta name="twitter:image:width" content="<generated>" />
        <meta name="twitter:image:height" content="<generated>" />
        <meta name="twitter:site" content="@_akshay_kannan_" />
        <meta name="twitter:title" content="Akshay Kannan" />
        <meta
          name="twitter:description"
          content="Personal portfolio of Akshay Kannan | Frontend Engineer"
        />
      </head>
      <ThemeProvider>
        <MainLayout>{children}</MainLayout>
      </ThemeProvider>
    </html>
  );
}
