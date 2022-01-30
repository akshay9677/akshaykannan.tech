import { Button } from "@nextui-org/react";

const Tags = ({ name }) => {
  return (
    <Button
      size="xs"
      flat
      className="mr-2"
      color="primary"
      auto
      clickable={false}
    >
      #{name}
    </Button>
  );
};

export default Tags;
