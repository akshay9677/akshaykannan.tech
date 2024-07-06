"use client";

import Image from "next/image";
import DeskSetupImg from "public/bento/desk-setup.svg";
import AltrossImg from "public/bento/altross.svg";
import VectorArtImg from "public/bento/vector-art.svg";

import GithubImg from "public/bento/socials/github.svg";
import LinkedInImg from "public/bento/socials/linkedin.svg";
import InstaImg from "public/bento/socials/insta.svg";
import TwitterImg from "public/bento/socials/twitter.svg";

const SocialLink = () => {
  return (
    <div className="flex gap-2 cursor-pointer">
      <GithubImg
        onClick={() => window.open("https://github.com/akshay9677")}
        className="-rotate-12 translate-x-6 group-hover:rotate-0 group-hover:translate-x-0 hover:-translate-y-1 transition duration-200"
      />
      <TwitterImg
        onClick={() => window.open("https://x.com/_akshay_kannan_")}
        className="rotate-[30deg] translate-x-2 group-hover:rotate-0 group-hover:translate-x-0 hover:-translate-y-1 transition duration-200"
      />
      <LinkedInImg
        onClick={() =>
          window.open("https://www.linkedin.com/in/akshay-kannan-49964617a/")
        }
        className="-rotate-12 -translate-x-1	group-hover:rotate-0 group-hover:translate-x-0 hover:-translate-y-1 transition duration-200"
      />
      <InstaImg
        onClick={() =>
          window.open("https://www.instagram.com/_akshay_kannan_/")
        }
        className="rotate-12 -translate-x-4 group-hover:rotate-0 group-hover:translate-x-0 hover:-translate-y-1 transition duration-200"
      />
    </div>
  );
};

const workExp = [
  {
    designation: "Frontend Engineer",
    company: "Facilio",
    experience: "2020 - present",
  },
  {
    designation: "SDE Intern",
    company: "Full Creative",
    experience: "2020",
  },
  {
    designation: "Student Intern",
    company: "L&T Infotech",
    experience: "2018",
  },
];

const IntroBento = () => {
  return (
    <div className="max-w-3xl w-full my-6">
      <div className="flex flex-col w-full h-full gap-3">
        {/* first row */}
        <div className="flex gap-3 h-[250px]">
          <div className="flex flex-col flex-[1] gap-3">
            <div className="w-full h-full bg-container-secondary rounded-xl border border-border-primary flex items-center justify-center group">
              <SocialLink />
            </div>
            <div className="w-full h-full rounded-xl overflow-hidden relative">
              <div className="w-3 h-3 bg-[#5B9BFD] absolute z-50 top-10 left-24 rounded-full border-2 border-[#ffffff] shadow-lg"></div>
              <Image
                src="/bento/location.png"
                alt="My Location"
                height={"800"}
                width={"800"}
              />
            </div>
          </div>
          <div className="w-full h-full rounded-xl flex-[2] overflow-hidden relative">
            <DeskSetupImg className="absolute top-[-80px] left-[-70px]" />
          </div>
        </div>
        {/* second row */}
        <div className="flex gap-3 h-[250px] overflow-hidden">
          <div className="w-full h-full bg-container-secondary rounded-xl flex-[1.5] overflow-hidden">
            <AltrossImg className="rounded-xl" />
          </div>
          <div className="flex flex-col flex-[2] gap-3">
            <div className="w-full h-full bg-container-secondary rounded-xl border border-border-primary h-full flex flex-col px-3">
              {workExp.map((exp, index) => {
                return (
                  <div
                    key={index}
                    className={`flex flex-1 h-full items-center justify-center ${
                      index !== workExp.length - 1
                        ? "border-b border-border-secondary"
                        : ""
                    }`}
                  >
                    <div className="w-[50%] text-xs text-content-tertiary">
                      {exp.designation}
                    </div>
                    <div className="w-full flex justify-between">
                      <div className="text-sm">{exp.company}</div>
                      <div className="text-xs text-content-tertiary">
                        {exp.experience}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="w-full h-full bg-container-secondary rounded-xl flex items-center justify-center border border-border-primary">
              <VectorArtImg />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroBento;
