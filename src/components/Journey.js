import React from "react";
import Full from "../images/full.svg";
import Facilio from "../images/facilio-blue.svg";
import LTI from "../images/LTI.png";

function Journey(props) {
  const styles = {
    image: {
      width: "12rem",
      height: "8rem",
      borderRadius: "0.8rem",
      margin: "10px",
      backgroundColor: "rgb(249 246 246)",
      padding: "0.7rem 1.2rem",
    },
    imageFacilio: {
      width: "12rem",
      height: "8rem",
      borderRadius: "0.8rem",
      margin: "10px",
      padding: "1.5rem 1.2rem",
      backgroundColor: "#EfEfEf",
    },
    locationName: {
      fontSize: "1.2rem",
      fontWeight: "bold",
      color: "#dc3545",
    },
    location: {
      fontSize: "1rem",
      color: props.dark ? "white" : "black",
    },
    description: {
      fontSize: "0.8rem",
      color: props.dark ? "white" : "black",
      width: "20rem",
    },
    textLine: {
      backgroundColor: props.dark ? "white" : "black",
      height: "3px",
      width: "40px",
      marginTop: "36px",
    },
  };
  return (
    <div
      id="journey"
      style={
        props.dark
          ? { backgroundColor: "#242526" }
          : { backgroundColor: "#F0F2F5" }
      }
    >
      <div
        className="text-center flex flex-row justify-content-center"
        style={props.dark ? { color: "white" } : { color: "#313842" }}
      >
        <div className="mr-2" style={styles.textLine}></div>
        <div
          data-aos="fade-in"
          style={{ color: "#dc3545", fontWeight: "bold" }}
          className="bio"
          data-aos-delay="500"
        >
          My Journey
        </div>
        <div className="ml-2" style={styles.textLine}></div>
      </div>
      <div className="flex-col">
        <div className="row flex-center m10 p10">
          <img style={styles.image} src={LTI} alt="School" />
          <div
            className="flex-col"
            style={{
              margin: "10px",
            }}
          >
            <div
              style={styles.locationName}
              onClick={() => window.open("https://www.lntinfotech.com/")}
              className="pointer"
            >
              L&T Infotech
            </div>
            <div style={styles.location}>Student Intern,</div>
            <div style={styles.location}>Chennai, IN</div>
            <div style={styles.description}>
              <div className="pT10 pR10">
                This was my first ever corporate experiance. I started my
                internship during my third year of college and the intern period
                was for one month
              </div>
              <div className="pT10 pR10">
                This is where I was introduced to Data Structure and Algorithms.
                I also had the liberty to learn Web Development and was also
                able to get my hands on certain web-dev techs such as JSP,
                Servlets, SQl, etc. Eventhough the intern period was short I
                could get the gist of what is web development.
              </div>
            </div>
          </div>
        </div>
        <div className="row flex-center m10">
          <img
            style={{ ...styles.imageFacilio, backgroundColor: "black" }}
            src={Full}
            alt="School"
          />
          <div
            className="flex-col"
            style={{
              margin: "10px",
            }}
          >
            <div
              style={styles.locationName}
              onClick={() => window.open("https://full.io/")}
              className="pointer"
            >
              Full Creative
            </div>
            <div style={styles.location}>SDE Intern,</div>
            <div style={styles.location}>Chennai, IN</div>
            <div style={styles.description}>
              <div className="pT10 pR10">
                My Internship in Full Creative showed me the importance of
                Javascript in front-end tech, not just front-end but also beyond
                that.I worked in a product called Teleport which is a video
                calling software.
              </div>
              <div className="pT10 pR10">
                I started my Internship, during covid where a lot of people
                where using video calling software and luckily I was put in
                their video chat app team called Teleport.Since there was a lot
                of demand for video calling apps my interest were intrigued on
                how the app works. I was introduced to Javascript in this
                internship. I learned a lot about JS, not only in web-dev point
                of view but also in other software development aspects.I also
                learned about WebRTC and web sockets. I was also introduced to
                React framework.
              </div>
            </div>
          </div>
        </div>

        <div className="row flex-center m10 p10">
          <img style={styles.imageFacilio} src={Facilio} alt="School" />
          <div
            className="flex-col"
            style={{
              margin: "10px",
            }}
          >
            <div
              style={styles.locationName}
              onClick={() => window.open("https://www.facilio.com")}
              className="pointer"
            >
              Facilio
            </div>
            <div style={styles.location}>Member of Technical Staff,</div>
            <div style={styles.location}>Chennai, IN</div>
            <div style={styles.description}>
              <div className="pT10 pR10">
                Later I joined Facilio where I am currently working as a
                Software Engineer. I primarily work on front-end tech in Facilio
              </div>
              <div className="pT10 pR10">
                Facilio is a data driven facility management system. Facilio
                provides Property Management, Facility & Maintenance Management,
                Fault Detection & Diagnostics and much more.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Journey;
