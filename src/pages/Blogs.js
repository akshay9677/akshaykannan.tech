import React, { useContext } from "react";
import BlogsList from "../components/BlogsList";
import { Theme } from "../App";

function Blogs(props) {
  const { darkTheme } = useContext(Theme);
  return (
    <div
      id="blogs-list"
      style={{
        backgroundColor: darkTheme ? "#242526" : "#F0F2F5",
        paddingTop: "3rem",
      }}
    >
      <BlogsList dark={darkTheme} />
    </div>
  );
}

export default Blogs;
