const title = "Akshay K";
const url = "https://akshaykannan.tech";

const SeoConfig = {
  title,
  description: "Software Engineer at Facilio | Frontend Engineer",
  canonical: url,
  openGraph: {
    type: "website",
    locale: "en_IE",
    url,
    title,
    images: [
      {
        url: "https://akshaykannan.tech/ogimg.png",
        alt: title,
        width: 1024,
        height: 1024,
      },
    ],
  },
  twitter: {
    handle: "@_akshay_kannan_",
    site: "@_akshay_kannan_",
    cardType: "summary_large_image",
  },
};

export default SeoConfig;
