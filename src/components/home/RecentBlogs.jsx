import { useRouter } from "next/router";
import BlogList from "../blog/BlogList";

const RecentBlogs = ({ posts, className }) => {
  const router = useRouter();
  return (
    <div className="mt-8">
      <div className={`text-brand-primary text-heading mb-2 ${className}`}>
        RECENT BLOGS
      </div>

      <BlogList
        posts={posts}
        onItemClick={(post) => router.push(`/blog/${post.slug}`)}
      />
    </div>
  );
};

export default RecentBlogs;
