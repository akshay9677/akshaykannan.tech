const AkCard = ({ title, content, click }) => {
  return (
    <div>
      <div className="py-2">
        <h1 className="uppercase tracking-wide text-sm text-blue-600 dark:text-blue-500 font-semibold pb-1">
          {title}
        </h1>
        <p className="text-sm mt-1">{content}</p>
        <div className="py-2">
          <div onClick={click} className="pointer">
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
