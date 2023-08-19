import { getAllFilesFrontMatter } from "../../utils/mdx";
import BlogList from "../../src/components/blog/BlogList";
import { useRouter } from "next/router";

const BlogBody = ({ posts }) => {
  const router = useRouter();
  return (
    <div className="mt-10 lg:mb-24">
      <div className={`text-brand-primary text-heading mb-4 max-w-xl mx-auto`}>
        BLOGS POSTS
      </div>
      <BlogList
        posts={posts}
        onItemClick={(post) => router.push(`/blog/${post.slug}`)}
      />
    </div>
  );
};

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter("blog");

  return { props: { posts: posts.filter((blog) => !blog.hidden) } };
}

export default BlogBody;
