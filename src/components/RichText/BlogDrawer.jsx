import React, { useState } from "react";

import Drawer from "@material-ui/core/Drawer";
import CircularProgress from "@material-ui/core/CircularProgress";
import IconButton from "@material-ui/core/IconButton";
import Chip from "@material-ui/core/Chip";
import RichTextEditor from "./RichTextEditor";
import { baseUrl } from "../../config/baseUrl";
import Axios from "axios";

function BlogDrawer(props) {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [tags, setTags] = useState([]);
  const [currTag, setCurrTag] = useState("");
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
        tags: tags,
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

  const handleTagAdd = () => {
    let temp = tags;
    if (temp.length < 5 ) {
      temp.push(currTag);
      setTags(temp);
    }

    setCurrTag("");
  };
  const handleDeleteTag = (index) => {
    let temp = tags.filter((tag, tagIndex) => tagIndex !== index);
    setTags(temp);
  };

  return (
    <Drawer anchor={"right"} open={props.open} onClose={() => {
      props.onClose()
      setTags([])
    }}>
      <div
        className="text-2xl pl-3 pt-1 font-medium"
        style={{
          backgroundColor: props.dark ? "#242526" : "",
          color:props.dark ? 'white' : 'black'
        }}
      >
        New Post
      </div>
      <div
        className="richtext-drawer"
        style={{
          backgroundColor: props.dark ? "#242526" : "",
          height: "100%",
          color: props.dark ? "white" : "black",
        }}
      >
        <div className="p-3">
          <div className="py-1">
            <div className="py-1 my-1 text-base font-medium">Email</div>
            <input
              className="form-control"
              type="email"
              placeholder="Enter Your Email"
              autoComplete="off"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <div className="py-1">
            <div className="py-1 my-1 text-base font-medium">Subject</div>
            <input
              className="form-control"
              type="email"
              placeholder="Enter your Blog Subject"
              autoComplete="off"
              value={subject}
              onChange={(event) => setSubject(event.target.value)}
            />
          </div>

          <div className="py-1">
            <div className="py-1 text-base font-medium">Tags</div>
            <div className="py-1 text-sm" style={{color:'#888'}}>Add tags to your posts for easy reference</div>
            <div className="flex flex-row">
              <input
                className="form-control"
                type="text"
                placeholder="Enter your Tags for you blog"
                autoComplete="off"
                value={currTag}
                onChange={(event) => setCurrTag(event.target.value)}
                style={{width:'25rem'}}
              />
              <IconButton
                style={{ color: "#dc3545", fontSize: "16px",cursor:currTag === '' &&'not-allowed' }}
                onClick={handleTagAdd}
              >
                <i className="fas fa-plus"></i>
              </IconButton>
            </div>
            <div className="pl-3 pt-1">
              {tags &&
                tags.map((tag, index) => {
                  return (
                    <Chip
                      style={{ backgroundColor: "#dc3545" }}
                      key={index}
                      label={tag}
                      clickable
                      color="primary"
                      onDelete={handleDeleteTag.bind(this, index)}
                      className="mr-2"
                    />
                  );
                })}
            </div>
          </div>
          <div className="py-1">
            <div className="py-1 my-1 text-base font-medium">Post</div>
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
            type="button"
            className="btn btn-danger btn-md"
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
