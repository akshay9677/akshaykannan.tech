import AkButton from "./AkButton";

const AkCard = ({ title, content, image, click }) => {
  return (
    <div className="max-w-xs bg-white dark:bg-gray-800 shadow-lg rounded-xl overflow-hidden my-10 pointer">
      {image}
      <div className="px-2 py-2">
        <h1 className="uppercase tracking-wide text-sm text-indigo-500 font-semibold p-1">
          {title}
        </h1>
        <p className="text-sm mt-1">{content}</p>
        <div className="pt-5 py-3">
          <AkButton
            onClick={click}
            children={
              <span>
                Git <i className="fab fa-github"></i>
              </span>
            }
            loading={false}
          />
        </div>
      </div>
    </div>
  );
};

export default AkCard;
