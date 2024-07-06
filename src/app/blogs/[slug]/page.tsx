import { getBlogPosts } from "@/app/db/blog";
import { MDXRemote } from "next-mdx-remote/rsc";
import Image from "next/image";
import ProsCons from "@/components/blog/ProsCons";
import { highlight } from "sugar-high";

const BlogPosts = async ({ params }: any) => {
  let posts = getBlogPosts();
  let currentPost: any = posts.find((post) => post.slug === params.slug);

  let components = {
    Image: (props: any) => (
      <div className="mt-2 mb-4 border border-border-primary rounded-lg overflow-hidden">
        <Image alt="" {...props} />
      </div>
    ),
    ProsCons: (props: any) => <ProsCons {...props} />,
    code: ({ children, ...props }: any) => {
      let codeHTML = highlight(children);
      return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />;
    },
  };
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div className="max-w-xl w-full mt-6">
        <div className="text-3xl font-medium leading-[-1%] py-4">
          {currentPost.metadata.title}
        </div>
        <div className="blog-content mb-6">
          <MDXRemote source={currentPost.content} components={components} />
        </div>
      </div>
    </div>
  );
};

export default BlogPosts;
