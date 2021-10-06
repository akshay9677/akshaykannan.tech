import { useRouter } from "next/router";
import BlogItem from "../components/common/BlogItem";

const RecentBlogs = ({ posts }) => {
  const router = useRouter();

  const handleBlogClick = (blog) => {
    router.push(`/blog/${blog.slug}`);
  };
  return (
    <div className="pb-8">
      <div className="font-semibold w-full text-4xl">Recent Blogs</div>
      {posts &&
        posts.map((blog, index) => {
          return (
            <BlogItem
              key={index}
              blog={blog}
              onItemClick={handleBlogClick.bind(this, blog)}
            />
          );
        })}
    </div>
  );
};

export default RecentBlogs;
