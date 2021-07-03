const Tags = ({ name }) => {
  return (
    <span className="bg-red-100 text-red-500 dark:text-white dark:bg-red-500  rounded-full text-xs font-bold mr-1 md:mr-2 mb-2 px-2 md:px-4 py-1">
      {name}
    </span>
  );
};

export default Tags;
