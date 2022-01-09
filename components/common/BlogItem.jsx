import AkTags from "../../components/common/AkTags";
import Image from "next/image";

const BlogItem = ({ blog, onItemClick }) => {
  return (
    <div className="flex mt-2 cursor-pointer" onClick={onItemClick}>
      <div className="flex flex-row rounded-lg py-2">
        <div className="flex flex-col break-words	 pL10 w-12/12">
          <div className="font-semibold text-xl dark:text-white break-normal">
            {blog.title}
          </div>
          <p className="text-sm text-gray-800	dark:text-gray-400 my-2">
            {blog.body}
          </p>

          {blog.tags && (
            <div className="py-2 flex flex-wrap">
              {blog.tags.map((tag, index) => (
                <AkTags key={index} name={tag} />
              ))}
            </div>
          )}
          <div className="flex flex-row items-center">
            <div className="text-gray-500 mr-1.5" style={{ fontSize: "14px" }}>
              {blog.readingTime.text}
            </div>
            <Image src="/icons/dot.svg" width="5px" height="5px" />
            <div className="text-gray-500 mx-1.5" style={{ fontSize: "14px" }}>
              {blog.sysCreatedTime}
            </div>
            <Image src="/icons/dot.svg" width="5px" height="5px" />
            <div className="text-gray-500 ml-1.5" style={{ fontSize: "14px" }}>
              Akshay Kannan
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogItem;
