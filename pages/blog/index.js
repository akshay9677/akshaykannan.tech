import { useRouter } from "next/router";
import AkTags from "../../components/common/AkTags";
import { Text } from "ak-palette";
import { getAllFilesFrontMatter } from "../../utils/mdx";

const BlogBody = ({ posts }) => {
  const router = useRouter();

  const handleBlogClick = (blog) => {
    router.push(`/blog/${blog.slug}`);
  };
  return (
    <div className="pt-20 max-w-3xl px-8 lg:px-3 mx-auto pb-5">
      {posts
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
