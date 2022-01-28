import { Card, Link, Text } from "@nextui-org/react";

const AkCard = ({ title, content, click }) => {
  return (
    <Card clickable hoverable onClick={click}>
      <div className="py-2">
        <Text h4>
          {" "}
          <span className="text-gradient">{title}</span>
        </Text>
        <p className="text-sm mt-2">{content}</p>
      </div>
    </Card>
  );
};

export default AkCard;
