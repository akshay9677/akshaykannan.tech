import { getAllFilesFrontMatter } from "../../utils/mdx";
import BlogList from "../../src/components/blog/BlogList";
import { useRouter } from "next/router";

const BlogBody = ({ groupedPosts, groupKeys }) => {
  const router = useRouter();
  return (
    <div className="mt-10 mb-24">
      <div
        className={`text-brand-primary text-heading mb-4 max-w-xl mx-auto px-6 lg:px-0`}
      >
        BLOG POSTS
      </div>
      <div className="max-w-xl mx-auto leading-6 px-6 lg:px-0">
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
              <BlogList
                posts={posts}
                onItemClick={(post) => router.push(`/blog/${post.slug}`)}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export async function getStaticProps() {
  let posts = await getAllFilesFrontMatter("blog");
  posts = posts
    .filter((blog) => !blog.hidden)
    .sort(function (a, b) {
      return b.id - a.id;
    });
  let groupedPosts = {};
  posts.forEach((post) => {
    let { sysCreatedTime } = post || {};
    let year = sysCreatedTime.split(", ")[1];
    if (groupedPosts[year]) {
      groupedPosts[year] = [...groupedPosts[year], post];
    } else {
      groupedPosts[year] = [post];
    }
  });
  let groupKeys = Object.keys(groupedPosts);
  groupKeys = groupKeys.sort().reverse();
  let modifiedGrp = {};
  groupKeys.forEach((key) => {
    modifiedGrp[key] = groupedPosts[key];
  });
  return {
    props: {
      groupedPosts: modifiedGrp,
      groupKeys,
    },
  };
}

export default BlogBody;
