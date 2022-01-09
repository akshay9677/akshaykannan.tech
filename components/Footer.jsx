import { Text } from "ak-palette";
import Image from "next/image";

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
          className="pr-5 pointer icon-social "
        >
          <Image src="/icons/linkedin.svg" width="25px" height="25px" />
        </a>
        <a
          href="https://www.instagram.com/_akshay_kannan_/"
          target="_blank"
          rel="noopener noreferrer"
          className="pr-5 pointer icon-social "
        >
          <Image src="/icons/insta.svg" width="25px" height="25px" />
        </a>
        <a
          href="http://twitter.com/_akshay_kannan_"
          target="_blank"
          rel="noopener noreferrer"
          className="pr-5 pointer icon-social "
        >
          <Image src="/icons/twitter.svg" width="25px" height="25px" />
        </a>
        <a
          href="https://github.com/akshay9677"
          target="_blank"
          rel="noopener noreferrer"
          className="pb-1 pointer icon-social "
        >
          <Image src="/icons/github.svg" width="25px" height="25px" />
        </a>
      </Text>
    </footer>
  );
};

export default Footer;
