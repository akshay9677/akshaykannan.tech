import { useRouter } from "next/router";
import BlogItem from "../components/common/BlogItem";
import { Text } from "@nextui-org/react";

const RecentBlogs = ({ posts }) => {
  const router = useRouter();

  const handleBlogClick = (blog) => {
    router.push(`/blog/${blog.slug}`);
  };
  return (
    <div className="pb-8">
      <Text h2>Recent Blogs</Text>
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
