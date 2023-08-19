const BlogItem = ({ post }) => {
  return (
    <div className="p-2.5 cursor-pointer">
      <div className="text-sub-heading text-content-primary">{post.title}</div>
      <div className="text-content-primary/80 mt-1.5 text-sm">{post.body}</div>
      <div className="flex text-xs mt-1 gap-2 text-content-primary/60">
        <div>{post.readingTime.text}</div>
        <div>{post.sysCreatedTime}</div>
      </div>
    </div>
  );
};

export default BlogItem;
