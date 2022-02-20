import { Text } from "@nextui-org/react";

const Tags = ({ name }) => {
  return (
    <div className="text-[#006FF3] px-2.5 py-0.5 flex justify-center items-center bg-[#006ff32e] rounded-md">
      <Text size={12} color="inherit" weight="bold">
        {name}
      </Text>
    </div>
  );
};

export default Tags;
