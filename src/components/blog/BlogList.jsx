import dlv from "dlv";
import { createRef, useEffect, useMemo, useState } from "react";
import BlogItem from "./Blogitem";

const BlogList = ({ posts, maxWidth, onItemClick }) => {
  const [hoverItem, setHoverItem] = useState(null);
  const [postRefs, setPostRefs] = useState([]);
  useEffect(() => {
    setPostRefs((elRefs) => posts.map((_, i) => elRefs[i] || createRef()));
  }, [posts]);
  const selectedDivStyle = useMemo(() => {
    let height = 0;
    let selectedTabHeight = dlv(postRefs, `${hoverItem}.current.clientHeight`);
    posts.forEach((_, index) => {
      if (index < hoverItem) {
        let selectedTabRef = postRefs[index];
        height += dlv(selectedTabRef, "current.clientHeight", 0);
      }
    });
    return {
      transform: `translateY(${height}px)`,
      transitionDuration: "200ms",
      backdropFilter: "blur(6px)",
      height: `${selectedTabHeight}px`,
    };
  }, [hoverItem, postRefs, posts]);
  return (
    <div
      className="relative mx-auto"
      style={{ maxWidth: maxWidth || "37.1rem" }}
      onMouseLeave={() => setHoverItem(null)}
    >
      {hoverItem !== null && (
        <div
          className="w-full bg-content-primary/10 absolute z-0 rounded-xl"
          style={selectedDivStyle}
        ></div>
      )}

      {posts &&
        posts.map((post, index) => {
          return (
            <div
              ref={postRefs[index]}
              key={`blog-item-${index}`}
              onMouseOver={() => setHoverItem(index)}
              className="relative z-10 cursor-pointer"
              onClick={() => onItemClick(post)}
            >
              {" "}
              <BlogItem post={post} />
            </div>
          );
        })}
    </div>
  );
};

export default BlogList;
