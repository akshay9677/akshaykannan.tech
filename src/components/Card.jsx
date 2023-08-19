import { useEffect } from "react";
import CardDark from "../../public/card/dark.svg";
import CardLight from "../../public/card/light.svg";
import Tilt from "vanilla-tilt";
import Linkedin from "../../public/icons/linkedin.svg";
import Twitter from "../../public/icons/twitter.svg";
import Github from "../../public/icons/github.svg";
import Insta from "../../public/icons/insta.svg";

const Card = ({ isDark }) => {
  useEffect(() => {
    let eventBox = document.querySelector("#card-tilt");
    Tilt.init(eventBox);
  }, []);
  return (
    <div
      className="max-w-xl w-full flex justify-center items-center relative top-0 text-center w-fit mx-auto z-10"
      id="card-tilt"
    >
      {isDark ? <CardDark /> : <CardLight />}
      <div className="absolute top-12">
        <div id="container" className="bg-primary mx-auto">
          <div class="wave-01"></div>
          <div class="wave-02"></div>
          <div class="wave-03"></div>
        </div>
        <div className="text-3xl font-light mt-4">Akshay K</div>
        <div className="text-sm font-light text-content-primary/80 mt-3">
          Frontend Engineer @Facilio
        </div>
        <div className="text-sm font-light text-content-primary/60">
          Chennai, India
        </div>
      </div>
      <div className="absolute bottom-[12px] flex">
        <a
          href="https://github.com/akshay9677"
          target="_blank"
          rel="noopener noreferrer"
          className="pr-5 pointer text-content-primary/80"
        >
          <Github className="w-5 w-5 hover:opacity-50" />
        </a>
        <a
          href="https://twitter.com/_akshay_kannan_"
          target="_blank"
          rel="noopener noreferrer"
          className="pr-5 pointer text-content-primary/80"
        >
          <Twitter className="w-5 w-5 hover:opacity-50" />
        </a>
        <a
          href="https://www.linkedin.com/in/akshay-kannan-49964617a"
          target="_blank"
          rel="noopener noreferrer"
          className="pr-5 pointer text-content-primary/80"
        >
          <Linkedin className="w-5 w-5 hover:opacity-50" />
        </a>
        <a
          href="https://www.instagram.com/_akshay_kannan_/"
          target="_blank"
          rel="noopener noreferrer"
          className="pointer text-content-primary/80"
        >
          <Insta className="w-5 w-5 hover:opacity-50" />
        </a>
      </div>
    </div>
  );
};

export default Card;
