import React from "react";

import { useHistory } from "react-router-dom";

import AkTags from "../ak-components/AkTags";

export const BLOG_LIST = [
  {
    email: "akshaykannan9677@gmail.com",
    likes: 100,
    subject: "Webassembly - a brief overview",
    sysCreatedTime: "July 3, 2021",
    tags: ["Web Assembly", "Javascript", "Machine Language", "Assembly Script"],
    __v: 0,
    _id: "6032245c0b8c9646a0f13f4fd",
    body: `Have you ever wondered how complex web apps like figma or google earth were able to scale? 
    Building such a complex apps only with javascript is not optimal`,
  },
  {
    email: "akshaykannan9677@gmail.com",
    likes: 100,
    subject: "When you should opt for typescript ?",
    sysCreatedTime: "Feb 21, 2021",
    tags: ["Typescript", "Javascript", "Static Programming", "TSC"],
    __v: 0,
    _id: "6032245c0b8c9646a0f12f2b",
    body: `Typescript is gaining a lot of popularity in recent days and also I have been planning
    to learn Typescript for a really long time`,
  },
  {
    email: "akshaykannan9677@gmail.com",
    likes: 5,
    subject: "Writing a custom eslint plugin",
    sysCreatedTime: "Feb 07, 2021",
    tags: ["ESLint", "Javascript", "AST", "Espree"],
    __v: 0,
    _id: "602010e1aa66c40048eda73e",
    body: `Developers have different code writing styles, so when it comes to collabrations people face a lot of problems in understanding other developers code. So we have
    to ensure a common coding style...`,
  },
  {
    email: "akshaykannan9677@gmail.com",
    likes: 6,
    subject: "5 Most Important ES2020 features JS",
    sysCreatedTime: "Dec 25, 2020",
    tags: ["Javascript", "ES2020"],
    _id: "5fe57ec407543e5777d060ec",
    body: `ES (ECMA Standard) defines the ECMAScript Language. Since the publication of the first edition in 1997, ECMAScript has become the world’s most widely used general-purpose programming languages...`,
  },
];

const BlogBody = (props) => {
  const history = useHistory();

  const styles = {
    avatar: {
      borderRadius: "0.5rem",
      background: "#DC3545",
      width: "2.5rem",
      height: "2.5rem",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    blogContainer: {
      overflowY: "auto",
      minHeight: "45rem",
    },
  };

  const handleBlogClick = (blog) => {
    history.push(`/blogs/${blog._id}`);
  };
  return (
    <div style={styles.blogContainer} className="hideScroll h-screen">
      {BLOG_LIST.map((blog) => {
        return (
          <div key={blog._id} className="flex  justify-center p-0.5 mt-3">
            <div className="flex flex-row w-11/12 sm:w-10/12 rounded-lg p-2">
              <div className="my-4 mx-1">
                <div className="w-10 h-10 rounded-lg text-2xl text-white flex justify-center items-center bg-red-500">
                  {blog.email.slice(0, 1).toUpperCase()}
                </div>
              </div>
              <div className="flex flex-col break-words	 pL10 w-12/12">
                <div
                  className="break-normal	pointer text-sm sm:text-lg"
                  style={{ fontWeight: "500" }}
                  onClick={handleBlogClick.bind(this, blog)}
                >
                  {blog.subject}
                </div>
                <p
                  className="text-sm text-gray-800	dark:text-gray-400 my-1"
                  onClick={handleBlogClick.bind(this, blog)}
                >
                  {blog.body}
                </p>

                {blog.tags && (
                  <div className="py-2 flex flex-wrap">
                    {blog.tags.map((tag, index) => (
                      <AkTags key={index} name={tag} />
                    ))}
                  </div>
                )}
                <div className="flex-row">
                  <div className="text-gray-500" style={{ fontSize: "12px" }}>
                    {blog.sysCreatedTime}
                  </div>
                  <div style={{ fontSize: "4px", padding: "7.2px 6px" }}>
                    <i className="fas fa-circle"></i>
                  </div>
                  <div className="text-gray-500" style={{ fontSize: "12px" }}>
                    akshaykannan9677@gmail.com
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
      <footer className="flex justify-center py-3" style={{ color: "#888" }}>
        © Akshay Kannan
      </footer>
    </div>
  );
};

export default BlogBody;
