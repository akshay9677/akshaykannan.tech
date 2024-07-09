import { getBlogPosts } from "@/app/db/blog";
import BlogList from "./blog/BlogList";

const RecentPosts = () => {
  let posts = getBlogPosts();
  posts = posts.sort(function (a: any, b: any) {
    return b?.metadata?.id - a?.metadata?.id;
  });
  let modifiedPosts = posts.splice(0, 3);

  return (
    <div className="max-w-xl w-full px-4 lg:px-0 my-4">
      <div className="pb-2 px-2 font-medium text-2xl tracking-tight">
        Recent Posts
      </div>
      <BlogList posts={modifiedPosts} />
    </div>
  );
};

export default RecentPosts;
