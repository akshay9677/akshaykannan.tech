import { createRef, useEffect, useMemo, useState } from "react";
import BlogItem from "../blog/Blogitem";
import dlv from "dlv";

const RecentBlogs = ({ posts, className }) => {
  const [hoverItem, setHoverItem] = useState(null);
  const [postRefs, setPostRefs] = useState([]);
  useEffect(() => {
    setPostRefs((elRefs) => posts.map((_, i) => elRefs[i] || createRef()));
  }, [posts]);
  const selectedDivStyle = useMemo(() => {
    let height = 0;
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
    };
  }, [hoverItem, postRefs, posts]);
  return (
    <div className="mt-8">
      <div className={`text-brand-primary text-xs mb-2 font-bold ${className}`}>
        RECENT BLOGS
      </div>

      <div
        className="relative mx-auto"
        style={{ maxWidth: "37.1rem" }}
        onMouseLeave={() => setHoverItem(null)}
      >
        {hoverItem !== null && (
          <div
            className="w-full bg-content-primary/10 h-28 absolute z-0 rounded-xl"
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
              >
                {" "}
                <BlogItem post={post} />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default RecentBlogs;
