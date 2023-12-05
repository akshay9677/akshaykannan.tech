import Linkedin from "../../../public/icons/linkedin.svg";
import Twitter from "../../../public/icons/twitter.svg";
import Github from "../../../public/icons/github.svg";
import Insta from "../../../public/icons/insta.svg";

const Intro = ({ className }) => {
  const paragraphStyle = "mt-4 text-content-primary/80 leading-8";
  return (
    <div className={`mt-10 lg:mt-8 px-2.5 lg:px-0 ${className}`}>
      <div className="text-brand-primary text-heading mb-4">INTRODUCTION</div>
      <div className="mt-4 text-content-primary/80 leading-8">
        Hey, this is Akshay, I'm a front-end developer & a javascript enthusiast
      </div>
      <div className={`${paragraphStyle}`}>
        Currently working as a core front-end engineer{" "}
        <a
          href="https://facilio.com"
          className="text-brand-primary border-b border-transparent hover:border-brand-primary"
        >
          @Facilio
        </a>
        . I explore new front-end techs, and occasionally write about them in my
        blog.
      </div>
      <div className="mt-4 text-content-primary/80 leading-8">
        Outside of programming, I enjoy designing ui and crafting user
        interfaces. Apart from coding and designing, you can find me
        occasionally rt-ing movie stuffs on Twitter.
      </div>

      <div className="mt-4 mr-4 text-content-primary/80">
        I too, am social. Find me on,
      </div>
      <div className="flex mt-2 items-center flex-wrap gap-1">
        <a
          href="https://github.com/akshay9677"
          target="_blank"
          rel="noopener noreferrer"
          className="mr-5 pointer flex items-center gap-0.5 border-b border-content-primary/40 hover:text-brand-primary hover:border-brand-primary"
        >
          <Github className="w-5 w-5" />
          <span>Github</span>
        </a>
        <a
          href="https://github.com/akshay9677"
          target="_blank"
          rel="noopener noreferrer"
          className="mr-5 pointer flex items-center gap-0.5 border-b border-content-primary/40 hover:text-brand-primary hover:border-brand-primary"
        >
          <Twitter className="w-5 w-5" />
          <span>Twitter</span>
        </a>

        <a
          href="https://github.com/akshay9677"
          target="_blank"
          rel="noopener noreferrer"
          className="mr-5 pointer flex items-center gap-0.5 border-b border-content-primary/40 hover:text-brand-primary hover:border-brand-primary"
        >
          <Linkedin className="w-5 w-5" />
          <span>Linkedin</span>
        </a>
        <a
          href="https://github.com/akshay9677"
          target="_blank"
          rel="noopener noreferrer"
          className="mr-5 pointer flex items-center gap-0.5 border-b border-content-primary/40 hover:text-brand-primary hover:border-brand-primary"
        >
          <Insta className="w-5 w-5" />
          <span>Instagram</span>
        </a>
      </div>
    </div>
  );
};

export default Intro;
