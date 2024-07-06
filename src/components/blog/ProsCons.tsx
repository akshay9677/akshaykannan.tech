import Image from "next/image";

const ProsCons = ({ isPro, header, list }: any) => {
  return (
    <div
      className="p-2 border my-4 rounded-lg border-content-primary/10 bg-container-secondary"
      style={{ backdropFilter: "blur(6px)" }}
    >
      <div className="flex items-center gap-1.5 mb-2">
        <Image
          src={isPro ? "/blog/tick-circle.svg" : "/blog/close-circle.svg"}
          width={20}
          height={20}
          alt="pros-cons"
        />
        <div className="text-md font-medium">{header}</div>
      </div>
      <div>
        {list.map((listItem: any, index: number) => {
          return (
            <div key={index} className="xs my-1 text-sm text-content-secondary">
              - {listItem}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProsCons;
