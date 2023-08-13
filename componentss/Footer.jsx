import { Text } from "@nextui-org/react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center py-3">
      <Text h6>{new Date().getFullYear()} © Akshay Kannan</Text>
      <div className="flex justify-center xl:justify-start lg:justify-start mt-2">
        <a
          href="https://www.linkedin.com/in/akshay-kannan-49964617a"
          target="_blank"
          rel="noopener noreferrer"
          className="pr-5 pointer icon-social "
        >
          <Image src="/icons/linkedin.svg" width={25} height={25} />
        </a>
        <a
          href="https://www.instagram.com/_akshay_kannan_/"
          target="_blank"
          rel="noopener noreferrer"
          className="pr-5 pointer icon-social "
        >
          <Image src="/icons/insta.svg" width={25} height={25} />
        </a>
        <a
          href="http://twitter.com/_akshay_kannan_"
          target="_blank"
          rel="noopener noreferrer"
          className="pr-5 pointer icon-social "
        >
          <Image src="/icons/twitter.svg" width={25} height={25} />
        </a>
        <a
          href="https://github.com/akshay9677"
          target="_blank"
          rel="noopener noreferrer"
          className="pb-1 pointer icon-social "
        >
          <Image src="/icons/github.svg" width={25} height={25} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;