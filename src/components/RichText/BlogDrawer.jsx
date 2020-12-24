import React, { useState } from "react";

import Drawer from "@material-ui/core/Drawer";
import CircularProgress from "@material-ui/core/CircularProgress";
import RichTextEditor from "./RichTextEditor";
import { baseUrl } from "../../config/baseUrl";
import Axios from "axios";

function BlogDrawer(props) {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [post, setPost] = useState("");
  const [loading, setloading] = useState(false);

  const styles = {
    btnContainer: {
      position: "fixed",
      bottom: "1px",
      width: "100%",
      backgroundColor: props.dark ? "#242526" : "white",
      padding: "10px",
    },
  };

  const handleSave = async () => {
    setloading(true);
    let isSaved;
    try {
      let params = {
        email: email,
        subject: subject,
        post: post,
      };
      let { data, error } = await Axios.post(`${baseUrl}/api/v1/blog`, params);
      error ? (isSaved = false) : (isSaved = true);
    } catch (e) {
      isSaved = false;
    }
    setloading(false);
    setSubject("");
    setEmail("");
    props.onSave(isSaved);
  };

  return (
    <Drawer anchor={"right"} open={props.open} onClose={props.onClose}>
      <div
        className='text-lg pl-3 pt-1 font-medium'
        style={{
          backgroundColor: props.dark ? "#242526" : "",
          color: props.dark ? "white" : "black",
        }}
      >
        New Post
      </div>
      <div
        className='richtext-drawer'
        style={{
          backgroundColor: props.dark ? "#242526" : "",
          height: "100%",
          color: props.dark ? "white" : "black",
        }}
      >
        <div className='p-3'>
          <div className='py-1'>
            <div className='py-1 text-sm font-medium'>Email</div>
            <input
              className='form-control'
              type='email'
              placeholder='Enter Your Email'
              autoComplete='off'
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <div className='py-1'>
            <div className='py-1 text-sm font-medium'>Subject</div>
            <input
              className='form-control'
              type='email'
              placeholder='Enter your Blog Subject'
              autoComplete='off'
              value={subject}
              onChange={(event) => setSubject(event.target.value)}
            />
          </div>
          <div className='py-1'>
            <div className='py-1 my-1 text-sm font-medium'>Post</div>
            <RichTextEditor
              onChange={(posts) => setPost(posts)}
              dark={props.dark}
            />
            <div
              style={{ color: "#888", fontSize: "0.8rem", paddingTop: "10px" }}
            >
              Ctrl+B - Bold, Ctrl+I - Italics, Ctrl+A - Select All
            </div>
          </div>
        </div>
        <div style={styles.btnContainer}>
          <button
            style={{ color: props.dark ? "black" : "white" }}
            type='button'
            className='btn btn-danger btn-md'
            onClick={handleSave}
          >
            {loading ? (
              <CircularProgress
                size={13}
                style={{
                  margin: "0px 12.5px",
                  color: props.dark ? "black" : "white",
                }}
              />
            ) : (
              "Save"
            )}
          </button>
        </div>
      </div>
    </Drawer>
  );
}

export default BlogDrawer;
