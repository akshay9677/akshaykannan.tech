import React, { useState, useEffect, Fragment } from "react";
import { useParams } from "react-router-dom";
import CircularProgress from "@material-ui/core/CircularProgress";
import ToolTip from "@material-ui/core/Tooltip";
import axios from "axios";
import { baseUrl } from "../config/baseUrl";
import sanitize from "sanitize-html";
import ErrorSvg from "../assets/Error404.svg";

function BlogPage(props) {
  const { id } = useParams();
  const [blog, setblog] = useState(null);
  const [loading, setloading] = useState(false);
  const [failed, setfailed] = useState(false);
  const [snackMessage, setSnackMessage] = useState("");
  useEffect(() => {
    async function fetchData() {
      setloading(true);
      try {
        let { data } = await axios.post(`${baseUrl}/api/v1/blog/summary`, {
          _id: id,
        });
        let { error } = data;
        if (error) {
          throw error;
        } else {
          setblog(data.data);
        }
      } catch (e) {
        setfailed(true);
        setSnackMessage("No Posts found");
      }
      setloading(false);
    }
    fetchData();
  }, []);
  function handleLikeClick() {
    setblog((preValue) => {
      return { ...preValue, likes: preValue.likes + 1 };
    });

    axios.put(`${baseUrl}/api/v1/blog/like`, blog);
  }
  return (
    <div
      id='blogs'
      style={{
        backgroundColor: props.dark ? "#242526" : "#F0F2F5",
        paddingTop: "5rem",
      }}
      className='h45'
    >
      <div className='flex justify-content-center'>
        {loading ? (
          <div className='flex flex-row justify-content-center pt-6'>
            <CircularProgress style={{ color: "#DC3545" }} />
          </div>
        ) : (
          blog && (
            <div style={{ width: "63%" }}>
              <h1
                className='text-center mb-4'
                style={props.dark ? { color: "white" } : { color: "black" }}
              >
                {blog.subject}
              </h1>
              <div
                style={props.dark ? { color: "white" } : { color: "black" }}
                className='post-body'
                dangerouslySetInnerHTML={{ __html: sanitize(blog.post) }}
              />
              <div className='flex flex-row m-4'>
                <ToolTip title='Fire' aria-label='add'>
                  <button
                    type='button'
                    className='btn btn-outline-danger btn-sm text-md'
                    onClick={handleLikeClick}
                  >
                    <i className='fas fa-fire mr-1'></i>
                    {blog.likes ? blog.likes : 0}
                  </button>
                </ToolTip>
                <div className='ml-3'>
                  {blog.tags ? (
                    blog.tags.map((tag) => (
                      <span
                        className='badge badge-danger p-1.5 m-1'
                        style={{ color: !props.dark ? "white" : "black" }}
                      >
                        {tag}
                      </span>
                    ))
                  ) : (
                    <span></span>
                  )}
                </div>
              </div>
            </div>
          )
        )}
      </div>
      {failed && (
        <Fragment>
          <div className='flex justify-content-center mt-5'>
            <img src={ErrorSvg} />
          </div>
          <div className='text-center m-3 mb-5'>{snackMessage}</div>
        </Fragment>
      )}
      <div className='flex justify-center py-3' style={{ color: "#888" }}>
        © Akshay Kannan
      </div>
    </div>
  );
}

export default BlogPage;
