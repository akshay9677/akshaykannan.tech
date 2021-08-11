import React from "react";
import BlogsList from "../components/BlogsList.jsx";

function Blogs(props) {
  return (
    <div
      id="blogs-list"
      style={{
        paddingTop: "3rem",
      }}
      className="max-w-4xl px-8 lg:px-3 mx-auto pb-5"
    >
      <BlogsList />
    </div>
  );
}

export default Blogs;
