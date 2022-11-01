import AkTags from "../../components/common/AkTags";
import Image from "next/image";
import { Text } from "@nextui-org/react";
import { Fragment } from "react";

const BlogItem = ({ blog, onItemClick }) => {
  return (
    <div
      className="rounded-lg py-2 w-full pL10 break-words cursor-pointer"
      onClick={onItemClick}
    >
      <Text h3 className="m-0">
        {blog.title}
      </Text>
      <Text>{blog.body}</Text>
      {blog.tags && (
        <div className="flex flex-wrap mt-2">
          {blog.tags.map((tag, index) => (
            <Fragment>
              <AkTags key={index} name={tag} />
              <span className="px-1.5"></span>
            </Fragment>
          ))}
        </div>
      )}
      <div className="flex flex-row items-center pt-2">
        <Text className="text-gray-500 mr-1" style={{ fontSize: "14px" }}>
          {blog.readingTime.text}
        </Text>
        <Image src="/icons/dot.svg" width={5} height={5} />
        <Text className="text-gray-500 ml-1" style={{ fontSize: "14px" }}>
          {blog.sysCreatedTime}
        </Text>
      </div>
    </div>
  );
};

export default BlogItem;
