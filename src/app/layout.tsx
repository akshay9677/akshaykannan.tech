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
