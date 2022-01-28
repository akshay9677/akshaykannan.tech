import { Fragment } from "react";

const BackgroundGradient = () => {
  return (
    <Fragment>
      <img
        alt="gradient-left"
        src="/pattern/gradient-left-dark.svg"
        style={{
          position: "fixed",
          bottom: " -50%",
          left: "-10%",
          right: "-50%",
          zIndex: "0",
          display: "block",
        }}
      />
      <img
        alt="gradient-left"
        src="/pattern/gradient-right-dark.svg"
        style={{
          position: "fixed",
          top: " -50%",
          right: "-50%",
          zIndex: "0",
          display: "block",
        }}
      />
    </Fragment>
  );
};

export default BackgroundGradient;
