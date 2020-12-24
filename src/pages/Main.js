import React, { Fragment } from "react";

import NavbarHead from "../components/NavbarHead";
import Details from "../components/Details";
import Journey from "../components/Journey";
import Contact from "../components/Contact";

function Main(props) {
  return (
    <Fragment>
      <NavbarHead dark={props.dark} />
      <Details dark={props.dark} />
      <Journey dark={props.dark} />
      <Contact dark={props.dark} />
    </Fragment>
  );
}

export default Main;
