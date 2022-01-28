import { Text } from "@nextui-org/react";

const Tags = ({ name }) => {
  return (
    <span className="bg-[#006FF3] rounded-md font-bold mr-1 md:mr-2 mb-3 px-2 md:px-4 py-0.5">
      <Text small margin="0px" color="#fff">
        # {name}
      </Text>
    </span>
  );
};

export default Tags;
