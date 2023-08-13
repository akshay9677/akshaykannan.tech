import { Card, Text } from "@nextui-org/react";

const AkCard = ({ title, content, click }) => {
  return (
    <Card clickable isHoverable isPressable onClick={click}>
      <div className="p-3">
        <Text h4 className="pb-2">
          {" "}
          <span className="text-gradient">{title}</span>
        </Text>
        <p className="text-sm">{content}</p>
      </div>
    </Card>
  );
};

export default AkCard;
