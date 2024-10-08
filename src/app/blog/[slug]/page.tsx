import { getBlogPosts } from "@/app/db/blog";
import { MDXRemote } from "next-mdx-remote/rsc";
import Image from "next/image";
import ProsCons from "@/components/blog/ProsCons";
import { highlight } from "sugar-high";
import ClipPathComponents from "@/components/blog/clip-path";

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
    ClipPath: (props: any) => <ClipPathComponents {...props} />,
  };
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div className="max-w-xl w-full mt-6 px-6 lg:px-0">
        <div className="text-3xl font-medium leading-[-1%] pb-2 tracking-tight">
          {currentPost.metadata.title}
        </div>
        <div className="flex pb-6 gap-2 flex items-center">
          <div className="text-xs text-content-secondary">
            {currentPost.metadata.readingtime.text}
          </div>
          <div className="w-1 h-1 rounded-3xl bg-content-primary"></div>
          <div className="text-xs text-content-secondary">
            {currentPost.metadata.sysCreatedTime}
          </div>
        </div>
        <div className="blog-content mb-6 relative">
          <MDXRemote source={currentPost.content} components={components} />
        </div>
      </div>
    </div>
  );
};

export default BlogPosts;
