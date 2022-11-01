import { Card, Text } from "@nextui-org/react";
import Image from "next/image";

const ProsCons = ({ isPro, header, list }) => {
  return (
    <Card bordered css={{ margin: "20px 0px" }}>
      <Card.Header css={{ paddingBottom: "0px" }}>
        <Image
          src={isPro ? "/icons/tick.svg" : "/icons/cross.svg"}
          width={26}
          height={26}
        />
        <Text h5 css={{ padding: "0px 0px 0px 8px" }}>
          {header}
        </Text>
      </Card.Header>
      <ul>
        {list.map((listItem) => {
          return <li>{listItem}</li>;
        })}
      </ul>
    </Card>
  );
};

export default ProsCons;
