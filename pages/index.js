import React from "react";

import IntroPage from "../components/IntroPage.jsx";
import Contact from "../components/Contact.jsx";
import Project from "../components/Projects";
import RecentBlogs from "../components/RecentBlogs";
import { getAllFilesFrontMatter } from "../utils/mdx.js";

function Main({ posts }) {
  return (
    <div className="max-w-3xl px-8 lg:px-3 mx-auto pb-5 z-50 relative">
      <IntroPage />
      <RecentBlogs posts={posts} />
      <Project />
      <Contact />
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
    .slice(0, 3);

  return { props: { posts } };
}

export default Main;
