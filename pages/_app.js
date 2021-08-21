import "tailwindcss/tailwind.css";
import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./_app.scss";

function MyApp({ Component, pageProps }) {
  return (
    <div className="theme-transition overflow-hidden min-h-screen font-sans bg-gray-100	dark:bg-black text-gray-900	dark:text-white ">
      <Head>
        <title>Akshay Kannan</title>
        <link rel="icon" href="/Akshay.png" />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/js/all.min.js"></script>
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
