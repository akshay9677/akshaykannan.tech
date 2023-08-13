import { Fragment } from "react";

const BackgroundGradient = () => {
  return (
    <Fragment>
      <img
        alt="gradient-left"
        src="/pattern/gradient-left-dark.svg"
        style={{
          position: "fixed",
          zIndex: "0",
          display: "block",
        }}
      />
      <img
        alt="gradient-left"
        src="/pattern/gradient-right-dark.svg"
        style={{
          position: "fixed",
          top: "0",
          zIndex: "0",
          display: "block",
        }}
      />
    </Fragment>
  );
};

export default BackgroundGradient;
