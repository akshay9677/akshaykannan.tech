import Axios from "axios";
import React, { useState } from "react";

function Contact(props) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);

  function handleContactSave() {
    if (name !== "" && email !== "") {
      let params = {
        name: name,
        email: email,
        description: description,
      };
      setLoading(true);
      let { data } = Axios.post("http://localhost:5000/api/v1/users", params);
      setTimeout(() => {
        setLoading(false);
        setName("");
        setEmail("");
        setDescription("");
      }, [3000]);
    }
  }

  return (
    <div
      id='contact'
      className='text-center'
      style={
        !props.dark
          ? { filter: "brightness(1)" }
          : { filter: "brightness(0.7)" }
      }
    >
      <h1 style={{ color: "white" }}>Get in touch</h1>
      <div className='row flex-center '>
        <div
          className='col-lg-3 card-header'
          style={!props.dark ? styles.cardLight : styles.cardBlack}
        >
          <div className='form-group'>
            <div style={!props.dark ? styles.labelLight : styles.labelDark}>
              Name{" "}
            </div>

            <input
              className='form-control '
              type='text'
              placeholder='Name'
              autoComplete='off'
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </div>

          <div className='form-group'>
            <div style={!props.dark ? styles.labelLight : styles.labelDark}>
              Email{" "}
            </div>
            <input
              className='form-control'
              type='email'
              placeholder='name@example.com'
              autoComplete='off'
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>

          <div className='form-group'>
            <div style={!props.dark ? styles.labelLight : styles.labelDark}>
              Leave a message{" "}
            </div>

            <textarea
              className='form-control'
              id='exampleFormControlTextarea1'
              rows='3'
              placeholder='Leave a message'
              autoComplete='off'
              value={description}
              onChange={(event) => setDescription(event.target.value)}
            ></textarea>
          </div>
          <div className='flex' style={{ textAlign: "right" }}>
            <button
              onClick={handleContactSave}
              className={
                props.dark
                  ? "btn btn-light btn-sm sub"
                  : "btn btn-dark btn-sm sub"
              }
              type='submit'
              name='button'
            >
              {loading && (
                <div
                  className={
                    props.dark
                      ? "spinner-border text-dark spinner-border-sm"
                      : "spinner-border text-light spinner-border-sm"
                  }
                  role='status'
                >
                  <span className='sr-only'>Loading...</span>
                </div>
              )}{" "}
              Signup
            </button>
          </div>
        </div>
      </div>
      <div style={{ marginTop: "150px" }}>
        {" "}
        <p>
          <i className='far fa-copyright fa-sm'></i> Akshay Kannan
        </p>{" "}
      </div>
    </div>
  );
}

const styles = {
  cardLight: {
    padding: "20px",
    marginTop: "80px",
    backgroundColor: "#f9f9f9",
    borderRadius: "0.7rem",
    width: "20rem",
  },
  cardBlack: {
    padding: "20px",
    marginTop: "80px",
    backgroundColor: "#242526",
    borderRadius: "0.7rem",
    width: "20rem",
  },
  labelLight: { textAlign: "left", color: "black" },
  labelDark: { textAlign: "left", color: "white" },
};

export default Contact;
