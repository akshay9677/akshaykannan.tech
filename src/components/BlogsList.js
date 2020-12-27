import React, { useEffect, useState } from "react";

import axios from "axios";
import { useHistory } from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";
import CircularProgress from "@material-ui/core/CircularProgress";
import { baseUrl } from "../config/baseUrl";
import { getTimeFromNow } from "../util/time";
import BlogDrawer from "./RichText/BlogDrawer";
import SnacksBar from "./Snackbar";
import { Tooltip } from "@material-ui/core";

function BlogBody(props) {
  const [blogs, setBlogs] = useState(null);
  const [openDrawer, setOpenDrawer] = useState(false);
  const [loading, setloading] = useState(false);
  const [open, setopen] = useState(false);
  const [failed, setfailed] = useState(false);
  const [snackMessage, setSnackMessage] = useState("");
  const history = useHistory();

  useEffect(() => {
    fetchData();
  }, []);

  const styles = {
    avatar: {
      borderRadius: "0.5rem",
      background: "#DC3545",
    },
    blogContainer: {
      color: props.dark ? "white" : "black",
      backgroundColor: props.dark ? "#242526" : "#F0F2F5",
      overflowY: "auto",
      minHeight: "45rem",
    },
    createPostBtn: {
      position: "fixed",
      bottom: "24px",
      right: "30px",
      color: "white",
    },
  };

  const fetchData = async (showMessage, isSaved) => {
    if (showMessage) {
      setopen(true);
      if (isSaved) {
        setfailed(false);
        setSnackMessage("Blog posted!!");
      } else {
        setfailed(true);
        setSnackMessage("Error occured");
      }
    }
    setloading(true);
    let { data } = await axios.get(`${baseUrl}/api/v1/blog`);
    if (!data.error) {
      setBlogs(data.data);
    }
    setloading(false);
  };
  function stripHtml(html) {
    var temporalDivElement = document.createElement("div");
    temporalDivElement.innerHTML = html;
    return temporalDivElement.textContent || temporalDivElement.innerText || "";
  }
  const handleBlogClick = (blog) => {
    history.push(`/blogs/${blog._id}`);
  };
  return (
    <div style={styles.blogContainer} className="hideScroll h-screen">
      <SnacksBar
        open={open}
        failed={failed}
        message={snackMessage}
        onClose={() => setopen(false)}
      />
      <BlogDrawer
        dark={props.dark}
        open={openDrawer}
        onClose={() => {
          setOpenDrawer(false);
        }}
        onSave={(isSaved) => {
          setOpenDrawer(false);
          fetchData(true, isSaved);
        }}
      />
      <button
        style={styles.createPostBtn}
        type="button"
        className="btn btn-danger btn-md"
        onClick={() => setOpenDrawer(true)}
      >
        <i className="fas fa-feather text-base"></i>
      </button>

      {loading ? (
        <div className="flex flex-row justify-content-center pt-6">
          <CircularProgress style={{ color: "#DC3545" }} />
        </div>
      ) : (
        blogs &&
        blogs.map((blog) => {
          return (
            <div key={blog._id} className="flex  justify-center p10 mt-3">
              <div
                style={{
                  backgroundColor: props.dark ? "#18191A" : "white",
                }}
                className="flex flex-row w-10/12 rounded-lg p-2"
              >
                <div className="my-4 mx-1">
                  <Avatar style={styles.avatar} variant="square">
                    {blog.email.slice(0, 1).toUpperCase()}
                  </Avatar>
                </div>
                <div className="flex flex-col truncate-text pL10 w-12/12">
                  <div
                    className="truncate-text text-xl pointer"
                    style={{ fontWeight: "bold" }}
                    onClick={handleBlogClick.bind(this, blog)}
                  >
                    {blog.subject}
                  </div>

                  <div className="truncate-text pT10 pB10 text-sm	">
                    {stripHtml(blog.post)}
                  </div>
                  {blog.tags && (
                    <div className="flex-row pb-2">
                      {blog.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="badge p-1.5 m-1"
                          style={{
                            backgroundColor: props.dark ? "#242526" : "#F0F2F5",
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                  <div className="flex-row">
                    <div style={{ fontSize: "0.8rem", color: "#888" }}>
                      {getTimeFromNow(blog.sysCreatedTime)}
                    </div>

                    <div style={{ fontSize: "4px", padding: "7.2px 6px" }}>
                      <i className="fas fa-circle"></i>
                    </div>
                    <div style={{ marginTop: "-4px" }}>
                      <Tooltip title="Fire">
                        <span className="badge badge-danger">
                          <i className="fas fa-fire mr-1"></i>
                          {blog.likes ? blog.likes : 0}
                        </span>
                      </Tooltip>
                    </div>
                    <div style={{ fontSize: "4px", padding: "7.2px 6px" }}>
                      <i className="fas fa-circle"></i>
                    </div>
                    <div style={{ fontSize: "0.8rem", color: "#888" }}>
                      {blog.email}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })
      )}
      {blogs && (
        <footer className="flex justify-center py-3" style={{ color: "#888" }}>
          © Akshay Kannan
        </footer>
      )}
    </div>
  );
}

export default BlogBody;
