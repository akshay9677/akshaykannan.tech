import { useRouter } from "next/router";
import BlogItem from "../../components/common/BlogItem";
import { getAllFilesFrontMatter } from "../../utils/mdx";
import { useState } from "react";
import { Text, Input } from "@nextui-org/react";

const BlogBody = ({ posts }) => {
  const [currPosts, setCurrPosts] = useState(posts);
  const [search, setSearchText] = useState("");
  const router = useRouter();

  const handleBlogClick = (blog) => {
    router.push(`/blog/${blog.slug}`);
  };
  return (
    <div className="mt-20 max-w-3xl px-8 lg:px-3 mx-auto pb-5 relative z-50">
      <Text h2>Blog Posts</Text>
      {/* <p className="text-sm text-gray-800	dark:text-gray-400 my-2 px-2">
        I have posted around {posts.length} posts and most of them are about
        front-end and software development.
      </p> */}
      <div className="mt-5 mb-8">
        <Input
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
          width="100%"
          bordered
          shadow
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

  return { props: { posts: posts.filter((blog) => !blog.hidden) } };
}

export default BlogBody;
