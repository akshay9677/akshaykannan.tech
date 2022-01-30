import AkTags from "../../components/common/AkTags";
import Image from "next/image";
import { Text } from "@nextui-org/react";

const BlogItem = ({ blog, onItemClick }) => {
  return (
    <div
      className="rounded-lg py-2 w-full pL10 break-words cursor-pointer"
      onClick={onItemClick}
    >
      <Text h3>{blog.title}</Text>
      <Text className="my-2">{blog.body}</Text>
      {blog.tags && (
        <div className="flex flex-wrap mt-2">
          {blog.tags.map((tag, index) => (
            <AkTags key={index} name={tag} />
          ))}
        </div>
      )}
      <div className="flex flex-row items-center pt-3">
        <Text
          className="text-gray-500"
          margin="0 6px 0 0"
          style={{ fontSize: "14px" }}
        >
          {blog.readingTime.text}
        </Text>
        <Image src="/icons/dot.svg" width="5px" height="5px" />
        <Text
          className="text-gray-500"
          margin="0 6px 0 6px"
          style={{ fontSize: "14px" }}
        >
          {blog.sysCreatedTime}
        </Text>
      </div>
    </div>
  );
};

export default BlogItem;
