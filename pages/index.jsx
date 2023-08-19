import { getAllFilesFrontMatter } from "../utils/mdx.js";
import Card from "../src/components/Card.jsx";
import Intro from "../src/components/home/Intro.jsx";
import RecentBlogs from "../src/components/home/RecentBlogs.jsx";
import Timeline from "../src/components/home/Timeline.jsx";

function Main({ posts, isDark }) {
  return (
    <div className="px-4 lg:px-0 pb-5 relative mt-10 lg:mb-24">
      {/* <Card isDark={isDark} /> */}
      <Intro className="max-w-xl mx-auto z-10 relative" />
      <Timeline className="max-w-xl mx-auto z-10 relative" />
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
    .slice(0, 4);

  return { props: { posts } };
}

export default Main;
