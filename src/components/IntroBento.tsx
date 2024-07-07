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
        className="lg:-rotate-12 lg:translate-x-6 group-hover:rotate-0 group-hover:translate-x-0 hover:-translate-y-1 transition duration-200"
      />
      <TwitterImg
        onClick={() => window.open("https://x.com/_akshay_kannan_")}
        className="lg:rotate-[30deg] lg:translate-x-2 group-hover:rotate-0 group-hover:translate-x-0 hover:-translate-y-1 transition duration-200"
      />
      <LinkedInImg
        onClick={() =>
          window.open("https://www.linkedin.com/in/akshay-kannan-49964617a/")
        }
        className="lg:-rotate-12 lg:-translate-x-1	group-hover:rotate-0 group-hover:translate-x-0 hover:-translate-y-1 transition duration-200"
      />
      <InstaImg
        onClick={() =>
          window.open("https://www.instagram.com/_akshay_kannan_/")
        }
        className="lgrotate-12 lg:-translate-x-4 group-hover:rotate-0 group-hover:translate-x-0 hover:-translate-y-1 transition duration-200"
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

const Card = ({
  className,
  children,
  transparentBg,
}: {
  className: string;
  children: React.ReactNode;
  transparentBg?: boolean;
}) => {
  return (
    <div
      className={`${
        transparentBg ? `bg-[#000000]` : "bg-container-secondary"
      } rounded-xl border border-border-primary cursor-pointer ${className}`}
    >
      {children}
    </div>
  );
};

const InfoTag = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className="z-50 opacity-100 lg:opacity-0 group-hover:opacity-100 transition-opacity absolute bottom-2 left-2 bg-container-primary/50 text-content-primary text-xs py-1 px-1.5 rounded-md"
      style={{
        backdropFilter: "blur(10px)",
      }}
    >
      {children}
    </div>
  );
};

const IntroBento = () => {
  return (
    <div className="max-w-3xl w-full my-6 px-6 md:px-0 flex flex-col gap-2">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
        <div className="col-span-1 h-[250px] grid grid-rows-2 gap-2">
          <Card className="row-span-1 w-full h-full bg-container-secondary flex items-center justify-center group">
            <SocialLink />
          </Card>
          <Card className="row-span-1 w-full h-full bg-container-secondary relative overflow-hidden relative group">
            <InfoTag>Chennai, India</InfoTag>
            <Image
              src="/bento/location.png"
              alt="My Location"
              height={"700"}
              width={"700"}
              className="absolute top-[-30px] lg:top-[-0px] xl:lg-0"
            />
          </Card>
        </div>
        <Card className="col-span-1 md:col-span-2 w-full h-[250px] bg-container-secondary relative overflow-hidden group">
          <DeskSetupImg className="absolute top-[-80px] left-[-150px] lg:left-[-50px]" />
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
        <Card
          transparentBg={true}
          className="col-span-1 md:col-span-2 w-full h-[250px] relative overflow-hidden relative group"
        >
          <InfoTag>{"I also design websites ;-)"}</InfoTag>
          <AltrossImg className="mx-auto" />
        </Card>
        <div className="col-span-1 md:col-span-2 h-[250px] grid grid-rows-2 gap-2">
          <Card className="row-span-1 w-full h-full bg-container-secondary flex flex-col px-3">
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
          </Card>
          <Card className="row-span-1 w-full h-full bg-container-secondary flex items-center justify-center relative group">
            <InfoTag>Ping me if you want one!</InfoTag>
            <VectorArtImg />
          </Card>
        </div>
      </div>
    </div>
  );
};

export default IntroBento;
