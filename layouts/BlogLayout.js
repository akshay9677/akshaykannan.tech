import { Fragment } from "react";
import { useEffect, useState } from "react";
import AkTags from "../components/common/AkTags";

export default function BlogLayout({ children, frontMatter }) {
  const [loading, setLoading] = useState(false);
  const [views, setViews] = useState(0);
  useEffect(() => {
    fetchViews();
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
    <div className="pt-24 max-w-3xl px-8 mx-auto pb-5 dark:text-gray-400">
      {loading ? (
        <div
          className="flex justify-center items-center"
          style={{ height: "70vh" }}
        >
          <div class="loader"></div>
        </div>
      ) : (
        <Fragment>
          <div className="px-0 lg:px-3 xl:px-3">
            <div className="text-3xl xl:text-4xl font-bold dark:text-white">
              {frontMatter.title}
            </div>
            <div className="flex justify-between py-3">
              <div className="flex items-center text-sm">
                Akshay Kannan
                <div
                  className="dark:text-white"
                  style={{ fontSize: "4px", padding: "7.2px 6px" }}
                >
                  <i className="fas fa-circle" />
                </div>
                {frontMatter.readingTime.text}
              </div>
              <div className="flex items-center text-sm">
                {frontMatter.sysCreatedTime}
                <div
                  className="dark:text-white"
                  style={{ fontSize: "4px", padding: "7.2px 6px" }}
                >
                  <i className="fas fa-circle" />
                </div>
                {views} views
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
      )}
    </div>
  );
}
