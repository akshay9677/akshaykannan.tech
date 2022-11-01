import Image from "next/image";
import { Text } from "@nextui-org/react";

function IntroPage() {
  return (
    <div className="flex justify-around rounded-xl overflow-hidden pb-4">
      <div className="flex flex-col xl:flex-row lg:flex-row mt-20 text-center lg:text-left xl:text-left justify-between">
        <div className="flex flex-col justify-center  intro-text-container">
          <Text h1>
            Hey, I'm <span className="text-gradient">Akshay</span>
          </Text>
          <div className="leading-7 text-md text-gray-500 dark:text-gray-400 pb-5">
            <Text>
              I am a <code>front-end developer</code> & a javascript enthusiast,
              working as a core front-end engineer{" "}
              <a
                href="https://www.facilio.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#FF3185" }}
              >
                @Facilio
              </a>
              . I explore and occasionally write about front-end build tools,
              frameworks and design systems.
            </Text>
          </div>
          <div className="flex justify-center xl:justify-start lg:justify-start">
            <a
              href="https://www.linkedin.com/in/akshay-kannan-49964617a"
              target="_blank"
              rel="noopener noreferrer"
              className="pr-5 pointer icon-social "
            >
              <Image src="/icons/linkedin.svg" width={26} height={26} />
            </a>
            <a
              href="https://www.instagram.com/_akshay_kannan_/"
              target="_blank"
              rel="noopener noreferrer"
              className="pr-5 pointer icon-social "
            >
              <Image src="/icons/insta.svg" width={26} height={26} />
            </a>
            <a
              href="http://twitter.com/_akshay_kannan_"
              target="_blank"
              rel="noopener noreferrer"
              className="pr-5 pointer icon-social "
            >
              <Image src="/icons/twitter.svg" width={26} height={26} />
            </a>
            <a
              href="https://github.com/akshay9677"
              target="_blank"
              rel="noopener noreferrer"
              className="pb-1 pointer icon-social "
            >
              <Image src="/icons/github.svg" width={26} height={26} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IntroPage;
