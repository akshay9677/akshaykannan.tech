import { Text } from "ak-palette";

const Footer = () => {
  return (
    <footer
      className="flex flex-col items-center py-3"
      style={{ color: "#888" }}
    >
      <div>{new Date().getFullYear()} © Akshay Kannan</div>
      <Text className="pt-3 flex items-center justify-center lg:justify-start xl:justify-start dark:text-white mb-2">
        <a
          href="https://www.linkedin.com/in/akshay-kannan-49964617a"
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 text-2xl pointer icon-social"
        >
          <i className="fab fa-linkedin"></i>
        </a>
        <a
          href="https://www.instagram.com/_akshay_kannan_/"
          target="_blank"
          rel="noopener noreferrer"
          className="pr-5 text-2xl pointer icon-social"
        >
          <i className="fab fa-instagram"></i>
        </a>
        <a
          href="http://twitter.com/_akshay_kannan_"
          target="_blank"
          rel="noopener noreferrer"
          className="pr-5 text-2xl pointer icon-social"
        >
          <i className="fab fa-twitter"></i>
        </a>
        <a
          href="https://github.com/akshay9677"
          target="_blank"
          rel="noopener noreferrer"
          className="pr-5 text-2xl pointer icon-social"
        >
          <i className="fab fa-github"></i>
        </a>
      </Text>
    </footer>
  );
};

export default Footer;
