import React from "react";
import { Text } from "ak-palette";
import Image from "next/image";

function Projects() {
  const SkillRating = (props) => {
    return (
      <div className="flex flex items-center px-2 py-1 mr-4 mt-4">
        <Text className="mr-2">{props.skillIcon}</Text>
        <Text size="large" className="dark:text-white">
          {props.skillName}
        </Text>
      </div>
    );
  };
  return (
    <div className="pb-8" id="skill">
      <div className="font-semibold w-full text-4xl">Skills</div>
      <div className="flex flex-wrap">
        <SkillRating
          skillName={"JS"}
          skillIcon={<i className="fab fa-js text-xl "></i>}
        />
        <SkillRating
          skillName={"Node"}
          skillIcon={<i className="fab fa-node-js text-xl "></i>}
        />
        <SkillRating
          skillName={"React"}
          skillIcon={<i className="fab fa-react text-xl "></i>}
        />
        <SkillRating
          skillName={"Vue"}
          skillIcon={<i className="fab fa-vuejs text-xl "></i>}
        />
        <SkillRating
          skillName={"CSS"}
          skillIcon={<i className="fab fa-css3-alt text-xl "></i>}
        />
        <SkillRating
          skillName={"HTML"}
          skillIcon={<i className="fab fa-html5 text-xl "></i>}
        />
        <SkillRating
          skillName={"MongoDB"}
          skillIcon={<i className="fas fa-database text-xl "></i>}
        />
        <SkillRating
          skillName={"Java"}
          skillIcon={<i className="fab fa-java text-xl "></i>}
        />
      </div>
    </div>
  );
}

export default Projects;
