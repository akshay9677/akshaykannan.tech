import { useRouter } from "next/router";
import AkTags from "../../components/common/AkTags";
import { Text } from "ak-palette";
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
      <div className="md:flex justify-center flex items-center p-1 mt-3">
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
      {currPosts
        .sort(function (a, b) {
          return b.id - a.id;
        })
        .map((blog, index) => {
          return (
            <div
              key={index}
              className="flex p-0.5 mt-2 cursor-pointer"
              onClick={handleBlogClick.bind(this, blog)}
            >
              <div className="flex flex-row rounded-lg p-2">
                <div className="flex flex-col break-words	 pL10 w-12/12">
                  <Text
                    size="xlarge"
                    className="font-semibold text-gray-600 dark:text-white break-normal "
                  >
                    {blog.title}
                  </Text>
                  <p className="text-sm text-gray-800	dark:text-gray-400 my-2">
                    {blog.body}
                  </p>

                  {blog.tags && (
                    <div className="py-2 flex flex-wrap">
                      {blog.tags.map((tag, index) => (
                        <AkTags key={index} name={tag} />
                      ))}
                    </div>
                  )}
                  <div className="flex flex-row items-center">
                    <div className="text-gray-500" style={{ fontSize: "14px" }}>
                      {blog.readingTime.text}
                    </div>
                    <div style={{ fontSize: "4px", padding: "7.2px 6px" }}>
                      <i className="fas fa-circle"></i>
                    </div>
                    <div className="text-gray-500" style={{ fontSize: "14px" }}>
                      {blog.sysCreatedTime}
                    </div>
                    <div style={{ fontSize: "4px", padding: "7.2px 6px" }}>
                      <i className="fas fa-circle"></i>
                    </div>
                    <div className="text-gray-500" style={{ fontSize: "14px" }}>
                      Akshay Kannan
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter("blog");

  return { props: { posts } };
}

export default BlogBody;
