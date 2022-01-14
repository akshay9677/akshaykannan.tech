import Image from "next/image";

const AkCard = ({ title, content, click }) => {
  return (
    <div>
      <div className="py-2">
        <h1 className="uppercase tracking-wide text-sm text-blue-600 dark:text-blue-500 font-semibold pb-1">
          {title}
        </h1>
        <p className="text-sm mt-2">{content}</p>
        <div>
          <div
            onClick={click}
            className="cursor-pointer hover:opacity-50 flex self-center"
          >
            <Image src="/icons/github.svg" width="18px" height="18px" />
            <span className="ml-2 text-sm"> Learn More</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AkCard;
