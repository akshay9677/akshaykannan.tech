import React, { useContext } from "react";
import BlogPost from "../components/BlogPost";

import { Theme } from "../App";

function PostBody(props) {
  const { darkTheme } = useContext(Theme);
  return <BlogPost dark={darkTheme} />;
}

export default PostBody;
