import dlv from "dlv";
import { getBlogPosts } from "../db/blog";
import BlogList from "@/components/blog/BlogList";

const serializeBlogs = () => {
  let posts = getBlogPosts();
  posts = posts.sort(function (a: any, b: any) {
    return b.id - a.id;
  });
  let groupedPosts: any = {};
  posts.forEach((post: any) => {
    let sysCreatedTime = dlv(post, "metadata.sysCreatedTime");
    let year = sysCreatedTime.split(", ")[1];
    if (groupedPosts[year]) {
      groupedPosts[year] = [...groupedPosts[year], post];
    } else {
      groupedPosts[year] = [post];
    }
  });
  let groupKeys = Object.keys(groupedPosts);
  groupKeys = groupKeys.sort().reverse();
  let modifiedGrp: any = {};
  groupKeys.forEach((key) => {
    modifiedGrp[key] = groupedPosts[key];
  });
  return {
    groupedPosts: modifiedGrp,
    groupKeys,
  };
};
const Blog = () => {
  const { groupedPosts, groupKeys } = serializeBlogs();
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div className="max-w-xl w-full mt-6">
        <div className="text-3xl font-medium leading-[-1%]">Blog Posts</div>
        <div className="flex flex-col gap-2 px-6 lg:px-0 xl:px-0 mt-6 text-content-secondary">
          Here, I share insights, tips, and musings on web dev and front-end
          techs.
          <br /> A lot of the informations here are opinionated 😉, feel free to
          browse through them and reach out to me for any discussions.
        </div>

        {groupKeys.map((year) => {
          let posts = groupedPosts[year];
          return (
            <div key={year} className="relative">
              <div className="max-w-xl mx-auto relative py-8">
                <div className="stroked-text text-transparent absolute -top-6 lg:-left-8">
                  {year}
                </div>
              </div>
              <div className="px-4 lg:px-0">
                <BlogList posts={posts} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Blog;
