import { Fragment } from "react";

const BackgroundGradient = () => {
  return (
    <Fragment>
      <img
        alt="gradient-left"
        src="/pattern/gradient-primary.svg"
        style={{
          position: "fixed",
          zIndex: "0",
          top: "-40%",
          left: "10%",
          display: "block",
        }}
        className="gradient"
      />
      <img
        alt="gradient-left"
        src="/pattern/gradient-secondary.svg"
        style={{
          position: "fixed",
          top: "-40%",
          right: "30%",
          display: "block",
        }}
        className="gradient delay-500"
      />
      <img
        alt="gradient-left"
        src="/pattern/gradient-secondary.svg"
        style={{
          position: "fixed",
          zIndex: "0",
          display: "block",
          bottom: "-95%",
        }}
      />
    </Fragment>
  );
};

export default BackgroundGradient;
