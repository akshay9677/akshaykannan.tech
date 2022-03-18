const pageNotFound = () => {
  return (
    <div
      className="flex flex-col items-center justify-center"
      style={{ height: "87vh" }}
    >
      <div className="flex flex-row mb-5">
        <div className="pr-3" style={{ borderRight: "1px solid" }}>
          404
        </div>
        <div className="pl-3">Page Not found</div>
      </div>
    </div>
  );
};

export default pageNotFound;
