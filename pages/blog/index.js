import { useRouter } from "next/router";
import BlogItem from "../../components/common/BlogItem";
import { getAllFilesFrontMatter } from "../../utils/mdx";
import { useState } from "react";

const BlogBody = ({ posts }) => {
  const [currPosts, setCurrPosts] = useState(posts);
  const [search, setSearchText] = useState("");
  const router = useRouter();

  const handleBlogClick = (blog) => {
    router.push(`/blog/${blog.slug}`);
  };
  return (
    <div className="pt-20 max-w-3xl px-8 lg:px-3 mx-auto pb-5">
      <div className="text-4xl font-bold px-2">Blog Posts</div>
      {/* <p className="text-sm text-gray-800	dark:text-gray-400 my-2 px-2">
        I have posted around {posts.length} posts and most of them are about
        front-end and software development.
      </p> */}
      <div className="md:flex justify-center flex items-center p-1 mt-5 mb-8">
        <input
          type="email"
          placeholder="Search blog post"
          autoComplete="off"
          value={search}
          onChange={(event) => {
            setSearchText(event.target.value);
            if (event.target.value === "") {
              setCurrPosts(posts);
            } else {
              setCurrPosts(
                posts.filter((val) => {
                  let titleText = val.title.toLowerCase();
                  let searchText = search.toLowerCase();
                  return (
                    titleText === searchText || titleText.includes(searchText)
                  );
                })
              );
            }
          }}
          className="w-full	px-3 py-2 mr-3 text-gray-900 border border-transparent rounded shadow focus:outline-none dark:bg-gray-900 dark:text-gray-200 focus:ring-2  focus:ring-blue-300 focus:border-transparent"
        />
      </div>
      <div className="px-2">
        {currPosts
          .sort(function (a, b) {
            return b.id - a.id;
          })
          .map((blog, index) => {
            return (
              <BlogItem
                key={index}
                blog={blog}
                onItemClick={handleBlogClick.bind(this, blog)}
              />
            );
          })}
      </div>
    </div>
  );
};

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter("blog");

  return { props: { posts } };
}

export default BlogBody;
