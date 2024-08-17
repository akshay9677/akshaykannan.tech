"use client";

import PFPIcon from "public/brand/akshay-vector.svg";
import EngineerIcon from "public/brand/engineer.svg";
import DesignIcon from "public/brand/design.svg";

const Intro = () => {
  return (
    <div className="max-w-xl w-full mt-6">
      <div className="flex items-center gap-4 px-4 lg:px-0 xl:px-0">
        <div className="bg-white border border-border-primary overflow-hidden pt-3 flex w-[100px] h-[100px] flex items-center justify-center rounded-full">
          <PFPIcon />
        </div>
        <div className="flex flex-col gap-1">
          <div className="text-3xl font-medium leading-[-1%]">
            Akshay Kannan
          </div>
          <div className="flex gap-1.5 lg:gap-3 flex-row lg:flex-row xl:flex-row lg:items-center">
            <div className="flex items-center gap-1">
              <EngineerIcon />
              <div className="text-xs lg:text-sm text-content-secondary">
                Software Engineer
              </div>
            </div>
            <div className="flex items-center gap-1">
              <DesignIcon />
              <div className="text-xs lg:text-sm text-content-secondary">
                Designer{" "}
                <span className="text-content-tertiary">(Amateur)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2 px-6 lg:px-2 xl:px-2 mt-6 text-content-secondary">
        <div>
          {
            "Hey, this is Akshay, I'm a front-end developer & a javascript enthusiast. I also craft user interfaces and illustrations for the web."
          }
        </div>
        <div>
          Currently working as a core front-end engineer @Facilio . I explore
          new front end techs, and occasionally write about them in my blog.
        </div>
        <div>I too am social,</div>
      </div>
    </div>
  );
};

export default Intro;
