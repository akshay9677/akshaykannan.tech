import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";
import MyImage from "../images/myImg.png";
import { baseUrl } from "../config/baseUrl";
function Details(props) {
  const [likes, setLikes] = useState(10);
  useEffect(() => {
    async function fetchData() {
      let { data } = await axios.get(`${baseUrl}/api/v1/likes`);
      let { likes } = data.data[0];
      setLikes(likes);
    }
    fetchData();
  }, []);

  async function handleLikeClick() {
    setLikes(likes + 1);
    await axios.post(`${baseUrl}/api/v1/likes`);
  }

  function facilioClick() {
    window.open("https://facilio.com/");
  }

  return (
    <Fragment>
      <div
        id="intro"
        style={
          props.dark
            ? { backgroundColor: "#242526", color: "white" }
            : { backgroundColor: "#F0F2F5", color: "black" }
        }
      >
        <div className="container">
          <div
            className="row justify-center"
            style={{ textAlign: "center", padding: "10px" }}
          >
            <div
              className="col-lg-2 flex justify-center"
              data-aos="fade-in"
              data-aos-delay="800"
            >
              <img className="myImg mt-7" src={MyImage} alt="" />
            </div>
            <div className="col-lg-1" style={{ color: "#dc3545" }}>
              <i className="fas fa-quote-left fa-lg quote"></i>
            </div>
            <div
              className="col-lg-7"
              style={{ textAlign: "left" }}
              data-aos="fade-in"
              data-aos-delay="700"
            >
              <h4 className="bioContent">
                {" "}
                I am a Undergraduate Electrical Engineer working as a Software
                Developer at{" "}
                <span
                  style={{
                    color: "#FF3184",
                    cursor: "pointer",
                    textDecoration: "underline",
                  }}
                  onClick={facilioClick}
                >
                  Facilio
                </span>{" "}
              </h4>
              <h4>
                I'm a passionate mobile / web developer and I can create
                responsive webapps and scalable mobile apps using the latest
                technologies available.
              </h4>
            </div>
          </div>

          <div className="text-center h-16">
            <button
              onClick={handleLikeClick}
              className="btn btn-danger btn-md bt"
              type="submit"
            >
              <i className="far fa-thumbs-up"></i> {likes} {" Likes"}
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Details;
