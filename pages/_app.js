import "tailwindcss/tailwind.css";
import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./_app.scss";

function MyApp({ Component, pageProps }) {
  return (
    <div className="theme-transition overflow-hidden min-h-screen font-sans bg-gray-100	dark:bg-[#0D1117] text-gray-900	dark:text-white ">
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
        <Header blog={true} />
      </div>
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export default MyApp;
