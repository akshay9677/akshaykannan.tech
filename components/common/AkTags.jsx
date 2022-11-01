import { Badge } from "@nextui-org/react";

const Tags = ({ name }) => {
  return (
    <Badge color="primary" variant="flat" isSquared>
      {name}
    </Badge>
  );
};

export default Tags;
