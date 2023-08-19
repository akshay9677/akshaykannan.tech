import Head from "next/head";
import "./_app.scss";
import "./tailwind.css";
import { useCallback, useEffect, useState } from "react";
import { DefaultSeo } from "next-seo";
import seoConfig from "../next-seo.config";
import DockBar from "../src/components/DockBar";
import BackgroundGradient from "../src/components/BackgroundGradient";

function MyApp({ Component, pageProps }) {
  const [isDark, setDark] = useState(true);
  const toggleTheme = useCallback(() => {
    setDark(!isDark);
  }, [isDark]);
  useEffect(() => {
    if (
      (document || {}).body &&
      !document.body.classList.contains("bg-primary")
    ) {
      document.body.classList.add("bg-primary");
    }
  }, []);
  useEffect(() => {
    if ((document || {}).body) {
      document.body.classList.remove("theme-light");
      document.body.classList.remove("theme-dark");
      if (!isDark) document.body.classList.add("theme-light");
      else document.body.classList.add("theme-dark");
    }
  }, [isDark]);
  return (
    <div
      className={`theme-transition overflow-hidden min-h-screen relative bg-primary text-content-primary`}
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
      <DockBar toggleTheme={toggleTheme} isDark={isDark} />
      <BackgroundGradient />
    </div>
  );
}

export default MyApp;
