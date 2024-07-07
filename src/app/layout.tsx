"use client";

import "./globals.css";
import { GeistSans } from "geist/font/sans";
import DockBar from "@/components/layout/DockBar";
import { useState } from "react";
import Header from "@/components/layout/Header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isDark, setIsDark] = useState(true);
  return (
    <html
      lang="en"
      className={`${GeistSans.className} ${
        isDark ? "theme-dark" : "theme-light"
      } bg-container-primary text-content-primary transition-colors overflow-hidden`}
    >
      <head>
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
          content="Personal portfolio of Akshay Kannan"
        />
      </head>
      <body className="relative h-screen w-full">
        <div className="h-screen overflow-scroll pb-20">
          <div className="w-full flex justify-center">
            <Header />
          </div>
          {children}
        </div>
        <DockBar
          isDark={isDark}
          changeTheme={() => setIsDark((prev) => !prev)}
        />
      </body>
    </html>
  );
}
