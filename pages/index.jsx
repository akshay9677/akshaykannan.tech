import { getAllFilesFrontMatter } from "../utils/mdx.js";
import Card from "../src/components/Card.jsx";
import Intro from "../src/components/home/Intro.jsx";
import RecentBlogs from "../src/components/home/RecentBlogs.jsx";

function Main({ posts, isDark }) {
  return (
    <div className="px-8 lg:px-0 pb-5 z-50 relative mt-10 z-10">
      <Intro className="max-w-xl mx-auto" />
      <RecentBlogs posts={posts} className="max-w-xl mx-auto" />
    </div>
  );
}

export async function getStaticProps() {
  let posts = await getAllFilesFrontMatter("blog");
  posts = posts
    .filter((blog) => !blog.hidden)
    .sort(function (a, b) {
      return b.id - a.id;
    })
    .slice(0, 5);

  return { props: { posts } };
}

export default Main;
