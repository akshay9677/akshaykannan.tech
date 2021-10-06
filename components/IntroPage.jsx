import { Text } from "ak-palette";
import Image from "next/image";

function IntroPage() {
  return (
    <div className="flex justify-around rounded-xl overflow-hidden pt-3 pb-8">
      <div className="flex flex-col xl:flex-row lg:flex-row mt-20 text-center lg:text-left xl:text-left">
        <div className="flex w-full xl:w-1/2 lg:w-1/2 flex-col justify-center  intro-text-container">
          <div className="font-semibold w-full text-4xl">
            Hey 👋 , I'm <span className="text-gradient">Akshay</span>
          </div>
          <div className="leading-7 text-md text-gray-500 dark:text-gray-400 pt-5">
            I am a self taught front-end developer & a Javascript enthusiast.
            I'm currently working as a Software Engineer at{" "}
            <a
              href="https://www.facilio.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#3B82F6" }}
            >
              Facilio
            </a>
            .
          </div>
          <Text className="pt-3 flex items-center justify-center lg:justify-start xl:justify-start dark:text-white mb-2">
            <a
              href="https://www.linkedin.com/in/akshay-kannan-49964617a"
              target="_blank"
              rel="noopener noreferrer"
              className="pr-5 f30 pointer icon-social "
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              href="https://www.instagram.com/_akshay_kannan_/"
              target="_blank"
              rel="noopener noreferrer"
              className="pr-5 f30 pointer icon-social "
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="http://twitter.com/_akshay_kannan_"
              target="_blank"
              rel="noopener noreferrer"
              className="pr-5 f30 pointer icon-social "
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="https://github.com/akshay9677"
              target="_blank"
              rel="noopener noreferrer"
              className="pb-1 f30 pointer icon-social "
            >
              <i className="fab fa-github"></i>
            </a>
          </Text>
        </div>
        <div className="opacity-90 flex justify-center">
          <Image
            src="/coding.svg"
            alt="Social"
            width="370px"
            height="300px"
            priority={true}
          />
        </div>
      </div>
    </div>
  );
}

export default IntroPage;
