import { Card, Text } from "@nextui-org/react";
import Image from "next/image";

const ProsCons = ({ isPro, header, list }) => {
  return (
    // <Card bordered css={{ margin: "20px 0px" }}>
    //   <Card.Header css={{ paddingBottom: "0px" }}>
    //     <Image
    //       src={isPro ? "/icons/tick.svg" : "/icons/cross.svg"}
    //       width={26}
    //       height={26}
    //     />
    //     <Text h5 css={{ padding: "0px 0px 0px 8px" }}>
    //       {header}
    //     </Text>
    //   </Card.Header>
    // </Card>
    <div
      className="p-2 border my-4 rounded-lg border-content-primary/10 bg-content-primary/5"
      style={{ backdropFilter: "blur(6px)" }}
    >
      <div className="flex items-center gap-1.5 mb-2">
        <Image
          src={isPro ? "/icons/tick.svg" : "/icons/cross.svg"}
          width={16}
          height={16}
        />
        <div className="text-sub-heading">{header}</div>
      </div>
      <div>
        {list.map((listItem) => {
          return (
            <div className="xs my-1 text-content-primary/80">- {listItem}</div>
          );
        })}
      </div>
    </div>
  );
};

export default ProsCons;
