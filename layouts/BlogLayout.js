import AkTags from "../components/common/AkTags";

export default function BlogLayout({ children, frontMatter }) {
  return (
    <div className="pt-24 max-w-3xl px-8 mx-auto pb-5 dark:text-gray-400">
      <div className="px-0 lg:px-3 xl:px-3">
        <div className="text-3xl font-bold dark:text-white">
          {frontMatter.title}
        </div>
        <div className="flex items-center py-3 text-sm">
          {frontMatter.sysCreatedTime}
          <div
            className="dark:text-white"
            style={{ fontSize: "4px", padding: "7.2px 6px" }}
          >
            <i className="fas fa-circle" />
          </div>
          Akshay Kannan
        </div>
        <div className="flex flex-wrap">
          {frontMatter.tags ? (
            frontMatter.tags.map((tag, index) => (
              <AkTags key={index} name={tag} />
            ))
          ) : (
            <span></span>
          )}
        </div>
      </div>
      {children}
    </div>
  );
}
