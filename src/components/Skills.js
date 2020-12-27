import React from "react";
import Rating from "@material-ui/lab/Rating";

function Projects(props) {
  const styles = {
    textLine: {
      backgroundColor: props.dark ? "white" : "black",
      height: "3px",
      width: "40px",
      marginTop: "14px",
    },
  };
  function SkillRating(props) {
    return (
      <div className="flex align-items-center justify-between	w-60 p-2">
        <div className="row">
          {props.skillIcon}
          {props.skillName}
        </div>
        <Rating
          name="read-only"
          defaultValue={props.skillValue}
          precision={0.5}
          readOnly
          className="pl-1"
          style={{ color: "#DC3545" }}
        />
      </div>
    );
  }
  return (
    <div
      style={{ backgroundColor: props.dark ? "#242526" : "#F0F2F5" }}
      className="text-center pb-5"
      id="skill"
    >
      <div className="flex flex-row justify-center">
        <div className="mr-2" style={styles.textLine}></div>
        <h2
          style={{
            color: "#DC3545",
            fontWeight: "bold",
          }}
        >
          Skills
        </h2>
        <div className="ml-2" style={styles.textLine}></div>
      </div>
      <div className="flex flex-row justify-center mt-10 mR10 container">
        <div style={{ color: props.dark ? "white" : "black" }}>
          <SkillRating
            skillName={"Javascript"}
            skillValue={4}
            skillIcon={<i className="fab fa-js text-2xl mr-1"></i>}
          />
          <SkillRating
            skillName={"React"}
            skillValue={4.5}
            skillIcon={<i className="fab fa-react text-2xl mr-1"></i>}
          />
          <SkillRating
            skillName={"Vue"}
            skillValue={4}
            skillIcon={<i className="fab fa-vuejs text-2xl mr-1"></i>}
          />
          <SkillRating
            skillName={"Node"}
            skillValue={4}
            skillIcon={<i className="fab fa-node-js text-2xl mr-1"></i>}
          />
          <SkillRating
            skillName={"Java"}
            skillValue={3.5}
            skillIcon={<i className="fab fa-java text-2xl mr-2"></i>}
          />
          <SkillRating
            skillName={"MongoDB"}
            skillValue={4}
            skillIcon={<i className="fas fa-database text-2xl mr-1"></i>}
          />
          <SkillRating
            skillName={"Vue"}
            skillValue={4}
            skillIcon={<i className="fab fa-vuejs text-2xl mr-1"></i>}
          />
          <SkillRating
            skillName={"Node"}
            skillValue={4}
            skillIcon={<i className="fab fa-node-js text-2xl mr-1"></i>}
          />
        </div>
      </div>
    </div>
  );
}

export default Projects;
