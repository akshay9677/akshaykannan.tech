import AkTags from "../../components/common/AkTags";
import Image from "next/image";
import { Text } from "@nextui-org/react";

const BlogItem = ({ blog, onItemClick }) => {
  return (
    <div className="flex mt-2 cursor-pointer" onClick={onItemClick}>
      <div className="flex flex-row rounded-lg py-2">
        <div className="flex flex-col break-words	 pL10 w-12/12">
          <Text h3>{blog.title}</Text>
          <Text className="my-2">{blog.body}</Text>

          {blog.tags && (
            <div className="py-2 flex flex-wrap">
              {blog.tags.map((tag, index) => (
                <AkTags key={index} name={tag} />
              ))}
            </div>
          )}
          <div className="flex flex-row items-center">
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
            <Image src="/icons/dot.svg" width="5px" height="5px" />
            <Text
              className="text-gray-500"
              margin="0 0 0 6px"
              style={{ fontSize: "14px" }}
            >
              Akshay Kannan
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogItem;
