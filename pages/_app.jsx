import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BackgroundGradient from "../components/BackgroundGradient";
import "uno.css";
import "./_app.scss";
import { createTheme, NextUIProvider } from "@nextui-org/react";
import { useState } from "react";
import { DefaultSeo } from "next-seo";
import seoConfig from "../next-seo.config";

const darkTheme = createTheme({
  type: "dark",
});

const lighTheme = createTheme({
  type: "light",
});

function MyApp({ Component, pageProps }) {
  const [isDark, setDark] = useState(false);
  return (
    <div className="theme-transition overflow-hidden min-h-screen font-sans bg-white	dark:bg-[#010001] text-gray-900	dark:text-[#bbb] relative">
      <Head>
        <title>Akshay Kannan</title>
        <link rel="icon" href="/Akshay.png" />
        <link
          href="https://fonts.googleapis.com/css?family=Oxygen"
          rel="stylesheet"
        />
      </Head>
      <DefaultSeo {...seoConfig}></DefaultSeo>
      <NextUIProvider theme={isDark ? darkTheme : lighTheme}>
        <Header blog={true} onDarkChange={(val) => setDark(val)} />
        <Component {...pageProps} />
        <BackgroundGradient />
        <Footer />
      </NextUIProvider>
    </div>
  );
}

export default MyApp;
