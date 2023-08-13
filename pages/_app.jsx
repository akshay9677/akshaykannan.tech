import Head from "next/head";
import "./_app.scss";
import "./tailwind.css";
import { useCallback, useState } from "react";
import { DefaultSeo } from "next-seo";
import seoConfig from "../next-seo.config";
import DockBar from "../src/components/DockBar";
import BackgroundGradient from "../src/components/BackgroundGradient";

function MyApp({ Component, pageProps }) {
  const [isDark, setDark] = useState(true);
  const toggleTheme = useCallback(() => {
    setDark(!isDark);
  }, [isDark]);
  return (
    <div
      className={`theme-transition overflow-hidden min-h-screen relative ${
        isDark ? "theme-dark" : "theme-light"
      } bg-primary text-content-primary`}
    >
      <Head>
        <title>Akshay Kannan</title>
        <link rel="icon" href="/Akshay.png" />
        <link
          href="https://fonts.googleapis.com/css?family=Oxygen"
          rel="stylesheet"
        />
      </Head>
      <DefaultSeo {...seoConfig}></DefaultSeo>
      <Component {...pageProps} isDark={isDark} />
      <DockBar toggleTheme={toggleTheme} />
      <BackgroundGradient />
    </div>
  );
}

export default MyApp;
