import { Text } from "ak-palette";
import Image from "next/image";

function IntroPage() {
  return (
    <div className="flex justify-around rounded-xl overflow-hidden pt-3 pb-8">
      <div className="flex flex-col xl:flex-row lg:flex-row mt-20 text-center lg:text-left xl:text-left justify-between">
        <div className="flex flex-col justify-center  intro-text-container">
          <div className="font-semibold w-full text-4xl">
            Hey, I'm <span className="text-gradient">Akshay</span>
          </div>
          <div className="leading-7 text-md text-gray-500 dark:text-gray-400 pt-5">
            I am a passionate front-end developer & a Javascript enthusiast.
            Working as a core front-end engineer{" "}
            <a
              href="https://www.facilio.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#FF3185" }}
            >
              @Facilio
            </a>
            . Love learning about new technology in the front-end space, I
            sometimes write about those in my blog feel free to check them out.
          </div>
          <Text className="pt-5 flex items-center justify-center lg:justify-start xl:justify-start dark:text-white mb-2">
            <a
              href="https://www.linkedin.com/in/akshay-kannan-49964617a"
              target="_blank"
              rel="noopener noreferrer"
              className="pr-5 pointer icon-social "
            >
              <Image src="/icons/linkedin.svg" width="26px" height="26px" />
            </a>
            <a
              href="https://www.instagram.com/_akshay_kannan_/"
              target="_blank"
              rel="noopener noreferrer"
              className="pr-5 pointer icon-social "
            >
              <Image src="/icons/insta.svg" width="26px" height="26px" />
            </a>
            <a
              href="http://twitter.com/_akshay_kannan_"
              target="_blank"
              rel="noopener noreferrer"
              className="pr-5 pointer icon-social "
            >
              <Image src="/icons/twitter.svg" width="26px" height="26px" />
            </a>
            <a
              href="https://github.com/akshay9677"
              target="_blank"
              rel="noopener noreferrer"
              className="pb-1 pointer icon-social "
            >
              <Image src="/icons/github.svg" width="26px" height="26px" />
            </a>
          </Text>
        </div>
      </div>
    </div>
  );
}

export default IntroPage;
