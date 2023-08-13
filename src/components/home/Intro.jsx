import Linkedin from "../../../public/icons/linkedin.svg";
import Twitter from "../../../public/icons/twitter.svg";
import Github from "../../../public/icons/github.svg";
import Insta from "../../../public/icons/insta.svg";

const Intro = ({ className }) => {
  return (
    <div className={`mt-10 ${className}`}>
      <div className="text-brand-primary text-xs font-bold">INTRODUCTION</div>
      <div className="mt-2 text-sm text-content-primary/80">
        Hey, I'm Akshay. I am a front-end developer & a javascript enthusiast,
        working as a core front-end engineer @Facilio. I explore and
        occasionally write about front-end build tools, frameworks and design
        systems
      </div>
      <div className="flex mt-4">
        <a
          href="https://github.com/akshay9677"
          target="_blank"
          rel="noopener noreferrer"
          className="mr-5 pointer text-content-primary/80"
        >
          <Github className="w-5 w-5 hover:opacity-50" />
        </a>
        <a
          href="https://twitter.com/_akshay_kannan_"
          target="_blank"
          rel="noopener noreferrer"
          className="mr-5 pointer text-content-primary/80"
        >
          <Twitter className="w-5 w-5 hover:opacity-50" />
        </a>
        <a
          href="https://www.linkedin.com/in/akshay-kannan-49964617a"
          target="_blank"
          rel="noopener noreferrer"
          className="mr-5 pointer text-content-primary/80"
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

export default Intro;
