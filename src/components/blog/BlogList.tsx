"use client";

import dlv from "dlv";
import { useRouter } from "next/navigation";
import { createRef, useEffect, useMemo, useState } from "react";

const BlogList = ({ posts }: any) => {
  const router = useRouter();
  const [hoverItem, setHoverItem] = useState<any>(null);
  const [postRefs, setPostRefs] = useState([]);

  useEffect(() => {
    setPostRefs((elRefs) =>
      posts.map((_: any, i: number) => elRefs[i] || createRef())
    );
  }, [posts]);

  const selectedDivStyle = useMemo(() => {
    let height = 0;
    let selectedTabHeight = dlv(postRefs, `${hoverItem}.current.clientHeight`);
    posts.forEach((_: any, index: number) => {
      if (hoverItem && index < hoverItem) {
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
    <div className="relative mx-auto" onMouseLeave={() => setHoverItem(null)}>
      {hoverItem !== null && (
        <div
          className="w-full bg-content-primary/10 absolute z-0 rounded-xl"
          style={selectedDivStyle}
        ></div>
      )}
      {posts.map((post: any, index: number) => {
        let metaData = dlv(post, "metadata");
        return (
          <div
            ref={postRefs[index]}
            key={metaData?.id}
            className="w-full py-[14px] px-2 z-20 relative cursor-pointer"
            onMouseOver={() => setHoverItem(index)}
            onClick={() => router.push(`/blog/${post.slug}`)}
          >
            <div className="text-lg font-medium tracking-tight">
              {metaData?.title}
            </div>
            <div className="text-sm text-content-secondary mt-1">
              {metaData?.body}
            </div>
            <div className="flex gap-2">
              <div className="text-xs text-content-tertiary mt-1">
                {`${metaData?.readingtime?.text}, `}
              </div>
              <div className="text-xs text-content-tertiary mt-1">
                {metaData?.sysCreatedTime}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default BlogList;
