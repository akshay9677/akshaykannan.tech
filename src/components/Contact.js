import Axios from "axios";
import React, { useState } from "react";
import SnacksBar from "./Snackbar";
import Tooltip from "@material-ui/core/Tooltip";
import Social from "../images/social_media.svg";
import Webdev from "../images/web_developer.svg";
import { baseUrl } from "../config/baseUrl";

function Contact(props) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);

  const [open, setopen] = useState(false);
  const [failed, setfailed] = useState(false);
  const [snackMessage, setSnackMessage] = useState("");

  async function handleContactSave() {
    if (name !== "" && email !== "") {
      let params = {
        name: name,
        email: email,
        description: description,
      };
      setLoading(true);
      let { data } = await Axios.post(`${baseUrl}/api/v1/users`, params);
      setLoading(false);
      setName("");
      setEmail("");
      setDescription("");
      setopen(true);
      if (!data.error) {
        setfailed(false);
        setSnackMessage("Signed up!!");
      } else {
        setfailed(true);
        setSnackMessage("Error occured");
      }
    }
  }

  const styles = {
    cardContainer: {
      padding: "20px",
      marginTop: "80px",
      backgroundColor: !props.dark ? "white" : "#18191A",
      borderRadius: "0.5rem",
      width: "20rem",
      height: "26rem",
      boxShadow: "rgba(0, 0, 0, 0.24) 13px 16px",
    },
    labelLight: { textAlign: "left", color: "black" },
    labelDark: { textAlign: "left", color: "white" },
    textLine: {
      backgroundColor: props.dark ? "white" : "black",
      height: "3px",
      width: "40px",
      marginTop: "14px",
    },
  };

  return (
    <div
      style={{ backgroundColor: props.dark ? "#242526" : "#F0F2F5" }}
      className="text-center"
      id="contact"
    >
      <SnacksBar
        open={open}
        failed={failed}
        message={snackMessage}
        onClose={() => setopen(false)}
      />
      <div className="text-center flex flex-row justify-content-center">
        <div className="mr-2" style={styles.textLine}></div>
        <h2
          style={{
            color: "#DC3545",
            fontWeight: "bold",
          }}
        >
          Get in touch
        </h2>
        <div className="ml-2" style={styles.textLine}></div>
      </div>

      <div className="row flex-center ">
        {/* <div className="col-lg-4 social-contact opacity-90">
          <img src={Social} alt="Social" style={{ width: "24rem" }} />
        </div> */}

        <div className="col-lg-3 pt-4" style={styles.cardContainer}>
          <div
            style={{
              color: "#dc3545",
              textAlign: "left",
              fontSize: "19px",
              fontWeight: "bold",
              paddingBottom: "10px",
            }}
          >
            Newsletter Signup
          </div>
          <div className="form-group">
            <div style={!props.dark ? styles.labelLight : styles.labelDark}>
              Name{" "}
            </div>

            <input
              className="form-control"
              type="text"
              placeholder="Name"
              autoComplete="off"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </div>

          <div className="form-group">
            <div style={!props.dark ? styles.labelLight : styles.labelDark}>
              Email{" "}
            </div>
            <input
              className="form-control"
              type="email"
              placeholder="name@example.com"
              autoComplete="off"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>

          <div className="form-group">
            <div style={!props.dark ? styles.labelLight : styles.labelDark}>
              Leave a message{" "}
            </div>

            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              placeholder="Leave a message"
              autoComplete="off"
              value={description}
              onChange={(event) => setDescription(event.target.value)}
            ></textarea>
          </div>
          <div className="flex" style={{ textAlign: "right" }}>
            <button
              onClick={handleContactSave}
              className="btn btn-danger btn-sm sub mt-3"
              type="submit"
              name="button"
            >
              {loading && (
                <div
                  className={
                    props.dark
                      ? "spinner-border text-dark spinner-border-sm"
                      : "spinner-border text-light spinner-border-sm"
                  }
                  role="status"
                >
                  <span className="sr-only">Loading...</span>
                </div>
              )}{" "}
              Signup
            </button>
          </div>
        </div>
        {/* <div className="web-dev-contact col-lg-4 opacity-90">
          <img src={Webdev} alt="Social" style={{ width: "23rem" }} />
        </div> */}
      </div>

      <div
        className="flex-row flex-center text-center container pt-10"
        style={{ color: "#dc3545" }}
      >
        <Tooltip title="Github">
          <a
            href="https://github.com/akshay9677"
            target="_blank"
            rel="noopener noreferrer"
            className="pr-4 f30 pointer icon-social"
          >
            <i className="fab fa-github"></i>
          </a>
        </Tooltip>

        <Tooltip title="LinkedIn">
          <a
            href="https://www.linkedin.com/in/akshay-kannan-49964617a"
            target="_blank"
            rel="noopener noreferrer"
            className="pr-4 f30 pointer icon-social"
          >
            <i className="fab fa-linkedin"></i>
          </a>
        </Tooltip>
        <Tooltip title="Instagram">
          <a
            href="https://www.instagram.com/_akshay_kannan_/"
            target="_blank"
            rel="noopener noreferrer"
            className="pr-4 f30 pointer icon-social"
          >
            <i className="fab fa-instagram"></i>
          </a>
        </Tooltip>
        <Tooltip title="Twitter">
          <a
            href="http://twitter.com/_akshay_kannan_"
            target="_blank"
            rel="noopener noreferrer"
            className="f30 pointer icon-social"
          >
            <i className="fab fa-twitter"></i>
          </a>
        </Tooltip>
      </div>
      <div
        style={{ marginTop: "100px", color: props.dark ? "white" : "black" }}
      >
        {" "}
        <p>
          <i className="far fa-copyright fa-sm"></i> Akshay Kannan
        </p>{" "}
      </div>
    </div>
  );
}

export default Contact;
