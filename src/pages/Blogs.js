import React from "react";
import BlogsList from "../components/BlogsList";

function Blogs(props) {
  return (
    <div
      id='blogs'
      style={{
        backgroundColor: props.dark ? "#242526" : "#F0F2F5",
        paddingTop: "3rem",
      }}
      className='h45'
    >
      <BlogsList dark={props.dark} />
    </div>
  );
}

export default Blogs;
