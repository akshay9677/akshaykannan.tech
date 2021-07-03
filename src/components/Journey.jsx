import { Text } from "ak-palette";
import Full from "../images/full.svg";
import Facilio from "../images/facilio-blue.svg";
import LTI from "../images/LTI.png";

function Journey() {
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
  };
  const openCompanyWebsite = (website) => {
    window.open(website);
  };
  return (
    <div id="journey" className="text-gray-700 text-xl dark:text-white">
      <Text
        size="xxxlarge"
        className="text-4xl font-bold text-center block-header dark:text-white"
      >
        Journey
      </Text>
      <div className="py-10">
        <div className="max-w-md mx-auto rounded-xl overflow-hidden md:max-w-2xl">
          <div className="md:flex">
            <div className="md:flex-shrink-0 mt-4 px-3">
              <img
                className="h-48 w-full md:w-48"
                style={styles.image}
                src={LTI}
                alt="School"
              />
            </div>
            <div className="p-8">
              <div
                onClick={openCompanyWebsite.bind(
                  this,
                  "https://www.lntinfotech.com/"
                )}
                className="uppercase tracking-wide text-red-500 font-semibold pointer hover:text-red-600"
              >
                L&T Infotech
              </div>
              <div>Student Intern</div>
              <p className="mt-2 text-gray-500 text-base">
                This was my first ever corporate experiance. I started my
                internship during my third year of college and the intern period
                was for one month
              </p>
              <p className="mt-2 text-gray-500 text-base">
                This is where I was introduced to Data Structure and Algorithms.
                I also had the liberty to learn Web Development and was also
                able to get my hands on certain web-dev techs such as JSP,
                Servlets, SQl, etc. Eventhough the intern period was short I
                could get the gist of what is web development.
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-md mx-auto rounded-xl overflow-hidden md:max-w-2xl">
          <div className="md:flex">
            <div className="md:flex-shrink-0 mt-4 px-3">
              <img
                className="h-48 w-full md:w-48"
                style={{ ...styles.imageFacilio, backgroundColor: "black" }}
                src={Full}
                alt="School"
              />
            </div>
            <div className="p-8">
              <div
                onClick={openCompanyWebsite.bind(this, "https://full.io/")}
                className="uppercase tracking-wide text-red-500 font-semibold pointer hover:text-red-600"
              >
                Full Creative
              </div>
              <div>SDE Intern</div>
              <p className="mt-2 text-gray-500 text-base">
                My Internship in Full Creative showed me the importance of
                Javascript in front-end tech, not just front-end but also beyond
                that.I worked in a product called Teleport which is a video
                calling software.
              </p>
              <p className="mt-2 text-gray-500 text-base">
                I started my Internship, during covid where a lot of people
                where using video calling software and luckily I was put in
                their video chat app team called Teleport.Since there was a lot
                of demand for video calling apps my interest were intrigued on
                how the app works. I was introduced to Javascript in this
                internship. I learned a lot about JS, not only in web-dev point
                of view but also in other software development aspects.I also
                learned about WebRTC and web sockets. I was also introduced to
                React framework.
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-md mx-auto rounded-xl overflow-hidden md:max-w-2xl">
          <div className="md:flex">
            <div className="md:flex-shrink-0 mt-4 px-3">
              <img
                className="h-48 w-full md:w-48"
                style={styles.imageFacilio}
                src={Facilio}
                alt="School"
              />
            </div>
            <div className="p-8">
              <div
                onClick={openCompanyWebsite.bind(
                  this,
                  "https://www.facilio.com/"
                )}
                className="uppercase tracking-wide text-red-500 font-semibold pointer hover:text-red-600"
              >
                Facilio
              </div>
              <div>Member of Technical Staff</div>
              <p className="mt-2 text-gray-500 text-base">
                Later I joined Facilio where I am currently working as a
                Software Engineer. I primarily work on front-end tech in Facilio
              </p>
              <p className="mt-2 text-gray-500 text-base">
                Facilio is a data driven facility management system. Facilio
                provides Property Management, Facility & Maintenance Management,
                Fault Detection & Diagnostics and much more.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Journey;
