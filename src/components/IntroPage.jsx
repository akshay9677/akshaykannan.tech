import { Text } from "ak-palette";
import Webdev from "../images/coding.svg";

function IntroPage() {
  return (
    <div className="flex justify-around rounded-xl overflow-hidden pt-10 pb-8">
      <div className="flex flex-col mt-20">
        <div className="flex flex-col justify-center  intro-text-container">
          <Text className="lg:text-4xl text-3xl font-semibold text-gray-600 dark:text-white">
            Hey, I'm <span style={{ color: "#F15957" }}>Akshay</span>
          </Text>
          <Text
            size="large"
            className="leading-7 text-gray-500 dark:text-gray-400 pt-3"
          >
            I am a self taught developer and software engineer. I'm a Front-end
            Engineer & Javascript enthusisat and can create responsive and
            scalable web apps using the latest technologies available.
          </Text>
          <Text className="pt-3 flex items-center dark:text-white mb-2">
            <a
              href="https://www.linkedin.com/in/akshay-kannan-49964617a"
              target="_blank"
              rel="noopener noreferrer"
              className="pr-5 f30 pointer icon-social"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              href="https://www.instagram.com/_akshay_kannan_/"
              target="_blank"
              rel="noopener noreferrer"
              className="pr-5 f30 pointer icon-social"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="http://twitter.com/_akshay_kannan_"
              target="_blank"
              rel="noopener noreferrer"
              className="pr-5 f30 pointer icon-social"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="https://github.com/akshay9677"
              target="_blank"
              rel="noopener noreferrer"
              className="pb-1 f30 pointer icon-social"
            >
              <i className="fab fa-github"></i>
            </a>
          </Text>
        </div>
        <div className="opacity-90">
          <img
            src={Webdev}
            alt="Social"
            style={{ width: "25rem", margin: "0px auto" }}
          />
        </div>
      </div>
    </div>
  );
}

export default IntroPage;
