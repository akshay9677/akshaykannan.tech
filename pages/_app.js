import "tailwindcss/tailwind.css";
import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BackgroundGradient from "../components/BackgroundGradient";
import "./_app.scss";
import { createTheme, NextUIProvider } from "@nextui-org/react";
import { useState } from "react";

const darkTheme = createTheme({
  type: "dark",
});

const lighTheme = createTheme({
  type: "light",
});

function MyApp({ Component, pageProps }) {
  const [isDark, setDark] = useState(false);
  return (
    <div className="theme-transition overflow-hidden min-h-screen font-sans bg-white	dark:bg-[#010001] text-gray-900	dark:text-white relative">
      <Head>
        <title>Akshay Kannan</title>
        <link rel="icon" href="/Akshay.png" />
        <link
          href="https://fonts.googleapis.com/css?family=Oxygen"
          rel="stylesheet"
        />
      </Head>
      <div
        style={{
          position: "fixed",
          top: "0px",
          right: "1px",
          zIndex: 99,
          width: "100%",
        }}
      >
        <Header blog={true} onDarkChange={(val) => setDark(val)} />
      </div>
      <NextUIProvider theme={isDark ? darkTheme : lighTheme}>
        <Component {...pageProps} />
        <BackgroundGradient />
      </NextUIProvider>
      <Footer />
    </div>
  );
}

export default MyApp;
