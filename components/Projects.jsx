import React from "react";

import AkCard from "./common/AkCard";
import { Text } from "@nextui-org/react";

const Projects = () => {
  const openGit = (link) => {
    window.open(link);
  };
  return (
    <div className="pb-8">
      <Text h2>Projects</Text>
      <div className="flex gap-6 flex-col md:flex-row my-4">
        <AkCard
          content="Palette is light-weight design system and minimal component library for react."
          title="Palette Design System"
          click={openGit.bind(this, "https://github.com/akshay9677/ak-palette")}
        />
        <AkCard
          content="Reactor-gen is a cli tool which helps in adding the required templates for redux and react-router-dom while initialising a react project"
          title="Reactor gen"
          click={openGit.bind(
            this,
            "https://github.com/akshay9677/reactor-gen"
          )}
        />

        <AkCard
          content="Eslint Plugin ak is a custom eslint plugin where users can add new rules"
          title="Custom ESLint Plugin"
          click={openGit.bind(
            this,
            "https://github.com/akshay9677/eslint-plugin-ak"
          )}
        />
      </div>
    </div>
  );
};

export default Projects;
