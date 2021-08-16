import React from "react";

import IntroPage from "../components/IntroPage.jsx";
import Contact from "../components/Contact.jsx";
import Skills from "../components/Skills.jsx";
import Project from "../components/Projects";

function Main() {
  return (
    <div className="max-w-3xl px-8 lg:px-3 mx-auto pb-5">
      <IntroPage />
      <Project />
      <Skills />
      <Contact />
    </div>
  );
}

export default Main;
