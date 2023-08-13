import { Fragment } from "react";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { Link } from "@nextui-org/react";

export default function BlogLayout({ children, frontMatter }) {
  const [loading, setLoading] = useState(false);
  const [views, setViews] = useState(0);
  const router = useRouter();
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
    <div className="max-w-xl mx-auto mt-10 z-10 relative">
      <div className="text-xl">{frontMatter.title}</div>
      <div className="flex xl:flex-row flex-col justify-between py-4">
        <div className="flex items-center text-xs text-content-primary/60">
          {frontMatter.sysCreatedTime}
        </div>
        <div className="flex items-center text-xs text-content-primary/60">
          {frontMatter.readingTime.text}
          <span className="mx-1.5 flex self-center">
            <Image src="/icons/dot.svg" width={5} height={5} />
          </span>

          {loading ? (
            <div className="small-loader"></div>
          ) : (
            <span>{views} views</span>
          )}
        </div>
      </div>
      <div className="text-sm text-content-primary/80 mt-4 lg:mb-24">
        {children}
      </div>
    </div>
  );
}
