const AkCard = ({ title, content, click }) => {
  return (
    <div>
      <div className="py-2">
        <h1 className="uppercase tracking-wide text-sm text-blue-600 dark:text-blue-500 font-semibold pb-1">
          {title}
        </h1>
        <p className="text-sm mt-2">{content}</p>
        <div>
          <div onClick={click} className="cursor-pointer hover:opacity-70">
            <span className="text-sm">
              <i className="fab fa-github"></i> Learn More
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AkCard;
