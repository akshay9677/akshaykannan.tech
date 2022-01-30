import { Fragment } from "react";
import { useEffect, useState } from "react";
import AkTags from "../components/common/AkTags";
import Image from "next/image";

export default function BlogLayout({ children, frontMatter }) {
  const [loading, setLoading] = useState(false);
  const [views, setViews] = useState(0);
  useEffect(() => {
    fetchViews();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchViews = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/views", {
        method: "POST",
        body: JSON.stringify({ slug: frontMatter.slug }),
      });
      const data = await res.json();
      let { views: blogViews } = data || {};
      setViews(blogViews);
    } catch (e) {
      console.log(e);
    }
    setLoading(false);
  };

  return (
    <div className="pt-24 max-w-3xl px-8 xl:px-0 lg:px-0 mx-auto pb-5 dark:text-gray-300 relative z-50">
      <Fragment>
        <div className="px-0 lg:px-2 xl:px-2">
          <h1 className="text-3xl xl:text-4xl font-bold dark:text-white mb-0">
            {frontMatter.title}
          </h1>
          <div className="flex xl:flex-row flex-col justify-between py-4">
            <div className="flex items-center text-sm">
              Akshay Kannan
              <span className="mx-1.5 flex self-center">
                <Image src="/icons/dot.svg" width="5px" height="5px" />
              </span>
              {frontMatter.readingTime.text}
            </div>
            <div className="flex items-center text-sm">
              {frontMatter.sysCreatedTime}
              <span className="mx-1.5 flex self-center">
                <Image src="/icons/dot.svg" width="5px" height="5px" />
              </span>

              {loading ? (
                <div className="small-loader"></div>
              ) : (
                <span>{views} views</span>
              )}
            </div>
          </div>
          <div className="flex flex-wrap">
            {frontMatter.tags ? (
              frontMatter.tags.map((tag, index) => (
                <AkTags key={index} name={tag} />
              ))
            ) : (
              <span></span>
            )}
          </div>
        </div>
        {children}
      </Fragment>
    </div>
  );
}
