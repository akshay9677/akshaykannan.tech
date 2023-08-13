const BlogItem = ({ post }) => {
  return (
    <div className="px-2.5 py-2 cursor-pointer">
      <div className="text-lg">{post.title}</div>
      <div className="text-content-primary/80 mt-2 text-sm">{post.body}</div>
      <div className="flex text-xs mt-1 gap-2 text-content-primary/60">
        <div>{post.readingTime.text}</div>
        <div>{post.sysCreatedTime}</div>
      </div>
    </div>
  );
};

export default BlogItem;
