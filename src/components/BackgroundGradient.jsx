import { Fragment } from "react";

const BackgroundGradient = () => {
  return (
    <Fragment>
      <img
        alt="gradient-left"
        src="/pattern/gradient-primary.svg"
        style={{
          top: "-40%",
          left: "10%",
          display: "block",
        }}
        className="gradient z-0 fixed"
      />
      <img
        alt="gradient-left"
        src="/pattern/gradient-secondary.svg"
        style={{
          top: "-40%",
          right: "30%",
          display: "block",
        }}
        className="gradient delay-500 z-0 fixed"
      />
      <img
        alt="gradient-left"
        src="/pattern/gradient-secondary.svg"
        style={{
          display: "block",
          bottom: "-95%",
        }}
        className="z-0 fixed"
      />
    </Fragment>
  );
};

export default BackgroundGradient;
