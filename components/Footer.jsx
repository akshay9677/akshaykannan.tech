import { Text } from "ak-palette";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center py-3">
      <Text className="text-sm dark:text-gray-400">
        {new Date().getFullYear()} © Akshay Kannan
      </Text>
      <Text className="pt-3 text-sm flex items-center justify-center lg:justify-start xl:justify-start dark:text-white mb-2">
        <a
          href="https://www.linkedin.com/in/akshay-kannan-49964617a"
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 text-2xl pointer icon-social dark:text-gray-400"
        >
          <i className="fab fa-linkedin"></i>
        </a>
        <a
          href="https://www.instagram.com/_akshay_kannan_/"
          target="_blank"
          rel="noopener noreferrer"
          className="pr-5 text-2xl pointer icon-social dark:text-gray-400"
        >
          <i className="fab fa-instagram"></i>
        </a>
        <a
          href="http://twitter.com/_akshay_kannan_"
          target="_blank"
          rel="noopener noreferrer"
          className="pr-5 text-2xl pointer icon-social dark:text-gray-400"
        >
          <i className="fab fa-twitter"></i>
        </a>
        <a
          href="https://github.com/akshay9677"
          target="_blank"
          rel="noopener noreferrer"
          className="pr-5 text-2xl pointer icon-social dark:text-gray-400"
        >
          <i className="fab fa-github"></i>
        </a>
      </Text>
    </footer>
  );
};

export default Footer;
