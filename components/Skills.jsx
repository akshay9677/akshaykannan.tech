import React from "react";
import { Text } from "ak-palette";
import Image from "next/image";

function Projects() {
  const SkillRating = (props) => {
    return (
      <div className="flex flex items-center px-2 py-1 mr-4 mt-4">
        <Image
          src={`/icons/skills/${props.skillIcon}.svg`}
          width="18px"
          height="18px"
        />
        <Text size="large" className="ml-2 dark:text-white">
          {props.skillName}
        </Text>
      </div>
    );
  };
  return (
    <div className="pb-8" id="skill">
      <div className="font-semibold w-full text-4xl">Skills</div>
      <div className="flex flex-wrap">
        <SkillRating skillName={"JS"} skillIcon="js" />
        <SkillRating skillName={"Node"} skillIcon="node" />
        <SkillRating skillName={"React"} skillIcon="react" />
        <SkillRating skillName={"Vue"} skillIcon="vue" />
        <SkillRating skillName={"CSS"} skillIcon="css" />
        <SkillRating skillName={"HTML"} skillIcon="html" />
        <SkillRating skillName={"MongoDB"} skillIcon="mongo" />
        <SkillRating skillName={"Java"} skillIcon="java" />
      </div>
    </div>
  );
}

export default Projects;
