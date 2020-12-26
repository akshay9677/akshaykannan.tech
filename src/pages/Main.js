import React, { Fragment, useContext } from "react";

import NavbarHead from "../components/NavbarHead";
import Details from "../components/Details";
import Journey from "../components/Journey";
import Contact from "../components/Contact";
import Skills from "../components/Skills";

import { Theme } from "../App";

function Main(props) {
  const { darkTheme } = useContext(Theme);
  return (
    <Fragment>
      <NavbarHead dark={darkTheme} />
      <Details dark={darkTheme} />
      <Journey dark={darkTheme} />
      <Skills dark={darkTheme} />
      <Contact dark={darkTheme} />
    </Fragment>
  );
}

export default Main;
